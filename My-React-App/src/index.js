import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import UserProfileCard from './UserProfileCard/UserProfileCard';*/
/*import CounterApp from './CounterApp/CounterApp';*/
/*import FormComponent from './FormComponent/FormComponent';*/
 import ContactForm from './ContactForm/contactForm';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ContactForm/>
    {/*<FormComponent/>*/}
    {/*<UserProfileCard/>*/}
    {/*<CounterApp/>*/}
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
