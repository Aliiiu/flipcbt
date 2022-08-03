import React from 'react';
import classes from '../../styles/loader.module.css';

const Loader = () => {
	return (
		<div className={classes['sk-chase-lg']}>
			<div className={classes['sk-chase-dot']}></div>
			<div className={classes['sk-chase-dot']}></div>
			<div className={classes['sk-chase-dot']}></div>
			<div className={classes['sk-chase-dot']}></div>
			<div className={classes['sk-chase-dot']}></div>
			<div className={classes['sk-chase-dot']}></div>
		</div>
	);
};

export default Loader;
