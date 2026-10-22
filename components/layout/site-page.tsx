import type { SitePage } from '@/lib/site-pages';

export default function SitePageView({ page }: { page: SitePage }) {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-glow animate-float">
            {page.title} {page.highlight ? <span className="text-primary">{page.highlight}</span> : null}
          </h1>
          <p className="text-xl text-muted-foreground animate-pulse">{page.subtitle}</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="animate-fadeInUp">{page.intro}</p>

          {page.sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="text-3xl font-semibold animate-slideInLeft">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="animate-fadeInUp">
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="space-y-2 list-disc list-inside animate-fadeIn">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
