"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white text-deep-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            회사소개
                        </h2>
                        <p className="text-xl text-neon-purple font-medium mb-8">
                            Chaos to Order: 현장의 난제를 질서로 바꾸는 정밀 육절기 파트너
                        </p>

                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-deep-black mb-4">
                                30년 노하우 + 데이터 기반 추천
                            </div>
                            <p>
                                한국후지공업은 1990년부터 육절기 유통 및 서비스를 전문으로 해온 기업입니다.
                                오랜 기간 축적된 노하우와 기술력을 바탕으로 고객 여러분께 최적의 육절기 솔루션을 제공하고 있습니다.
                            </p>
                            <p>
                                <span className="text-neon-cyan font-bold text-deep-black text-lg">35년 이상</span>의 업력과 수많은 현장 레퍼런스를 기반으로,
                                신제품 판매부터 신속하고 정확한 AS, 합리적인 중고 제품 매입 및 판매까지 전체 여정을 설계합니다.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium">HACCP 대응 정품 부품</span>
                            <span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium">서울·수도권 당일 AS</span>
                            <span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium">실사용자 교육/온보딩</span>
                        </div>

                        <ul className="mt-10 space-y-4">
                            <li className="flex gap-4 items-start">
                                <span className="font-bold text-neon-purple shrink-0 w-20">Problem</span>
                                <p className="text-gray-600">예측 불가 다운타임, 불균일 커팅, 위생 리스크</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="font-bold text-neon-cyan text-deep-black shrink-0 w-20">Solution</span>
                                <p className="text-gray-600">현장 진단 → 최적 장비 매칭 → 정품 부품 기반 유지보수</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="font-bold text-gray-400 shrink-0 w-20">CTA</span>
                                <p className="text-gray-600">상담 요청 후 24시간 이내 실행 플랜 공유</p>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/img/company_overview.jpg"
                                alt="한국후지공업 전경"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neon-cyan/20 rounded-full blur-[60px] -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-neon-purple/20 rounded-full blur-[60px] -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
