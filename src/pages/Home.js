import { Link } from "react-router";

function HomePage() {
  return (
    <>
    <h1>HomePage</h1>
    <p>
        Go to <Link to="/products"> List of  products</Link>
    </p>
    </>
  )
}

export default HomePage;