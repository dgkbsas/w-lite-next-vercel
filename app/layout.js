//styles
import "../styles/globals.css";

export const metadata = {
  title: "WÚRU ANALYTICS",
  description: "Wúru Analytics",
};

//context
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
