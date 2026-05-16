import Image from "next/image";
import CtaBand from "@/components/common/CtaBand";
import PageHero from "@/components/common/PageHero";
import { PRODUCTS } from "@/lib/site";

const product = PRODUCTS[0];

export default function ProductSinglePage() {
  return (
    <div>
      <PageHero title="Product Details" crumb="Product Single" />
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Image src={product.image} alt={product.name} width={900} height={560} className="h-[560px] w-full rounded-3xl object-cover" />
          <div>
            <h2 className="heading-lg">{product.name}</h2>
            <p className="mt-4 text-3xl text-[#17b7b7]">${product.price.toFixed(2)}</p>
            <p className="mt-6 text-lg leading-9 text-slate-500">
              Crafted for style and all-day comfort, this frame combines lightweight durability with
              modern lines that complement both professional and casual looks.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn border border-slate-300">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
