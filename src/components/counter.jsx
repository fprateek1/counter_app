//
import React, { Component } from 'react';


class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        if (prevProps.counter.value !== this.props.counter.value){
            // ajax call  and new data  from the server
        }
    }
    
    render() { 
        return(
         <div>
             {/* <img src="{this.state.imgUrl}" alt="" /> */}
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btm-sm m-2">Increment</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)}
             className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>
        
         );
        }
    getBadgeClass(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };
    formatCount() {
        const { value } = this.props.counter; //object destructuring
        return value === 0 ? "zero" : value;
    };
    }


export default Counter;