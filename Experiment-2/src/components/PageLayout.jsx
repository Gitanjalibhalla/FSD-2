const PageLayout = ({ title, children }) => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
