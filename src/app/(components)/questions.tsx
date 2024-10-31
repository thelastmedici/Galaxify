"use client"
import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";
import Quest from './quest';
import { sofia, dmsans } from '../font';

const Questions = () => {
  const [ questions, setQuestions ] = React.useState([])
  // const container = React.useRef();
  const container = React.useRef<HTMLDivElement>(null);

  const getQuestions = async () => {
    const res  = await fetch("/content/question.json")
    const questions = await res.json()
    return questions
  }

  React.useEffect(()=>{
    getQuestions().then(data=>{
      setQuestions(data)
    })
  }, [])
  return (
    <div className={`px-3 text-white max-w-6xl min-h-screen w-full mx-auto ${dmsans.className} space-y-10 mb-7`}>
      <div className='max-w-[16rem] xs:max-w-xs sm:max-w-sm text-4xl xs:text-5xl md:text-7xl tracking-wider'>
        <h1 className={`${sofia.className}`}>
          FREQUENTLY ASKED
            <TiArrowRightOutline className='inline-block mb-3' />
           QUESTIONS
        </h1>
      </div>
      <div className='text-white' ref={container}>
        {
          questions && questions.map((item, index)=>(
            <Quest key={index} item={item} index={index} ref={container}/>
          ))
        }
      </div>
    </div>
  )
}

export default Questions
