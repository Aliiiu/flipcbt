// pages/_document.js
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html id='mainHtml'>
			<Head />
			<body>
				<Main />
				<div id='overlay-root'></div>
				<NextScript />
			</body>
		</Html>
	);
}
