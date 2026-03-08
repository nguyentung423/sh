"use client";

import { sendGAEvent } from "@next/third-parties/google";

const freeFeatures = [
  "Giới hạn lượt xử lý, thường xuyên bị gián đoạn giữa chừng.",
  "Mô hình AI cơ bản, chỉ phù hợp tra cứu thông tin đơn giản.",
  "Khả năng phân tích tài liệu và dữ liệu (Data/PDF) bị hạn chế.",
  "Tốc độ phản hồi chậm, bị delay trong giờ cao điểm.",
  "Hỗ trợ viết báo cáo, CV hoặc debug code chỉ ở mức độ bề mặt.",
];

const businessFeatures = [
  "Trải nghiệm mô hình AI thông minh nhất với khả năng suy luận (Reasoning) chuyên sâu.",
  "Dung lượng xử lý cao, đảm bảo mạch làm việc liên tục, không đứt đoạn.",
  "Xử lý mượt mà tài liệu phức tạp, báo cáo dài và phân tích dữ liệu chuyên nghiệp.",
  "Server ưu tiên VIP: Phản hồi tức thì, không độ trễ ngay cả khi hệ thống tải nặng.",
  "Trợ lý đắc lực: Debug code chuẩn xác, tối ưu CV và mô phỏng phỏng vấn (Mock Interview).",
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#0a0f1a] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Đột Phá Hiệu Suất Với Trợ Lý AI Chuyên Nghiệp
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-2">
            Đừng để những giới hạn của bản miễn phí làm chậm tiến độ học tập và
            dự án của bạn.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1: ChatGPT Free */}
          <div className="rounded-2xl bg-[#111827] border border-gray-800/50 p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl text-gray-400 font-semibold mb-6">
              Bản Free (Tiêu chuẩn)
            </h3>
            <div className="flex-1">
              <ul className="space-y-4">
                {freeFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-400/70 text-sm font-bold shrink-0">
                      ✗
                    </span>
                    <span className="text-gray-400 text-sm leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="border-t border-dashed border-gray-800 my-6" />
              <p>
                <span className="text-4xl font-bold text-gray-600">0đ</span>
                <span className="text-sm text-gray-600">/tháng</span>
              </p>
              <button
                disabled
                className="mt-2 w-full bg-transparent border border-gray-700 text-gray-500 font-semibold py-3 rounded-xl cursor-not-allowed"
              >
                Đang sử dụng Free
              </button>
              <p className="text-xs text-red-500/60 text-center mt-3">
                * Đánh đổi bằng thời gian và năng suất của bạn.
              </p>
            </div>
          </div>

          {/* Card 2: ChatGPT Business */}
          <div className="relative rounded-2xl bg-[#0f172a] border border-green-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] p-6 md:p-8 flex flex-col h-full">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              ⭐ Lựa Chọn Tối Ưu
            </span>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mt-2 mb-6">
              GPT Business (Khuyên dùng)
            </h3>

            <div className="flex-1">
              <ul className="space-y-4">
                {businessFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="mt-0.5 text-green-400 text-sm font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-200 text-sm leading-relaxed font-medium">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="mt-auto">
              <div className="border-t border-dashed border-gray-700 my-6" />
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-gray-500 line-through">
                  Giá gốc 799.000đ
                </span>
              </div>
              <p className="mt-1">
                <span className="text-4xl font-extrabold text-white">
                  Chỉ 50.000đ
                </span>
                <span className="text-sm text-gray-400">/tháng</span>
              </p>
              <a
                href="https://zalo.me/0374918396"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  sendGAEvent("event", "click_zalo_comparison", {
                    location: "comparison_card",
                  })
                }
                className="mt-2 w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-lg transition-all shadow-lg"
              >
                Nâng Cấp Ngay - 50k/Tháng
              </a>
              <p className="text-xs text-green-400 text-center mt-3">
                ✅ Kích hoạt trong 5 phút - Bảo hành 1 đổi 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
