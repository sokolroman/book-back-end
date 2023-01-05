const Book = require('../../models/book');

const getBook = (id) => {
  return Book.findById(id);
};

const getBooks = () => {
  return Book.find();
};

const addBook = (title, author) => {
  const book = new Book({
    title,
    author,
  });
  return book.save();
};

const updateBook = (id, title, author) => {
  return Book.findByIdAndUpdate(id, { title, author }, { new: true });
};

const deleteBook = (id) => {
  return Book.findByIdAndDelete(id);
};

const searchBooks = async (query) => {
  const books = await Book.find({
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { author: { $regex: query, $options: 'i' } },
    ],
  });
  return books;
};

module.exports = {
  getBook,
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
};
