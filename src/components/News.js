import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country : 'in',
    category : 'general',
    pageSize : 6
  }
  static PropType = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number

  }
  CapitalizeString=(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
        super(props);
        // console.log("i am News constructor");        
        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`NewsDB - ${this.CapitalizeString(this.props.category)}`
    }    
    async componentDidMount(){
      this.getNews()
    }
    async getNews(){      
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles:parseData.articles,
          totalResults:parseData.totalResults,
          loading:false
        })
    }
     fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles:this.state.articles.concat(parseData.articles),
          totalResults:parseData.totalResults
        })

    };

    render() {
    return (
    <div className="container my-2">
      <div className="card my-1">
        <div className="card-header text-center mb-1">
          <h2>Today Top Headlines - {this.CapitalizeString(this.props.category)}</h2>
        </div>
     {this.state.loading && <Spinner/>}
     <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {this.state.articles.map((element,index)=>{
          return <div className="col-md-4" key={index}>
            <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} publishDate={element.publishedAt} source={element.source.name} />
          </div>
          })}
      </div>
      </InfiniteScroll>
      </div>
    </div>
    )
  }
}