import {projectData} from './projectData'

function loadProjectData(data){

    for(let project of data){
        document.getElementById('projects').append( `
            <div class="project-card">
                <p>${project.projectname}</p>
                <a href='${project.weblink}'<img src='${project.img}'/></a>
                <p>${project.summary}</p>

            </div>
        
        
        `);
    }

    }

    loadProjectData(projectData)
    