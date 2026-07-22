import React from "react";

const services = [
  {
    name: "AWS",
    icon: "☁️",
    desc: "Cloud infrastructure design, migration, and management on Amazon Web Services.",
  },
  {
    name: "Docker",
    icon: "🐳",
    desc: "Containerize applications for consistent, portable environments.",
  },
  {
    name: "Jenkins",
    icon: "🔧",
    desc: "Automated build, test, and deployment pipelines.",
  },
  {
    name: "Kubernetes",
    icon: "☸️",
    desc: "Container orchestration for scalable, resilient workloads.",
  },
  {
    name: "Terraform",
    icon: "🏗️",
    desc: "Infrastructure as code for consistent, repeatable environments.",
  },
  {
    name: "SonarQube",
    icon: "🔍",
    desc: "Continuous code quality and static analysis.",
  },
  {
    name: "Trivy",
    icon: "🛡️",
    desc: "Vulnerability scanning for containers and dependencies.",
  },
];

function Services() {
  return (
    <div className="page">
      <section className="section">
        <h1 className="page-title">Our Services</h1>
        <p className="section-text">
          We help teams design, automate, and secure their infrastructure
          using industry-standard cloud and DevOps tooling.
        </p>

        <div className="grid grid-3">
          {services.map((service) => (
            <div className="card service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
