import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Shop Smarter with{' '}
              <span className="text-primary">Real-Time</span> Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Experience seamless shopping with live inventory tracking and instant updates.
              Never miss out on your favorite items again.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/shop">
                  Shop Now <ArrowRight strokeWidth={2} className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Package strokeWidth={2} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Inventory</h3>
              <p className="text-muted-foreground">
                Live stock updates ensure you always know product availability
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Truck strokeWidth={2} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick and reliable shipping with real-time tracking updates
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <ShieldCheck strokeWidth={2} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Shopping</h3>
              <p className="text-muted-foreground">
                Protected payments and secure checkout process
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}