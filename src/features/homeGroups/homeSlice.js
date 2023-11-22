import {createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";

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
	loading: false,
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
		resetCheck: (state) => {
			state.check = [];
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

		fetchPending: (state) => {
			state.loading = true;
		},

		// error

		fetchReject: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	openModal,
	closeModal,
	addCheck,
	removeCheck,
	setGroups,
	fetchPending,
	fetchReject,
	resetCheck,
	getCheck,
} = homeSlice.actions;

export const fetchGroupsAsync = () => async (dispatch) => {
	try {
		const {data} = await axios.get("http://localhost:3000/usergroup", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		});
		console.log(data);
		const group = [];
		data?.forEach((el) => {
			console.log(el.Group.title);
			group.push(el.Group.title);
		});
		dispatch(setGroups(group));
		// data masuk ke action.payload
	} catch (error) {
		dispatch(fetchReject(error.message));
	}
};

export const submitGroup = () => async (dispatch, getState) => {
	try {
		const {data} = await axios.post(
			"http://localhost:3000/usergroup",
			getState().home.check,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			}
		);
		console.log(data);

		await axios.patch(
			"http://localhost:3000/user",
			{},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			}
		);

		localStorage.setItem("firstTime", false);
		dispatch(resetCheck());
	} catch (error) {
		console.log(error);
	}
};

export default homeSlice.reducer;
