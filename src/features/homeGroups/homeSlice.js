import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	openModal: false,
	check: [],
	groups: {
		Depression: false,
		"Anxiety Disorders": false,
		Schizophrenia: false,
		"Bipolar Disorder": false,
		"Diabetes Mellitus": false,
		Hypertension: false,
		Osteoarthritis: false,
		Asthma: false,
	},
};

export const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		openModal: (state) => {
			state.openModal = true;
		},
		closeModal: (state) => {
			state.openModal = false;
		},
		addCheck: (state, action) => {
			state.check = [
				...state.check,
				{id: action.payload.id, title: action.payload.title},
			];
			console.log(state.check);
		},
		removeCheck: (state, action) => {
			let newFilter = state.check.filter((el) => el.id != action.payload);
			state.check = newFilter;
			console.log(state.check);
		},
		setGroups: (state, action) => {
			state.groups = {
				...state.groups,
				[action.payload[0]]: true,
				[action.payload[1]]: true,
				[action.payload[2]]: true,
				[action.payload[3]]: true,
				[action.payload[4]]: true,
				[action.payload[5]]: true,
				[action.payload[6]]: true,
				[action.payload[7]]: true,
			};
			console.log(state.groups);
		},
	},
});

// Action creators are generated for each case reducer function
export const {openModal, closeModal, addCheck, removeCheck, setGroups} =
	homeSlice.actions;

export default homeSlice.reducer;
