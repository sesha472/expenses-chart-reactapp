


import React from 'react'
// import Card from '../components/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=> {

   const saveexpensedatahandler=(enteredexpensedData)=>{
       const expenseDatainnew={ 
            ...enteredexpensedData,
             id:Math.random().toString()
              };
            //   console.log(expenseDatainnew);
                 props.onaddexpensedata(expenseDatainnew)
          }

    return (
        <div className="new-expense">
           
            <ExpenseForm   onsaveexpensedate={saveexpensedatahandler} />
            
        </div>
    )
}

export default NewExpense;

