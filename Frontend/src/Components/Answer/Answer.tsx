import React, { useContext } from 'react';
import { Button, Table, Card,Spin } from 'antd';
import { CartContext } from '../Context/CartContext';

const AnswerTable: React.FC = () => {
  const { answerVoyage, showAnswer, seferBulunamadi } = useContext(CartContext) || {};

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
        <Button type='primary'>
          <a>Satın Al</a>
        </Button>
      ),
    },
  ];

  return (
    <div>
      {showAnswer && answerVoyage && !seferBulunamadi ? (
       <Table
       loading={{ indicator: <div><Spin/></div>, spinning: !answerVoyage }}
       pagination={{ position: ['bottomCenter'], defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
       dataSource={answerVoyage}
       columns={columns}
       
     />
     
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
