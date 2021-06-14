import React, { FC, useState } from 'react';
import LifeEvent from './LifeEvent';
import Form from './Form';


const LyricsBlock: FC = () => {
  const [lyrics, setLyrics] = useState('')
  return (
    <>
      <p>{lyrics}</p>
    </>
  );
};

export default LyricsBlock;
