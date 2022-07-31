import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ dat }) => {
  const [isHidden, setIsHidden] = useState(true);
  const { id, title, info } = dat;
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isHidden ? [] : info}
    </article>
  );
};

export default Question;
