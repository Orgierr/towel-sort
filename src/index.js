// You should implement your task here.
module.exports = function towelSort(matrix) {
    let sorted = [];
    if (!matrix) return sorted;
    for (let index = 0; index < matrix.length; index++) {
        if ((index + 1) % 2 === 0) {
            matrix[index].reverse();
        }
        sorted = [...sorted, ...matrix[index]];
    }
    return sorted;
};
