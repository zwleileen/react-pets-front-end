// src/App.jsx

import { useState } from "react";
import PetList from "./components/PetList/PetList";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PetDetails from "./components/PetDetails/PetDetails";
import PetForm from "./components/PetForm/PetForm";
import * as petService from './services/petService';
import { useEffect } from "react";

const App = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await petService.show();
    setPets(data);
  }

  function generateId() {
    const characters = '0123456789abcdef';
    let id = '';
    for (let i = 0; i < 4; i++) {
      id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
  }

  const addPet = (formData) => {
    formData.id = generateId()
    setPets([...pets, formData])
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/pets" />} />
      <Route path="/pets" element={<PetList fetchData={fetchData} pets={pets}/>}>
        <Route path=":petId" element={<PetDetails fetchData={fetchData} pets={pets}/>}/>
        <Route path="new" element={<PetForm fetchData={fetchData} addPet={addPet}/>} />
      </Route>
    </Routes>
    </>
  ) 
};

export default App;
