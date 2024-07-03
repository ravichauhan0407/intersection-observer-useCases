import React, { useEffect, useRef, useState } from 'react'

export const InfiniteScrollWrapper = ({next=()=>{},children}) => {
  const ref = useRef(null);
  const firstInterectionRef=  useRef(false);




   useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
         if(entry.isIntersecting){
          if(firstInterectionRef.current){
            next()
          }
          firstInterectionRef.current=true;
         }
      }
    );

    observer.observe(ref.current);

    return ()=>observer.disconnect()
   },[])

  return (
    <div>
      {children}
      <div ref={ref}>Loading....</div>
    </div>
  )
}
