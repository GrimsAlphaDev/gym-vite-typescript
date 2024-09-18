import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "We provide world class fitness equipment. Our trainers are certified and experienced."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's Diverse Classes",
        description: "We have a wide range of classes and programs to help you achieve your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our trainers are certified and experienced. We are more than just a gym. We are a community."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

type Props = { setSelectedPage: (value: SelectedPage) => void }

function index({ setSelectedPage }: Props) {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="md:my-5 md:w-3/5">
                <HText>
                    MORE THAN JUST A GYM.
                </HText>
                <p className="my-5 text-sm">We provide world class fitness equipment. Our trainers are certified and experienced. We have a wide range of classes and programs to help you achieve your fitness goals. We are more than just a gym. We are a community.</p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
                className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

                {/* GRAPHICS */}
                <img src={BenefitPageGraphic} alt="benefits-page-graphic" className="mx-auto" />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>
                                    MILLION OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                        <p className="my-5 text-sm">We provide world class fitness equipment. Our trainers are certified and experienced. We have a wide range of classes and programs to help you achieve your fitness goals. Our trainers are certified and experienced. We are more than just a gym. We are a community.</p>
                        <p className="my-5 text-sm">By joining our gym, you will have access to state of the art facilities, 100's of diverse classes, and expert and pro trainers. We are more than just a gym. We are a community.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    </section>
}

export default index