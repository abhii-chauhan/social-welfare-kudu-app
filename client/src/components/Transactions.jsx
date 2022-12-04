import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressFrom, timestamp, message, amount }) => {
  return (
    <div className="latestTransation">
      <p className="from-to">
        <i class="fa-solid fa-hand-holding-dollar"></i>
        <a
          href={`https://goerli.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
        >
          {shortenAddress(addressFrom)}
        </a>
      </p>
      <p className="from-to">
        <i class="fa-brands fa-ethereum"></i>
        {amount} ETH
      </p>
      {message && (
        <p className="message">
          <i class="fa-solid fa-envelope"></i>
          {message}
        </p>
      )}

      <p className="from-to">
        <i class="fa-solid fa-calendar"></i>
        {timestamp}
      </p>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div class="scrollmenu">
      {currentAccount && (
        <h3 className="lt-heading">
          Latest Transactions <i class="fa-solid fa-money-bill-transfer"></i>
        </h3>
      )}
      {[...transactions].reverse().map((transaction, i) => (
        <TransactionsCard key={i} {...transaction} />
      ))}
    </div>
  );
};

export default Transactions;
