"use client";

import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoginForm, { LoginValues } from "@/components/LoginForm";


export default function LoginPage() {
  const handleLogin = async (values: LoginValues) => {
    // demo: in real app call API
    console.log("Login submit:", values);
    // throw new Error("Sai tài khoản hoặc mật khẩu"); // test hiển thị lỗi
  };

  return (
    <>
      <Topbar brand="SD Parfum" rightLinks={<a href="/">Trang chủ</a>} />
      <main>
        <LoginForm
          title="Đăng nhập"
          onSubmit={handleLogin}
          forgotHref="/forgot"
          signupHref="/signup"
        />
      </main>
      <Footer />
      <BackToTop threshold={300} />
    </>
  );
}
