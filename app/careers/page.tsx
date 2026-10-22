import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function CareersPage() {
  return <SitePageView page={sitePages['careers']} />;
}
