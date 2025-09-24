"use client";
import { useEffect } from "react";

export default function BackToTop({
  threshold = 300,                // optional prop
  onShowChange,                   // callback prop (thong bao show/an)
}: {
  threshold?: number;
  onShowChange?: (show: boolean) => void;
}) {
  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>(".btn-top");
    const toggle = () => {
      const show = window.scrollY > threshold;
      btn?.classList.toggle("show", show);
      onShowChange?.(show);
    };
    window.addEventListener("scroll", toggle);
    btn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    toggle();
    return () => window.removeEventListener("scroll", toggle);
  }, [threshold, onShowChange]);

  return (
    <button className="btn-top" aria-label="Lên đầu trang" title="Lên đầu trang">
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
