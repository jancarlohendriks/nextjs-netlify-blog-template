import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
		<>
			{ pagination.length == 1 ? null :
				<footer className="[ pagination ] [ dot-shadow panel ] [ bg-light-glare font-sans weight-bold ]">
					<div className="wrapper">
						<nav className="pagination__inner" aria-label="Pagination links">
							{ pagination[current - 2]?.page &&
								<Link href={link.href(pagination[current - 2].page)} as={link.as(pagination[current - 2].page)}>
									<a data-direction="backwards">Newer posts</a>
								</Link>
							}
							{ pagination[current]?.page &&
								<Link href={link.href(pagination[current].page)} as={link.as(pagination[current].page)}>
									<a data-direction="forwards">Older posts</a>
								</Link>
							}
							
							{/* <a href={} data-direction="backwards">
								<span>Newer posts</span>
							</a> */}
							{/* <a href="/blog/page/1/#post-list" data-direction="forwards">
								<span>Older posts</span>
							</a> */}
							{/* <ul>
								{ pagination.map((it, i) => (
									<li key={i}>
										{ it.excerpt ? ("...") :
											<Link href={link.href(it.page)} as={link.as(it.page)}>
												<a className={it.page === current ? "active" : null}>{it.page}</a>
											</Link>
										}
									</li>
								))}
							</ul> */}
							{/* <a href="/blog/page/1/#post-list" data-direction="forwards">
								<span>Older posts</span>
							</a> */}
						</nav>
					</div>
				</footer> }
		</>
  );
}
