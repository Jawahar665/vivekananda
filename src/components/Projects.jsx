import websiteImg1 from '../assets/1.jpg';
import websiteImg2 from '../assets/2.jpeg';
import websiteImg3 from '../assets/3.jpg';
import websiteImg4 from '../assets/4.jpg';

export default function Projects() {

    const config = {
        projects: [
            {
                id: 0,
                image: websiteImg1,
                description: 'They alone live , who live for others',
            },
            {
                id: 1,
                image: websiteImg2,
                description: 'Neither seek nor avoid , take what comes',

            },
            {
                id: 2,
                image: websiteImg3,
                description: 'The fire thatcwarms us can of truth . Truth is often far from being confortable',  
            },
            {
                id: 3,
                image: websiteImg4,
                description: 'Arise Awake and stop not until the goal is reached' ,
            }
        ]
    }

    return (
        <section id='projects' className="flex  flex-col py-10 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col ">
                    <h1 className="text-4xl font-bold text-center">Philosophy</h1>
                    <p className=' py-9 text-center'>Purity,Patience and perseverance overcome all obstacles</p>
                </div>
            </div>
            <div className=" flex justify-around max-md:flex-col gap-12 py-14  items-center">
                {config.projects.map((project) => (
                    <div className=' relative'  key={project.id}>
                        <img className=' w-72 h-40 max-sm:' src={project.image} />
                        <div  className='project-desc' key={project.id}>
                            <p className=' w-72 text-center my-4 ' >{project.description}</p>
                           
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
