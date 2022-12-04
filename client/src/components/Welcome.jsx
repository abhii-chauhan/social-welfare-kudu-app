import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { amount, message } = formData;

    e.preventDefault();

    if (!amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="two_box">
      <div className="details-container">
        <h2 className="subheading">
          A <span className="styled_text">web3</span> based crowdfunding
          platfrom
        </h2>
        <p className="description">
          Kudu is a web 3.0 based crowdfunding website on which an organization
          can get funding from the crypto audience. As we know in today's world
          everyone is shifting towards web 3.0 so Kudu is the solution for all
          organizations to collect funds in crypto by using Kudu.
        </p>
        {!currentAccount && (
          <div className="connect_button">
            <button type="button" onClick={connectWallet}>
              Connect Wallet <i className="fa-brands fa-ethereum"></i>
            </button>
          </div>
        )}
      </div>
      <div className="payment_container">
        <div className="card_container">
          <div className="card">
            <div className="card_icon">
              <i className="fa-brands fa-ethereum"></i>
            </div>
            <div className="card_details">
              <p className="wallet-address">{shortenAddress(currentAccount)}</p>
              <p className="card_info">Ethereum</p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <textarea
            placeholder="Enter Message"
            name="message"
            step="0.0001"
            rows={3}
            onChange={(e) => handleChange(e, "message")}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <button type="button" onClick={handleSubmit} className="send_now">
              Donate Now <i class="fa-solid fa-hand-holding-dollar"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
