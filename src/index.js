
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let srtMatrix = [];
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach(element => {
                srtMatrix.push(element);
            });
        } else {
            matrix[i].sort((a, b) => b - a);
            matrix[i].forEach(element => {
                srtMatrix.push(element);
            });
        }
    }
    return srtMatrix;
}
