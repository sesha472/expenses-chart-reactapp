import { useState } from 'react';
import './App.css'; 
// import Expenseitems from './components/Expenseitems';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App=()=> {




  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  return (
    <div className="App">
    <br/>
    <br/>
       
    <NewExpense onaddexpensedata={addExpenseHandler}/>
    <br/>
    <br/>
    <br/>
     <Expenses expensitemarray={expenses}/>
     {/* <Expenseitems expencedate={expenses[0].date} expencetitle={expenses[0].title } expenceprise={expenses[0].price}/>
     <Expenseitems expencedate={expenses[1].date} expencetitle={expenses[1].title } expenceprise={expenses[1].price}/>
     <Expenseitems expencedate={expenses[2].date} expencetitle={expenses[2].title } expenceprise={expenses[2].price}/>
     <Expenseitems expencedate={expenses[3].date} expencetitle={expenses[3].title } expenceprise={expenses[3].price}/>
     */}
    </div>
  );
}  




export default App;
