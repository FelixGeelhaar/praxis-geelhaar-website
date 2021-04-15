import React from "react"

export function Card({ title, body, image }) {
    return (
        <div className="m-4 border rounded-lg shadow-lg overflow-hidden sm:w-72">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt="Category image"
                    className="object-cover object-center w-full h-32"
                />
            </div>
            <div className="bg-white p-6">
                <h4 className="text-primary-800 leading-none tracking-wider font-semibold font-sans mt-4">
                    {title}
                </h4>
                <div className="flex items-center mt-4">
                    <p className="text-xs text-gray-500 leading-normal">{body}</p>
                </div>
            </div>
        </div>
    )
}
