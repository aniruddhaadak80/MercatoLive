import { Package } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Package strokeWidth={2} className="h-6 w-6" />
              <span className="font-bold text-xl">MercatoLive</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Experience real-time shopping with live inventory updates and seamless checkout
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories">All Categories</Link></li>
              <li><Link href="/deals">Deals</Link></li>
              <li><Link href="/new">What's New</Link></li>
              <li><Link href="/trending">Trending</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/shipping">Shipping Info</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MercatoLive. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}