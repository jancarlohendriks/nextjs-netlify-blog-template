import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import BasicMeta from "./meta/BasicMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import PostList from "./PostList";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, pagination }: Props) {
	const url = "/posts";
  const title = `“${tag.name}” posts`;
  return (
		<>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList title={`Blog posts filed under “${tag.name}”`} posts={posts} tags={[tag]} pagination={pagination} />
    </>
  );
}
