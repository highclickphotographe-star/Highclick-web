import "./Services.css";

const services = [
  // Previous services
  {
    id: 1,
    number: "01",
    title: "Wedding Films",
    description:
      "Cinematic wedding films that capture emotion, ritual, and the quiet in-between moments of your day.",
  },
  {
    id: 2,
    number: "02",
    title: "Photography",
    description:
      "Timeless photography for weddings, portraits, and personal stories — honest, elegant, and intentional.",
  },
  {
    id: 3,
    number: "03",
    title: "Commercial",
    description:
      "Brand films and campaign imagery crafted with the same cinematic eye we bring to every frame.",
  },
  {
    id: 4,
    number: "04",
    title: "Pre-Wedding",
    description:
      "Intimate pre-wedding sessions that feel natural, cinematic, and uniquely yours.",
  },

  // New services
  {
    id: 5,
    number: "05",
    title: "Property Coverage",
    description:
      "Professional photography and film coverage for real estate, villas, and commercial spaces — showcasing every space at its best.",
  },
  {
    id: 6,
    number: "06",
    title: "Interior Photography & Videography",
    description:
      "Clean, well-lit interiors captured with precision — ideal for architects, designers, hotels, and property listings.",
  },
  {
    id: 7,
    number: "07",
    title: "Cinematic Films",
    description:
      "Story-driven cinematic films crafted with intentional light, emotion, and detail — for brands, events, and personal stories.",
  },
  {
    id: 8,
    number: "08",
    title: "Toddler Shoots",
    description:
      "Playful, natural sessions that capture your toddler’s personality — soft light, real moments, and lasting memories.",
  },
  {
    id: 9,
    number: "09",
    title: "Newborn Baby Shoots",
    description:
      "Gentle, safe newborn sessions focused on tiny details and quiet moments — timeless portraits for your growing family.",
  },
  {
    id: 10,
    number: "10",
    title: "Corporate Shoots",
    description:
      "Polished headshots, team portraits, and brand films designed for websites, LinkedIn, campaigns, and company profiles.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <span className="services__label">What We Do</span>
        <h2 className="services__title">Our Services</h2>
      </div>

      <div className="services__grid">
        {services.map((item) => (
          <article key={item.id} className="services__card">
            <span className="services__number">{item.number}</span>
            <h3 className="services__card-title">{item.title}</h3>
            <p className="services__card-text">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
