import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../reducers/user'

function SignUp() {
  const dispatch = useDispatch()
  const [ signUpFirstname, setSignUpFirstname ] = useState('')
  const [ signUpUsername, setSignUpUsername ] = useState('')
  const [ signUpPassword, setSignUpPassword ] = useState('')
  const router = useRouter()

  const handleSignup = () => {
        fetch('http://localhost:3000/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
          .then(data => {
            if (data.result) {
              dispatch(login({ username: signUpUsername, firstname: data.user.firstname, token: data.token }));
              router.push("/home")
            }
          });
      }

  return(
    <div className={styles.modalContainer}>
      <Image src='/logohome.png' alt='Logo Twitter' width={50} height={50}/>
      <p className={styles.text}>Create your Hackatweet account</p>
      <input className={styles.input} type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
      <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
      <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
      <button className={styles.button} onClick={() => handleSignup()}>Sign up</button> 
    </div>
  )
}

export default SignUp