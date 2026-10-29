import '../index.css'

function Button(props){
    return(
        <button type={props.type} onClick = {(e) => props.handle(e)}>{props.content}</button>
    )
}

export default Button;