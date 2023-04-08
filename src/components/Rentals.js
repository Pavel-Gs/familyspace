// // RENTALS COMPONENT // //

import rentalMauiImg from '../images/rental-maui.jpg';      /*import images*/
import rentalOahuImg from '../images/rental-oahu.jpg';
import rentalSedonaImg from '../images/rental-sedona.jpg';
import rentalPhoenixImg from '../images/rental-phoenix.jpg';
import rentalBreckenridgeImg from '../images/rental-breckenridge.jpg';
import rentalStJohnImg from '../images/rental-stjohn.jpg';
import rentalCancunImg from '../images/rental-cancun.jpg';
import rentalBahamasImg from '../images/rental-bahamas.jpg';
import rentalStKittsImg from '../images/rental-stkitts.jpg';
import rentalPhuketImg from '../images/rental-phuket.jpg';

// ITEM LIST
const rentalsList = [{      /*rentals cards list*/
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalMauiImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "available 2024",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "The Westin Kā'anapali Resort",
	pInfoText: "Two-bedroom lockoff ocean view villa, accommodates up to 8 guests. Consists of 750 sq.ft. one-bedroom premium villa and an adjoining 480 sq.ft. studio premium villa. Parking is included for one vehicle",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Maui",
	pFooterText2: "1,230 sq.ft.",
	pFooterText3: "$4,950",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalOahuImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "December 23, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Hilton Hawaiian Village",
	pInfoText: "Two-bedroom, two-bathroom ocean view suite, accommodates up to 6 guests. The suite includes a generous living room with separate dining area, TV with cable, PlayStation 3, and queen-size sleeper sofa, as well as a full kitchen with rice cooker",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Oahu",
	pFooterText2: "1,025 sq.ft.",
	pFooterText3: "$4,950",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalSedonaImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "March 16, 2024",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Hyatt Residence Club",
	pInfoText: "Hyatt Residence Club Sedona, Piñon Pointe. Two-bedroom unit 431 on the top floor with red rock views, accommodates up to 8 guests. Check in: Saturday, March 16, 2024, 4pm. Check out: Saturday, March 23, 2024, 10am",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Sedona",
	pFooterText2: "Two-bedroom",
	pFooterText3: "$2,950",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalPhoenixImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "February 11, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Marriott's Canyon Villas",
	pInfoText: "Marriott's Canyon Villas at Desert Ridge. 1,250 sq.ft. two-bedroom villa, accommodates up to 8 guests. Smaller units also available - please inquire by email. Super Bowl and PGA WM Phoenix Open. Direct owner rental. No changes, no refunds",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Phoenix",
	pFooterText2: "1,250 sq.ft.",
	pFooterText3: "$1,700",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalBreckenridgeImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "March 9, 2024",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Valdoro Mountain Lodge",
	pInfoText: "Two-bedroom, two-bathroom suite, accommodates up to 6 guests. The suite includes a generous living room with fireplace, cable TV, DVD player and queen-size sleeper sofa, as well as a full kitchen and washer/dryer",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Breckenridge",
	pFooterText2: "1,048 sq.ft.",
	pFooterText3: "$3,240",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalStJohnImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "December 23, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "The Westin St. John Resort",
	pInfoText: "The Westin St. John Resort Villas. Two-bedroom Bay Vista loft villa, accommodates up to 10 guests. $25 per night USVI environmental fee is additional and payable directly to the resort. Direct owner rental. Non-refundable after 24 hours",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "St. John, U.S.",
	pFooterText2: "1,650 sq.ft.",
	pFooterText3: "$10,500",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalCancunImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "December 24, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "The Westin Lagunamar Resort",
	pInfoText: "The Westin Lagunamar Ocean Resort. Two-bedroom ocean view lockoff villa, accommodates up to 8 guests. Consists of 740 sq.ft. one-bedroom premium villa and an attached 400 sq.ft. studio premium villa",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Cancún",
	pFooterText2: "1,140 sq.ft.",
	pFooterText3: "$4,190",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalBahamasImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "December 22 or 23, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Harborside Resort",
	pInfoText: "Harborside Resort at Atlantis. Two-bedroom lockoff villa in the desirable Phase I, accommodates up to 8 guests. Includes full access to Atlantis. Direct owner rental. Free cancellation within 24 hours after booking. Non-refundable after 24 hours",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Bahamas",
	pFooterText2: "1,367 sq.ft.",
	pFooterText3: "$5,940",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalStKittsImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "December 24, 2023",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "St. Kitts Beach Club",
	pInfoText: "Harborside Resort at Atlantis. Two-bedroom lockoff villa in the desirable Phase I, accommodates up to 8 guests. Includes full access to Atlantis. Direct owner rental. Free cancellation within 24 hours after booking. Non-refundable after 24 hours",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "St. Kitts",
	pFooterText2: "1,403 sq.ft.",
	pFooterText3: "$3,490",
	id: crypto.randomUUID(),
}, {
	articleClass: 'tour-card',
	divImgClass: 'tour-img-container',
	tourImg: rentalPhuketImg,
	imgClass: 'tour-img',
	imgAlt: "rental card",
	pImgClass: 'tour-date',
	pImgText: "Check back later",
	divInfoClass: 'tour-info',
	divH4Class: 'tour-title',
	h4Text: "Phuket Beach Club",
	pInfoText: "Marriott's Phuket Beach Club. 1,054 sq.ft. two-bedroom suite, accommodates up to 6 guests. Please check back later for availability",
	divFooterClass: 'tour-footer',
	iClass: 'fas fa-map',
	pFooterText1: "Phuket",
	pFooterText2: "1,054 sq.ft.",
	pFooterText3: "Check back later",
	id: crypto.randomUUID(),
},];

// RENDER FUNCTION
const RentalsRender = ({ articleClass, divImgClass, tourImg, imgClass, imgAlt, pImgClass, pImgText, divInfoClass, divH4Class, h4Text, pInfoText, divFooterClass, iClass, pFooterText1, pFooterText2, pFooterText3 }) => {		/*rentals cards render function*/
    return (<article className={articleClass}>
        <div className={divImgClass}>
            <img src={tourImg} className={imgClass} alt={imgAlt} />
            <p className={pImgClass}>{pImgText}</p>
        </div>
        <div className={divInfoClass}>
            <div className={divH4Class}>
                <h4>{h4Text}</h4>
            </div>
            <p>{pInfoText}</p>
            <div className={divFooterClass}>
                <p>
                    <span><i className={iClass}></i></span> {pFooterText1}
                </p>
                <p>{pFooterText2}</p>
                <p>{pFooterText3}</p>
            </div>
        </div>
    </article>);
};

// STRUCTURE FUNCTION
export const RentalsStructure = () => {
	return (<section className='section' id='tours'>
		<div className='section-title'>
			<h2>OUR <span>RENTALS</span></h2>
		</div>
		<div className='section-center featured-center'>		{/*iterate over rental cards*/}
			{rentalsList.map((i) => {
				return (<RentalsRender {...i} key={i.id} />);
			})}
		</div>
	</section>);
};