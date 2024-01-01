import React from 'react';

function ConverterForm({
  cryptoList,
  sourceCrypto,
  targetCurrency,
  amount,
  handleSwapCurrencies,
  setSourceCrypto,
  setTargetCurrency,
  setAmount,
  swap
}) {
  return (
    <>
      {swap ? (
        <>
          <div className="form-group">
            <label>Source Currency:</label>
            <select
              className="form-control"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleSwapCurrencies}
            >
              Swap Currencies
            </button>
          </div>
          <div className="form-group">
            <label>Target Currency:</label>
            <select
              className="form-control"
              value={sourceCrypto}
              onChange={(e) => setSourceCrypto(e.target.value)}
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.id} value={crypto.symbol}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>Source Currency:</label>
            <select
              className="form-control"
              value={sourceCrypto}
              onChange={(e) => setSourceCrypto(e.target.value)}
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.id} value={crypto.symbol}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleSwapCurrencies}
            >
              Swap Currencies
            </button>
          </div>
          <div className="form-group">
            <label>Target Currency:</label>
            <select
              className="form-control"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </>
      )}
      <div className="form-group">
        <label>Amount:</label>
        <input
          className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </>
  );
}

export default ConverterForm;
