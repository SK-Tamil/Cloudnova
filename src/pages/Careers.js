import React from "react";

const openings = [
  { title: "Cloud Solutions Architect", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", location: "Remote", type: "Full-time" },
  { title: "Site Reliability Engineer", location: "Austin, TX", type: "Full-time" },
  { title: "Junior Cloud Consultant", location: "Remote", type: "Contract" },
];

function Careers() {
  return (
    <div className="page">
      <section className="section">
        <h1 className="page-title">Careers</h1>
        <p className="section-text">
          We're always looking for people who care about building reliable,
          well-engineered systems. Take a look at our current openings below.
        </p>

        <div className="grid grid-2">
          {openings.map((job) => (
            <div className="card job-card" key={job.title}>
              <h3>{job.title}</h3>
              <p className="job-meta">{job.location} · {job.type}</p>
              <button type="button" className="btn btn-primary btn-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Careers;
