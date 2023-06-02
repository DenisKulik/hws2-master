import { LoadingStateType } from '../HW10';

const initState = {
    isLoading: false,
};

export const loadingReducer = (
    state: LoadingStateType = initState,
    action: LoadingActionType
): LoadingStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return { isLoading: action.isLoading };
        default:
            return state;
    }
};

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
});
