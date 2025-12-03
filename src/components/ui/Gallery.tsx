"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
    src: string;
    alt: string;
    category?: string;
}

interface GalleryProps {
    images: GalleryImage[];
    title?: string;
}

export default function Gallery({ images, title }: GalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
        }
    };

    return (
        <div className="w-full">
            {title && <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>}

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="relative w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                            {image.category && (
                                <span className="absolute top-2 left-2 bg-neon-cyan/90 text-deep-black text-xs font-bold px-2 py-1 rounded">
                                    {image.category}
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-neon-cyan transition-colors p-2 bg-white/10 rounded-full"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <motion.div
                            key={selectedImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-neon-cyan transition-colors p-2 bg-white/10 rounded-full"
                            onClick={nextImage}
                        >
                            <ChevronRight size={32} />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
                            {selectedImageIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
