
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Send, Check, Heart } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function RsvpForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    attendanceStatus: '',
    guestCount: '1',
    mealPreference: '',
    dietaryRestrictions: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to database
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          guestCount: parseInt(formData.guestCount)
        })
      })

      if (!response.ok) throw new Error('Failed to submit RSVP')

      // Open Gmail compose
      const emailSubject = encodeURIComponent('Wedding RSVP Response')
      const emailBody = encodeURIComponent(`
RSVP Details:
Name: ${formData.guestName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Attendance: ${formData.attendanceStatus}
Number of Guests: ${formData.guestCount}
Meal Preference: ${formData.mealPreference || 'None specified'}
Dietary Restrictions: ${formData.dietaryRestrictions || 'None'}
Message: ${formData.message || 'No message'}
      `)
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=dillonandmiawedding@gmail.com&su=${emailSubject}&body=${emailBody}`
      window.open(gmailUrl, '_blank')

      setIsSubmitted(true)
      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for your response. We've also opened Gmail for you to send us a copy.",
      })

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
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
            Thank you for responding to our wedding invitation. We've received your RSVP and are excited to celebrate with you!
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary/10">
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
                type="text"
                value={formData.guestName}
                onChange={(e) => handleInputChange('guestName', e.target.value)}
                className="bg-input border-border text-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-input border-border text-foreground"
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
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-input border-border text-foreground"
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
                <RadioGroupItem value="attending" id="attending" className="border-primary text-primary" />
                <Label htmlFor="attending" className="text-foreground cursor-pointer">
                  Yes, I'll be there to celebrate with you
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-attending" id="not-attending" className="border-primary text-primary" />
                <Label htmlFor="not-attending" className="text-foreground cursor-pointer">
                  Unfortunately, I cannot attend
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maybe" id="maybe" className="border-primary text-primary" />
                <Label htmlFor="maybe" className="text-foreground cursor-pointer">
                  I'm not sure yet
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendanceStatus === 'attending' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guestCount" className="text-foreground font-medium">
                  Number of Guests (including yourself) *
                </Label>
                <Select value={formData.guestCount} onValueChange={(value) => handleInputChange('guestCount', value)}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mealPreference" className="text-foreground font-medium">
                  Meal Preference
                </Label>
                <Select value={formData.mealPreference} onValueChange={(value) => handleInputChange('mealPreference', value)}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select meal preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-restrictions">No dietary restrictions</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="gluten-free">Gluten-free</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietaryRestrictions" className="text-foreground font-medium">
                  Additional Dietary Restrictions
                </Label>
                <Input
                  id="dietaryRestrictions"
                  type="text"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                  className="bg-input border-border text-foreground"
                  placeholder="Allergies, special requirements, etc."
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Message for the Happy Couple
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-input border-border text-foreground min-h-[100px]"
              placeholder="Share your thoughts, wishes, or any questions..."
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
