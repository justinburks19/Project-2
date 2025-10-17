
import '../styles/Home.css'
import { motion } from "framer-motion";
// Home component displaying user info and allowing edits
export function Home() {
    // Get the current date and year
    const date = new Date();
    const year = date.getFullYear();
    // Objectives for the project for a clear understanding of requirements
    const Objectives = [
       { id: 1, obj: "Component-Based Architecture", desc: ["Break down your UI into multiple, reusable functional components", "Demonstrate a clear parent-child component hierarchy" ], complete: true },
       { id: 2, obj: "JSX Syntax", desc: ["Utilize JSX effectively to define your component's UI structure"], complete: false },
       { id: 3, obj:"State Management useState", desc: ["Implement and manage component-specific data using the useState hook.", "Show how state changes trigger UI updates"], complete: false },
       { id: 4, obj:"Props for Data Passing", desc: ["Pass data from parent components to child components using props","Demonstrate how props influence child component rendering" ], complete: false },
       { id: 5, obj: "Event Handling", desc: ["Implement at least one interactive element that responds to user input (e.g., a button click, form submission, input change) using React's event system."], complete: false },
       { id: 7, obj: "Basic UI Elements", desc: ["Include various HTML elements styled appropriately within your React components."], complete: false },
       { id: 8, obj: "Git & GitHub", desc: ["Initialize a Git repository for your project", "Make regular, meaningful commits with clear commit messages.", "Push your code to a public GitHub repository."], complete: false },
       { id: 9, obj: "Deployment", desc: ["Deploy your React application using a service like Netlify.", "The live URL must be functional and accessible."], complete: false }
    ]
    return (
        <div>
            <main className="container-fluid row justify-content-around">
            
                <div className="objectives row justify-content-center">
                {Objectives.map(({id, obj, desc, complete}) => (
                    <motion.div 
                    //My first time using motion, I wanted something creative!
                    //So far what i know is i need a intital value, an animate value, and a transition value
                    initial={{ opacity: 0, scale: 0.1 }} //can also include x and y for position, scale, rotate, etc
                    animate={{ opacity: 1, scale: 1 }} //Same as above
                    transition={{ duration: 3, delay: id * .3}} //duration is how long it takes, delay is how long to wait before starting
                    //For above, lets say id of 1 
                    //delay = 1 * .3 = .3 seconds, .6, .9, 1.2, etc
                    //So each objective will appear one after another
                    
                    key={id} className="objectives-card col-5 m-2 p-2 text-bg-dark" 
                    style={{ border: '2px solid black', borderRadius: '10px' }}>
                        <div className="text-center">
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
                                    key={index} style={{fontSize: 'clamp(1rem, 1.2rem, 2rem)'}}> {item} </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
                </div>
            </main>
        </div>
    );
}