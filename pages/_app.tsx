import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#0075FF' />
				<meta
					name='description'
					content='An enhanced assessment platform that provides computerized tests, examination management, quick grading systems, and collation of results'
				/>
				<meta name='keywords' content='...' />
				<meta property='og:site_name' content='Flip CBT' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://flipcbt.com/' />
				<meta
					property='og:description'
					content='An enhanced assessment platform that provides computerized tests, examination management, quick grading systems, and collation of results'
				/>
				<meta property='og:image' content='https://flipcbt.com/icon.png' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content='An enhanced assessment platform that provides computerized tests, examination management, quick grading systems, and collation of results'
				/>
				<meta name='twitter:site' content='@flipcbt' />
				<meta name='twitter:title' content='Flipcbt' />
				<meta name='twitter:creator' content='@flipcbt' />
				<meta property='og:url' content='https://flipcbt.com/' />
				<meta name='twitter:image' content='https://flipcbt.com/icon.png' />

				<link rel='shortcut icon' href='https://flipcbt.com/icon.png' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>

				{/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-N22LKF3SEW'
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				
					gtag('config', 'G-N22LKF3SEW');
				`,
					}}
				/>
			</Head>

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
