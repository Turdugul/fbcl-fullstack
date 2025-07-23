import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, FileText, Users, Clock, Star, ArrowRight, ArrowLeft, Search, Download } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Collections Guides',
  description: 'Access our comprehensive research guides, subject guides, and learning resources to help you navigate our collections effectively.',
}

const guideCategories = [
  {
    title: 'Academic Research',
    description: 'Guides for students and researchers',
    icon: '📚',
    count: 12,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Local History',
    description: 'Resources about Friern Barnet and surrounding areas',
    icon: '🏛️',
    count: 8,
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'Children\'s Literature',
    description: 'Reading guides for young readers',
    icon: '👶',
    count: 15,
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    title: 'Digital Resources',
    description: 'Online databases and e-resources',
    icon: '💻',
    count: 20,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    title: 'Genealogy',
    description: 'Family history research resources',
    icon: '👨‍👩‍👧‍👦',
    count: 6,
    color: 'bg-red-100 text-red-800'
  },
  {
    title: 'Creative Writing',
    description: 'Resources for aspiring writers',
    icon: '✍️',
    count: 10,
    color: 'bg-indigo-100 text-indigo-800'
  }
]

const featuredGuides = [
  {
    id: 1,
    title: 'Getting Started with Academic Research',
    description: 'A comprehensive guide for students beginning their research journey.',
    author: 'Dr. Sarah Johnson',
    rating: 4.8,
    downloads: 1250,
    category: 'Academic Research',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=150&fit=crop'
  },
  {
    id: 2,
    title: 'Friern Barnet Through the Ages',
    description: 'Explore the rich history of our community from medieval times to present day.',
    author: 'Local History Society',
    rating: 4.9,
    downloads: 890,
    category: 'Local History',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop'
  },
  {
    id: 3,
    title: 'Digital Literacy for Seniors',
    description: 'Step-by-step guide to using computers, tablets, and smartphones.',
    author: 'Tech Support Team',
    rating: 4.7,
    downloads: 2100,
    category: 'Digital Resources',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=150&fit=crop'
  }
]

export default function GuidesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-elegant-heading mb-6">
              Collections Guides
            </h1>
            <p className="text-xl text-gray-100 mb-8 font-elegant-body">
              Discover our comprehensive research guides, subject guides, and learning resources 
              to help you navigate our collections effectively and make the most of our library services.
            </p>
          </div>
          <div className="animate-fade-in">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/collections">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Collections
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Find guides organized by subject area to help you navigate our collections effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCategories.map((category, index) => (
              <Card
                key={category.title}
                className="animate-fade-in hover-lift p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-elegant-heading mb-2">{category.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-4">{category.description}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${category.color}`}>
                    {category.count} guides
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  Browse Guides
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Featured Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Our most popular and highly-rated research guides to get you started.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Card
                key={guide.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(Math.floor(guide.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary-500 fill-current" />
                  ))}
                  {guide.rating % 1 !== 0 && (
                    <Star className="h-4 w-4 text-secondary-500 fill-current opacity-50" />
                  )}
                </div>
                
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                    {guide.category}
                  </span>
                  
                  <h3 className="text-lg font-elegant-heading">{guide.title}</h3>
                  <p className="text-gray-600 font-elegant-body text-sm">{guide.description}</p>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>by {guide.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>{guide.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      View Guide
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              How to Use Our Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Get the most out of our research guides with these helpful tips.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Search Effectively',
                description: 'Use our guides to learn the best search strategies for your topic and find the most relevant resources.'
              },
              {
                icon: '📖',
                title: 'Follow the Structure',
                description: 'Our guides are organized to take you from basic concepts to advanced research techniques.'
              },
              {
                icon: '💡',
                title: 'Ask for Help',
                description: 'Don\'t hesitate to contact our librarians if you need assistance with any guide or resource.'
              }
            ].map((tip, index) => (
              <Card
                key={tip.title}
                className="text-center animate-fade-in p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-elegant-heading mb-3">{tip.title}</h3>
                <p className="text-gray-600 font-elegant-body">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Guide Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-elegant-body">
                Request a custom research guide for your specific topic or subject area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Request a Guide
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/collections/catalogue">
                    Browse Catalogue
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 