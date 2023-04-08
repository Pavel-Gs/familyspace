// // FOOTER COMPONENT // //

// ITEM LIST
const footerLinksList = [{		/*footer links list*/
	footerLinkHref: '#home',
	footerLinkClass: 'footer-link',
	footerLinkText: "Home",
	id: crypto.randomUUID(),
}, {
	footerLinkHref: '#about',
	footerLinkClass: 'footer-link',
	footerLinkText: "About",
	id: crypto.randomUUID(),
}, {
	footerLinkHref: '#services',
	footerLinkClass: 'footer-link',
	footerLinkText: "Difference",
	id: crypto.randomUUID(),
}, {
	footerLinkHref: '#tours',
	footerLinkClass: 'footer-link',
	footerLinkText: "Rentals",
	id: crypto.randomUUID(),
},];

const footerIconsList = [{		/*footer icons list*/
	footerIconHref: 'https://www.facebook.com/yury.generalov.9',
	footerIconRel: 'noopener noreferrer',
	footerIconTarget: '_blank',
	footerIconClass: 'footer-icon',
	iClass: 'fab fa-facebook',
	id: crypto.randomUUID(),
}, {
	footerIconHref: 'https://www.instagram.com/yurygeneralov/',
	footerIconRel: 'noopener noreferrer',
	footerIconTarget: '_blank',
	footerIconClass: 'footer-icon',
	iClass: 'fab fa-instagram',
	id: crypto.randomUUID(),
}, {
	footerIconHref: 'https://generalov.ca/',
	footerIconRel: 'noopener noreferrer',
	footerIconTarget: '_blank',
	footerIconClass: 'footer-icon',
	iClass: 'fab fa-twitter',
	id: crypto.randomUUID(),
},];

// RENDER FUNCTION
const FooterLinksRender = ({ footerLinkHref, footerLinkClass, footerLinkText }) => {		/*footer links render function*/
	return (<li>
		<a href={footerLinkHref} className={footerLinkClass}>{footerLinkText}</a>
	</li>);
};

const FooterIconsRender = ({ footerIconHref, footerIconRel, footerIconTarget, footerIconClass, iClass }) => {
	return (<li>
		<a href={footerIconHref} rel={footerIconRel} target={footerIconTarget} className={footerIconClass}>
			<i className={iClass}></i>
		</a>
	</li>);
};

// STRUCTURE FUNCTION
export const FooterStructure = () => {
	return (<footer className='section footer'>
		<ul className='footer-links'>		{/*iterate over footer links*/}
			{footerLinksList.map((i) => {
				return (<FooterLinksRender {...i} key={i.id} />);
			})}
		</ul>

		<ul className='footer-icons'>		{/*iterate over footer icons*/}
			{footerIconsList.map((i) => {
				return (<FooterIconsRender {...i} key={i.id} />);
			})}
		</ul>
		<p className='copyright'>reserve your next weekly vacation home at reservations@familyspace.rentals</p>
	</footer>);
};