import React, { forwardRef } from 'react'
import ContactBtn2 from '../../components/ContactButton/btn2'

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='min-h-[100vh] bg-[#032936] text-[#7092a1] flex items-center md:px-[5rem] p-5'>
      <div className=" flex flex-col gap-5">
        <div className="heading ">
          <h1 className=" md:text-5xl text-3xl ">About <br></br> Rahil khan</h1>
        </div>
        <div className="heading-bottom-sec flex md:flex-row flex-col items-center gap-5">
          <span className="hidden md:block">
            <ContactBtn2 />
          </span>
          <div className="img relative flex items-center ">
            <img src="assets/intro/0.jpg" alt="" className=' grayscale md:h-[450px] md:w-[350px] h-[300px] -ml-5 object-cover' />
            <img src="assets/intro/1.jpg" alt="" className="absolute top-[70px] -right-[30px]  object-cover " />
          </div>
          <div className=" md:w-1/2 pt-5 md:p-0">
            <p className=' md:ml-10'>
              I'm Rahil Khan, a passionate and imaginative photographer specializing in capturing emotions, portraits, fashion, food commercial, product photography, real estate photography, and wedding photoshoots. With a dedication to creating visual stories that leave a lasting impact, I freeze fleeting moments and bring them to life through my lens. Let's collaborate to capture the beauty and emotions that surround us. Welcome to the world of Rahil Khan Photography!
              {/* <br /> <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque, modi quisquam corrupti repellendus, adipisci illum deleniti officia ut ex blanditiis nulla, enim quas iusto neque quibusdam quidem numquam inventore perferendis est obcaecati voluptate ducimus.
              </p> */}
            </p>

          </div>
        </div>
      </div>
    </div>
  )
})

export default About