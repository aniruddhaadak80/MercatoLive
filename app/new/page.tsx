import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function NewPage() {
  return <SitePageView page={sitePages['new']} />;
}
