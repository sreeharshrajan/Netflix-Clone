import GlobalStyle from "./GlobalStyles"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Trending from "./components/Trending";
import {originals,ActionMovies,RomanceMovies,HorrorMovies,ComedyMovies,Documentaries} from "./constants/Urls"
function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
     <Banner />
     <Trending url={originals} title="Originals" />
     <Trending url={ActionMovies} title="Action Movies" isSmall/>
     <Trending url={RomanceMovies} title="Romance Movies" isSmall/>
     <Trending url={HorrorMovies} title="Action Movies" isSmall/>
     <Trending url={ComedyMovies} title="Romance Movies" isSmall/>
     <Trending url={Documentaries} title="Action Movies" isSmall/>
    </>
  );
}

export default App;
