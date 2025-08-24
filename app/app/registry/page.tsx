
import { Gift, Heart, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AmazonRegistryLinkButton, FindOnAmazonButton } from '@/components/client-buttons'

const wishlistItems = [
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
