// BuyModal.tsx

import React from 'react';
import { Modal, Button } from 'antd';
import Bus from './Bus';
import { Link } from 'react-router-dom';



interface BuyModalProps {
  title: string;
  maskClosable: boolean;
  visible: boolean;
  onBuy: () => void;
  onCancel: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ title, maskClosable, visible, onBuy, onCancel }) => {
  return (
    <Modal
      title="Koltuk Seç"
      visible={visible}
      onOk={onBuy}
      onCancel={onCancel}
      maskClosable={false}
      footer={[
        <Button key="buy" type="primary" onClick={onBuy}>
          Satın Al
        </Button>,
        <Button key="cancel" onClick={onCancel}>
          <Link to='/seferler'>İptal</Link>
        </Button>
      ]}
    >
      <Bus />
    </Modal>
  );
};

export default BuyModal;
