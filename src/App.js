import { useEffect, useState } from "react";
import './App.css';

const App  = () =>  { 
  const [item, setItem] = useState("");

  const getData = async () => {
    let response = await fetch("https://api.punkapi.com/v2/beers/random");
    let data = await response.json();
    setItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <body>
      <h1 key='head'>What food pairs best with your beer?</h1>
      <h2 key='name'>{item.name}, {item.abv}%</h2>
      <img key='img' src={item.image_url} alt='beer' height='350px'/>
      <h2 key='tag'>{item.tagline}</h2>
      <p key='desc'>{item.description}</p>
      <h3 key='pair'>Food pairing</h3>
      {item ? (
        item.food_pairing.map((food, index) => {
          return <Food food={food} />;
        })
      ) : (
        <p key='load'>loading...</p>
      )}
      <h3>Ingredients</h3>
      <button key='button' onClick={getData}>Choose another</button>
    </body>
  );
};

const Food = ({ food }) => {
  return (
      <p key='food'>{food}</p>
  );
};

// const Ingredients = ({ ingredients, malt }) => {
//   return (
//     <div>
//       <p>{ingredients.malt}</p>
//     </div>
//   );
// };

export default App;