// CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import seferler from '../../Data/seferler.json';

interface Sefer {
    id: number;
    kalkisSehir: string;
    varisSehir: string;
    kalkisTarihi: string;
    kalkisSaati: string;
    varisSaati: string;
    fiyat: string;
    kalkisZamani?: string;
    varisZamani?: string;
  }
  
  

interface CartContextProps {
  children: ReactNode;
}

interface CartContextValue {
  selectedKalkisSehir: string | null;
  selectedVarisSehir: string | null;
  answerVoyage: Sefer[] | null;
  setSelectedKalkisSehir: (value: string | null) => void;
  setSelectedVarisSehir: (value: string | null) => void;
  setAnswerVoyage: (value: Sefer[] | null) => void;
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
  const [answerVoyage, setAnswerVoyage] = useState<Sefer[] | null>(null);
  const [seferBulunamadi, setSeferBulunamadi] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const SeferBul = () => {
    if (selectedKalkisSehir && selectedVarisSehir) {
        const foundSeferler: Sefer[] = seferler.filter(
            (sefer) =>
              sefer.kalkisSehir === selectedKalkisSehir &&
              sefer.varisSehir === selectedVarisSehir &&
              new Date(sefer.kalkisTarihi) >= new Date()
          );
      

      console.log('Bulunan Seferler:', foundSeferler);

      if (foundSeferler.length > 0) {
        setAnswerVoyage(foundSeferler);

        setShowAnswer(true);
        setSeferBulunamadi(false);
      } else {
        setAnswerVoyage(null);
        setShowAnswer(true);
        setSeferBulunamadi(true);
      }
    } else {
      setShowAnswer(false);
      setSeferBulunamadi(false);
      alert('Lütfen kalkış ve varış şehirlerini seçin.');
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
