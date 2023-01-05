const Book = require('../models/book');

const books = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publisher: 'T. Egerton',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: 'Charles Scribner\'s Sons',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publisher: 'J. B. Lippincott & Co.',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publisher: 'HarperCollins',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    publisher: 'Little, Brown and Company',
  },
];

const seedBooks = async () => {
  try {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log('Seeded books successfully.');
  } catch (error) {
    console.error(error);
  }
};

module.exports = seedBooks;
