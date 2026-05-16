import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Leaf, Users, Recycle, Shield } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, SectionHeader, Card, IconBox } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { SITE_NAME } from '@/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME}'s mission, team, and 15 years of eco-responsible waste management.`,
}

const VALUES = [
  { icon: Leaf,    title: 'Environmental Stewardship', desc: 'We treat every ton of waste as an opportunity to protect our planet through responsible recycling and disposal.' },
  { icon: Shield,  title: 'Safety First',              desc: 'Our EPA-certified team follows strict protocols for every job, protecting people, property, and the environment.' },
  { icon: Users,   title: 'Community Focus',           desc: 'We invest in the communities we serve—sponsoring local clean-up events and partnering with schools on recycling education.' },
  { icon: Recycle, title: 'Circular Economy',          desc: 'We actively divert over 65% of collected material from landfill through advanced sorting, composting, and material recovery.' },
]

const TEAM = [
  { name: 'Elijah Hargrove', role: 'Founder & CEO',        img: 'https://picsum.photos/seed/tm1/200/200' },
  { name: 'Dr. Priya Nair',  role: 'Head of Sustainability', img: 'https://picsum.photos/seed/tm2/200/200' },
  { name: 'Marcus Webb',     role: 'VP of Operations',      img: 'https://picsum.photos/seed/tm3/200/200' },
  { name: 'Sandra Owusu',    role: 'Commercial Director',   img: 'https://picsum.photos/seed/tm4/200/200' },
]

const CERTIFICATIONS = [
  'EPA Licensed Waste Transporter',
  'RCRA Hazardous Waste Certified',
  'ISO 14001 Environmental Management',
  'OSHA 30-Hour Certified Staff',
  'State-Licensed Medical Waste',
  'B-Corp Certified (2022)',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About EcoHaul"
        subtitle="Fifteen years of building cleaner communities through reliable, eco-responsible waste management."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Mission section */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="Built on a Simple Belief: Clean Communities Matter"
                subtitle="EcoHaul was founded in 2008 by Elijah Hargrove with one truck and a commitment to doing waste differently. Today we operate a fleet of 120+ eco-certified vehicles serving over 4,800 clients across the tri-state area."
                align="left"
              />
              <ul className="mt-8 space-y-3">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-body-sm text-neutral-700">
                    <CheckCircle size={17} className="text-primary-600 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="lg" className="mt-10">
                Work With Us
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
              <Image src="https://picsum.photos/seed/about1/700/500"
                alt="EcoHaul team and fleet" fill className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section id="green" className="bg-neutral-50">
        <Container>
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Every Decision We Make"
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <Card key={v.title} variant="default" padding="lg" hover>
                <IconBox icon={<v.icon size={24} />} variant="primary" size="md" className="mb-5" />
                <h3 className="font-display font-bold text-forest text-heading-sm mb-3">{v.title}</h3>
                <p className="text-neutral-600 text-body-sm leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section id="team" className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Meet the Team"
            title="The People Behind EcoHaul"
            subtitle="Our leadership team brings together decades of experience in environmental services, logistics, and sustainability."
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <Card key={member.name} variant="default" padding="none" hover className="text-center overflow-hidden">
                <div className="relative h-52">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-forest text-heading-sm">{member.name}</p>
                  <p className="text-primary-600 text-body-sm font-medium mt-1">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABannerSection />
    </>
  )
}
