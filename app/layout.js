//styles
import "../styles/globals.css";

export const metadata = {
  title: "WÚRU LITE",
  description: "Wúru Analytics",
};

//context
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>WÚRU ANALYTICS</title>
      </head>
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
