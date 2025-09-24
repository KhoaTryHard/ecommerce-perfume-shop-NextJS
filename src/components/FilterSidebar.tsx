"use client";

export type Filters = {
  brands: string[];
  genders: string[];
  price?: { min?: number; max?: number };
};

export default function FilterSidebar({
  allBrands,
  value,
  onChange,                     // callback prop
  className = "sidebar",        // optional
}: {
  allBrands: string[];
  value: Filters;
  onChange: (next: Filters) => void;
  className?: string;
}) {
  const toggle = (key: keyof Filters, v: string) => {
    const list = new Set(value[key] as string[]);
    list.has(v) ? list.delete(v) : list.add(v);
    onChange({ ...value, [key]: Array.from(list) });
  };

  const setPrice = (min?: number, max?: number) =>
    onChange({ ...value, price: { min, max } });

  return (
    <aside className={className}>
      <div className="filter-group">
        <div className="group-title">Thương hiệu</div>
        <div className="checkbox-list">
          {allBrands.map(b => (
            <label key={b} className="cb">
              <input
                type="checkbox"
                checked={value.brands.includes(b)}
                onChange={() => toggle("brands", b)}
              /> {b}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <div className="group-title">Giới tính</div>
        {["Nam", "Nữ", "Unisex"].map(g => (
          <label key={g} className="cb">
            <input
              type="checkbox"
              checked={value.genders.includes(g)}
              onChange={() => toggle("genders", g)}
            /> {g}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <div className="group-title">Khoảng giá</div>
        <div className="price-row">
          <input
            type="number" placeholder="Từ (VND)"
            value={value.price?.min ?? ""}
            onChange={e => setPrice(Number(e.target.value) || undefined, value.price?.max)}
          />
          <span>—</span>
          <input
            type="number" placeholder="Đến (VND)"
            value={value.price?.max ?? ""}
            onChange={e => setPrice(value.price?.min, Number(e.target.value) || undefined)}
          />
        </div>
        <button className="btn small ghost" onClick={() => onChange({ brands: [], genders: [] })}>
          Xóa lọc
        </button>
      </div>
    </aside>
  );
}
