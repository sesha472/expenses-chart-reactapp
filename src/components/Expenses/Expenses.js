import React,{useState} from 'react';

import Expenseitems from './Expenseitems';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


 const Expenses=(props)=>{
   

    const [filteredyear, setfilteredyear] = useState("2020");

  const filterChangeHandler=(yearvalue)=>{
    setfilteredyear(yearvalue);
    // console.log("espense-"+yearvalue);
  }
    return (
      <div>
      <Card className="Expenses">

        <ExpensesFilter selectedyear={filteredyear} 
         onChangeFilter={filterChangeHandler}  
         />

     {props.expensitemarray.map((item)=>{
       return(
       <Expenseitems 
       key={item.id}
       expencedateapp={item.date}
       expencetitle={item.title}
       expenceamount={item.amount}
      

       />
        );
     })}
     
     </Card>
     </div>
    );
}

export default Expenses;

