import { useForm } from "react-hook-form"
import Button from "../Button/Button";
import { setResults } from '../../actions/results';
import { useDispatch } from 'react-redux';


const Form = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        dispatch(setResults(data));
        console.log(data);
    }

    console.log(watch("day"), watch("month"), watch("year"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Day
                <input type="number" {...register("day", {required: true})} />
            </label>
            <label>
                Month
                <input type="number" {...register("month")} />
            </label>
            <label>
                Year    
                <input type="number" {...register("year")} />
            </label>
            <Button />
        </form>

    );
};

export default Form;