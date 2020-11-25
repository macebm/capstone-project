import Stores from "./components/Stores";

const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");

function App() {
  return (
    <div className="App">
      <Header />

      <Stores />

      <Footer />
    </div>
  );
}

export default App;
