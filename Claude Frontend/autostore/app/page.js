import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/home/HeroSlider'
import CategoryIcons from '@/components/home/CategoryIcons'
import VehicleSelector from '@/components/home/VehicleSelector'
import BestSellers from '@/components/home/BestSellers'
import PromoBanners from '@/components/home/PromoBanners'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandLogos from '@/components/home/BrandLogos'
import LatestBlogs from '@/components/home/LatestBlogs'
import NewsletterPopup from '@/components/common/NewsletterPopup'

import siteData from '@/data/site.json'
import navigation from '@/data/navigation.json'
import categories from '@/data/categories.json'
import vehicleData from '@/data/vehicle.json'
import productsData from '@/data/products.json'
import brands from '@/data/brands.json'
import blogs from '@/data/blogs.json'

export default function HomePage() {
  return (
    <>
      <TopBar hotline={siteData.hotline} />
      <Header navigation={navigation} cartCount={0} />

      <main>
        <HeroSlider slides={siteData.heroSlides} />
        <CategoryIcons categories={categories} />
        <VehicleSelector data={vehicleData} />
        <BestSellers data={productsData.bestSellers} />
        <PromoBanners banners={productsData.promoBanners} />
        <FeaturedProducts
          newArrivals={productsData.newArrivals}
          bestSellers={productsData.bestSellersSimple}
          saleOff={productsData.saleOff}
        />
        <BrandLogos brands={brands} />
        <LatestBlogs blogs={blogs} />
      </main>

      <Footer siteData={siteData} />
      <NewsletterPopup />
    </>
  )
}
