"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productsData, ProductModel } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
    { id: 'all', label: 'All Products' },
    { id: 'fresh-slicer', label: 'Fresh Slicer' },
    { id: 'frozen-slicer', label: 'Frozen Slicer' },
    { id: 'mincer', label: 'Mincer & Ham' },
    { id: 'bone-saw', label: 'Bone Saw & Vacuum' },
    { id: 'packaging', label: 'Packaging Machine' },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter products based on active category
    const displayProducts = useMemo(() => {
        let models: ProductModel[] = [];

        if (activeCategory === 'all') {
            // Flatten all products from all categories and deduplicate by ID
            const seenIds = new Set<string>();
            Object.values(productsData).forEach(category => {
                Object.values(category.models).forEach(model => {
                    if (!seenIds.has(model.id)) {
                        seenIds.add(model.id);
                        models.push(model);
                    }
                });
            });
        } else {
            // Get products from specific category
            const category = productsData[activeCategory];
            if (category) {
                models = Object.values(category.models);
            }
        }
        return models;
    }, [activeCategory]);

    // GSAP Animations - Re-run when products change
    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".product-card");

        // Kill previous animations to prevent conflicts
        gsap.killTweensOf(cards);

        gsap.fromTo(cards,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef, dependencies: [displayProducts] });

    const openModal = (product: ProductModel) => {
        setSelectedProduct(product);
        setSelectedImageIndex(0); // Reset image index when opening new product
    };

    return (
        <section id="products" className="py-24 bg-deep-black relative" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Product <span className="text-neon-cyan">Lineup</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        카테고리를 선택하여 최적의 제품을 확인하세요.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === category.id
                                ? "bg-neon-cyan text-deep-black border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                                : "bg-transparent text-gray-400 border-white/10 hover:border-neon-cyan/50 hover:text-white"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {displayProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                onClick={() => openModal(product)}
                                className="product-card group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer hover:-translate-y-2"
                            >
                                <div className="aspect-square relative p-6 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                                        <Image
                                            src={product.thumbnail}
                                            alt={product.displayName}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-bold border border-white px-4 py-2 rounded-full backdrop-blur-sm">
                                            상세 보기
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors line-clamp-1">
                                        {product.displayName}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">
                                        상세 스펙 확인 <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl h-[90vh] bg-deep-black rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl shadow-neon-cyan/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-deep-black/95 backdrop-blur-sm z-10 sticky top-0">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {selectedProduct.displayName}
                                    </h3>
                                    <p className="text-neon-cyan text-sm">Premium Meat Processing Equipment</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <div className="flex flex-col lg:flex-row h-full">
                                    {/* Left: Image Gallery */}
                                    <div className="lg:w-1/2 p-8 bg-white/5 flex flex-col items-center justify-center min-h-[500px] lg:min-h-full gap-6">
                                        {/* Main Image */}
                                        <div className="relative w-full h-[400px] lg:h-[500px]">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={selectedImageIndex}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="relative w-full h-full"
                                                >
                                                    <Image
                                                        src={selectedProduct.images[selectedImageIndex]}
                                                        alt={selectedProduct.displayName}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Thumbnail Strip */}
                                        <div className="flex gap-3 overflow-x-auto w-full px-2 py-2 justify-center custom-scrollbar">
                                            {selectedProduct.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedImageIndex(idx)}
                                                    className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImageIndex === idx
                                                        ? "border-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.3)] scale-105"
                                                        : "border-white/10 hover:border-white/50 opacity-60 hover:opacity-100"
                                                        }`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${selectedProduct.displayName} thumbnail ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="lg:w-1/2 p-8 lg:p-12 space-y-10">

                                        {/* Description */}
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-neon-purple pl-3">제품 설명</h4>
                                            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                                {selectedProduct.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-neon-cyan pl-3">주요 특징</h4>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {selectedProduct.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                        <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Specs */}
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-gray-500 pl-3">제품 사양</h4>
                                            <div className="overflow-hidden rounded-xl border border-white/10">
                                                <table className="w-full text-sm text-left">
                                                    <tbody className="divide-y divide-white/10">
                                                        {Object.entries(selectedProduct.specs).map(([key, value], idx) => (
                                                            <tr key={key} className={idx % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                                                                <th className="py-3 px-4 font-medium text-gray-400 w-1/3">{key}</th>
                                                                <td className="py-3 px-4 text-white">{value}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {selectedProduct.specImage && (
                                                <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-white">
                                                    <Image
                                                        src={selectedProduct.specImage}
                                                        alt={`${selectedProduct.displayName} Specification`}
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="pt-6">
                                            <Link
                                                href="#contact"
                                                onClick={() => setSelectedProduct(null)}
                                                className="inline-flex items-center justify-center w-full py-4 bg-neon-purple hover:bg-neon-cyan text-white hover:text-deep-black font-bold rounded-xl transition-all duration-300"
                                            >
                                                견적 및 상담 문의하기
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
