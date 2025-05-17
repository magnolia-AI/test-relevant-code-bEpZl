'use client'

import { Button } from '@/components/ui/button'

export default function ButtonDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Flatmorphism Button</h2>
          <p className="text-muted-foreground mb-6">
            Inspired by Jordan Singer's flatmorphism design style with multiple gradient layers and depth effects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="flatmorphism" size="lg" className="px-8 py-6 text-base font-medium">
              Flatmorphism Button
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Standard Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Default</h3>
              <Button>Default Button</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Secondary</h3>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Destructive</h3>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Outline</h3>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Ghost</h3>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-3">Link</h3>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><span className="text-lg">+</span></Button>
          </div>
        </section>
      </div>
    </div>
  )
}
