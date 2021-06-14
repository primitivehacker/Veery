import React, { FC, useEffect, useState } from 'react';

interface LifeEventProps {
  lifeEvent: string;
}

const LifeEvent: FC<LifeEventProps> = () => {
  const [lifeEvent, setLifeEvent] = useState('')
  return (
    <>
      <input onChange={event => setLifeEvent(event.target.value)} />
    </>
  );
};

export default LifeEvent;
