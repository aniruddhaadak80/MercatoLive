import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function HelpPage() {
  return <SitePageView page={sitePages['help']} />;
}
