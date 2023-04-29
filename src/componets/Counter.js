import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index';

function Counter() {
    const dispatch = useDispatch();
    // Hook to Read the Store
    const { counter, showCounter } = useSelector((state) => state.counter);
    // const showCounter = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        // dispatch({ type: 'increment' });
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        // dispatch({ type: 'decrement' });
        dispatch(counterActions.decrement());
    }

    const plusHandler = () => {
        // dispatch({ type: 'plus5', amount: 5 });
        dispatch(counterActions.plus5());
    }

    const toogleHandler = () => {
        // dispatch({ type: 'toogle' });
        dispatch(counterActions.toogle());
    }

    return (
        <div>
            <h1>Redux Counter</h1>
            {showCounter && <div>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>-</button>
                <button onClick={incrementHandler}>+</button>
                <button onClick={plusHandler}>+5</button>
            </div>
            <button onClick={toogleHandler}>Toogle Counter</button>
        </div>
    );
}

export default Counter;
