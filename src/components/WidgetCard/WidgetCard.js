import './WidgetCard.css';


function WidgetCard({ text, icon }) {
    return (
        <div className='card'>
            <div>
                <span className="material-symbols-outlined gradient-icon">{icon}</span>
            </div>
            <div className='textCard'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default WidgetCard;