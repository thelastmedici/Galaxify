"use client";

import React, { useRef, useState, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface QuestProps {
  item: {
    question: string;
    answer: string[];
    list?: boolean;
  };
  index: number;
}

// Using forwardRef to pass ref to the component
const Quest = forwardRef<HTMLDivElement, QuestProps>(({ item, index }, ref) => {
  const timeline = useRef<gsap.core.Timeline>();
  const { contextSafe } = useGSAP(() => {
    timeline.current = gsap.timeline({ defaults: { duration: 1 } });
  });

  const [accordionState, setAccordionState] = useState(false);
  const contentDivRef = useRef<HTMLDivElement>(null);
  const contentListRef = useRef<HTMLUListElement>(null);
  const rotateElement1Ref = useRef<HTMLDivElement>(null);
  const rotateElement2Ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = contextSafe(() => {
    setAccordionState(prevState => !prevState);
    gsap.to(rotateElement1Ref.current, {
      rotate: !accordionState ? 360 : 0,
      opacity: !accordionState ? 0 : 1,
      duration: 0.5
    });
    gsap.to(rotateElement2Ref.current, {
      rotate: !accordionState ? 360 : 0,
      duration: 0.5
    });
  });

  return (
    <div 
      ref={ref}
      className={`py-5 sm:py-6 font-light tracking-wider text-lg sm:text-2xl tab:text-4xl px-2 border-[#4F4D4A] border-b ${index === 0 ? 'border-t' : ''} flex flex-col`}
    >
      <div className="flex items-center justify-between w-full cursor-pointer group" onClick={toggleAccordion}>
        <h1 className="circle w-fit">{item.question}</h1>
        <div className="plus w-[25px] h-[25px] xs:w-[32px] xs:h-[32px] relative circle">
          <div
            className="absolute top-0 left-[45%] h-full w-1 bg-white group-hover:bg-darkViolet shadow-white shadow-lg duration-200 transition-colors rounded vertical"
            ref={rotateElement1Ref}
          />
          <div
            className="absolute top-[44%] left-[.5] w-full h-1 bg-white group-hover:bg-darkViolet shadow-white shadow-lg duration-200 transition-colors rounded horizontal"
            ref={rotateElement2Ref}
          />
        </div>
      </div>

      {item.list ? (
        <ul 
          ref={contentListRef} 
          className={`space-y-8 mt-8 transition duration-200 px-7 ${accordionState ? 'block' : 'hidden'} list-disc`}
        >
          {item.answer.map((ans, i) => (
            <li key={i} className="text-lg tracking-widest sm:text-xl tab:text-2xl font-extralight">{ans}</li>
          ))}
        </ul>
      ) : (
        <div 
          ref={contentDivRef} 
          className={`space-y-8 mt-8 transition duration-200 ${accordionState ? 'block' : 'hidden'}`}
        >
          {item.answer.map((ans, i) => (
            <p key={i} className="text-lg tracking-widest sm:text-xl tab:text-2xl font-extralight">{ans}</p>
          ))}
        </div>
      )}
    </div>
  );
});

// Add display name for debugging purposes
Quest.displayName = "Quest";

export default Quest;
