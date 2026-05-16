import Link from "next/link";
import { CONTACT, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer-surface text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-4xl font-semibold">Optilux</h3>
            <p className="mt-4 text-base/8 text-cyan-100">
              At Optilux, we&apos;re dedicated to providing high-quality, personalized eye care for
              patients of all ages.
            </p>
            <div className="mt-6 flex gap-4 text-cyan-100">
              <span>f</span>
              <span>x</span>
              <span>w</span>
              <span>i</span>
              <span>y</span>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-medium">Services</h4>
            <div className="mt-4 flex flex-col gap-2 text-cyan-100">
              {SERVICES.map((service) => (
                <Link key={service.slug} href="/services-2">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-medium">About Us</h4>
            <div className="mt-4 flex flex-col gap-2 text-cyan-100">
              <Link href="/">Home</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/our-doctors">Our Doctors</Link>
              <Link href="/about">About Us</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-medium">Contact Us</h4>
            <div className="mt-4 space-y-3 text-cyan-100">
              <p><strong className="text-white">Clinic Location</strong><br />{CONTACT.address}</p>
              <p><strong className="text-white">Call Us</strong><br />{CONTACT.phone}</p>
              <p><strong className="text-white">Send a Message</strong><br />{CONTACT.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-900/80 py-6 text-cyan-100">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 - Optilux by Designesia</p>
          <div className="flex gap-8">
            <Link href="#">Terms &amp; Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
