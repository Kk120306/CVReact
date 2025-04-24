import { useState } from "react";


function Personal({ info, updateInfo}) {
    const [personalData, setPersonalData] = useState(info);

    const handleChange = (e) => {
        const newData = { ...personalData, [e.target.name]: e.target.value };
        setPersonalData(newData);
        updateInfo(newData);
    };

    return (
        <div className="personal-node">
            <div className="form-content">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={personalData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={personalData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={personalData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={personalData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={personalData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={personalData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="github">GitHub</label>
                        <input
                            type="url"
                            id="github"
                            name="github"
                            value={personalData.github}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn</label>
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={personalData.linkedin}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Personal;