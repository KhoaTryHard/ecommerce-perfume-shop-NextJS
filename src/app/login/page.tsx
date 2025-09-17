"use client";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const btnTop = document.querySelector<HTMLButtonElement>(".btn-top");
    const toggleTop = () => {
      if (!btnTop) return;
      if (window.scrollY > 300) btnTop.classList.add("show");
      else btnTop.classList.remove("show");
    };
    window.addEventListener("scroll", toggleTop);
    btnTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    toggleTop();
    return () => window.removeEventListener("scroll", toggleTop);
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="/home" className="brand">SD Parfum</a>
        </div>
      </header>

      <main>
        <div className="login-container">
          <h1 className="center">Đăng nhập</h1>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" id="username" name="username" placeholder="Email hoặc SĐT" required />
            <input type="password" id="password" name="password" placeholder="Mật Khẩu" required />
            <button type="submit">Đăng nhập</button>
          </form>
          <div className="login-extra">
            <p><a href="#">Quên mật khẩu?</a></p>
            <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-social">
          <a href="#" aria-label="Địa chỉ"><i className="fa-solid fa-location-dot" /></a>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          <a href="#" aria-label="Hotline"><i className="fa-solid fa-phone" /></a>
        </div>

        <div className="footer-columns container">
          <div className="footer-col">
            <h3>GIỚI THIỆU</h3>
            <ul>
              <li><a href="#">Giới thiệu về SD Parfum</a></li>
              <li><a href="#">Quan điểm kinh doanh</a></li>
              <li><a href="#">Bản quyền &amp; Sở hữu</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>CHÍNH SÁCH CÔNG TY</h3>
            <ul>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật thông tin</a></li>
              <li><a href="#">Chính sách vận chuyển, giao nhận, kiểm hàng</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Nhượng Quyền Thương Hiệu</a></li>
              <li><a href="#">Trả góp 0% qua thẻ tín dụng</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>TRỢ GIÚP</h3>
            <ul>
              <li><a href="#">Hướng dẫn sử dụng nước hoa</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Phương thức thanh toán</a></li>
              <li><a href="#">Gói quà miễn phí</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>THÔNG TIN KHÁC</h3>
            <ul>
              <li><a href="#">Hoạt động TGNH</a></li>
              <li><a href="#">Member Card</a></li>
              <li><a href="#">Gift Voucher</a></li>
              <li><a href="#">Tuyển dụng</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>LIÊN HỆ</h3>
            <ul>
              <li><a href="#">Hệ thống showroom</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-sep" />

        <div className="footer-bottom container">
          <p><strong>Copyright © 2008 Công ty CPTM SD SHOP &amp; Mỹ Phẩm.</strong></p>
          <p>Giấy chứng nhận ĐKKD số: 0317116620 do Sở KH&amp;ĐT TPHCM cấp lần đầu ngày 10/01/2022.</p>
          <p>Địa chỉ: 10-10B Cách Mạng Tháng 8, Phường Bến Thành, TP. Hồ Chí Minh</p>
          <p>Điện thoại: 0337 990 731 - Đặt hàng: 0337 990 731 - CSKH: 0337 990 731</p>
        </div>

        <div className="floating-actions">
          <a className="fb" href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a className="phone" href="#" aria-label="Gọi điện"><i className="fa-solid fa-phone" /></a>
          <a className="zalo" href="#" aria-label="Zalo">Zalo</a>
          <a className="mess" href="#" aria-label="Messenger"><i className="fa-brands fa-facebook-messenger" /></a>
        </div>

        <button className="btn-top" aria-label="Lên đầu trang" title="Lên đầu trang">
          <i className="fa-solid fa-arrow-up" />
        </button>
      </footer>
    </>
  );
}
