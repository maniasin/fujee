// --- 갤러리 및 모달 기능 (기존 유지) ---

    const productCategoryModal = document.getElementById('productCategoryModal');
    // 안전한 접근을 위해 null 체크 추가
    const categoryCloseBtn = productCategoryModal ? productCategoryModal.querySelector('.close-btn') : null;
    const categoryModalTitle = productCategoryModal ? productCategoryModal.querySelector('.category-modal-title') : null;
    const categoryProductGrid = productCategoryModal ? productCategoryModal.querySelector('.category-product-grid') : null;

    const imageGalleryModal = document.getElementById('imageGalleryModal');
    // 안전한 접근을 위해 null 체크 추가
    const galleryCloseBtn = imageGalleryModal ? imageGalleryModal.querySelector('.close-btn') : null;
    const galleryTitle = imageGalleryModal ? imageGalleryModal.querySelector('.gallery-title') : null;
    const modalGalleryGrid = imageGalleryModal ? imageGalleryModal.querySelector('.js-masonry-modal-gallery') : null;

    const productsData = {
        'fresh-slicer': {
            name: '냉장 슬라이서 제품 목록',
            models: {
                'TGM': {
                    displayName: 'TGM',
                    description: `회전 방향을 달리하는 두 개의 원형 칼날을 통해 신속하고 부드러운 절단 (특허)
                                 2-Way의 안정적인 윗누름부 방식 채용 (특허)`,
                    thumbnail: 'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b540.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b540.jpg',
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b541.jpg',
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b542.jpg',
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b543.jpg'
                    ]
                },
                'ATT': {
                    displayName: 'ATT',
                    description: `냉장육 고속 절단
                                 0.1mm 단위까지 두께 조절`,
                    thumbnail: 'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d0.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d0.jpg',
                        'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d1.jpg',
                        'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d2.jpg',
                        'https://fujee.com/uploaded/product/22/27d00dbd41ef2ee27bf5b5369838bd4d3.jpg'                        
                    ]
                },
                'COX': {
                    displayName: 'COX',
                    description: `칼날 : 독일 GURND&BUNSE
                                 안전판 센서
                                 더욱 넓어진 고기받이판`,
                    thumbnail: 'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c550.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c550.jpg',
                        'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c551.jpg',
                        'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c552.jpg',
                        'https://fujee.com/uploaded/product/39/aaca45f67d7a5eaf9b469682fe591c553.jpg'
                    ]
                },
                'FSK-20 / FSK-30': {
                    displayName: 'FSK-20 / FSK-30',
                    description: `칼날 : 독일 Zico
                                 물청소가 가능한 구조
                                 정확한 두께로 작업 가능`,
                    thumbnail: 'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a20.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a20.jpg',
                        'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a21.jpg',
                        'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a22.jpg',
                        'https://fujee.com/uploaded/product/63/0c67825d6b2afd835ad0a5ea77bb33a23.jpg'
                    ]
                },
                'FSK-20R': {
                    displayName: 'FSK-20R',
                    description: `고정 손잡이를 이용해 손쉽게 미세조절 가능
                                 사용자가 편리한 조작으로 누구나 쉽게 작업 가능`,
                    thumbnail: 'https://fujee.com/uploaded/product/420/32dd9020b10c217711b136a49cfafe120.png',
                    images: [
                        'https://fujee.com/uploaded/product/420/32dd9020b10c217711b136a49cfafe120.png'
                    ]
                }
            }
        },
        'frozen-slicer': {
            name: '냉동 슬라이서 제품 목록',
            models: {
                'WARRIOR (FRI-430)': {
                    displayName: 'WARRIOR (FRI-430)',
                    description: `조작이 간편한 터치스크린 컨트롤 판넬 채택
                                 고기 적재시 편리성을 추구한 개폐형 도어`,
                    thumbnail: 'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6440.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6440.jpg',
                        'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6441.jpg',
                        'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6442.jpg',
                        'https://fujee.com/uploaded/product/292/e57def7a04b4d1e2af235f1cdb76a6443.jpg'
                    ]
                },
                'SMP-20/30N(냉동 육절기)': {
                    displayName: 'SMP-20/30N(냉동 육절기)',
                    description: `경제성과 실용성이 뛰어난 보급형 제품
                                 칼날구동의 HTD벨트 사용하여 정숙한 운전`,
                    thumbnail: 'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a30.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a30.jpg',
                        'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a31.jpg',
                        'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a32.jpg',
                        'https://fujee.com/uploaded/product/51/054e5a7d1beee8eaf9945810294449a33.jpg'
                    ]
                }
            }
        },
        'mincer/ham-slicer': {
            name: '민서기/햄슬라이서 제품 목록',
            models: {
                'MGB-32': {
                    displayName: 'MGB-32',
                    description: `국산 칼날, 망- ø6대형, 고성능, 고효율 타입 
                                 콤팩트한 외형으로 협소한 장소에서도 작업 가능`,
                    thumbnail: 'https://fujee.com/uploaded/product/253/abe7d5b287fdecaf55a808e8665dafc90.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/253/abe7d5b287fdecaf55a808e8665dafc90.jpg'                        
                    ]
                },
                'SOL-20': {
                    displayName: 'SOL-20',
                    description: `칼날 : 독일 GURND&BUNSE 
                                 소시지, 햄, 가공육, 치즈, 생선, 정육 등의 손쉬운 절단`,
                    thumbnail: 'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d80.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d80.jpg',
                        'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d81.jpg',
                        'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d82.jpg',
                        'https://fujee.com/uploaded/product/47/e22a5766aadc4ef4c1aab75ca7a5d5d83.jpg'
                    ]
                }
            }
        },
        'vacuumpackaging-machine/band-saw': {
            name: '진공포장기/골절기 제품 목록',
            models: {
                'NVP-S5': {
                    displayName: 'NVP-S5',
                    description: `안정된 품질로 검증된 제품 BUSCH사 펌프
                                 조작이 간편한 구조`,
                    thumbnail: 'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a30.jpg',
                        'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a31.jpg',
                        'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a32.jpg',
                        'https://fujee.com/uploaded/product/82/21b1f933920d21a9d05abfa1cbb525a33.jpg'
                    ]
                },
                'HAS-350S': {
                    displayName: 'HAS-350S',
                    description: `HACCP에 맞춘 스테인레스 재질로 제작
                                 작업의 안전성과 정밀성을 두루 갖춤`,
                    thumbnail: 'https://fujee.com/uploaded/product/67/8143a0f8214bcbd8743778a454dcb1d80.jpg',
                    images: [
                        'https://fujee.com/uploaded/product/67/8143a0f8214bcbd8743778a454dcb1d80.jpg'                        
                    ]
                },
            }
        }
    };

    const usedProductsData = {
        'used_fuji_auto_slicer': {
            displayName: '중고 후지 자동 슬라이서 (상태 A급)',
            images: [
                'img/중고1.jpg',
                'https://placehold.co/800x600/ccddeeff/fff?text=Used+Fuji+Slicer+2',
                'https://placehold.co/800x600/ffbbcc/fff?text=Used+Fuji+Slicer+3'
            ]
        },
        'used_stainless_slicer': {
            displayName: '중고 스텐 육절기 (경정비 완료)',
            images: [
                'img/중고2.jpg', // HTML에 있는 img/중고2.jpg 사용
                'https://placehold.co/800x600/ddccbbaa/333?text=Used+Stainless+Slicer+2',
                'https://placehold.co/800x600/aa11bb/333?text=Used+Stainless+Slicer+3'
            ]
        }
    };

    const openProductCategoryModal = (categoryId) => {
        const category = productsData[categoryId];
        if (!category) {
            console.error('Category not found:', categoryId);
            showMessageBox('제품 카테고리 정보를 찾을 수 없습니다.', 'error');
            return;
        }
        if (categoryModalTitle && categoryProductGrid && productCategoryModal) { // 요소 존재 여부 확인
            categoryModalTitle.textContent = category.name;
            categoryProductGrid.innerHTML = '';

            for (const modelId in category.models) {
                const model = category.models[modelId];
                const productCard = document.createElement('div');
                productCard.classList.add('category-product-card');
                productCard.dataset.modelId = modelId;

                productCard.innerHTML = `
                    <img src="https://placehold.co/1x1/E0E0E0/E0E0E0" data-src="${model.thumbnail}" alt="${model.displayName}" loading="lazy">
                    <h4>${model.displayName}</h4>
                    <p>${model.description.replace(/\n/g, '<br>')}</p>
                `;
                productCard.addEventListener('click', () => {
                    openImageGalleryModal(model.displayName, model.images);
                });
                categoryProductGrid.appendChild(productCard);
            }

            productCategoryModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            const modalLazyImages = productCategoryModal.querySelectorAll('img[data-src]');
            modalLazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    };

    const closeProductCategoryModal = () => {
        if (productCategoryModal) { // 요소 존재 여부 확인
            productCategoryModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    let modalMasonryInstance;

    const openImageGalleryModal = (title, imagesArray) => {
        if (!galleryTitle || !modalGalleryGrid || !imageGalleryModal) return; // 요소 존재 여부 확인

        galleryTitle.textContent = title;
        modalGalleryGrid.innerHTML = ''; // 이전 콘텐츠 지우기

        if (imagesArray.length === 0) {
            modalGalleryGrid.innerHTML = '<p style="text-align: center; color: var(--light-text-color);">표시할 이미지가 없습니다.</p>';
            imageGalleryModal.classList.add('active');
            return;
        }

        // 기존 Masonry 인스턴스 파괴 후 새 아이템 추가
        if (modalMasonryInstance) {
            modalMasonryInstance.destroy();
            modalMasonryInstance = null;
        }

        const newImageElements = []; // 새로 생성된 이미지 요소들을 저장할 배열
        imagesArray.forEach(imgSrc => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item-modal');
            const img = document.createElement('img');
            img.src = "https://placehold.co/1x1/E0E0E0/E0E0E0"; // tiny placeholder to ensure src attribute exists
            img.dataset.src = imgSrc; // 실제 이미지 소스는 data-src로
            img.alt = "갤러리 이미지";
            img.loading = "lazy"; // 표준 지연 로딩
            gridItem.appendChild(img);
            modalGalleryGrid.appendChild(gridItem);
            newImageElements.push(img); // 이미지 요소 수집
        });

        imageGalleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // DOM에 아이템 추가 후 즉시 Masonry 초기화
        // Masonry는 초기 위치 계산을 위해 DOM에 요소가 있어야 합니다.
        modalMasonryInstance = new Masonry(modalGalleryGrid, {
            itemSelector: '.grid-item-modal',
            columnWidth: '.grid-item-modal', // CSS에 정의된 너비 사용
            gutter: 10,
            percentPosition: true, // 반응형 너비에 중요
            transitionDuration: '0.4s'
        });

        // 이미지가 로드될 때마다 Masonry 레이아웃 재조정 및 지연 로딩 트리거
        newImageElements.forEach(img => {
            const masonryRelayoutOnLoad = () => {
                if (modalMasonryInstance) {
                    modalMasonryInstance.layout(); // 이미지가 로드될 때 레이아웃 재계산
                }
                img.removeEventListener('load', masonryRelayoutOnLoad);
                img.removeEventListener('error', masonryRelayoutOnLoad); // 오류 발생 시에도 처리
            };

            // 이미지 로드 이벤트를 잡기 위해 관찰 전에 이벤트 리스너 부착
            img.addEventListener('load', masonryRelayoutOnLoad);
            img.addEventListener('error', masonryRelayoutOnLoad);

            // 지연 로딩을 위해 Intersection Observer 트리거
            imageObserver.observe(img);
        });

        // 옵션: 모든 이미지 로딩이 시작된 후 최종 레이아웃 재조정
        // imagesLoaded는 모든 이미지가 처리(로드/오류)되었을 때 감지합니다.
        if (typeof imagesLoaded !== 'undefined') {
            imagesLoaded(modalGalleryGrid).on('always', function() {
                setTimeout(() => { // 브라우저에 약간의 시간 주기
                    if (modalMasonryInstance) {
                        modalMasonryInstance.layout();
                    }
                }, 150); // 짧은 지연이 여전히 유용
            });
        } else {
            console.warn("imagesLoaded 라이브러리가 정의되지 않았습니다. Masonry 레이아웃이 덜 안정적일 수 있습니다.");
            // imagesLoaded가 없는 경우, 개별 이미지 로드 핸들러에 더 많이 의존
            setTimeout(() => {
                if (modalMasonryInstance) {
                    modalMasonryInstance.layout();
                }
            }, 500); // imagesLoaded가 없는 경우 더 긴 대체 지연
        }
    };

    const closeImageGalleryModal = () => {
        if (imageGalleryModal) { // 요소 존재 여부 확인
            imageGalleryModal.classList.remove('active');
            // 제품 카테고리 모달이 여전히 활성화되어 있다면, overflow hidden을 제거하지 않습니다.
            if (!productCategoryModal || !productCategoryModal.classList.contains('active')) { // 요소 존재 여부 확인
                document.body.style.overflow = '';
            }
            if (modalMasonryInstance) {
                modalMasonryInstance.destroy(); // 닫을 때 Masonry 인스턴스 파괴
                modalMasonryInstance = null;
            }
        }
    };

    document.querySelectorAll('.product-card .view-category-btn').forEach(button => { // 버튼 클릭에만 반응하도록 수정
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // 카드 자체 클릭 이벤트와 중복 방지
            const categoryId = button.closest('.product-card').dataset.categoryId;
            if (categoryId) {
                openProductCategoryModal(categoryId);
            } else {
                console.warn('제품 카드 버튼이 클릭되었으나 data-categoryId가 없습니다:', button.closest('.product-card'));
            }
        });
    });

    document.querySelectorAll('.used-product-item').forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.dataset.productId;
            const product = usedProductsData[productId];
            if (product) {
                openImageGalleryModal(product.displayName, product.images);
            } else {
                console.error('중고 제품을 찾을 수 없습니다:', productId);
                showMessageBox('선택하신 중고 제품의 정보를 찾을 수 없습니다.', 'error');
            }
        });
    });

    if (categoryCloseBtn) categoryCloseBtn.addEventListener('click', closeProductCategoryModal); // 요소 존재 여부 확인
    if (productCategoryModal && productCategoryModal.querySelector('.modal-overlay')) { // 요소 존재 여부 확인
        productCategoryModal.querySelector('.modal-overlay').addEventListener('click', closeProductCategoryModal);
    }

    if (galleryCloseBtn) galleryCloseBtn.addEventListener('click', closeImageGalleryModal); // 요소 존재 여부 확인
    if (imageGalleryModal && imageGalleryModal.querySelector('.modal-overlay')) { // 요소 존재 여부 확인
        imageGalleryModal.querySelector('.modal-overlay').addEventListener('click', closeImageGalleryModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (imageGalleryModal && imageGalleryModal.classList.contains('active')) { // 요소 존재 여부 확인
                closeImageGalleryModal();
            } else if (productCategoryModal && productCategoryModal.classList.contains('active')) { // 요소 존재 여부 확인
                closeProductCategoryModal();
            }
        }
    });

    // --- Kakao Map 초기화 및 마커 추가 기능 ---
    let mapInstance; // mapInstance를 전역적으로 접근 가능하도록 선언
    let kakaoMapLoaded = false; // 카카오맵이 한 번 로드되었는지 추적하는 플래그

    function initializeAndRelayoutKakaoMap() {
        if (!window.kakao || !window.kakao.maps) {
            console.error("카카오 지도 API가 로드되지 않았습니다. 앱키, 도메인 등록, 네트워크 연결을 확인해주세요.");
            showMessageBox("지도 API 로드에 문제가 있습니다. 개발자 도구를 확인해주세요.", 'error');
            return;
        }

        const mapContainer = document.getElementById('kakao-map');
        if (!mapContainer) {
            console.error("오류: ID 'kakao-map'를 가진 지도 컨테이너 div를 찾을 수 없습니다.");
            showMessageBox("지도를 표시할 수 없습니다. 지도 컨테이너를 찾을 수 없습니다.", 'error');
            return;
        }

        // 지도가 이미 초기화되었다면 relayout만 수행하고 종료
        if (kakaoMapLoaded) {
            mapInstance.relayout();
            mapInstance.setCenter(mapInstance.getCenter());
            console.log('카카오 맵 재배치 완료.');
            return;
        }

        // 지도가 아직 초기화되지 않았다면 초기화 진행
        kakao.maps.load(() => {
            const geocoder = new kakao.maps.services.Geocoder();
            const address = '서울특별시 동대문구 천호대로 47길 62';
            // 주소 검색 실패 시 사용할 기본 좌표 (예: 서울 시청)
            const defaultCoords = new kakao.maps.LatLng(37.566826, 126.9786567);

            geocoder.addressSearch(address, (result, status) => {
                let centerCoords;
                if (status === kakao.maps.services.Status.OK && result.length > 0) {
                    centerCoords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    console.log('주소-좌표 변환 성공:', result[0].address_name, centerCoords.getLat(), centerCoords.getLng());
                } else {
                    console.error('주소-좌표 변환 실패:', status, '기본 위치를 사용합니다.');
                    showMessageBox('지도 주소 검색에 실패했습니다. 기본 위치를 표시합니다.', 'error');
                    centerCoords = defaultCoords; // 변환 실패 시 기본 좌표 사용
                }

                // 지도를 초기화합니다. (geocoder 결과 또는 기본 좌표 사용)
                const mapOption = {
                    center: centerCoords, // Geocoder 결과 또는 기본 좌표로 설정
                    level: 3
                };
                mapInstance = new kakao.maps.Map(mapContainer, mapOption);
                console.log('카카오 맵 초기화 성공.');
                kakaoMapLoaded = true; // 지도 초기화 완료 플래그 설정

                // 커스텀 오버레이는 주소 변환 성공 시에만 추가
                if (status === kakao.maps.services.Status.OK && result.length > 0) {
                    const content = `
                        <div style="
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            background-color: white;
                            border: 1px solid #ccc;
                            border-radius: 8px;
                            padding: 8px 12px;
                            box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
                            white-space: nowrap;
                        ">
                            <img src="img/logo_on.png" alt="한국후지공업 로고" style="width: 120px; height: auto; margin-bottom: 5px;">
                            <div style="
                                font-size: 14px;
                                font-weight: bold;
                                color: #333;
                                padding-top: 5px;
                                border-top: 1px solid #eee;
                                width: 100%;
                                text-align: center;
                            ">
                                한국후지 답십리점
                            </div>
                            <div style="
                                position: absolute;
                                bottom: -10px;
                                left: 50%;
                                transform: translateX(-50%);
                                width: 0;
                                height: 0;
                                border-left: 10px solid transparent;
                                border-right: 10px solid transparent;
                                border-top: 10px solid white;
                            "></div>
                        </div>
                    `;

                    new kakao.maps.CustomOverlay({
                        map: mapInstance,
                        position: centerCoords,
                        content: content,
                        yAnchor: 1
                    });
                }

                // 컨트롤은 항상 추가
                const zoomControl = new kakao.maps.ZoomControl();
                mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                const mapTypeControl = new kakao.maps.MapTypeControl();
                mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
            });
        });
    }

    // --- 이미지 지연 로딩 (Lazy Loading) 기능 ---
    const lazyImages = document.querySelectorAll('img[data-src]:not(.grid-item-modal img)');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add('loaded');
                };
                img.onerror = () => {
                    console.error('이미지 로드 실패:', img.dataset.src);
                    img.src = 'https://placehold.co/150x150/AAAAAA/FFFFFF?text=Error';
                };
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 100px 0px'
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // --- 챗봇 기능 ---
    const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotCloseBtn = document.getElementById('chatbotCloseBtn'); // 챗봇 닫기 버튼 ID
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSendBtn = document.getElementById('chatbotSendBtn');
    // 초기 퀵 리플라이 버튼들은 HTML에 이미 존재하므로 별도의 querySelectorAll은 필요 없으며,
    // 아래 이벤트 위임을 통해 모두 처리됩니다.

    // FAQ 응답 데이터
    const faqResponses = {
        "회사소개": "한국후지공업은 35년 넘게 육가공 기계 및 특수 포장 기계를 제조, 판매해온 전문 기업입니다. 최고의 기술력과 노하우로 고객 여러분의 성공을 돕겠습니다.",
        "제품소개": "저희는 냉장/냉동 슬라이서, 민서기, 햄 슬라이서, 특수 포장기, 진공 포장기, 골절기 등 다양한 고품질 육가공 기계를 취급합니다. 자세한 내용은 '제품' 메뉴를 참고해주세요.",
        "AS문의": "AS 문의는 고객센터 02-2246-6800 또는 010-5204-8374로 전화 주시거나, '문의하기' 섹션을 통해 온라인으로 접수해주시면 신속하게 처리해 드리겠습니다.",
        "중고제품": "저희는 상태 좋은 중고 육가공 기계도 판매하고 있습니다. 합리적인 가격으로 검증된 성능의 장비를 만나보세요. '중고제품' 섹션에서 확인 가능합니다.",
        "연락처": "저희 한국후지공업 답십리 총판점은 서울특별시 동대문구 천호대로 47길 62에 위치해 있습니다. 전화번호는 02-2246-6800 입니다.",
        "영업시간": "저희 영업시간은 평일 오전 9시부터 오후 6시까지입니다. 주말 및 공휴일은 휴무입니다.",
        "배송문의": "제품 배송은 주문 후 3~5 영업일이 소요됩니다. 특수 제품이나 지방 배송의 경우 추가 시간이 소요될 수 있습니다. 자세한 내용은 문의하기를 통해 상담해주세요.",
        "재고문의": "재고는 실시간으로 변동될 수 있습니다. 특정 제품의 재고 여부는 '문의하기' 또는 전화로 문의해주시면 정확한 정보를 안내해 드리겠습니다.",
        "기타문의": "다른 궁금한 점이 있으시면 언제든지 메시지를 남겨주세요. 최대한 빠르게 답변 드리겠습니다."
    };


    if (chatbotToggleBtn && chatbotWindow && chatbotCloseBtn && chatbotMessages && chatbotInput && chatbotSendBtn) {
        // 챗봇 토글 버튼 클릭 이벤트
        chatbotToggleBtn.addEventListener('click', () => {
            console.log("챗봇 토글 버튼 클릭됨!"); // 디버깅용 로그
            chatbotWindow.classList.toggle('active');
            // 챗봇이 열릴 때 메시지 스크롤 최하단으로
            if (chatbotWindow.classList.contains('active')) {
                scrollToBottomChat();
            }
        });

        // 챗봇 닫기 버튼 클릭 이벤트
        chatbotCloseBtn.addEventListener('click', () => {
            console.log("챗봇 닫기 버튼 클릭됨!"); // 디버깅용 로그
            chatbotWindow.classList.remove('active');
        });

        // 챗봇 메시지를 하단으로 스크롤
        function scrollToBottomChat() {
            if (chatbotMessages) {
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }

        // 메시지 추가 함수
        function addMessage(text, sender) {
            if (chatbotMessages) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', `${sender}-message`);
                messageElement.textContent = text;
                chatbotMessages.appendChild(messageElement);
                scrollToBottomChat();
            }
        }

        // 챗봇 메시지 처리 (FAQ 기반 응답)
        async function sendMessageToChatbot(query) {
            addMessage(query, 'user');
            console.log("사용자 메시지 전송:", query); // 디버깅

            const normalizedQuery = query.toLowerCase().trim(); // 쿼리 정규화 (소문자, 공백 제거)
            let botResponseText = "죄송합니다. 이해하지 못했습니다. 회사소개, 제품소개, AS문의, 중고제품, 연락처, 영업시간, 배송문의, 재고문의, 기타문의 중 하나를 선택하시거나 입력해주세요.";

            // FAQ 응답 찾기
            // 가장 정확한 일치를 찾기 위해 query를 직접 사용
            if (faqResponses[query]) {
                botResponseText = faqResponses[query];
            } else {
                // 부분 일치 또는 유사 질문 처리 (선택 사항, 여기서는 단순화)
                // 현재는 정확히 일치하는 경우만 응답
            }

            // 답변 메시지 추가
            setTimeout(() => { // 봇이 생각하는 척 작은 지연
                addMessage(botResponseText, 'bot');
                scrollToBottomChat();
            }, 500); // 0.5초 지연
        }


        // 챗봇 입력 및 전송 이벤트
        if (chatbotSendBtn && chatbotInput) {
            chatbotSendBtn.addEventListener('click', () => {
                const query = chatbotInput.value.trim();
                if (query) {
                    sendMessageToChatbot(query);
                    chatbotInput.value = ''; // 입력 필드 초기화
                }
            });

            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    chatbotSendBtn.click(); // Enter 키 누르면 전송 버튼 클릭
                }
            });
        }

        // 챗봇 메시지 영역에 동적으로 추가되는 퀵 리플라이 버튼을 위한 이벤트 위임
        // (기존 HTML에 있는 버튼과 동적으로 추가되는 버튼 모두 처리)
        if (chatbotMessages) {
            chatbotMessages.addEventListener('click', (e) => {
                if (e.target.classList.contains('quick-reply-btn')) {
                    const query = e.target.dataset.query;
                    if (query) {
                        console.log('퀵 리플라이 버튼 클릭됨:', query); // 디버깅
                        sendMessageToChatbot(query);
                    }
                }
            });
        }
    } else {
        console.error("오류: 하나 이상의 챗봇 요소를 찾을 수 없습니다. HTML ID를 확인해주세요.");
    }