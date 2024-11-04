import './TextButtom.css'

function TextButtom({ texto, buttonColor, textColor, link }) {
    return (
        <a href={link} className="text-buttom" style={{ backgroundColor: buttonColor }} >
            <span className='textoBotao' style={{ color: textColor }}>{texto}</span>
        </a>
    )
}

export default TextButtom;