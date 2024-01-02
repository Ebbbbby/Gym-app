import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            <div>
                    <div>

                        <div>
                            <div>
                                <img alt='home-page-text' src={HomePageText}/>
                            </div>

                        </div>

                       <p className="mt-8 text-sm">
                          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
                           </p>
                    </div>

                    <div>
                        <ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' onClick={()=> setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                           <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                <div>
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
              {isAboveMediumScreens && (
               <div className="h-[150px] w-full bg-primary-100 py-10">
               <div className="mx-auto w-5/6">
               <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
     </section>
    )
}

export default Home