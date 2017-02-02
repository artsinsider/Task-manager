import React, {Component} from 'react';
import Tasks              from './Tasks';
import Button             from '../Button/Button';
import classNames         from 'classnames';

export default class TasksGrid extends Component {
	constructor(props) {
		super(props);
		this.renderTasks = this.renderTasks.bind(this);
		this.clickButtonIdTask = this.clickButtonIdTask.bind(this);
		this.clickCompleteTask = this.clickCompleteTask.bind(this);
		this.taskDelete = this.taskDelete.bind(this);
	}

	clickButtonIdTask(e) {
		const {taskEdit}=this.props;
		taskEdit(e);
	}

	clickCompleteTask(e) {
		const {completeTask}=this.props;
		completeTask(e);
	}

	taskDelete(del){
		const {deleteEl}= this.props;
		deleteEl(del);
	}

	renderTasks(e) {
		const tasksBlock = e.map( (el, ids) => {
			return(
				<Tasks  key={ids}  >
					<div className={classNames('tasks',{'successfully':el.status} )}>
						<span className='title'>{el.titleTask}</span>
						{(el.status == true) ?
							<span style={{color: 'green', paddingLeft: '15px'}}>
								<strong> Выполнена &#10003;</strong>
							</span>
						: null}
						<div className='description'>{el.descriptionTask}</div>
						<span className='time'>{el.timeCreate}</span>

						<div className='group-button'>
							{(el.status == false) ?<Button
									id={el.id}
									className='edit-button'
									clickHandler={this.clickButtonIdTask}
									text='Редактировать задачу'
							/> : null}
							<Button
									id={el.id}
									className='completed-button'
									clickHandler={this.clickCompleteTask}
									text= {(el.status == false) ?'Завершить задачу' :'Возобновить задачу'}
							/>
							<Button
									id={el.id}
									className='delete-button'
									clickHandler={this.taskDelete}
									text='Удалить задачу'
							/>
						</div>
					</div>

				</Tasks>
			)
		});
		return tasksBlock;
	}

	render() {
		const {task} = this.props;
		return (
			<div className='tasks-grid'>
				{this.renderTasks(task)}
			</div>
		)
	}	
}