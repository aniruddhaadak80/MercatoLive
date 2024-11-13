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
    color: 'text-blue-500 border-blue-500',
  },
  {
    name: 'Clothing',
    description: 'Fashion and apparel',
    icon: Shirt,
    href: '/shop?category=clothing',
    color: 'text-purple-500 border-purple-500',
  },
  {
    name: 'Books',
    description: 'Books and publications',
    icon: BookOpen,
    href: '/shop?category=books',
    color: 'text-yellow-500 border-yellow-500',
  },
  {
    name: 'Home',
    description: 'Home decor and furniture',
    icon: Home,
    href: '/shop?category=home',
    color: 'text-green-500 border-green-500',
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white animate-pulse">
            Categories
          </h1>
          <p className="text-xl text-gray-400">
            Browse our collection by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className={`p-6 h-full border rounded-lg shadow-lg transition-all transform hover:scale-105 ${category.color} hover:shadow-${category.color}`}>
                  <div className="space-y-4 text-center">
                    <div className={`p-3 w-fit mx-auto rounded-full border ${category.color} transition-all hover:scale-110 animate-pulse`}>
                      <Icon strokeWidth={2} className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-white animate-fadeIn">{category.name}</h2>
                      <p className="text-sm text-gray-300">
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
