import React, { FC } from 'react'
import { DataType } from '../App'

type TaskType = {
	data: DataType
}

const Tasks: FC<TaskType> = (props) => {
	return (
		<div>
			<h1>{props.data.title}</h1>
			<ul>
				{props.data.tasks.map((t) => {
					return (
						<li>
							<span>{t.taskId}</span>
							<span>{t.title}</span>
							<span>{t.isDone}</span>
						</li>
					)
				})}
			</ul>
			<ul>
				{props.data.students.map((s) => {
					return <li>{s}</li>
				})}
			</ul>
		</div>
	)
}

export default Tasks
