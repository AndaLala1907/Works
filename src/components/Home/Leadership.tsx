"use client";

import { useState } from "react";
import styles from "../../styles/Team.module.css";

function LeadershipTeam() {
  // State to track which card is currently active in the modal
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Card data
  const teamMembers = [
    {
      id: 1,
      name: "Furkan Bajrami",
      title: "CEO & Founder",
      shortbio:
        "Lorem ipsum dolor sit amet consectetur. Arcu nullam habitasse tortor id.",
      bio: [
        "Furkan Bajrami is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master’s degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management.",
        "Passionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats.",
      ],
      image: "/images/team/man in a suite.png",
    },
    {
      id: 2,
      name: "Petar Ninovski",
      title: "Co-Founder & CXX",
      shortbio:
        "Petar has over 10 years of experience in cybersecurity and IT consulting.",
      bio: [
        "Petar Nikovski is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master’s degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management.",
        "Passionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats.",
      ],
      image: "/images/team/man in a suite (1).png",
    },
    {
      id: 3,
      name: "Lena Müller",
      title: "Chief Technology Officer (CTO)",
      shortbio:
        "With over 12 year of experience in cybersecurity and technology development.",
      bio: [
        "Lena Müller is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master’s degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management.",
        "Passionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats.",
      ],
      image: "/images/team/man in a suite (2).png",
    },
  ];

  // Handle opening and closing the modal
  const handleModalOpen = (id: number) => {
    setActiveCard(id); // Set the active card to show in the modal
  };

  const handleModalClose = () => {
    setActiveCard(null); // Reset the active card
  };

  return (
    <div className={`${styles.mainContainer} py-5`}>
      <div className="container text-center w-75 mt-5">
        <div className="mb-5">
          <h3 className="section-headings fw-bold">Our Leadership Team</h3>
          <p className="text-white">
            Meet the leaders behind CGD’s mission to protect businesses from
            evolving cyber threats. With deep expertise in cybersecurity and IT
            consulting, our leadership team drives innovation and ensures the
            highest standards of security for our clients. Scroll down to see
            the faces behind our success.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`col-md-4 mb-4 ${styles.cardContainer}`}
            >
              {/* Small Card */}
              <div className={`${styles.card} card`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top mt-0"
                />
                <div className={`${styles.cardBody} card-body p-3 pb-5`}>
                  <h2 className="py-3">{member.name}</h2>
                  <h5 className="card-title py-3">{member.title}</h5>
                  <p className="card-text py-3">{member.shortbio}</p>
                  <button
                    className={`${styles.expandButton}`}
                    onClick={() => handleModalOpen(member.id)}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className={`${styles.diagonal}`}></div>
              </div>
            </div>
          ))}
        </div>

        <a href="#" type="button" className="bottomLink p-3 pt-5">
          Meet the Rest of the Team
        </a>
      </div>

      {/* Modal */}
      {activeCard && (
        <div className={`modal fade show d-block`} tabIndex={-1}>
          <div className={`modal-dialog modal-xl`}>
            <div className={`${styles.content} modal-content`}>
              <div className={`${styles.modal} modal-body`}>
                <div className="row">
                  {/* Left Side: Card */}
                  <div className="col-lg-4">
                    <div className={`${styles.card} ${styles.cardModal} card`}>
                      <img
                        src={
                          teamMembers.find((member) => member.id === activeCard)
                            ?.image
                        }
                        alt={
                          teamMembers.find((member) => member.id === activeCard)
                            ?.name
                        }
                        className="card-img-top"
                      />
                      <div className="card-body p-3 pb-5">
                        <h2 className="card-title py-3">
                          {
                            teamMembers.find(
                              (member) => member.id === activeCard
                            )?.name
                          }
                        </h2>
                        <h5 className="card-subtitle">
                          {
                            teamMembers.find(
                              (member) => member.id === activeCard
                            )?.title
                          }
                        </h5>
                        <p className="card-text pt-3">
                          {
                            teamMembers.find(
                              (member) => member.id === activeCard
                            )?.shortbio
                          }
                        </p>
                        <button
                          type="button"
                          className={`${styles.closeButton}`}
                          onClick={handleModalClose}
                        >
                          <i className="fa-solid fa-arrow-left"></i>
                        </button>
                      </div>
                      <div className={`${styles.diagonal} mt-0`}></div>
                    </div>
                  </div>

                  {/* Right Side: Extended Description */}
                  <div
                    className={`${styles.bioContainer} col-lg-8 d-flex flex-column align-items-center p-3 py-5`}
                  >
                    <h4>Bio</h4>
                    <div className="d-flex flex-row align-items-center py-4">
                      <p className=" p-1">
                        {
                          teamMembers.find((member) => member.id === activeCard)
                            ?.bio[0]
                        }
                      </p>

                      <p className=" p-1">
                        {
                          teamMembers.find((member) => member.id === activeCard)
                            ?.bio[1]
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeadershipTeam;
