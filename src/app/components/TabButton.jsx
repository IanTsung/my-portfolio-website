import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" }
}

const TabButton = ({ active, selectTab, children, darkMode }) => {

	const buttonClasses = active
		? `${darkMode ? "text-white" : "text-black"}`
		: "text-[#ADB7BE]";

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold ${buttonClasses}`}>
				{children}
			</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className="h-1 bg-primary-500 mt-1 mr-3"
			>
			</motion.div>
		</button>
	)
}

export default TabButton