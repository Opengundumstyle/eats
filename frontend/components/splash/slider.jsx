import React,{useState,useEffect,useRef}from 'react' 
import { AiOutlineVerticalLeft,AiOutlineVerticalRight} from "react-icons/ai";
let count = 0;
let slideInterval;


const Slider =()=>{

    const sliderPictures = [
         window.splash1URL,
         window.splash2URL,
         window.splash3URL
           ]
    
    const [currentIndex,setCurrentIndex] = useState(0)

    const slideRef = useRef()
    
    const removeAnimation =()=>{
      slideRef.current.classList.remove("fade-anim");
    }

    useEffect(()=>{
         slideRef.current.addEventListener('animationend',removeAnimation);
        //  slideRef.current.addEventListener('mouseenter',pauseSlider);
        //  slideRef.current.addEventListener('mouseleave',startSlider);
         startSlider();
         return() =>{
            pauseSlider()
         }
         },[])

    const pauseSlider =()=> {
          clearInterval(slideInterval)
    }

    const startSlider =()=>{
          slideInterval = setInterval(()=>{
             handleNextClick()
           },4000)
    }
    
     
    const handleNextClick =()=>{
        count = (count + 1) % sliderPictures.length;
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }
    const handlePrevClick =()=>{
       const productLength = sliderPictures.length;
       count =(currentIndex + productLength-1) % productLength;
       setCurrentIndex(count)
       slideRef.current.classList.add('fade-anim')
    }
      
    return(
        <div ref={slideRef} className='slider-div'>
           <div className="aspect-w-16 aspect-h-9">
             <img className='splash-img1' src={sliderPictures[currentIndex]} alt="" />
            </div>
          <div className="img-button">
             <div className='right'>
                <button className="splash-button"
                onClick={handlePrevClick}><AiOutlineVerticalRight size={40}/>
                </button>
            </div>
             <div className='left'>
                <button className='splash-button ' 
                onClick={handleNextClick}><AiOutlineVerticalLeft size={40}/>
                </button> 
            </div>
          </div>
        </div>
    )
}

export default Slider