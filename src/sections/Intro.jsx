import Link from "next/link";
import Image from "next/image";
import introPic from '../../public/images/intro.gif'

const Intro = () => {
	return (
		<div className="wrapper">
			<article className="intro">
				<div className="[ intro__header ] [ radius frame ]">
					<h1 className="[ intro__heading ] [ weight-normal text-400 md:text-600 ]">
						Digital Student Portfolio
						<em className="text-800 md:text-900 lg:text-major weight-bold">
							Jan Carlo <br /> Hendriks
						</em>
					</h1>
				</div>
				<div className="[ intro__content ] [ flow ]">
					<p className="intro__summary">
						Howdy! Let me present you my work for Creative Company <a href="https://bravoure.nl/en/">@Bravoure</a>.
					</p>
					<Link href="/posts">
						<a className="button">See my work</a>
					</Link>
				</div>
				<div className="[ intro__media ] [ radius dot-shadow ]">
					<Image
						className="[ intro__image ] [ radius ]"
						src={introPic}
						alt="Intro Picture"
						layout="fill"
					/>
					{/* <img
						className="[ intro__image ] [ radius ]"
						src="/images/intro.gif"
						alt="Buttered toasted white bread"
					/> */}
					{/* <Image className="[ intro__image ] [ radius ]" src="/images/bg/toast.jpg" alt="Buttered toasted white bread" layout="fill" /> */}
				</div>
			</article>
		</div>
	)
}

export default Intro
