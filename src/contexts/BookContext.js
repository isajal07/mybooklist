import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const intitalBooks = JSON.parse(localStorage.getItem('task')) || [];

  const [books, setBooks] = useState(intitalBooks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(books))
  }, [books])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;