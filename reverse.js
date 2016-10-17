'use strict';
let arr = [1,2,3,4,5,6,7];
const reverse = function(arr) {
	let arr2 = [];
	for(let i = arr.length - 1; i >= 0; --i){
		arr2.push(arr[i]);
	}
	return arr2;
};
console.log(reverse(arr));