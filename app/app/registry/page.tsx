
import { Gift, Heart, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AmazonRegistryLinkButton, FindOnAmazonButton } from '@/components/client-buttons'

const wishlistItems = [
  {
    category: "Home Décor",
    items: [
      { name: "Vintage Gothic Mirror", price: "$180", description: "Ornate black mirror with intricate detailing" },
      { name: "Dark Crystal Candelabras", price: "$120", description: "Set of 3 black metal candelabras with crystal accents" },
      { name: "Victorian-style Wall Sconces", price: "$200", description: "Pair of elegant gothic wall lighting fixtures" },
      { name: "Black Velvet Throw Pillows", price: "$60", description: "Set of 4 luxurious velvet pillows in deep purple and black" }
    ]
  },
  {
    category: "Kitchen & Dining",
    items: [
      { name: "Black Stoneware Dinnerware Set", price: "$250", description: "12-piece matte black ceramic dinnerware" },
      { name: "Gothic Wine Goblets", price: "$80", description: "Set of 6 ornate black and silver wine glasses" },
      { name: "Cast Iron Dutch Oven", price: "$150", description: "Professional-grade black enamel cookware" },
      { name: "Copper Moscow Mule Mugs", price: "$90", description: "Set of 4 blackened copper cocktail mugs" }
    ]
  },
  {
    category: "Bedroom & Bath",
    items: [
      { name: "Egyptian Cotton Sheet Set", price: "$200", description: "Luxurious deep purple or black sheets, king size" },
      { name: "Plush Bath Towel Set", price: "$120", description: "Hotel-quality towels in charcoal or deep plum" },
      { name: "Essential Oil Diffuser", price: "$75", description: "Modern black ceramic aromatherapy diffuser" },
      { name: "Silk Pillowcases", price: "$85", description: "Set of 2 mulberry silk pillowcases in dark colors" }
    ]
  },
  {
    category: "Experiences & Memories",
    items: [
      { name: "Wine Tasting Experience", price: "$300", description: "Private wine tasting for two at local gothic winery" },
      { name: "Professional Photo Session", price: "$500", description: "Couples photography session in atmospheric locations" },
      { name: "Gothic Architecture Tour", price: "$200", description: "Guided tour of historic gothic buildings and sites" },
      { name: "Date Night Fund", price: "Any amount", description: "Contribution towards romantic dinners and adventures" }
    ]
  }
]

export default function RegistryPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Gift className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="gothic-title text-5xl font-bold text-primary mb-4">
            Wedding Registry
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us create our perfect gothic sanctuary together. Your thoughtful gifts will help us start our new chapter in style.
          </p>
        </div>

        {/* Amazon Registry Link */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="gothic-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent mr-3 fill-current" />
                <h2 className="gothic-title text-2xl font-semibold text-foreground">
                  Amazon Wedding Registry
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                For your convenience, we've also created an Amazon registry with additional items and easy shipping options.
              </p>
              <AmazonRegistryLinkButton />
            </CardContent>
          </Card>
        </div>

        {/* Wishlist Categories */}
        <div className="space-y-8">
          {wishlistItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-accent mr-3" />
                <h2 className="gothic-title text-3xl font-bold text-primary">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex} 
                    className="gothic-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl group"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="gothic-title text-lg text-foreground group-hover:text-accent transition-colors">
                          {item.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <FindOnAmazonButton itemName={item.name} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="mt-16">
          <Card className="gothic-card border-border max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-current" />
              <h3 className="gothic-title text-2xl font-semibold text-foreground mb-4">
                Your Presence is the Greatest Gift
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                While we're grateful for any gifts you choose to give, please know that your presence at our wedding 
                is the most meaningful gift of all. We're simply excited to celebrate our love with the people who matter most to us.
              </p>
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Questions about the registry? Contact us at:</p>
                <p className="text-accent">dillonandmiawedding@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
