import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Discover upcoming events and programs at the Bay Community Library. From story time to author readings, there\'s something for everyone.',
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Summer Reading Program Kickoff',
    date: 'June 15, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Library Hall',
    description: 'Join us for the start of our annual summer reading challenge! Activities for all ages, including crafts, games, and book giveaways.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    category: 'Reading Program',
    attendees: 45,
  },
  {
    id: 2,
    title: 'Author Meet & Greet',
    date: 'July 8, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Room',
    description: 'Meet local author Sarah Johnson and discuss her latest novel "The Bay Chronicles". Book signing and Q&A session included.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'Author Event',
    attendees: 30,
  },
  {
    id: 3,
    title: 'Children\'s Story Time',
    date: 'Every Saturday',
    time: '11:00 AM - 11:30 AM',
    location: 'Children\'s Section',
    description: 'Interactive story time for children ages 3-8. Songs, crafts, and fun activities included.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Children',
    attendees: 20,
  },
  {
    id: 4,
    title: 'Book Club: "The Midnight Library"',
    date: 'July 22, 2024',
    time: '6:30 PM - 8:00 PM',
    location: 'Reading Room',
    description: 'Join our monthly book club discussion of Matt Haig\'s "The Midnight Library". New members welcome!',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    category: 'Book Club',
    attendees: 15,
  },
  {
    id: 5,
    title: 'Digital Literacy Workshop',
    date: 'August 5, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Computer Lab',
    description: 'Learn essential computer skills for beginners. Topics include email, internet safety, and basic word processing.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    category: 'Workshop',
    attendees: 12,
  },
  {
    id: 6,
    title: 'Teen Writing Workshop',
    date: 'August 12, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Teen Space',
    description: 'Creative writing workshop for teens ages 13-18. Explore different genres and share your work with peers.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    category: 'Teen Program',
    attendees: 18,
  },
]

const pastEvents = [
  {
    id: 7,
    title: 'Spring Book Sale',
    date: 'May 20, 2024',
    description: 'Our annual spring book sale was a huge success! We raised over $2,000 for library programs.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    attendees: 150,
  },
  {
    id: 8,
    title: 'Poetry Night',
    date: 'April 15, 2024',
    description: 'Local poets shared their work in an intimate evening of poetry and community.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    attendees: 35,
  },
  {
    id: 9,
    title: 'Family Game Night',
    date: 'March 30, 2024',
    description: 'Families enjoyed an evening of board games, puzzles, and friendly competition.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    attendees: 60,
  },
]

const categories = ['All', 'Reading Program', 'Author Event', 'Children', 'Book Club', 'Workshop', 'Teen Program']

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Library Events
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Discover exciting programs, workshops, and community gatherings at the Bay Community Library.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these exciting upcoming events and programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className="group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                  Register
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Past Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent successful events and community gatherings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={event.id}
                className="group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600 mb-3">
                  {event.date} • {event.attendees} attendees
                </div>
                <p className="text-gray-600">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find events that match your interests and schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category}
                className="text-center group hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary-600">{category}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, 
              volunteer opportunities, and community news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-gray-900 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 