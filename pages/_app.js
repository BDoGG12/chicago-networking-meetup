import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavigationMenu from "@/components/navigation/navigation-menu";

export default function App({ Component, pageProps }) {
  return (
      <NavigationMenu>
        <Component {...pageProps} />
      </NavigationMenu>
  );
}
