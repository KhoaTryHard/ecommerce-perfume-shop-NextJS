"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = { id: string; name: string; price: number; image?: string; qty: number };
type CartState = {
  items: CartItem[];
  add: (p: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  setQty: (id: string, qty: number) => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartState | null>(null);
const KEY = "sdparfum_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // load/save localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const api = useMemo<CartState>(() => ({
    items,
    add: (p, qty = 1) =>
      setItems(prev => {
        const i = prev.findIndex(x => x.id === p.id);
        if (i >= 0) {
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }
        return [...prev, { ...p, qty }];
      }),
    remove: id => setItems(prev => prev.filter(x => x.id !== id)),
    clear: () => setItems([]),
    setQty: (id, qty) =>
      setItems(prev => prev.map(x => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))),
    total: items.reduce((s, x) => s + x.price * x.qty, 0),
    count: items.reduce((s, x) => s + x.qty, 0),
  }), [items]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const vnd = (n: number) => n.toLocaleString("vi-VN") + "₫";
