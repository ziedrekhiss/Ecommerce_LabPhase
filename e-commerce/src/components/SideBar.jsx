import "../style/sideBar.css";
export default function SideBar({ onCategoryChange, selectedCategory }) {
  const categories = [
    "Laptop",
    "Desktop Computer",
    "Server",
    "Printers and Scanners",
    "Storage",
    "Accessories",
  ];
  return (
    <div className="sideBar-container">
      <div className="sidebar">
        <h3>Product Categories</h3>
        <ul>
          <li onClick={() => onCategoryChange(null)}>All Products</li>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => onCategoryChange(category)}
              style={{
                fontWeight: category === selectedCategory ? "bold" : "normal",
                color: category === selectedCategory ? "blue" : "black",
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
