
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'



export default function Home(props) {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }
  const stagger = {
    initial: {
  
    },
    animate: {
      transition:{
        staggerChildren :0.1,
      }
    }
  }
  const page = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration:0.1,
      }
    },
    exit:{
      opacity: 0,
      transition: {
        delay: 0.1,
        ease:'easeInOut'
      }
    }
  }

  return (
    <motion.div variants={page}
    initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow px-1 pr-6">
      <h5 className="pl-6 my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree in Chemical
        Engineering from National Institute of Technology, Rourkela. I have 1+ years of experience in
        Web Development .
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-thistle dark:bg-dark-100 "
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger}
              initial="initial" animate="animate">
          {services.map((service) => (
            <motion.div

              variants={variants}
              className="col-span-2 p-2 rounded-lg bg-thistle dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}


