import React, { useState, useEffect } from 'react';
import styles from '../../../css/children/ButtonComponent.module.css';

const updateIntervalDelay = 500;
const incrementDelay = 10;

interface ButtonComponentProps {
    text: string
    formatClass: string
    onClick: () => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
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

            if (buttonPressed && delayFromPress > updateIntervalDelay) {
                props.onClick()
            }
        }, incrementDelay);
        return () => clearInterval(interval);
    }, [buttonPressed, time, props]);

    return ( 
        <div>
            <button 
                className={styles.buttonFormatting + " " + props.formatClass}
                onClick={props.onClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseUp}
            >
                {props.text}
            </button>
        </div>
     );
}
 
export default ButtonComponent;
