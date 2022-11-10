import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs - Delivery Service');
    return (
        <div>
            <h2 className='text-2xl font-bold text-orange-600 text-center'>Our Blogs</h2>
            <div className='flex gap-10 m-10 text-center'>
                <div class="flex justify-center mt-5 ">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">

                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">Difference between SQL and NoSQL</h5>
                            <p class="text-gray-700 text-base mb-4">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                            </p>
                            <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            2 days ago
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-5 ">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">

                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">What is JWT, and how does it work?</h5>
                            <p class="text-gray-700 text-base mb-4">
                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                            </p>
                            <p>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</p>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            10 days ago
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 m-10'>
                <div class="flex justify-center mt-5 ">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">

                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">What is the difference between javascript and NodeJS?</h5>
                            <p class="text-gray-700 text-base mb-4">
                                JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                                The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                            </p>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            25 days ago
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-5 ">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">

                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">How does NodeJS handle multiple requests at the same time?</h5>
                            <p class="text-gray-700 text-base mb-4">
                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>
                        </div>
                        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                            20 days ago
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;