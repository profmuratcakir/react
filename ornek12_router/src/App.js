import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Kurslar from "./components/Kurslar";
import Iletisim from "./components/Iletisim";
import Kisiler from "./components/Kisiler";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kurslar">
            <Kurslar />
          </Route>
          <Route path="/iletisim">
            <Iletisim />
          </Route>
          <Route path="/kisiler">
            <Kisiler />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
