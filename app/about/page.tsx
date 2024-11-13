export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About MercatoLive</h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing online shopping with real-time inventory management and seamless experiences.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            MercatoLive was founded with a simple yet powerful vision: to create a shopping
            experience that's truly real-time and transparent. We believe that shoppers
            should always know exactly what's available, when it's available, and be able
            to make informed decisions instantly.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide the most transparent and efficient e-commerce platform, where
            real-time inventory updates meet seamless shopping experiences. We're
            committed to making online shopping as intuitive and reliable as shopping
            in person – if not better.
          </p>

          <h2>What Sets Us Apart</h2>
          <ul>
            <li>Real-time inventory tracking across all products</li>
            <li>Instant notifications for stock updates</li>
            <li>Seamless checkout process</li>
            <li>Transparent shipping and delivery tracking</li>
            <li>Dedicated customer support</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We're committed to providing not just products, but an entire shopping
            ecosystem that puts you first. From the moment you browse our catalog to
            the instant your package arrives at your doorstep, we ensure every step
            is smooth, transparent, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
}