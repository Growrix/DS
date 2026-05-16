import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-medium text-white md:text-5xl">
          Clear Vision Starts Here. Schedule Your Eye Exam Today
        </h2>
        <Link className="btn btn-outline self-start md:self-auto" href="/contact">
          Book Your Visit
        </Link>
      </div>
    </section>
  );
}
