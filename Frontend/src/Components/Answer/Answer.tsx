import React, { useContext, useState } from 'react';
import { Button, Table, Card, Spin } from 'antd';
import { CartContext } from '../Context/CartContext';
import BuyModal from '../Modal/BuyModal';
import { Link, useParams } from 'react-router-dom';

const AnswerTable: React.FC = () => {
  const { answerVoyage, showAnswer, seferBulunamadi } = useContext(CartContext) || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { id } = useParams();

  console.log(id)

  const columns = [
    {
      title: 'Bilet No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Kalkış Şehri',
      dataIndex: 'kalkisSehir',
      key: 'kalkisSehir',
    },
    {
      title: 'Varış Şehri',
      dataIndex: 'varisSehir',
      key: 'varisSehir',
    },
    {
      title: 'Kalkış Zamanı',
      dataIndex: 'kalkisTarihi',
      key: 'kalkisTarihi',
    },
    {
      title: 'Fiyat',
      dataIndex: 'fiyat',
      key: 'fiyat',
    },
    {
      title: 'Satın Al',
      key: 'action',
      render: (_: any, record: any) => (
        <Button type="primary" onClick={() => handleId(record.id)}>
          <Link to={`/seferler/${record.id}`}>Koltuk Seç</Link>
        </Button>
      ),
    },
  ];

  const handleId = (tiklananId: number) => {
    const selectedId = answerVoyage?.find((oge) => oge.id === tiklananId);
      
    if (selectedId) {
      console.log('Bulunan Öğe:', selectedId);
      setIsModalOpen(true);
      // You can use "selectedId.id" here if needed
    } else {
      console.log('Öğe bulunamadı.');
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {showAnswer && answerVoyage && !seferBulunamadi ? (
        <>
          <Table
            loading={{ indicator: <div><Spin /></div>, spinning: !answerVoyage }}
            pagination={{ position: ['bottomCenter'], defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
            dataSource={Array.isArray(answerVoyage) ? answerVoyage : [answerVoyage]}
            columns={columns}
          />
          <BuyModal  title="Basic Modal" maskClosable={false} visible={isModalOpen} onBuy={handleOk} onCancel={handleCancel} />
        </>
      ) : (
        <div>
          {showAnswer && seferBulunamadi ? (
            <Card title="Sonuçlar">Sefer Bulunamadı</Card>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AnswerTable;
