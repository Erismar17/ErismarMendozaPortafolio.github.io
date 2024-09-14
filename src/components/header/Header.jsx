import './Header.css';
import CV from '../sections/options-menu/CV';
import Presentation from '../presentation/Presentation';
import Projects from '../sections/options-menu/Projects';
import Technologies from '../sections/options-menu/Technologies';
import { useState } from 'react';
import Menu from './menu/Menu'

const Header = () => {
    let [menu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(true);
    };

    return (
        <div>
            <div className='header'>
                <a href='home' id='home' className='home'>Erismar Mendoza</a>
                <div className='header-options'>
                    <a href='#technologies' className='option'>Technologies</a>
                    <a href='#projects' className='option'>Projects</a>
                    <a href='#cv' className='option'>CV</a>
                    <a href='#contact' className='option'>Contact</a>
                    <button className={'menu'} onClick={openMenu}>
                        <span className='material-symbols-rounded menu-span'>menu</span>
                    </button>
                </div>
            </div>
            <Menu isOpen={menu} closeMenu={() => setMenu(false)} />
            <Presentation />
            <Technologies />
            <Projects />
            <CV />
        </div>
    );
};
export default Header;