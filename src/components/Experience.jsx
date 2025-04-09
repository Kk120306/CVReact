import { useState } from 'react';

function Experience({ info, updateInfo, onRemove }) {
    const [hidden, setHidden] = useState(false);
    const [experienceData, setExperienceData] = useState(info);

    const handleChange = (e) => {
        const newData = { ...experienceData, [e.target.name]: e.target.value };
        setExperienceData(newData);
        updateInfo(newData);
    };

    return (
        <div className="experience-node">
            <div className="node-header" onClick={() => setHidden(!hidden)}>
                <div>
                    <h2>Experience</h2>
                    <button
                        className="remove-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                    >
                        Remove
                    </button>
                    <span style={{ marginLeft: '8px' }}>{hidden ? '▼' : '▲'}</span>
                </div>
            </div>
            <div className={`form-content ${hidden ? 'hidden' : 'expand'}`}>
                <form>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={experienceData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={experienceData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsibilities">Responsibilities</label>
                        <textarea
                            id="responsibilities"
                            name="responsibilities"
                            value={experienceData.responsibilities}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateFrom">Start Date</label>
                        <input
                            type="date"
                            id="dateFrom"
                            name="dateFrom"
                            value={experienceData.dateFrom || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateUntil">End Date</label>
                        <input
                            type="date"
                            id="dateUntil"
                            name="dateUntil"
                            value={experienceData.dateUntil || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={experienceData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="technologies">Technologies</label>
                        <input
                            type="text"
                            id="technologies"
                            name="technologies"
                            value={experienceData.technologies}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="achievements">Achievements</label>
                        <textarea
                            id="achievements"
                            name="achievements"
                            value={experienceData.achievements}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}