import React, { useState } from 'react';

const Tag = ({ tag, onDelete }) => {
    return (
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
            {tag}
            <button 
                onClick={() => onDelete(tag)} 
                className="ml-2 text-white focus:outline-none">
                &times;
            </button>
        </span>
    );
};

const ProfilePage = () => {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const handleDeleteTag = (tagToDelete) => {
        setTags(tags.filter(tag => tag !== tagToDelete));
    };

    const handleAddTag = () => {
        const trimmedTag = newTag.trim();
        if (trimmedTag && !tags.includes(trimmedTag)) {
            setTags([...tags, trimmedTag]);
            setNewTag(''); 
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleAddTag();
        }
    };

    return (
        <div className="relative h-[45.5rem] bg-customColors-fadedPurple py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="border-2 border-customColors-fadedPurple p-5 rounded-lg max-w-32 text-3xl font-gruppo font-bold mb-8 text-left bg-white">
                About
            </h2>
            <form className="max-w-xl">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="E-mail"
                        className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Enter a phone number"
                        className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
                    <textarea 
                        id="address" 
                        placeholder='Address...'
                        className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm h-32"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="tags" className="block text-gray-700 font-medium">Tags</label>
                    <div className="relative mt-2">
                        <input 
                            type="text" 
                            id="tags" 
                            value={newTag} 
                            onChange={(e) => setNewTag(e.target.value)} 
                            onKeyDown={handleKeyDown}
                            className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Type a tag and press Enter"
                        />
                        <button 
                            type="button" 
                            onClick={handleAddTag}
                            className="absolute right-2 top-2 bg-purple-400 hover:bg-purple-500 text-white font-gruppo font-bold py-1 px-3 rounded">
                            Add
                        </button>
                    </div>
                    <div className="mt-4 flex gap-2 flex-wrap">
                        {tags.map(tag => (
                            <Tag key={tag} tag={tag} onDelete={handleDeleteTag} />
                        ))}
                    </div>
                </div>
            </form>
            <button 
                type="submit" 
                className="absolute bottom-8 right-8 bg-customColors-fadedPurple hover:bg-purple-600 hover:text-white text-purple-600 font-bold py-3 px-6 rounded border-2 border-purple-600 hover:border-purple-600 transition-all duration-300">
                Save Info
            </button>
        </div>
    );
}

export default ProfilePage;
