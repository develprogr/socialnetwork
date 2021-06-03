const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    isFetching: false
};


const fetchingReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
         
};


export default fetchingReducer;

export const isFetchingAC = (fetching) => ({type: IS_FETCHING, isFetching: fetching});

