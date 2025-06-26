document.addEventListener('DOMContentLoaded', () => {
    // CSS 및 JS 파일 경로가 'css/style.css', 'js/script.js'로 설정되어 있습니다.

    // 1. 네비게이션 토글 (모바일 메뉴)
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times'); // X 아이콘 토글
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기 (모바일)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => { // 이벤트 객체(e) 추가
            e.preventDefault(); // 기본 앵커 동작 방지

            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }

            // --- 스크롤 위치 보정 로직 개선 시작 (CSS scroll-margin-top 활용) ---
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // scroll-margin-top CSS 속성을 사용하므로,
                // JavaScript에서 복잡한 offset 계산을 제거합니다.
                // 브라우저가 CSS에 따라 자동으로 스크롤 위치를 조정합니다.
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
            // --- 스크롤 위치 보정 로직 개선 끝 ---
        });
    });

    // 2. 헤더 스크롤 시 스타일 변경
    const mainHeader = document.querySelector('.main-header');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // 3. 스크롤 투 탑 버튼
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // 300px 이상 스크롤 시 버튼 표시
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤
        });
    });

    // 4. Intersection Observer를 이용한 스크롤 애니메이션
    const animateElements = document.querySelectorAll('.common-section');

    const observerOptions = {
        root: null, // 뷰포트
        rootMargin: '0px',
        threshold: 0.1 // 요소의 10%가 뷰포트에 들어오면 콜백 실행
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // 한 번 애니메이션 실행 후 옵저버 해제 (반복 방지)
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    animateElements.forEach(element => {
        sectionObserver.observe(element);
    });

    // 5. 문의하기 폼 제출 (Formsubmit.co와 연동 개선)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => { // async 추가
            e.preventDefault(); // 기본 제출 동작 방지

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const phone = document.getElementById('phone').value; // 전화번호 필드도 가져오기

            // 간단한 유효성 검사
            if (!name || !email || !message) {
                showMessageBox('이름, 이메일, 문의 내용을 모두 입력해주세요.', 'error');
                return;
            }

            // Formsubmit.co 액션 URL 가져오기
            const formAction = contactForm.getAttribute('action');

            try {
                const formData = new FormData(contactForm); // 폼 데이터를 FormData 객체로 만듦

                // Formsubmit.co로 데이터 전송 (비동기 처리)
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData, // FormData 객체 직접 사용
                    // Formsubmit.co는 기본적으로 Content-Type을 multipart/form-data로 처리하므로 헤더 설정 불필요
                });

                if (response.ok) { // 응답이 성공적일 경우 (2xx 상태 코드)
                    showMessageBox('문의가 성공적으로 접수되었습니다. 감사합니다!');
                    contactForm.reset(); // 폼 초기화
                } else {
                    // Formsubmit.co에서 오류 응답이 온 경우
                    console.error('Form submission failed:', response.statusText);
                    showMessageBox('문의 접수에 실패했습니다. 다시 시도해주세요.', 'error');
                }
            } catch (error) {
                // 네트워크 오류 등 예외 발생 시
                console.error('Error submitting form:', error);
                showMessageBox('네트워크 오류로 문의 접수에 실패했습니다.', 'error');
            }
        });
    }

    // --- 갤러리 및 모달 기능 ---

    // 1단계: 제품 카테고리 모달 관련 요소
    const productCategoryModal = document.getElementById('productCategoryModal');
    const categoryCloseBtn = productCategoryModal.querySelector('.category-close-btn');
    const categoryModalTitle = productCategoryModal.querySelector('.category-modal-title');
    const categoryProductGrid = productCategoryModal.querySelector('.category-product-grid');

    // 2단계: 이미지 갤러리 모달 관련 요소 (Masonry 적용)
    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const galleryCloseBtn = imageGalleryModal.querySelector('.gallery-close-btn');
    const galleryTitle = imageGalleryModal.querySelector('.gallery-title');
    const modalGalleryGrid = imageGalleryModal.querySelector('.js-masonry-modal-gallery'); // HTML에서 클래스 이름에 따라 변경

    // 제품 데이터 (2단계 구조)
    const productsData = {
        'fresh-slicer': {
            name: '냉장 슬라이서 제품 목록',
            models: {
                'TGM': {
                    displayName: 'TGM',
                    description: `회전 방향을 달리하는 두 개의 원형 칼날을 통해 신속하고 부드러운 절단 (특허)
                                 2-Way의 안정적인 윗누름부 방식 채용 (특허)`,
                    thumbnail: 'img/냉장고속슬라이서.png', // 카테고리 목록에서 보여줄 썸네일
                    images: [
                        'img/냉장고속슬라이서.png', // 실제 이미지 경로로 변경
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b541.jpg',
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b542.jpg',
                        'https://fujee.com/uploaded/product/21/66712ed6c0d1fa4a7c2432464d429b543.jpg'
                    ]
                },
                'x-pro-2000': {
                    displayName: '자동 슬라이서 X-PRO 2000',
                    description: '최첨단 기능을 갖춘 프리미엄 모델로, 다양한 육류에 최적화된 절단이 가능합니다.',
                    thumbnail: 'https://placehold.co/400x300/28a745/fff?text=X-PRO+2000',
                    images: [
                        'https://placehold.co/800x600/28a745/fff?text=X-PRO+2000+Image+1',
                        'https://placehold.co/800x600/ffc107/333?text=X-PRO+2000+Image+2',
                        'https://placehold.co/800x600/6f42c1/fff?text=X-PRO+2000+Image+3'
                    ]
                }
            }
        },
        'frozen-slicer': {
            name: '냉동 슬라이서 제품 목록',
            models: {
                'm-series-basic': {
                    displayName: '수동 육절기 M-Basic',
                    description: '견고한 내구성과 기본적인 절단 성능을 갖춘 보급형 수동 육절기입니다.',
                    thumbnail: 'img/냉동육절기.png', // 실제 이미지 경로로 변경
                    images: [
                        'img/냉동육절기.png',
                        'https://placehold.co/800x600/fd7e14/fff?text=M-Basic+Image+2'
                    ]
                },
                'm-series-pro': {
                    displayName: '수동 육절기 M-Pro',
                    description: '전문적인 사용을 위한 향상된 기능과 안정적인 수동 절단 성능을 제공합니다.',
                    thumbnail: 'https://placehold.co/400x300/fd7e14/fff?text=M-Pro',
                    images: [
                        'https://placehold.co/800x600/fd7e14/fff?text=M-Pro+Image+1',
                        'https://placehold.co/800x600/dc3545/fff?text=M-Pro+Image+2',
                        'https://placehold.co/800x600/17a2b8/fff?text=M-Pro+Image+3'
                    ]
                }
            }
        },
        'mincer/ham-slicer': { // 기존 'mincer/ham-slicer' 유지
            name: '민서기/햄슬라이서 제품 목록',
            models: {
                'mincer-1000': { // c-100-mini 대신 mincer-1000
                    displayName: '민서기-1000',
                    description: '좁은 공간에서도 효율적인 사용이 가능한 민서기로, 뛰어난 이동성이 특징입니다.',
                    thumbnail: 'img/민서기.png', // 실제 이미지 경로로 변경
                    images: [
                        'img/민서기.png',
                        'https://placehold.co/800x600/20c997/fff?text=Mincer-1000+Image+2'
                    ]
                },
                'ham-slicer-pro': { // c-200-plus 대신 ham-slicer-pro
                    displayName: '햄 슬라이서 Pro',
                    description: '콤팩트하고 간편한 조작으로 손쉬운 몰드 및 필름 교체 모델입니다.',
                    thumbnail: 'https://placehold.co/400x300/17a2b8/fff?text=Ham-Slicer-Pro',
                    images: [
                        'https://placehold.co/800x600/17a2b8/fff?text=Ham-Slicer-Pro+Image+1',
                        'https://placehold.co/800x600/6c757d/fff?text=Ham-Slicer-Pro+Image+2',
                        'https://placehold.co/800x600/007bff/fff?text=Ham-Slicer-Pro+Image+3'
                    ]
                }
            }
        },
        // Packaging machine 및 Vacuum packaging machine / band saw 카테고리 추가
        'packaging-machine': {
            name: '특수포장기 제품 목록',
            models: {
                'skin-packaging-pro': {
                    displayName: '스킨포장기 Pro',
                    description: '콤팩트하고 간편한 조작으로 손쉬운 몰드 및 필름 교체 모델입니다.',
                    thumbnail: 'img/스킨포장기.png',
                    images: [
                        'img/스킨포장기.png',
                        'https://placehold.co/800x600/ff0000/fff?text=Packaging+Machine+2'
                    ]
                }
            }
        },
        'vacuumpackaging-machine/band-saw': {
            name: '진공포장기/골절기 제품 목록',
            models: {
                'vacuum-sealer-haccp': {
                    displayName: 'HACCP 진공포장기',
                    description: 'HACCP에 맞춘 스테인레스 재질로 제작 작업의 안정성과 정밀성을 두루 갖춘 모델입니다.',
                    thumbnail: 'img/골절기.png',
                    images: [
                        'img/골절기.png',
                        'https://placehold.co/800x600/00ff00/000?text=Vacuum+Sealer+2'
                    ]
                }
            }
        }
    };

    // 중고 제품 데이터 (새로 추가)
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
                'img/중고2.jpg',
                'https://placehold.co/800x600/ddccbbaa/333?text=Used+Stainless+Slicer+2',
                'https://placehold.co/800x600/aa11bb/333?text=Used+Stainless+Slicer+3'
            ]
        }
    };


    // 1단계 모달: 제품 카테고리 목록 열기
    const openProductCategoryModal = (categoryId) => {
        const category = productsData[categoryId];
        if (!category) {
            console.error('Category not found:', categoryId);
            showMessageBox('제품 카테고리 정보를 찾을 수 없습니다.', 'error');
            return;
        }

        categoryModalTitle.textContent = category.name;
        categoryProductGrid.innerHTML = ''; // 기존 내용 지우기

        // 카테고리 내의 각 제품 모델 카드 생성
        for (const modelId in category.models) {
            const model = category.models[modelId];
            const productCard = document.createElement('div');
            productCard.classList.add('category-product-card');
            productCard.dataset.modelId = modelId; // 모델 ID 저장

            // description에 <br> 태그가 포함되어 있으므로 innerHTML 사용
            productCard.innerHTML = `
                <img src="${model.thumbnail}" alt="${model.displayName}" loading="lazy">
                <h4>${model.displayName}</h4>
                <p>${model.description.replace(/\n/g, '<br>')}</p>
            `;
            // 개별 제품 카드 클릭 시 2단계 갤러리 열기
            productCard.addEventListener('click', () => {
                openImageGalleryModal(model.displayName, model.images); // 변경: 제목과 이미지 배열 직접 전달
            });
            categoryProductGrid.appendChild(productCard);
        }

        productCategoryModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 본문 스크롤 방지
    };

    // 1단계 모달 닫기
    const closeProductCategoryModal = () => {
        productCategoryModal.classList.remove('active');
        document.body.style.overflow = ''; // 본문 스크롤 허용
    };

    // 2단계 모달: 개별 제품 이미지 갤러리 열기 (Masonry 적용)
    let modalMasonryInstance; // Masonry 인스턴스를 저장할 변수

    const openImageGalleryModal = (title, imagesArray) => {
        galleryTitle.textContent = title; // 갤러리 제목 설정
        modalGalleryGrid.innerHTML = ''; // 기존 내용 지우기

        if (imagesArray.length === 0) {
            modalGalleryGrid.innerHTML = '<p style="text-align: center; color: var(--light-text-color);">표시할 이미지가 없습니다.</p>';
            imageGalleryModal.classList.add('active');
            return;
        }

        // 이미지 아이템 동적 생성
        imagesArray.forEach(imgSrc => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item-modal'); // 모달 전용 아이템 클래스
            gridItem.innerHTML = `<img src="${imgSrc}" alt="갤러리 이미지" loading="lazy">`;
            modalGalleryGrid.appendChild(gridItem);
        });

        imageGalleryModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 본문 스크롤 방지 (중고제품에서 직접 열릴 경우 대비)


        // Masonry 인스턴스 초기화 또는 레이아웃 재정렬
        // imagesLoaded가 전역으로 정의되어 있는지 확인 후 사용
        if (typeof imagesLoaded !== 'undefined') {
            imagesLoaded(modalGalleryGrid).on('progress', function() {
                if (modalMasonryInstance) {
                    // 이미 인스턴스가 있다면 레이아웃만 갱신
                    modalMasonryInstance.layout();
                } else {
                    // 없다면 새로운 인스턴스 생성
                    modalMasonryInstance = new Masonry(modalGalleryGrid, {
                        itemSelector: '.grid-item-modal', // 모달 내 그리드 아이템 선택자
                        // columnWidth는 CSS와 맞춰 조정
                        columnWidth: '.grid-item-modal',
                        gutter: 10, // CSS의 10px와 일치
                        percentPosition: true, // 아이템 위치를 퍼센트로 계산하여 반응형에 유리
                        transitionDuration: '0.4s' // 아이템 재배치 시 전환 효과
                    });
                }
            });
        } else {
            console.error("imagesLoaded is not defined. Ensure it's loaded before script.js");
            // imagesLoaded가 없어도 Masonry는 작동할 수 있지만, 이미지 로드 후 레이아웃 재정렬이 안될 수 있음
            if (modalMasonryInstance) {
                modalMasonryInstance.layout();
            } else {
                modalMasonryInstance = new Masonry(modalGalleryGrid, {
                    itemSelector: '.grid-item-modal',
                    columnWidth: '.grid-item-modal',
                    gutter: 10, // CSS의 10px와 일치
                    percentPosition: true,
                    transitionDuration: '0.4s'
                });
            }
        }
    };

    // 2단계 모달 닫기
    const closeImageGalleryModal = () => {
        imageGalleryModal.classList.remove('active');
        // body 스크롤 상태는 1단계 모달의 상태에 따라 유지됨.
        if (!productCategoryModal.classList.contains('active')) {
            document.body.style.overflow = '';
        }
        // Masonry 인스턴스 제거 (모달이 닫힐 때 DOM 요소를 정리)
        if (modalMasonryInstance) {
            modalMasonryInstance.destroy();
            modalMasonryInstance = null; // 참조 해제
        }
    };


    // 제품 카테고리 카드 클릭 이벤트 리스너 (1단계 모달 열기)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (event) => {
            // "제품 목록 보기" 버튼을 클릭했을 때만 갤러리 열기
            if (event.target.classList.contains('view-category-btn')) {
                const categoryId = card.dataset.categoryId;
                openProductCategoryModal(categoryId);
            }
        });
    });

    // 중고 제품 아이템 클릭 이벤트 리스너 (새로 추가)
    document.querySelectorAll('.used-product-item').forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.dataset.productId;
            const product = usedProductsData[productId];
            if (product) {
                openImageGalleryModal(product.displayName, product.images);
                // 중고제품 갤러리 열리면 본문 스크롤 방지는 openImageGalleryModal 안에서 처리됨.
            } else {
                console.error('Used product not found:', productId);
                showMessageBox('선택하신 중고 제품의 정보를 찾을 수 없습니다.', 'error');
            }
        });
    });


    // 1단계 모달 닫기 이벤트 (X 버튼, 오버레이)
    categoryCloseBtn.addEventListener('click', closeProductCategoryModal);
    productCategoryModal.querySelector('.modal-overlay').addEventListener('click', closeProductCategoryModal);

    // 2단계 모달 닫기 이벤트 (X 버튼, 오버레이)
    galleryCloseBtn.addEventListener('click', closeImageGalleryModal);
    imageGalleryModal.querySelector('.modal-overlay').addEventListener('click', closeImageGalleryModal);

    // 키보드 ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { // ESC 키로 닫기
            if (imageGalleryModal.classList.contains('active')) {
                closeImageGalleryModal();
            } else if (productCategoryModal.classList.contains('active')) {
                closeProductCategoryModal();
            }
        }
    });

    // alert() 대신 사용자 정의 메시지 박스 함수 (재사용을 위해)
    function showMessageBox(message, type = 'success', duration = 3000) {
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        let bgColor = '#28a745'; // success
        if (type === 'error') {
            bgColor = '#dc3545';
        } else if (type === 'info') {
            bgColor = '#007bff';
        }
        messageBox.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${bgColor};
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 3000;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        `;
        document.body.appendChild(messageBox);

        setTimeout(() => {
            messageBox.style.opacity = 1;
        }, 10); // 약간의 지연 후 페이드인

        setTimeout(() => {
            messageBox.style.opacity = 0; // 페이드 아웃
            messageBox.addEventListener('transitionend', () => messageBox.remove());
        }, duration);
    }

    // --- 새로운 영웅 섹션 기능 ---

    // 타이핑 애니메이션 함수
    const typeWriter = (element, text, i = 0, speed = 50) => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
        } else {
            // 타이핑이 끝난 후 캐럿(커서) 깜빡임 애니메이션 추가
            element.style.borderRight = 'none'; // 타이핑 끝나면 캐럿 제거
            // 필요하다면 여기에 캐럿 깜빡임 애니메이션을 위한 CSS 클래스를 추가할 수 있습니다.
            // 예: element.classList.add('typing-done');
        }
    };

    // 영웅 섹션 타이틀에 애니메이션 적용
    const heroTitleElement = document.querySelector('.hero-title');
    if (heroTitleElement) {
        // hero-content의 fadeInSlideUp 애니메이션이 끝난 후 타이핑 시작
        // 혹은 간단하게 일정 시간 후 시작
        setTimeout(() => {
            const originalText = heroTitleElement.dataset.text;
            heroTitleElement.textContent = ''; // 기존 텍스트 지우기
            typeWriter(heroTitleElement, originalText);
        }, 1200); // hero-content fadeInSlideUp 애니메이션 시간(1s)보다 약간 길게 설정
    }

    // --- Kakao Map 초기화 및 마커 추가 기능 ---
    // Kakao Maps JavaScript API가 로드된 후에 실행되도록 합니다.
    if (window.kakao && window.kakao.maps) {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById('kakao-map'); // 지도를 표시할 div
            if (!mapContainer) {
                console.error("Error: Map container div with ID 'kakao-map' not found.");
                showMessageBox("지도를 표시할 수 없습니다. 지도 컨테이너를 찾을 수 없습니다.", 'error');
                return;
            }

            const mapOption = {
                center: new kakao.maps.LatLng(37.574757, 127.0446552), // 지도 초기 중심 좌표 (주소 변환 실패 시 대비)
                level: 3 // 지도의 확대 레벨
            };

            // 지도를 생성합니다
            const map = new kakao.maps.Map(mapContainer, mapOption);
            console.log('Kakao Map initialized successfully.');

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new kakao.maps.services.Geocoder();

            // 주소
            const address = '서울특별시 동대문구 천호대로 47길 62';
            console.log('Attempting to geocode address:', address);

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address, (result, status) => {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    console.log('Geocoding successful. Coordinates:', result[0].y, result[0].x);

                    // 회사 로고 이미지와 텍스트를 포함하는 CustomOverlay 콘텐츠
                    // 로고 이미지와 텍스트가 적절한 위치에 오도록 CSS를 포함합니다.
                    // img/logo_on.png가 175x45 이므로, 마커 크기에 맞춰 img src를 img/logo_on.png로 변경합니다.
                    const content = `
                        <div style="
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
                                border-top: 1px solid #eee; /* 로고와 텍스트 구분선 */
                                width: 100%;
                                text-align: center;
                            ">
                                한국후지 답십리점
                            </div>
                        </div>
                    `;

                    // CustomOverlay를 생성합니다
                    const customOverlay = new kakao.maps.CustomOverlay({
                        map: map,
                        position: coords,
                        content: content,
                        yAnchor: 1 // CustomOverlay의 하단 중앙이 지도의 좌표에 오도록 설정
                    });
                    console.log('Custom Overlay created and added to map.');

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);

                    // 지도 확대/축소 컨트롤러 추가 (선택 사항)
                    const zoomControl = new kakao.maps.ZoomControl();
                    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                    // 지도 타입 변경 컨트롤러 추가 (선택 사항)
                    const mapTypeControl = new kakao.maps.MapTypeControl();
                    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

                } else {
                    console.error('주소-좌표 변환 실패:', status);
                    showMessageBox('지도 주소 검색에 실패했습니다. 기본 위치를 표시합니다.', 'error');
                }
            });
        });
    } else {
        console.error("Kakao Maps API is not loaded. Please check your appkey, domain registration, and network connection.");
        showMessageBox("지도 API 로드에 문제가 있습니다. 개발자 도구를 확인해주세요.", 'error');
    }

    // --- Chatbot Logic ---
    const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSendBtn = document.getElementById('chatbotSendBtn');

    // FAQ 데이터 (키워드 기반)
    const faqData = {
        '회사소개': '한국후지공업은 1990년부터 육절기 유통 및 서비스를 전문으로 해온 기업입니다. 30년 전통의 기술력과 노하우로 고객님의 비즈니스 성장을 지원합니다.',
        '제품소개': '냉장 슬라이서, 냉동 슬라이서, 민서기, 햄 슬라이서, 특수 포장기, 진공 포장기, 골절기 등 다양한 제품을 취급하고 있습니다. 어떤 제품에 관심 있으신가요?',
        'AS문의': '제품 AS 및 수리는 010-5204-8374로 전화 주시거나, 웹사이트의 "문의하기" 섹션에서 온라인으로 신청하실 수 있습니다. 신속하게 도와드리겠습니다.',
        '중고제품': '저희는 합리적인 가격으로 중고 육절기를 매입하고 판매하고 있습니다. 현재 판매 중인 제품은 웹사이트의 "중고 제품" 섹션에서 확인하실 수 있습니다.',
        '연락처': '대표 전화: 02-2246-6800, 휴대폰: 010-5204-8374, 팩스: 02-2246-0778, 이메일: winzer6633@naver.com 입니다. 주소는 서울특별시 동대문구 천호대로 47길 62 입니다.',
        '영업시간': '평일 오전 9시부터 오후 6시까지 영업합니다. 주말 및 공휴일은 휴무입니다.',
        '결제방법': '현금, 계좌 이체 및 카드 결제가 가능합니다. 자세한 내용은 문의 시 안내해 드립니다.',
        '배송': '제품의 종류와 수량에 따라 배송 방법과 기간이 달라질 수 있습니다. 구매 시 자세히 안내해 드립니다.'
    };

    // 메시지 추가 함수
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        // 스크롤을 항상 최하단으로 이동
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // 빠른 답변 버튼 추가 함수
    function addQuickReplyOptions(options) {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('message', 'bot-message', 'bot-options'); // bot-options 클래스 추가
        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('quick-reply-btn');
            button.textContent = option.text;
            button.dataset.query = option.query; // 클릭 시 보낼 쿼리 저장
            button.addEventListener('click', () => {
                handleUserInput(option.query);
                // 빠른 답변 버튼 클릭 시 챗봇 메시지 영역의 스크롤을 최하단으로 이동
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            });
            optionsContainer.appendChild(button);
        });
        chatbotMessages.appendChild(optionsContainer);
        // 스크롤을 항상 최하단으로 이동
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }


    // 챗봇 응답 처리 함수
    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase().trim();

        // 키워드 매칭
        for (const keyword in faqData) {
            if (lowerCaseMessage.includes(keyword.toLowerCase())) {
                return faqData[keyword];
            }
        }

        // 특정 질문에 대한 추가 답변 (선택 사항)
        if (lowerCaseMessage.includes('육절기') || lowerCaseMessage.includes('슬라이서')) {
            return '육절기 또는 슬라이서에 대한 더 자세한 정보가 필요하시면, 냉장/냉동 슬라이서 중 어떤 종류에 관심 있으신지 말씀해주세요.';
        }
        if (lowerCaseMessage.includes('수리') || lowerCaseMessage.includes('고장')) {
            return 'AS 접수 또는 수리 관련 문의는 전화(010-5204-8374) 주시거나, 상세 증상을 알려주시면 더 빠르게 도와드릴 수 있습니다.';
        }
        if (lowerCaseMessage.includes('중고')) {
            return '중고 제품은 방문하여 직접 확인하시는 것을 추천합니다. 중고 제품 매입도 진행하고 있으니 필요하시면 연락 주세요.';
        }


        // 인식할 수 없는 경우
        return '죄송합니다, 이해하지 못했습니다. "회사소개", "제품소개", "AS문의", "중고제품", "연락처" 등의 키워드로 다시 질문해 주시거나, 아래 버튼을 이용해 주세요.';
    }

    // 사용자 입력 처리 함수
    function handleUserInput(message) {
        if (!message) return; // 빈 메시지는 처리하지 않음

        // 사용자가 보낸 메시지를 챗봇 창에 추가합니다.
        addMessage(message, 'user');
        
        // 입력 필드와 전송 버튼은 비활성화 상태이므로, 입력창을 비울 필요가 없습니다.
        // chatbotInput.value = ''; 

        // 챗봇 응답 지연 시뮬레이션 (실제 API 호출 시 필요)
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');

            // 특정 답변 후 빠른 답변 버튼 다시 표시
            if (botResponse.includes('무엇을 도와드릴까요?') || botResponse.includes('키워드로 다시 질문해 주시거나, 아래 버튼을 이용해 주세요.')) {
                addQuickReplyOptions([
                    { text: '회사소개', query: '회사소개' },
                    { text: '제품소개', query: '제품소개' },
                    { text: 'AS문의', query: 'AS문의' },
                    { text: '중고제품', query: '중고제품' },
                    { text: '연락처', query: '연락처' },
                ]);
            }
        }, 500); // 0.5초 후 응답
    }

    // 이벤트 리스너: 챗봇 토글 버튼
    chatbotToggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        // 챗봇이 열리면 메시지 영역 스크롤 최하단으로
        if (chatbotWindow.classList.contains('active')) {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    });

    // 이벤트 리스너: 챗봇 닫기 버튼
    chatbotCloseBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // 챗봇 입력 필드와 전송 버튼 비활성화 (기존 코드 유지)
    chatbotInput.disabled = true;
    chatbotInput.placeholder = '버튼을 클릭하여 질문해주세요.';
    chatbotSendBtn.disabled = true;

    // 초기 빠른 답변 버튼 추가 (챗봇 로드 시 자동 표시)
    // 챗봇이 로드될 때 바로 빠른 답변 옵션을 표시하도록 합니다.
    addQuickReplyOptions([
        { text: '회사소개', query: '회사소개' },
        { text: '제품소개', query: '제품소개' },
        { text: 'AS문의', query: 'AS문의' },
        { text: '중고제품', query: '중고제품' },
        { text: '연락처', query: '연락처' },
    ]);


}); // DOMContentLoaded 닫힘
