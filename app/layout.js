import "../styles/global.css";
import "../styles/layout.css";

export async function generateStaticParams() { 
  return []
}
export const revalidate = 120
export const dynamicParams = true

export default function App({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
