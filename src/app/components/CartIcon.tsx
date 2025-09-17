"use client";
import { useState } from "react";
import { useCart, vnd } from "@/context/CartContext";

export default function CartIcon() {
  const { count, items, remove, clear, total, setQty } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Xem giỏ hàng">
        <i className="fa-solid fa-cart-shopping" />
        {count > 0 && <span className="cart-badge">{count}</span>}
      </button>

      {open && (
        <div className="cart-drawer">
          <div className="cart-head">
            <strong>Giỏ hàng</strong>
            <button onClick={() => setOpen(false)} aria-label="Đóng">✕</button>
          </div>

          <div className="cart-body">
            {items.length === 0 ? (
              <p>Chưa có sản phẩm.</p>
            ) : (
              items.map(it => (
                <div key={it.id} className="cart-row">
                  <img src={it.image || "https://via.placeholder.com/48"} alt={it.name} />
                  <div className="cart-info">
                    <div className="name">{it.name}</div>
                    <div className="price">{vnd(it.price)}</div>
                    <div className="qty">
                      <button onClick={() => setQty(it.id, it.qty - 1)}>-</button>
                      <input
                        value={it.qty}
                        onChange={e => setQty(it.id, Number(e.target.value) || 1)}
                      />
                      <button onClick={() => setQty(it.id, it.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="rm" onClick={() => remove(it.id)} aria-label="Xóa">🗑️</button>
                </div>
              ))
            )}
          </div>

          <div className="cart-foot">
            <div className="total">Tổng: <strong>{vnd(total)}</strong></div>
            <div className="actions">
              <button className="btn ghost" onClick={clear}>Xóa hết</button>
              <button className="btn">Thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
