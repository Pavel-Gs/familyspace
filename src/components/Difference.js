// // DIFFERENCE COMPONENT // //

// ITEM LIST //
const DifferenceList = [{		/*differences item list*/
	articleClass: 'service',
	spanClass: 'service-icon',
	iClass: 'fas fa-tree fa-fw',
	divClass: 'service-info',
	h4Class: 'service-title',
	h4Text: "Upscale and spacious",
	pClass: 'service-text',
	pText: "Comes with a fully equipped kitchen, separate bedrooms, spacious dining room, patio and en suite hot tub",
	id: crypto.randomUUID(),
}, {
	articleClass: 'service',
	spanClass: 'service-icon',
	iClass: 'fas fa-wallet fa-fw',
	divClass: 'service-info',
	h4Class: 'service-title',
	h4Text: "Saving money",
	pClass: 'service-text',
	pText: "It is cheaper to rent a timeshare than book a hotel, when traveling in a large group",
	id: crypto.randomUUID(),
}, {
	articleClass: 'service',
	spanClass: 'service-icon',
	iClass: 'fas fa-socks fa-fw',
	divClass: 'service-info',
	h4Class: 'service-title',
	h4Text: "Feels like home",
	pClass: 'service-text',
	pText: "You will never want to go back to a standard hotel room for your next vacation stay",
	id: crypto.randomUUID(),
},];

// RENDER FUNCTION
const DifferenceRender = ({ articleClass, spanClass, iClass, divClass, h4Class, h4Text, pClass, pText }) => {		/*difference items render function*/
	return (<article className={articleClass}>
		<span className={spanClass}><i className={iClass}></i></span>
		<div className={divClass}>
			<h4 className={h4Class}>{h4Text}</h4>
			<p className={pClass}>{pText}</p>
		</div>
	</article>);
};

//STRUCTURE FUNCTION
export const DifferenceStructure = () => {
	return (<section className='section services' id='services'>
		<div className='section-title'>
			<h2>THE <span>DIFFERENCE</span></h2>
		</div>
		<div className='section-center services-center'>		{/*iterate over the difference items*/}
			{DifferenceList.map((i) => {
				return (<DifferenceRender {...i} key={i.id} />);
			})}
		</div>
	</section>);
};