import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './container/firstPage/header';
import Main from './container/firstPage/main'
import Footer from './container/firstPage/footer';
var obj = {
  header_left:{
    a1:"Скидка до 40%",
    a2:"Статус рассрочки",
    a3:"Cashback",
    a4:"Samsung",
    a5:"Xiaomi",
    a6:"Адрес магазинов",

  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header data ={
      obj
    } />
    <Main/>
    <Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
