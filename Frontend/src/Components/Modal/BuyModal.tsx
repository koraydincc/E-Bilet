// BuyModal.tsx
import React from 'react';
import { Modal, Button } from 'antd';
import Bus, { BusProps } from './Bus';  // Bus componentinden BusProps'u içe aktarın
import { Link } from 'react-router-dom';

interface BuyModalProps {
  title: string;
  maskClosable: boolean;
  visible: boolean;
  onBuy: () => void;
  onCancel: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ title, maskClosable, visible, onBuy, onCancel }) => {
  // Bu noktada BusProps'u kullanarak gerekli prop'ları geçirin
  const busProps: BusProps = {
    koltukNo: 1,  // Örneğin, koltukNo'yu burada belirtin, gerçek değerleri kullanmalısınız
    dolu: false,
    secili: false,
    onSelect: (koltukNo: number) => console.log(`Koltuk ${koltukNo} seçildi`),
  };

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
      {/* Bus componentini kullanırken BusProps'u geçirin */}
      <Bus {...busProps} />
    </Modal>
  );
};

export default BuyModal;
