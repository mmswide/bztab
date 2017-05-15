/**
 * Created by Andriy on 02.10.2017
 */
const initialState = {
    config: {}
};
const config = (state=initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_CONFIG':
            return {
                ...state,
                config: action.config,
            }
        default:
            return state
    }
}

export default config;