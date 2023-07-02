

// export default News
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import props from 'prop-types';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        category: "general",
        country :"us",
    }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
    }
  constructor() {
    super();
    this.state = {
      articles: [],
      currentPage: 1,
      articlesPerPage: 12,
      loading: true // Set initial loading state to true
    };
  }

  async componentDidMount() {
    // Fetch all articles

 let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49ac3f7ae2514722b6940f196c52a708`;
  let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false }); // Update loading state after fetching data
  }

  handleClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { articles, currentPage, articlesPerPage, loading } = this.state;

    // Calculate index of the last article and the first article of the current page
    const lastIndex = currentPage * articlesPerPage;
    const firstIndex = lastIndex - articlesPerPage;

    // Slice the articles array based on the current page
    const currentArticles = articles.slice(firstIndex, lastIndex);

    return (
      <div className="container my-3">
        <h2 className="headLine">Headlines</h2>
        {loading ? (
          // Display loading spinner if the data is still loading
          <Spinner />
        ) : (
          // Display articles if the data has been loaded
          <div>
            <div className="row">
              {currentArticles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title.slice(0, 44)}
                      description={element.description? element.description.slice(0, 94):""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pagination, this is adding page number bar at the bottom of the page */}
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <li
                      className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
                      key={pageNumber}
                    >
                      <button className="page-link" onClick={() => this.handleClick(pageNumber)}>
                        {pageNumber}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default News;
