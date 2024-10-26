// Expense interface for type safety
interface Expense {
    name: string;
    amount: number;
  }
  
  // Total expense variable
  let totalExpense: number = 0;
  
  // Array to store expenses
  const expenses: Expense[] = [];
  
  // Function to add expense
  function addExpense(): void {
    // Get elements
    const nameInput = document.getElementById("expense-name") as HTMLInputElement;
    const amountInput = document.getElementById("expense-amount") as HTMLInputElement;
  
    // Get values and validate
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);
  
    if (!name || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid expense name and amount.");
      return;
    }
  
    // Create expense and add to list
    const expense: Expense = { name, amount };
    expenses.push(expense);
  
    // Update total and display
    totalExpense += amount;
    updateUI(expense);
  
    // Clear input fields
    nameInput.value = "";
    amountInput.value = "";
  }
  
  // Function to update the UI
  function updateUI(expense: Expense): void {
    // Add expense to list
    const list = document.getElementById("list") as HTMLUListElement;
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${expense.name}: $${expense.amount}`;
    list.appendChild(expenseItem);
  
    // Update total display
    const totalElement = document.getElementById("total") as HTMLSpanElement;
    totalElement.textContent = totalExpense.toString();
  }
  
  // Attach addExpense function to window to make it accessible
  (window as any).addExpense = addExpense;
  