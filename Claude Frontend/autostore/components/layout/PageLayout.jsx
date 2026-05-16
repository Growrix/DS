import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import Breadcrumb from '../common/Breadcrumb'

import siteData from '@/data/site.json'
import navigation from '@/data/navigation.json'

export default function PageLayout({ children, crumbs, cartCount = 0 }) {
  return (
    <>
      <TopBar hotline={siteData.hotline} />
      <Header navigation={navigation} cartCount={cartCount} />
      {crumbs && <Breadcrumb crumbs={crumbs} />}
      <main>{children}</main>
      <Footer siteData={siteData} />
    </>
  )
}
