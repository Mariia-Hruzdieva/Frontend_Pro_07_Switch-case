let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case (null):
        console.log('ви скасували');
        break;
    case (numOrStr):
        if (numOrStr.trim() === '') {
            console.log('Empty String');
            break;
        }
    case (numOrStr):
        if (isNaN(numOrStr)) {
            console.log('number is NaN');
            break;
        }
    default:
        console.log('OK!')
}