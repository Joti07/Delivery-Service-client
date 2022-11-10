import React from 'react';

const Choose = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-orange-600'>Why Choose This Services?</h2>
            <div class="mx-auto my-20 w-[600px] drop-shadow rounded-md">
                <h1 class="text-2xl font-italic font-light text-center text-white mb-10">Reliability</h1>

                {/* <!-- The First FAQ --> */}
                <details class="bg-gray-300 open:bg-amber-200 duration-300">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Spped</summary>
                    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>Why use a Courier Service if the item won’t arrive quickly?This services streamlined network ensures the fastest possible movement of documents and packages.</p>
                    </div>
                </details>

                {/* <!-- The Second FAQ --> */}
                <details class="bg-gray-300 open:bg-amber-200 duration-300">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Low Cost</summary>
                    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>All rates are quite reasonable, even for heavy/lightweight items, fragile items, articles or bulky printed materials.</p>
                    </div>
                </details>

                {/* <!-- The Third FAQ --> */}
                <details class="bg-gray-300 open:bg-amber-200 duration-300">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Simplicity</summary>
                    <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                        <p>One telephone call is all it takes to set the process in motion. After that you can leave everything to this service, including customs clearance and any last minute details.</p>
                    </div>
                </details>

            </div>

        </div>
    );
};

export default Choose;