'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Send, Check, Heart } from 'lucide-react'

export default function RsvpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    attendanceStatus: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mandwbwn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      setIsSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="gothic-card border-border">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="gothic-title text-2xl font-bold text-primary mb-4">
            RSVP Submitted Successfully!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for responding to our wedding invitation. We can’t wait to celebrate with you!
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            Submit Another RSVP
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="gothic-card border-border">
      <CardHeader>
        <CardTitle className="gothic-title text-2xl text-center text-primary flex items-center justify-center">
          <Heart className="w-6 h-6 mr-2 text-accent" />
          Please Respond by September 24, 2026
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guestName" className="text-foreground font-medium">
                Full Name *
              </Label>
              <Input
                id="guestName"
                name="guestName"
                type="text"
                value={formData.guestName}
                onChange={(e) => handleInputChange('guestName', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-foreground font-medium">Will you be attending? *</Label>
            <RadioGroup
              value={formData.attendanceStatus}
              onValueChange={(value) => handleInputChange('attendanceStatus', value)}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="attending" id="attending" />
                <Label htmlFor="attending">Yes, I'll be there</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-attending" id="not-attending" />
                <Label htmlFor="not-attending">Unfortunately, I cannot attend</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maybe" id="maybe" />
                <Label htmlFor="maybe">I'm not sure yet</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Message for the Happy Couple
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Share your wishes..."
            />
          </div>

          <Button
            type="submit"
            disabled={!formData.guestName || !formData.email || !formData.attendanceStatus || isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gothic-title text-lg py-3"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Send RSVP
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
