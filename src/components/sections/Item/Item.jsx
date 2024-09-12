import '../options-menu/style.css'

const TechnologyItem = ({icon, text, alt}) => {
    return (
        <div className='tooltip'>
            <img className='icon' src={icon} alt={alt} />
            <span className='tooltip-text'>{text}</span>
        </div>
    )
}
export default TechnologyItem;