import { Mail, MapPinCheck } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white px-4 py-10 sm:px-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

            <div className="max-w-3xl mx-auto bg-white border border-amber-400 rounded-lg shadow p-6">
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Type your message here..."
                            className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded shadow"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 text-gray-600">
                <p className='flex gap-2'><Mail className='text-amber-400'/> Email: support@foodcart.com</p>
                <p className='flex gap-2'><MapPinCheck className='text-amber-400'/> Location: 123 Food Street, Flavor Town</p>
            </div>
        </div>
    );
};

export default Contact;