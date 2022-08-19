import { Component } from 'react';
import './employers-list-item.css';

class EmployersListItem extends Component  {
	

	render() {
		const { name, salary, onDelete, onToggleIncrease, onToggleRise, onValueChange, increase, rise } = this.props;

		let classNames = "list-group-item d-flex justifu-content-between";
		if (increase) {
		classNames = classNames + ' increase';
		}
		if (rise) {
			classNames += ' like';
		}
		return ( 
		<li className={classNames}>
			<span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
			<input type="text" onChange={onValueChange} className="list-group-item-input" defaultValue={salary + '$'} />
			<div className="d-flex justify-content-center align-items-center">
				<button
					className="btn-cookie btn-sm"
					onClick={onToggleIncrease}
					>
					<i className="fas fa-cookie"></i>
				</button>
				<button
					className="btn-trash btn-sm"
					onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
	}
}

export default EmployersListItem;