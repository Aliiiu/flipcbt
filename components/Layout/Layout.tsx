import { FC, ReactChild } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Topbar from './topbar/Topbar';

const Layout: FC<{ children: ReactChild }> = ({ children }) => (
	<div>
		<Topbar />
		{/* <Navbar /> */}
		<main>
			<div className='w-full h-full'>{children}</div>
		</main>
		<Footer />
	</div>
);

export default Layout;
