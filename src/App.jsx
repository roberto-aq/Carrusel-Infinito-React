import { CardBlog } from './components/CardBlog';
import { Header } from './components/Header';
import { blogs } from './data/data';

function App() {
	const carouselBlogs = [...blogs, ...blogs];

	return (
		<div className='App'>
			<Header />

			<div className='container my-5'>
				<div className='overflow-hidden w-full'>
					<div className='flex whitespace-nowrap animate-scroll'>
						{carouselBlogs.map((blog, index) => (
							<CardBlog blog={blog} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
