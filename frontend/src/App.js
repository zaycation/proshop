import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
