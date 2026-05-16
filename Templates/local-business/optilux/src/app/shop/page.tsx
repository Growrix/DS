import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { PRODUCTS } from "@/lib/site";

export default function ShopPage() {
  return (
    <div>
      <PageHero title="Shop" />
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-3xl bg-[#d8ecef]">
              <Image src={product.image} alt={product.name} width={500} height={288} className="h-72 w-full object-cover" />
              <div className="px-6 py-6 text-center">
                <h3 className="text-3xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-2xl text-slate-500">${product.price.toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
