import React from 'react'

const Questions = ({ question, handleClick }) => {
  return (
    <div>
        <p onClick={handleClick} className='font-bold text-lg'>{question.question}</p>
        {question.answers.map(((answer, index) => <button onClick={()=>handleClick(index)} className='flex flex-col my-2' key={index}>{answer}</button>))}
    </div>
  )
}

export default Questions