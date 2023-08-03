import { FC } from "react";
import { Tooltip } from "react-tooltip";
import styles from "../../../css/children/TooltipComponent.module.css";

interface TooltipComponentProps {
    id: string
    content: ReactElement
}
 
const TooltipComponent: FC<TooltipComponentProps> = (props) => {
    return (
        <Tooltip id={props.id}>
            <div className={styles.standard}>
                {props.content}
            </div>
        </Tooltip>
    );
}
 
export default TooltipComponent;
