import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Wifi,
  Snowflake,
  Car,
  MapPin,
  Clock,
  Users,
  Star,
  Bath,
  Tv,
  Wind,
  Menu,
  X
} from 'lucide-react'

const Index = () => {
  const currentYear = new Date().getFullYear()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close menu after navigation
  }

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Snowflake, label: 'Air Conditioning' },
    { icon: Bath, label: 'Hot Tub/Jacuzzi' },
    { icon: Wind, label: 'Private Balconies' },
    { icon: Car, label: 'Free Private Parking' },
    { icon: Tv, label: 'TV in Each Room' }
  ]

  const rooms = [
    {
      type: 'Standard Room',
      price: '6,500 - 9,000 LKR',
      period: 'per night',
      image: '/lovable-uploads/9105e9a6-cfec-49ca-a0da-efd86fc77680.png',
      features: ['Air Conditioning', 'Private Bathroom', 'Free WiFi', 'TV']
    },
    {
      type: 'Deluxe Room',
      price: '10,000 - 13,000 LKR',
      period: 'per night',
      image: '/lovable-uploads/fdd0af9a-98fb-4f23-a105-bb00fbf33b08.png',
      features: [
        'Private Balcony',
        'Jacuzzi Access',
        'Air Conditioning',
        'Premium Amenities'
      ]
    }
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='bg-gradient-hero text-white py-4 px-6 sticky top-0 z-50 backdrop-blur-sm'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Shanvila Guestrooms</h1>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6'>
            <button
              onClick={() => scrollToSection('rooms')}
              className='hover:text-cream transition-colors'
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className='hover:text-cream transition-colors'
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className='hover:text-cream transition-colors'
            >
              Location
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg mx-6 py-4 animate-fade-in'>
            <nav className='flex flex-col space-y-2'>
              <button
                onClick={() => scrollToSection('rooms')}
                className='text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors'
              >
                Rooms
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className='text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors'
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className='text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors'
              >
                Location
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('/lovable-uploads/7c1be315-9915-46a4-a16e-5a64328c3607.png')`
          }}
        />
        <div className='absolute inset-0 bg-gradient-hero' />
        <div className='relative z-10 text-center text-white px-6'>
          <h2 className='text-5xl md:text-7xl font-bold mb-6 animate-fade-in'>
            Shanvila Guestrooms
          </h2>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl mx-auto'>
            Experience serenity in Galle with our comfortable accommodations,
            featuring air conditioning, private balconies, and peaceful garden
            views.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='tropical'
              size='xl'
              className='shadow-elegant'
              onClick={() => scrollToSection('rooms')}
            >
              Explore Our Rooms
            </Button>
            <Button
              variant='outline'
              size='xl'
              className='bg-white/10 border-white/30 text-white hover:bg-white/20'
              onClick={() => scrollToSection('gallery')}
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id='rooms' className='py-20 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-primary mb-4'>
              Our Comfortable Rooms
            </h3>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Choose from our carefully designed rooms, each offering modern
              amenities and a peaceful atmosphere for your stay in Galle.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {rooms.map((room, index) => (
              <Card
                key={index}
                className='overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2'
              >
                <div
                  className='h-64 bg-cover bg-center'
                  style={{ backgroundImage: `url(${room.image})` }}
                />
                <CardHeader>
                  <CardTitle className='text-2xl text-primary'>
                    {room.type}
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    <span className='text-2xl font-bold text-tropical-teal'>
                      {room.price}
                    </span>
                    <span className='text-muted-foreground ml-2'>
                      {room.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {room.features.map((feature, i) => (
                      <Badge
                        key={i}
                        variant='secondary'
                        className='bg-accent/90 text-accent-foreground'
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant='tropical' className='w-full'>
                    Book This Room
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id='gallery' className='py-20 px-6 bg-soft-gray'>
        <div className='container mx-auto'>
          <h3 className='text-4xl font-bold text-center text-primary mb-16'>
            Experience Shanvila
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              '/lovable-uploads/0c47f57d-229d-414c-8100-f015b3419882.png',
              '/lovable-uploads/d16099c5-5925-46f3-88cd-82b7fe59e5bf.png',
              '/lovable-uploads/763e967a-60bc-4d37-8bf7-1cb1fff84459.png',
              '/lovable-uploads/3d127b9c-f717-4acd-b89f-6858ea037cc5.png',
              '/lovable-uploads/bafed293-8641-4c1b-9d8d-c97d6ed580e8.png',
              '/lovable-uploads/06fcdef0-4153-44c3-b2b3-1d9d4c88621d.png'
            ].map((image, index) => (
              <div
                key={index}
                className='h-64 bg-cover bg-center rounded-lg shadow-warm hover:shadow-elegant transition-all duration-300 transform hover:scale-105'
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id='amenities' className='py-20 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-primary mb-4'>
              Premium Amenities
            </h3>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Enjoy our carefully selected amenities designed to make your stay
              comfortable and memorable.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {amenities.map((amenity, index) => (
              <div key={index} className='text-center group'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-tropical rounded-full flex items-center justify-center text-white shadow-tropical group-hover:shadow-elegant transition-all duration-300 transform group-hover:scale-110'>
                  <amenity.icon size={32} />
                </div>
                <p className='text-sm font-medium text-primary'>
                  {amenity.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Info Section */}
      <section id='location' className='py-20 px-6 bg-soft-gray'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-4xl font-bold text-primary mb-8'>
                Location & Information
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <MapPin
                    className='text-tropical-teal mt-1 flex-shrink-0'
                    size={20}
                  />
                  <div>
                    <h4 className='font-semibold text-primary mb-2'>Address</h4>
                    <p className='text-muted-foreground'>
                      82/2B1 Ginthota Kalegana Road
                      <br />
                      Piyadigama, Galle, Sri Lanka
                      <br />
                      11 miles from Kaggala Airport
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Clock
                    className='text-tropical-teal mt-1 flex-shrink-0'
                    size={20}
                  />
                  <div>
                    <h4 className='font-semibold text-primary mb-2'>
                      Check-in & Check-out
                    </h4>
                    <p className='text-muted-foreground'>
                      <strong>Check-in:</strong> 3:00 PM - 6:00 PM
                      <br />
                      <strong>Check-out:</strong> 8:00 AM - 11:00 AM
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Users
                    className='text-tropical-teal mt-1 flex-shrink-0'
                    size={20}
                  />
                  <div>
                    <h4 className='font-semibold text-primary mb-2'>
                      Guest Policy
                    </h4>
                    <p className='text-muted-foreground'>
                      Children of all ages are welcome
                      <br />
                      Cribs and extra beds are not available
                      <br />
                      Cancellation policies vary by room type
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='h-96 bg-cover bg-center rounded-lg shadow-warm'
                style={{
                  backgroundImage: `url('/lovable-uploads/10acfb31-a454-4739-bdee-ec3104a06a4d.png')`
                }}
              />
              <div className='mt-8 text-center'>
                <h4 className='text-xl font-semibold text-primary mb-4'>
                  Ready to Experience Shanvila?
                </h4>
                <Button variant='tropical' size='lg' className='shadow-elegant'>
                  Book Your Stay Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-primary text-primary-foreground py-12 px-6'>
        <div className='container mx-auto text-center'>
          <h4 className='text-2xl font-bold mb-4'>Shanvila Guestrooms</h4>
          <p className='text-cream mb-6'>
            Your peaceful retreat in the heart of Galle, Sri Lanka
          </p>
          <div className='flex justify-center space-x-8 mb-6'>
            <div className='flex items-center gap-2'>
              <Wifi size={16} />
              <span>Free WiFi</span>
            </div>
            <div className='flex items-center gap-2'>
              <Car size={16} />
              <span>Free Parking</span>
            </div>
            <div className='flex items-center gap-2'>
              <Bath size={16} />
              <span>Hot Tub</span>
            </div>
          </div>
          <Separator className='my-6 bg-primary-foreground/20' />
          <div className='flex flex-col items-center gap-4'>
            <p className='text-sm text-cream'>
              © {currentYear} Shanvila Guestrooms. All rights reserved.
            </p>
            <a
              href='tel:0791483839'
              className='text-sm text-cream hover:text-white transition-colors underline'
            >
              Contact Developer: 0791483839
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
