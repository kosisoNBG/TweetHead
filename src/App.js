import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
   const mainRef = useRef(null); // Initialize the ref
   const [formData, setFormData] = useState({
    name: 'Kosiso Igboagui',
    userName: 'larsonbro',
    message: 'Follow me for the most amazing content related to Programming & Web Development 💎',
    profilePicture: 'https://i.imgur.com/0LKZQYM.jpg',
    backgroundImage: 'https://cdn.vanguardngr.com/wp-content/uploads/2024/01/Ayra-Starr-Grammy.webp',
    backGroundSpacing: 60,
    backGroundSpacing2: 20
  });

  const updateFormData = (data) => {
    setFormData(data);
  };
  return (
    <div className="App">
      <Header mainRef={mainRef}/>
      <SideBar updateFormData={updateFormData} formData={formData} />
      <Main mainRef={mainRef} formData={formData} />
    </div>
  );
}

export default App;
