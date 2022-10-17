import logo from "./logo.svg";
import { usePaystackPayment } from "react-paystack";

function PayNow() {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

  const onSuccess = () => {
    console.log("Success");
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div style={{ paddingTop: "150px" }}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
}

export default PayNow;
