import { FC } from 'react';
import "../../../css/children/ButtonComponent.css"

interface ButtonComponentProps {
    text: string
    formatClass: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
 
const ButtonComponent: FC<ButtonComponentProps> =(props) => { 
    return ( 
        <span>
            <button 
                className={"button-formatting " + props.formatClass}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </span>
     );
}
 
export default ButtonComponent;
