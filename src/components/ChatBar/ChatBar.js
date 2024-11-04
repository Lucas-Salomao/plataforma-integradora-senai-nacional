import './ChatBar.css';
import ButtomUserBar from '../ButtomUserBar/ButtomUserBar';


function ChatBar() {
    return (
        <div className='container'>
            <ButtomUserBar icon="mic"/>
            <div className='div-txt-input'>
                <input type="text" className='txt-input' placeholder='Pergunte par a NAI' />
            </div>
            <div className='btn-group'>
                <ButtomUserBar icon="attach_file"/>
                <div className='btn-history'>
                    <span className="material-symbols-outlined icon-history">dock_to_bottom</span>
                </div>
            </div>
        </div>
    )
}

export default ChatBar;

