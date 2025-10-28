import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  
  const plantsFiltered = plants.filter((plant) =>
    plant.name.toLowerCase().includes(term.toLowerCase())
  );

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearchTerm={setTerm} />
      <PlantList plants={plantsFiltered} />
    </main>
  );
}

export default PlantPage;
