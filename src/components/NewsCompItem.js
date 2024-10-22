import React, { Component } from 'react'

export class Newsitem_comp extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, comp } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." style={{ height: "10rem" }} />
          <div className="card-body">
            <h6 className="card-title">{title}<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
              {comp.slice(0,10)}...
              <span class="visually-hidden">unread messages</span>
            </span></h6>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-body-secondary">By {author ? author : "anonymous"} at {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem_comp