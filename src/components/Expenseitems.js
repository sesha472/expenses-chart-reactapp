

import React,{useState} from 'react';
import ExpenceDate from './ExpenceDate';
import './Expenseitems.css';
import Card from './Card';

 function Expenseitems(props) {

    // const expencedate= new Date ();
    // const expenceprise=127.99;
    // const expencetitle="namsthey sesha";;
    const [title, settitle] = useState(props.expencetitle)
      

   
    const clicked=()=>{
        settitle("sesha");
      console.log(title);
  
   }
    return (
        <Card className="Expenseitems">
          
            <div className="date">
                 <ExpenceDate expencedate={props.expencedate} />
            </div>

            <div className="title-prise">
                  <h1 className="title">{title}</h1>
                  <div className="prise">${props.expenceprise}</div>
            </div>
           
            
           <button onClick={()=>clicked()}>click</button>
            
        
            </Card>
            

    )
}



export default Expenseitems;