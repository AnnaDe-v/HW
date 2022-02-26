
export type initialStateType = {
    theme: string,
    themes: Array<string>
}

export const initialTheme: initialStateType = {
    theme: 'red',
    themes: ['dark', 'red', 'lightgreen', 'yellow']
};


export const themeReducer = (state: initialStateType = initialTheme, action: ActionsTypes): initialStateType => {
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

export const changeThemeC = (theme: string) => {
    return {type: 'CHANGE-THEME', theme} as const
};


type changeThemeCType = ReturnType<typeof changeThemeC>

type ActionsTypes = changeThemeCType