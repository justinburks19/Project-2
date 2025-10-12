import { useState } from "react";
import '../styles/Home.css'
// Home component displaying user info and allowing edits
function Home() {
    // Get the current date and year
    const date = new Date();
    const year = date.getFullYear();
    // Objectives for the project for a clear understanding of requirements
    const Objectives = [
       { id: 1, obj: "Component-Based Architecture", desc: ["Break down your UI into multiple, reusable functional components", "Demonstrate a clear parent-child component hierarchy" ] },
       { id: 2, obj: "JSX Syntax", desc: ["Utilize JSX effectively to define your component's UI structure"] },
       { id: 3, obj:"State Management (useState)", desc: ["Implement and manage component-specific data using the useState hook.", "Show how state changes trigger UI updates"] },
       { id: 4, obj:"Props for Data Passing", desc: ["Pass data from parent components to child components using props","Demonstrate how props influence child component rendering" ]},
       { id: 5, obj: "Event Handling", desc: ["Implement at least one interactive element that responds to user input (e.g., a button click, form submission, input change) using React's event system."] },
       { id: 7, obj: "Basic UI Elements", desc: ["Include various HTML elements styled appropriately within your React components."]},
       { id: 8, obj: "Git & GitHub", desc: ["Initialize a Git repository for your project", "Make regular, meaningful commits with clear commit messages.", "Push your code to a public GitHub repository."]},
       { id: 9, obj: "Deployment", desc: ["Deploy your React application using a service like Netlify.", "The live URL must be functional and accessible."] }
    ]
    return (
        <div>
            <header>
                <p className="bigger text-center"> Feel free to check out my page and all the tabs above!</p>
            </header>
            <main className="container-fluid row justify-content-around">
            
                <h1 className="col-12 text-center ">Welcome To <span style={{textDecoration: 'underline' }}>Project 2</span> <span className="text-danger" onClick={() => alert("Hello Professor!")} style={{ cursor: 'pointer' }}> Professor!</span></h1>
                <h1 className="col-4 text-center">Date: {date.toDateString()}</h1>
                <h1 className="col-8 d-flex justify-content-end">Year: {year}</h1>
                {Objectives.map(({id, obj, desc}) => (
                    <div key={id} className="col-10 col-md-5 m-2 p-2 text-bg-dark" style={{ border: '2px solid black', borderRadius: '10px' }}>
                        <h2 className="text-center rainbow">{obj}</h2>
                        <ul>
                            {desc.map((item, index) => (
                                <li key={index}> {item} </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default Home;                        