const productsData = {
    'fresh-slicer': {
        name: '냉장 슬라이서/육절기/박피기',
        models: {
            // 냉장 고속 슬라이서
            'TGM': {
                displayName: 'TGM',
                description: `회전 방향을 달리하는 두 개의 원형 칼날을 통해 신속하고 부드러운 절단 (특허)`,
                thumbnail: 'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b540.jpg',
                images: ['https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b540.jpg', 'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b541.jpg', 'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b542.jpg', 'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b543.jpg'],
                features: ['회전 방향을 달리하는 두 개의 원형 칼날 (특허)', '2-Way의 안정적인 윗누름부 방식 채용 (특허)', '신속하고 부드러운 절단', '위생적인 스테인레스 스틸 구조', '카세트식 칼날 교환으로 편리성 증대'],
                specs: {'제품크기': '3490 x 1140 x 1700', '투입크기': '900 x 320 x 180', '처리능력': 'max. 240 Slices/min'}
            },
            'ATT': {
                displayName: 'ATT',
                description: `냉장육 고속 절단 및 0.1mm 단위까지 두께 조절이 가능한 실용적인 모델`,
                thumbnail: 'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d0.jpg',
                images: ['https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d0.jpg', 'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d1.jpg', 'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d2.jpg'],
                features: ['0.1mm 단위까지 두께 조절 가능', '고속 회전 칼날로 생산성 향상', '콤팩트한 디자인', '카세트식 컨베이어로 청소 용이', '고기 밀림 현상 최소화'],
                specs: {'제품크기': '3100 x 1200 x 1480', '투입크기': '1000 x 300 x 150', '처리능력': 'max. 220 Slices/min'}
            },
            // 냉장 육절기 / 박피기
            'COX': {
                displayName: 'COX',
                description: `독일제 칼날과 안전판 센서를 장착한 안정적인 고급형 모델`,
                thumbnail: 'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c550.jpg',
                images: ['https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c550.jpg', 'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c551.jpg', 'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c552.jpg'],
                features: ['독일 GURND & BUNSE 社 칼날 사용', '안전판 센서 부착', '더욱 넓어진 고기받이판', '적재함 인버터 제어', '신개념 칼 보호 커버 장착'],
                specs: {'제품크기': '1080 x 1030 x 1400', '투입크기': '700 x 330 x 200', '처리능력': 'max. 65 Slices/min'}
            },
            'FSK-20-FSK-30': {
                displayName: 'FSK-20 / FSK-30 (박피기)',
                description: `독일 Zico 칼날을 사용하며 물청소가 가능한 위생적인 모델`,
                thumbnail: 'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a20.jpg',
                images: ['https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a20.jpg', 'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a21.jpg', 'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a22.jpg'],
                features: ['독일 Zico 社 칼날 사용', '물청소가 가능한 구조', '정확한 두께로 작업 가능', '항균 우레탄 벨트 사용'],
                specs: {'FSK-20 제품크기': '750 x 710 x 880', 'FSK-30 제품크기': '815 x 710 x 880', '처리능력': 'max. 18 Slices/min'}
            },
            'FSK-20R': {
                displayName: 'FSK-20R',
                description: `고정 손잡이를 이용해 누구나 손쉽게 미세조절 및 작업이 가능한 스키너`,
                thumbnail: 'https://fujee.com/uploaded/product/420/32dd9020b10c217711b136a49cfafe120.png',
                images: ['https://fujee.com/uploaded/product/420/32dd9020b10c217711b136a49cfafe120.png'],
                features: ['돈피, 계육, 오징어 등 껍질제거(스키너)', '손쉬운 미세조절', '편리한 조작', '발판 스위치 작동', '안전성을 고려한 설계'],
                specs: {'제품크기': '940 x 720 x 780', '처리능력': 'max. 18 Slices/min'}
            },
            // 냉장 다이서
            'JDES': {
                displayName: 'JDES (냉장 다이서)',
                description: '신선한 냉장육을 원하는 모양으로 손실없이 깨끗하게 절단',
                thumbnail: 'https://fujee.com/uploaded/product/23/83d5fbd732f65ac8613bf49d5b563c110.jpg',
                images: ['https://fujee.com/uploaded/product/23/83d5fbd732f65ac8613bf49d5b563c110.jpg', 'https://fujee.com/uploaded/product/23/83d5fbd732f65ac8613bf49d5b563c111.jpg', 'https://fujee.com/uploaded/product/23/83d5fbd732f65ac8613bf49d5b563c112.jpg'],
                features: ['다양한 모양의 칼날틀 교체 가능 (다이스, 슬라이스 등)', '간편한 분해 및 세척', '안전 센서 장착'],
                specs: {'제품크기': '2300 x 1140 x 1550', '투입크기': '800 x 300 x 40', '처리능력': 'max. 400kg / h'}
            }
        }
    },
    'frozen-slicer': {
        name: '냉동 슬라이서',
        models: {
            // 냉동 고속슬라이서
            'WARRIOR-FRI-430': {
                displayName: 'WARRIOR (FRI-430)',
                description: `터치스크린과 개폐형 도어를 채택한 고성능 냉동 슬라이서`,
                thumbnail: 'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6440.jpg',
                images: ['https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6440.jpg', 'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6441.jpg', 'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6442.jpg', 'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6443.jpg'],
                features: ['조작이 간편한 터치스크린 컨트롤 판넬', '고기 적재가 편리한 개폐형 도어', '물청소 가능한 방수 대응 설계', '상품 배열 선택 가능 (단속/연속 작업)'],
                specs: {'제품크기': '2700 x 1110 x 1600', '투입크기': '600 x 430 x 210', '처리능력': 'max. 220 Slices/min'}
            },
            'JOS-HIGH-CHOPPER': {
                displayName: 'JOS (High Chopper)',
                description: `분당 300매의 초고속 절단이 가능한 고성능 쵸파기`,
                thumbnail: 'https://fujee.com/uploaded/product/36/37dd36d585974762ac9bf047e6db06320.jpg',
                images: ['https://fujee.com/uploaded/product/36/37dd36d585974762ac9bf047e6db06320.jpg', 'https://fujee.com/uploaded/product/36/b2f03dd8268a657b2a539fb6d36cee240.jpg','https://fujee.com/uploaded/product/36/b2f03dd8268a657b2a539fb6d36cee241.jpg','https://fujee.com/uploaded/product/36/b2f03dd8268a657b2a539fb6d36cee242.jpg'],
                features: ['초고속 절단으로 생산성 극대화', '터치 판넬 방식으로 간편한 조작', '정밀한 두께 조절 기능'],
                specs: {'제품크기': '2400 x 1110 x 1420', '투입크기': '600 x 380 x 200', '처리능력': 'max. 220 Slices/min'}
            },
            'CSM-30': {
                displayName: 'CSM-30 (Chop Cutter)',
                description: `강력한 모터로 갈비, 돈까스 등 두꺼운 냉동육 절단에 최적화된 촙커터`,
                thumbnail: 'https://fujee.com/uploaded/product/34/f7ab62f8a2621b2403fb7930511a37ed0.jpg',
                images: ['https://fujee.com/uploaded/product/34/f7ab62f8a2621b2403fb7930511a37ed0.jpg', 'https://fujee.com/uploaded/product/34/f7ab62f8a2621b2403fb7930511a37ed1.jpg', 'https://fujee.com/uploaded/product/34/f7ab62f8a2621b2403fb7930511a37ed2.jpg', 'https://fujee.com/uploaded/product/34/f7ab62f8a2621b2403fb7930511a37ed3.jpg'],
                features: ['뼈있는 갈비, 돈까스 등 강력한 절단', '위생적인 스테인레스 커버', '안전 센서 장착'],
                specs: {'제품크기': '1810 x 1100 x 1520', '투입크기': '720 x 360 x 200', '처리능력': 'max. 240 Slices/min'}
            },
            'CSM-20': {
                displayName: 'CSM-20 (Chop Cutter)',
                description: `CSM-30의 컴팩트 버전으로 중소형 매장에 적합한 촙커터`,
                thumbnail: 'https://fujee.com/uploaded/product/258/dc4eb7f82cd7e8495ef1ba1dba08b1f20.jpg',
                images: ['https://fujee.com/uploaded/product/258/dc4eb7f82cd7e8495ef1ba1dba08b1f20.jpg', 'https://fujee.com/uploaded/product/258/dc4eb7f82cd7e8495ef1ba1dba08b1f21.jpg', 'https://fujee.com/uploaded/product/258/dc4eb7f82cd7e8495ef1ba1dba08b1f22.jpg', 'https://fujee.com/uploaded/product/258/dc4eb7f82cd7e8495ef1ba1dba08b1f23.jpg'],
                features: ['컴팩트한 사이즈', '강력한 절단력', '안전성 확보'],
                specs: {'제품크기': '1760 x 990 x 1400', '투입크기': '720 x 300 x 200', '처리능력': 'max. 240 Slices/min'}
            },
            // 냉동 육절기
            'SMP-20-30N': {
                displayName: 'SMP-20/30N (냉동 육절기)',
                description: `경제성과 실용성이 뛰어난 보급형 냉동 육절기`,
                thumbnail: 'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a30.jpg',
                images: ['https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a30.jpg', 'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a31.jpg'],
                features: ['HTD벨트를 사용하여 정숙한 운전', '0.1mm 단위까지 미세조절 가능', '스테인레스 특수강 칼날 채용', '장기간 판매로 검증된 안정된 품질'],
                specs: {'20N-제품크기': '975 x 720 x 1400', '30N-제품크기': '1050 x 770 x 1470', '처리능력': '50 Slices/min'}
            },
            'SMP-10S': {
                displayName: 'SMP-10S',
                description: `업소용 소형 육절기`,
                thumbnail: 'https://fujee.com/uploaded/product/421/df829e5228cadfd1eaee3fcb07e461970.png',
                images: ['https://fujee.com/uploaded/product/421/df829e5228cadfd1eaee3fcb07e461970.png'],
                features: ['좁은 공간에 적합', '소규모 업소용', '간편한 조작'],
                specs: {'제품크기': '1450 x 720 x 1020', '적재함 규격': '120 x 330 x 400', '처리능력': '50~55 Slices/min'}
            },
            'SMP-10N': {
                displayName: 'SMP-10N',
                description: `저소음 벨트구동방식의 소형 육절기`,
                thumbnail: 'https://fujee.com/uploaded/product/334/1cf1680e01c72dde55fe01b03ce0902b0.png',
                images: ['https://fujee.com/uploaded/product/334/1cf1680e01c72dde55fe01b03ce0902b0.png', 'https://fujee.com/uploaded/product/334/1cf1680e01c72dde55fe01b03ce0902b1.png', 'https://fujee.com/uploaded/product/334/1cf1680e01c72dde55fe01b03ce0902b2.png', 'https://fujee.com/uploaded/product/334/1cf1680e01c72dde55fe01b03ce0902b3.png'],
                features: ['정숙한 벨트구동방식', '수동/자동 겸용', '칼날 연마 장치 부착'],
                specs: {'제품크기': '1020 x 720 x 1450', '처리능력': '50~55 Slices/min'}
            },
            // 냉동 다이서
            'DDES-L': {
                displayName: 'DDES-L (냉동다이서)',
                description: `대형 원료육을 원하는 크기로 절단하는 대용량 다이서`,
                thumbnail: 'https://fujee.com/uploaded/product/263/531adf37a9bb6ac8baae3e5fd3efb3e70.jpg',
                images: ['https://fujee.com/uploaded/product/263/531adf37a9bb6ac8baae3e5fd3efb3e70.jpg', 'https://fujee.com/uploaded/product/263/531adf37a9bb6ac8baae3e5fd3efb3e71.jpg', 'https://fujee.com/uploaded/product/263/531adf37a9bb6ac8baae3e5fd3efb3e72.jpg', 'https://fujee.com/uploaded/product/263/531adf37a9bb6ac8baae3e5fd3efb3e73.jpg'],
                features: ['대형 원료육 투입 가능', '다양한 사이즈의 칼날틀', '대량 생산성'],
                specs: {'제품크기': '1870 x 830 x 1220', '투입크기': '450 x 300 x 20', '처리능력': '200~400 kg/h'}
            }
        }
    },
    'mincer/ham-slicer': {
        name: '민서기/햄슬라이서',
        models: {
            'MGB-32': {
                displayName: 'MGB-32',
                description: `고성능, 고효율의 대형 민서기. 콤팩트한 외형으로 협소한 장소에서 사용 가능`,
                thumbnail: 'https://fujee.com/uploaded/product/253/abe7d5b287fdecaf55a808e8665dafc90.jpg',
                images: ['https://fujee.com/uploaded/product/253/abe7d5b287fdecaf55a808e8665dafc90.jpg', 'https://fujee.com/uploaded/product/253/19fe20637cb100ee6b316e106f21222c0.jpg', 'https://fujee.com/uploaded/product/253/cb247a495221eb3be833aaeb49eb434f0.jpg', 'https://fujee.com/uploaded/product/253/cb247a495221eb3be833aaeb49eb434f1.jpg'],
                features: ['독일 ZICO社 칼날 및 망 사용', '저소음 강력한 직결 감속기 채용 (5HP)', '고기 접촉부 전체 스테인레스 스틸', '헤드 부분 탈착 레버로 간단히 분리'],
                specs: {'제품크기': '745 x 330 x 900 / 775 x 330 x 900', '처리능력': '500 kg/h'}
            },
            'AGF-20': {
                displayName: 'AGF-20',
                description: `테이블 위에 놓고 사용하는 소형 민서기`,
                thumbnail: 'https://fujee.com/uploaded/product/56/063dae3a823ae99864372ae1609117000.jpg',
                images: ['https://fujee.com/uploaded/product/56/063dae3a823ae99864372ae1609117000.jpg', 'https://fujee.com/uploaded/product/56/063dae3a823ae99864372ae1609117001.jpg', 'https://fujee.com/uploaded/product/56/063dae3a823ae99864372ae1609117002.jpg', 'https://fujee.com/uploaded/product/56/063dae3a823ae99864372ae1609117003.jpg'],
                features: ['협소한 공간에 적합', '소규모 정육점, 식당에서 사용', '스테인레스 재질로 위생적'],
                specs: {'제품크기': '620 x 340 x 420', '처리능력': '200 kg/h'}
            },
            'MGB-32R': {
                displayName: 'MGB-32R',
                description: '냉동육 분쇄에 특화된 리버스 기능 탑재 민서기',
                thumbnail: 'https://fujee.com/uploaded/product/423/678faac554972d46a52944bc0d445b540.png',
                images: ['https://fujee.com/uploaded/product/423/678faac554972d46a52944bc0d445b540.png'],
                features: ['냉동육 분쇄를 위한 리버스(역회전) 기능', '강력한 5HP 모터', '안전장치 완비'],
                specs: {'제품크기': '936 x 424 x 1064', '처리능력': '500 kg/h'}
            },
            'AGF-10': {
                displayName: 'AGF-10',
                description: '가정용 또는 소규모 업소용 초소형 민서기',
                thumbnail: 'https://fujee.com/uploaded/product/422/a4f6d0a287a65658ba871d52db27f7a40.png',
                images: ['https://fujee.com/uploaded/product/422/a4f6d0a287a65658ba871d52db27f7a40.png'],
                features: ['초소형, 초경량', '가정용으로 사용 가능', '간편한 세척'],
                specs: {'제품크기': '620 x 240 x 420', '처리능력': '300 kg/h'}
            },
            'SOL-20': {
                displayName: 'SOL-20',
                description: `소시지, 햄, 가공육 등을 자동으로 절단하여 능률적인 작업이 가능한 모델`,
                thumbnail: 'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d80.jpg',
                images: ['https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d80.jpg', 'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d81.jpg', 'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d82.jpg', 'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d83.jpg'],
                features: ['독일 GURND&BUNSE 社 칼날 사용', '자동(Auto) 기능으로 능률적 작업', '안전 센서 및 비상 정지 버튼'],
                specs: {'제품크기': '850 x 575 x 675', '적재함크기': '240 x 380 x 100', '절단두께': 'max. 20 mm'}
            },
            'HS-1SA': {
                displayName: 'HS-1SA',
                description: `후지의 베스트셀러 햄슬라이서`,
                thumbnail: 'https://fujee.com/uploaded/product/48/ca98f8dd5d015c4715818bfed3870dc50.jpg',
                images: ['https://fujee.com/uploaded/product/48/ca98f8dd5d015c4715818bfed3870dc50.jpg', 'https://fujee.com/uploaded/product/48/ca98f8dd5d015c4715818bfed3870dc51.jpg'],
                features: ['수동/자동 겸용', '안전성을 고려한 설계', '견고한 내구성'],
                specs: {'제품크기': '530 x 330 x 460', '적재함크기': '240 x 400 x 100', '절단두께': 'max. 12 mm'}
            },
            'SOL-S10': {
                displayName: 'SOL-S10',
                description: `수동 작동 방식의 소형 햄슬라이서`,
                thumbnail: 'https://fujee.com/uploaded/product/405/e6bd04f87d56182a9ee4e969f759449f0.png',
                images: ['https://fujee.com/uploaded/product/405/e6bd04f87d56182a9ee4e969f759449f0.png'],
                features: ['수동 작동 방식', '소형 매장에 적합', '칼날 연마 장치 부착'],
                specs: {'제품크기': '600 x 600 x 750', '적재함크기': '300 x 200 x 150', '절단두께': 'max. 11 mm'}
            }
        }
    },
    'vacuumpackaging-machine/band-saw': {
        name: '포장기/골절기',
        models: {
            'NESPA-R3': {
                displayName: 'NESPA-R3 (열성형)',
                description: `소형 업소에 최적화된 컴팩트 열성형 포장기`,
                thumbnail: 'https://fujee.com/uploaded/product/293/185277b994ad348bf48d7b9822b5c9040.jpg',
                images: ['https://fujee.com/uploaded/product/293/185277b994ad348bf48d7b9822b5c9040.jpg', 'https://fujee.com/uploaded/product/293/185277b994ad348bf48d7b9822b5c9041.jpg', 'https://fujee.com/uploaded/product/293/185277b994ad348bf48d7b9822b5c9042.jpg', 'https://fujee.com/uploaded/product/293/185277b994ad348bf48d7b9822b5c9043.jpg'],
                features: ['컴팩트한 사이즈', '간편한 조작', '다양한 식품 포장 가능'],
                specs: {'제품크기': '2815 x 822 x 1970', '몰드크기': '111 x 162 x 60 x 2', '처리능력': '12 packs/min at 2-MOLD'}
            },
            'NESPA-R4X': {
                displayName: 'NESPA-R4X (열성형)',
                description: 'NESPA-R4 모델의 컴팩트 버전',
                thumbnail: 'https://fujee.com/uploaded/product/376/9413a96e6a4a633941468ca1bc569bf70.jpg',
                images: ['https://fujee.com/uploaded/product/376/9413a96e6a4a633941468ca1bc569bf70.jpg', 'https://fujee.com/uploaded/product/376/9413a96e6a4a633941468ca1bc569bf71.jpg', 'https://fujee.com/uploaded/product/376/9413a96e6a4a633941468ca1bc569bf72.jpg', 'https://fujee.com/uploaded/product/376/9413a96e6a4a633941468ca1bc569bf73.jpg'],
                features: ['R4 모델의 컴팩트 버전', '협소한 공간에 설치 용이'],
                specs: {'제품크기': '2978 x 908 x 1992', '몰드크기': '131 x 200 x 60', '처리능력': '12 packs/min at 2-MOLD'}
            },
            'NESPA-R4': {
                displayName: 'NESPA-R4 (열성형)',
                description: '육가공, 수산물, 단무지 등 다양한 제품에 적용 가능한 표준형 모델',
                thumbnail: 'https://fujee.com/uploaded/product/298/e737813dc046f8f118c96224d41713a10.jpg',
                images: ['https://fujee.com/uploaded/product/298/e737813dc046f8f118c96224d41713a10.jpg', 'https://fujee.com/uploaded/product/298/e737813dc046f8f118c96224d41713a11.jpg', 'https://fujee.com/uploaded/product/298/e737813dc046f8f118c96224d41713a12.jpg', 'https://fujee.com/uploaded/product/298/e737813dc046f8f118c96224d41713a13.jpg'],
                features: ['표준형 모델', '다양한 제품 적용', 'PLC 컨트롤 시스템'],
                specs: {'제품크기': '2978 x 908 x 1992', '몰드크기': '131 x 205 x 60 x 2', '처리능력': '12 packs/min at 2-MOLD'}
            },
            'NESPA-R7': {
                displayName: 'NESPA-R7 (열성형)',
                description: '대형 생산라인용 최고사양 열성형 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/294/8a1a8f1d5dee143814a0450386b096c80.jpg',
                images: ['https://fujee.com/uploaded/product/294/8a1a8f1d5dee143814a0450386b096c80.jpg', 'https://fujee.com/uploaded/product/294/8a1a8f1d5dee143814a0450386b096c81.jpg', 'https://fujee.com/uploaded/product/294/8a1a8f1d5dee143814a0450386b096c82.jpg', 'https://fujee.com/uploaded/product/294/8a1a8f1d5dee143814a0450386b096c83.jpg'],
                features: ['최고 사양의 대형기', '고속 생산성', '다양한 필름 적용 가능'],
                specs: {'제품크기': '5650 x 1117 x 2141', '몰드크기': '126 x 162 x 65 x 6', '처리능력': '36 packs/min at 6-MOLD'}
            },
            'ANES-T2': {
                displayName: 'ANES-T2 (스킨포장기)',
                description: '제품의 신선도와 형태를 그대로 유지하는 트레이 실러',
                thumbnail: 'https://fujee.com/uploaded/product/305/0996e2af48e7c49a0892b7b0abdf9fed0.png',
                images: ['https://fujee.com/uploaded/product/305/0996e2af48e7c49a0892b7b0abdf9fed0.png', 'https://fujee.com/uploaded/product/305/0996e2af48e7c49a0892b7b0abdf9fed1.png'],
                features: ['제품 형태 보존', '신선도 유지', '뛰어난 밀봉성'],
                specs: {'제품크기': '400 x 600 x 450', '트레이크기': 'MAX. 260 x 340 x 50', '처리개수': '2~4packs/min', '처리능력': '24s'}
            },
            'ANES-T3': {
                displayName: 'ANES-T3 (스킨포장기)',
                description: 'ANES-T2의 대형 버전',
                thumbnail: 'https://fujee.com/uploaded/product/296/d034db98234c5a7ef8dc510e62faff330.jpg',
                images: ['https://fujee.com/uploaded/product/296/d034db98234c5a7ef8dc510e62faff330.jpg', 'https://fujee.com/uploaded/product/296/d034db98234c5a7ef8dc510e62faff331.jpg', 'https://fujee.com/uploaded/product/296/d034db98234c5a7ef8dc510e62faff332.jpg', 'https://fujee.com/uploaded/product/296/d034db98234c5a7ef8dc510e62faff333.jpg'],
                features: ['T2 모델의 대형 버전', '더 넓은 작업 공간'],
                specs: {'제품크기': '660 x 438 x 552', '챔버크기': '334 x 237 x 59', '처리능력': '3 ~ 4 packs/min'}
            },
            'ANES-R3': {
                displayName: 'ANES-R3 (스킨포장기)',
                description: '자동화된 롤 필름 타입의 고생산성 스킨 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/295/002249e06a893a6dfac44873a9ad59360.jpg',
                images: ['https://fujee.com/uploaded/product/295/002249e06a893a6dfac44873a9ad59360.jpg', 'https://fujee.com/uploaded/product/295/002249e06a893a6dfac44873a9ad59361.jpg', 'https://fujee.com/uploaded/product/295/002249e06a893a6dfac44873a9ad59362.jpg', 'https://fujee.com/uploaded/product/295/002249e06a893a6dfac44873a9ad59363.jpg'],
                features: ['제품의 가치를 높이는 스킨 포장', '롤 필름 자동 공급', '높은 생산성'],
                specs: {'제품크기': '1995 x 1150 x 1680', '몰드크기': '328 x 560', '처리능력': '12 packs/min at 3-Chamber'}
            },
            'NVP-S5': {
                displayName: 'NVP-S5',
                description: 'BUSCH사 펌프 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg',
                images: ['https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a31.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a32.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a33.jpg'],
                features: ['안정된 품질로 검증된 제품', '간편한 조작'],
                specs: {'제품크기': '605 x 764 x 979', '챔버크기': '510 x 600 x 186', '씰링크기': '506 x 11'}
            },
            'HFV-400': {
                displayName: 'HFV-400',
                description: '400mm 접착바의 테이블형 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg',
                images: ['https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a31.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a32.jpg', 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a33.jpg'],
                features: ['콤팩트한 사이즈', '간편한 조작'],
                specs: {'기계치수': '480x590x970mm', '진공실규격': '420x440x180mm', '진공펌프': '20 m³/h'}
            },
            'HFV-500': {
                displayName: 'HFV-500',
                description: `500mm의 넓은 접착바로 대형 제품 포장에 용이한 모델`,
                thumbnail: 'https://fujee.com/uploaded/product/80/6aad961ee366883af3b931ac1f59b39a0.jpg',
                images: ['https://fujee.com/uploaded/product/80/6aad961ee366883af3b931ac1f59b39a0.jpg'],
                features: ['투명 아크릴 진공뚜껑', '손쉬운 진공도 및 시간 조절', '독일 BUSCH社 펌프 사용'],
                specs: {
                    '기계치수': '580 x 690 x 970 mm',
                    '진공실규격': '520 x 540 x 200 mm',
                    '진공펌프': '20 m³/h',
                    '접착바': '500mm x 2EA'
                }
            },
            'HFV-600': {
                displayName: 'HFV-600',
                description: '600mm 접착바의 테이블형 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/106/620c7a16200930ad719f829e480cfac50.jpg',
                images: ['https://fujee.com/uploaded/product/106/620c7a16200930ad719f829e480cfac50.jpg'],
                features: [],
                specs: {'기계치수': '680x790x970mm', '진공실규격': '620x640x200mm', '진공펌프': '20 m³/h'}
            },
            'HFV-700L': {
                displayName: 'HFV-700L',
                description: '경사형 L형 챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/84/9d5fb54c76132699e26bad79b70d9b200.jpg',
                images: ['https://fujee.com/uploaded/product/84/9d5fb54c76132699e26bad79b70d9b200.jpg'],
                features: ['액상 제품 포장에 용이한 경사형'],
                specs: {'기계치수': '800x750x970mm', '진공실규격': '720x620x240mm', '진공펌프': '40/60 m³/h'}
            },
            'HFV-900L': {
                displayName: 'HFV-900L',
                description: '경사형 L형 챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/79/6610d5eba01411395fa2f56750b892e80.jpg',
                images: ['https://fujee.com/uploaded/product/79/6610d5eba01411395fa2f56750b892e80.jpg'],
                features: ['액상 제품 포장에 용이한 경사형'],
                specs: {'기계치수': '980x850x970mm', '진공실규격': '920x620x240mm', '진공펌프': '60/100 m³/h'}
            },
            'HFV-780D': {
                displayName: 'HFV-780D',
                description: `더블 챔버 타입으로 대량 생산에 최적화된 고성능 진공포장기`,
                thumbnail: 'https://fujee.com/uploaded/product/78/a5c3fec0a7ded9f444f6d0f84d1356860.jpg',
                images: ['https://fujee.com/uploaded/product/78/a5c3fec0a7ded9f444f6d0f84d1356860.jpg'],
                features: ['높은 생산성의 더블 챔버 구조', '견고한 스테인레스 스틸 바디', '강력한 진공 성능', '이동이 편리한 바퀴 장착'],
                specs: {
                    '기계치수': '1700 x 860 x 970 mm',
                    '진공실규격': '820 x 620 x 240 mm',
                    '진공펌프': '100 m³/h',
                    '접착바': '780mm x 4EA'
                }
            },
            'HFV-840D': {
                displayName: 'HFV-840D',
                description: '더블챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/77/d1e1f6ffd34c9a76a6782a3e3305f51e0.jpg',
                images: ['https://fujee.com/uploaded/product/77/d1e1f6ffd34c9a76a6782a3e3305f51e0.jpg'],
                features: [],
                specs: {'기계치수': '1820x860x970mm', '진공실규격': '880x620x240mm', '진공펌프': '100 m³/h'}
            },
            'HFV-880D': {
                displayName: 'HFV-880D',
                description: '대형 더블챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/76/1469da13c867c8bde927814328cde9900.jpg',
                images: ['https://fujee.com/uploaded/product/76/1469da13c867c8bde927814328cde9900.jpg'],
                features: [],
                specs: {'기계치수': '1900x900x970mm', '진공실규격': '920x670x240mm', '진공펌프': '100/200 m³/h'}
            },
            'HFV-1180D': {
                displayName: 'HFV-1180D',
                description: '초대형 더블챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/100/f448be75fc563c75c1c390f2614a7bd40.jpg',
                images: ['https://fujee.com/uploaded/product/100/f448be75fc563c75c1c390f2614a7bd40.jpg'],
                features: ['초대형 사이즈', '강력한 200 m³/h 펌프'],
                specs: {'기계치수': '2500x1050x1000mm', '진공실규격': '1220x800x250mm', '진공펌프': '200 m³/h'}
            },
            'HFV-600L/HFV-600XL': {
                displayName: 'HFV-600L/XL',
                description: '경사형 L형 챔버 진공포장기',
                thumbnail: 'https://fujee.com/uploaded/product/335/c548dcd15d1abae024263f2c32fa95db1.jpg',
                images: ['https://fujee.com/uploaded/product/335/c548dcd15d1abae024263f2c32fa95db1.jpg'],
                features: ['액상 제품 포장에 용이한 경사형'],
                specs: {'기계치수': '700x650x970mm', '진공실규격': '620x520x240mm', '진공펌프': '20/40 m³/h'}
            },
            'HAS-350S': {
                displayName: 'HAS-350S',
                description: '표준 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/67/8143a0f8214bcbd8743778a454dcb1d80.jpg',
                images: ['https://fujee.com/uploaded/product/67/8143a0f8214bcbd8743778a454dcb1d80.jpg'],
                features: ['HACCP에 맞춘 스테인레스 재질로 제작', '작업의 안정성과 정밀성을 두루 갖춤', '물청소가 용이'],
                specs: {'기계치수': '820 x 700 x 1650', '테이블규격': '800 x 600', '톱날규격': '2275x16x0.55'}
            },
            'HBS-350S': {
                displayName: 'HBS-350S',
                description: 'HAS-350S와 유사한 사양의 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/68/339af00d87dabd31eb011ac4c7fc65530.jpg',
                images: ['https://fujee.com/uploaded/product/68/339af00d87dabd31eb011ac4c7fc65530.jpg'],
                features: ['안전성 강화', '정밀 절단'],
                specs: {'최대절단높이': '350mm', '톱날길이': '2,515mm'}
            },
            'HBS-350': {
                displayName: 'HBS-350',
                description: '표준형 스탠드 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/94/9c79a6d9c65c6624c7613ab6c81e615b0.jpg',
                images: ['https://fujee.com/uploaded/product/94/9c79a6d9c65c6624c7613ab6c81e615b0.jpg'],
                features: ['경제적인 모델', '안정적인 성능'],
                specs: {'최대절단높이': '350mm', '톱날길이': '2,515mm'}
            },
            'HBS-250A': {
                displayName: 'HBS-250A',
                description: `협소한 공간에 적합한 테이블형 소형 골절기`,
                thumbnail: 'https://fujee.com/uploaded/product/73/2fd4062489666f83dd221f1ad79407ad0.jpg',
                images: ['https://fujee.com/uploaded/product/73/2fd4062489666f83dd221f1ad79407ad0.jpg'],
                features: ['테이블 위에 놓고 사용하는 소형 모델', '스테인레스 재질로 위생적', '안전성을 고려한 설계'],
                specs: {'기계치수': '650 x 550 x 1000 mm', '테이블규격': '420 x 380 mm', '톱날길이': '1,650 mm'}
            },
            'HBS-250B': {
                displayName: 'HBS-250B',
                description: '테이블형 소형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/74/63a4caf18639fe72e04019427a5839b90.jpg',
                images: ['https://fujee.com/uploaded/product/74/63a4caf18639fe72e04019427a5839b90.jpg'],
                features: [],
                specs: {'기계치수': '530 x 460 x 930', '작업대 크기': '420 x 380', '톱날규격': '1650 x 16 x 0.55'}
            },
            'HAS-400S': {
                displayName: 'HAS-400S',
                description: 'HAS-350S의 대형 버전 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/65/c29e0bc7ac033a1159c21879e3497f2d0.jpg',
                images: ['https://fujee.com/uploaded/product/65/c29e0bc7ac033a1159c21879e3497f2d0.jpg'],
                features: ['HACCP 기준 올 스테인레스', '대형육 절단 가능'],
                specs: {'기계치수': '810 x 900 x 1770', '작업대 크기': '800 x 360', '톱날규격': '2670 x 16 x 0.55'}
            },
            'HBS-400S': {
                displayName: 'HBS-400S',
                description: '400mm 절단 높이의 스탠드형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/66/2c185bbb24040bad9cbec80f2f67f79e0.jpg',
                images: ['https://fujee.com/uploaded/product/66/2c185bbb24040bad9cbec80f2f67f79e0.jpg'],
                features: ['강력한 모터', '안전 설계'],
                specs: {'기계치수': '780 x 960 x 1770', '작업대 크기': '860 x 590', '톱날규격': '2670 x 16 x 0.55'}
            },
            'HBS-400': {
                displayName: 'HBS-400',
                description: `대형육, 냉동어류 절단에 용이한 대형 골절기`,
                thumbnail: 'https://fujee.com/uploaded/product/93/bc6b9a456331d5358edcc9a1a426cfb80.jpg',
                images: ['https://fujee.com/uploaded/product/93/bc6b9a456331d5358edcc9a1a426cfb80.jpg'],
                features: ['강력한 3마력 모터 장착', '안전 브레이크 시스템', '이동식 테이블'],
                specs: {'기계치수': '790 x 950 x 1880', '작업대 크기': '860 x 590', '톱날규격': '2645 x 16 x 0.55'}
            },
            'HBS-330T': {
                displayName: 'HBS-330T',
                description: '테이블형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/71/93f2b627a1fbc06f7f55f5905b17dd3d0.jpg',
                images: ['https://fujee.com/uploaded/product/71/93f2b627a1fbc06f7f55f5905b17dd3d0.jpg'],
                features: ['AL 주조품에 특수 도장처리를 하여 만듬 제품'],
                specs: {'기계치수': '610 x 585 x 1570', '작업대 크기': '520 x 440', '톱날규격': '1980 x 16 x 0.55'}
            },
            'HBS-330A': {
                displayName: 'HBS-330A',
                description: '테이블형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/95/d814985818a8db88be35d4d913ad8e100.jpg',
                images: ['https://fujee.com/uploaded/product/95/d814985818a8db88be35d4d913ad8e100.jpg'],
                features: ['AL 주조품에 특수 도장처리를 하여 만듬 제품'],
                specs: {'기계치수': '600 x 590 x 1040', '작업대 크기': '520 x 440', '톱날규격': '1980 x 16 x 0.55'}
            },
            'V16': {
                displayName: 'V16',
                description: '수입 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/64/9c931e5935587bb52e542a2b71ddba5c0.jpg',
                images: ['https://fujee.com/uploaded/product/64/9c931e5935587bb52e542a2b71ddba5c0.jpg'],
                features: ['HACCP에 맞춘 스테인레스 재질로 제작', '톱날이 닿는 휠 부분의 평면가공으로 우수한 직진성 확보'],
                specs: {'기계치수': '1000 x 950 x 1710', '작업대 크기': '900 x 870', '톱날규격': '3150 x 16 x 0.55'}
            },
            'HBS-250D': {
                displayName: 'HBS-250D',
                description: '테이블형 소형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/97/4591a102b618621992646b62b8b26b290.jpg',
                images: ['https://fujee.com/uploaded/product/97/4591a102b618621992646b62b8b26b290.jpg'],
                features: [],
                specs: {'기계치수': '530 x 460 x 850', '작업대 크기': '420 x 380', '톱날규격': '1650 x 16 x 0.55'}
            },
            'HBS-250': {
                displayName: 'HBS-250',
                description: '스탠드형 소형 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/98/68b511d2597af19ad4992091cd981b690.jpg',
                images: ['https://fujee.com/uploaded/product/98/68b511d2597af19ad4992091cd981b690.jpg'],
                features: [],
                specs: {'기계치수': '530 x 460 x 850', '작업대 크기': '420 x 380', '톱날규격': '1650 x 16 x 0.55'}
            },
            'BS-S4': {
                displayName: 'BS-S4',
                description: '수입 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/425/fbc48b042ac1b81aff10827bc8cd75460.png',
                images: ['https://fujee.com/uploaded/product/425/fbc48b042ac1b81aff10827bc8cd75460.png'],
                features: ['톱날 잡이 및 텐션 조절 장치가 있어 안전하고 흔들림 없이 사용 가능'],
                specs: {'기계치수': '1680 x 590 x 1100', '톱날규격': '#2275'}
            },
            'K-16': {
                displayName: 'K-16',
                description: '수입 골절기',
                thumbnail: 'https://fujee.com/uploaded/product/336/e6781d65f83207417da4aa7ee1c4abc80.png',
                images: ['https://fujee.com/uploaded/product/336/e6781d65f83207417da4aa7ee1c4abc80.png'],
                features: ['HACCP에 맞춘 스테인레스 재질로 제작'],
                specs: {'기계치수': '700 x 820 x 1650', '작업대 크기': '580 x 610', '톱날규격': '2275 x 16 x 0.55'}
            }
        }
    }
};