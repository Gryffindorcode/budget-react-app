import React, {useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const BudgetsContext = React.createContext()

export function useBudgets(){
 return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) =>{
  const [budgets, setBudgets] = useState([])
  const [expenses, setExpense] = useState([])

     function getBudgetExpenses(budgetId) {
      return expenses.filter(expense => expense.budgetId ===budgetId)
     }

     function addExpense() {

     }

     function addBudget(name, max) {
       setBudgets(prevBudgets => {
        if(prevBudgets.find(budget => budget.name ===name)) {
           return prevBudgets
        }
        return [...prevBudgets, {id: uuidv4(), name, max}]
       })
      }

     function deleteBudget() {

     }
     function deleteExpense() {

     }

   return(
    <BudgetsContext.Provider value={{
      budgets,
      expenses,
      getBudgetExpenses,
      addExpense,
      addBudget,
      deleteBudget,
      deleteExpense
    }} >{children}</BudgetsContext.Provider>
   )
}