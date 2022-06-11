import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import { Home } from "./pages/home";

function App() {
  return (
    <div style={{ backgroundColor: "#281F67" }} className="lg:pb-0 pb-10">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
