import { ADD_NEW_QUESTION } from '../actions/questions';
const initialState = {
    questions: [{quiestion: "testest", area: "art", difficulty: 'low'}]
}


function questions(state=initialState, action){
    switch(action.type) {
        case ADD_NEW_QUESTION:
            console.log(action.question, 'reduccer')
        default: 
            return state;
    }
}

export default questions;