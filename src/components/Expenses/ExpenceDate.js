        import React from 'react';
         import Card from '../UI/Card';
       import './ExpenceDate.css';

     const ExpenceDate=(props) =>{
    const month = props.expencedatenew.toLocaleString('en-US',{month:'long'});
    const date = props.expencedatenew.toLocaleString('en-US',{day:'2-digit'});
    const year = props.expencedatenew.getFullYear();
    return (
        <Card className="ExpenceDate">
             <div>{month}</div>
             <div>{year}</div>
             <div>{date}</div>
            
        </Card>
       )
   }

      export default ExpenceDate;
