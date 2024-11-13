import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Laptop, Shirt, BookOpen, Home, Package } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: 'Electronics',
    description: 'Latest gadgets and tech accessories',
    icon: Laptop,
    href: '/shop?category=electronics',
    color: 'text-blue-500',
  },
  {
    name: 'Clothing',
    description: 'Fashion and apparel',
    icon: Shirt,
    href: '/shop?category=clothing',
    color: 'text-purple-500',
  },
  {
    name: 'Books',
    description: 'Books and publications',
    icon: BookOpen,
    href: '/shop?category=books',
    color: 'text-yellow-500',
  },
  {
    name: 'Home',
    description: 'Home decor and furniture',
    icon: Home,
    href: '/shop?category=home',
    color: 'text-green-500',
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Categories</h1>
          <p className="text-xl text-muted-foreground">
            Browse our collection by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className={`p-3 w-fit rounded-lg bg-background ${category.color}`}>
                      <Icon strokeWidth={2} className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">{category.name}</h2>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}