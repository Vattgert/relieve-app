import { Form, Field } from 'react-final-form';
import Link from 'next/link';
import relieveApi from '../../services/relieveAPI';
import styles from '../../styles/LoginForm.module.css';

const LoginForm = () => (
  <div className={styles.wrapper}>
    <Form
      onSubmit={() => {
        relieveApi.login();
      }}
      validate={() => {
        console.log('Validate login.');
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Login</h2>
          <div className={styles.inputWrapper}>
            <Field
              name="firstName"
              component="input"
              placeholder="Username or email..."
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Field
              name="password"
              component="input"
              placeholder="Password..."
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>
      )}
    />
    <span className={styles.signup}>
      {`Don't have an account?`}
      <Link href="/signup">
        <a> Sign up!</a>
      </Link>
    </span>
  </div>
);

export { LoginForm };
