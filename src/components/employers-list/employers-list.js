import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise, onValueChange }) => {
	
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployersListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
				onValueChange={() => onValueChange(id)}/>
		);
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployersList;