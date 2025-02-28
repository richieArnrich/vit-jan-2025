import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function FuncApi() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  async function captureBooks() {
    let response = await axios.get(
      "https://openlibrary.org/subjects/mystery.json?limit=50"
    );
    console.log(response.data.works);
    setBooks(response.data.works);
    setLoading(false);
  }

  useEffect(() => {
    captureBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="bg-warning text-white text-center p-3">
        Api Call in function
      </h1>
      <div className="container">
        <div className="row">
          {books.map((book, id) => {
            console.log(book);
            return (
              <div key={id} className="col-md-4">
                <div
                  class="card m-2"
                  style={{ width: "18rem", height: "28rem" }}
                >
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "50%", objectFit: "cover" }}
                  />
                  <div class="card-body" style={{ height: "50%" }}>
                    <h5 class="card-title">{book.title}</h5>
                    <p class="card-text">
                      {book.subject.join(", ").slice(0, 80)}...
                    </p>
                    <button className="btn btn-primary">Read Book</button>
                    <button className="btn btn-success m-2">
                      View Summary
                    </button>
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

export default FuncApi;
