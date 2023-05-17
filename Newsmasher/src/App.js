import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const pageSize = 8;
  // const apiKey = process.env.REACT_APP_NEWS_API;


  ///////////////////////////////////
  const apiKey = 'Your API key here';
  ///////////////////////////////////


  const [progress, setProgress] = useState(0);
  const progressFunction = (progress) => {
      setProgress(progress)
  }
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>

            <Route exact path="/" element={<News api={apiKey} setProgress={progressFunction} key='general' headline='Top Headlines' pageSize={pageSize} country='in' category='general' />} />

            <Route exact path="/business" element={<News api={apiKey} setProgress={progressFunction} key='business' headline='Business Headlines' pageSize={pageSize} country='in' category='business' />} />

            <Route exact path="/entertainment" element={<News api={apiKey} setProgress={progressFunction} key='entertainment' headline='Entertainment Headlines' pageSize={pageSize} country='in' category='entertainment' />} />

            <Route exact path="/health" element={<News api={apiKey} setProgress={progressFunction} key='health' headline='Health Headlines' pageSize={pageSize} country='in' category='health' />} />

            <Route exact path="/science" element={<News api={apiKey} setProgress={progressFunction} key='science' headline='Science Headlines' pageSize={pageSize} country='in' category='science' />} />

            <Route exact path="/sports" element={<News api={apiKey} setProgress={progressFunction} key='sports' headline='Sports Headlines' pageSize={pageSize} country='in' category='sports' />} />

            <Route exact path="/technology" element={<News api={apiKey} setProgress={progressFunction} key='technology' headline='Technology Headlines' pageSize={pageSize} country='in' category='technology' />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    )
  }