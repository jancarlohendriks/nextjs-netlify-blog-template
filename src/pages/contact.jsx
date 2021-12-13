import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import RecommendedPosts from "../sections/RecommendedPosts";
import PageHeader from "../sections/PageHeader";

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
			<article>
				<PageHeader title={'Contact'} />
				<div className="panel dot-shadow bg-tertiary-glare">
					<div className="[ page-content ] [ flow wrapper ] [ flow-space-700 ]">
						<p>
							This is a made up agency that is being used as a context for the
							project that you build when you <a href="https://piccalil.li/course/learn-eleventy-from-scratch/">learn Eleventy from scratch</a>,
							so ideally, you shouldn’t try to contact us.
						</p>
						<p>
							You can go ahead and purchase the course to build this
							page—amongst <a href="../index.html">the rest of the site</a>—by
							visiting <a href="https://piccalil.li/course/learn-eleventy-from-scratch/">Piccalilli</a>.
						</p>
					</div>
				</div>
			</article>
    </Layout>
  );
}
