// // HEADER COMPONENT // //

import navBarLogo1 from '../images/logo.png';		/*import images*/

// ITEM LIST
const headerLinksList = [{		/*header nav-bar links list*/
	headerLinkHref: '#home',
	headerLinkClass: 'nav-link',
	headerLinkText: "Home",
	id: crypto.randomUUID(),
}, {
	headerLinkHref: '#about',
	headerLinkClass: 'nav-link',
	headerLinkText: "About",
	id: crypto.randomUUID(),
}, {
	headerLinkHref: '#services',
	headerLinkClass: 'nav-link',
	headerLinkText: "Difference",
	id: crypto.randomUUID(),
}, {
	headerLinkHref: '#tours',
	headerLinkClass: 'nav-link',
	headerLinkText: "Rentals",
	id: crypto.randomUUID(),
},];

const headerIconsList = [{		/*header social links list*/
	headerIconHref: 'https://www.facebook.com/yury.generalov.9',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	headerIconClass: 'nav-icon',
	iClass: 'fab fa-facebook',
	id: crypto.randomUUID(),
}, {
	headerIconHref: 'https://www.instagram.com/yurygeneralov/',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	headerIconClass: 'nav-icon',
	iClass: 'fab fa-instagram',
	id: crypto.randomUUID(),
}, {
	headerIconHref: 'https://generalov.ca/',
	headerIconRel: 'noopener noreferrer',
	headerIcoTarget: '_blank',
	headerIconClass: 'nav-icon',
	iClass: 'fab fa-twitter',
	id: crypto.randomUUID(),
},];

// RENDER FUNCTIONS
const HeaderLinksRender = ({ headerLinkHref, headerLinkClass, headerLinkText }) => {		/*nav-bar links render function*/
	return (<li>
		<a href={headerLinkHref} className={headerLinkClass}>{headerLinkText}</a>
	</li>);
};

const HeaderIconsRender = ({ headerIconHref, headerIconRel, headerIconTarget, headerIconClass, iClass }) => {		/*nav-bar icons render function*/
	return (<li>
		<a href={headerIconHref} rel={headerIconRel} target={headerIconTarget} className={headerIconClass}>
			<i className={iClass}></i>
		</a>
	</li>);
};

// STRUCTURE FUNCTION
export const HeaderStructure = () => {
	return (<nav className='navbar'>
		<div className='nav-center'>
			<div className='nav-header'>
				<img src={navBarLogo1} className='nav-logo' alt="family space rentals" />		{/*site logo*/}
				<button type='button' className='nav-toggle' id='nav-toggle'>		{/*minimized menu icon*/}
					<i className='fas fa-bars'></i>
				</button>
			</div>

			<ul className='nav-links' id='nav-links'>		{/*iterate over nav-bar links*/ }
				{headerLinksList.map((i) => {
					return (<HeaderLinksRender {...i} key={i.id} />);
				})}
			</ul>

			<ul className='nav-icons'>		{/*iterate over nav-bar icons*/ }
				{headerIconsList.map((i) => {
					return (<HeaderIconsRender {...i} key={i.id} />);
				})}
			</ul>
		</div>
	</nav>);
};