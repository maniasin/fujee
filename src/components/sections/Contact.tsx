"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Send } from "lucide-react";

function ContactContent() {
    const searchParams = useSearchParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const inquiryProduct = searchParams.get("inquiry");
        if (inquiryProduct) {
            setMessage(`문의 제품: ${inquiryProduct}\n\n궁금한 점이 있어 문의드립니다.`);
        }
    }, [searchParams]);

    return (
        <section id="contact" className="py-24 bg-deep-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Contact <span className="text-neon-cyan">Us</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            현장 상황을 공유해주시면 24시간 내 액션 플랜으로 답변드립니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-neon-cyan">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                                    <p className="text-gray-400 mb-1">긴급 AS 및 상담</p>
                                    <a href="tel:010-5204-8374" className="text-2xl font-bold text-white hover:text-neon-cyan transition-colors">
                                        010-5204-8374
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-neon-cyan">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                                    <p className="text-gray-400 mb-1">견적 및 기타 문의</p>
                                    <a href="mailto:winzer6633@naver.com" className="text-lg text-white hover:text-neon-cyan transition-colors">
                                        winzer6633@naver.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-neon-cyan">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                                    <p className="text-gray-400">서울특별시 동대문구 천호대로 47길 62</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-6">온라인 문의</h3>
                        <form action="https://formsubmit.co/maniasin20@naver.com" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">이름</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-deep-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="홍길동"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">전화번호</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full bg-deep-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                                    placeholder="010-1234-5678"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">문의 내용</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-deep-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                                    placeholder="문의하실 내용을 입력해주세요."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-neon-cyan text-deep-black font-bold py-4 rounded-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                문의하기 <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div className="py-24 bg-deep-black text-center text-white">Loading...</div>}>
            <ContactContent />
        </Suspense>
    );
}
