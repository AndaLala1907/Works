"use client";

import { useState } from "react";

export default function Jobs() {
  const jobsData = [
    {
      id: 1,
      date: "April 2024",
      title: "Cybersecurity Analyst",
      description:
        "Join our team as a Cybersecurity Analyst, where you will monitor and analyze security systems to identify vulnerabilities and respond to incidents, ensuring our organization's data remains secure.",
      type: "Full-Time",
      mode: ["On-Site", "Hybrid"],
      salary: "30k-50k",
    },
    {
      id: 2,
      date: "April 2024",
      title: "Security Engineer",
      description:
        "We are seeking a Security Engineer to design and implement robust security solutions that protect our infrastructure and data from cyber threats.Your expertise will be crucial in developing innovative security architectures and staying ahead of evolving risks.",
      type: "Full-Time",
      mode: ["On-Site", "Hybrid"],
      salary: "50k-80k",
    },
    {
      id: 3,
      date: "May 2024",
      title: "Penetration Tester",
      description:
        "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
      type: "Part-Time",
      mode: ["On-Site", "Online"],
      salary: "30k-50k",
    },
    {
      id: 4,
      date: "May 2024",
      title: "Incident Response Specialist",
      description:
        "Join us as an Incident Response Specialist, where you will manage and respond to security incidents, conducting investigations and implementing strategies to mitigate future threats.",
      type: "Hybrid",
      mode: ["Hybrid", "Online"],
      salary: "80k+",
    },
    {
      id: 5,
      date: "1 June, 2024",
      title: "Threat Intelligence Analyst",
      description:
        "We are looking for a Threat Intelligence Analyst to gather and analyze threat data, helping us stay ahead of emerging cyber threats and strengthen our defense strategies.",
      type: "Hybrid",
      mode: ["Hybrid", "Online"],
      salary: "80k+",
    },
    {
      id: 6,
      date: "10 June, 2024",
      title: "Information Security Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure.",
      type: "Hybrid",
      mode: ["On-Side", "Online"],
      salary: "50k-80k",
    },
    {
      id: 7,
      date: "10 November, 2024",
      title: "Information Security Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure.",
      type: "Hybrid",
      mode: ["On-Side", "Online"],
      salary: "50k-80k",
    },
    {
      id: 8,
      date: "14 September, 2024",
      title: "Information Security Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure.",
      type: "Hybrid",
      mode: ["On-Side", "Online"],
      salary: "50k-80k",
    },
    {
      id: 9,
      date: "August, 2024",
      title: "Information Security Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure.",
      type: "Hybrid",
      mode: ["On-Side", "Online"],
      salary: "50k-80k",
    },
    {
      id: 10,
      date: "1 December, 2024",
      title: "Information Security Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure.",
      type: "Hybrid",
      mode: ["On-Side", "Online"],
      salary: "50k-80k",
    },
  ];

  const [filter, setFilter] = useState({
    title: "",
    salary: "",
    date: "",
  });

  const [jobs, setJobs] = useState(jobsData); // Use state for filtering

  const handleFilterChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filter.title
        ? job.title.toLowerCase().includes(filter.title.toLowerCase())
        : true) &&
      (filter.salary ? job.salary.includes(filter.salary) : true) &&
      (filter.date ? job.date === filter.date : true)
    );
  });

  const getUniqueMonths = () => {
    const months = jobs.map((job) => job.date);
    return [...new Set(months)];
  };

  const getUniqueSalaries = () => {
    const salary = jobs.map((job) => job.salary);
    return [...new Set(salary)];
  };

  return (
    <div className="container jobs mt-5 ">
      <div className="main-heading py-5">
        <h1 className="text-center mb-4">
          <span>Join Our Team</span> of Cybersecurity Innovators
        </h1>
        <h4 className="text-center">
          Protecting the Digital World, One Threat at a Time
        </h4>
      </div>
      <p></p>

      {/* Filters */}
      <div className="row mb-4 w-75 mx-auto">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control bg-white text-dark job-input"
            name="title"
            placeholder="Job Title"
            value={filter.title}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select job-select"
            name="salary"
            value={filter.salary}
            onChange={handleFilterChange}
          >
            <option value="">Salary Range</option>
            {getUniqueSalaries().map((salary, index) => (
              <option key={index} value={salary}>
                {salary}
              </option>
            ))}
            ;
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select job-select"
            typeof="date"
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
          >
            <option value="">Posted Date</option>
            {getUniqueMonths().map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
            ;
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="col-md-6 mb-4" key={job.id}>
              <div className="card h-100 shadow p-4">
                <div className="card-body">
                  <small className="bg-white text-dark p-2">{job.date}</small>
                  <h2 className="card-title">
                    <span>{job.title.split(" ").slice(0, -1).join(" ")} </span>
                    {job.title.split(" ").slice(-1)}
                  </h2>
                  <p className="card-text">{job.description}</p>
                  <p className="fw-bold">Salary:{job.salary}</p>
                  <div className="d-flex job-mode justify-content-between pt-3">
                    <span>{job.type}</span>
                    <span>{job.mode[0]}</span>
                    <span>{job.mode[1]}</span>
                  </div>
                </div>
                <div className="w-100 px-3 py-2">
                  <button className="btn btn-primary w-100">Apply</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
