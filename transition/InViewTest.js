import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewTest = ({ children }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	React.useEffect(() => {
		if (inView) {
			animation.start('visible');
		}
		if (!inView) {
			animation.start('hidden');
		}
	});

	return (
		<div ref={ref}>
			<motion.ul animate={animation}>{children} </motion.ul>
		</div>
	);
};

export default InViewTest;
