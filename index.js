const moment  = require("moment");
const lodash  = require('lodash');
let now  = moment();
console.log(now.format("MMMM Do YYYY, h:mm:ss a"));
console.log(now.format('dddd'));                    
console.log(now.format("MMM Do YY"));         
console.log(now.format('YYYY DDDD YYYY'));     
console.log(now.isValid("2020-01-01")); 
console.log(now.isValid("2020-14-01")); 

console.log(now.add(7,"d")); 
console.log(now.add(7,"M")); 
console.log(now.add(7,"y")); 

console.log(now.subtract(7, 'd')); 
console.log(now.subtract(7, 'M'));
console.log(now.subtract(7, 'y')); 

console.log(now.diff("2014-11-11" && "2015-09-11"));
console.log(now.diff("2014-11-27" && "2015-09-16"));


console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment('2010-01-01').isAfter('2018-01-01'));
console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());









