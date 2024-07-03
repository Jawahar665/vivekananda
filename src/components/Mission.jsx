import Mission from '../assets/mission.png';

export default function About () {
    const config  = {
        line1: 'Imparting “Man-making and Character-building” education as practically illustrated by Swami Vivekananda',
         line2: 'Promoting and undertaking the study of and research in the arts/humanities, sciences, technologies and in all their branches, both basic and applied.',
         line3 :'Training students in the above mentioned various branches of knowledge and empowering them to achieve their learning goals.',
         line4:'Undertaking industry oriented educational work',
         line5:'Pursuing cultural and social welfare activities in service of the masses.',
    }

    return(
        <>
     <section className='flex flex-col md:flex-row bg-secondary px-5 justify-center items-cente' id='mission'>
        <div className='py-5 '>
            <img className=' max-md: w-80 mx-10 ' src={Mission} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl pb-9 font-bold  max-md: text-center pt-10 '>Mission</h1>
                <p className='pb-5 max-md:text-justify'>{config.line1}</p>
                <p className='pb-5 max-md:text-justify'>{config.line2}</p>
                <p className='pb-5 max-md:text-justify'>{config.line3}</p>
                <p className='pb-5 max-md:text-justify'>{config.line4}</p>
                <p className='pb-5 max-md:text-justify'>{config.line5}</p>
            </div>
        </div>
       
    </section>
   
    </>
)
    
}