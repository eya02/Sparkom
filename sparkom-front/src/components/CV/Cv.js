import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Cv.css";
import Experience from "./Experience";
import Projects from "./Projects";
import profilePic from "../../assets/img/author-main1.jpg";
import Skill from "./Skill";
import Education from "./Education";
import Languages from "./Languages";
import SocialLinks from "./SocialLinks";
import NavBar from "../NavBar/NavBar";

export default function Cv() {
  const [experience, setExperience] = useState([<Experience />]);
  const handleClick = () => {
    setExperience((current) => [...current, <Experience />]);
  };
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="main-wrapper">
        <div className="container px-3 px-lg-5">
          <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
            <div className="resume-header">
              <div className="row align-items-center">
                <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                  <h2 className="resume-name mb-0 text-uppercase">
                    Aziz Arfaoui
                  </h2>
                  <div className="resume-tagline mb-3 mb-md-0">
                    Software Engineering Student
                  </div>
                </div>
                {/*//resume-title*/}
                <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                  <ul className="list-unstyled mb-0 ">
                    <li className="mb-2">
                      <i className="fas fa-download fa-fw fa-lg mr-2"></i>
                      <Link className="resume-link" to="/pdf">
                        Download PDF
                      </Link>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-phone-square fa-fw fa-lg mr-2 " />
                      <a className="resume-link" href="tel:#">
                        0123 4567 890
                      </a>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-envelope-square fa-fw fa-lg mr-2" />
                      <a className="resume-link" href="mailto:#">
                        aziz.arfaoui@gmail.com
                      </a>
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-globe fa-fw fa-lg mr-2" />
                      <a
                        className="resume-link"
                        href="https://www.azizarfaoui.com"
                      >
                        www.azizarfaoui.com
                      </a>
                    </li>
                    <li className="mb-0">
                      <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2" />
                      Tunis
                    </li>
                  </ul>
                </div>
                {/*//resume-contact*/}
              </div>
              {/*//row*/}
            </div>
            {/*//resume-header*/}
            <hr />
            <div className="resume-intro py-3">
              <div className="media flex-column flex-md-row align-items-center">
                <img
                  className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                  src={profilePic}
                  alt="avatar"
                />
                <div className="media-body text-left">
                  <p className="mb-0">
                    Summarise your career here. . Donec quam felis, ultricies
                    nec, pellentesque eu. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae
                    sapien ut libero venenatis faucibus. Nullam quis ante. Etiam
                    sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                    fringilla mauris sit amet nibh.{" "}
                  </p>
                </div>
                {/*//media-body*/}
              </div>
            </div>
            {/*//resume-intro*/}
            <hr />
            <div className="resume-body">
              <div className="row">
                <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                  <section className="work-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Work Experiences
                    </h3>

                    {/*//Experience*/}
                    {experience}
                    {/*//Experience*/}
                    <button
                      className="btn btn-primary"
                      style={{ width: 170 }}
                      onClick={handleClick}
                    >
                      <i className="fas fa-plus-circle pr-2"></i>
                      Add Experience
                    </button>
                  </section>

                  {/*//work-section*/}
                  <section className="project-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Projects
                    </h3>

                    {/*//item*/}
                    <Projects />

                    {/*//item*/}
                    <button
                      className="btn btn-primary btn-xs"
                      style={{ width: 170 }}
                    >
                      <i className="fas fa-plus-circle pr-2" />
                      Add Project
                    </button>
                  </section>
                  {/*//project-section*/}
                </div>
                {/*//resume-main*/}
                <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Skills
                      <i
                        className="fas fa-plus-circle  ml-2 "
                        style={{
                          fontSize: 15,
                          cursor: "pointer",
                          position: "absolute",
                          top: 4.5,
                        }}
                      />
                    </h3>

                    <div className="item">
                      <ul className="list-unstyled resume-skills-list">
                        <Skill name="Javascript" confirmed={true} />
                        <Skill name="React" confirmed={false} />
                      </ul>
                    </div>
                    {/*//item*/}
                  </section>
                  {/*//skills-section*/}
                  <section className="education-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Education
                      <i
                        className="fas fa-plus-circle  ml-2 "
                        style={{
                          fontSize: 15,
                          cursor: "pointer",
                          position: "absolute",
                          top: 4.5,
                        }}
                      />
                    </h3>
                    <ul className="list-unstyled resume-education-list">
                      <Education
                        degree="MSc in Computer Science"
                        place="Esprit"
                        startDate="2017"
                        endDate="Present"
                      />
                    </ul>
                  </section>
                  {/*//education-section*/}

                  {/*//Languages-section*/}
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Languages
                      <i
                        className="fas fa-plus-circle  ml-2 "
                        style={{
                          fontSize: 15,
                          cursor: "pointer",
                          position: "absolute",
                          top: 4,
                        }}
                      />
                    </h3>
                    <ul className="list-unstyled resume-lang-list">
                      <Languages language="English" level="(Native)" />
                      <Languages language="Spanish" level="(Professional)" />
                    </ul>
                  </section>
                  {/*//certificates-section*/}
                  <section className="skills-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">
                      Interests
                      <i
                        className="fas fa-plus-circle  ml-2 "
                        style={{
                          fontSize: 15,
                          cursor: "pointer",
                          position: "absolute",
                          top: 4,
                        }}
                      />
                    </h3>
                    <ul className="list-unstyled resume-interests-list mb-0">
                      <li className="mb-2">Climbing</li>
                      <li className="mb-2">Snowboarding</li>
                      <li className="mb-2">Photography</li>
                      <li>Travelling</li>
                    </ul>
                  </section>
                  {/*//certificates-section*/}
                </aside>
                {/*//resume-aside*/}
              </div>
              {/*//row*/}
            </div>
            {/*//resume-body*/}
            <hr />
            <div className="resume-footer text-center">
              <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                <SocialLinks
                  link="https://linkedin.com"
                  username="@Github name"
                  icon="fab fa-github-square fa-2x mr-2"
                />
                <SocialLinks
                  link="https://linkedin.com"
                  username="@Linkedin name"
                  icon="fab fa-linkedin fa-2x mr-2"
                />
                <SocialLinks
                  link="https://twitter.com"
                  username="@twittername"
                  icon="fab fa-twitter-square fa-2x mr-2"
                />
              </ul>
            </div>
            {/*//resume-footer*/}
          </article>
        </div>
        {/*//container*/}
      </div>
    </>
  );
}
