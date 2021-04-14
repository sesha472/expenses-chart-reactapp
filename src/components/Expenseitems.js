

import React from 'react';
import ExpenceDate from './ExpenceDate';
import './Expenseitems.css';
import Card from './Card';

 function Expenseitems(props) {

    // const expencedate= new Date ();
    // const expenceprise=127.99;
    // const expencetitle="namsthey sesha";
    
    return (
        <Card className="Expenseitems">
          
            <div className="date">
                 <ExpenceDate expencedate={props.expencedate} />
            </div>

            <div className="title-prise">
                  <h1 className="title">{props.expencetitle}</h1>
                  <div className="prise">${props.expenceprise}</div>
            </div>
            
            
        
            </Card>

    )
}



export default Expenseitems;