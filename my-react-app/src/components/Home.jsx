
import '../styles/Home.css'
import { motion } from "framer-motion";
import { ElectricBorder } from '../backgrounds/ElectricBorder.jsx';
import { useState } from 'react';
import '../styles/Navigation.css'
// Home component displaying user info and allowing edits

export function Home() {

    // Objectives for the project for a clear understanding of requirements
    const Objectives = [
       { id: 1, obj: "Pass Class ", desc: ["Attend all classes", "Complete all assignments", "Make it user friendly!"], complete: false },
       { id: 2, obj: "Component-Based Architecture", desc: ["Break down your UI into multiple, reusable functional components", "Demonstrate a clear parent-child component hierarchy" ], complete: true },
       { id: 3, obj: "JSX Syntax", desc: ["Utilize JSX effectively to define your component's UI structure"], complete: false },
       { id: 4, obj:"State Management useState", desc: ["Implement and manage component-specific data using the useState hook.", "Show how state changes trigger UI updates"], complete: false },
       { id: 5, obj:"Props for Data Passing", desc: ["Pass data from parent components to child components using props","Demonstrate how props influence child component rendering" ], complete: false },
       { id: 6, obj: "Event Handling", desc: ["Implement at least one interactive element that responds to user input (e.g., a button click, form submission, input change) using React's event system."], complete: false },
       { id: 7, obj: "Basic UI Elements", desc: ["Include various HTML elements styled appropriately within your React components."], complete: false },
       { id: 8, obj: "Git & GitHub", desc: ["Initialize a Git repository for your project", "Make regular, meaningful commits with clear commit messages.", "Push your code to a public GitHub repository."], complete: false },
       { id: 9, obj: "Deployment", desc: ["Deploy your React application using a service like Netlify.", "The live URL must be functional and accessible."], complete: false }
    ]
    //lets have a button which if clicked turns the objectives into completed
    const [completed, setCompleted] = useState(Objectives);
    const toggleComplete = (id) => {
        setCompleted(prevState =>
            prevState.map(obj =>
                obj.id === id ? { ...obj, complete: !obj.complete } : obj
            )
        )
    }

    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">   
                <div className="objectives d-flex flex-wrap justify-content-center electric-border">
                {completed.map(({id, obj, desc, complete}) => (
                    <motion.div 
                    //re-mount when complete changes! get the orignal key plus complete status
                        key={`${id}-${complete}`}
                        //My first time using motion, I wanted something creative!
                        //So far what i know is i need a intital value, an animate value, and a transition value
                        initial={{opacity: 0, scale: 0.1, boxShadow: complete ? "0px 0px 0px 0px rgba(0, 240, 0, 0.5)" : "0px 0px 0px 0px rgba(240, 0, 0, 0.5)" }} //can also include x and y for position, scale, rotate, etc
                        whileHover={{ scale: 1.24, zIndex: 1, boxShadow: {repeat: Infinity, duration: .5, repeatType: "reverse", delay:.7} }} //when hovered, scale up a bit
                        animate={{ opacity: 1, scale: 1, boxShadow: complete ? "0px 0px 10px 10px rgba(0, 240, 0, 0.5)" : "0px 0px 10px 10px rgba(240, 0, 0, 0.5)" }} //Same as above
                        transition={{ duration: .7, delay: id * .3, boxShadow: { repeat: Infinity, duration: .5, repeatType: "reverse", delay:.7} }} //duration is how long it takes, delay is how long to wait before starting
                        //For above, lets say id of 1 
                        //delay = 1 * .3 = .3 seconds, .6, .9, 1.2, etc
                        //So each objective will appear one after another

                        className="objectives-card col-sm-12 col-md-4 col-lg-3 text-bg-dark m-4 p-0 electric-border position-relative " //boxshadow to make it pop
                        style={{ border: '2px solid black', borderRadius: '10px', zIndex:-1 }}>
                        <ElectricBorder thickness={.1} color={complete ? '#00F000' : '#F00000'} speed={1.0} chaos={3} className="w-100 h-100 onHover" 
                        >
                            <div className="text-center p-3">
                                <div>
                                    {/* Top border with spinner indicating completion status */}
                                    <span className={`spinner-grow ${complete ? 'text-success' : 'text-danger'}`} 
                                    style={{width: 'clamp(2rem, 3rem, 4rem)', height: 'clamp(2rem, 3rem, 4rem)'}}></span>
                                </div>
                                {/* Display objective with decorative parentheses */}
                                <span className="rainbow" style={{fontSize: 'clamp(1.5rem, 2rem, 3rem)'}}>{obj}</span>
                            </div>
                            <ul>
                                {/* List each description item */}
                                {desc.map((item, index) => (
                                    <li
                                        key={index} style={{fontSize: 'clamp(1rem, 1.2rem, 2rem)'}}> {complete ? '🧹': '☢️'}{item} </li>
                                ))}
                            </ul>
                                <div className='d-flex justify-content-center pb-3'>
                                <button
                                className={`btn ${complete ? 'btn-success' : 'btn-danger'}`}
                                onClick={() => toggleComplete(id)}
                                >{`${complete ? 'Finished!' : 'Complete'} `}
                                </button>
                                </div>
                        </ElectricBorder>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    );
}