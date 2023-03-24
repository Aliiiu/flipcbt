import { animate, motion, useAnimation } from 'framer-motion';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../../UI/Image';

const FeatureCards: FC<{ item: any; delay: number }> = ({ item, delay }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.0,
          delay: delay,
        },
      });
    }
    if (!inView) {
      animation.start(
        {
          opacity: 0,
        },
        [inView]
      );
    }
  });
  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        className="relative max-w-[500px] h-[410px] md:h-[350px]  mx-auto  feature-card flex flex-col items-center text-center mobile:mb-[5em] hover:scale-[1.1]"
      >
        <div className="absolute top-[-50px] mobile:top-[-40px]">
          <CustomImage
            src={item.src}
            alt={item.alt}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
          />
        </div>
        <h3 className="text-[25px]  font-semibold text-[#06042C] mb-6">
          {item.featureTopic}
        </h3>
        <p className=" text-[16px] text-center">{item.feature}</p>
      </motion.div>
    </div>
  );
};

export default FeatureCards;
