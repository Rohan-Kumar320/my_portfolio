import { motion } from 'framer-motion';
import { FiX, FiCheckCircle } from 'react-icons/fi';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-300 flex items-center justify-center p-4 md:p-10"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-12 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors "
        >
          <FiX size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-cyan-600 mb-3 text-4xl ">
            {service.icon}
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {service.title}
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            {service.longDescription || "We provide end-to-end solutions tailored to your business needs, ensuring high performance and scalability at every step of the development cycle."}
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-widest">What's included</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(service.features || ["Feature A", "Feature B", "Feature C", "Feature D"]).map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <FiCheckCircle className="text-emerald-500" /> {feat}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="mt-10 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;

// import { motion } from 'framer-motion';
// import { FiX, FiCheck } from 'react-icons/fi';

// const ServiceModal = ({ service, onClose }) => {
//     return (
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
//         >
//             {/* Backdrop */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
//                 onClick={onClose}
//             />

//             {/* Modal Body */}
//             <motion.div 
//                 initial={{ scale: 0.9, opacity: 0, y: 30 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 30 }}
//                 className="relative bg-white w-full max-w-xl rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden"
//             >
//                 <button 
//                     onClick={onClose}
//                     className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-50 rounded-full"
//                 >
//                     <FiX size={24} />
//                 </button>

//                 <div className="text-emerald-500 text-4xl mb-6">{service.icon}</div>
                
//                 <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">
//                     {service.title}
//                 </h3>
                
//                 <p className="text-slate-500 text-lg leading-relaxed mb-10">
//                     {service.details}
//                 </p>

//                 <div className="space-y-4">
//                     <p className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-[0.3em]">Core Capabilities</p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {service.features.map((item, i) => (
//                             <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
//                                 <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
//                                     <FiCheck size={12} />
//                                 </div>
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <button 
//                     onClick={onClose}
//                     className="mt-12 w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
//                 >
//                     Close Details
//                 </button>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default ServiceModal;