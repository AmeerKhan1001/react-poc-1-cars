import { useEffect, useState } from "react";
import "./styles.css";

function Car(props) {
  return <span>{props.carName}</span>;
}

export default function App() {
  const [cars, updateCars] = useState([]);

  useEffect(() => {
    fetch(`https://private-anon-42b56e1f7a-carsapi1.apiary-mock.com/cars`)
      .then((response) => response.json())
      .then((json) => {
        updateCars(
          json.map((car) => [car.make + " - " + car.model, car.img_url])
        );
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome To The World of Cars</h1>
      <div className="carsGrid">
        {cars.map((car, index) => {
          return (
            <div key={"Car_" + index} className="carCard">
              <h2>
                <Car carName={car[0]} />
              </h2>
              <img
                src={car[1]}
                alt="numbers"
                loading="lazy"
                width="300"
                height="300"
                style={{ margin: 10 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
