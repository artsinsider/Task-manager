import React, {Component}     from 'react';
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksGrid              from './../components/TasksEditor/TasksGrid';
import Button                 from './../components/Button/Button';
import * as taskAction        from './../actions/tasksAction';
import ModalDialog            from './../components/Modal-Dialog/ModalDialog';

class TasksEditor extends Component {
	constructor(props) {
		super(props);

		this.editFieldCreateTask = this.editFieldCreateTask.bind(this);
		this.comoleteTaskStatus = this.comoleteTaskStatus.bind(this);
		this.clickEditTask = this.clickEditTask.bind(this);
		this.editFieldUpdateTask = this.editFieldUpdateTask.bind(this);
		this.saveEditingTask = this.saveEditingTask.bind(this);
		this.taskDelete = this.taskDelete.bind(this);
		this.taskAction = bindActionCreators( taskAction, props.dispatch);
	}

	/**
	 * Значение в редактируемыхполях задачи
     */
	editFieldCreateTask(e) { 
		const {name, value} = e.target;
		this.taskAction.editFieldTask({name, value, typeActionTask: 'createTask'});
	}

	/**
	 * Редактирование поля создаваемой задачи
     */
	editFieldUpdateTask(f) { 
		const {name, value} = f.target;
		this.taskAction.editFieldTask({name, value, typeActionTask: 'editedTask'});
	}

	/**
	 * Редактировать задачу
	 * @param e редактируемой задачи
	 * {id} - id редактируемой задачи
     */
	clickEditTask(e) {  
		const {id} = e.target;
		this.taskAction.editingTask({id});
	}

	/**
	 * Cохранить редактируемую задачу
	 */
	saveEditingTask() { 
		const {editedTask} = this.props;
		const {id} = editedTask;
		this.taskAction.taskSave({id:id});
	}

	/**
	 * Переводит задачу в статус выполнена и обратно
     */
	comoleteTaskStatus(el) {
		const {id} = el.target;
		this.taskAction.completeTask({id});
	}

	/**
	 * Удаление задач
     */
	taskDelete(del) { 
		const {id} = del.target;
		this.taskAction.deleteTask({id});
	}

	render() {
		const {notCreateNewTask, createTask, editedTask, tasks ,editTask} = this.props;

		return (
			<div className='task-container' >
				<ModalDialog
						contentLabel='Новая задача'
						isOpen={notCreateNewTask}
						isClose={this.taskAction.cancelCreate}
						valueInput={createTask.titleTask}
						valueTextArea={createTask.descriptionTask}
						update={this.editFieldCreateTask}
						executorInput='titleTask'
						executorTextarea='descriptionTask'
						saveTask={this.taskAction.saveNewTask}
				/>
				<ModalDialog
						contentLabel='Редактирование задачи'
						isOpen={editTask}
						isClose={this.taskAction.cancelCreate}
						valueInput={editedTask.titleTask}
						valueTextArea={editedTask.descriptionTask}
						update={this.editFieldUpdateTask}
						executorInput='titleTask'
						executorTextarea='descriptionTask'
						saveTask={this.saveEditingTask}
				/>
				<h3>Список задач</h3>
				<Button
						className='create-button'
						clickHandler={this.taskAction.createTask}
						text='Создать новую задачу'
				/>
				<TasksGrid
						task={tasks}
						taskEdit={this.clickEditTask}
						completeTask={this.comoleteTaskStatus}
						deleteEl={this.taskDelete}
				/>
			</div>
		)
	}	
}

function mapStateToProps({task}) {
	return {
		...task
	}
}

export default connect(mapStateToProps) (TasksEditor);