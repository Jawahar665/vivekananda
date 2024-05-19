import AboutImg from '../assets/about.png';
import { Hastags } from './Hastags';

export default function About () {
    const config  = {
        line1: 'Hey there! Im Jawahar representing the vibrant town of Mettupalayam in Coimbatore.',
         line2: 'I hold a degree in Electrical and Electronic Engineering from Kongunadu College of Engineering and Technology (Anna University) and I m thrilled to introduce myself as a budding MERN stack developer.',
         line3 :'My passion for technology fuels my desire to create dynamic web solutions. Proficient in MongoDB, Express.js, React.js, and Node.js, I m dedicated to crafting engaging and interactive web applications.',
        line4:'With a solid grasp of both frontend and backend development essentials, including HTML, CSS, and JavaScript, I m eager to contribute to collaborative projects and broaden my skill set.',
        line5:'Driven by a commitment to excellence, I continuously refine my craft, delivering high-quality code to meet the demands of the ever-evolving web development landscape'
    }

    return(
        <>
     <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 '>
            <img className=' max-md: w-4/5 mx-10 ' src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl pb-9 font-bold  max-md: text-center '>About Me</h1>
                <p className='pb-5 max-md:text-justify'>{config.line1}</p>
                <p className='pb-5 max-md:text-justify'>{config.line2}</p>
                <p className='pb-5 max-md:text-justify'>{config.line3}</p>
                <p className='pb-5 max-md:text-justify'>{config.line4}</p>
                <p className='pb-5 max-md:text-justify'>{config.line5}</p>
            </div>
        </div>
       
    </section>
    <Hastags/>
    </>
)
    
}