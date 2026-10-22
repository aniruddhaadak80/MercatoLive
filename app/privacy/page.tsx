import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function PrivacyPage() {
  return <SitePageView page={sitePages['privacy']} />;
}
