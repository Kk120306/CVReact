import { useState } from 'react';

function Skill({ info, updateInfo, onRemove }) {
    const [hidden, setHidden] = useState(false);
    const [skillData, setSkillData] = useState(info);

    const handleChange = (e) => {
        const newData = { ...skillData, [e.target.name]: e.target.value };
        setSkillData(newData);
        updateInfo(newData);
    };

    return (
        <div className="skill-node">
            <div className="node-header" onClick={() => setHidden(!hidden)}>
                <div>
                    <h2>Skill</h2>
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
                        <label htmlFor="skill">Skill</label>
                        <input
                            type="text"
                            id="skill"
                            name="name"
                            value={skillData.name}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Skill;