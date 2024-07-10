class Library {
  #books;

  constructor(initialNumberOfBooks) {
    if (new Set(initialNumberOfBooks).size !== initialNumberOfBooks.length) {
      throw new Error("Ошибка! Список содержит дубликаты книг!");
    }
    this.#books = [...initialNumberOfBooks];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Ошибка! Книга с таким названием уже существует в списке!");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const name = this.#books.indexOf(title);
    if (name === -1) {
      throw new Error("Ошибка! Книги с таким названием нет в списке!");
    }
    this.#books.splice(name, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}
