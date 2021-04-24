

import React, { useState } from 'react'
import './ExpenseForm.css';

  const ExpenseForm=(props)=> {

    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    const titlechangehandle =(event)=>{
        setenteredTitle(event.target.value);
    };
    const amountchangehandle = (event)=>{
        setenteredAmount(event.target.value);
    };
    const datechangehandle=(event)=>{
        setenteredDate(event.target.value);
    };



    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseDate={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate),
        };
        // console.log(expenseDate);
        props.onsaveexpensedate(expenseDate)
        setenteredTitle('');
        setenteredAmount("");
        setenteredDate("");

    };

      return ( 
         <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
          
         <div className="new-expense__control">
             <label >ENTER title : </label>
             <input type="text" onChange={titlechangehandle} value={enteredTitle} />
         </div>

         <div className="new-expense__control">
             <label >ENTER amount : </label>
             <input type="number" onChange={amountchangehandle }  value={enteredAmount} min='0.01' step='0.01' />
         </div>

         <div className="new-expense__control">
             <label >ENTER date : </label>
             <input type="date" onChange={datechangehandle } value={enteredDate }  min='2019-01-01' max='2022-12-31' />
         </div>
        
         </div>

        <div className="new-expense__actions">
              <button type="submit">ADD Expensses</button>
        </div>
        </form>
    );
};

// return (
//     <form>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input type='text' />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input type='number' min='0.01' step='0.01' />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input type='date' min='2019-01-01' max='2022-12-31' />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };


export default ExpenseForm;