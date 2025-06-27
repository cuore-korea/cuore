/*
  # Insert sample Korean beauty products

  1. Sample Data
    - Insert sample products with Korean names and descriptions
    - Include various categories and price ranges
    - Set up realistic product data for the beauty website
*/

INSERT INTO products (
  name_ko,
  name_en,
  category,
  description_ko,
  price,
  original_price,
  image_url,
  benefits,
  rating,
  review_count,
  is_featured,
  stock_quantity
) VALUES
(
  '퓨어 에센스 세럼',
  'Pure Essence Serum',
  '에센스',
  '깊은 보습과 영양 공급으로 피부를 촉촉하게 가꿔주는 프리미엄 에센스입니다. 자연에서 추출한 순수 성분으로 피부 깊숙이 스며들어 건강한 윤기를 선사합니다.',
  89000,
  110000,
  'https://images.pexels.com/photos/7755228/pexels-photo-7755228.jpeg',
  ARRAY['깊은 보습', '영양 공급', '탄력 개선'],
  4.9,
  342,
  true,
  50
),
(
  '골든 리프팅 크림',
  'Golden Lifting Cream',
  '크림',
  '24K 골드 성분으로 피부 탄력과 윤기를 동시에 선사하는 럭셔리 크림입니다. 콜라겐과 펩타이드가 피부 깊숙이 침투하여 주름을 개선하고 탄력을 강화합니다.',
  120000,
  145000,
  'https://images.pexels.com/photos/7755241/pexels-photo-7755241.jpeg',
  ARRAY['탄력 강화', '윤기 개선', '주름 완화'],
  4.8,
  256,
  true,
  30
),
(
  '바이탈 클렌징 폼',
  'Vital Cleansing Foam',
  '클렌징',
  '부드럽고 촘촘한 거품으로 피부에 자극 없이 깊숙한 세정을 도와주는 클렌징 폼입니다. 천연 보습 성분이 세안 후에도 피부를 촉촉하게 유지해줍니다.',
  32000,
  42000,
  'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg',
  ARRAY['순한 세정', '수분 보존', '모공 케어'],
  4.7,
  189,
  false,
  80
),
(
  '하이드라 토너',
  'Hydra Toner',
  '토너',
  '히알루론산과 천연 보습 성분으로 피부 깊숙까지 수분을 공급하는 토너입니다. 세안 후 첫 단계로 사용하여 피부 결을 정돈하고 다음 단계 제품의 흡수를 도와줍니다.',
  65000,
  78000,
  'https://images.pexels.com/photos/7755224/pexels-photo-7755224.jpeg',
  ARRAY['수분 충전', '피부 진정', '각질 케어'],
  4.9,
  423,
  true,
  60
),
(
  '비타민 C 마스크',
  'Vitamin C Mask',
  '마스크',
  '순수 비타민 C로 피부 톤을 밝혀주고 생기를 불어넣어주는 집중 케어 마스크입니다. 일주일에 2-3회 사용으로 맑고 화사한 피부를 만들어줍니다.',
  45000,
  58000,
  'https://images.pexels.com/photos/7755235/pexels-photo-7755235.jpeg',
  ARRAY['톤업 효과', '생기 부여', '피부 보호'],
  4.8,
  312,
  false,
  40
),
(
  '콜라겐 부스터 앰플',
  'Collagen Booster Ampoule',
  '앰플',
  '저분자 콜라겐과 펩타이드로 피부 탄력과 복원력을 높여주는 고농축 앰플입니다. 집중 케어가 필요한 부위에 사용하여 즉각적인 효과를 경험할 수 있습니다.',
  95000,
  115000,
  'https://images.pexels.com/photos/7755243/pexels-photo-7755243.jpeg',
  ARRAY['탄력 복원', '주름 개선', '피부 재생'],
  4.9,
  287,
  true,
  25
);