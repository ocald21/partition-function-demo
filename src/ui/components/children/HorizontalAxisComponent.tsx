import { FC } from "react";
import GraphType from "../../../types/GraphType";
import AxisComponentProps from "../../props/AxisComponentProps";
import styles from "../../../css/children/HorizontalAxisComponent.module.css"

interface HorizontalAxisComponentProps extends AxisComponentProps {
    type: GraphType
}
 
const HorizontalAxisComponent: FC<HorizontalAxisComponentProps> = ({ type, ...props }) => {
    return (
        <div className={styles.axis}>
            <div 
                className={styles.markingsDiv}
                style={{
                    textAlign: type == GraphType.LINEAR ? "right" : "center",
                    justifyContent: type == GraphType.LINEAR ? "right" : "center",
                }}
            >
                {
                    props.numberRange.map((value) => (
                        <p
                            key={value}
                            className={styles.markings}
                            style={{
                                width: type == GraphType.LINEAR ? `calc(100% / ${props.numberRange.length})` : "auto",
                                marginLeft: type == GraphType.BAR ? `calc(100% / 4 / ${props.numberRange.length})` : 0,
                                marginRight: type == GraphType.BAR ? `calc(100% / 4 / ${props.numberRange.length})` : 0,
                                textAlign: type == GraphType.BAR ? "center" : "right",
                                paddingLeft: type == GraphType.BAR ? "10px" : 0,
                                paddingRight: type == GraphType.BAR ? "10px" : 0
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