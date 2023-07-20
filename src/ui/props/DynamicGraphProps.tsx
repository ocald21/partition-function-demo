import DynamicComponentProps from "./DynamicComponentProps";

interface DynamicGraphProps extends DynamicComponentProps {
    verticalAxisLabel: ReactElement
    horizontalAxisLabel: ReactElement
    verticalAxisStep: number
    horizontalAxisStep: number
    maxY: number
    minY: number
    maxX: number
    minX: number
}

export default DynamicGraphProps;
