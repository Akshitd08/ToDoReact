const Button = ({onClick, text, color}) => {
    return (
        <button
            className="addButton"
            onClick={onClick}
            style={{ backgroundColor: color }}
            >{text}</button>
    )
}

export default Button