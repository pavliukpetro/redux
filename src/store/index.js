// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// [counter, setCounter] = useState(0);

// Reducer Function
// const counterReducer = (state = {counter: 2, showCounter: true}, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: true
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: true
//         }
//     }

//     if (action.type === 'plus5') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: true
//         }
//     }

//     if (action.type === 'toogle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// state: {
//     counter: {
//         counter: 0,
//         showCounter: true
//     },
//     auth: {
//         isAuth: false
//     }
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        showCounter: true
    },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        plus5(state) {
            state.counter = state.counter + 5;
        },
        toogle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        login(state) {
            console.log('login');
            state.isAuth = true;
        },
        logout(state) {
            console.log('logout');
            state.isAuth = false;
        }
    }
});

// Creates a Redux store that holds the complete state tree of your app
// const store = createStore(counterReducer);
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
