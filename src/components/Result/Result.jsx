import { useSelector } from "react-redux";
import { getYears, getMonths, getDays } from '../../selectors/results';


const Result = () => {

    const years = useSelector(getYears);
    const months = useSelector(getMonths);
    const days = useSelector(getDays);

    return (
        <div>
            <div>{years} years</div>
            <div>{months} months</div>
            <div>{days} days</div>
        </div>
    );
};

export default Result;