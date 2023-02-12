import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
	const dispatch = useDispatch();
	const handleNameChange = (event) => {
		// event.target.value
		dispatch(changeName(event.target.value));
	};
	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0;
		dispatch(changeCost(carCost));
	};
	const { name, cost } = useSelector((state) => {
		return { name: state.form.name, cost: parseInt(state.form.cost) };
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addCar({ name, cost }));
		dispatch(changeName(''));
		dispatch(changeCost(0));
	};

	return (
		<div className="car-form panel">
			<h4 className="sub-title is-3">Add Car</h4>
			<form onSubmit={handleSubmit}>
				<div className="field-group">
					<div className="field">
						<label className="label">Name</label>
						<input
							type="text"
							className="input is-expanded"
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className="field">
						<label className="label">Cost</label>
						<input
							className="input is-expanded"
							value={cost || ''}
							onChange={handleCostChange}
							type="number"
						/>
					</div>
				</div>
				<div className="field">
					<button className="button is-link">Add car</button>
				</div>
			</form>
		</div>
	);
}

export default CarForm;
