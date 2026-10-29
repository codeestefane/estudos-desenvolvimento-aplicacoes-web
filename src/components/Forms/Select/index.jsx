import '../index.css'

function Select(props){
    return(
        <>
            <label for={props.name}>{props.label}</label>
            <select name={props.name} required onChange = {(e) => props.setValue(e.target.value)} defaultValue={props.defaultValue}>
                {props.optionsList.map((option) => (
                    <option value={option.value}>{option.value}</option>
                ))}
            </select>
        </>
    )
}

export default Select;