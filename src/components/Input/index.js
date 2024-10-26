import './Input.css'

const Input = (props) => {

    const insertValue = (event) => {
        props.changeValue(event.target.value)
    }

    const type = !props.type ? 'text' : props.type

    return (
        
        <div className={`input input-${type}`}>
            <label>{props.label}</label>
            <input
                type={type}
                value={props.value}
                onChange={insertValue}
                required={props.required}
                name={props.nameInput}
                placeholder={props.placeholder}
            />
        </div>
    )

}

export default Input