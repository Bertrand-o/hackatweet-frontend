import { useEffect, useState } from 'react';
import styles from "../styles/Trends.module.css";
import { useSelector } from 'react-redux'
import { useRouter } from "next/router"

function Trends() {
  const router = useRouter()
  const [ trends, setTrends ] = useState([])
  const [ tweetCount, setTweetCount ] = useState({})
  const refresh = useSelector((state) => state.tweets.needsRefresh);

  useEffect(() => {
    fetch('http://localhost:3000/tweets/trends')
    .then(response => response.json())
    .then(data => {
      if(data.result) {
        setTrends(data.trends)
      }
      data.trends.forEach(trend => {
        handleTweetCount(trend);
      });
    })
  }, [refresh])

  const handleTweetCount = (trend) => {
    const trendToString = trend.toString()
    const trendSliced = trendToString.slice(1)
    fetch(`http://localhost:3000/tweets/trends/${trendSliced}`)
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        setTweetCount(prev => ({
          ...prev,
          [trend]: data.tweets.length,
        }));
      } else {
        setTweetCount(prev => ({
          ...prev,
          [trend]: 0,
        }));
      }
    })
  }

  const handleRouting = (trend) => {
    router.push(`/home/[${trend}]`)
  }

  const trendsList = trends.map((trend, index) => {
    return (
      <div className={styles.trend} key={index} onClick={() => handleRouting(trend)}>
        <p className={styles.trendName}>{trend}</p>
        <p className={styles.trendsNumber}>{tweetCount[trend]} Tweets</p> 
      </div>
    )
  })

  return (
    <div className={styles.main}>
      <div>
        <p>Trends</p>
      </div>
      <div className={styles.trendslist}>
        {trendsList}
      </div>
    </div>

  )
}

export default Trends