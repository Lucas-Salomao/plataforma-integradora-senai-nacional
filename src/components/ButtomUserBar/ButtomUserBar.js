import './ButtomUserBar.css'

function ButtomUserBar({ icon, onClick, link }) {
    return (
        <a href={link} onClick={onClick} className='btn-user-bar'>
            <span className="material-symbols-outlined icon-user-bar">{icon}</span>
        </a>
    )
}

export default ButtomUserBar;