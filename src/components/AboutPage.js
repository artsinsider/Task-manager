import React, {Component} from 'react';

export default class AboutPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='about-page'>
				<div >
					<h1 className='title'> О нас </h1>
				</div>
				<div className='text-content'>
					<p>
					Данное приложение позволяет создавать, редактировать, удалять и менять стату задачам.
					Приложение сделано в рамках тестового задания при поддержке Google и других инициативных сторон.
					</p>
				</div>
			</div>
		)
	}
}

//<div></div>
