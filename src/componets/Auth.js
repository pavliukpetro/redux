import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

function Auth() {
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" placeholder="name" />
            </div>
            <div>
                <input type="password" placeholder="password" />
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
}

export default Auth;