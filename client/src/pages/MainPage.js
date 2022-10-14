import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar/Navbar";
import Card from "../Components/Card/Card";
import SearchBar from "../Components/SearchBar/SearchBar";
import "./MainPage.css";
import axios from "axios";

function MainPage() {
  const [restaurantes, setRestaurantes] = useState([]);
  const fetchData = () => {
    axios
      .get("/api/restaurant/restaurant")
      .then((response) => {
        console.log(response.data);
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  fetchData();
  return (
    <div className="Mainpage">
      <div className="Navbar">
        <header>
          <Navbar />
        </header>
        <SearchBar />
      </div>
      <div className="cards">
        {restaurantes.map((restaurante, index) => {
          return (
            <div className="row row-cols g-0 ">
              <Card
                key={index}
                image={restaurante.imagen}
                Restaurantname={restaurante.nombre}
                RestaurantDescription={restaurante.descripcion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
