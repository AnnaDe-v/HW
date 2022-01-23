const initState = {
    theme: 'red'
};
type initialStateType = {
    theme: string
}

type ActionsTypes = changeThemeCType

export const themeReducer = (state: initialStateType = initState, action: ActionsTypes): ActionsTypes => {
    switch (action.type) {

        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.theme

            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): any => {
    return {type: 'CHANGE-THEME', theme} as const
};


type changeThemeCType = ReturnType<typeof changeThemeC>