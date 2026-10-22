import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function DealsPage() {
  return <SitePageView page={sitePages['deals']} />;
}
