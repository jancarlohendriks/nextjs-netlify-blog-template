import Link from "next/link";

const Cta = ({ title, body, linkHref, linkText }) => {
	return (
		<article className="[ cta ] [ dot-shadow panel ] [ bg-dark-shade color-light ]">
			<div className="wrapper">
				<div className="[ cta__inner ] [ flow ]">
					<h2
						className="[ cta__heading ] [ headline ]"
						data-highlight="quaternary"
					>
						{title}
					</h2>
					<p className="[ cta__summary ] [ measure-short ]">
						{body}
					</p>
					<div className="cta__action">
						<Link href={linkHref}>
							<a
								className="button"
								data-variant="ghost"
							>
								{linkText}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Cta
