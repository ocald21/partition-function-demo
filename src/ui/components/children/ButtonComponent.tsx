import { useState, useEffect, FC } from 'react';
import styles from '../../../css/children/ButtonComponent.module.css';
import AppConstants from '../../../AppConstants';

interface ButtonComponentProps {
    text: string
    formatClass: string
    onClick: () => void
}

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
    const [buttonPressed, updateButtonPressed] = useState(false);
    const [time, updateTime] = useState(Date.now());
    
    const handleMouseUp = () => updateButtonPressed(false);
    const handleMouseDown = () => {
        updateButtonPressed(true);
        updateTime(Date.now());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const delayFromPress = Date.now() - time

            if (buttonPressed && delayFromPress > AppConstants.BUTTON_UPDATE_INTERVAL_DELAY) {
                props.onClick()
            }
        }, AppConstants.BUTTON_INCREMENT_DELAY);
        return () => clearInterval(interval);
    }, [buttonPressed, time, props.onClick]);

    return ( 
        <button
            className={styles.buttonFormatting + " " + props.formatClass}
            onClick={props.onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseUp}
        >
            {props.text}
        </button>
     );
}
 
export default ButtonComponent;
