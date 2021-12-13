import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
	console.log(router);
  return (
    <>
			<a className="[ skip-link ] [ button ]" href="#main-content">Skip to content</a>
			<header role="banner" className="site-head">
				<div className="wrapper">
					<div className="site-head__inner">
						{/* <a href="/" aria-label="Jan Carlo" className="site-head__brand">
							Jan Carlo
						</a> */}
						<nav className="[ nav ] [ site-head__nav ] [ font-sans ]" aria-label="Primary navigaton">
							<ul className="nav__list">
								<li>
									<Link href="/">
										<a aria-current={router.pathname === "/" ? "page" : null}>Home</a>
									</Link>
								</li>
								<li>
									<Link href="/posts/read-me">
										<a aria-current={router.pathname === "/posts/read-me" ? "page" : null}>Reading Guide</a>
									</Link>
								</li>
								<li>
									<Link href="/posts">
										<a aria-current={router.pathname === "/posts" ? "page" : null}>Portfolio</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
    </>
  );
}
