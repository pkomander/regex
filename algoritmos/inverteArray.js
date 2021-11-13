var arr = [5, 10, 15, 20, 25];
var eleArr = arr.length;
console.log(arr);
console.log("eleArr: " + eleArr);


var arrInvert = [];

for (var i = eleArr - 1; i <= arr.length; i--) {
    arrInvert.push(arr[i]);
    console.log(arrInvert);

    if (i <= 0) {
        break;
    }
}
console.log("Array invertido: " + arrInvert);