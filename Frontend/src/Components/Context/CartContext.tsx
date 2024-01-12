// CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import seferler from '../../Data/seferler.json';




interface Sefer {
  id: number;
  kalkisSehir: string;
  varisSehir: string;
  kalkisZamani: Date;
  varisZamani: Date;
  fiyat: string;
}

interface CartContextProps {
  children: ReactNode;
}

interface CartContextValue {
  selectedKalkisSehir: string | null;
  selectedVarisSehir: string | null;
  answerVoyage: Sefer | null;
  setSelectedKalkisSehir: (value: string | null) => void;
  setSelectedVarisSehir: (value: string | null) => void;
  setAnswerVoyage: (value: Sefer | null) => void;
  SeferBul: () => void;
  setShowAnswer: (value: boolean) => void;
  showAnswer: boolean;
  seferBulunamadi: boolean;
  setSeferBulunamadi: (value: boolean) => void;
}


export const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [selectedKalkisSehir, setSelectedKalkisSehir] = useState<string | null>(null);
  const [selectedVarisSehir, setSelectedVarisSehir] = useState<string | null>(null);
  const [answerVoyage, setAnswerVoyage] = useState<Sefer | null>(null);
  const [seferBulunamadi, setSeferBulunamadi] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const SeferBul = () => {
    console.log('Seçilen Kalkış Şehri:', selectedKalkisSehir);
    console.log('Seçilen Varış Şehri:', selectedVarisSehir);
  
    
    if (selectedKalkisSehir && selectedVarisSehir) {
      const answer = seferler.find(
        (sefer) => sefer.kalkisSehir === selectedKalkisSehir && sefer.varisSehir === selectedVarisSehir 
      );

      console.log('Bulunan Sefer:', answer);

      if (answer) {
        console.log('Sefer Bilgileri:', answer);
        setAnswerVoyage({
          id: answer.id,
          kalkisSehir: answer.kalkisSehir,
          varisSehir: answer.varisSehir,
          kalkisZamani: new Date(answer.kalkisSaati),
          varisZamani: new Date(answer.varisSaati),
          fiyat: answer.fiyat,
        });
        setShowAnswer(true);
        setSeferBulunamadi(false);
      } else {
        console.log('Sefer bulunamadı.');
        setAnswerVoyage(null);
        setShowAnswer(true);
        setSeferBulunamadi(true);
      }
    } else {
      setShowAnswer(false);
      setSeferBulunamadi(false);
      alert("Lütfen kalkış ve varış şehirlerini seçin.")
    }

    
  };

  const value: CartContextValue = {
    selectedKalkisSehir,
    selectedVarisSehir,
    answerVoyage,
    seferBulunamadi,
    setSeferBulunamadi,
    showAnswer,
    setShowAnswer,
    setSelectedKalkisSehir,
    setSelectedVarisSehir,
    setAnswerVoyage,
    SeferBul,

  };

  console.log(value);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
