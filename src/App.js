import { useSelector } from 'react-redux';
import Auth from './componets/Auth';
import UserProfile from './componets/UserProfile';
import Counter from './componets/Counter';
import './App.css';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="App">
      <header className="App-header">
        {isAuth && <UserProfile />}
        {!isAuth && <Auth />}
        <Counter />
      </header>
    </div>
  );
}

export default App;
