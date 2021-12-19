
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from 'framer-motion'

const resume = () => {

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
        initial="initial" animate="animate" exit="exit" className="px-6 py-2">
            {/* Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={variants} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science Engineering
                        </h5>
                        <p className="font-semibold">National Institute of Technology, Rourkela (2020-2024)</p>
                        <p className="my-3">
                            I am currently pursuing B.tech in Chemical Engineering at National Institute of Technology, Rourkela
                        </p>
                    </div>
                </motion.div>
                <motion.div  variants={variants} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Web Developer </h5>
                        <p className="font-semibold">AIChE ESC</p>
                        <p className="my-3">Currently webmaster at ESC</p>
                    </div>
                </motion.div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default resume
