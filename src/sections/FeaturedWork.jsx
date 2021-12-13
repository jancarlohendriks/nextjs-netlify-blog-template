import Link from "next/link";

const FeaturedWork = () => {
	return (
		<article className="[ featured-work ] [ dot-shadow panel ] [ bg-light-glare ]">
			<div className="[ wrapper ] [ flow ]">
				<div className="[ featured-work__inner ] [ flow ]">
					<div className="[ featured-work__intro ] [ flow flow-space-300 ]">
						<h2
							className="[ featured-work__heading ] [ headline ] [ color-quinary-shade lg:measure-micro ]"
							data-highlight="dark"
						>
							Selected work
						</h2>
						<p className="[ featured-work__summary ] [ measure-compact ]">
							Some stuff that should give you an idea of what we’re all about.
						</p>
					</div>
					<a
						href="/work/outgoings/"
						aria-label="See Outgoings iOS App"
						className="[ featured-work__item ] [ frame ]"
						data-frame="quaternary"
					>
						{/* <Image src="/images/work/outgoings-hero.jpg" alt="Screens from the app, composed together as a group." loading="lazy" className="radius" layout="fill" /> */}
					</a>
					<a
						href="/work/behind-the-scenes/"
						aria-label="See Behind the scenes"
						className="[ featured-work__item ] [ frame ]"
						data-frame="quaternary"
					>
						{/* <Image src="/images/work/behind-the-scenes-hero.jpg" alt="A composition of all the views from the app" loading="lazy" className="radius" layout="fill" /> */}
					</a>
					<a
						href="/work/brunch-and-brew/"
						aria-label="See Brunch &amp; Brew"
						className="[ featured-work__item ] [ frame ]"
						data-frame="quaternary"
					>
						{/* <Image src="/images/work/brunch-and-brew-hero.jpg" alt="A composition of the main landing screen and other key views" loading="lazy" className="radius" layout="fill" /> */}
					</a>
				</div>
				<div className="[ featured-work__action ] [ flow-space-700 ]">
					<a href="/work/" className="button">
						See more work
					</a>
				</div>
			</div>
		</article>
	)
}

export default FeaturedWork
