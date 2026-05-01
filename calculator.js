let homePrice = 400000;
let downPaymentPercent = 0.035; // FHA Loan 3.5%
let totalDownPayment = homePrice * downPaymentPercent;
let budgetPrice = 10000
let loanAmount = homePrice - totalDownPayment;
let interestRate = 0.06;
let totalPayment = (loanAmount * interestRate) * 30;
let interestPaid = totalPayment - loanAmount;
let monthlyPay = (totalPayment/30)/12
let budgetPay = 1600
console.log("House Hacking Calculator");
console.log("For a $" + homePrice + " home...");
console.log("You would need $" + totalDownPayment + " for the down payment.");
console.log("Your loan amount would be $" + loanAmount + ".");
console.log("You would pay $" + interestPaid + " in interest.");
console.log("Your monthly payment would be $" + monthlyPay + ".");

if (totalDownPayment < budgetPrice) {
    console.log("Down payment status: This is within your target range!");
} else {
    console.log("Down payment status: Keep saving");
}

if (monthlyPay < budgetPay) {
    console.log("Monthly payment status: This is within your target range!");
} else {
    console.log("Monthly payment status: Keep saving");
}
