"use client";

import { Wrench, ClipboardCheck, Headset } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Wrench className="w-8 h-8 text-neon-purple" />,
            title: "전문 AS",
            description: "숙련된 전문 기술자가 직접 방문하여 정확한 진단과 수리를 제공합니다.",
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-neon-purple" />,
            title: "정기 점검",
            description: "육절기의 최적 성능 유지를 위한 정기적인 점검 서비스를 제공합니다.",
        },
        {
            icon: <Headset className="w-8 h-8 text-neon-purple" />,
            title: "빠른 상담",
            description: "궁금한 점은 언제든지 전화 또는 온라인으로 문의하세요.",
        },
    ];

    return (
        <section id="services" className="py-24 bg-white text-deep-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Service <span className="text-neon-purple">Flow</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        정품 부품 기반 AS와 플랜형 유지보수로 다운타임을 줄입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                            <div className="w-10 h-10 bg-deep-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">01</div>
                            <h4 className="text-lg font-bold mb-2">진단 & 설계</h4>
                            <p className="text-sm text-gray-600">현장 동선, 온·습도, 가동량을 기준으로 장비 조합과 프로세스를 설계합니다.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                            <div className="w-10 h-10 bg-deep-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">02</div>
                            <h4 className="text-lg font-bold mb-2">설치 & 튜닝</h4>
                            <p className="text-sm text-gray-600">슬라이스 두께·속도, 위생 기준에 맞춰 세팅하고 실사용자 교육까지 제공합니다.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                            <div className="w-10 h-10 bg-deep-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">03</div>
                            <h4 className="text-lg font-bold mb-2">AS & 리퍼 지원</h4>
                            <p className="text-sm text-gray-600">정품 부품 기반 AS와 리퍼/중고 교체 옵션을 제안해 다운타임을 최소화합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
