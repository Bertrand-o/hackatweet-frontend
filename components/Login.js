import 'antd/dist/antd.css';
import styles from '../styles/Login.module.css';
import Image from 'next/image' 

export default function Login() {
  return(
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src='/logohome.png' alt='Logo Twitter' width={100} height={100}/>
      </div>
      <div className={styles.connexion}>
        <Image src='/logohome.png' alt='Logo Twitter' width={100} height={100}/>
        <div className={styles.connexionContent}>
          <h1>See what's happening</h1>
          <p>Join Hackatweet today.</p>
          <button>Sign up</button>
          <p>Already have an account?</p> 
          <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}