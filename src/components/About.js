// // ABOUT COMPONENT // //

import aboutImg1 from '../images/about.jpg';       /*import images*/

// STRUCTURE FUNCTION
export const AboutStructure = () => {
	return (<section className='section' id='about'>
		<div className='section-title'>
			<h2>ABOUT <span>US</span></h2>
		</div>

		<div className='section-center about-center'>
			<div className='about-img'>
				<img src={aboutImg1} className='about-photo' alt="about section" />		{/*about image*/}
			</div>

			<article className='about-info'>
				<h3>Why FamilySpace?</h3>
				<p>If you had a chance to choose between a spacious vacation home and a basic standard hotel room at a comparable price, what would you choose? The choice is obvious, when you travel with kids and carry loads of luggage with you, but what is in it for you, if you don't have kids or much luggage?</p>
				<p>The key difference is how you feel about your vacation stay - is it just a place to spend the night, or does it feel like home with a fully equipped kitchen, separate bedrooms, spacious dining room, patio and en suite hot tub?</p>
				<p>Once you stay at our spacious upscale weekly vacation rentals, you will never want to go back to a standard hotel room for your next vacation stay. FamilySpace Rentals offers you a unique opportunity to rent a comfortable home at an affordable price.</p>
				<a href='#services' className='btn'>READ MORE</a>
			</article>
		</div>
	</section>);
};