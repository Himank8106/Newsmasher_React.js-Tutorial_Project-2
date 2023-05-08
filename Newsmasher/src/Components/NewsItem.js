import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imageurl?"https://images.moneycontrol.com/static-mcnews/2021/12/Housing-Trends-feature-image-770x433.jpg":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
