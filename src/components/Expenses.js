import React from 'react';
import Expenseitems from './Expenseitems';
import './Expenses.css';
import Card from './Card';


 function Expenses(props) {
    const expensarray=props.expensitemarray;
    return (
        <Card className="Expenses">

{expensarray.map(item=>{
       return(
       <Expenseitems 
       expencedate={item.date}
       key={item.title}
       expencetitle={item.title}
       expenceprise={item.prise}
       
       />);
     })}
     </Card>
    );
}

export default Expenses;

