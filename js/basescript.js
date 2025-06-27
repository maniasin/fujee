    // --- 메시지 박스 구현 (alert 대신) ---
    // 이 함수는 스크립트 전반에 걸쳐 사용되므로 최상단에 배치합니다.
    function showMessageBox(message, type = 'success', duration = 3000) {
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        let bgColor = '#28a745';
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
        }, 10);

        setTimeout(() => {
            messageBox.style.opacity = 0;
            messageBox.addEventListener('transitionend', () => messageBox.remove());
        }, duration);
    }

    // 로딩 스피너 함수들 (폼 제출 및 스플래시 화면에서 사용)
    // HTML에 존재하는 loadingOverlay 요소를 참조하도록 수정
    const loadingOverlay = document.getElementById('loadingOverlay');

    function showLoadingSpinner() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function hideLoadingSpinner() {
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // --- 새로운 영웅 섹션 기능 - 타이핑 애니메이션 함수 ---
    // showSection 함수에서 호출되므로 그 전에 정의되어야 합니다.
    const typeWriter = (element, text, i = 0, speed = 50) => {
        if (!element) return; // 요소 존재 여부 확인
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
        } else {
            element.style.borderRight = 'none';
        }
    };


    // 1. 스플래시 화면 로직
    const splashScreen = document.getElementById('splashScreen');
    const mainContentWrapper = document.getElementById('mainContentWrapper'); 

    // 웹사이트 로드 시 스플래시 화면을 먼저 보여줍니다. (HTML/CSS에서 초기 hidden이 아닐 경우)
    if (splashScreen && mainContentWrapper) {
        splashScreen.classList.remove('hidden'); // 스플래시 화면을 확실히 보이게 합니다.
        mainContentWrapper.style.opacity = '0'; // 메인 콘텐츠를 초기에는 숨깁니다.
        document.body.style.overflow = 'hidden'; // 스플래시 화면 동안 스크롤 잠금

        // 로고 애니메이션 시간(총 약 3.3초)을 고려하여 3.5초 후 전환
        setTimeout(() => {
            splashScreen.classList.add('hidden'); // 스플래시 화면 숨김
            mainContentWrapper.classList.add('visible'); // 메인 콘텐츠 표시 (페이드인 시작)
            document.body.style.overflow = ''; // 스크롤 잠금 해제
        }, 3500); // 3.5초 후에 전환 시작 (로고 애니메이션이 끝난 후)
    }


    // 2. 네비게이션 토글 (모바일 메뉴)
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) { // 요소 존재 여부 확인
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.querySelector('i').classList.toggle('fa-bars');
            navToggle.querySelector('i').classList.toggle('fa-times'); // X 아이콘 토글
        });
    }

    // 3. 헤더 스크롤 시 스타일 변경 (기존 유지)
    const mainHeader = document.querySelector('.main-header');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (mainHeader) { // 요소 존재 여부 확인
            if (currentScrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // 4. 스크롤 투 탑 버튼 (기존 유지)
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        // 이 버튼은 섹션 전환 시에는 필요 없지만, Hero 섹션이 길어졌을 때를 위해 유지합니다.
        if (scrollToTopBtn) { // 요소 존재 여부 확인
            if (window.scrollY > 300) { // 300px 이상 스크롤 시 버튼 표시
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    });

    if (scrollToTopBtn) { // 요소 존재 여부 확인
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 부드러운 스크롤
            });
        });
    }


    // --- 페이지 분할 (섹션 표시/숨김) 및 애니메이션 로직 변경 ---
    const heroSection = document.getElementById('hero'); // ID로 선택
    const mainQuickLinksSection = document.getElementById('main-quick-links'); // 새로 추가된 섹션 참조
    const contentSections = document.querySelectorAll('.content-section'); // 'content-section' 클래스를 가진 모든 섹션
    const contactSection = document.getElementById('contact'); // 문의 섹션 추가 참조

    // 애니메이션이 적용될 요소들의 셀렉터와 기본 CSS 속성을 정의합니다.
    // 이 정보는 애니메이션을 재설정하고 다시 트리거하는 데 사용됩니다.
    const animatableElementsConfig = [
        { selector: '.section-title', initialStyle: { opacity: '0', transform: 'translateY(20px)' }, animationName: 'fadeInUp' },
        { selector: '#about .about-text', initialStyle: { opacity: '0', transform: 'translateX(-50px)' }, animationName: 'fadeInLeft' },
        { selector: '#about .about-image', initialStyle: { opacity: '0', transform: 'translateX(50px)' }, animationName: 'fadeInRight' },
        { selector: '.product-card', initialStyle: { opacity: '0', transform: 'translateY(20px)' }, animationName: 'fadeInUp' },
        { selector: '.service-item', initialStyle: { opacity: '0', transform: 'translateY(20px)' }, animationName: 'fadeInUp' },
        { selector: '#used .used-process', initialStyle: { opacity: '0', transform: 'translateX(-50px)' }, animationName: 'fadeInLeft' },
        { selector: '#used .used-products', initialStyle: { opacity: '0', transform: 'translateX(50px)' }, animationName: 'fadeInRight' },
        { selector: '#contact .contact-info', initialStyle: { opacity: '0', transform: 'translateX(-50px)' }, animationName: 'fadeInLeft' },
        { selector: '#contact .contact-form-wrapper', initialStyle: { opacity: '0', transform: 'translateX(50px)' }, animationName: 'fadeInRight' },
        { selector: '.used-product-item', initialStyle: { opacity: '0', transform: 'translateY(20px)' }, animationName: 'fadeInUp' },
        { selector: '.main-card-item', initialStyle: { opacity: '0', transform: 'translateY(20px)' }, animationName: 'fadeInUp' } // 메인 카드 아이템 추가
    ];

    // 숫자 카운팅 애니메이션 함수 (전역 스코프에 정의)
    const counterElement = document.getElementById('yearsOfExperienceCounter');
    let counterAnimationStarted = false; // 숫자 카운터 애니메이션 실행 여부 플래그

    const animateCount = (timestamp) => {
        if (!counterElement) return; // 요소 존재 여부 확인
        const targetValue = parseInt(counterElement.dataset.targetValue);
        const duration = 2000; // 2초 동안 애니메이션
        const startTimestamp = counterElement.animationStartTime || performance.now(); // 시작 시간 저장
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1); // 0에서 1까지 진행률
        const currentNumber = Math.floor(progress * targetValue); // 현재 숫자 계산

        counterElement.textContent = currentNumber;

        if (progress < 1) {
            requestAnimationFrame(animateCount);
        } else {
            counterElement.textContent = targetValue; // 최종 값으로 설정하여 오차 방지
            counterAnimationStarted = true; // 애니메이션 완료 표시
        }
    };


    // 특정 섹션을 활성화하고 다른 섹션을 숨기는 함수
    function showSection(sectionId) {
        // 모든 content-section을 숨기고 애니메이션 관련 스타일을 초기화합니다.
        contentSections.forEach(section => {
            section.classList.remove('active');
            // 섹션이 비활성화될 때, 내부 요소들의 애니메이션 상태를 초기화합니다.
            animatableElementsConfig.forEach(config => {
                const elements = section.querySelectorAll(config.selector);
                elements.forEach(el => {
                    el.style.animation = 'none'; // 현재 재생 중인 애니메이션을 중지합니다.
                    el.style.opacity = config.initialStyle.opacity; // 초기 투명도로 되돌립니다.
                    el.style.transform = config.initialStyle.transform; // 초기 transform으로 되돌립니다.
                });
            });
            // section-title의 underline animation도 초기화합니다.
            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.classList.remove('animate');
            }
        });

        // hero-section과 main-quick-links 섹션의 표시/숨김을 관리합니다.
        if (heroSection) heroSection.style.display = 'none'; // 모든 섹션을 숨긴 후 다시 조절
        if (mainQuickLinksSection) mainQuickLinksSection.style.display = 'none';


        // 대상 섹션이 hero-section (홈 페이지)인 경우
        if (sectionId === '#hero') {
            if (heroSection) heroSection.style.display = 'flex'; // Hero 섹션은 flex로 표시
            if (mainQuickLinksSection) {
                mainQuickLinksSection.style.display = 'block'; // 빠른 링크 섹션 표시
                // 빠른 링크 섹션 내 애니메이션 트리거
                mainQuickLinksSection.querySelectorAll('.main-card-item').forEach((el, index) => {
                    el.style.animation = 'none'; // 기존 애니메이션 제거
                    el.offsetHeight; // Reflow 강제
                    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
                });
            }
            window.scrollTo(0, 0); // Hero 섹션으로 이동 시 스크롤 최상단

            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                // hero-content 애니메이션 재트리거
                heroContent.style.animation = 'none'; // 기존 애니메이션 제거
                void heroContent.offsetWidth; // 리플로우 강제 (element.offsetWidth를 사용하여 DOM 변경사항 적용 강제)
                heroContent.style.animation = 'fadeInSlideUp 1s ease-out forwards';
            }

            // Hero Title 타이핑 애니메이션 재트리거
            const heroTitleElement = heroSection.querySelector('.hero-title');
            if (heroTitleElement) {
                const originalText = heroTitleElement.dataset.text;
                heroTitleElement.textContent = ''; // 기존 텍스트 지우기
                heroTitleElement.style.borderRight = '.15em solid orange'; // 캐럿 다시 보이게
                typeWriter(heroTitleElement, originalText);
            }
            return; // 함수 종료
        }

        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.add('active'); // 대상 섹션을 활성화합니다.
            window.scrollTo(0, 0); // 새 페이지처럼 보이게 스크롤 최상단으로 이동

            // 섹션이 완전히 표시된 후 애니메이션을 트리거합니다.
            requestAnimationFrame(() => {
                requestAnimationFrame(() => { // 두 번째 requestAnimationFrame으로 더욱 확실하게 reflow 발생
                    const sectionTitle = targetSection.querySelector('.section-title');
                    if (sectionTitle) {
                        sectionTitle.classList.add('animate'); // 섹션 타이틀 밑줄 애니메이션 트리거
                    }

                    animatableElementsConfig.forEach(config => {
                        // 현재 활성화된 섹션에 해당하는 요소들만 선택하여 애니메이션을 적용합니다.
                        // 예: #about .about-text 는 #about 섹션이 활성화되었을 때만 찾습니다.
                        const elements = targetSection.querySelectorAll(config.selector);
                        elements.forEach((el, index) => {
                            // 애니메이션 속성 초기화 및 강제 리플로우
                            el.style.animation = 'none';
                            el.offsetHeight; // 브라우저가 변경 사항을 즉시 적용하도록 강제 (Reflow)
                            // 애니메이션 속성을 다시 설정하여 애니메이션을 재시작합니다.
                            // 요소별 지연 시간을 적용하여 순차적으로 나타나게 합니다.
                            const delay = (index * 0.1) + 0.1; // 0.1s 기본 지연 + 각 아이템당 0.1s 추가 지연
                            el.style.animation = `${config.animationName} 0.8s ease-out ${delay}s forwards`;
                        });
                    });

                    // 회사소개 섹션 진입 시 숫자 카운팅 애니메이션 시작
                    if (sectionId === '#about' && counterElement && !counterAnimationStarted) {
                        counterElement.textContent = '0'; // 초기값 0으로 설정
                        counterElement.animationStartTime = performance.now(); // 애니메이션 시작 시간 기록
                        requestAnimationFrame(animateCount);
                    } else if (sectionId !== '#about') {
                        counterAnimationStarted = false; // 다른 섹션으로 이동 시 애니메이션 상태 초기화
                    }

                    // Kakao Map 초기화 및 재배치 (relayout)
                    if (sectionId === '#contact') {
                        initializeAndRelayoutKakaoMap();
                    }
                });
            });
        }
    }

    // 스플래시 화면이 사라진 후 초기 섹션을 표시하도록 변경
    // mainContentWrapper의 'visible' 클래스 추가로 인한 transition이 끝날 때 실행됩니다.
    if (mainContentWrapper) { // mainContentWrapper가 존재하는 경우에만 리스너 추가
        mainContentWrapper.addEventListener('transitionend', function handler() {
            if (mainContentWrapper.classList.contains('visible')) {
                const initialHash = window.location.hash || '#hero';
                showSection(initialHash);
                // 이벤트 리스너는 한 번만 실행되도록 제거
                mainContentWrapper.removeEventListener('transitionend', handler);
            }
        });
    } else {
        // mainContentWrapper가 없는 경우 즉시 초기 섹션 표시
        const initialHash = window.location.hash || '#hero';
        showSection(initialHash);
    }


    // 네비게이션 링크 클릭 시 섹션 변경 (스크롤 대신)
    if (mainNav) { // 요소 존재 여부 확인
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 기본 앵커 동작 방지

                // 모바일 메뉴가 열려있으면 닫습니다.
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (navToggle) { // 요소 존재 여부 확인
                        navToggle.querySelector('i').classList.remove('fa-times');
                        navToggle.querySelector('i').classList.add('fa-bars');
                    }
                }

                const targetId = link.getAttribute('href');
                // URL 해시 업데이트 (브라우저 뒤로가기/앞으로가기 가능하게)
                history.pushState(null, '', targetId);
                showSection(targetId); // 해당 섹션을 표시
            });
        });
    }

    // 새로운 메인 카드 클릭 이벤트 리스너 추가
    document.querySelectorAll('.main-card-item').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // 기본 링크 동작 방지
            const targetId = e.currentTarget.dataset.targetId;
            if (targetId) {
                // 'dataroom'과 같이 현재 없는 섹션은 메시지 박스 표시
                if (targetId === 'dataroom') {
                    showMessageBox('자료실은 준비 중입니다.', 'info');
                } else {
                    history.pushState(null, '', `#${targetId}`); // URL 해시 업데이트
                    showSection(`#${targetId}`); // 해당 섹션을 표시
                }
            }
        });
    });


    // 브라우저 뒤로가기/앞으로가기 버튼 처리
    window.addEventListener('hashchange', () => {
        const currentHash = window.location.hash || '#hero';
        showSection(currentHash);
    });

    // 5. 문의하기 폼 제출 (Formsubmit.co와 연동 개선)
    const contactForm = document.querySelector('.contact-form');
    // HTML에 존재하는 loadingOverlay 요소를 참조하도록 수정 (상단에 이미 선언됨)

    if (contactForm) { // 요소 존재 여부 확인
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const phone = document.getElementById('phone').value;

            if (!name || !email || !message) {
                showMessageBox('이름, 이메일, 문의 내용을 모두 입력해주세요.', 'error');
                return;
            }

            const formAction = contactForm.getAttribute('action');
            showLoadingSpinner();

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    showMessageBox('문의가 성공적으로 접수되었습니다. 감사합니다!');
                    contactForm.reset();
                } else {
                    console.error('Form submission failed:', response.statusText);
                    showMessageBox('문의 접수에 실패했습니다. 다시 시도해주세요.', 'error');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                showMessageBox('네트워크 오류로 문의 접수에 실패했습니다.', 'error');
            } finally {
                hideLoadingSpinner();
            }
        });
    }