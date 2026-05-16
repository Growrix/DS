import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { CONTACT } from "@/lib/site";

export default function ContactPage() {
  return (
    <div>
      <PageHero title="Contact Us" />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <form className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-5xl font-semibold">Get In Touch</h2>
            <p className="mt-3 text-slate-500">Have questions? Send us a message.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="First Name" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Last Name" />
              <input className="rounded-xl border border-slate-300 px-4 py-3 md:col-span-2" placeholder="Email" />
              <textarea className="min-h-40 rounded-xl border border-slate-300 px-4 py-3 md:col-span-2" placeholder="Message" />
            </div>
            <button type="button" className="btn btn-primary mt-6">Send Message</button>
          </form>
          <aside className="space-y-5 rounded-3xl bg-[#d8ecef] p-8 text-xl">
            <h3 className="text-4xl font-semibold">Contact Details</h3>
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phone}</p>
            <p>{CONTACT.email}</p>
            <p>{CONTACT.hours}</p>
          </aside>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
