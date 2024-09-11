import css from '../../../assets/img/css3.svg'
import sass from '../../../assets/img/sass.svg'
import html from '../../../assets/img/html5.svg'
import react from '../../../assets/img/react.svg'
import figma from '../../../assets/img/figma.svg'
import js from '../../../assets/img/javascript.svg'
import github from '../../../assets/img/github.svg'
import nextjs from '../../../assets/img/nextdotjs.svg'
import nodejs from '../../../assets/img/nodedotjs.svg'
import './style.css'
const Technologies = () => {
    return (
        <div id='technologies' className='technologies'>
            <h2>Languajes</h2>
            <p>These are most of the languages I use...</p>
            <div>
                <div className='tooltip'>
                    <img className='icon' src={css} alt='css' />
                    <span className='tooltip-text'>CSS</span>
                </div>
                
                <div className='tooltip'>
                    <img className='icon' src={html} alt='html' />
                    <span className='tooltip-text'>HTML</span>
                </div>

                <div className='tooltip'>
                    <img className='icon' src={js} alt='js' />
                    <span className='tooltip-text'>JavaScript</span>
                </div>
            </div>

            <h2>Technologies | Frameworks</h2>
            <p>These are most of the technologies & frameworks I use...</p>
            <div>
            <div className='tooltip'>
                <img className='icon' src={react} alt='react'/>
                <span className='tooltip-text'>React</span>
            </div>

            <div className='tooltip'>
               <img className='icon' src={figma} alt='figma'/>
                <span className='tooltip-text'>Figma</span>
            </div>

            <div className='tooltip'>
                <img className='icon' src={github} alt='github'/>
                <span className='tooltip-text'>GitHub</span>
            </div>

            <div className='tooltip'>
                <img className='icon' src={nextjs} alt='nextjs'/>
                <span className='tooltip-text'>Next JS</span>
            </div>

            <div className='tooltip'>
                <img className='icon' src={nodejs} alt='nodejs'/>
                <span className='tooltip-text'>Node JS</span>
            </div>

            <div className='tooltip'>
                <img className='icon' src={sass} alt='sass'/>
            <span className='tooltip-text'>Sass</span>
            </div>
            </div>
        </div>
    )
}
export default Technologies;