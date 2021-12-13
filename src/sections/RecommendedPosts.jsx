const RecommendedPosts = () => {
	return (
		<footer className="recommended-posts">
			<div className="[ dot-shadow panel ] [ bg-secondary-glare ]" id="post-list">
				<div className="[ wrapper ] [ flow flow-space-700 ]">
					<h2 className="[ headline ] [ measure-micro ]" data-highlight="primary">More from the blog</h2>
					<div>
						<ol className="[ post-list ] [ flow ]">
							<li className="[ post-list__item ] [ leading-tight measure-long ]">
								<a href="/blog/laws-of-ux/" className="post-list__link">
									Laws of UX
								</a>
							</li>
							<li className="[ post-list__item ] [ leading-tight measure-long ]">
								<a href="/blog/design-thinking-and-understanding-the-product-design-process/" className="post-list__link">
									Design Thinking &amp; Understanding the Product Design Process
								</a>
							</li>
							<li className="[ post-list__item ] [ leading-tight measure-long ]">
								<a href="/blog/color-palette-generator/" className="post-list__link">
									Color Palette Generator
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default RecommendedPosts
