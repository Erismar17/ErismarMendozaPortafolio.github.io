import './Header.css'
import CV from '../sections/options-menu/CV';
import Projects from '../sections/options-menu/Projects';
import Presentation from '../presentation/Presentation';
import Technologies from '../sections/options-menu/Technologies';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <a href='#home' id='home' className='home'>Erismar Mendoza</a>
                <div className='header-options'>
                    <a href='#technologies' className='option'>Technologies</a>
                    <a href='#projects' className='option'>Projects</a>
                    <a href='#cv' className='option'>CV</a>
                    <a href='#contact' className='option'>Contact</a>
                </div>
            </div>
           {/*  <Menu/> */}
            <Presentation/>
            <Technologies/>
            <Projects/>
            <CV/>
        </div>
    )
}
export default Header;