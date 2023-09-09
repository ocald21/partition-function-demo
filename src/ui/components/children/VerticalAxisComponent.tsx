import { FC } from "react";
import styles from "../../../css/children/VerticalAxisComponent.module.css";
import AxisComponentProps from "../../props/AxisComponentProps";

const VerticalAxisComponent: FC<AxisComponentProps> = (props) => {
    return (
        <div className={styles.axis}>
            <div className={styles.label}>
                {props.label}
            </div>

            <div className={styles.markingsDiv}>{
                props.numberRange.map((value) => (
                    <p
                        key={value}
                        className={styles.markings}
                        style={{
                            height: `calc(100% / ${props.numberRange.length})`,
                        }}
                    >
                        {value}
                    </p>
                ))
            }</div>
        </div>
    );
}
 
export default VerticalAxisComponent;
