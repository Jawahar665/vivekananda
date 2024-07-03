import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'To realize the educational vision of Swami Vivekananda The manifestation of perfection already in man',
         line2: 'To actualize Swami Vivekananda’s fundamental educational ideals of imparting life-giving, man-making, and character-building education',
         line3 :'To develop an educational system wherein the rich and spiritual heritage of our country with its hoary tradition of values like the sacredness of knowledge, shraddha, purity, devotion to truth, etc., are taught on the one hand; and on the other, are taught the secular values of scientific temper, rational investigation into the truth of the world we live in, objectivity of approach through science and technology, work efficiency, team work,',
      
    }

    return(
        <>
     <section className='flex flex-col md:flex-row bg-secondary px-5 justify-center items-center' id='vision'>
        <div className='py-5 '>
            <img className=' max-md: w-80 mx-10 ' src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white '>
                <h1 className='text-4xl pb-9 font-bold  max-md: text-center pt-10 '>Vision</h1>
                <p className='pb-5 max-md:text-justify'>{config.line1}</p>
                <p className='pb-5 max-md:text-justify'>{config.line2}</p>
                <p className='pb-5 max-md:text-justify'>{config.line3}</p>
            </div>
        </div>
       
    </section>
   
    </>
)
    
}