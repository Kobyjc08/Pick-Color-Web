import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Paginator } from "./components/Paginator";
import { Tile } from "./components/Tile";

const URI = "http://localhost:5000/colors";

function App() {
  // Se almacenan los colores
  const [data, setData] = useState([]);
  // La pagina actual
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Se convierte el string en una URL
    let url = new URL(URI);
    // se crean los parametros
    let params = {
      limit: 6,
      page,
    };

    // se agregan los parametros a la URL formateada
    url.search = new URLSearchParams(params).toString();

    // se hace la peticion al back
    fetch(url)
      .then((res) => res.json())
      .then((colors) => {
        console.log(colors);
        setData(colors);
      });
  }, [page]);

  // Si no hay colores cargados se indica que esta en proceso de carga
  if (data.length === 0) return <p>Loading...</p>;

  return (
    <>
      <Header title='Colores' />
      <main className='container mt-4 mb-4'>
        <div className='row row-cols-1 row-cols-md-3 g-2'>
          {data.map((color) => (
            <Tile key={`${color.id}`} {...color} />
          ))}
        </div>
        <Paginator page={page} setPage={setPage} />
      </main>
    </>
  );
}

export default App;
