import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductsPage() {
    const categories = [
        {
            title: "냉장 슬라이서",
            description: "정밀하고 빠른 자동 슬라이싱 기능으로 대량 작업에 최적화된 모델",
            products: [
                { name: "300ES", image: "/img/냉장고속슬라이서.png", specs: "칼날지름: 300mm / 절단두께: 0~15mm" },
                { name: "350ES", image: "/img/냉장고속슬라이서.png", specs: "칼날지름: 350mm / 절단두께: 0~18mm" },
            ],
        },
        {
            title: "냉동 슬라이서",
            description: "견고한 내구성과 사용자 편의성을 겸비한 냉동 슬라이서",
            products: [
                { name: "F-300", image: "/img/냉동육절기.png", specs: "칼날지름: 300mm / 냉동육 전용" },
                { name: "F-350", image: "/img/냉동육절기.png", specs: "칼날지름: 350mm / 강력 모터" },
            ],
        },
        {
            title: "민서기/햄슬라이서",
            description: "좁은 공간에서도 효율적인 사용이 가능한 고성능 민서기",
            products: [
                { name: "M-12", image: "/img/민서기.png", specs: "처리능력: 150kg/h" },
                { name: "M-22", image: "/img/민서기.png", specs: "처리능력: 250kg/h" },
            ],
        },
        {
            title: "진공포장기/골절기",
            description: "HACCP 대응 스테인레스 재질로 안전성과 정밀성을 갖춘 모델",
            products: [
                { name: "V-400", image: "/img/골절기.png", specs: "챔버크기: 400x400mm" },
                { name: "B-200", image: "/img/골절기.png", specs: "톱날길이: 2000mm" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-deep-black pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} /> 메인으로 돌아가기
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Product <span className="text-neon-cyan">List</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        한국후지공업의 전체 제품 라인업을 확인하세요.
                    </p>
                </div>

                <div className="space-y-24">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 border-l-4 border-neon-cyan pl-4">
                                {category.title}
                            </h2>
                            <p className="text-gray-400 mb-8 pl-5">{category.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.products.map((product, pIdx) => (
                                    <div key={pIdx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-neon-cyan/50 transition-colors">
                                        <div className="aspect-video relative bg-white/5 p-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                            <p className="text-gray-400 text-sm">{product.specs}</p>
                                            <button className="mt-4 w-full py-3 bg-white/10 text-white rounded-lg hover:bg-neon-cyan hover:text-deep-black font-bold transition-all">
                                                견적 문의하기
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
