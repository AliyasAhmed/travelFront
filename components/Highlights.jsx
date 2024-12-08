import { useGSAP } from "@gsap/react"
import VideoCarousel from "./VideoCarousel"
import { rightImg, watchImg } from "../src/utils"
import gsap from "gsap"

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0,
            text:'white',
        })
        gsap.to('.link', {
            opacity: 1,
            y: 0,
            duration:1,
            stagger:0.25,
        })
    }, [])
    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h2 id="title" className="section-heading">Get The Highlights</h2>

                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">Watch the film <img src={watchImg} alt="watch" className="ml-2" /> </p>
                        {/* duplicate it */}
                        <p className="link ">Watch the event <img src={rightImg} alt="right" className="ml-2" /> </p>
                    </div>
                </div>
                {/* importing video carousel */}
                <VideoCarousel/>
            </div>
        </section>
    )
}

export default Highlights