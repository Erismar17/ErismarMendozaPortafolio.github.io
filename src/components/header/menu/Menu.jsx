import './style.css';

const Menu = ({ isOpen, closeMenu }) => {
    if (!isOpen) return null;

    return (
        <div className='menu-container'>
            <button className='close-menu' onClick={closeMenu}>
                <span className='material-symbols-rounded'>close</span>
            </button>
            <div>
                <p>Technologies</p>
                <p>Projects</p>
                <p>CV</p>
                <p>Contact</p>
            </div>
        </div>
    );
};

export default Menu;