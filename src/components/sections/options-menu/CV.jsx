import cv from '../../../assets/pdf/cv-erismar-mendoza.pdf'

const CV = () => {
    return (
        <div id='cv' className='cv'>
            <div className='cv-description'>
                <h2>Curriculum</h2>
                <p className='description'>Soy una desarrolladora web UI con experiencia en tecnologías front-end, como HTML5, CSS, JavaScript, Tailwind, SASS, React JS, Next JS, Vite, y Angular. 
                    He trabajado en Globant, donde desarrollé competencias en diseño responsive y UX/UI con herramientas como Figma. Además, he liderado proyectos formativos, 
                    colaborando con empresas del sector textil para implementar soluciones eficientes utilizando React JS y CSS3.Me caracterizo por ser una persona creativa, 
                    adaptable, y comprometida con la mejora continua. Cuento con excelentes habilidades de comunicación y liderazgo, que me permiten colaborar eficazmente en 
                    equipos multidisciplinarios.</p>
            </div>
            <a href={cv} target='_blank' rel='noreferrer'>
                <button className='option'>Open CV in a new tab</button>
            </a>
        </div>
    )
}
export default CV;