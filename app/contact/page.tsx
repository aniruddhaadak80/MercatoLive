import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function ContactPage() {
  return <SitePageView page={sitePages['contact']} />;
}
