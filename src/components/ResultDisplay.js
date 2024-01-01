import React from 'react';
import Spinner from './Spinner';

function ResultDisplay({ loading, amount, sourceCrypto, convertedAmount, targetCurrency }) {
  return (
    <div className="result">
      {loading ? (
        <Spinner />
      ) : (
        <p>
          {amount} {sourceCrypto} = {convertedAmount} {targetCurrency.toUpperCase()}
        </p>
      )}
    </div>
  );
}

export default ResultDisplay;
