"use client"

import { FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const documents = [
    { title: 'Topic Assessment', date: '2024/01/19', type: 'Group', link: 'https://drive.google.com/file/d/1sOaLrkDYjFcu8nToHa05Hqcmx7lmDoGm/view?usp=sharing' },
    { title: 'Project Proposal', date: '2024/02/29', type: 'Individual', link: 'https://drive.google.com/drive/folders/1dgOOL0jhkRIQdeL-xK0_nfBX66UB2SOJ?usp=sharing' },
    { title: 'Status Documents I', date: '2024/05/06', type: 'Individual', link: 'https://drive.google.com/drive/folders/1fPP0bYUkaJKr5JN6mGjVw4tlIkOsafUJ?usp=sharing' },
    { title: 'Status Documents II', date: '2024/09/11', type: 'Individual', link: 'https://drive.google.com/drive/folders/1Z2BB63TXhySkqAn0j7YWFmof4dqJNAL_?usp=sharing' },
    { title: 'Research Paper', date: '2024/09/30', type: 'Group', link: 'https://drive.google.com/file/d/1qf509wG0gxkoFhDpcIDdKH-KoKFOXPd4/view?usp=sharing' },
    { title: 'Final Report', date: 'To be submitted', type: 'Individual', link: '#' },
    { title: 'Poster', date: 'To be submitted', type: 'Group', link: '#' },
];

const Documents = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Controls the delay between the animations of individual cards
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, // Cards start 50px below their final position
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section id="documents" className="min-h-screen py-20 bg-gray-100">
            <div className="container mx-auto px-6 padded-section">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Documents</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Please find all documents related to this project below.
                </p>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-4">
                                <FaFilePdf className="text-red-500 text-2xl mr-3" />
                                <h3 className="text-lg font-semibold">{doc.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Submitted on {doc.date}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{doc.type}</span>
                                <a
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-sm font-semibold hover:underline"
                                >
                                    Download
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Documents;
