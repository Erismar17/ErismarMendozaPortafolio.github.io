import './style.css';
import whatsapp from '../../assets/img/whatsapp.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'

const Footer = () => {
    return (
        <div id='contact' className='footer'>
            <div className='left'></div>

            <div className='social-networks'>
                <div>
                    <a href="https://wa.me/573223374782" target="_blank" rel="noopener noreferrer">
                        <img className='s-n' src={whatsapp} alt='whatsapp' />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Erismar17" target="_blank" rel="noopener noreferrer">
                        <img className='s-n' src={github} alt='github' />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/erismar-mendoza-538144312/" target="_blank" rel="noopener noreferrer">
                        <img className='s-n' src={linkedin} alt='linkedin' />
                    </a>
                </div>
            </div>

            <div className='right'></div>
        </div>
    )
}
export default Footer;