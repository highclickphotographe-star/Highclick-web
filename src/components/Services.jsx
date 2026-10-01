import "./Services.css";

const services = [
  {
    id: 1,
    number: "01",
    title: "Wedding Films",
    description:
      "Cinematic wedding films that capture emotion, ritual and the quiet in-between moments of your day.",
  },
  {
    id: 2,
    number: "02",
    title: "Photography",
    description:
      "Timeless photography for weddings, portraits and personal stories — honest, elegant and intentional.",
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
      "Intimate pre-wedding sessions that feel natural, cinematic and uniquely yours.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__header" data-reveal>
        <span className="services__label">What We Do</span>
        <h2 className="services__title">Our Services</h2>
      </div>

      <div className="services__grid">
        {services.map((item, i) => (
          <article
            key={item.id}
            className="services__card"
            data-reveal
            style={{ "--i": i }}
          >
            <span className="services__number">{item.number}</span>
            <h3 className="services__card-title">{item.title}</h3>
            <p className="services__card-text">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
