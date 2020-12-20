import React from "react";
import "./styles.css";
import { useState } from "react";
import { database } from "./database";
import cover from "./cover.jpg";

var itemList = Object.keys(database);

export default function App() {
  const [selectedGenre, setGenre] = useState("books");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="upper-part" style={{ backgroundImage: `url(${cover})` }}>
        <h1 className="heading">
          {" "}
          My favorites{" "}
          <span role="img" aria-label="heart-emoji">
            ❤️ !
          </span>
        </h1>
        <h4 className="discription" style={{ fontSize: "smaller" }}>
          {" "}
          Checkout my favorites. I have mentioned some of my favourite books,
          Webseries/Movies, websites and songs.
        </h4>
        <h4 className="discription">
          {" "}
          I recommend below books and websites to read and refer for developers.{" "}
        </h4>

        <div>
          {itemList.map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              className="btn-genre"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <ul>
          {database[selectedGenre].map((book) => (
            <li key={book.name} className="opt-list">
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.author} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
