import React from 'react';
import './ExpensesFilter.css';

export default function ExpensesFilter(props) {
    
    const dropdownchangehandler=(event)=>{
        props.onChangeFilter(event.target.value);
        // console.log("filter-"+event.target.value);
        
    }
    
    return (
        <div className="expenses-filter">
            
            <div className="expenses-filter-controls">
                <label>selct year</label>
                <select value={props.selectedyear} onChange={dropdownchangehandler}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>

            </div>
  
        </div>
    );
};
