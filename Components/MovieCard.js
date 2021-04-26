import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { getMovie, updateVotesCount } from '../firebase-api';



const MovieCard = ({ roomCode }) => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);

  // const incrementCounter = () => {
  //   if (counter < 19) {
  //     setCounter((prevState) => {
  //       const newState = prevState;
  //       console.log(newState, 'increment');
  //       return newState + 1;
  //     });
  //   } else {
  //     navigate('/result');
  //   }
  // };

  useEffect(() => {
    getMovie('HB70').then((res) => {
      console.log(res);
      // setCurrentFilm(res);
    });
  }, []);

  // const { title, vote_average, overview, poster_path, id } = currentFilm;

  return (<div>test</div>)
//     <div>
//       <h1>
//         {/* {title} */}
//         </h1>
//       <p>
//         {/* {vote_average} */}
//         </p>
//       <p>
//         {/* {overview} */}
//         </p>
//       <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
//       <button
//         onClick={() => {
//           // incrementCounter();
//         }}
//       >
//         Cringr
//       </button>
//       <button
//         onClick={() => {
//           // incrementCounter();
//           // incrementVote(roomCode, id);
//           // updateVotesCount();
//         }}
//       >
//         Bingr
//       </button>
//     </div>
//   );
};

export default MovieCard;

