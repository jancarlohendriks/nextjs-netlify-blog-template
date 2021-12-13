import React from 'react'

const StudioFeed = () => {
	return (
		<article className="[ studio-feed ] [ dot-shadow panel ] [ bg-tertiary-glare ]">
			<div className="[ wrapper ] [ flow flow-space-300 ]">
				<h2
					className="[ studio-feed__heading ] [ headline ] [ md:measure-micro ]"
					data-highlight="secondary"
				>
					From inside the studio
				</h2>
				<p className="visually-hidden" id="studio-feed-desc">
					A collection of images from around our studio and the people who
					work here.
				</p>
				<div className="[ studio-feed__items ] [ flow-space-700 ]">
					<ul className="studio-feed__list">
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/notepad.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="A notepad, mechanical pencil, phone and plant on very brightly lit desk" draggable="false" className="radius" layout="fill" /> */}
						</li>
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/screens.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="Two screens with bird’s eye shots of evergreen forests as background" draggable="false" className="radius" layout="fill" /> */}
						</li>
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/sketching.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="Man sketching in notepad with laptop and SLR camera in shot on wooden desk" draggable="false" className="radius" layout="fill" /> */}
						</li>
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/smiling.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="Smiling woman, wearing a blue shirt with an out of focus person in the foreground" draggable="false" className="radius" layout="fill" /> */}
						</li>
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/studio.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="Studio environment with benches of desks" draggable="false" className="radius" layout="fill" /> */}
						</li>
						<li>
							{/* <Image src="https://11tyfromscratch.imgix.net/table-tennis.jpg?w=890&amp;amp;q=60&amp;amp;auto=format" alt="Table tennis table inside a bare-brick room with lots of light" draggable="false" className="radius" layout="fill" /> */}
						</li>
					</ul>
				</div>
			</div>
		</article>
	)
}

export default StudioFeed
