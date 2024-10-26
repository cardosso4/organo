import './SelectInput.css'

const SelectInput = (props) => {

    const itens = props.items;

    const insertValue = (event) => {
        props.changeValue(event.target.value)
    }

    return(
        <div className="select-input">
            <label>{props.label}</label>
            <select value={props.value} onChange={insertValue} required={props.required}>
                <option key="">{props.placeholder}</option>
                {itens.map((item, index) => {
                    return <option key={item.name} >{item.name}</option>
                })}
            </select>
        </div>
    )

}

export default SelectInput