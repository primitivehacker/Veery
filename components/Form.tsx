import React, { FC, useState } from 'react';
import LifeEvent from './LifeEvent';

const Form: FC = () => {
  const [lifeEvent1, setLifeEvent1] = useState('')
  const [lifeEvent2, setLifeEvent2] = useState('')
  const [lifeEvent3, setLifeEvent3] = useState('')
  const [lyrics, setLyrics] = useState('')

  const createLyrics = async (e) => {
      e.preventDefault()
      // Default options are marked with *
      try {
        console.log("About to call Lyrics Response")
        const lyricsResponse:any = await fetch('/api/createLyrics', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({lifeEvent1, lifeEvent2, lifeEvent3}) // body data type must match "Content-Type" header
        });
        const json = await lyricsResponse.json()
        if(json){
          console.log("FRONTEND LYRICS", json.lyrics)
          setLyrics(json.lyrics)
        }
      }catch(err) {
        console.log("ERROR", err)
      }
  }
  return (
    <>
      <h2>Enter Three Life Events and I'll Write a Song For You</h2>
      <form onSubmit={createLyrics}>
        <div>
          <h3>Life Event 1</h3>
          <input type="text" value={lifeEvent1} onChange={e => setLifeEvent1(e.target.value)}/>
        </div>
        <div>
          <h3>Life Event 2</h3>
          <input type="text" value={lifeEvent2} onChange={e => setLifeEvent2(e.target.value)}/>
        </div>
        <div>
          <h3>Life Event 3</h3>
          <input type="text" value={lifeEvent3} onChange={e => setLifeEvent3(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
        <div>
          <p>{lyrics}</p>
        </div>
      </form>
    </>
  );
};

export default Form;
