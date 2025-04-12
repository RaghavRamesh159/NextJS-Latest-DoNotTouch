import "../styles/global.css";
import "../styles/layout.css";


export const revalidate = 10
export const dynamicParams = false

export default async function App({ children }) {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <html>
      <body>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </body>
    </html>
  );
}
