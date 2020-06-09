export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export const addQuestion = (questionObject) => ({
    type: ADD_NEW_QUESTION,
    question: questionObject
})