import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ApiFunc() {
  const [books, setBooks] = useState(null);
  const [isLoading, setLoading] = useState(true);
  async function getBooks() {
    let response = await axios.get(
      "https://openlibrary.org/subjects/mystery.json?limit=50"
    );
    console.log(response);
    setBooks(response.data.works);
    setLoading(false);
  }

  useEffect(() => {
    getBooks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="bg-warning text-white p-3 text-center">My Books</h1>
      <div className="container">
        <div className="row">
          {books.map((book) => {
            console.log(book);
            return (
              <div className="col-md-4" key={book._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                      Written by {book.authors[0].name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ApiFunc;
