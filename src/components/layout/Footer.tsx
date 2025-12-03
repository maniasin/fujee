import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/img/logo.png"
                                    alt="Korea Fuji Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    sizes="(max-width: 768px) 150px, 192px"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            최고의 품질과 기술력으로 고객의 성공을 돕습니다.
                            <br />
                            육가공 기계 및 포장 기계 전문 기업 한국후지공업 답십리 대리점입니다.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-neon-cyan shrink-0 mt-1" />
                                <p>서울특별시 동대문구 천호대로 47길 62</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-neon-cyan shrink-0" />
                                <a href="tel:02-2246-6800" className="hover:text-white transition-colors">
                                    02-2246-6800
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                                <a href="mailto:winzer6633@naver.com" className="hover:text-white transition-colors">
                                    winzer6633@naver.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                    회사소개
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                    제품소개
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                    서비스 (AS/수리)
                                </Link>
                            </li>
                            <li>
                                <Link href="#used" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                    중고 제품
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>대표: 이병진 | 사업자등록번호: 419-29-00433</p>
                    <p className="mt-2">© 2025 한국후지공업 답십리 총판점 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
