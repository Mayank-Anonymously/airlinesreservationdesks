import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecentPosts from '@/components/common/RecentPosts';
import { Col, Container, Row } from 'react-bootstrap';
import { HOST, SITE_ID, URL_IMAGE } from '@/utils/static';

export default function BlogSlugPage({ post }) {
	return (
		<>
			<Head>
				<title>{post?.meta_title || 'Blog'}</title>
				<meta
					name='description'
					content={post?.meta_description || 'Read this blog post.'}
				/>
			</Head>

			<Header />

			{post ? (
				<>
					<div>
						<h1 className='my-3 fw-bold fs-2 text-center'>
							{post.title_tag_h1}
						</h1>
					</div>
					<hr />
					<Container>
						<Row>
							<Col md={9}>
								<div className='blog-image-layout'>
									<img
										src={`${URL_IMAGE}${post.blog_images}`}
										alt={post.title_tag_h1}
										style={{ width: '100%' }}
									/>
								</div>
								<div
									className='my-4'
									dangerouslySetInnerHTML={{ __html: post.blog_description }}
								/>
							</Col>
							<Col md={3}>
								<RecentPosts />
							</Col>
						</Row>
					</Container>
				</>
			) : (
				<Container className='text-center py-5'>
					<h2>Post Not Found</h2>
					<p>The blog post may have been removed or the slug is invalid.</p>
				</Container>
			)}

			<Footer />
		</>
	);
}

export async function getServerSideProps({ params }) {
	const { slug } = params;
	const url = `${HOST}/blog/get-blog-by-url-and-site/${SITE_ID}/${slug}`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		if (!data.response) {
			return { props: { post: null } };
		}

		return {
			props: { post: data.response },
		};
	} catch (error) {
		console.error('Error fetching post:', error);
		return { props: { post: null } };
	}
}
