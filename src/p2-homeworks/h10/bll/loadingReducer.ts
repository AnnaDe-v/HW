
const initState = {
    loadingSt: false
}
export type stateType = {
    loadingSt: boolean
}

export type loadingType = {
    type: 'LOAD-START'
    loadingSt: boolean
}


export const loadingReducer = (state:stateType = initState, action: loadingType):stateType => { // fix any
    switch (action.type) {
        case 'LOAD-START': {
            return {
                ...state,
                loadingSt: action.loadingSt
            }
        }
        default: return state
    }
}

export const loadingAC = (loadingSt: boolean): loadingType => {
return {type: 'LOAD-START', loadingSt}
}