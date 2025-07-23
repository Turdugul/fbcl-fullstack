import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Heart, Calendar, MapPin, Clock, Phone, ChevronRight } from 'lucide-react'
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

const quickLinks = [
  { title: 'Join Us', description: 'Become a member and support our community library', href: '/volunteer', icon: Users },
  { title: 'Collections', description: 'Explore our diverse collection of books and resources', href: '/collections', icon: BookOpen },
  { title: 'Events', description: 'Discover upcoming events and activities', href: '/events', icon: Calendar },
  { title: 'Contact', description: 'Get in touch with our team', href: '/contact', icon: Phone },
]

const activities = [
  { name: 'Computer Classes', icon: '💻', description: 'Learn essential computer skills' },
  { name: 'Pilates', icon: '🧘', description: 'Improve flexibility and strength' },
  { name: 'Yoga', icon: '🧘‍♀️', description: 'Find your inner peace and balance' },
  { name: 'English Lessons', icon: '📚', description: 'Master the English language' },
  { name: 'Toddler Groups', icon: '👶', description: 'Early development activities' },
  { name: 'Drama Acting Groups', icon: '🎭', description: 'Express yourself through theater' },
  { name: 'Local Police Surgery', icon: '👮', description: 'Community safety discussions' },
  { name: 'Creative Writing', icon: '✍️', description: 'Unleash your creativity' },
  { name: 'Councillors Surgery', icon: '🏛️', description: 'Local government access' },
  { name: 'Many More Workshops', icon: '🎨', description: 'Explore various creative outlets' },
  { name: 'Classes & Events', icon: '📅', description: 'Regular community activities' },
  { name: 'Community Activities', icon: '🤝', description: 'Build lasting connections' }
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh] py-24">
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="text-secondary-400 font-medium tracking-wide uppercase text-sm bg-white/10 px-4 py-2 rounded-full">
                  Established 2013
                </span>
              </div>
              <h1 className="text-responsive-4xl text-secondary-400 md:text-responsive-6xl font-elegant-heading mb-8 text-balance leading-tight">
                Supporting Literacy, 
                <span className="text-secondary-300 block">Building Community</span>
              </h1>
              <p className="text-responsive-lg mb-10 text-gray-100 font-elegant-body leading-relaxed max-w-2xl">
                Join the Friends of the Friern Barnet Community Library in fostering a love for reading, 
                learning, and community engagement. Together, we make knowledge accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" asChild className="btn-secondary px-8 py-4 group">
                  <Link href="/volunteer">
                  
                      Join Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 font-elegant-body text-base px-8 py-4">
                  <Link href="/events">
                    See Events
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in stagger-1">
              <div className="relative">
                <img
                  src="/library.jpg"
                  alt="Community library"
                  className="w-full h-[600px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-primary-800 p-6 border border-gray-200 shadow-lg">
                  <p className="text-sm font-elegant-heading mb-1">Since 2013</p>
                  <p className="text-xs text-secondary-dark font-elegant-body">Serving our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="group block animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-full group-hover:border-primary-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <link.icon className="h-8 w-8 text-accent group-hover:text-accent-hover transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-elegant-heading mb-2 group-hover:text-primary-dark transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-secondary-dark font-elegant-body text-sm leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-4 flex items-center text-accent group-hover:text-accent-hover transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6">
              Our Impact
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Discover the numbers behind our community library's success and growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-elegant-heading text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-dark font-elegant-body text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6">
                About FBCL
              </h2>
              <p className="text-responsive-lg text-secondary-dark mb-6 font-elegant-body leading-relaxed">
                The Friends of the Friern Barnet Community Library is a non-profit organization dedicated to 
                supporting the Friern Barnet Community Library through fundraising, volunteerism, and community outreach.
              </p>
              <p className="text-secondary-dark mb-8 font-elegant-body leading-relaxed">
                We believe that access to knowledge and literacy resources is fundamental to a thriving 
                community. Our volunteers work tirelessly to ensure that everyone has the opportunity 
                to discover the joy of reading and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-secondary font-elegant-body">
                  Learn More
                </Link>
                <Link href="/volunteer" className="btn-outline font-elegant-body">
                  Volunteer
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in stagger-1">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop"
                alt="Volunteers working"
                className="w-full h-64 object-cover hover-scale"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Community event"
                className="w-full h-64 object-cover mt-8 hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6">
              Featured Events
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
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
                  className="w-full h-48 object-cover mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-elegant-heading mb-3">{event.title}</h3>
                <div className="text-sm text-secondary-dark mb-4 font-elegant-body">
                  {event.date} • {event.time}
                </div>
                <p className="text-secondary-dark mb-6 font-elegant-body leading-relaxed">{event.description}</p>
                <Link href="/events" className="btn-secondary font-elegant-body inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in stagger-3">
            <Link href="/events" className="btn-primary font-elegant-body">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6">
              What Our Community Says
            </h2>
            <p className="text-responsive-lg text-secondary-dark font-elegant-body">
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
                <div className="text-4xl text-accent mb-6 font-elegant-accent">"</div>
                <p className="text-secondary-dark mb-8 italic font-elegant-body leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-elegant-heading text-primary-dark">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-secondary font-elegant-body">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl !text-warm md:text-responsive-4xl font-elegant-heading mb-6">
              Get Involved
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-10 max-w-4xl mx-auto font-elegant-body leading-relaxed">
              Friern Barnet Community Library is a volunteer-run library! We would appreciate your help. 
              Ask at the staff desk if you would like to be a volunteer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild className="text-base px-8 py-4">
                <Link href="/volunteer" className="font-elegant-body">
                  Volunteer With Us
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 font-elegant-body text-base px-8 py-4">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6">
              What's On at FBCL?
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Discover our diverse range of classes, workshops, and community events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={activity.name}
                className="text-center animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-elegant-heading text-primary-dark mb-2">{activity.name}</h3>
                <p className="text-sm text-secondary-dark font-elegant-body">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-elegant-heading mb-2">Visit Us</h3>
              <p className="text-secondary-dark font-elegant-body">
                Friern Barnet Community Library<br />
                Friern Barnet, London
              </p>
            </div>
            <div className="text-center animate-fade-in stagger-1">
              <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-elegant-heading mb-2">Opening Hours</h3>
              <p className="text-secondary-dark font-elegant-body">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
            <div className="text-center animate-fade-in stagger-2">
              <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-elegant-heading mb-2">Contact</h3>
              <p className="text-secondary-dark font-elegant-body">
                Get in touch with our team<br />
                for more information
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 