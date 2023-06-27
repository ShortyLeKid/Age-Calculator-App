export const setResults = ({ day, month, year }) => ({
    type: 'form/submit',
    payload: {
        day,
        month,
        year
    }
});