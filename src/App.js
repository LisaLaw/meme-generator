import './App.css';
import { Header } from "./components/Header.jsx"
import { MemeGenerator } from "./components/MemeGenerator.jsx"
import { Footer } from "./components/Footer.jsx"

export const App = () => {
  return (
    <main>
      <Header />
      <MemeGenerator />
      <Footer />
    </main>
  );
}
