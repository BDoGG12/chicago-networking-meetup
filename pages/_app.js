import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import NavigationMenu from "@/components/navigation/navigation-menu";
import Footer from "@/components/footer/footer";
import { UserProvider } from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NavigationMenu>
        <Component {...pageProps} />
      </NavigationMenu>
      <Footer />
    </UserProvider>
  );
}
