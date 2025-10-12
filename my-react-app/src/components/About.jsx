import { useState } from "react";
import '../styles/About.css'

export default function About() {
    // State variables for user info
    const [name, setName] = useState("Justin");
    const [grade, setGrade] = useState("F");
    const [major, setMajor] = useState("Computer Science");
    const [university, setUniversity] = useState("College Of Staten Island");
    const [graduationYear, setGraduationYear] = useState("2025");
    const [hobbies, setHobbies] = useState("Coding, Reading, Traveling");

    return (
        <div>
            {/* Display user information and edit form */}
            <div className="row justify-content-around">
                {/* Display user information */}
                {Object.entries({ Name: name, Grade: grade, Major: major, University: university, GraduationYear: graduationYear, Hobbies: hobbies }).map(([key, value]) => (
                    <h1 className="col-5 text-center text-bg-dark text-wrap m-2 p-2" 
                        key={key}
                        style={{ border: '2px solid black', borderRadius: '10px', fontSize: 'clamp(0.8rem, 1.5vw, 2.5rem)' }}
                    >{`${key}: ${value}`}</h1>
                ))}
                {/* Form to edit user information */}
                <div className="col-12 " style={{ border: '2px solid black', borderRadius: '10px', padding: '1rem', marginTop: '1rem', backgroundColor: '#f8f9fa' }}>
                    <h1 className="text-center text-danger" style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: 'bold' }}>Edit My Information via useState</h1>
                    <form className="row justify-content-center dropdown" onSubmit={(e) => e.preventDefault()}>
                        {[
                            //setter is responsible for updating the state variable when the input value changes
                            { label: "Name", value: name, setter: setName },
                            { label: "Grade", value: grade, setter: setGrade },
                            { label: "Major", value: major, setter: setMajor },
                            { label: "University", value: university, setter: setUniversity },
                            { label: "Graduation Year", value: graduationYear, setter: setGraduationYear },
                            { label: "Hobbies", value: hobbies, setter: setHobbies },
                        ].map(({ label, value, setter }) => (
                            <div className="col-6" key={label}>
                                <label className="form-label">{label}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => setter(e.target.value)}
                                />
                            </div>
                        ))}
                    </form>
                </div>
            </div>

        </div>
    );
}