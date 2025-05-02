import styles from "../styles/Home.module.css";
import Image from "next/image";
<<<<<<< HEAD
import Tweet from './Tweet';
import Trends from './Trends'
import LastTweets from "./LastTweets";
=======
import Tweet from "./Tweet";
import Trends from "./Trends";
>>>>>>> bertrand

function Home() {
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
            <p>USER</p>
            <button>logout</button>
          </div>
        </div>
      </div>
      <div id="centercontainer" className={styles.center}>
        <Tweet />
      </div>
      <div id="rightcontainer" className={styles.right}>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
