import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import Header from 'src/components/header/Header';
import NavProvider from 'src/context/Navcontext';
import SideBar from 'src/components/mobileSideBar/SideBar';


export const metadata: Metadata = {
	title: 'Catwalk to freedom',
	description: '...',
};

const InterFont = localFont({
	src: [
		{
			path: '../../public/assets/fonts/Inter-VariableFont_opsz,wght.woff2',
			style: 'normal',
			weight: '100 1000',
		},
		{
			path: '../../public/assets/fonts/Inter-Italic-VariableFont_opsz,wght.woff2',
			style: 'italic',
			weight: '100 1000',
		},
	],
	fallback: ['Verdana'],
	preload: true,
});



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	

	return (
		<html lang='en'>
			<NavProvider>
				<body className={InterFont.className}>
					<Header />
					<aside className={"asideCon"}>
						<SideBar/>
					</aside>

					<div className='main-body'>
						{children}
					</div>
					<footer>
						<div>
							<p>© {new Date().getFullYear()} Catwalk to Freedom. All rights reserved.</p>
						</div>
					</footer>
				</body>
			</NavProvider>
		
		</html>
	);
}