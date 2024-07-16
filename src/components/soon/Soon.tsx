'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Soon() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline()
        .from('main > p', {
          autoAlpha: 0,
          scaleY: 1,
          duration: 2,
          stagger: 3,
          ease: 'power2.inOut',
        })
        .from('div > p', {
          autoAlpha: 0,
          scaleY: 1,
          duration: 1,
          stagger: +0.3,
          ease: 'power2.inOut',
        }, '<')
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (<>
    <main ref={mainRef} className="flex min-h-[100dvh] select-none flex-col items-center justify-between overflow-hidden px-5 py-1 text-[4em] font-bold md:p-10">
      <div className='name flex w-full items-center justify-between font-khand font-bold tracking-tight'>
        <p>Carlos</p>
        <p>Medina</p>
      </div>
      <p className='text-2xl font-bold uppercase tracking-[0.75rem]'>Website</p>
      <div className='flex w-full items-center justify-between font-khand font-bold tracking-tight'>
        <p>Coming</p>
        <p>Soon</p>
      </div>
    </main>
  </>)
}
