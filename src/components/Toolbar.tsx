export default function Toolbar({
  sort,
  onSortChange,                   // callback prop
  left,                           // children-like slot
}: {
  sort: string;
  onSortChange: (v: string) => void;
  left?: React.ReactNode;
}) {
  return (
    <div className="toolbar">
      <div className="toolbar-left">{left}</div>
      <div className="toolbar-right">
        <label htmlFor="sort">Sắp xếp:</label>
        <select id="sort" value={sort} onChange={e => onSortChange(e.target.value)}>
          <option value="popular">Phổ biến</option>
          <option value="price_asc">Giá tăng dần</option>
          <option value="price_desc">Giá giảm dần</option>
          <option value="discount_desc">Giảm giá nhiều</option>
          <option value="rating_desc">Đánh giá cao</option>
          <option value="newest">Mới nhất</option>
        </select>
      </div>
    </div>
  );
}
