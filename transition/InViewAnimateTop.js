import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewAnimateTop = ({children}) => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  React.useEffect(()=> {
    if(inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween", duration: 1, delay: 0.2
        }
      });
    }
    if(!inView) {
      animation.start({
        y: "10vh",
        opacity: 0,
      }, [inView]);
    }
  })

  return (
    <div ref={ref} >
      <motion.div animate={animation} >{children} </motion.div>
    </div>
  )
}

export default InViewAnimateTop