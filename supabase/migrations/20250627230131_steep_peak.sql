/*
  # Create contact messages table for contact form

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `phone` (text) - Customer phone
      - `email` (text) - Customer email
      - `service_interest` (text) - Service they're interested in
      - `message` (text) - Contact message
      - `status` (text) - Message status (new, read, replied)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public to create messages
    - Add policy for authenticated users to manage messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  service_interest text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public to create contact messages
CREATE POLICY "Public can create contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users (admin) to manage all contact messages
CREATE POLICY "Authenticated users can manage contact messages"
  ON contact_messages
  FOR ALL
  TO authenticated
  USING (true);

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();