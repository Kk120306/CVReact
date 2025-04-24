import './App.css'
import { useState } from 'react'
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import whiteGithubIcon from './assets/github_white.svg';
import Education from './components/Education';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Skill from './components/Skill';
import './styles/Input.css';


function App() {

    // Personal Info State 
    const [personalInfo, setPersonalInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        phone: '+1234567890',
        city: 'Vancover',
        country: 'Canada',
        github: 'https://www.github.com/johndoe',
        linkedin: 'https://www.linkedin.com/johndoe'
    })

    // Education State 
    const [education, setEducation] = useState([
        {
            id: 1,
            school: "University of British Columbia",
            title: "Bachelor of Science",
            startDate: "2022",
            endDate: "Present",
            country: "Canada",
            achievements: "Machine Learning Research Assistant, Dean's List"
        },
        {
            id: 2,
            school: "Brentwood High School",
            title: "IB Diploma",
            startDate: "2018",
            endDate: "2022",
            country: "Singapore",
            achievements: "Dean's List/Presidents Award 2022"
        }
    ])

    // Expereince State
    const [experience, setExperience] = useState([
        {
            id: 1,
            company: "Google",
            position: "Senior Software Engineer",
            responsibilities: "Led a team of 5 developers in building and maintaining cloud-based applications",
            dateFrom: "2020",
            dateUntil: "Present",
            location: "Mountain View, CA",
            technologies: "React, Node.js, Google Cloud Platform, Kubernetes",
            achievements: [
                "Reduced application load time by 40% through optimization",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Mentored 3 junior developers who were promoted to mid-level"
            ]
        },
        {
            id: 2,
            company: "Microsoft",
            position: "Software Engineer",
            responsibilities: "Developed and maintained enterprise-level web applications",
            dateFrom: "2018",
            dateUntil: "2020",
            location: "Redmond, WA",
            technologies: "React, TypeScript, Azure, Docker",
            achievements: [
                "Developed key features used by 1M+ users",
                "Improved test coverage from 65% to 90%",
                "Received Excellence Award for outstanding performance"
            ]
        }
    ]);

    // Skills State 
    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "React",
        },
        {
            id: 3,
            name: "Node.js",
        },
        {
            id: 4,
            name: "Python",
        },
        {
            id: 5,
            name: "Java",
        }
    ]);

    const addEducation = () => {
        setEducation([...education, {
            id: education.length + 1,
            school: "",
            title: "",
            startDate: "",
            endDate: "",
            country: "",
            achievements: ""
        }])
    }

    const addExperience = () => {
        setExperience([...experience, {
            id: experience.length + 1,
            company: "",
            position: "",
            responsibilities: "",
            dateFrom: "",
            dateUntil: "",
            location: "",
            technologies: "",
            achievements: [""]
        }])
    }

    const addSkill = () => {
        setSkills([...skills, {
            id: skills.length + 1,
            name: "",
        }])
    }

    const removeEducation = (id) => {
        if (education.length > 1) {
            setEducation(education.filter(edu => edu.id !== id))
        }
    }

    const removeExperience = (id) => {
        if (experience.length > 1) {
            setExperience(experience.filter(exp => exp.id !== id))
        }
    }

    const removeSkill = (id) => {
        if (skills.length > 1) {
            setSkills(skills.filter(skill => skill.id !== id))
        }
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-logo">Resume Builder</h1>
                    <a
                        href="https://github.com/Kk120306"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                        style={{ textDecoration: "none" }}
                    >
                        <p>Kk120306</p>
                        <img src={whiteGithubIcon} alt="github" width="20px" />
                    </a>
                </header>

                <div className="App-container">

                    {/* Form Input */}
                    <div className="Form-container">
                        {/* Personal Info */}
                        <div className="Personal-container">
                            <div className="Personal-header">
                                <h2 className="form-head">Personal Info</h2>
                                <Personal
                                    key={1}
                                    info={personalInfo}
                                    updateInfo={(newData) => {
                                        setPersonalInfo({ ...personalInfo, ...newData });
                                    }}
                                />
                            </div>
                        </div>

                        {/* Education Info */}

                        <div className="Education-container">
                            <div className="Education-header">
                                <h2 className="form-head">Education</h2>
                                <button className="add-btn" type="button" onClick={addEducation}>
                                    Add Education
                                </button>
                            </div>
                            <div className="map">
                                {education.map(edu => (
                                    <Education
                                        key={edu.id}
                                        info={edu}
                                        updateInfo={(newData) => {
                                            setEducation(education.map(e =>
                                                e.id === edu.id ? { ...e, ...newData } : e
                                            ));
                                        }}
                                        onRemove={() => removeEducation(edu.id)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="Experience-container">
                            <div className="Experience-header">
                                <h2 className="form-head">Experience</h2>
                                <button className="add-btn" type="button" onClick={addExperience}>
                                    Add Experience
                                </button>
                            </div>
                            <div className="map">
                                {experience.map(exp => (
                                    <Experience
                                        key={exp.id}
                                        info={exp}
                                        updateInfo={(newData) => {
                                            setExperience(experience.map(e =>
                                                e.id === exp.id ? { ...e, ...newData } : e
                                            ));
                                        }}
                                        onRemove={() => removeExperience(exp.id)}

                                    />
                                ))}
                            </div>
                        </div>

                        <div className="Skills-container">
                            <div className="Skills-header">
                                <h2 className="form-head">Skills</h2>
                                <button className="add-btn" type="button" onClick={addSkill}>
                                    Add Skill
                                </button>
                            </div>
                            {/* Skills Map all TODO */}
                            <div className="Skill-map">
                                {skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        info={skill}
                                        updateInfo={(newData) => {
                                            setSkills(skills.map(s =>
                                                s.id === skill.id ? { ...s, ...newData } : s
                                            ));
                                        }}
                                        onRemove={() => removeSkill(skill.id)}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </div>


                    {/* Resume Preview */}
                    <div className="Preview-section">
                        <div className="Cv-container">
                            <div className="Cv-header">
                                <h1>{personalInfo.firstName + " " + personalInfo.lastName}</h1>
                                <p className="Header-location">
                                    {personalInfo.city + ", " + personalInfo.country}
                                </p>
                                <div className="Header-contact">
                                    <p>{personalInfo.phone}</p>
                                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                                        <p>{personalInfo.email}</p>
                                    </a>
                                    {personalInfo.github &&
                                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                            <img src={githubIcon} alt="github" width="50px" />
                                        </a>
                                    }
                                    {personalInfo.linkedin &&
                                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img src={linkedinIcon} alt="linkedin" width="50px" />
                                        </a>

                                    }
                                </div>
                            </div>

                            <div className="Cv-education">
                                <h2>Education</h2>
                                {education.map(edu => (
                                    <div key={edu.id} className="Education-item">
                                        <h3>{edu.school}</h3>
                                        <p>{edu.title}</p>
                                        <p>{edu.startDate + " - " + edu.endDate}</p>
                                        <p>{edu.country}</p>
                                        <p>{edu.achievements}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="Cv-experience">
                                <h2>Experiences</h2>
                                {experience.map(exp => (
                                    <div key={exp.id} className="Experience-item">
                                        <h3>{exp.company}</h3>
                                        <p>{exp.position}</p>
                                        <p>{exp.dateFrom + " - " + exp.dateUntil}</p>
                                        <p>{exp.location}</p>
                                        <p>{exp.responsibilities}</p>
                                        <p>{exp.technologies}</p>
                                        <ul>
                                            {(Array.isArray(exp.achievements) ? exp.achievements : [exp.achievements]).map((ach, index) => (
                                                <li key={index}>{ach}</li>
                                            ))}
                                        </ul>

                                    </div>
                                ))}
                            </div>

                            <div className="Cv-skills">
                                <h2>Skills</h2>
                                <div className="Skill-cotnainer">
                                    {skills.map(skill => (
                                        <div key={skill.id} className="Skill-item">
                                            <p>{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
