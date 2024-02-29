import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { Link, Navigate } from 'react-router-dom';

const Home = (props) => {
  const { user } = props;
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSingUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  if (user) {
    return <Navigate to="/private" />;
  }

  return (
    <section>
      <div>Home</div>
      <form>
        {isSignUpActive && <legend>Sign up</legend>}
        {!isSignUpActive && <legend>Sign in</legend>}

        <fieldset style={{ minWidth: '350px' }}>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
          </ul>
          {isSignUpActive ? (
            <button type="button" onClick={handleSingUp}>
              Sing up
            </button>
          ) : (
            <button type="button" onClick={handleSignIn}>
              Sing in
            </button>
          )}
        </fieldset>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <a onClick={handleMethodChange}>
            {isSignUpActive ? 'Log In' : 'Create an account'}
          </a>
          <Link to={'/private'}>Click here to go to /private</Link>
        </div>
      </form>
    </section>
  );
};

export default Home;
