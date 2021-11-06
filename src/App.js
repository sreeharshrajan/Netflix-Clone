import GlobalStyle from "./GlobalStyles"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Trending from "./components/Trending";
function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
     <Banner />
     <Trending />
    </>
  );
}

export default App;
