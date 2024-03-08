const Expense = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    if (!title || !category || !date) {
      return res.status(400).json({
        message: "Title, amount, date and category fields are required.",
      });
    }

    if (isNaN(amount) || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number." });
    }

    const newExpense = await Expense.create({
      title,
      amount,
      category,
      description,
      date,
    });

    res.status(200).json({ message: "Expense added:", expense: newExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found." });
    }
    res
      .status(200)
      .json({ message: "Expense deleted.", expense: deletedExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
