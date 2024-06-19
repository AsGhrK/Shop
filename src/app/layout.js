import { Header } from "@/componetes/Headar";
import { Footer } from "@/componetes/Footer";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> <Header /> {children}  <Footer /> </body>
    </html>
  );
}
