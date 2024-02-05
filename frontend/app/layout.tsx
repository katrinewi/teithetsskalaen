import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from './components/navigation/NavBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Teithetsskalaen',
	description: 'Ganske teit!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='no'>
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
