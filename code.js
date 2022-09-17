'use strict';

let monthNum = Number(prompt('Enter month number: ') - 1);

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if (monthNum >= 0 && monthNum <= 11){
    alert(months[monthNum])
} else {
    alert('Enter a number from 1 to 12')
}