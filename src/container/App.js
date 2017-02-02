import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<div className='index-page'>
					<div className='logo'/>
					<div className='navigation'>
						<div className='menu-item'>
							<span><Link to='/tasks'> Задачи </Link></span>
							<span><Link to='/about'> О приложении </Link></span>
						</div>	
					</div>
					<div className='content'>
						{this.props.children}
					</div>
					
				</div>
			)
	} 
}


function mapStateToProps(state) {
	return {
		page: state.page,
		user: state.user
	}
}

export default connect(mapStateToProps) (App);

App.PropTypes = {
	year: PropTypes.string,
	getPhotos: React.PropTypes.func
};
