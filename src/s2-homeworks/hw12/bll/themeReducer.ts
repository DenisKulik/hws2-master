export type ThemeStateType = {
    themeId: number
}

const initState: ThemeStateType = {
    themeId: 1,
};

export const themeReducer = (
    state: ThemeStateType = initState,
    action: ActionsTypes
): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            };
        default:
            return state;
    }
};

type ActionsTypes = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({
    type: 'SET_THEME_ID',
    id
}) as const;
