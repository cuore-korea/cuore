/*
  # Create consultations table for booking system

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `phone` (text) - Customer phone
      - `email` (text) - Customer email
      - `service_type` (text) - Type of consultation/service
      - `preferred_date` (date) - Preferred consultation date
      - `preferred_time` (text) - Preferred time slot
      - `message` (text) - Additional message from customer
      - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for public to create consultations
    - Add policy for authenticated users to read their own consultations
    - Add policy for admin to manage all consultations
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow public to create consultations
CREATE POLICY "Public can create consultations"
  ON consultations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow users to read their own consultations by email
CREATE POLICY "Users can read own consultations"
  ON consultations
  FOR SELECT
  TO public
  USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Allow authenticated users (admin) to manage all consultations
CREATE POLICY "Authenticated users can manage consultations"
  ON consultations
  FOR ALL
  TO authenticated
  USING (true);

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_consultations_updated_at
  BEFORE UPDATE ON consultations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();