import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

import PageHeader from "../sections/PageHeader";

type Props = {
	title: string;
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ title='', posts=[], tags=[], pagination=null }: Props) {
  return (
		<article>
			<PageHeader title={title} tags={tags.map(x => x.slug)} body={''} />
			
			{/* <section>
				<ul className={"categories"}>
					{tags.map((it, i) => (
						<li key={i}>
							<TagLink tag={it} />
						</li>
					))}
				</ul>
			</section> */}
			
			<div className="[ dot-shadow panel ] [ bg-secondary-glare ]" id="post-list">
				<div className="[ wrapper ] [ flow flow-space-700 ]">
					<div>
						<ol className="[ post-list ] [ flow ]">
							{posts.map((it, i) => (
								<li key={i} className="[ post-list__item ] [ leading-tight measure-long ]">
									<PostItem post={it} />
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>

			{/* <section className="[ panel ] [ flow flow-space-300 ]">
				<div className="[ wrapper ]">
					<nav className={"categories"}>
						{tags.map((it, i) => (
							<span key={i}>
								<TagLink tag={it} /> &nbsp;
							</span>
						))}
					</nav>
				</div>
			</section> */}
			
			<Pagination
				current={pagination.current}
				pages={pagination.pages}
				link={{
					href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
					as: (page) => (page === 1 ? null : "/posts/page/" + page),
				}}
			/>
		</article>
    // <div className={"container"}>
    //   <div className={"posts"}>
    //     <ul className={"post-list"}>
    //       {posts.map((it, i) => (
    //         <li key={i}>
    //           <PostItem post={it} />
    //         </li>
    //       ))}
    //     </ul>
    //     <Pagination
    //       current={pagination.current}
    //       pages={pagination.pages}
    //       link={{
    //         href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
    //         as: (page) => (page === 1 ? null : "/posts/page/" + page),
    //       }}
    //     />
    //   </div>
    //   <ul className={"categories"}>
    //     {tags.map((it, i) => (
    //       <li key={i}>
    //         <TagLink tag={it} />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
