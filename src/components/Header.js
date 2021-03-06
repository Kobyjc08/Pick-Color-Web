export const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  );
};
