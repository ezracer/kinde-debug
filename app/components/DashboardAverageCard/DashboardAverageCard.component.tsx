const DashboardAverageCard = ({header, content, footer}: any) => {
  return (
    <div className="dashboard-average-card">
      <div className="header">{header}</div>
      <div className="content">{content}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export { DashboardAverageCard };
