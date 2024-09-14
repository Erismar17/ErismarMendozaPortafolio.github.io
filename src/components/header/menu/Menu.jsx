import './style.css';

const Menu = ({ isOpen, closeMenu }) => {
    if (!isOpen) return null;

    return (
        <div className={`menu-container ${isOpen ? '' : 'hidden'}`}>
            <button className='close-menu' onClick={closeMenu}>
                <span className='material-symbols-rounded'>close</span>
            </button>
            <ul className='option-menu'>
                <li><a href='#technologies' onClick={closeMenu}>Technologies</a></li>
                <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
                <li><a href='#cv' onClick={closeMenu}>CV</a></li>
                <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
            </ul>
        </div>
    );
};
export default Menu;