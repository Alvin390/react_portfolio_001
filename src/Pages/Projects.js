import {useState, useEffect} from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setTimeout(()=> { 
            setProjects([
                {id: 1,image:"./project1.jpeg" , name: "ChamaSpark", description: "This is a Django project"},
                {id: 2,image:"./project2.jpeg", name: "PlugPoint", description: "This is an android project"},
                {id: 3,image:"./project3.jpeg" ,name: "PulseTrack", description: "This is a hackathon web app project"}
            ]);
        }, 1000);
    }, []);
return (
        <div className="projects">
            <h2>My Projects</h2>
            {projects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <img src={project.image} alt={project.name} className="project-image" />
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Projects;