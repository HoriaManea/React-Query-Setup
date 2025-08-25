import "./App.css";
import { useQuery } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ProductPage from "./ProductPage";

function Home({ data }) {
  const navigate = useNavigate();

  function handleItem(item) {
    navigate(`/product/${item.id}`);
  }

  return (
    <div>
      <h1>Galerie Foto</h1>
      <div className="photo-grid">
        {data.map((photo) => (
          <div
            onClick={() => handleItem(photo)}
            key={photo.id}
            className="photo-card"
          >
            <img src={photo.image} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const { data, isLoading, isError, status, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreadspi.com/products");
      if (!res.ok) console.log(new Error("Network response was not ok"));
      return res.json();
    },
    retry: 2,
  });
  console.log(isFetching);
  console.log(status);
  if (isLoading) return <h1>Loading . . .</h1>;
  if (isError) return <h1>Eroare la încărcare</h1>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/product/:id" element={<ProductPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
