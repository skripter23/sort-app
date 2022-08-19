import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import MyProfile from '../my-profile/my-profile';
import { Component } from 'react';



class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			backgroundColor: '#3d5a80',
			data: [{ name: 'David Shamsani', salary: 1500, increase: false, rise: true,   id: 1 },
				  { name: 'Alina Sazonova', salary: 800, increase: true, rise: false,  id: 2 },
				  { name: 'Viktor Konopatenko', salary: 1500, increase: false, rise: false, id: 3 }],
			term: '',
			filter: 'all'
		}
		this.maxId = 4;
	}


	changeColor = (e) => {
		this.setState(state => ({
			color: e.target.value
		}))
	}
	
	changeBackgroundColor = (e) => {
		this.setState(state => ({
			backgroundColor: e.target.value
		}))
	}

	buttonReset = () => {
		this.setState(state => ({
			color: 'white',
			backgroundColor: '#3d5a80'
		}))
	}
	

	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id === id);
			
			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			// const newData = [...before, ...after];

			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
            name, 
            salary,
			increase: false,
			rise: false,
            id: this.maxId++
        }
		this.setState(({ data }) => {
			let newArr = [];
			newItem.name !== '' ? newItem.salary !== '' ? newArr = [...data, newItem] : newArr = [...data] : newArr = [...data]
            return {
                data: newArr
            }
        });
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, increase: !old.increase };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		})
	}

	onToggleRise = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, rise: !old.rise };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		})
	}

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
				return items.filter(item => item.salary > 1000);
			case 'salaryBonus':
				return items.filter(item => item.increase)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
	}
	
	onValueChange = (id) => {
		console.log('In process');
	}




	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase !== false).length;
		 const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className='app'>
			<span className='text-color-span'>Text Color: </span>
			<input type="color" onInput={this.changeColor} />
			<span className='text-backgroundColor-span'>Background Color: </span>
			<input type="color" onInput={this.changeBackgroundColor} />	
			<button className='reset-button' style={{ color: this.state.color, backgroundColor: this.state.backgroundColor}}  onClick={this.buttonReset}>Reset</button>	
			<AppInfo salaryBonus={increased} count={employees} color={this.state.color} backgroundColor={this.state.backgroundColor} />
			<div className="search-panel" style={{backgroundColor: this.state.backgroundColor}}>
				<SearchPanel onUpdateSearch={this.onUpdateSearch} />
				<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} color={this.state.color} />
			</div>

				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
					onValueChange={this.onValueChange}/>
			<EmployersAddForm color={this.state.color} onAdd={this.addItem} backgroundColor={this.state.backgroundColor} />
			<MyProfile color={this.state.color} backgroundColor={this.state.backgroundColor} name='David' surname="Shamsani" Realsurname='Choloyan' linkedin="https://www.linkedin.com/in/david-choloyan-ba823518b/" github='https://github.com/skripter23' />
		</div>
	);
	}
}


export default App;