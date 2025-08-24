import { Gift, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AmazonRegistryLinkButton } from '@/components/client-buttons'

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
            Help us create our perfect sanctuary together. Your thoughtful gifts will help us start our new chapter in style.
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
                For your convenience, we've created an Amazon registry with a variety of gifts and easy shipping options.
              </p>
              <AmazonRegistryLinkButton />
            </CardContent>
          </Card>
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
