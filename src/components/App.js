import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const baseURL = "http://localhost:3001/pets"
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(option) {
    setFilters({ type: option });
  }

  function onFindPetsClick(option) {
    const URL = option === "all" ? baseURL : `${baseURL}?type=${option}`
    fetch(URL)
      .then(resp => resp.json())
      .then(data => setPets(data))
  }

  function onAdoptPet(id) {
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true }
      }
      return pet
    });
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter ♀</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
