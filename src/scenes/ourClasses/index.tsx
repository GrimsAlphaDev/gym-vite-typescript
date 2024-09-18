import { ClassType, SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes : Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Our weight training classes are designed to help you build muscle and strength. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced lifter, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image1
    },
    {
        name: "Cardio Classes",
        description: "Our cardio classes are designed to help you improve your cardiovascular fitness. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced athlete, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image2
    },
    {
        name: "Training Classes",
        description: "Our training classes are designed to help you improve your overall fitness. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced athlete, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image3
    },
    {
        name: "Yoga Classes",
        description: "Our yoga classes are designed to help you improve your flexibility and reduce stress. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced yogi, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image4
    },
    {
        name: "Ab Core Classes",
        description: "Our ab core classes are designed to help you strengthen your core muscles. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced athlete, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image5
    },
    {
        name: "Adventure Classes",
        description: "Our adventure classes are designed to help you have fun and stay active. We offer a variety of classes to help you achieve your fitness goals. Whether you are a beginner or an experienced athlete, we have a class for you. Our instructors are highly trained and will make sure you get the most out of your workout.",
        image: image6
    }

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="mx-auto w-5/6">
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Our classes are designed to be safe, effective, and most of all, fun. We offer a variety of classes to help you achieve your fitness goals. Our instructors are highly trained and will make sure you get the most out of your workout. Whether you are a beginner or an experienced athlete, we have a class for you. Check out our class schedule and sign up today!
                        </p>
                    </div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
            className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name} - ${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    </section>
}

export default OurClasses