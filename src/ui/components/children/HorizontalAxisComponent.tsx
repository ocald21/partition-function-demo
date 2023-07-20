import { FC } from "react";
import GraphType from "./GraphType";
import AxisComponentProps from "../../props/AxisComponentProps";
import styles from "../../../css/children/HorizontalAxisComponent.module.css"

interface HorizontalAxisComponentProps extends AxisComponentProps {
    type: GraphType
}
 
const HorizontalAxisComponent: FC<HorizontalAxisComponentProps> = (props) => {
    return (
        <div className={styles.axis}>
            <div className={styles.markingsDiv}>
                {
                    props.numberRange.map((value) => (
                        <p
                            key={value}
                            className={styles.markings}
                            style={{
                                width: `${props.type == GraphType.LINEAR ? `calc(100% / ${props.numberRange.length})` : 0}`,
                                
                            }}
                        >
                            {value}
                        </p>
                    ))
                }
            </div>

            <div className={styles.label}>
                {props.label}
            </div>
        </div>
    );
}
 
export default HorizontalAxisComponent;