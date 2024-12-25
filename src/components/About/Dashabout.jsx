import { useEffect, useRef } from "react"

const Dashabout = () => {
  const counter = useRef(null)
  useEffect(()=>{
    document.querySelectorAll(".counter").forEach(counter=>{
      const target =+counter.getAttribute('data-target');
      const duration = 2000
      const interval = 50

      let count = 0
      const increment = target /(duration/ interval)

      const updateCounter=()=>{
        count+=increment;
        if(count<target){
          counter.innerText = Math.floor(count)
          setTimeout(updateCounter, interval);
        }
        else{
          counter.innerText = target
        }
      }
      updateCounter()
    })
  },[])
  return (
    <div className="px-[2%] text-center">
      <div>
        <h2 className="text-[40px] font-bold uppercase text-text">We have the base for show you the way</h2>
        <p className="text-p text-[14px] px-32">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque quam unde, modi esse! Quo voluptatum repellendus vel voluptas ratione quidem, dicta tempora consequatur rerum! Iste, suscipit consequatur. Asperiores!</p>
      </div>
      <div>
        <section>
          <div className="counter" id='counter' ref={counter} data-target="10000">0</div>
          <div className='animated-box'>
            <div className="counter" id='counter' ref={counter} data-target="100">0</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashabout