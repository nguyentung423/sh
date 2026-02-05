import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-50 pt-20">
      <div className="text-center px-4">
        <h1 className="font-heading text-9xl font-bold text-primary-500 mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold text-dark-900 mb-4">
          Không Tìm Thấy Trang
        </h2>
        <p className="text-dark-600 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Về Trang Chủ
          </Link>
          <Link href="/san-pham" className="btn-outline">
            Xem Sản Phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}
