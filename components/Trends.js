import { useEffect, useState } from 'react';
import styles from "../styles/Trends.module.css";
function Trends(){

  const [ trends, setTrends] = useState("")

  return (
    <div className={styles.main}>
      <div>
        <p>Trends</p>
      </div>
      <div className={styles.trendslist}>
        <p>TRENDS CONTENT</p>
      </div>
    </div>

  )
}

export default Trends