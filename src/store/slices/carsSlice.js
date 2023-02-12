import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		data: [],
		searchTerm: '',
	},
	reducers: {
		addCar(state, action) {
			// Assumption
			// action.payload === {name: '', cost: 0}
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		removeCar(state, action) {
			// Assumption
			// action.payload === the id of the car we want to remove
			const updated = state.data.filter((car) => car.id !== action.payload);
			state.data = updated;
		},
	},
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
