import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { login } from '../reducers/user'



function SignIn() {
    const dispatch = useDispatch()
    const [ signInUsername, setSignInUsername ] = useState('')
    const [ signInPassword, setSignInPassword ] = useState('')
    const router = useRouter()

    const handleLogin = () => {
      fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            dispatch(login({ username: signInUsername, firstname: data.firstname, token: data.token }));
            router.push("/home")
          }
        });
    }

    return(
      <div className={styles.modalContainer}>
        <Image src='/logohome.png' alt='Logo Twitter' width={50} height={50}/>
        <p className={styles.text}>Connect to Hackatweet</p>
        <input className={styles.input} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input className={styles.input} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button className={styles.button} onClick={handleLogin()}>Sign in</button> 
      </div>
    )
}

export default SignIn