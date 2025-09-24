"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function BannerSwiper({ images }: { images: { href: string; src: string; alt: string }[] }) {
  useEffect(() => {
    const id = setInterval(() => {
      // @ts-ignore
      if ((window as any)?.Swiper) {
        clearInterval(id);
        // @ts-ignore
        new (window as any).Swiper(".swiper-container", {
          slidesPerView: 1,
          spaceBetween: 100,
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
        });
      }
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((im, i) => (
            <div className="swiper-slide" key={i}>
              <a href={im.href}><img src={im.src} alt={im.alt} /></a>
            </div>
          ))}
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}
