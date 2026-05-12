export interface Product {
  id: string;
  mainCategory: '스킨케어' | '헤드스파 제품' | '헤어제품';
  subCategory: string;
  tag: string;
  name: string;
  description: string;
  spec: string;
}

export const products: Product[] = [
  // ============================
  // 1. 스킨케어 (Skin Care)
  // ============================
  {
    id: "sk-daily-2",
    mainCategory: "스킨케어",
    subCategory: "클렌징 및 세안",
    tag: "클렌징",
    name: "AXI 클렌징 오일 TC-a",
    description: "부드럽게 얽힌 피부에 부드럽게 녹는 풍부한 약용 클렌징",
    spec: "200mL"
  },
  {
    id: "sk-daily-9",
    mainCategory: "스킨케어",
    subCategory: "클렌징 및 세안",
    tag: "세안료",
    name: "AXI 리페어큐어 워시",
    description: "수분을 지키면서 씻는다.",
    spec: "100g"
  },
  {
    id: "sk-refresh-4",
    mainCategory: "스킨케어",
    subCategory: "기초 보습",
    tag: "화장수",
    name: "AXI 스파쿨링 아쿠아 미스트 RF",
    description: "슈트와 사람 형상의 탄산수를 담은 수분 미스트 \n 수도물의 염소를 2초만에 완벽 제거",
    spec: "85g"
  },
  {
    id: "sk-daily-7",
    mainCategory: "스킨케어",
    subCategory: "기초 보습",
    tag: "화장수",
    name: "AXI 리페어큐어 로션",
    description: "미즈미즈시 언제까지나 계속",
    spec: "200mL"
  },
  {
    id: "sk-daily-6",
    mainCategory: "스킨케어",
    subCategory: "기초 보습",
    tag: "유액",
    name: "AXI 리페어큐어 밀크",
    description: "튀는듯한 동동 피부에",
    spec: "60mL"
  },
  {
    id: "sk-daily-5",
    mainCategory: "스킨케어",
    subCategory: "기초 보습",
    tag: "크림",
    name: "AXI 리페어큐어 크림",
    description: "2종의 오일 이 수분을 스미즈미까지 채운다 ※카리오덴드론오리노센세씨유, 푸르케네티아 보르빌리스씨유(모두 보습 성분)",
    spec: "30g"
  },
  {
    id: "sk-daily-1",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "에센스",
    name: "AXI 엣센스 모이스트 TC",
    description: "수분의, 그 앞… 고보습 에센스",
    spec: "30mL"
  },
  {
    id: "sk-daily-4",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "미용액",
    name: "AXI 리페어큐어 세럼",
    description: "언제까지나 피부에 풍부한 빛을",
    spec: "20g"
  },
  {
    id: "sk-premium-1",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "미용액",
    name: "AXI 애타 브라이트 세럼 N",
    description: "친절함, 여기에 - 농밀함과 수분의 한계를 만끽",
    spec: "30mL"
  },
  {
    id: "sk-premium-2",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "미용액",
    name: "AXI 애타 프레셔스 크림 N",
    description: "주름, 늘어짐, 악건성, 기미",
    spec: "45g"
  },
  {
    id: "sk-special-1",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "스킨케어 기타",
    name: "AXI 에센셜 마스크 TC",
    description: "채워지는 피부에",
    spec: "30mL x 6장"
  },
  {
    id: "sk-refresh-3",
    mainCategory: "스킨케어",
    subCategory: "에센스 및 스페셜 케어",
    tag: "자외선 차단",
    name: "AXI 화이트 UV 베일 RF",
    description: "부드럽게 녹는 베일 같은 작용감으로, 자외선이나 낮의 건조로부터 피부를 보호합니다.",
    spec: "60g"
  },

  // ============================
  // 2. 헤드스파 제품 (Head Spa)
  // ============================
  {
    id: "hc-scalp-assist-1",
    mainCategory: "헤드스파 제품",
    subCategory: "두피 케어",
    tag: "두피 케어",
    name: "AXI 스켈프케어 클렌징 오일",
    description: "씻기 전, 지피를 겸비한, 지피의 클렌징 오일",
    spec: "150mL"
  },
  {
    id: "hc-scalp-assist-2",
    mainCategory: "헤드스파 제품",
    subCategory: "두피 케어",
    tag: "샴푸",
    name: "AXI 스파쿨링 스파 샴푸",
    description: "피부와 머리카락을 씻는 탄산 스파 샴푸",
    spec: "170g"
  },

  // ============================
  // 3. 헤어제품 (Hair Care)
  // ============================
  {
    id: "hc-michite-2",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "샴푸",
    name: "미치테 샴푸 K",
    description: "촉촉한 채우고 머리카락의 퍼짐, 정리하기 어려움, 굴곡, 와와츠키가 신경이 쓰이는 분에게",
    spec: "500mL"
  },
  {
    id: "hc-michite-1",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "트리트먼트",
    name: "미치테 트리트먼트 K",
    description: "촉촉한 채우고 머리카락의 퍼짐, 정리하기 어려움, 굴곡, 와와츠키가 신경이 쓰이는 분에게",
    spec: "500g"
  },
  {
    id: "hc-michite-4",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "샴푸",
    name: "미치테 샴푸 A",
    description: "깨끗이 가득 머리카락의 부드러운 느낌을 올리고 싶은 분에게",
    spec: "500mL"
  },
  {
    id: "hc-michite-3",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "트리트먼트",
    name: "미치테 트리트먼트 A",
    description: "깨끗이 가득 머리카락의 부드러운 느낌을 올리고 싶은 분에게",
    spec: "500g"
  },
  {
    id: "hc-michite-6",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "샴푸",
    name: "미치테 샴푸 S",
    description: "부드럽게 가득 머리에 탄력, 코시, 볼륨을 원하는 분에게",
    spec: "600mL"
  },
  {
    id: "hc-michite-5",
    mainCategory: "헤어제품",
    subCategory: "샴푸 및 트리트먼트",
    tag: "트리트먼트",
    name: "미치테 트리트먼트 S",
    description: "부드럽게 가득 머리에 탄력, 코시, 볼륨을 원하는 분에게",
    spec: "600g"
  },
  {
    id: "hc-michite-7",
    mainCategory: "헤어제품",
    subCategory: "인바스 스페셜 케어",
    tag: "트리트먼트",
    name: "미치테 헤어 콘센트레이트",
    description: "아름다운, 머리카락, 솔직하게",
    spec: "180g / 500g"
  },
  {
    id: "hc-michite-8",
    mainCategory: "헤어제품",
    subCategory: "인바스 스페셜 케어",
    tag: "트리트먼트",
    name: "미치테 리페어 세럼 K",
    description: "전문 모발 클리닉제품",
    spec: "500mL"
  }, 
  {
    id: "hc-michite-9",
    mainCategory: "헤어제품",
    subCategory: "아웃바스 및 스타일링",
    tag: "씻어내지 않는 트리트먼트",
    name: "미치테 아쿠아 스파쿨링 실드 S",
    description: "스택은 아름다운 머리카락을 잡는다.",
    spec: "200g"
  },
  {
    id: "hc-michite-10",
    mainCategory: "헤어제품",
    subCategory: "아웃바스 및 스타일링",
    tag: "씻어내지 않는 트리트먼트",
    name: "미치테 나이트 트리트먼트",
    description: "스택은 아름다운 머리카락을 잡는다.",
    spec: "300g"
  },
  {
    id: "hc-michite-11",
    mainCategory: "헤어제품",
    subCategory: "아웃바스 및 스타일링",
    tag: "씻어내지 않는 트리트먼트",
    name: "미치테 헤어 밀크",
    description: "부드러운 우유가 구석구석까지 닿는다. 머리 부드럽게 부드럽게 촉촉한.",
    spec: "100mL"
  },
  {
    id: "hc-michite-12",
    mainCategory: "헤어제품",
    subCategory: "아웃바스 및 스타일링",
    tag: "씻어내지 않는 트리트먼트",
    name: "미치테 헤어 오일 UV",
    description: "경쾌한 오일이, 계속 기분 좋게. 머리 자외선으로부터 보호 *, 빛나 퍼진다. ※1 SPF・PA 측정치는 피부에 대한 자외선 방어능을 나타낸 것입니다.",
    spec: "100mL"
  },
  {
    id: "hc-michite-13",
    mainCategory: "헤어제품",
    subCategory: "아웃바스 및 스타일링",
    tag: "씻어내지 않는 트리트먼트",
    name: "미치테 스타일키프",
    description: "소프트타입 스프레이",
    spec: "220g"
  }
];