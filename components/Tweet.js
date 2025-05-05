import styles from "../styles/Tweet.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshTweets } from '../reducers/tweets';


function Tweet() {
  const dispatch = useDispatch()
  const [newTweet, setNewTweet] = useState("");
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user.value);

  const clickNewTweet = () => {
    fetch(`http://localhost:3000/tweets/newtweet/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTweet }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(refreshTweets())
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
        maxlength="280"
        onChange={(e) => {
          setNewTweet(e.target.value);
          setCount(e.target.value.length);
        }}
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
