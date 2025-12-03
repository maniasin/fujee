"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, RefreshCw, Truck, X, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Link from "next/link";
import useMeasure from "react-use-measure";

export default function Used() {
    // Original images
    const rawImages = [
        { src: "/img/중고1.jpg", alt: "중고 육절기 A급", category: "Refurbished" },
        { src: "/img/중고2.jpg", alt: "중고 슬라이서", category: "Used" },
        { src: "/img/냉동육절기.png", alt: "리퍼브 냉동절단기", category: "Refurbished" },
        { src: "/img/골절기.png", alt: "중고 골절기", category: "Used" },
    ];

    // Duplicate images to create a seamless loop (enough to fill wide screens)
    const usedImages = [...rawImages, ...rawImages, ...rawImages];

    const processes = [
        {
            icon: <Phone className="w-6 h-6 text-deep-black" />,
            text: "전화/온라인 매입 문의",
        },
        {
            icon: <Truck className="w-6 h-6 text-deep-black" />,
            text: "전문가 현장 방문 및 견적",
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-deep-black" />,
            text: "합리적인 가격 협상",
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-deep-black" />,
            text: "신속한 대금 지급 및 회수",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Marquee Logic with Drag Support
    const [ref, { width }] = useMeasure();
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((t, delta) => {
        if (!width) return;

        // Pause auto-scroll if hovering or dragging
        if (isHovered || isDragging) return;

        const moveBy = delta * -0.05; // Adjust speed here (negative for left scroll)

        let newX = x.get() + moveBy;
        const oneSetWidth = width / 3;

        // Infinite loop logic
        if (newX <= -oneSetWidth) {
            newX += oneSetWidth;
        } else if (newX > 0) {
            newX -= oneSetWidth;
        }

        x.set(newX);
    });

    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => setIsDragging(false);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === 0 ? rawImages.length - 1 : (prev as number) - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === rawImages.length - 1 ? 0 : (prev as number) + 1));
    };

    return (
        <section id="used" className="py-24 bg-white text-deep-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Used & <span className="text-neon-purple">Refurb</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        리퍼브, 중고, 매입까지 투명한 상태 정보와 함께 제공합니다.
                    </p>
                </div>

                {/* 1. Slider Gallery (Moved to Top) */}
                <div className="mb-24 relative">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Real-time <span className="text-neon-purple">Inventory</span>
                        </h3>
                        <p className="text-gray-500 text-sm">
                            * 드래그하거나 마우스를 올리면 멈춥니다.
                        </p>
                    </div>

                    <div className="relative w-full overflow-hidden py-4">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                        <motion.div
                            ref={ref}
                            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
                            style={{ x }}
                            drag="x"
                            dragConstraints={{ left: -(width || 0) + 1000, right: 0 }} // Loose constraints for infinite feel
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onTouchStart={() => setIsHovered(true)}
                            onTouchEnd={() => setIsHovered(false)}
                        >
                            <div className="flex gap-6">
                                {usedImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative min-w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg group pointer-events-none" // Disable pointer events on children to prevent drag conflict
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 300px, 400px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                        <div className="absolute bottom-0 left-0 p-6 w-full">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${image.category === 'Refurbished' ? 'bg-neon-purple text-white' : 'bg-neon-cyan text-deep-black'
                                                }`}>
                                                {image.category}
                                            </span>
                                            <h4 className="text-white text-xl font-bold">{image.alt}</h4>
                                        </div>

                                        {/* Click Area for Lightbox - Needs pointer-events-auto */}
                                        <div
                                            className="absolute inset-0 z-20 pointer-events-auto cursor-pointer"
                                            onClick={(e) => {
                                                if (!isDragging) {
                                                    // Map the index from the duplicated array back to the original unique array index
                                                    setSelectedIndex(index % rawImages.length);
                                                }
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Buying Process & Info (Moved Below) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Buying Process */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-neon-purple rounded-full" />
                            중고 매입 절차
                        </h3>
                        <div className="space-y-6">
                            {processes.map((process, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                                    <div className="w-10 h-10 bg-neon-cyan rounded-full flex items-center justify-center shrink-0">
                                        {process.icon}
                                    </div>
                                    <span className="font-medium text-lg">{process.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Refurb Info & CTA */}
                    <div className="bg-deep-black text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px]" />

                        <h3 className="text-2xl font-bold mb-4 relative z-10">Refurb & QA</h3>
                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed">
                            한국후지 답십리 대리점만의 엄격한 멀티 포인트 점검을 통과한 제품만을 판매합니다.
                            모든 중고 제품은 신제품에 준하는 성능 테스트를 거쳐 출고됩니다.
                        </p>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-neon-cyan w-5 h-5" />
                                <span>전문 엔지니어 1:1 점검</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-neon-cyan w-5 h-5" />
                                <span>핵심 부품 정품 교체</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-neon-cyan w-5 h-5" />
                                <span>구매 후 6개월 무상 보증</span>
                            </div>
                        </div>

                        <div className="mt-10 relative z-10">
                            <Link
                                href="#contact"
                                className="inline-block w-full text-center bg-neon-cyan text-deep-black font-bold py-4 rounded-xl hover:bg-white transition-colors duration-300"
                            >
                                재고 및 입고 일정 문의
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-neon-cyan transition-colors z-50"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={40} />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute left-4 md:left-8 text-white/50 hover:text-neon-cyan transition-colors z-50 p-2"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-neon-cyan transition-colors z-50 p-2"
                            onClick={handleNext}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={rawImages[selectedIndex].src}
                                    alt={rawImages[selectedIndex].alt}
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-black/70 backdrop-blur-md flex flex-col items-center gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{rawImages[selectedIndex].alt}</h3>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${rawImages[selectedIndex].category === 'Refurbished' ? 'bg-neon-purple text-white' : 'bg-neon-cyan text-deep-black'
                                            }`}>
                                            {rawImages[selectedIndex].category}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/?inquiry=${encodeURIComponent(rawImages[selectedIndex].alt)}#contact`}
                                        onClick={() => setSelectedIndex(null)}
                                        className="px-8 py-3 bg-neon-cyan text-deep-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2"
                                    >
                                        이 제품 문의하기 <Send size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
