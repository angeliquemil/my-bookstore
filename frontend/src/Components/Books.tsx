import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Book } from '../Types';

const Books: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get<Book[]>('http://localhost:5000/api/books') // your backend URL
            .then(res => setBooks(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Bookstore</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th><th>Author</th><th>Publisher</th><th>ISBN</th>
                        <th>Category</th><th>Pages</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.pages}</td>
                            <td>${book.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books;