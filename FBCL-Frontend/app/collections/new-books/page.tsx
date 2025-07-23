import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Star, Calendar, User, ArrowRight, ArrowLeft, Heart, Eye } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'New Books',
  description: 'Discover the latest additions to our library collection, including new releases, recent acquisitions, and upcoming titles.',
}

const newBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '9781786892737',
    category: 'Fiction',
    format: 'Print Books',
    status: 'Available',
    location: 'New Books Section',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    publishDate: '2020',
    acquisitionDate: '2024-01-15',
    isNew: true
  },
  {
    id: 2,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    category: 'Non-Fiction',
    format: 'Print Books',
    status: 'Available',
    location: 'New Books Section',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop',
    description: 'A groundbreaking narrative of humanity\'s creation and evolution.',
    publishDate: '2015',
    acquisitionDate: '2024-01-20',
    isNew: true
  },
  {
    id: 3,
    title: 'The Gruffalo',
    author: 'Julia Donaldson',
    isbn: '9780333710937',
    category: 'Children\'s Books',
    format: 'Print Books',
    status: 'Available',
    location: 'Children\'s Section',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop',
    description: 'A clever mouse uses his wits to avoid being eaten by a hungry Gruffalo.',
    publishDate: '1999',
    acquisitionDate: '2024-01-25',
    isNew: true
  },
  {
    id: 4,
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    isbn: '9781501161933',
    category: 'Fiction',
    format: 'E-books',
    status: 'Available',
    location: 'Digital Collection',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop',
    description: 'A reclusive Hollywood legend reveals her life story to an unknown journalist.',
    publishDate: '2017',
    acquisitionDate: '2024-02-01',
    isNew: true
  },
  {
    id: 5,
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    category: 'Non-Fiction',
    format: 'Audiobooks',
    status: 'Available',
    location: 'Digital Collection',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop',
    description: 'Tiny changes create remarkable results in your life and work.',
    publishDate: '2018',
    acquisitionDate: '2024-02-05',
    isNew: true
  },
  {
    id: 6,
    title: 'The History of Friern Barnet',
    author: 'Local History Society',
    isbn: '9781234567890',
    category: 'Local History',
    format: 'Reference Materials',
    status: 'Available',
    location: 'Local History Section',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=300&fit=crop',
    description: 'A comprehensive history of the Friern Barnet area from ancient times to present.',
    publishDate: '2020',
    acquisitionDate: '2024-02-10',
    isNew: true
  }
]

const comingSoon = [
  {
    id: 1,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    expectedDate: '2024-03-01',
    category: 'Self-Help',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    expectedDate: '2024-03-15',
    category: 'Fiction',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    expectedDate: '2024-03-20',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop'
  }
]

export default function NewBooksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-elegant-heading mb-6">
              New Books
            </h1>
            <p className="text-xl text-gray-100 mb-8 font-elegant-body">
              Discover the latest additions to our library collection, including new releases, 
              recent acquisitions, and upcoming titles that are coming soon.
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

      {/* Latest Acquisitions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Latest Acquisitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Our newest additions to the library collection, carefully selected for our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newBooks.map((book, index) => (
              <Card
                key={book.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(Math.floor(book.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary-500 fill-current" />
                  ))}
                  {book.rating % 1 !== 0 && (
                    <Star className="h-4 w-4 text-secondary-500 fill-current opacity-50" />
                  )}
                </div>
                
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      New
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {book.format}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-elegant-heading">{book.title}</h3>
                  <p className="text-gray-600 font-elegant-body">by {book.author}</p>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Added {book.acquisitionDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{book.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm font-elegant-body line-clamp-3">
                    {book.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Reserve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Find new books in your favorite categories and discover new interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Fiction', count: 45, icon: '📚' },
              { title: 'Non-Fiction', count: 38, icon: '📖' },
              { title: 'Children\'s', count: 52, icon: '👶' },
              { title: 'Young Adult', count: 28, icon: '🎭' },
              { title: 'Local History', count: 12, icon: '🏛️' },
              { title: 'Science', count: 25, icon: '🔬' },
              { title: 'Art & Design', count: 18, icon: '🎨' },
              { title: 'Cooking', count: 22, icon: '👨‍🍳' }
            ].map((category, index) => (
              <Card
                key={category.title}
                className="text-center animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-elegant-heading mb-2">{category.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-4">{category.count} new books</p>
                <Button variant="outline" size="sm">
                  Browse
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Get excited about these upcoming additions to our collection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {comingSoon.map((book, index) => (
              <Card
                key={book.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                    Coming Soon
                  </span>
                  
                  <h3 className="text-lg font-elegant-heading">{book.title}</h3>
                  <p className="text-gray-600 font-elegant-body">by {book.author}</p>
                  
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Expected: {book.expectedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{book.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-elegant-body">
              Subscribe to our newsletter to be the first to know about new arrivals, 
              upcoming releases, and special collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 