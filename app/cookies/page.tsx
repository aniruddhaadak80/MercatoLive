import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function CookiesPage() {
  return <SitePageView page={sitePages['cookies']} />;
}
