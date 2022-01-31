import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    render() { 
        const { onReset, counters, onDelete, onIncrement} = this.props;
        return (
         <div>
            onClick={onReset}
            <button className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>(
               <Counter
                  key={counter.id} //key is used internally by react so we wont able to access it by counter component
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  counter={counter}
               />
               ))}  

         </div>);
    }
}
 
export default Counters;