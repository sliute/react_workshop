import React from 'react'

import Bookfilter from './Bookfilter'

const Books = (props) => (
  <section id="books">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2>Books</h2>
                  <hr className="star-primary" />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <Bookfilter tabItems={props.tabItems}/>
              </div>
          </div>
          <div className="row book-list">
              {props.books.map(book => (
                  <div className="col-xs-6 col-sm-3" key={book.id}>
                      <div className="thumbnail">
                          <img alt="" className="img-responsive" src={book.cover} />
                      </div>
                  </div>
              ))}
          </div>
      </div>
  </section>
)

export default Books
