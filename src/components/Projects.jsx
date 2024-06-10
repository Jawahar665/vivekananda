import websiteImg1 from '../assets/soho-hostel.png';
import websiteImg2 from '../assets/j-cart.png';
import websiteImg3 from '../assets/blog-app.png';
import websiteImg4 from '../assets/imagefinder.png';

export default function Projects() {

    const config = {
        projects: [
            {
                id: 0,
                image: websiteImg1,
                description: 'Its a Static Website Using Pure HTML,CSS',
                link: 'https://thriving-manatee-933809.netlify.app/'
            },
            {
                id: 1,
                image: websiteImg2,
                description: 'J-Cart Product Buying Webiste , Built with react-js redux & using DataBase MongoDB,and Deploying AWS',
                link: 'http://13.50.16.106:8000'
            },
            {
                id: 2,
                image: websiteImg3,
                description: 'Basic Blog Website . Built with React JS',
                link: 'https://6666dd71c02aa2257688c252--letsblogging.netlify.app/'  
            },
            {
                id: 3,
                image: websiteImg4,
                description: 'Its a Image Searching Website . Built with React JS' ,
                link: 'https://imageuniverse.netlify.app/',
            }
        ]
    }

    return (
        <section id='projects' className="flex  flex-col py-10 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col ">
                    <h1 className="text-4xl font-bold text-center">Projects</h1>
                    <p className=' py-9 text-center'>These are some of my best projects. I have built these with React, JavaScript and HTML  CSS. Check them out.</p>
                </div>
            </div>
            <div className=" flex justify-around max-md:flex-col gap-12 py-14  items-center">
                {config.projects.map((project) => (
                    <div className=' relative'  key={project.id}>
                        <img className=' w-72 h-40 max-sm:' src={project.image} />
                        <div  className='project-desc' key={project.id}>
                            <p className=' w-72 text-center my-4 ' >{project.description}</p>
                            <div className=' text-center max-md:pb-5' key={project.id} >
                                <a className='btn text-yellow-300 ' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
