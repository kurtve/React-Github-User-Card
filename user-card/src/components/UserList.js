import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';


const TLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	li {
		margin: 10px;
	}

`;


const TodoList = (props) =>  {
	return (
		<TLWrapper>
			<ul>
				{props.todolist.map(todo => {
					return (
						<li key={todo.id}>
							<Todo todo={todo} todoClick={props.todoClick} />
						</li>
					);
				})}
			</ul>
		</TLWrapper>
	);
};


export default TodoList;
