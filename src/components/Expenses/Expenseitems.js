

import React from 'react';
import ExpenceDate from './ExpenceDate';
import './Expenseitems.css';
import Card from '../UI/Card';

 const Expenseitems=(props)=> {

    // const expencedate= new Date ();
    // const expenceprise=127.99;
    // const expencetitle="namsthey sesha";;
    // const [title, settitle] = useState(props.expencetitle);
      

   
//     const clicked=()=>{
//         settitle("sesha");
//       console.log(title);
  
//    }
    return (
        <Card className="Expenseitems">
          
            <div className="date">
                 <ExpenceDate expencedatenew={props.expencedateapp} />
            </div>

            <div className="title-prise">
                  <h1 className="title">{props.expencetitle}</h1>
                  <div className="prise">${props.expenceamount}</div>
            </div>
        
        
            </Card>
            

    )
}



export default Expenseitems;