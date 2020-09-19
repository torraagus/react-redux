import { IState, IAction } from "../loadingBar/interfaces";
import colors from "../../colors";
import { getRandomInt } from "../../utils";

const INITIAL_STATE = { progress: 0, color: colors.primary };

const loadingBarReducer = (state: IState = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		case "START_LOADING_BAR":
			return { ...state, progress: getRandomInt(10, 50) };
		case "FULL_LOADING_BAR":
			return { ...state, progress: 100 };
		default:
			return state;
	}
};

export default loadingBarReducer;
