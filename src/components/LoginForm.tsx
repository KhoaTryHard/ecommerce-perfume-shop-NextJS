"use client";
import { useState } from "react";

export type LoginValues = { username: string; password: string };

export default function LoginForm({
  onSubmit,
  title = "Đăng nhập",          // optional prop
  forgotHref = "#",              // optional prop
  signupHref = "#",              // optional prop
}: {
  onSubmit: (values: LoginValues) => Promise<void> | void; // callback prop
  title?: string;
  forgotHref?: string;
  signupHref?: string;
}) {
  const [values, setValues] = useState<LoginValues>({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try { await onSubmit(values); }
    catch (err: any) { setError(err?.message || "Đăng nhập thất bại"); }
    finally { setLoading(false); }
  };

  return (
    <div className="login-container">
      <h1 className="center">{title}</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text" id="username" name="username"
          placeholder="Email hoặc SĐT" required
          value={values.username}
          onChange={(e)=>setValues(v=>({ ...v, username: e.target.value }))}
        />
        <input
          type="password" id="password" name="password"
          placeholder="Mật khẩu" required
          value={values.password}
          onChange={(e)=>setValues(v=>({ ...v, password: e.target.value }))}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>

        {error && <p className="form-error" role="alert">{error}</p>}
      </form>

      <div className="login-extra">
        <p><a href={forgotHref}>Quên mật khẩu?</a></p>
        <p>Bạn chưa có tài khoản? <a href={signupHref}>Đăng ký</a></p>
      </div>
    </div>
  );
}
