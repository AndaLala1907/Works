"use client";

import { useState } from "react";

const relatedNews = [
  {
    id: 1,
    smallTitle: "Iranian Hackers Target Critical Infrastructure",
    title:
      "Iranian Hackers Breaching Critical Infrastructure for Credential Theft",
    date: "October 20, 2024",
    description:
      "Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors.",
  },
  {
    id: 2,
    smallTitle: "New Vulnerabilities in Oracle Software",
    title: "CISA Warns of Exploited Oracle Vulnerabilities",
    date: "October 20, 2024",
    description:
      "The Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning about two Oracle vulnerabilities that are currently being exploited in the wild. Organizations are urged to apply patches immediately to mitigate risks.",
  },
  {
    id: 3,
    smallTitle: "Arrest of Notorious Hacker in Brazil",
    title: "Arrest of USDoD Hacker Linked to Major Data Breaches",
    date: "October 20, 2024",
    description:
      "Brazilian authorities have arrested a notorious hacker known as USDoD, linked to significant breaches involving National Public Data and InfraGard. This operation marks a crucial step in combating cybercrime on an international scale.",
  },
];

function NewsPage() {
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  // Toggle bookmark functionality
  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container-fluid main-container-newsletter">
      <div className="row d-flex align-items-stretch h-100">
        {/* Left Sidebar */}
        <div className="col-md-3 py-3">
          <h4 className="text-center related-news mb-4">Related News </h4>
          <div className="row gap-3 mb-5">
            {relatedNews.map((news) => (
              <div className="col-12" key={news.id}>
                <div
                  className="card mb-3 text-black"
                  id="newsletter-card"
                  key={news.id}
                >
                  {/* Bookmark Icon */}
                  <span
                    className="position-absolute top-0 end-0 m-2"
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                      color: bookmarked.includes(news.id) ? "#f39c12" : "#ccc",
                    }}
                    onClick={() => toggleBookmark(news.id)}
                  >
                    &#9646;
                  </span>
                  <div className="card-body">
                    {/* Article Content */}
                    <div className="card-content mt-4">
                      <h6>{news.smallTitle}</h6>
                      <small className="section-headings">{news.date}</small>
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text mt-2">{news.description}</p>
                      <button className="btn btn-primary btn-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contributor Card */}
            <div className="col-12 contributor-card">
              <h4 className="section-headings related-news p-4">
                <b>Want to become a Contributor</b>
              </h4>
              <div className="card text-black">
                <div className="card-body py-4">
                  <form id="newsletter-form">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows={8}
                        placeholder="Tell us Something About Yourself"
                      ></textarea>
                    </div>
                    <button className="btn btn-primary btn-sm">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-1 position-relative pt-5 d-none-lg">
          <div className="vertical-line"></div>
        </div>

        {/* Main Content */}
        <div className="col-md-8 h-100 ">
          <div className="container py-5">
            <section className="summary py-3">
              <h4 className="py-2">
                <b>Summary</b>
              </h4>
              <p>
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </section>

            <section className="introduction py-3">
              <h3 className="py-2">
                <b>Introduction</b>
              </h3>
              <p>
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </section>

            <section className="key-trends py-3">
              <h1 className="py-2">
                <b>Key Trends in Phishing Attacks</b>
              </h1>
              <ol>
                <li className="mb-3">
                  <h5>
                    <b>Spear Phishing Campaigns</b>
                  </h5>
                  <p>
                    Unlike traditional phishing, spear phishing targets specific
                    individuals or organizations. Attackers often gather
                    information from social media or company websites to craft
                    personalized messages that appear legitimate.
                  </p>
                </li>

                <li className="mb-3">
                  <h5>
                    <b>Use of AI and Automation</b>
                  </h5>
                  <p>
                    Cybercriminals are increasingly utilizing AI tools to
                    automate phishing campaigns, making them more efficient and
                    harder to detect. These tools can generate convincing emails
                    that mimic trusted sources.
                  </p>
                </li>

                <li className="mb-3">
                  <h5>
                    <b>Multi-Vector Attacks</b>
                  </h5>
                  <p>
                    Phishing attacks are no longer limited to email. Attackers
                    are now using SMS (smishing), social media platforms, and
                    even voice calls (vishing) to reach potential victims
                    through multiple channels.
                  </p>
                </li>
              </ol>
            </section>

            <section className="case-studies py-3">
              <h1 className="py-2">
                <b>Notable Case Studies</b>
              </h1>
              <h5>
                <span>Case Study 1:</span>
                <b> Targeting Financial Institutions</b>
              </h5>
              <p>
                In early 2024, a major bank fell victim to a sophisticated spear
                phishing attack that compromised customer data. Attackers
                impersonated bank representatives and sent emails requesting
                sensitive information, leading to significant financial losses.
              </p>

              <h5>
                <span>Case Study 2:</span>
                <b> Ransomware via Phishing Links</b>
              </h5>
              <p>
                A healthcare organization experienced a ransomware attack after
                employees clicked on a malicious link in an email disguised as a
                routine update. The attack encrypted critical patient data,
                causing operational disruptions and reputational damage.
              </p>
            </section>

            <section className="strategies py-3">
              <h1 className="py-2">
                <b>Prevention Strategies</b>
              </h1>
              <ol className="">
                <h5 className=" section-headings">
                  <b>
                    To combat the rising threat of phishing attacks,
                    organizations should implement the following strategies:
                  </b>
                </h5>
                <li className="mb-3 section-headings">
                  <h5 className="py-2">Employee Training Programs</h5>
                  <p className="text-black">
                    Regular training sessions on recognizing phishing attempts
                    can empower employees to identify suspicious emails and
                    links. Incorporating simulated phishing exercises can
                    reinforce learning.
                  </p>
                </li>

                <li className="mb-3 section-headings">
                  <h5 className="py-2">Multi-Factor Authentication (MFA)</h5>
                  <p className="text-black">
                    Implementing MFA adds an extra layer of security, making it
                    more difficult for attackers to gain unauthorized access
                    even if credentials are compromised.
                  </p>
                </li>

                <li className="mb-3 section-headings">
                  <h5 className="py-2">Email Filtering Solutions</h5>
                  <p className="text-black">
                    Investing in advanced email filtering solutions can help
                    detect and block phishing emails before they reach
                    employees’ inboxes.
                  </p>
                </li>
              </ol>
            </section>

            <section className="conclusion py-3">
              <h1 className="py-2">
                <b>Conclusion</b>
              </h1>
              <h4>
                <b>
                  As phishing attacks evolve in complexity and frequency,
                  organizations must remain vigilant and proactive in their
                  defense strategies. By understanding the latest trends and
                  implementing robust prevention measures, businesses can
                  significantly reduce their risk of falling victim to these
                  deceptive tactics.
                </b>
              </h4>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
