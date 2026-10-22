import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function SustainabilityPage() {
  return <SitePageView page={sitePages['sustainability']} />;
}
