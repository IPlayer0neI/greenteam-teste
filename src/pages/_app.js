import { SubjectsProvider } from "@/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SubjectsProvider>
      <Component {...pageProps} />
    </SubjectsProvider>
  );
}
