import styles from '../../../css/children/GraphComponent.module.css';

interface GraphProps {
    // verticalAxisStep: number
    verticalAxisLabel: JSX.Element
    horizontalAxisLabel: JSX.Element
}
 
const Graph: React.FC<GraphProps> = (props) => {
    return ( 
        <div className={styles.graphComponentContainer}>
            <div className={styles.verticalAxisFormatting}>
            </div>
            <div className={styles.graphContainer}>

            </div>

            <div className={styles.horizontalAxisFormatting}>
            </div>
        </div>
     );
}
 
export default Graph;
