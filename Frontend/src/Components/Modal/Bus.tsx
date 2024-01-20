// Bus.tsx
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';

import './Bus.css'; // Stil dosyanızı içeri aktarın

export interface BusProps {
  koltukNo: number;
  dolu: boolean;
  secili: boolean;
  onSelect: (koltukNo: number) => void;
}

const Bus: React.FC<BusProps> = ({ koltukNo, dolu, secili, onSelect }) => {
  const handleClick = () => {
    if (!dolu) {
      onSelect(koltukNo);
    }
  };

  const { Text } = Typography;

  const { answerVoyage } = useContext(CartContext) || {};
  const { id } = useParams();
  const selectedVoyage = answerVoyage?.filter((sefer) => String(sefer.id) === id);

  return (
    <>
      <div className={`koltuk ${dolu ? 'dolu' : ''} ${secili ? 'secili' : ''}`} onClick={handleClick}>
        {koltukNo}
      </div>
    </>
  );
};

export default Bus;
