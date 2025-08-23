
import RsvpForm from '@/components/rsvp-form'
import { Calendar, Heart, Users } from 'lucide-react'

export default function RsvpPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" fill="currentColor" />
          <h1 className="gothic-title text-5xl font-bold text-primary mb-4">
            RSVP
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground mb-8">
            Join us as we begin our eternal journey together
          </p>
          
          <div className="gothic-card rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-foreground">October 24, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-foreground">Atlanta, GA</span>
              </div>
            </div>
          </div>
        </div>

        <RsvpForm />
      </div>
    </div>
  )
}
