import React, { useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([
        "https://via.placeholder.com/120x120?text=1",
        "https://via.placeholder.com/120x120?text=2",
        "https://via.placeholder.com/120x120?text=3",
    ]);

    const addImage = () => {
        const newImage = `https://via.placeholder.com/120x120?text=${images.length + 1}`;
        setImages([...images, newImage]);
    };

    return (
        <div className="bg-[#171717] rounded-2xl p-6 w-full max-w-[650px] shadow-inner shadow-black/25">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Gallery</h2>
                <button
                    onClick={addImage}
                    className="bg-[#222] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#2d2d2d] transition-all"
                >
                    + Add Image
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index}`}
                        className="rounded-xl object-cover w-full h-[120px]"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
