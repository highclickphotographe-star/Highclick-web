import "./Brands.css";

const brands = [
  //   { name: "NIFT Students", logo: "media/brands/brand-1.png" },
  { name: "Lakme Academy Adyar", logo: "media/brands/brand-2.png" },
  { name: "Lakme Academy Tnagar", logo: "media/brands/brand-3.png" },
  //   { name: "Think Music", logo: "media/brands/brand-4.png" },
  { name: "Pathway", logo: "media/brands/brand-5.png" },
  { name: "Star Health Insurance", logo: "media/brands/brand-6.png" },
  //   { name: "Brand 7", logo: "media/brands/brand-7.png" },
  //   { name: "Brand 8", logo: "media/brands/brand-8.png" },
];

export default function Brands() {
  const items = [...brands, ...brands];

  return (
    <section className="brands" aria-label="Trusted by brands">
      <div className="brands__header">
        <span className="brands__label">Trusted By</span>
      </div>

      <div className="brands__track">
        {items.map((brand, i) => (
          <div className="brands__item" key={`${brand.name}-${i}`}>
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="brands__fallback">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
