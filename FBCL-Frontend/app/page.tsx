import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Heart, Calendar } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Friends of the Friern Barnet Community Library. Supporting literacy and community engagement through our local library.',
}

const stats = [
  { number: '500+', label: 'Books Donated', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
]

const featuredEvents = [
  {
    title: 'Summer Reading Program',
    date: 'June 15, 2024',
    time: '10:00 AM',
    description: 'Join us for our annual summer reading challenge for all ages.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
  },
  {
    title: 'Author Meet & Greet',
    date: 'July 8, 2024',
    time: '2:00 PM',
    description: 'Meet local author Sarah Johnson and discuss her latest novel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    title: 'Children\'s Story Time',
    date: 'Every Saturday',
    time: '11:00 AM',
    description: 'Interactive story time for children ages 3-8.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
]

const testimonials = [
  {
    quote: "The library has become a second home for my children. The volunteers are amazing!",
    author: "Maria Rodriguez",
    role: "Parent"
  },
  {
    quote: "I've been volunteering here for 5 years and it's the most rewarding experience.",
    author: "John Smith",
    role: "Volunteer"
  },
  {
    quote: "The programs they offer have helped my reading skills improve dramatically.",
    author: "Emma Thompson",
    role: "Student"
  }
]

export default function HomePage() {
  return (
    <div className="pt-16 bg-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Supporting Literacy, 
                <span className="text-secondary-300"> Building Community</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Join the Friends of the Friern Barnet Community Library in fostering a love for reading, 
                learning, and community engagement. Together, we make knowledge accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" asChild>
                  <Link href="/volunteer">
                    <span className="inline-flex items-center">
                      Join Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                  <Link href="/events">
                    See Events
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
                  alt="Community library"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-primary-600 p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Since 2013</p>
                  <p className="text-xs text-gray-600">Serving our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About FBCL
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Friends of the Friern Barnet Community Library is a non-profit organization dedicated to 
                supporting the Friern Barnet Community Library through fundraising, volunteerism, and community outreach.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that access to knowledge and literacy resources is fundamental to a thriving 
                community. Our volunteers work tirelessly to ensure that everyone has the opportunity 
                to discover the joy of reading and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More
                </Link>
                <Link href="/volunteer" className="btn-outline">
                  Volunteer
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop"
                alt="Volunteers working"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Community event"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding bg-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for exciting events that bring our community together through the love of reading and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.title}
                className="card group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600 mb-3">
                  {event.date} • {event.time}
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link href="/events" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600">
              Hear from the people who make our library community special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl text-primary-600 mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Friern Barnet Community Library is a volunteer-run library! We would appreciate your help. 
              Ask at the staff desk if you would like to be a volunteer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/volunteer">
                  Volunteer With Us
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

      {/* What's On Section */}
      <section className="section-padding bg-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's On at FBCL?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of classes, workshops, and community events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Computer Classes', icon: '💻' },
              { name: 'Pilates', icon: '🧘' },
              { name: 'Yoga', icon: '🧘‍♀️' },
              { name: 'English Lessons', icon: '📚' },
              { name: 'Toddler Groups', icon: '👶' },
              { name: 'Drama Acting Groups', icon: '🎭' },
              { name: 'Local Police Surgery', icon: '👮' },
              { name: 'Creative Writing', icon: '✍️' },
              { name: 'Councillors Surgery', icon: '🏛️' },
              { name: 'Many More Workshops', icon: '🎨' },
              { name: 'Classes & Events', icon: '📅' },
              { name: 'Community Activities', icon: '🤝' }
            ].map((activity, index) => (
              <Card
                key={activity.name}
                className="text-center animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 