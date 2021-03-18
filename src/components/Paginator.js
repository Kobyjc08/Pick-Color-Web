// Componente que recibe la pagina actual y la funciona que cambia la pagina
export const Paginator = ({ page, setPage }) => {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li
          className={`page-item ${page === 1 && "disabled"}`}
          onClick={() => setPage((page) => page - 1)}>
          <span className='page-link'>Previous</span>
        </li>
        <li className='page-item' onClick={() => setPage((page) => page + 1)}>
          <span className='page-link'>Next</span>
        </li>
      </ul>
    </nav>
  );
};
