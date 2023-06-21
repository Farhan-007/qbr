import { React} from "react";
import ContactBtn from "../../components/ContactButton";
import ImageCard from "../../components/imageCard";
// import About from "../AboutPage";
// import Exhibition from "../ExhibitionPage";
// import MyGallery from "../GalleryPage";
import "./style.css"


function LandingPage() {

    return (
        <>
            <div className="Landing-wrapper relative md:px-[5rem] px-5 pb-20">
                <div className=" flex md:flex-row flex-col md:items-start items-center gap-5 ">

                    {/* LandingPage */}
                    <span className="relative md:w-1/3">
                        <img className="bg-gray-img" src="assets/intro/IMG20220303142639-01.jpeg" alt="" />
                        <img className="fg-img h-[80%] md:w-[120%]" src="assets/intro/IMG20220303142639-01.jpeg" alt="" />
                    </span>

                    <div className="flex justify-center md:w-1/3">
                        <div className=" relative flex flex-col gap-5 z-[1]">

                            <p className="text-sm text-orange-500">
                                #1 photo of the year winner
                            </p>
                            <p className="md:text-6xl text-3xl text-white capitalize max-w-min">
                                What is qissebyrahil
                            </p>
                            <p className=" md:p-6 md:absolute top-[90%] left-[50%] -right-[100%] md:text-[18px] text-sm text-[#7092a1]">
                                Welcome to Qisse by Rahil, a dynamic team of exceptional photographers and cinematographers. With our extensive expertise across various categories, we have mastered the art of capturing pure emotions and preserving your precious moments like no other. We are not just skilled professionals; we are storytellers who understand the power of imagery in weaving narratives that will resonate with you for a lifetime.
                            </p>


                        </div>

                    </div>
                    <div className="absolute left-[45%] right-[45%] -bottom-28 md:block hidden ">
                        <ImageCard />
                    </div>
                    <div className="absolute -bottom-10 right-10">
                        <ContactBtn />
                    </div>
                </div>
            </div>
            {/* <About />
            <MyGallery />
            <Exhibition /> */}
        </>
    )
}

// function ScrollToPage () {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
// };


export default LandingPage