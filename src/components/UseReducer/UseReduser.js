import React, { useState } from 'react'

const dummyData = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
]
const UseReduser = () => {

    const [books, setBooks] = useState(dummyData);
    const [bookName, setBookName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const Modal = ({ modalText }) => {
        return (
            <p>{modalText}</p>
        )
    }

    const handleChange = (e) => {
        setBookName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((PrevState) => {
            const newBook = { id: new Date().getTime().toString(), name: bookName }
            return [...PrevState, newBook];
        });
        setBookName('');
        setIsModalOpen(true);
        setModalText('Book Added Successfully');
    }
    return (
        <div className='text-center'>
            <h1 className='heading'>Book List</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={handleChange} required />
                <button type="submit">Add Book</button>
            </form>

            {isModalOpen && <Modal modalText={modalText} />}

            {books.map((book) => {
                const { id, name } = book
                return (
                    <li key={id}>{name}</li>
                )
            })}
        </div>
    )
}

export default UseReduser;