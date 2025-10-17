import { useState } from "react";
import '../styles/About.css'

export function About() {
    // State variables for user info
    //lets use a usestate hook to manage the user profile information, instead of multiple useState hooks, we can use a single state object to hold all the user information
    const [profile, setProfile] = useState({
    name: "Justin",
    grade: "F",
    major: "Computer Science",
    university: "College Of Staten Island",
    graduationYear: "2025",
    hobbies: "Coding, Reading, Traveling",
    });

    // Array of objects to dynamically create input fields
    //mySet array holds the label, current state value, and setter function for each profile attribute
    //value is used to bind the input field to the corresponding state variable
    //The setter function updates the specific attribute in the profile state object while preserving the other attributes using the spread operator (...profile)
    const mySet = [
        //setter is responsible for updating the state variable when the input value changes
        //has the ability to handle changes to multiple fields in a single state object
        //instead of having separate state variables and setter functions for each attribute, we can manage all attributes within a single state object
        { label: "Name", value: profile.name, setter: (value) => setProfile(p => ({ ...p, name: value }))},
        { label: "Grade", value: profile.grade, setter: (value) => setProfile(p => ({ ...p, grade: value }))},
        { label: "Major", value: profile.major, setter: (value) => setProfile(p => ({ ...p, major: value }))},
        { label: "University", value: profile.university, setter: (value) => setProfile(p => ({ ...p, university: value }))},
        { label: "Graduation Year", value: profile.graduationYear, setter: (value) => setProfile(p => ({ ...p, graduationYear: value }))},
        { label: "Hobbies", value: profile.hobbies, setter: (value) => setProfile(p => ({ ...p, hobbies: value }))},
    ];
    
    return (
        <div>
            {/* Display user information and edit form */}
            <MyProfile profile={profile} />
            {/* Form to edit user information */}
            <EditProfile mySet={mySet} />
        </div>
    );
}


    function MyProfile({ profile }) {
      return (
    <div className="container-fluid">
    <div className="col-10 d-flex justify-content-center p-0 b-0 flex-row flex-wrap m-auto border border-info rounded border-4 background-spin">
    {/* Display user information */}
    {Object.entries({
    Name: profile.name,
    Grade: profile.grade,
    Major: profile.major,
    University: profile.university,
    GraduationYear: profile.graduationYear,
    Hobbies: profile.hobbies
  }).map(([key, value]) => 
  <h1 className={`col-12 text-center text-bg-dark text-wrap m-0 p-2 justify-content-center d-flex flex-row ${key === 'Name' ? 'rounded-end-circle' : ''} ${key === 'Hobbies' ? 'rounded-start-circle' : ''}`} 
    key={key} 
    style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: 'clamp(0.8rem, 1.5vw, 2.5rem)',
    }}>
        <h1 style={{textDecoration: 'underline'}} className="col-6 hover"> {key}</h1>
        <h1 style={{fontWeight: 'bold'}} className="col-6 hover"> {value} </h1>
    </h1>)}
    </div>
    </div>);
    }



function EditProfile({ preventDefault, mySet }) {
  return (
    <div className="col-12 " style={{
      border: '2px solid black',
      borderRadius: '10px',
      padding: '1rem',
      marginTop: '1rem',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 className="text-center text-danger" style={{
        fontSize: 'clamp(1rem, 2vw, 2rem)',
        fontWeight: 'bold'
      }}>
        Edit My Information via useState
      </h1>
      <form className="row justify-content-center" onSubmit={preventDefault}>
        {mySet.map(({ label, value, setter }) => (
          <div className="col-6" key={label}>
            <label className="form-label">{label}</label>
            <input type="text" className="form-control" value={value} onChange={e => setter(e.target.value)} />
          </div>
        ))}
      </form>
    </div>
  );
}