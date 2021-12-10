

const ServiceCard = ({ service }) => {
   function createMarkup() {
      return { __html: service.about };
   }
   return (
      <div className='flex items-center p-2 space-x-4 '>
         <service.Icon className='w-12 h-12 text-green' />
         <div className=''>
            <h6 className='font-bold'>{service.title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
