import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function PrivatePage() {
  const handleSignOut = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>PrivatePage</div>
      <button onClick={handleSignOut}>Log-out</button>
    </section>
  );
}

export default PrivatePage;
