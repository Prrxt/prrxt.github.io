
import { HelpCircle, Heart, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqData = [
  {
    category: "Wedding Details",
    questions: [
      {
        question: "When and where is the wedding?",
        answer: "Our wedding will take place on October 24, 2026, in Atlanta, Georgia. We're currently finalizing our venue selection and will share specific location details once confirmed."
      },
      {
        question: "What should I wear?",
        answer: "Attire should be formal or semi-formal. No jeans, but don't feel obligated to dress up too much."
      },
      {
        question: "Will the ceremony be indoors or outdoors?",
        answer: "This will depend on our final venue selection. We'll update this information once we've confirmed our location. Rest assured, we'll have contingency plans for any weather."
      },
      {
        question: "What time should I arrive?",
        answer: "Detailed timing will be provided with your invitation and on this website once we finalize our venue. We recommend arriving 15-30 minutes before the ceremony begins."
      }
    ]
  },
  {
    category: "RSVP & Guest Information",
    questions: [
      {
        question: "When is the RSVP deadline?",
        answer: "Please RSVP by August 1st, 2026. This gives us enough time to finalize catering numbers and seating arrangements."
      },
      {
        question: "Can I bring a plus-one?",
        answer: "Plus-ones are specified on your invitation. If you're unsure whether you can bring a guest, please contact us directly at dillonandmiawedding@gmail.com."
      },
      {
        question: "Can I bring my children?",
        answer: "We've planned an adults-only celebration to create a certain atmosphere. We hope you'll use this as an opportunity for a special night out!"
      },
      {
        question: "What if I have dietary restrictions?",
        answer: "Please let us know about any dietary restrictions or food allergies when you RSVP. We'll work with our caterers to accommodate your needs."
      }
    ]
  },
  {
    category: "Travel & Accommodations",
    questions: [
      {
        question: "Where should I stay in Atlanta?",
        answer: "We're working on securing room blocks at select hotels with group rates. Check our Location page for recommended areas and we'll share booking codes once available."
      },
      {
        question: "How far is the venue from the airport?",
        answer: "Atlanta's Hartsfield-Jackson airport is generally 20-45 minutes from most locations in the city, depending on traffic and your destination."
      },
      {
        question: "Is there parking at the venue?",
        answer: "Parking information will be provided once we confirm our venue. Atlanta venues typically offer various parking options, and we'll ensure guests have clear directions."
      }
    ]
  },
  {
    category: "Wedding Logistics",
    questions: [
      {
        question: "Will there be an open bar?",
        answer: "Beer and wine will be provided, drink in moderation."
      },
      {
        question: "What's the schedule for the day?",
        answer: "A detailed timeline will be provided closer to the date, but expect a ceremony followed by cocktail hour and dinner."
      },
      {
        question: "Can I take photos during the ceremony?",
        answer: "We'll have a professional photographer capturing our special moments. We'll let you know our preference for guest photography during the ceremony in our detailed wedding information."
      }
    ]
  },
  {
    category: "Gifts & Registry",
    questions: [
      {
        question: "Do you have a wedding registry?",
        answer: "Yes! Check out our Registry page for our wishlist and Amazon registry link."
      },
      {
        question: "What if I prefer to give cash?",
        answer: "Your presence is the most important gift! If you prefer to give cash, cards can be placed in the card box at the reception. We also have a 'Date Night Fund' option on our registry."
      },
      {
        question: "Should I bring gifts to the wedding?",
        answer: "For convenience, we recommend having gifts shipped directly to us or bringing cards to the wedding. If you wish to bring gifts, we will provide a spot for them."
      }
    ]
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="gothic-title text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our special day. Can't find what you're looking for? 
            Don't hesitate to reach out to us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="gothic-card border-border">
              <CardContent className="p-6">
                <h2 className="gothic-title text-2xl font-bold text-primary mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-accent fill-current" />
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-accent transition-colors gothic-title font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <Card className="gothic-card border-border">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="gothic-title text-2xl font-semibold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We want to make sure you have all the information you need for our special day. 
                If you have any questions that aren't answered here, please don't hesitate to reach out to us directly.
              </p>
              <div className="space-y-2">
                <p className="text-accent font-medium">dillonandmiawedding@gmail.com</p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
