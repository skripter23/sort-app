import { Component } from 'react';
import './my-profile.css';

class MyProfile extends Component {


	constructor(props) {
		super(props);
		this.state = {
			surname: this.props.surname
		}
	}
	
	passportSurname = () => {
		this.setState(state => ({
			surname: this.props.Realsurname	
		}))
	}

	realSurname = () => {
		this.setState(state => ({
			surname: this.props.surname
		}))
	}



	render() {
		return (
		<div className='my-profile' style={{ color: this.props.color, backgroundColor: this.props.backgroundColor}}>
			<div className='author-div'>
					<h1 className='my-profile-text' onMouseOver={this.passportSurname} onMouseOut={this.realSurname}>Author: {this.props.name} {this.state.surname}</h1>			
			</div>		
			<a style={{color: this.props.color}}  href={this.props.linkedin} target='_blank' rel="noopener noreferrer" className='my-profile-link'><i className="fa fa-comment" aria-hidden="true"></i>LinkedIn</a>
			<br />
			<a style={{color: this.props.color}} href={this.props.github} target='_blank' rel="noopener noreferrer" className='my-profile-link'><i className="fa fa-code-fork" aria-hidden="true"></i>Github</a>
		</div>
	);
	}
}

export default MyProfile;