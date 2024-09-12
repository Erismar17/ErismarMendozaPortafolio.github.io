import './style.css'
import {Languajes, TechnologiesFramework} from '../../constant'
import TechnologyItem from '../Item/Item'

const Technologies = () => {
    return (
        <div id='technologies' className='technologies'>
            <h2 className='title-tech'>Languajes</h2>
            <p className='subtitle-tech'>These are most of the languages I use...</p>
            <div className=''>
                {Languajes.map((item, index) => (
                    <TechnologyItem key={index} {...item} />
                ))}
            </div>

            <h2 className='title-tech'>Technologies | Frameworks</h2>
            <p className='subtitle-tech'>These are most of the technologies & frameworks I use...</p>
            <div>
            {TechnologiesFramework.map((item, index) => (
                    <TechnologyItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}
export default Technologies;