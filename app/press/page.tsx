import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function PressPage() {
  return <SitePageView page={sitePages['press']} />;
}
