import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="grid grid-rows-page min-h-screen overflow-y-auto">
			<Navbar />

			<main>{children}</main>

			<div className="bg-blue-1000 p-12 bottom-0 w-full"></div>
		</div>
	);
};

export default Layout;