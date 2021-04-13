import './App.css'; 
import Expenseitems from './components/Expenseitems';

function App() {
 const expenses=[
   {date:new Date(2021,2,4),title:"sai1",prise:"183k"},
   {date:new Date(2021,2,4),title:"sai2",prise:"183k"},
   {date:new Date(2021,2,4),title:"sai3",prise:"183k"},
   {date:new Date(2021,2,4),title:"sai4",prise:"186k"},
 ]

  return (
    <div className="App">
     <h2>welcome sesha</h2>
     {expenses.map(item=>{
       return(
       <Expenseitems 
       expencedate={item.date}
       key={item.title}
       expencetitle={item.title}
       expenceprise={item.prise}
       
       > this children text</Expenseitems>);
     })}
     {/* <Expenseitems expencedate={expenses[0].date} expencetitle={expenses[0].title } expenceprise={expenses[0].prise}/>
     <Expenseitems expencedate={expenses[1].date} expencetitle={expenses[1].title } expenceprise={expenses[1].prise}/>
     <Expenseitems expencedate={expenses[2].date} expencetitle={expenses[2].title } expenceprise={expenses[2].prise}/>
     <Expenseitems expencedate={expenses[3].date} expencetitle={expenses[3].title } expenceprise={expenses[3].prise}/>
     */}
    </div>
  );
}  




export default App;
