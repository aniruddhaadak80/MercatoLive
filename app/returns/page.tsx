import SitePageView from '@/components/layout/site-page';
import { sitePages } from '@/lib/site-pages';

export default function ReturnsPage() {
  return <SitePageView page={sitePages['returns']} />;
}
