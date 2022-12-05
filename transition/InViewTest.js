import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewTest = ({ children, delay }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	React.useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transition: {
					delay: delay,
					duration: 1.0,
				},
			});
		}
		if (!inView) {
			animation.start({
				opacity: 0,
			});
		}
	});

	return (
		<div ref={ref}>
			<motion.ul animate={animation}>{children} </motion.ul>
		</div>
	);
};

export default InViewTest;
