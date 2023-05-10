import { useState } from "react";
import axios from "axios";
import convertible1 from "../src-assets/convertible7.jpg";
import convertible2 from "../src-assets/convertible19.jpg";
import coupe1 from "../src-assets/coupe1.jpg";
import coupe2 from "../src-assets/coupe4.jpg";
import hatch1 from "../src-assets/hatch4.jpg";
import hatch2 from "../src-assets/hatch10.jpg";
import sedan1 from "../src-assets/sedan6.jpg";
import sedan2 from "../src-assets/sedan20.jpg";
import stationwagon1 from "../src-assets/stationwagon2.jpg";
import stationwagon2 from "../src-assets/stationwagon1.jpg";
import suv1 from "../src-assets/suv1.jpg";
import suv2 from "../src-assets/suv23.jpg";
import utility1 from "../src-assets/ute2.jpg";
import utility2 from "../src-assets/ute4.jpg";
import van1 from "../src-assets/van2.jpg";
import van2 from "../src-assets/van1.jpg";

const carData = [
  {
    id: 1,
    type: "hatchback",
    image: hatch1,
  },
  {
    id: 2,
    type: "hatchback",
    image: hatch2,
  },
  {
    id: 3,
    type: "convertible",
    image: convertible1,
  },
  {
    id: 4,
    type: "convertible",
    image: convertible2,
  },
  {
    id: 5,
    type: "coupe",
    image: coupe1,
  },
  {
    id: 6,
    type: "coupe",
    image: coupe2,
  },
  {
    id: 7,
    type: "sedan",
    image: sedan1,
  },
  {
    id: 8,
    type: "sedan",
    image: sedan2,
  },
  {
    id: 9,
    type: "stationwagon",
    image: stationwagon1,
  },
  {
    id: 10,
    type: "stationwagon",
    image: stationwagon2,
  },
  {
    id: 11,
    type: "suv",
    image: suv1,
  },
  {
    id: 12,
    type: "suv",
    image: suv2,
  },
  {
    id: 13,
    type: "utility",
    image: utility1,
  },
  {
    id: 14,
    type: "utility",
    image: utility2,
  },
  {
    id: 15,
    type: "van",
    image: van1,
  },
  {
    id: 16,
    type: "van",
    image: van2,
  },
];

export default function Body() {
  const [imageUrl, setImageUrl] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/analyze-image", {
        imageUrl: imageUrl,
      });

      console.log(response.data);
      setTag1(response.data.predictions[0].tagName);
      setTag2(response.data.predictions[1].tagName);

      setImageUrl("");
    } catch (error) {
      console.error("Error analyzing image", error);
    }
  };

  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <div className={["body"]}>
      <div className={["body__title"]}>
        <h1>We can help you find what you're looking for!</h1>
      </div>
      <div className={["body__title--subhead"]}>
        <h3>Submit an image below and we'll see what we can make of it</h3>
      </div>
      <div className={["body__form"]}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className={["body__form--submit"]}>
            Analyze
          </button>
        </form>
      </div>
      <div className={["body__result"]}>
        <h3>So you're looking for {tag2}s? </h3>
        <div className={["body__result--images"]}>
          {carData
            .filter((car) => car.type === tag2 && car.id !== 0)
            .map((car) => (
              <div key={car.id}>
                <img src={car.image} alt={car.type} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
