import { useState } from "react";
import '../styles/About.css'
import {FuzzyText} from '../backgrounds/FuzzyText.jsx';
import { LetterGlitch } from '../backgrounds/LetterGlitch.jsx';
import {motion} from 'framer-motion';
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
            <EditProfile mySet={mySet}/>
        </div>
    );
}


    function MyProfile({ profile }) {
      return (
    
    <div className="container-fluid">

    {/* Display user information */}
    {Object.entries({
    Name: profile.name,
    Grade: profile.grade,
    Major: profile.major,
    University: profile.university,
    GraduationYear: profile.graduationYear,
    Hobbies: profile.hobbies
  }).map(([key, value]) => 
    <div key={key} className="row border-bottom border-orange py-3 text-warning">
        <motion.h1 
        initial={{opacity:1, scale:1}}
        animate={{opacity:1, scale:1.15}}
        transition={{duration:0.5*key.length, delay:0.2, repeat: Infinity, repeatType: 'reverse'}}
        className="col-6 hover d-flex justify-content-center"><FuzzyText myColor={'#ffb3269f'} fontSize={'clamp(0.8rem, 2vw, 2.5rem)'} baseIntensity={0.1} hoverIntensity={0.3}>{key}</FuzzyText></motion.h1>
        <h1 style={{fontWeight: 'bold'}} className="col-6"> {value} </h1>
    </div>)}
    </div>);
    }



function EditProfile({ mySet }) {
  return (
    <div className="position-relative flex-column">
      <LetterGlitch glitchColors={['#ffffffb9', '#437034de', '#ffb3269f']}
      className="position-absolute p-4 bottom-0"

      style={{width: '100%'}} />
      <form className="row justify-content-center position-relative ">
        {mySet.map(({ label, value, setter }) => (
          <div className="col-sm-2 col-md-4 col-l p-1 justify-content-center d-flex flex-column" 
            key={label}
            style={{overflow: 'hidden'}}>
            <motion.label 
            initial={{scale:1, opacity:.4, color: 'rgba(255, 208, 0, 0.81)'}}
            animate={{scale:3, opacity:1, color: 'rgba(39, 184, 39, 0.8)'}}
            transition={{duration:0.5, delay:0.2, repeat: Infinity, repeatType: 'reverse'}}
            className="form-label d-flex justify-content-center p-1"
            style={{margin: 0, padding: 0}}
            >{label}</motion.label>
            <input type="text" className="p-3 m-5 text-bg-dark d-flex btn col-5 m-auto hover" value={value} onChange={e => setter(e.target.value)} />
          </div>
        ))}
      </form>
    </div>
  );
}