// IMPORT FILES
import './App.css';

// IMPORT COMPONENTS
import { HeaderStructure } from './components/Header.js';
import { HeroStructure } from './components/Hero.js';
import { AboutStructure } from './components/About.js';
import { DifferenceStructure } from './components/Difference.js';
import { RentalsStructure } from './components/Rentals.js';
import { FooterStructure } from './components/Footer.js';

// RETURN ALL COMPONENTS
function App() {
	return (<>
		<HeaderStructure />
		<HeroStructure />
		<AboutStructure />
		<DifferenceStructure />
		<RentalsStructure />
		<FooterStructure />
	</>);
};
export default App;