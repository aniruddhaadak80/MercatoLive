import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function TermsPage() {
  return <SitePageView page={sitePages['terms']} />;
}
