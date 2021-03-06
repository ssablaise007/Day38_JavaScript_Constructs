//#UC1 IF ELSE CONDITION

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) %2;
if (empCheck == IS_ABSENT){
    console.log("UC1 - Employee is Absent");
} else {
    console.log("UC1 - Employee is Present");
}

// #UC2 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage : " +empWage);

// #UC3 -- FUNCTION 


function getWorkingHours(empCheck){
switch (empCheck){
    case IS_PART_TIME:
   return PART_TIME_HOURS
        break;
    case IS_FULL_TIME:
        return  FULL_TIME_HOURS
        break;
    default:
        return 0;
} 
}
let EmpHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = emphrs * WAGE_PER_HOUR;
console.log(" Hour :" +totalEmpHrs+ " Emp Wage :" +empWage);

// UC4 For Loop

{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs=0;
    for (let day =0; day < NUM_OF_WORKING_DAYS; day++){
        let empCheck= Math.floor(Math.random() * 10 ) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs* WAGE_PER_HOUR;
    console.log(" UC4 - Total Hrs : " +totalEmpHrs+ "Emp Wage:" +empWage);
    }

// #UC5 While Loop
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs=0;
    let totalWorkingDays = 0;
    while(totalEmpHrs<= MAX_HRS_IN_MONTH && 
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) %3 ;
            totalEmpHrs += getWorkingHours(empCheck);
        }
        let empWage = totalEmpHrs * WAGE_PER_HOUR;
        console.log(" UC5 - Total Days : " +totalEmpHrs+ "Emp Wage :" +empWage);
}