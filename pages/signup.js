import { Header } from '../components/header';

export default function Signup() {
  return (
    <div className="page">
      <Header isLoggedIn={true} isHost={false} />
      <h1>SIgnup</h1>
    </div>
  );
}
