import React from 'react';
import Card from './Card';


import './ExpenceDate.css';

 function ExpenceDate(props) {
    const month = props.expencedate.toLocaleString('en-US',{month:'long'});
    const date = props.expencedate.toLocaleString('en-US',{day:'2-digit'});
    const year = props.expencedate.getFullYear();
    return (
        <Card className="ExpenceDate">
             <div>{month}</div>
             <div>{year}</div>
             <div>{date}</div>
            
        </Card>
    )
}

export default ExpenceDate;
