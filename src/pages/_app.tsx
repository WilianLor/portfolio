import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="page">
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
