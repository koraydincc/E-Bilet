import React, { useContext, useState } from 'react';
import {  Modal } from 'antd';
import { CartContext } from '../Context/CartContext'; // Replace with the correct path

const App: React.FC = () => {
  const { answerVoyage, showAnswer, seferBulunamadi } = useContext(CartContext) || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     
      <Modal title="Basic Modal"  maskClosable={false} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;
