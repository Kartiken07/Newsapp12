
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state = {
    progress : 0
  }
   setprogress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

        <NavBar/>
        <Routes>
            <Route  path="/" element={<NewsComp  setprogress={this.setprogress}    category="general" />} />
            <Route  path="/business" element={<NewsComp  setprogress={this.setprogress}   key="bussiness"  category="business" />} />
            <Route  path="/entertainment" element={<NewsComp  setprogress={this.setprogress}   key="entertainment"  category="entertainment" />} />
            <Route path="/general" element={<NewsComp  setprogress={this.setprogress}   key="general"  category="general" />} />
            <Route  path="/health" element={<NewsComp  setprogress={this.setprogress}   key="health"  category="health" />} />
            <Route  path="/science" element={<NewsComp  setprogress={this.setprogress}   key="science"  category="science" />} />
            <Route  path="/sports" element={<NewsComp  setprogress={this.setprogress}   key="sports"  category="sports" />} />
            <Route  path="/technology" element={<NewsComp  setprogress={this.setprogress}   key="technology"  category="technology" />} />
        </Routes>
        
        </BrowserRouter>
      </>
    )
  }
}



