import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
import './components/navbar/Navbar';
import Baseboard from './components/baseboard/Baseboard';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar
    item0 = {"NavBar 1"}
    item1 = {"Projetos"}
    item2 = {"Experiência"}
    item3 = {"Contato"}
    item4 = {"Sobre Mim"}
    />

    <Baseboard
    item1={"Parceiros"}
    item2={"Outros serviços"}
    item3={"Senac"}
    item4={"Sebrae"}
    item5={"Senai"}
    item6={"UI/UX Design"}
    item7={"CiberSegurança"}
    />
    <Baseboard
    item1={"Parceiros"}
    item2={"Outros serviços"}
    item3={"Senac"}
    item4={"Sebrae"}
    item6={"UI/UX Design"}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
