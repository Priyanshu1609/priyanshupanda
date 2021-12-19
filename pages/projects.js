import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectNavbar';
import { projects as projectsData } from "../data";
const Projects = () => {

  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("all")
  const handlerFilterCategory = (category) => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) => project.category.includes(category))

    setProjects(newArray);
    setActive(category);

  }
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
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        ease: 'easeInOut'
      }
    }
  }

  return (

    <motion.div variants={page}
      initial="initial" animate="animate" exit="exit" className="overflow-y-scroll scrollbar-hide">
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
      <motion.div className="relative grid flex-grow grid-cols-12 gap-4 my-3 " variants={stagger} initial="initial" animate="animate">
        {
          projects.map(project => (
            <motion.div className="col-span-12 sm:col-span-6 lg:col-span-4" key={project.name} variants={variants}>
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default Projects
