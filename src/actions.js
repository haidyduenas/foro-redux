import store from './store';

export const addComment = (name,comment) => {
    
    
        const addPlayerList = [...store.getState().players, {
            name: name,
            comment : comment,
        }];
    
        store.setState({
            players: addPlayerList
        })
    }