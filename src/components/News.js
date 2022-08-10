import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const CapitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    document.title = `NewsDB - ${CapitalizeString(props.category)}`
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <div className="container my-5">
      <div className="card my-1">
        <div className="card-header text-center mb-1">
          <h2>Today Top Headlines - {CapitalizeString(props.category)}</h2>
        </div>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    publishDate={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default News;

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};
News.PropType = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
