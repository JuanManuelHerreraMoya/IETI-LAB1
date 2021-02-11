import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
			<div>
				<h3>texto :{this.props.text}</h3>
				<h3>priority:{this.props.priority}</h3>
				<h3>date: {this.props.dueDate.toString()}</h3>
			</div>
        );
    }

}

