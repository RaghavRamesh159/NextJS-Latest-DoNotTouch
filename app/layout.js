import "../styles/global.css";
import "../styles/layout.css";

export const revalidate = true

export default function App({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
