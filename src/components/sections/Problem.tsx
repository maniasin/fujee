"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, Clock, XCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".problem-card");

        gsap.from(cards, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    const problems = [
        {
            icon: <Clock className="w-12 h-12 text-neon-purple" />,
            title: "예측 불가 다운타임",
            description: "갑작스러운 기계 고장으로 인한 작업 중단은 매출 손실로 직결됩니다.",
        },
        {
            icon: <XCircle className="w-12 h-12 text-neon-purple" />,
            title: "불균일한 커팅 품질",
            description: "일정하지 않은 육류 두께는 고객 불만과 로스율 증가의 원인입니다.",
        },
        {
            icon: <AlertTriangle className="w-12 h-12 text-neon-purple" />,
            title: "위생 리스크",
            description: "청소가 어렵고 부식되는 장비는 심각한 위생 문제를 야기합니다.",
        },
    ];

    return (
        <section ref={containerRef} className="py-24 bg-deep-black relative overflow-hidden">
            {/* Chaos Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-neon-purple rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-600 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-red-500">Chaos</span> in the Field
                    </h2>
                    <p className="text-gray-400 text-lg">
                        현장에서 겪는 반복되는 문제들, 언제까지 감수하시겠습니까?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="problem-card bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-red-500/20 transition-colors duration-300">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                                {problem.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
