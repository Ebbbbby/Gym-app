import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">

            <motion.div
             onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
                <div>
             <h1 className="basis-3/6 font-montserrat text-3xl font-bold">MORE THAN JUST GYM.</h1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
                </div>
            </motion.div>

        </section>)
}

export default Benefits