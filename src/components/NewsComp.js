import React, { Component } from 'react'
import NewsCompItem from './NewsCompItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComp extends Component {
    article = [];
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string
    }
    captlizefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {

        super(props);
        this.state = {
            page: 1,
            article: this.article,
            loading: false,
            totalResults : 0

        }
        document.title = `${this.captlizefirstletter(this.props.category)}-Day News`;
    }
    async componentDidMount() {
        this.props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=17e824e27fd24de180cc3d6d5540b02a&page=1`
        this.setState({ loading: true })
        let data = await fetch(url);
        let predata = await data.json();
        this.setState({ article: predata.articles, totalsize: predata.totalResults, loading: false })
        this.props.setprogress(100)


    }
    chnagenextlcick = async () => {
        if (this.state.page + 1 > Math.ceil((this.state.totalsize) / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=17e824e27fd24de180cc3d6d5540b02a&page=${this.state.page + 1}`
            this.setState({ loading: true })
            let data = await fetch(url);
            let predata = await data.json();
            this.setState({
                page: this.state.page + 1,
                article: predata.articles,
                loading: false
            })
        }
    }
    chnageonpreclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=17e824e27fd24de180cc3d6d5540b02a&page=${this.state.page - 1}`
        // this.setState({loading : true})
        let data = await fetch(url);
        let predata = await data.json();
        this.setState({
            page: this.state.page - 1,
            article: predata.articles,
            loading: false

        })
    }
    fetchMoreData = async() => {
        this.setState({page: this.state.page+1})
         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=17e824e27fd24de180cc3d6d5540b02a&page=${this.state.page - 1}`
        let data = await fetch(url);
        let predata = await data.json();
        this.setState({
            page: this.state.page - 1,
            article: this.state.article.concat(predata.articles),
            loading: false

        })
      };

    render() {

        return (
            <>

                <div className="container">
                    <h1 className='my-3 text-center '>Welcome To The World Of News - Top Headlines on {this.captlizefirstletter(this.props.category)}</h1>
                    {this.state.loading && <Spinner/>} 
                    <InfiniteScroll
                            dataLength={this.state.article.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.article.length !== this.state.totalResults}
                            loader={<Spinner />}
                    >
                    <div className="container">
                    <div className="row align-items-center">
                        {/* {this.state.loading && <Spinner/>} */}
                        
                            {this.state.article.map((element) => {
                                return <div key={element.url} className="col-md-4 my-3">
                                    <NewsCompItem title={element.title ? element.title.slice(0, 400) : " "} description={element.description ? element.description.slice(0, 45) : " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} comp={element.source.name} />
                                </div>
                            })}
                    </div>
                    </div>
                </InfiniteScroll>

            </div >
    </>
    )
    }
}

export default NewsComp