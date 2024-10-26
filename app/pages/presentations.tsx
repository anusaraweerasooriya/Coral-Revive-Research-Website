"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import CanvaImage from '../../public/canva.png';

const presentations = [
    { title: 'Proposal Presentation', date: '2024/02/01', type: 'Group', link: 'https://www.canva.com/design/DAF6bZpfWRM/yP_KfpGvKRrdQiXQqoP8xA/view?utm_content=DAF6bZpfWRM&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { title: 'Progress Presentation I', date: '2024/05/06', type: 'Group', link: 'https://www.canva.com/design/DAGETWmCCzA/KhBxQhhuaHbtCtthykSohQ/view?utm_content=DAGETWmCCzA&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { title: 'Progress Presentation II', date: '2024/09/11', type: 'Group', link: 'https://www.canva.com/design/DAGQCUwQ3hs/qT3cEfYJXsih0LqShELOog/view?utm_content=DAGQCUwQ3hs&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
    { title: 'Final Presentation', date: '2024/10/28', type: 'Group', link: 'https://www.canva.com/design/DAGUpdqbidg/6EVcMOR2Mexq5YuIqlKAMw/view?utm_content=DAGUpdqbidg&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
];

const Presentations = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="presentations" className="min-h-screen py-20 bg-gray-100">
            <div className="container mx-auto px-6 padded-section">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Presentations</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Please find all presentation slides related to this project below.
                </p>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {presentations.map((doc, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-4">
                                <Image src={CanvaImage} alt="Canva Logo" width={30} height={30} className="mr-3" />
                                <h3 className="text-lg font-semibold">{doc.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Presented on {doc.date}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{doc.type}</span>
                                <a
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-sm font-semibold hover:underline"
                                >
                                    View
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Presentations;
