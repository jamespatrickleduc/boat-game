import "../styles/globals.css";
import { GameContextProvider } from "../contexts/gameContext";

function MyApp({ Component, pageProps }) {
  return (
    <GameContextProvider>
      <Component {...pageProps} />
    </GameContextProvider>
  );
}

export default MyApp;
