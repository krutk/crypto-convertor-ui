import React, { useState, useEffect } from 'react';
import ConverterForm from './components/ConverterForm';
import ResultDisplay from './components/ResultDisplay';
import { getCryptoList, convertAmount } from './services/cryptoService';
import './App.css';

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [sourceCrypto, setSourceCrypto] = useState('BTC');
  const [amount, setAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    fetchCryptoList();
  }, []);

  useEffect(() => {
    fetchConvertedAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceCrypto, amount, targetCurrency]);

  const fetchCryptoList = async () => {
    try {
      setLoading(true);
      const cryptoList = await getCryptoList();
      setCryptoList(cryptoList);
    } catch (error) {
      console.error('Error fetching crypto list:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConvertedAmount = async () => {
    try {
      setLoading(true);
      const convertedAmount = await convertAmount(sourceCrypto, amount, targetCurrency);
      setConvertedAmount(convertedAmount);
    } catch (error) {
      console.error('Error converting amount:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwapCurrencies = () => {
    const temp = sourceCrypto;
    setSourceCrypto(targetCurrency);
    setTargetCurrency(temp);
    setSwap(!swap);
  };

  return (
    <div className="container">
      <h1>Crypto Currency Converter</h1>
      <ConverterForm
        cryptoList={cryptoList}
        sourceCrypto={sourceCrypto}
        targetCurrency={targetCurrency}
        amount={amount}
        handleSwapCurrencies={handleSwapCurrencies}
        setSourceCrypto={setSourceCrypto}
        setTargetCurrency={setTargetCurrency}
        setAmount={setAmount}
        swap={swap}
      />
      <ResultDisplay
        loading={loading}
        amount={amount}
        sourceCrypto={sourceCrypto}
        convertedAmount={convertedAmount}
        targetCurrency={targetCurrency}
      />
    </div>
  );
}

export default App;
