import { UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (
    state: UserType[], action: ActionType
): UserType[] => {
    switch (action.type) {
        case 'sort': {
            return [ ...state ].sort(
                (a, b) => a.name > b.name ?
                          action.payload === 'up' ? 1 : -1 :
                          action.payload === 'up' ? -1 : 1
            );
        }
        case 'check': {
            return state.filter(u => u.age > 18);
        }
        default:
            return state;
    }
};
