// Program for Weekdays through numbers
var weekday = new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
var d  =new Date();
console.log(weekday[d.getDay()]);