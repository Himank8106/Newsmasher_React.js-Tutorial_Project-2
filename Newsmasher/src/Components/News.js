import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country:'in',
    pagaSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page:1
    }
  }

  async componentDidMount(){
    // let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=e740630209334860a41a3fde841f6e79";
    // let url = "https://newsapi.org/v2/everything?domains=wsj.com&category=${this.props.category}&apiKey=e740630209334860a41a3fde841f6e79";
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e740630209334860a41a3fde841f6e79&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, totalResults : parseData.totalResults, 
                   loading: false})
  }

  handlePrevClick = async () => {
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e740630209334860a41a3fde841f6e79&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading: false
    })
  }
  
  handleNextClick = async () => {
    // console.log("Next");
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e740630209334860a41a3fde841f6e79&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles,
        loading: false
      })
    }
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center text-decoration-underline' style={{margin:"35px 0px"}}>Newsmasher - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
