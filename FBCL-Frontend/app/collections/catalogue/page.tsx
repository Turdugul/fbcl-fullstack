import { Metadata } from 'next'
import Link from 'next/link'
import { Search, Filter, BookOpen, Star, ArrowRight, Calendar, User, MapPin, ArrowLeft } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Library Catalogue',
  description: 'Search and browse our complete library catalogue including books, digital resources, and special collections.',
}

const categories = [
  'All Categories',
  'Reading Program',
  'Author Event',
  'Children',
  'Book Club',
  'Workshop',
  'Teen Program'
]

const formats = [
  'All Formats',
  'Print Books',
  'E-books',
  'Audiobooks',
  'DVDs',
  'CDs',
  'Magazines',
  'Reference Materials'
]

const sampleBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '9781786892737',
    category: 'Fiction',
    format: 'Print Books',
    status: 'Available',
    location: 'Fiction Section',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
    publishDate: '2020',
  },
  {
    id: 2,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    category: 'Non-Fiction',
    format: 'Print Books',
    status: 'Available',
    location: 'Non-Fiction Section',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop',
    description: 'A groundbreaking narrative of humanity\'s creation and evolution.',
    publishDate: '2015',
  },
  {
    id: 3,
    title: 'The Gruffalo',
    author: 'Julia Donaldson',
    isbn: '9780333710937',
    category: 'Children\'s Books',
    format: 'Print Books',
    status: 'Checked Out',
    location: 'Children\'s Section',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop',
    description: 'A clever mouse uses his wits to avoid being eaten by a hungry Gruffalo.',
    publishDate: '1999',
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
  },
]

export default function CataloguePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-elegant-heading mb-6">
              Library Catalogue
            </h1>
            <p className="text-xl text-gray-100 mb-8 font-elegant-body">
              Search our complete collection of books, digital resources, and materials. 
              Find your next great read or research resource.
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


      {/* Search Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-elegant-heading mb-6 text-center">
                Search Our Collection
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="md:col-span-2">
                    <Input
                      type="text"
                      placeholder="Search by title, author, ISBN, or keyword..."
                      className="w-full"
                    />
                  </div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">All Categories</option>
                    {categories.slice(1).map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <select className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">All Formats</option>
                    {formats.slice(1).map((format) => (
                      <option key={format} value={format}>{format}</option>
                    ))}
                  </select>
                  <select className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">All Status</option>
                    <option value="available">Available</option>
                    <option value="checked-out">Checked Out</option>
                    <option value="reserved">Reserved</option>
                  </select>
                  <Button variant="outline" className="w-full md:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Advanced Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-elegant-heading mb-2">
                Search Results
              </h2>
              <p className="text-gray-600 font-elegant-body">
                Showing {sampleBooks.length} items from our collection
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-elegant-body">Sort by:</span>
              <select className="w-auto px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="relevance">Relevance</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="date">Publication Date</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBooks.map((book, index) => (
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
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      book.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.status}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {book.format}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-elegant-heading">{book.title}</h3>
                  <p className="text-gray-600 font-elegant-body">by {book.author}</p>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>ISBN: {book.isbn}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{book.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{book.location}</span>
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
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="mr-4">
              Previous Page
            </Button>
            <span className="mx-4 text-gray-600 font-elegant-body">Page 1 of 15</span>
            <Button variant="outline" className="ml-4">
              Next Page
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Find what you need quickly with these popular categories and features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'New Arrivals', icon: '🆕', count: '45' },
              { title: 'Bestsellers', icon: '⭐', count: '120' },
              { title: 'Staff Picks', icon: '👥', count: '30' },
              { title: 'Local Authors', icon: '📝', count: '25' },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="text-center animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-elegant-heading mb-2">{item.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-4">{item.count} items</p>
                <Button variant="outline" size="sm">
                  Browse
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-elegant-heading mb-4">
                Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-elegant-body">
                Our librarians are here to help you find exactly what you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Ask a Librarian
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/collections/guides">
                    View Research Guides
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