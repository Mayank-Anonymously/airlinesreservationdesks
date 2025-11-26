// pages/blog/index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Header from '@/component/common/Header';
import Footer from '@/component/common/Footer';
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';

export async function getServerSideProps() {
	try {
		const res = await fetch(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`);
		console.log(`${HOST}/blog/get-blogs-by-siteId/${SITE_ID}`);
		const data = await res.json();

		return {
			props: {
				posts: data?.response || [],
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				posts: [],
			},
		};
	}
}

const BlogPage = ({ posts }) => {
	return (
		<>
			<Header />

			<Container className='mt-5 mb-5'>
				<div className='text-center mb-4'>
					<h3 className='mb-1'>Latest Blogs</h3>
				</div>

				<Row className='g-4'>
					{posts.map((item, index) => (
						<Col
							key={index}
							md={4}>
							<Link
								href={`/blog/${item.blog_url}`}
								className='text-decoration-none'>
								<div className='card'>
									<img
										src={`${URL_IMAGE}${item.blog_images}`}
										className='card-img-top'
										alt={item.blog_image_tag || ''}
									/>
									<div className='card-body'>
										<h5 className='card-title text-dark'>
											{item.title_tag_h1}
										</h5>
										<p className='card-text'>
											{item.meta_description?.slice(0, 85)}
										</p>
									</div>
								</div>
							</Link>
						</Col>
					))}
				</Row>
			</Container>

			<Footer />
		</>
	);
};

export default BlogPage;
