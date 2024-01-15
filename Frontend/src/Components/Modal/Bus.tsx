import React, { useContext, } from 'react';
import { CartContext } from '../Context/CartContext'; // Replace with the correct path
import { useParams } from 'react-router-dom';

const App: React.FC = () => {
  const { answerVoyage, showAnswer, seferBulunamadi } = useContext(CartContext) || {};


  const { id } = useParams()



  return (
    <>
     
       {id}
    </>
  );
};

export default App;
