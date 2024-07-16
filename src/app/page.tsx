import Soon from "@/components/soon/Soon";
import React from "react";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  const splineURL = 'https://prod.spline.design/mEE-w4CRl4kX4lll/scene.splinecode'
  return (
    <>
      <Spline
        scene={splineURL}
        className='absolute inset-0 -z-10'
      />
      <Soon />
    </>
  );
}
