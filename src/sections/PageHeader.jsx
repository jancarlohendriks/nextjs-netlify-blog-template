import Date from "../components/Date";
import TagButton from "../components/TagButton"
import { getTag } from "../lib/tags";

const PageHeader = ({title='', date=null, tags=[], body=''}) => {
	return (
		<header className="[ page-header ] [ bg-light-glare ]">
			<div className="[ wrapper ] [ flow ]">
				{ title && <h1 className="[ page-header__heading ] [ headline ]" data-highlight="primary">{title}</h1> }
				{/* { date!='' || body!='' || tags!=[] && */}
					<div className="[ page-header__summary ] [ measure-long ]">
						{ date && <Date date={date} /> }
						{ body && <p>{body}</p> }
						<p className="visually-hidden" id="tags-desc">
							Tags that this post has been filed under.
						</p>
						{ tags && <ul className="tags-list" aria-describedby="tags-desc">
							{ tags.map((it, i) => (
								<li key={i}>
									<TagButton tag={getTag(it)} />
								</li>
							)) }
						</ul> }
					</div>
				{/* } */}
			</div>
		</header>
	)
}

export default PageHeader
