type PageHeroProps = {
  title: string;
  crumb?: string;
};

export default function PageHero({ title, crumb }: PageHeroProps) {
  return (
    <section className="hero-shell">
      <div className="container py-16 text-center">
        <h1 className="text-5xl font-semibold text-slate-800">{title}</h1>
        <p className="mt-4 text-slate-400 text-lg">Home  ›  {crumb ?? title}</p>
      </div>
    </section>
  );
}
