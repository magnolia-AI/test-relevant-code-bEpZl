'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ButtonDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Button Showcase</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Copper Buttons</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="copper" className="px-10 py-4 text-xl">
                Click
              </Button>
              <Button variant="copper" className="p-4 aspect-square rounded-full">
                💩
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="copper" size="lg" className="px-8">
                Large
              </Button>
              <Button variant="copper" className="px-6">
                Default
              </Button>
              <Button variant="copper" size="sm" className="px-4">
                Small
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Standard Variants</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" onClick={() => window.history.back()}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}
