import React, {Component} from 'react';
import Button             from '../Button/Button';

export default class TaskEdit extends Component {
	constructor(props) {
			super(props);
		}

	render() {
		const {valueInput, valueTextArea, update, executorInput, executorTextarea, save} = this.props;

		return (
				<div className='edit'>
					<input
							className='title-task'
							value={valueInput}
							onChange={update}
							name={executorInput}
							placeholder='Название темы'
							rows={1}/>
					<textarea
							className='description-task'
							value={valueTextArea}
							onChange={update}
							name={executorTextarea}
							placeholder='Описание задачи'
							rows={5}/>
					<Button
							className='save-button'
							clickHandler={save}
							text='Сохранить'
					/>

			</div>
		)
	}	
}


