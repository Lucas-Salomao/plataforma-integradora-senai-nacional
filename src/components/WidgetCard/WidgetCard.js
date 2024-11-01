import './WidgetCard.css';


function WidgetCard({ text, icon }) {
    return (
        <div class='card'>
            <div>
                <span class="material-symbols-outlined gradient-icon">{icon}</span>
            </div>
            <div class='textCard'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default WidgetCard;