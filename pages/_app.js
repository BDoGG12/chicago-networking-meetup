import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavigationMenu from "@/components/navigation/navigation-menu";
import { UserProvider } from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <NavigationMenu>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NavigationMenu>
  );
}
