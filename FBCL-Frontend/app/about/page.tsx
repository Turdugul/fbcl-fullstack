import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Users, BookOpen, Heart, Award, Target } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the Friends of the Friern Barnet Community Library, our mission, history, and impact on the community.',
}

const timeline = [
  {
    year: '2013',
    title: 'Foundation',
    description: 'FBCL was founded by a group of passionate community members who recognized the need for library support.',
  },
  {
    year: '2023',
    title: '10th Anniversary',
    description: 'Celebrated 10 years of service with a community-wide celebration and new programs.',
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Expanding programs to meet the evolving needs of our diverse community.',
  },
]

const values = [
  {
    icon: BookOpen,
    title: 'Literacy First',
    description: 'We believe everyone deserves access to knowledge and the joy of reading.',
  },
  {
    icon: Users,
    title: 'Community Centered',
    description: 'Our programs and services are designed with our community\'s needs in mind.',
  },
  {
    icon: Heart,
    title: 'Inclusive Access',
    description: 'We work to ensure our library serves people of all ages, backgrounds, and abilities.',
  },
  {
    icon: Target,
    title: 'Sustainable Impact',
    description: 'We focus on long-term solutions that create lasting positive change.',
  },
]

const impactStats = [
  { number: '500+', label: 'Books Donated Annually', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members Served', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
  { number: '15+', label: 'Years of Service', icon: Award },
  { number: '95%', label: 'Community Satisfaction', icon: Target },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
                      <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
                <span className="text-2xl font-bold text-secondary-300">Celebrating Our 12th Anniversary!</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About FBCL
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Supporting literacy and community engagement through the Friern Barnet Community Library since 2013.
              </p>
            </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Friends of the Friern Barnet Community Library is dedicated to supporting the Friern Barnet Community Library 
                through fundraising, volunteerism, and community outreach. We believe that access to knowledge 
                and literacy resources is fundamental to a thriving community.
              </p>
              <p className="text-gray-600 mb-8">
                Our volunteers work tirelessly to ensure that everyone has the opportunity to discover the joy 
                of reading and learning, regardless of their background or circumstances. We foster a love for 
                literature, promote lifelong learning, and build stronger community connections through our 
                diverse programs and initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/volunteer">
                    Join Our Mission
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"
                alt="Community volunteers"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to serving the community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nearly four decades of dedication to literacy and community service.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card>
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The numbers tell the story of our commitment to the community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-primary-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or simply learn more about our work, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/volunteer">
                  Become a Volunteer
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters & Benefactors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supporters & Benefactors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are grateful for the support of our benefactors who help make our mission possible.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Benefactors of Friern Barnet Community Library
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  This list may not be up to date—please contact us for verification.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'London Borough of Barnet',
                  'Social Investment Bank',
                  'Jesus Hospital Trust',
                  'Voluntary Care for the Elderly',
                  'Eleanor Palmer Trust',
                  'Friern Barnet Educational Trust',
                  'London Borough of Barnet Education Project'
                ].map((benefactor, index) => (
                  <div
                    key={benefactor}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{benefactor}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  For the most current list of benefactors, please contact us at{' '}
                  <a href="mailto:fbcllibrary15@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                    fbcllibrary15@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 