
import { MapPin, Plane, Hotel, Car, Clock, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BrowseHotelsButton } from '@/components/client-buttons'

export default function LocationPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="gothic-title text-5xl font-bold text-primary mb-4">
            Location & Travel
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in the heart of Atlanta for our special day. Here's everything you need to know about the location and travel arrangements.
          </p>
        </div>

        {/* Venue Information */}
        <div className="mb-12">
          <Card className="gothic-card border-border max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="gothic-title text-2xl text-center text-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2 text-accent" />
                Wedding Venue
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <h3 className="gothic-title text-xl font-semibold text-foreground">
                  Venue Selection in Progress
                </h3>
                <p className="text-muted-foreground">
                  We're currently finalizing our perfect gothic venue in Atlanta. 
                  Details will be updated here as soon as we've made our selection.
                </p>
                <div className="bg-muted/30 rounded-lg p-4 max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-foreground">October 24, 2026</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-foreground">Atlanta, Georgia</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travel & Accommodations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Getting to Atlanta */}
          <Card className="gothic-card border-border hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="gothic-title text-xl text-foreground flex items-center">
                <Plane className="w-6 h-6 mr-3 text-accent" />
                Getting to Atlanta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">By Air</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  <strong>Hartsfield-Jackson Atlanta International Airport (ATL)</strong>
                </p>
                <p className="text-muted-foreground text-sm">
                  The world's busiest airport with direct flights from most major cities. 
                  Located about 20 minutes from downtown Atlanta.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                <p className="text-muted-foreground text-sm">
                  Atlanta is easily accessible via I-75, I-85, I-20, and I-285. 
                  Parking information will be provided with venue details.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Public Transit</h4>
                <p className="text-muted-foreground text-sm">
                  MARTA (Metro Atlanta Rapid Transit) connects the airport to downtown and various neighborhoods.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="gothic-card border-border hover:border-accent/50 transition-colors">
            <CardHeader>
              <CardTitle className="gothic-title text-xl text-foreground flex items-center">
                <Hotel className="w-6 h-6 mr-3 text-accent" />
                Where to Stay
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Hotel Blocks</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  We'll be arranging discounted room blocks at select hotels. 
                  Booking information will be shared once available.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-foreground text-sm">Downtown Atlanta</h5>
                  <p className="text-muted-foreground text-xs">Close to nightlife, restaurants, and attractions</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground text-sm">Midtown</h5>
                  <p className="text-muted-foreground text-xs">Arts district with museums and parks</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground text-sm">Buckhead</h5>
                  <p className="text-muted-foreground text-xs">Upscale area with luxury shopping and dining</p>
                </div>
              </div>

              <BrowseHotelsButton />
            </CardContent>
          </Card>
        </div>

        {/* Local Transportation */}
        <div className="mb-12">
          <Card className="gothic-card border-border">
            <CardHeader>
              <CardTitle className="gothic-title text-xl text-foreground flex items-center justify-center">
                <Car className="w-6 h-6 mr-3 text-accent" />
                Getting Around Atlanta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rideshare</h4>
                  <p className="text-muted-foreground text-sm">
                    Uber and Lyft are widely available throughout the metro area
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">MARTA</h4>
                  <p className="text-muted-foreground text-sm">
                    Public transit system with rail and bus service across the city
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rental Cars</h4>
                  <p className="text-muted-foreground text-sm">
                    Available at the airport and throughout the city for exploring
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Things to Do in Atlanta */}
        <div className="mb-12">
          <h2 className="gothic-title text-3xl font-bold text-primary text-center mb-8">
            Explore Atlanta
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Historic Districts</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Explore Virginia-Highland, Little Five Points, and Inman Park for unique shopping and dining
                </p>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Cultural Attractions</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  High Museum of Art, Atlanta History Center, and the Fox Theatre
                </p>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Food Scene</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  From Southern comfort food to international cuisine and craft cocktails
                </p>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Outdoor Spaces</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Atlanta BeltLine, Piedmont Park, and the Atlanta Botanical Garden
                </p>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Nightlife</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Rooftop bars, live music venues, and unique cocktail lounges
                </p>
              </CardContent>
            </Card>

            <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h4 className="gothic-title font-semibold text-foreground mb-3">Shopping</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Ponce City Market, Atlantic Station, and eclectic vintage stores
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <Card className="gothic-card border-border max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="gothic-title text-xl font-semibold text-foreground mb-4">
                Need Help with Travel?
              </h3>
              <p className="text-muted-foreground mb-4">
                Have questions about transportation, accommodations, or Atlanta recommendations? 
                We're here to help make your visit memorable.
              </p>
              <p className="text-accent">dillonandmiawedding@gmail.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
