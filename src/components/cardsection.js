import React from "react";

export default function Cardsection() {
  return (
    <div>
      <h3>Section</h3>
      <section>
        <div className="card">
          <img src="../images/plants.png" alt="plant" />
          <span>
            Plants
          </span>
        </div>
        <div className="card">
          <img src="../images/books.jpg" alt="plant" />
          <span>
            Book
          </span>
        </div>
        <div className="card">
          <img src="../images/poker.jpg" alt="pokercards" />
          <span>
           Poker
          </span>
        </div>
        </section>
    </div>
    
  );
}
