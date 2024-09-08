import './Header.css'
import CV from './menu/options-menu/CV';
import Contact from './menu/options-menu/Contact';
import Projects from './menu/options-menu/Projects';
import Presentation from '../presentation/Presentation';
import Technologies from './menu/options-menu/Technologies';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <a href="#home" className='home'>Erismar Mendoza</a>
                <div className='header-options'>
                    <a href="#technologies" className='option'>Technologies</a>
                    <a href="#projects" className='option'>Projects</a>
                    <a href="#cv" className='option'>CV</a>
                    <a href="#contact" className='option'>Contact</a>
                </div>
            </div>

            <div id="home"></div>
           {/*  <Menu/> */}
            <Presentation/>
            <Technologies/>
            <Projects/>
            <CV/>
            <Contact/>
        </div>
    )
}
export default Header;