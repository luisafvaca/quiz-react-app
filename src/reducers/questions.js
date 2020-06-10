import { ADD_NEW_QUESTION } from '../actions/questions';
import { act } from 'react-dom/test-utils';
const initialState = {
    questions: [{quiestion: "testest", area: "art", difficulty: 'low'}]
}


function questions(state=initialState, action){
    switch(action.type) {
        case ADD_NEW_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.question]
            }
        default: 
            return state;
    }
}

export default questions;