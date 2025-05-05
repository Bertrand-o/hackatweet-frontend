import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";

function Tweet() {
  const [newTweet, setNewTweet] = useState("");
  const [count, setCount] = useState(0);

  const clickNewTweet = () => {
    fetch(
      "http://localhost:3000/tweets/newtweet/D6d_Qfb5h34tcWSuYm7CKUE0pQDKmi_R",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newTweet }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          //dispatch(addNewTweet(newTweet))
          setNewTweet("");
          setCount(0);
        }
      });
  };

  return (
    <div className={styles.main}>
      <p>Home</p>

      <textarea
        placeholder="What's up ?"
        id="newtweet"
        onChange={(e) => setNewTweet(e.target.value)}
        value={newTweet}
        className={styles.texarea}
      />
      <div className={styles.positionbutton}>
        <div className={styles.count}>{count}/280</div>
        <button
          onClick={() => clickNewTweet()}
          id="tweet"
          className={styles.buttonclick}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default Tweet;
