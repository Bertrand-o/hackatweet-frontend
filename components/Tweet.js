import styles from "../styles/Tweet.module.css"
import { useEffect, useState } from 'react';


function Tweet() {

  const [ newTweet, setNewTweet] = useState("")

  const clickNewTweet = () => {
      fetch('http://localhost:3000/tweets/newtweet/D6d_Qfb5h34tcWSuYm7CKUE0pQDKmi_R', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: newTweet})
    })
    .then(response => response.json())
    .then(data => {
      if (data.result) {
          //dispatch(addNewTweet(newTweet))
          setNewTweet("")
      }      
     });;
  }
  
  return( 
  <div className={styles.main}>
    <p>Home</p>
    <textarea placeholder="What's up ?" id="newtweet" onChange={(e) => setNewTweet(e.target.value)} value={newTweet} className={styles.texarea}></textarea>
    <div className={styles.positionbutton}>
    <button onClick={() => clickNewTweet()} id="tweet" className={styles.buttonclick}>Tweet</button>
    </div>
  </div>
  )
}

export default Tweet;