import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

function UserProfile() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <button onClick={logoutHandler}>Log out</button>
            </div>
        </div>
    );
}

export default UserProfile;