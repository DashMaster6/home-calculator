function calculateAffordability() {
    // 1. Get the values the user typed into the boxes
    let homePrice = Number(document.getElementById("homePrice").value);
    let budgetPrice = Number(document.getElementById("budgetPrice").value);
    let budgetPay = Number(document.getElementById("budgetPay").value);
    let interestRate = 0.06; // Keeping your 6% rate

    // 2. Your Math Logic
    let downPaymentPercent = 0.035; 
    let totalDownPayment = homePrice * downPaymentPercent;
    let loanAmount = homePrice - totalDownPayment;
    let totalPayment = (loanAmount * interestRate) * 30;
    let interestPaid = totalPayment - loanAmount;
    let monthlyPay = (totalPayment / 30) / 12;

    // 3. Prepare the results text
    let resultsHTML = `
        <p>Down Payment Needed: $${totalDownPayment.toLocaleString()}</p>
        <p>Monthly Payment: $${monthlyPay.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <hr>
    `;

    // 4. Add your "Status" logic
    if (totalDownPayment <= budgetPrice) {
        resultsHTML += `<p style="color: green;">✅ Down payment is within range!</p>`;
    } else {
        resultsHTML += `<p style="color: red;">❌ Down payment: Keep saving!</p>`;
    }

    if (monthlyPay <= budgetPay) {
        resultsHTML += `<p style="color: green;">✅ Monthly payment is within range!</p>`;
    } else {
        resultsHTML += `<p style="color: red;">❌ Monthly payment: Keep saving!</p>`;
    }

    // 5. Put the results on the screen
    document.getElementById("result").innerHTML = resultsHTML;
}
