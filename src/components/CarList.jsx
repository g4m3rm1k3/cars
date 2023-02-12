import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
	const dispatch = useDispatch();
	const cars = useSelector((state) => state.cars.data);
	const handleCarDelete = (id) => {
		dispatch(removeCar(id));
	};
	const renderedCars = cars.map((car) => (
		<div key={car.id} className="panel">
			<p>
				{car.name} - ${car.cost}{' '}
			</p>
			<button
				className="button is-danger"
				onClick={() => {
					handleCarDelete(car.id);
				}}
			>
				Delete
			</button>
		</div>
	));
	return (
		<div className="car-list">
			{renderedCars}
			<hr />
		</div>
	);
}

export default CarList;
