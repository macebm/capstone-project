const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");
const { default: NavigationButton } = require("./components/NavigationButton");

function App() {
  return (
    <div className="App">
      <Header />

      <NavigationButton>Home</NavigationButton>

      <Footer />
    </div>
  );
}

export default App;
