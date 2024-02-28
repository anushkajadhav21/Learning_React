import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';



let imgSrc = 'https://media.licdn.com/dms/image/C4D0BAQF6UxUDVYkrUQ/company-logo_200_200/0/1674037013017?e=2147483647&v=beta&t=3MY9Fv3RQPejZbwn6aDOCxig4wvGLniQn5qI7VVLQcs';

let imgStyle = {
  width: '25%',
  height: '25%',
};

ReactDOM.render(
  <div className='flex'>
  <Header/>
  <img src = {imgSrc} alt = 'Linkcode image' style={imgStyle} />
  <Footer dayCount=''/>
  </div>
  ,
  document.getElementById("root"),
  () => console.log("rendered")
);