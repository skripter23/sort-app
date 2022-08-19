import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

	render() {

		const { name, salary } = this.state;
		return (
			<div className="app-add-form" style={{ color: this.props.color, backgroundColor: this.props.backgroundColor }}>
				<h3>Add a new employee (Fill in all fields)</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text" value={name} name="name" onChange={this.onValueChange} className="form-control new-post-label" placeholder='Name' />
					<input type="number" value={salary} name="salary" onChange={this.onValueChange} className="form-control new-post-label" placeholder='Salary in $?' />
					<button type='submit' className="btn btn-outline-light" style={{ color: this.props.color }}>Add</button>
				</form>
			</div>
		);
	}
}

export default EmployersAddForm;