import createStore from "redux-zero";

let listComment = [
    {
        name : 'Morgan',
        comment : 'Its a good news',

    },
    {
        name : 'Bender',
        comment : 'Excellent Stuff',

    }
];

const initialState = {
    listComments: listComment,
	currentComment : -1,
};

const store = createStore(initialState);

export default store;