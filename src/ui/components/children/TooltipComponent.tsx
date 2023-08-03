import { FC } from "react";
import { Tooltip } from "react-tooltip";

interface TooltipComponentProps {
    content: JSXElement
}
 
const TooltipComponent: FC<TooltipComponentProps> = () => {
    return (
        <Tooltip>
            
        </Tooltip>
    );
}
 
export default TooltipComponent;