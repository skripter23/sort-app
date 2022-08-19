import './app-info.css';


const AppInfo = (props) => {

	return (
		<div className="app-info" style={{color: props.color, backgroundColor: props.backgroundColor}}>
			<h1 className='app-info-text'>Accounting for employees in company "N"</h1>
			<h1 className='app-info-text'>Total number of employees: {props.count} </h1>
			<h1 className='app-info-text'>Salary bonus will receive: {props.salaryBonus} </h1>
		</div>
	);
}

export default AppInfo;