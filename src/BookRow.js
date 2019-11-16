import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import bookStore from "./stores/bookStore";

function BookRow(props) {
  const book = props.book;

  const authors = book.authors.map(author => (
    <div key={author.id}>
      <Link to={`/authors/${author.id}`}>{author.name}</Link>
    </div>
  ));

  const availableButton = (
    <button
      className={`btn btn-${book.available ? "success" : "danger"}`}
      onClick={() => {
        book.available = !book.available;
      }}
    >
      {book.available ? "borrow" : "return"}
    </button>
  );

  return (
    <tr>
      <td>{availableButton}</td>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <Link to={`/books/${book.color}`}>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </Link>
      </td>
    </tr>
  );
}

export default observer(BookRow);
