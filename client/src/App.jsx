import { Welcome, Footer, Transactions } from "./components";
import logo from "./assets/logo.png";
import "./assets/banner.jpg";
const App = () => (
  <div className="welcome">
    <div className="inner-container">
      <img src={logo} alt="logo" className="logo" />
      <Welcome />
      <Transactions />
      <Footer />
    </div>
  </div>
);

export default App;
