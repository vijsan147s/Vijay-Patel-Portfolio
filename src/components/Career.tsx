import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Data Scientist </h4>
                <h5><a href="#" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}> Learning & Practice </a></h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Actively developing skills in data science, machine learning, and statistical analysis by working on hands-on projects and continuous learning.              <span style={{color: '#ffd700'}}>Highlights:</span> Developed interactive dashboards and reports that improved business performance by 15%.
            <span style={{color: '#ffd700'}}>Highlights:</span> Completed 2+ data science projects, including predictive modeling and data visualization, demonstrating practical application of skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5><a href="#" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Learning & Practice</a></h5>
              </div>
              <h3>2026–NOW</h3>
            </div>
            <p>
              Worked on real-world and simulated datasets (UPI transactions, e-commerce sales, etc.) using Excel, SQL, and Python to extract meaningful insights and support data-driven decision-making.              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> Data cleaning, visualization, dashboard creation, real-world dataset simulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
