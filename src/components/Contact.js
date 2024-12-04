import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_09l3yez',
                'template_8zyz3ah',
                formData,
                'n06vZ0MEBOMRNkFrW' 
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
            <div className="text-center">
                <h2 className="text-4xl font-bold leading-tight text-blue-400">Contact Me</h2>
            </div>

            <div className="max-w-[800px] mx-auto">
                <div className="mt-6 bg-[#161616] rounded-xl">
                    <div className="p-10">
                        <form onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="animate-pulse text-xl w-full p-4 font-semibold bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-md"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
