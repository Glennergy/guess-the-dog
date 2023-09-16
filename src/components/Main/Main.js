import axios from "axios";
import { useEffect, useState } from "react";
import "./Main.scss";
import DogImage from "../DogImage/dogImage";

function Main({ setScore, score }) {
  const [dogList, setDogList] = useState([]);
  const [dogOptions, setDogOptions] = useState([]);
  const [randomDogImage, setRandomDogImage] = useState("");
  const [selectedDog, setSelectedDog] = useState("");

  useEffect(() => {
    let array = [];
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      // setDogList(response.data.message);
      for (let [key, value] of Object.entries(response.data.message)) {
        array.push(key);
      }

      console.log(array);
      setDogList(array);
    });
  }, []);

  useEffect(() => {
    let dogListarr = [];
    let optionArr = [];
    //create Dog Breed list
    for (let [key, value] of Object.entries(dogList)) {
      dogListarr.push(value);
    }
    console.log(dogListarr);
    dogListarr.pop();
    //create option list
    let indexarr = [];

    indexarr.push(Math.trunc(Math.random() * 20));
    indexarr.push(Math.trunc(Math.random() * 20 + 21));
    indexarr.push(Math.trunc(Math.random() * 20 + 42));
    indexarr.push(Math.trunc(Math.random() * 20 + 63));
    // for (let i = 0; i < 4; i++) {
    //   indexarr.push(Math.trunc(Math.random() * 97));
    // }
    for (let elem of indexarr) {
      optionArr.push(dogListarr[elem]);
    }
    let currentSelectedDog = optionArr[Math.trunc(Math.random() * 3)];
    console.log(currentSelectedDog);
    console.log(optionArr);
    setSelectedDog(currentSelectedDog);
    setDogOptions(optionArr);

    axios
      .get(`https://dog.ceo/api/breed/${currentSelectedDog}/images/random`)
      .then((response) => {
        setRandomDogImage(response.data.message);
      });
  }, [dogList]);

  const optionClickHandler = (e) => {
    console.log(e.target.id);
    console.log({ selectedDog }.selectedDog);
    console.log(dogOptions[e.target.id]);
    if (dogOptions[e.target.id] == { selectedDog }) {
      setScore(score + 1);
    }
  };

  return (
    <div className="main">
      <div className="main__left" onClick={optionClickHandler}>
        <span className="main__left-item" id="0">
          {" "}
          {dogOptions[0]}
        </span>
        <span className="main__left-item" id="1">
          {" "}
          {dogOptions[1]}
        </span>
        <span className="main__left-item" id="2">
          {" "}
          {dogOptions[3]}
        </span>
        <span className="main__left-item" id="3">
          {" "}
          {dogOptions[2]}
        </span>
      </div>
      <div className="main__right">
        <DogImage randomDogImage={randomDogImage} />
      </div>
    </div>
  );
}

export default Main;
