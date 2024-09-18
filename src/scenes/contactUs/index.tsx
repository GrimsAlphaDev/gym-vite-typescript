import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsePageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function ContactUs({ setSelectedPage }: Props) {

    const inputStyles:string = `w-full mb-5 rounded-lg bg-primary-500 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className='md:w-3/5'>
                <HText>
                    <span className='text-primary-500'>Join Now</span> To Get In Shape
                </HText>
                <p className='my-5'>
                    Unrivaled Gym. Unparalleled Training Experience. Unmatched Results. Get The Body You Want. Get The Results You Deserve. Get The Best Gym Membership. Get Started Today.
                </p>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className='mt-10 justify-between gap-9 md:flex'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className='mt-10 basis-3/5 md:mt-0'>
                    <form
                        target='_blank'
                        onSubmit={onSubmit}
                        method='POST'
                        action='https://formsubmit.co/wotis79784@cetnob.com'
                    >
                        <input type="text" 
                            className={inputStyles}
                            placeholder='NAME'
                            {...register('name', { required: true, maxLength: 100 })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === 'required' && "Name is required"}
                                {errors.name.type === 'maxLength' && "Name is too long, max 100 characters"}
                            </p>
                        )}
                        <input type="text" 
                            className={inputStyles}
                            placeholder='Email'
                            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === 'required' && "Email is required"}
                                {errors.email.type === 'pattern' && "Invalid email adress"}
                            </p>
                        )}
                        <textarea
                            className={inputStyles}
                            placeholder='MESSAGE'
                            rows={4}
                            cols={50}
                            {...register('message', { required: true, maxLength: 2000 })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === 'required' && "message is required"}
                                {errors.message.type === 'maxLength' && "Message is too long, max 2000 characters"}
                            </p>
                        )}
                        <button
                        type='submit'
                        className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                className='relative mt-16 basis-2/5 md:mt-0'>
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                        <img className='w-full' src={ContactUsePageGraphic} alt='contact-us-page-graphic' />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
}

export default ContactUs