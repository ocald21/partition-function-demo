import DynamicComponentProps from "./DynamicComponentProps";

interface DynamicGraphProps extends DynamicComponentProps {
    verticalAxisLabel: JSX.Element
    horizontalAxisLabel: JSX.Element
    verticalAxisStep: number
    horizontalAxisStep: number
    maxY: number
    minY: number
    maxX: number
    minX: number
}

export default DynamicGraphProps;
