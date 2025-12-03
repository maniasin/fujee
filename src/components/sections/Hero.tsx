"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 비디오 애니메이션
        tl.from(videoRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
        });

        // 1. Logo (안전하게 체크)
        const logo = textRef.current?.querySelector('div:first-child');
        if (logo) {
            tl.from(logo, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=1");
        }

        // 2. Subtitle (안전하게 체크)
        const subtitle = textRef.current?.querySelector('span');
        if (subtitle) {
            tl.from(subtitle, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }, "-=0.8");
        }

        // 3. Typing animation (클래스 선택자는 안전함)
        tl.to(".hero-char", {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.1,
            ease: "none",
        }, "-=0.5");

        // 4. Description (안전하게 체크)
        const description = textRef.current?.querySelector('p');
        if (description) {
            tl.from(description, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.5");
        }

        // 5. Buttons (안전하게 체크)
        const buttons = textRef.current?.lastElementChild;
        if (buttons) {
            tl.from(buttons, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.8");
        }

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/img/background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/50 to-deep-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div ref={textRef} className="flex flex-col items-center gap-6">
                    <div className="relative w-48 h-24 md:w-64 md:h-32 mb-4">
                        <Image
                            src="/img/logo.png"
                            alt="한국후지 답십리 대리점 로고"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 192px, 256px"
                            priority
                        />
                    </div>
                    <span className="text-neon-cyan font-medium tracking-[0.2em] uppercase">
                        Chaos to Order
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4">
                            {"한국후지".split("").map((char, i) => (
                                <span key={i} className="hero-char inline-block opacity-0">
                                    {char}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 mt-2">
                            {"답십리 대리점".split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="hero-char inline-block opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </div>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        정밀 가공이 요구되는 현장을 위해 설계부터 설치, AS, 중고 거래까지<br className="hidden md:block" />
                        하나로 묶은 완벽한 솔루션을 제공합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link
                            href="tel:02-2246-6800"
                            className="px-8 py-4 bg-neon-cyan text-deep-black font-bold rounded-full hover:bg-white transition-colors duration-300"
                        >
                            지금 바로 상담 연결
                        </Link>
                        <Link
                            href="#products"
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                        >
                            신제품 · 중고 라인업
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full" />
                </div>
            </div>
        </section>
    );
}
