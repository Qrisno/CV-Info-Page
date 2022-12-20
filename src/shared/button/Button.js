import "./Button.css";

export function Button({text, theme, icon}){
    return (
        
<button className={theme}>
            <img alt="icon" src={icon}/>
            <span>{text}</span>
        </button>
    
        
    )
}
export default Button;