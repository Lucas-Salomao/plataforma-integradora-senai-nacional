import './ChatBar.css';
import ButtomUserBar from '../ButtomUserBar/ButtomUserBar';


function ChatBar() {
    return (
        <div class='container'>
            <ButtomUserBar icon="mic"/>
            <div class='div-txt-input'>
                <input type="text" class='txt-input' placeholder='Pergunte par a NAI' />
            </div>
            <div class='btn-group'>
                <ButtomUserBar icon="attach_file"/>
                <div class='btn-history'>
                    <span class="material-symbols-outlined icon-history">dock_to_bottom</span>
                </div>
            </div>
        </div>
    )
}

export default ChatBar;

