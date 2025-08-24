
import { Heart, Calendar, MapPin, Gift } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto text-primary mb-6 animate-pulse" fill="currentColor" />
            <h1 className="gothic-title text-6xl md:text-8xl font-bold text-primary mb-4 tracking-wide">
              Dillon & Mia
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Join us to celebrate our love
            </p>
          </div>

          <div className="gothic-card rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Calendar className="w-6 h-6 text-accent" />
              <span className="gothic-title text-2xl font-semibold text-foreground">
                October 24, 2026
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-lg text-muted-foreground">Atlanta, Georgia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rsvp">
              <Button size="lg" className="gothic-title text-lg px-8 py-3 bg-primary hover:bg-primary/90">
                RSVP Now
              </Button>
            </Link>
            <Link href="/registry">
              <Button size="lg" variant="outline" className="gothic-title text-lg px-8 py-3 border-primary text-primary hover:bg-primary/10">
                <Gift className="w-5 h-5 mr-2" />
                View Registry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="gothic-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-accent mr-3" />
                  <h3 className="gothic-title text-xl font-semibold text-foreground">
                    Event Details
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Get all the information about our wedding location, travel, and accommodations in Atlanta.
                </p>
                <Link href="/location">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    View Location Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Gift className="w-8 h-8 text-primary mr-3" />
                  <h3 className="gothic-title text-xl font-semibold text-foreground">
                    Wedding Registry
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Help us start our new chapter together with gifts that reflect our unique style.
                </p>
                <Link href="/registry">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Browse Registry
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
