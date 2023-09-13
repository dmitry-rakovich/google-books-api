export const returnUniqItems = (arr) => {
    return arr.reduce((acc, curr) => {
        if (!acc.find((el) => el.id === curr.id)) {
          acc.push(curr);
        }
        return acc;
    }, []);
}