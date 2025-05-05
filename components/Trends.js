import { useEffect, useState } from 'react';
import styles from "../styles/Trends.module.css";
function Trends(){
  const [ trends, setTrends ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tweets/trends')
    .then(response => response.json())
    .then(data => {
      if(data.result) {
        setTrends(data.trends)
      }
    })
  }, [])

  const trendsList = trends.map((data, index) => {
    return (
      <div className={styles.trend}>
        {data}
        <p className={styles.trendsNumber}>0 Tweets</p> 
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