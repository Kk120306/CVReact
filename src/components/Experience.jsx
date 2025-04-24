import { useState, useEffect } from 'react';

function Experience({ info, updateInfo, onRemove }) {
    const [hidden, setHidden] = useState(false);
    const [experienceData, setExperienceData] = useState(info);

    useEffect(() => {
        setExperienceData(info);
    }, [info]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperienceData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleBlur = () => {
        updateInfo(experienceData);
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
                    {[
                        { label: 'Company', type: 'text', name: 'company' },
                        { label: 'Position', type: 'text', name: 'position' },
                        { label: 'Responsibilities', type: 'textarea', name: 'responsibilities' },
                        { label: 'Start Date', type: 'date', name: 'dateFrom' },
                        { label: 'End Date', type: 'date', name: 'dateUntil' },
                        { label: 'Location', type: 'text', name: 'location' },
                        { label: 'Technologies', type: 'text', name: 'technologies' },
                        { label: 'Achievements', type: 'textarea', name: 'achievements' },
                    ].map(({ label, type, name }) => (
                        <div key={name} className="form-group">
                            <label htmlFor={name}>{label}</label>
                            {type === 'textarea' ? (
                                <textarea
                                    id={name}
                                    name={name}
                                    value={experienceData[name] || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            ) : (
                                <input
                                    type={type}
                                    id={name}
                                    name={name}
                                    value={experienceData[name] || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            )}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}

export default Experience;
