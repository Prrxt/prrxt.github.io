
'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, Gift } from 'lucide-react'

interface ClientButtonProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined
  onClick?: () => void
}

export function AmazonRegistryButton({ children, className, size, variant, onClick }: ClientButtonProps) {
  return (
    <Button 
      size={size}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function FindOnAmazonButton({ itemName }: { itemName: string }) {
  const handleClick = () => {
    const searchQuery = encodeURIComponent(itemName)
    window.open(`https://amazon.com/s?k=${searchQuery}`, '_blank')
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="w-full border-accent text-accent hover:bg-accent/10 transition-colors"
      onClick={handleClick}
    >
      <Gift className="w-4 h-4 mr-2" />
      Find on Amazon
    </Button>
  )
}

export function BrowseHotelsButton() {
  const handleClick = () => {
    window.open('https://www.booking.com/city/us/atlanta.html', '_blank')
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="w-full border-accent text-accent hover:bg-accent/10"
      onClick={handleClick}
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Browse Hotels in Atlanta
    </Button>
  )
}

export function AmazonRegistryLinkButton() {
  const handleClick = () => {
    window.open('https://amazon.com/wedding/registry', '_blank')
  }

  return (
    <Button 
      size="lg" 
      className="bg-primary hover:bg-primary/90 gothic-title text-lg px-8 py-3"
      onClick={handleClick}
    >
      <ExternalLink className="w-5 h-5 mr-2" />
      View Amazon Registry
    </Button>
  )
}
