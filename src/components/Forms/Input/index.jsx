import '../index.css'

function Input(props){
    return(
        <>
            <label for={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} required onChange = {(e) => props.setValue(e.target.value)} min={props.min} max={props.max} defaultValue={props.defaultValue}>
            </input>
        </>
    )
}

export default Input;