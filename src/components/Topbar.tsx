// components/Topbar.tsx
export default function Topbar({
  brand = "SD Parfum",
  onSearch,                 // callback prop
  rightLinks,               // children-like prop (node)
}: {
  brand?: string;
  onSearch?: (q: string) => void;
  rightLinks?: React.ReactNode;
}) {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a href="/" className="brand">{brand}</a>
        <div className="search">
          <input id="q" type="search" placeholder="Tìm kiếm sản phẩm, thương hiệu…" />
          <button
            id="btn-search"
            title="Tìm kiếm"
            aria-label="Tìm kiếm"
            onClick={() => onSearch?.((document.getElementById("q") as HTMLInputElement)?.value || "")}
          >🔍</button>
        </div>
        <nav className="quick-links" aria-label="Liên kết nhanh">
          {rightLinks}
        </nav>
      </div>
    </header>
  );
}
