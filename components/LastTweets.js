import styles from '../styles/LastTweets.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'

function LastTweets() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        setTweets(data.tweets)
      }
    })
  }, [tweets])

  const tweetsList = tweets.map((data, index) => {
    return(
    <div className={styles.tweet} key={index}>
      <div className={styles.userInfo}>
        <Image src='/twitter-pfp.avif' alt='Profile picture' width={20} height={20}/>
        <span>{data.firstname}</span> 
        <span>{data.username}</span> 
        <span>{data.date}</span>
      </div>
      <div className={styles.text}>
        {data.text}
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} /><span>0</span>
        <FontAwesomeIcon icon={faTrashCan} className={styles.trashcanIcon} />
      </div>
    </div>
    )
  })

  return(
    <div className={styles.tweetsContainer}>
      {tweetsList}
    </div>
  )
}

export default LastTweets