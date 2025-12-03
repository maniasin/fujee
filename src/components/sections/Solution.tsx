"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Settings, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        // Step 1: Slide in Main Concept
        tl.from(".solution-step-1", { x: -100, opacity: 0, duration: 1 })
            // Step 2: Fade in details
            .from(".solution-step-2", { y: 50, opacity: 0, duration: 1, stagger: 0.3 })
            // Step 3: Final layout adjustment
            .to(".solution-content", { scale: 1.05, duration: 1 });

    }, { scope: containerRef });

    const solutions = [
        {
            icon: <Settings className="w-8 h-8 text-neon-cyan" />,
            title: "현장 정밀 진단",
            description: "작업 환경과 동선을 분석하여 최적의 장비 배치를 설계합니다.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-neon-cyan" />,
            title: "최적 장비 매칭",
            description: "데이터 기반으로 귀사의 작업량과 용도에 딱 맞는 모델을 추천합니다.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-neon-cyan" />,
            title: "정품 유지보수",
            description: "100% 정품 부품 사용과 정기 점검으로 장비 수명을 극대화합니다.",
        },
    ];

    return (
        <div ref={containerRef}>
            <section ref={triggerRef} className="h-screen bg-deep-black flex items-center overflow-hidden relative">
                {/* Order Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/5 via-transparent to-transparent opacity-30" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="solution-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Visual/Concept */}
                        <div className="solution-step-1">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                From Chaos<br />
                                <span className="text-neon-cyan">To Order</span>
                            </h2>
                            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
                                <div className="w-32 h-32 bg-neon-cyan rounded-full blur-[50px] animate-pulse" />
                                <span className="relative z-10 text-2xl font-bold text-white">Total Solution</span>
                            </div>
                        </div>

                        {/* Right: Steps */}
                        <div className="space-y-8">
                            {solutions.map((item, index) => (
                                <div key={index} className="solution-step-2 flex gap-6 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors duration-300">
                                    <div className="shrink-0 pt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
