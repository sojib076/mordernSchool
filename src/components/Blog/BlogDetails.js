import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
      }, []);
    const [comments, setComments] = useState([
        {
          id: 1,
          name: 'John Doe',
          profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere luctus nulla non commodo. Integer consequat aliquet est, ut posuere eros mollis in.',
          timestamp: '3 hours ago'
        },
        {
          id: 2,
          name: 'Jane Smith',
          profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
          text: 'Pellentesque in ipsum id orci porta dapibus. Aenean euismod bibendum laoreet. Cras ut dolor quis nibh placerat rhoncus. Nam ultrices tortor libero.',
          timestamp: '5 hours ago'
        },
        {
          id: 3,
          name: 'Bob Johnson',
          profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
          text: 'Sed non mauris vitae erat consequat auctor eu in elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          timestamp: '1 day ago'
        }
      ]);
      const [sortByLatest, setSortByLatest] = useState(true);
    
      const handleSortByLatest = () => {
        setSortByLatest(!sortByLatest);
        const sortedComments = [...comments].sort((a, b) => {
          return sortByLatest ? new Date(b.timestamp) - new Date(a.timestamp) : new Date(a.timestamp) - new Date(b.timestamp);
        });
        setComments(sortedComments);
      };
    
    return (
        <div className="bg-white w-full">
               <ScrollToTop smooth color="#6f00ff" className='p-2 m-2' />
            <div className=" mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="lg:max-w-lg">
                        <img className="rounded-lg shadow-lg" src="https://via.placeholder.com/800x500" alt="blog post" />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="text-sm font-medium text-gray-500">
                            <Link to={'/blog'} className="hover:underline">
                                Blog
                            </Link>
                            <span className="mx-2">/</span>
                            <Link to={'/'} className="hover:underline">
                                Category
                            </Link>
                            <span className="mx-2">/</span>
                            <span>
                                April 30, 2023
                            </span>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Blog Title Goes Here
                            </h2>
                            <div className="mt-5 text-lg text-gray-500">

                                <p className="mt-5">
                                    Sed feugiat eleifend nulla. Ut feugiat gravida mi, a lacinia tortor. Donec sodales, nulla sed tempor elementum, risus arcu suscipit justo, ac molestie odio leo vel ipsum. Praesent bibendum auctor nisi, nec fringilla elit rhoncus vel. In hac habitasse platea dictumst. Etiam accumsan mi eros, eget dignissim orci consequat vel. Mauris varius ligula vitae odio bibendum, a luctus purus dignissim. Donec vel mauris eu purus aliquam blandit. Curabitur sit amet orci vel magna viverra tristique in et risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere nisl lorem, id rhoncus dolor commodo sed. Aliquam euismod massa eget urna vestibulum, non eleifend orci ultricies. Sed vel consectetur ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi scelerisque ex sed sapien lobortis, eu tincidunt justo egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere nisl lorem, id rhoncus dolor commodo sed. Aliquam euismod massa eget urna vestibulum, non eleifend orci ultricies. Sed vel consectetur ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi scelerisque ex sed sapien lobortis, eu tincidunt justo egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere nisl lorem, id rhoncus dolor commodo sed. Aliquam euismod massa eget urna vestibulum, non eleifend orci ultricies. Sed vel consectetur ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi scelerisque ex sed sapien lobortis, eu tincidunt justo egestas.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-medium text-gray-900">
                            Share this post
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus"> Facebook </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg overflow-hidden divide-y divide-gray-200">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Comments ({comments.length})</h3>
                        <div className="mt-2">
                            <button
                                className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg"
                                onClick={handleSortByLatest}
                            >
                                Sort by {sortByLatest ? 'oldest' : 'latest'}
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <form>
                            <div className="flex flex-wrap mb-2">
                                <div className="w-1/5">
                                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Profile" className="rounded-full w-12 h-12" />
                                </div>
                                <div className="w-4/5">
                                    <textarea className="form-textarea w-full" placeholder="Add a comment..." rows="2"></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">Post Comment</button>
                            </div>
                        </form>
                    </div>
                    {comments.map(comment => (
                        <div key={comment.id} className="p-4 flex space-x-4">
                            <img src={comment.profilePic} alt="Profile" className="rounded-full w-12 h-12" />
                            <div className="flex-1">
                                <div className="flex items-center mb-2">
                                    <h4 className="text-lg font-semibold">{comment.name}</h4>
                                    <span className="text-gray-500 ml-2">{comment.timestamp}</span>
                                </div>
                                <div className="text-gray-800">{comment.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;