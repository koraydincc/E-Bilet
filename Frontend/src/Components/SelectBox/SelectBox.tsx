import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Select, Space } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import locale from 'antd/es/date-picker/locale/tr_TR';
import { DatePicker } from 'antd';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const kalkisSehirleri = ['Istanbul', 'Samsun'];
const varisSehirleri = ['Ankara', 'Düzce'];



function HeaderAndFooterExample() {
  const { selectedKalkisSehir, selectedVarisSehir, answerVoyage, SeferBul, setSelectedKalkisSehir, setSelectedVarisSehir } =
    useContext(CartContext) || {};

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && current < dayjs().endOf('day');
  };

  const onChange = (date: dayjs.Dayjs | null, dateString: string) => {
    console.log(date, dateString);
  };

  const presets = [
    { label: 'Yarın', value: dayjs().add(1, 'd').locale('tr') },
    // Diğer presetleri buraya ekleyebilirsiniz
  ];

  console.log(answerVoyage);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Uygun Seferler</Card.Title>
        <Card.Text>
          <Space wrap>
            <Select
              style={{ width: 120 }}
              options={kalkisSehirleri.map((KalkisSehir) => ({ label: KalkisSehir, value: KalkisSehir }))}
              value={selectedKalkisSehir}
              placeholder="Kalkış Şehri"
              onChange={(value) => setSelectedKalkisSehir && setSelectedKalkisSehir(value)}
            />
            <Select
              style={{ width: 120 }}
              placeholder="Varış Şehri"
              value={selectedVarisSehir}
              options={varisSehirleri.map((VarisSehir) => ({ label: VarisSehir, value: VarisSehir }))}
              onChange={(value) => setSelectedVarisSehir && setSelectedVarisSehir(value)}
            />
            <Space direction="vertical" size={12}>
              <DatePicker
                disabledDate={disabledDate}
                locale={locale}
                presets={presets}
                onChange={onChange}
              />
            </Space>
          </Space>
        </Card.Text>
        <Button variant="primary">
          <Link style={{color:'white'}} onClick={SeferBul} color='white' to="/seferler">Otobüs Seferi Bul</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
