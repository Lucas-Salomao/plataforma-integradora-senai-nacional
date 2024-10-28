import './ChatBar.css';

function ChatBar() {
    return (
        <div class='container'>
            <div class='btn-mic'>
                <span class="material-symbols-outlined icon-mic">mic</span>
            </div>
            <div class='div-txt-input'>
                <input type="text" class='txt-input' placeholder='Pergunte par a NAI' />
            </div>
            <div class='btn-group'>
                <div class='btn-anexo'>
                    <span class="material-symbols-outlined icon-anexo">attach_file</span>
                </div>

                <div class='btn-history'>
                    <span class="material-symbols-outlined icon-history">dock_to_bottom</span>
                </div>
            </div>
        </div>
    )
}

export default ChatBar;

