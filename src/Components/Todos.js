import React from 'react'
import Todo from './Todo'

export const Todos = (props) => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<h1>Todos List</h1>
				{
					props.todos.length===0 ? "No Todos To Display" : props.todos.map( (todo) => {
						return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
					})
				}
			</div>
		</div>
	)
}