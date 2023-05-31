import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import books from './books'
import Book from "./Book"


const Booklist = () => {
    return (<>
        <h1 className="title">Amazon Best sellers </h1>
        <section className="Booklist">
            {books.map((book, index) => {
                return <Book {...book} key={book.id} number={index} />
            })}
        </section>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />)