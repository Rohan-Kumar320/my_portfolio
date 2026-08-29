import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, } from 'react-icons/fi';
import ServiceModal from './ServiceModel';
import { services } from '../../constants/servicesData.jsx';

const AboutServices = () => {
    const [selectedService, setSelectedService] = useState(null);


    return (
        <section id="services" className="py-32 px-[7vw] bg-slate-200 relative">
            {/* Header - Restored to your original large style */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
                <div className="max-w-2xl">
                    <h4 className="text-cyan-800 font-mono text-xs uppercase tracking-[0.5em] mb-4 font-bold">What I Do</h4>
                    <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        Expertise<span className="text-cyan-800">.</span>
                    </h2>
                </div>
                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest border-b border-slate-200 pb-2">
                    Services / 2026
                </p>
            </div>

            {/* Services Grid - Compact & Interactive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        whileHover={{ y: -10 }}
                        onClick={() => setSelectedService(service)}
                        className="group p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] cursor-pointer hover:shadow-2xl hover:border-emerald-500/20 transition-all relative overflow-hidden"
                    >
                        {/* Interactive Arrow Icon */}
                        <div className="absolute top-8 right-8 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                            <FiArrowUpRight size={24} />
                        </div>

                        <div className="text-cyan-600 mb-8 p-4 bg-cyan-50 w-fit rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-500">
                            {service.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                            {service.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed mb-6 font-light">
                            {service.desc}
                        </p>

                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                            Click for Details
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Modal Injection */}
            <AnimatePresence>
                {selectedService && (
                    <ServiceModal
                        service={selectedService} 
                        onClose={() => setSelectedService(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default AboutServices;