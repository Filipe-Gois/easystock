import { ContainersProps } from ".";

const GridContainer = ({ children, className }: ContainersProps) => <div className={`h-full w-5/6 ${className}`}>{children}</div>

export default GridContainer;