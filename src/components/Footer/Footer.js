import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-12">
                <div className="container mx-auto flex flex-col lg:flex-row justify-around">
                    <div className="mb-4 lg:mb-0">
                        <h3 className="text-lg font-bold text-white mb-2">Company Name</h3>
                        <p className="text-gray-400">123 Main Street<br />New York, NY 10001</p>
                    </div>
                    <div className="flex flex-wrap mb-4 lg:mb-0">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <h3 className="text-lg font-bold text-white mb-2">Social Media</h3>
                            <ul className="list-none">
                                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-lg font-bold text-white mb-2">Contact Info</h3>
                            <p className="text-gray-400 mb-2">Email: <a href="mailto:info@company.com" className="text-gray-400 hover:text-white">info@company.com</a></p>
                            <p className="text-gray-400 mb-2">Phone: <a href="tel:1234567890" className="text-gray-400 hover:text-white">(123) 456-7890</a></p>
                        </div>
                       
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;