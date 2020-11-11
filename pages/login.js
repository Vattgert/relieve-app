import { LoginForm } from '../components/login-form';
import { Header } from '../components/header';
import styles from '../styles/Login.module.css';

export default function Login(){
    return (
        <div className="page">
            <Header isLoggedIn={true} isHost={false} />
            <div className={styles.container}>
                <LoginForm />
            </div>
        </div> 
    )
}