import React, { Component } from "react";
import Newsitem from "../Newsitem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
static defultProps = {
  country: 'in',
  pageSize: 8, 
  category: 'general',
}
static propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
  //     articles = [
  //         {
  //             "source": {
  //                 "id": "espn-cric-info",
  //                 "name": "ESPN Cric Info"
  //             },
  //             "author": null,
  //             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //             "publishedAt": "2020-04-27T11:41:47Z",
  //             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //         },
  //         {
  //             "source": {
  //                 "id": "espn-cric-info",
  //                 "name": "ESPN Cric Info"
  //             },
  //             "author": null,
  //             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //             "publishedAt": "2020-03-30T15:26:05Z",
  //             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //         },
  //         {
  //             "source": {
  //                 "id": "news-com-au",
  //                 "name": "News.com.au"
  //             },
  //             "author": "Daanyal Saeed",
  //             "title": "Bizarre scenes amid cricket’s first red card",
  //             "description": "Former West Indies captain Kieron Pollard said the first Caribbean Premier League red card handed out to his Trinbago Knight Riders side was &ldquo;absolutely ridiculous&rdquo;.",
  //             "url": "https://www.news.com.au/sport/cricket/bizarre-scenes-in-caribbean-premier-league-as-crickets-first-red-card-shown/news-story/2a42784777b0f39c67b4a432ccedf1ee",
  //             "urlToImage": "https://content.api.news/v3/images/bin/550ad52c8148a1ca0a18e4b24e7635c6",
  //             "publishedAt": "2023-08-29T01:36:00Z",
  //             "content": "Former West Indies captain Kieron Pollard said the first Caribbean Premier League red card handed out to his Trinbago Knight Riders side was “absolutely ridiculous”.\r\nTrinbago were forced to field wi… [+2645 chars]"
  //         },
  //         {
  //             "source": {
  //                 "id": "espn-cric-info",
  //                 "name": "ESPN Cric Info"
  //             },
  //             "author": null,
  //             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //             "publishedAt": "2020-04-27T11:41:47Z",
  //             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //         },
  //         {
  //             "source": {
  //                 "id": "espn-cric-info",
  //                 "name": "ESPN Cric Info"
  //             },
  //             "author": null,
  //             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //             "publishedAt": "2020-03-30T15:26:05Z",
  //             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //         }
  // ]
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,         
      page: 1,
      totalResult: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=601b4599cac4485eb409189d925a1537&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=601b4599cac4485eb409189d925a1537&page=${
      this.state.page - 1
    } &pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNexClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=601b4599cac4485eb409189d925a1537&page=${
        this.state.page + 1
      } &pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page +1 })
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=601b4599cac4485eb409189d925a1537&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    loading: true,
  });
  };

  render() {
    return (
      <>
        <h1 className="text-center text-light" style={{margin:"35px 0px", marginTop:"50px"}}>NewsMonkey - Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  tittle={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  source={element.source.name}
                />
              </div>
            );
          })}
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="buttton"
              className="btn btn-sm btn-light"
              onClick={this.handlePrevClick}
            >
              <i className="fa-solid fa-arrow-left"></i>
              &nbsp; Previous
            </button>
            <button
              type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult /this.props.pageSize)}
              className="btn btn-sm btn-light"
              onClick={this.handleNexClick}
            >
              Next &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div> */}
        </>
      
    );
  }
}
export default News;