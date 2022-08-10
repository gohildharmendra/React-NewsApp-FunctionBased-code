import React from 'react'

const NewsItem =(props)=>{
    let {title, description, imageURL, newsURL, author, publishDate, source} = props;
    return (
      <div className="card h-100">
        <div style={{display:'flex',justifyContent:'end',position:'absolute',right: 0}}>
        <span className="badge rounded-pill bg-danger">
          {source}
        </span>
        </div>
        <img src={imageURL?imageURL:"noImage.jpg"} height={"200px"} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-secondary">Read More</a>
        </div>
        <div className="card-footer text-muted">
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishDate).toGMTString()}</small></p>
        </div>
      </div>
    )
}
export default NewsItem
