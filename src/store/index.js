import { createStore } from 'redux';
import { differenceInYears, differenceInCalendarMonths } from 'date-fns';

const initialState = {
    days: 0,
    months: 0,
    years: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'form/submit': {
            const { day, month, year } = action.payload;
            const currentDate = new Date();
            const birthDate = new Date(year, month - 1, day);

            const ageInYears = differenceInYears(currentDate, birthDate);
            const remainingMonths = differenceInCalendarMonths(currentDate, birthDate) % 12;

            const lastMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            const remainingDays = lastMonthEndDate.getDate() - birthDate.getDate();

            return {
                ...state,
                days: remainingDays,
                months: remainingMonths,
                years: ageInYears
            };
        }
        default:
            return state;
    }
};

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevtools);

export default store;
