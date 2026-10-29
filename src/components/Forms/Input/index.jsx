import '../index.css'

function Input(props){
    return(
        <>
            <label for={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} required onChange = {(e) => props.setValue(e.target.value)}>
            </input>
        </>
    )
}

export default Input;