// import React, { Component } from 'react'

export default function NewsItem(props) {
    let { title, description, newsSource, imageUrl, newsUrl, author, date } = props;
    return (
        <div>
            <div className="card" style={{ width: '18rem', border: '1px solid black' }}>
            <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge pill bg-danger"> {newsSource} </span>
                    </div>
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2021/12/Housing-Trends-feature-image-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    {/* <a href={newsUrl} target="_blank" className="btn btn-secondary">More details</a> */}
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}