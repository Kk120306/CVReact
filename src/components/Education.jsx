import { useState } from 'react';


function Education({ info, updateInfo, onRemove }) {
    const [hidden, setHidden] = useState(false);
    const [educationData, setEducationData] = useState(info);

    const handleChange = (e) => {
        const newData = { ...educationData, [e.target.name]: e.target.value };
        setEducationData(newData);
        updateInfo(newData);
    };

    return (
        <div className="education-node">
            <div className="node-header" onClick={() => setHidden(!hidden)}>
                <h2>Education</h2>
                <div>
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
                        <label htmlFor="school">School</label>
                        <input
                            type="text"
                            id="school"
                            name="school"
                            value={educationData.school}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={educationData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={educationData.startDate || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={educationData.endDate || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={educationData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="achievements">Achievements</label>
                        <textarea
                            id="achievements"
                            name="achievements"
                            value={educationData.achievements}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Education;
