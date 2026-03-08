export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "ai-tools" | "streaming" | "productivity";
  categoryName: string;
  price: number;
  priceLabel: string;
  originalPrice?: number;
  duration: string;
  image: string;
  logo: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  features: string[];
  pricing: {
    name: string;
    price: number;
    duration: string;
    features: string[];
    popular?: boolean;
  }[];
  usageGuide: {
    step: number;
    title: string;
    description: string;
  }[];
  warranty: string;
  available: boolean;
  trialDays?: number;
  slotsLeft?: number;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "chatgpt-business",
    name: "ChatGPT Business (Team)",
    shortName: "ChatGPT",
    category: "ai-tools",
    categoryName: "AI Tools",
    price: 50000,
    priceLabel: "50k",
    originalPrice: 625000,
    duration: "30 ngày",
    image: "/images/chatgpt-hero.png",
    logo: "/images/chatgpt-logo.png",
    description:
      "Truy cập đầy đủ tính năng ChatGPT Business/Team với giá siêu rẻ. GPT-4o, GPT-4, DALL-E 3, Advanced Data Analysis, và nhiều hơn nữa!",
    shortDescription: "GPT-4o, DALL-E 3, Code Interpreter - Đầy đủ tính năng",
    benefits: [
      "Truy cập GPT-4o, GPT-4 không giới hạn",
      "Sử dụng DALL-E 3 tạo ảnh AI",
      "Advanced Data Analysis (Code Interpreter)",
      "Tạo và sử dụng Custom GPTs",
      "Ưu tiên truy cập khi server cao tải",
      "Hỗ trợ file upload lên đến 512MB",
    ],
    features: [
      "Unlimited GPT-4o messages",
      "DALL-E 3 image generation",
      "Code Interpreter / Advanced Data Analysis",
      "Custom GPTs access",
      "Priority access",
      "32K context window",
      "Browse with Bing",
      "Plugin support",
    ],
    pricing: [
      {
        name: "Basic",
        price: 50000,
        duration: "30 ngày",
        features: [
          "Slot chia sẻ trong team",
          "Đầy đủ tính năng GPT-4o",
          "Bảo hành thay slot nếu die",
          "Hỗ trợ 24/7 qua Zalo",
        ],
      },
      {
        name: "Premium",
        price: 80000,
        duration: "30 ngày",
        features: [
          "Slot riêng, ít người dùng hơn",
          "Đầy đủ tính năng GPT-4o",
          "Bảo hành thay slot nếu die",
          "Ưu tiên hỗ trợ 24/7",
          "Tốc độ ổn định hơn",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Liên hệ mua slot",
        description:
          "Chat Zalo với shop để đặt mua hoặc nhận trial miễn phí 7 ngày",
      },
      {
        step: 2,
        title: "Nhận thông tin đăng nhập",
        description: "Shop sẽ gửi link invite + hướng dẫn đăng nhập chi tiết",
      },
      {
        step: 3,
        title: "Đăng nhập và sử dụng",
        description:
          "Accept invite, đăng nhập bằng email được cấp và bắt đầu sử dụng",
      },
      {
        step: 4,
        title: "Liên hệ nếu có vấn đề",
        description:
          "Bất kỳ lúc nào gặp lỗi, chat Zalo để được hỗ trợ ngay lập tức",
      },
    ],
    warranty:
      "Bảo hành thay slot mới nếu die trước 30 ngày. Không hoàn tiền nếu vi phạm TOS (spam, chia sẻ, lạm dụng).",
    available: true,
    trialDays: 7,
    slotsLeft: 10,
  },
  {
    id: "2",
    slug: "netflix-premium",
    name: "Netflix Premium 4K",
    shortName: "Netflix",
    category: "streaming",
    categoryName: "Streaming",
    price: 35000,
    priceLabel: "35k",
    originalPrice: 260000,
    duration: "30 ngày",
    image: "/images/netflix-hero.png",
    logo: "/images/netflix-logo.png",
    description:
      "Xem phim Netflix Premium 4K UHD trên mọi thiết bị với giá rẻ bất ngờ. Profile riêng, không lo bị đăng xuất.",
    shortDescription: "Profile riêng, 4K UHD, mọi thiết bị",
    benefits: [
      "Profile riêng, tên tuỳ chỉnh",
      "Xem 4K Ultra HD + HDR",
      "Hỗ trợ mọi thiết bị (TV, Phone, PC)",
      "Không quảng cáo",
      "Tải xuống xem offline",
      "Đăng nhập 1 thiết bị cùng lúc",
    ],
    features: [
      "4K Ultra HD + HDR",
      "Personal profile",
      "All devices supported",
      "Download for offline",
      "No ads",
      "Dolby Atmos audio",
    ],
    pricing: [
      {
        name: "Basic",
        price: 35000,
        duration: "30 ngày",
        features: [
          "1 Profile riêng",
          "4K Ultra HD",
          "Bảo hành thay slot",
          "Hỗ trợ Zalo",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Đặt mua qua Zalo",
        description: "Chat với shop để order và thanh toán",
      },
      {
        step: 2,
        title: "Nhận thông tin đăng nhập",
        description: "Shop gửi email/password + profile được assign",
      },
      {
        step: 3,
        title: "Đăng nhập Netflix",
        description: "Vào netflix.com hoặc app, đăng nhập và chọn đúng profile",
      },
      {
        step: 4,
        title: "Thưởng thức",
        description: "Xem phim thả ga không giới hạn!",
      },
    ],
    warranty: "Bảo hành thay slot nếu die. Không đổi password, không share.",
    available: true,
    slotsLeft: 15,
  },
  {
    id: "3",
    slug: "youtube-premium",
    name: "YouTube Premium",
    shortName: "YouTube",
    category: "streaming",
    categoryName: "Streaming",
    price: 25000,
    priceLabel: "25k",
    originalPrice: 79000,
    duration: "30 ngày",
    image: "/images/youtube-hero.png",
    logo: "/images/youtube-logo.png",
    description:
      "YouTube không quảng cáo, xem video background, YouTube Music Premium đi kèm. Trải nghiệm YouTube đỉnh cao!",
    shortDescription: "Không quảng cáo, background play, YouTube Music",
    benefits: [
      "Không quảng cáo trên mọi video",
      "Phát nhạc/video khi tắt màn hình",
      "YouTube Music Premium miễn phí",
      "Tải video xem offline",
      "Hỗ trợ mọi thiết bị",
    ],
    features: [
      "Ad-free videos",
      "Background play",
      "YouTube Music Premium",
      "Offline downloads",
      "YouTube Originals",
    ],
    pricing: [
      {
        name: "Standard",
        price: 25000,
        duration: "30 ngày",
        features: [
          "Tài khoản gia đình được invite",
          "Không quảng cáo",
          "YouTube Music đi kèm",
          "Bảo hành full thời gian",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Liên hệ shop",
        description: "Chat Zalo đặt mua YouTube Premium",
      },
      {
        step: 2,
        title: "Cung cấp Gmail",
        description: "Gửi địa chỉ Gmail bạn muốn được invite",
      },
      {
        step: 3,
        title: "Accept invite",
        description: "Vào Gmail, accept lời mời Family từ shop",
      },
      {
        step: 4,
        title: "Hoàn tất",
        description: "Xem YouTube và nghe nhạc không quảng cáo!",
      },
    ],
    warranty: "Bảo hành full thời gian đã mua. Re-invite nếu bị kick.",
    available: true,
    slotsLeft: 20,
  },
  {
    id: "4",
    slug: "spotify-premium",
    name: "Spotify Premium",
    shortName: "Spotify",
    category: "streaming",
    categoryName: "Streaming",
    price: 20000,
    priceLabel: "20k",
    originalPrice: 59000,
    duration: "30 ngày",
    image: "/images/spotify-hero.png",
    logo: "/images/spotify-logo.png",
    description:
      "Nghe nhạc Spotify Premium không quảng cáo, chất lượng cao, tải offline. Thư viện hàng triệu bài hát!",
    shortDescription: "Không quảng cáo, 320kbps, offline mode",
    benefits: [
      "Nghe nhạc không quảng cáo",
      "Chất lượng âm thanh 320kbps",
      "Tải nhạc nghe offline",
      "Skip không giới hạn",
      "Lyrics hiển thị real-time",
    ],
    features: [
      "Ad-free music",
      "320kbps audio quality",
      "Offline downloads",
      "Unlimited skips",
      "Lyrics display",
    ],
    pricing: [
      {
        name: "Family Slot",
        price: 20000,
        duration: "30 ngày",
        features: [
          "Invite vào Family Plan",
          "Đầy đủ tính năng Premium",
          "Bảo hành thay slot",
          "Hỗ trợ nhanh chóng",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Đặt mua",
        description: "Chat Zalo để order Spotify Premium",
      },
      {
        step: 2,
        title: "Gửi email Spotify",
        description: "Cung cấp email tài khoản Spotify của bạn",
      },
      {
        step: 3,
        title: "Nhận invite",
        description: "Check email và accept lời mời Family",
      },
      {
        step: 4,
        title: "Thưởng thức",
        description: "Mở Spotify và enjoy Premium!",
      },
    ],
    warranty: "Bảo hành trong thời gian sử dụng. Re-invite nếu có vấn đề.",
    available: true,
    slotsLeft: 25,
  },
  {
    id: "5",
    slug: "midjourney",
    name: "Midjourney Standard",
    shortName: "Midjourney",
    category: "ai-tools",
    categoryName: "AI Tools",
    price: 60000,
    priceLabel: "60k",
    originalPrice: 750000,
    duration: "30 ngày",
    image: "/images/midjourney-hero.png",
    logo: "/images/midjourney-logo.png",
    description:
      "Tạo ảnh AI đỉnh cao với Midjourney Standard. 15 giờ GPU/tháng, Relax mode không giới hạn!",
    shortDescription: "15h Fast GPU, Unlimited Relax mode",
    benefits: [
      "15 giờ Fast GPU generation",
      "Unlimited Relax mode",
      "Truy cập đầy đủ tính năng",
      "Stealth mode available",
      "Commercial usage rights",
    ],
    features: [
      "15h Fast GPU time",
      "Unlimited Relax mode",
      "Full feature access",
      "Stealth mode",
      "Commercial license",
    ],
    pricing: [
      {
        name: "Shared Slot",
        price: 60000,
        duration: "30 ngày",
        features: [
          "Slot trong team account",
          "15h Fast + Unlimited Relax",
          "Bảo hành full tháng",
          "Hướng dẫn sử dụng chi tiết",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Đặt mua slot",
        description: "Liên hệ Zalo để mua Midjourney slot",
      },
      {
        step: 2,
        title: "Tham gia Discord",
        description: "Join Discord server của shop để nhận account",
      },
      {
        step: 3,
        title: "Nhận hướng dẫn",
        description: "Shop gửi hướng dẫn sử dụng chi tiết",
      },
      {
        step: 4,
        title: "Bắt đầu tạo ảnh",
        description: "Sử dụng /imagine để tạo ảnh AI",
      },
    ],
    warranty: "Bảo hành trong tháng sử dụng. Không hoàn tiền nếu lạm dụng.",
    available: true,
    slotsLeft: 5,
  },
  {
    id: "6",
    slug: "canva-pro",
    name: "Canva Pro",
    shortName: "Canva",
    category: "productivity",
    categoryName: "Productivity",
    price: 30000,
    priceLabel: "30k",
    originalPrice: 300000,
    duration: "30 ngày",
    image: "/images/canva-hero.png",
    logo: "/images/canva-logo.png",
    description:
      "Canva Pro với đầy đủ templates, elements, và AI tools. Thiết kế chuyên nghiệp chưa bao giờ dễ dàng đến thế!",
    shortDescription: "Full templates, AI tools, Brand Kit",
    benefits: [
      "100M+ templates premium",
      "Background Remover",
      "Magic Resize",
      "Brand Kit",
      "AI-powered design tools",
      "100GB cloud storage",
    ],
    features: [
      "Premium templates",
      "AI design tools",
      "Background remover",
      "Magic resize",
      "Brand kit",
      "Team features",
    ],
    pricing: [
      {
        name: "Team Slot",
        price: 30000,
        duration: "30 ngày",
        features: [
          "Invite vào Canva Team",
          "Đầy đủ tính năng Pro",
          "Bảo hành thay slot",
          "Hỗ trợ khi cần",
        ],
        popular: true,
      },
    ],
    usageGuide: [
      {
        step: 1,
        title: "Liên hệ shop",
        description: "Chat Zalo để đặt mua Canva Pro",
      },
      {
        step: 2,
        title: "Gửi email",
        description: "Cung cấp email bạn muốn được invite",
      },
      {
        step: 3,
        title: "Accept invite",
        description: "Vào email và chấp nhận lời mời team",
      },
      {
        step: 4,
        title: "Thiết kế thôi",
        description: "Đăng nhập Canva và sáng tạo!",
      },
    ],
    warranty: "Bảo hành trong thời gian sử dụng.",
    available: true,
    slotsLeft: 12,
  },
];

export const categories = [
  { id: "ai-tools", name: "AI Tools", icon: "🤖" },
  { id: "streaming", name: "Streaming", icon: "📺" },
  { id: "productivity", name: "Productivity", icon: "💼" },
];

export const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    avatar: "/images/avatar-1.png",
    rating: 5,
    comment:
      "Dùng ChatGPT Business được 3 tháng rồi, GPT-4o nhanh và chính xác cực kỳ. Tiết kiệm được cả triệu so với mua gốc!",
    product: "ChatGPT Business",
  },
  {
    id: 2,
    name: "Trần Thị B",
    avatar: "/images/avatar-2.png",
    rating: 5,
    comment:
      "DALL-E 3 vẽ ảnh đẹp quá! Shop hỗ trợ nhiệt tình, có vấn đề là đổi slot ngay. 10 điểm!",
    product: "ChatGPT Business",
  },
  {
    id: 3,
    name: "Lê Minh C",
    avatar: "/images/avatar-3.png",
    rating: 5,
    comment:
      "Code Interpreter giúp mình xử lý data Excel nhanh gấp 10 lần. Đã giới thiệu cho cả team.",
    product: "ChatGPT Business",
  },
  {
    id: 4,
    name: "Phạm Hoàng D",
    avatar: "/images/avatar-4.png",
    rating: 5,
    comment:
      "Trial 7 ngày free rồi mua luôn gói 3 tháng. ChatGPT Business xịn quá, không thể thiếu!",
    product: "ChatGPT Business",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.available).slice(0, 4);
}

// Zalo configuration
export const ZALO_CONFIG = {
  id: "0123456789", // Replace with actual Zalo ID
  oaLink: "https://zalo.me/0123456789", // Replace with actual Zalo OA link
  getMessage: (product?: string) => {
    if (product) {
      return encodeURIComponent(`Tôi muốn mua ${product}`);
    }
    return encodeURIComponent("Xin chào, tôi muốn tư vấn mua slot");
  },
  getTrialMessage: (product?: string) => {
    if (product) {
      return encodeURIComponent(`Tôi muốn dùng thử ${product} miễn phí`);
    }
    return encodeURIComponent("Tôi muốn nhận trial miễn phí");
  },
};

export function getZaloLink(message?: string): string {
  const baseLink = ZALO_CONFIG.oaLink;
  if (message) {
    return `${baseLink}?text=${message}`;
  }
  return baseLink;
}
