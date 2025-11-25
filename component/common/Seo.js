import Head from 'next/head';
import React from 'react';

const Seo = ({ title, description, keywords, canonical }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name='title'
					content={title}
				/>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='keywords'
					content={keywords}
				/>
				<meta
					name='canonical'
					content={canonical}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
		</>
	);
};

export default Seo;
