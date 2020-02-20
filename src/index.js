
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( Array.isArray(matrix) && matrix.length > 0){
  	return matrix.map((elem, i) => (i % 2 !== 0 ? elem.reverse() : elem)).flat();
  }
  else return [];
}
