// Total expense variable
var totalExpense = 0;
// Array to store expenses
var expenses = [];
// Function to add expense
function addExpense() {
    // Get elements
    var nameInput = document.getElementById("expense-name");
    var amountInput = document.getElementById("expense-amount");
    // Get values and validate
    var name = nameInput.value;
    var amount = parseFloat(amountInput.value);
    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }
    // Create expense and add to list
    var expense = { name: name, amount: amount };
    expenses.push(expense);
    // Update total and display
    totalExpense += amount;
    updateUI(expense);
    // Clear input fields
    nameInput.value = "";
    amountInput.value = "";
}
// Function to update the UI
function updateUI(expense) {
    // Add expense to list
    var list = document.getElementById("list");
    var expenseItem = document.createElement("li");
    expenseItem.textContent = "".concat(expense.name, ": $").concat(expense.amount);
    list.appendChild(expenseItem);
    // Update total display
    var totalElement = document.getElementById("total");
    totalElement.textContent = totalExpense.toString();
}
// Attach addExpense function to window to make it accessible
window.addExpense = addExpense;
