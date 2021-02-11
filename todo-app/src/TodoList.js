import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
				{this.props.items.map((todo) =>
					<li>
						<Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate.toString()}/>
					</li>
				)} 
            </ul>
        );
    }

}