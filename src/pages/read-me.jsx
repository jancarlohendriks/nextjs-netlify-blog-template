import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import RecommendedPosts from "../sections/RecommendedPosts";
import PageHeader from "../sections/PageHeader";

export default function ReadMe() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
			<article>
			<PageHeader title={'A Complete Guide to Wireframe Design'} date={new Date('2020-04-13T00:00:00.000Z')} tags={['document']} />
				<div className="[ page-content ] [ flow wrapper ] [ flow-space-700 gap-top-700 ]">
					
				</div>
				<RecommendedPosts />
			</article>
    </Layout>
  );
}
