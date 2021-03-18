// Componente que renderiza los tiles como se desean
export const Tile = ({ yearcreate, colorname, colorvalue, colorpantone }) => {
  return (
    <div className='col'>
      <div
        className='card text-white mb-3 p-2 d-flex flex-column'
        style={{ background: colorvalue }}>
        <div>{yearcreate}</div>
        <h1 className='tile__title-container text-center'>
          <p className='tile__title-name'>{colorname}</p>
          <p className='tile__title-value'>{colorvalue}</p>
        </h1>
        <div className='text-end'>{colorpantone}</div>
      </div>
    </div>
  );
};
