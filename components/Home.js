import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from './Tweet';
import Trends from './Trends'
import LastTweets from "./LastTweets";
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'

function Home() {

  const user = useSelector((state) => state.user.value)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className={styles.main}>
      <div id="leftcontainer" className={styles.left}>
        <div className={styles.contentleft}>
          <div>
            <Image
              src="/logohome.png"
              alt="Logo Twitter"
              width={70}
              height={70}
            />
          </div>
          <div>
            <div className={styles.user}>
              <Image className={styles.pfp} src='/twitter-pfp.avif' alt='Profile picture' width={40} height={40}/>
              <div className={styles.userInfo}>
                <span className={styles.firstname}>{user.firstname}</span>
                <span className={styles.username}>@{user.username}</span>
              </div>
            </div> 
            <button className={styles.logout} onClick={handleLogout()} >Logout</button>
          </div>
        </div>
      </div>
      <div id="centercontainer" className={styles.center}>
        <Tweet />
        <LastTweets /> 
      </div>
      <div id="rightcontainer" className={styles.right}>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
