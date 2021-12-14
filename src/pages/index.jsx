import Link from "next/link";
// import Image from "next/image";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import Intro from "../sections/Intro";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
			<Intro />
      {/* <Cta
				title={'This is an agency that doesn’t actually exist'}
				body={'This is the project site you build when you take the “Learn Eleventy From Scratch” course so it is all made up as a pretend context. You will learn a lot about Eleventy by building this site though. Take the course today!'}
				linkHref={'https://piccalil.li/course/learn-eleventy-from-scratch/'}
				linkText={'Buy a copy'}
			/>
      <FeaturedWork />
      <StudioFeed />
			<Cta
				title={'Get in touch if we seem like a good fit'}
				body={'Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.'}
				linkHref={'/contact/'}
				linkText={'Start a new project'}
			/> */}
    </Layout>
  );
}
