// Answer.tsx
import { Card} from 'antd';
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Answer() {
  const {
    answerVoyage,
    showAnswer,
    seferBulunamadi,
  } = useContext(CartContext) || {};

  

  return (
    <div>
      {showAnswer && answerVoyage && !seferBulunamadi ? (
        <Card title="Sonuçlar" type="inner" extra={<a href="/">More</a>}>
          <p>ID: {answerVoyage.id}</p>
          <p>Kalkış Şehri: {answerVoyage.kalkisSehir}</p>
          <p>Varış Şehri: {answerVoyage.varisSehir}</p>
          <p>Kalkış Zamanı: {answerVoyage.kalkisZamani.toString()}</p>
          <p>Varış Zamanı: {answerVoyage.varisZamani.toString()}</p>
          <p>Fiyat: {answerVoyage.fiyat}</p>
        </Card>
      ) : (
        <div>
          {showAnswer && seferBulunamadi ? <Card title="Sonuçlar">Sefer Bulunamadı</Card> : null}
        </div>
      )}
    </div>
  );
}

export default Answer;
