import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewAnimateGrow = ({children}) => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  React.useEffect(()=> {
    if(inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "tween", duration: 1.5, delay: 0.2
        }
      });
    }
    if(!inView) {
      animation.start({
        scale: 0,
      }, [inView]);
    }
  })

  return (
    <div ref={ref} >
      <motion.div animate={animation} >{children} </motion.div>
    </div>
  )
}

export default InViewAnimateGrow