import React, { useState } from 'react';
import './AddBookPage.css';

const AddBookPage = () => {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Book details:', bookDetails);
        // Handle form submission logic (e.g., sending data to backend)
    };

    return (
        <div className="add-book-page">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={bookDetails.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        name="author"
                        value={bookDetails.author}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={bookDetails.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBookPage;
