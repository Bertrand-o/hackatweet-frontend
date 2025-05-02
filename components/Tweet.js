import { useEffect, useState } from 'react';

const [ newTweet, setNewTweet] = useState()

const clickNewTweet = () => {
		fetch('http://localhost:3000/tweets/newtweet/D6d_Qfb5h34tcWSuYm7CKUE0pQDKmi_R', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({text: newTweet})
	})
  .then(response => response.json())
  .then(data => {

  })
}

function Tweet() {
  <div>
    <input type="text" placeholder="What's up ?" id="newtweet" onChange={(e) => (e.target.value)} value={newTweet} />
  </div>
}