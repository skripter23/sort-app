import './app-filter.css';

const AppFilter = (props) => {

	const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'Only by rise'},
        {name: 'moreThen1000', label: 'Salary more then 1000$' },
        {name: 'salaryBonus', label: 'Salary bonus'}
	];
	
	    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-outline-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
				    onClick={() => props.onFilterSelect(name)}
					style={{ color: props.color}}>
                    {label}
            </button>
        )
    })

	return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;