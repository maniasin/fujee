document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DOM 요소 선택 ---
    const productCategoryModal = document.getElementById('productCategoryModal');
    const categoryModalTitle = productCategoryModal?.querySelector('.category-modal-title');
    const categoryProductGrid = productCategoryModal?.querySelector('.category-product-grid');

    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const galleryTitle = imageGalleryModal?.querySelector('.gallery-title');
    const modalGalleryGrid = imageGalleryModal?.querySelector('.modal-gallery-grid');

    const productDetailModal = document.getElementById('productDetailModal');
    const detailContainer = productDetailModal?.querySelector('.product-detail-container');

    const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSendBtn = document.getElementById('chatbotSendBtn');

    // --- 2. 데이터 정의 (FAQ 데이터만 남김) ---
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


    // --- 3. 함수 정의 ---
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const dataSrc = img.dataset.src;
                if (dataSrc) {
                    img.src = dataSrc;
                    img.onload = () => img.classList.add('loaded');
                    img.onerror = () => { img.src = 'https://placehold.co/150x150/AAAAAA/FFFFFF?text=Error'; };
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '0px 0px 100px 0px' });

    function renderUsedProducts() {
        const usedProductList = document.querySelector('.used-product-list');
        if (!usedProductList) return;
        usedProductList.innerHTML = '';

        if (typeof usedInventory === 'undefined' || usedInventory.length === 0) {
            usedProductList.innerHTML = '<p>현재 판매중인 중고 제품이 없습니다.</p>';
            return;
        }

        usedInventory.forEach(product => {
            const item = document.createElement('div');
            item.className = 'used-product-item';
            item.dataset.productId = product.id;

            if (product.status === '판매완료') {
                item.classList.add('sold-out');
            }

            const statusTag = product.status === '판매중'
                ? '<span class="status-tag for-sale">판매중</span>'
                : '<span class="status-tag sold">판매완료</span>';

            item.innerHTML = `
                ${statusTag}
                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${product.images?.[0] || 'https://placehold.co/150x150/AAAAAA/FFFFFF?text=No+Image'}" alt="${product.displayName}">
                <p>${product.displayName}</p>
                <span class="price">${product.price}</span>`;

            usedProductList.appendChild(item);
        });
    }

    const openProductCategoryModal = (categoryId) => {
        const category = productsData?.[categoryId];
        if (!category || !categoryProductGrid) return;

        categoryModalTitle.textContent = category.name;
        categoryProductGrid.innerHTML = '';

        if (Object.keys(category.models).length === 0) {
            categoryProductGrid.innerHTML = '<p>해당 카테고리의 제품이 준비중입니다.</p>';
        } else {
            for (const modelId in category.models) {
                const model = category.models?.[modelId];
                if (model) {
                    const productCard = document.createElement('div');
                    productCard.className = 'category-product-card';
                    productCard.innerHTML = `
                        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${model.thumbnail || 'https://placehold.co/200x150/AAAAAA/FFFFFF?text=No+Image'}" alt="${model.displayName}">
                        <h4>${model.displayName}</h4>
                        <p>${model.description?.replace(/\n/g, '<br>') || ''}</p>`;

                    productCard.addEventListener('click', () => openProductDetailModal(categoryId, modelId));
                    categoryProductGrid.appendChild(productCard);
                    imageObserver.observe(productCard.querySelector('img'));
                }
            }
        }
        productCategoryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const openProductDetailModal = (categoryId, modelId) => {
        const model = productsData?.[categoryId]?.models?.[modelId];
        if (!model || !detailContainer) return;

        detailContainer.innerHTML = '';

        let thumbnailHTML = '';
        model.images?.forEach((imgSrc, index) => {
            const activeClass = index === 0 ? 'active' : '';
            thumbnailHTML += `<img src="${imgSrc}" alt="${model.displayName} 썸네일 ${index + 1}" class="thumbnail-image ${activeClass}" data-full-src="${imgSrc}">`;
        });

        const galleryHTML = `
            <div class="detail-gallery">
                <div class="main-image-container">
                    <img src="${model.images?.[0] || 'https://placehold.co/600x450/AAAAAA/FFFFFF?text=No+Image'}" alt="${model.displayName}" id="mainProductImage">
                </div>
                ${model.images?.length > 1 ? `<div class="thumbnail-strip">${thumbnailHTML}</div>` : ''}
            </div>`;

        const featuresHTML = model.features?.length > 0
            ? `<h4>주요 특징</h4><ul class="features">${model.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>`
            : '';

        const specsHTML = model.specs && Object.keys(model.specs).length > 0
            ? `<h4>제품 사양</h4><table class="specs-table">${Object.entries(model.specs).map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join('')}</table>`
            : '';

        const infoHTML = `
            <div class="detail-info">
                <h3>${model.displayName}</h3>
                ${featuresHTML}
                ${specsHTML}
                <button class="btn btn-primary quote-btn">이 제품 견적 문의</button>
            </div>`;

        detailContainer.innerHTML = galleryHTML + infoHTML;

        const mainProductImage = detailContainer.querySelector('#mainProductImage');
        const thumbnails = detailContainer.querySelectorAll('.thumbnail-image');

        thumbnails?.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainProductImage.src = thumb.dataset.fullSrc;
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        detailContainer.querySelector('.quote-btn').addEventListener('click', () => {
            closeAllModals();
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = `[제품 문의] ${model.displayName} 모델에 대한 견적을 받고 싶습니다.`;
                messageField.focus();
            }
            window.location.hash = '#contact';
        });

        productDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const openImageGalleryModal = (title, imagesArray) => {
        if (!modalGalleryGrid || !galleryTitle) return;

        galleryTitle.textContent = title;
        modalGalleryGrid.innerHTML = '';
        modalGalleryGrid.classList.remove('single-image-mode');

        if (!imagesArray || imagesArray.length === 0) {
            modalGalleryGrid.innerHTML = '<p>표시할 이미지가 없습니다.</p>';
        } else if (imagesArray.length === 1) {
            modalGalleryGrid.classList.add('single-image-mode');
            const img = document.createElement('img');
            img.src = imagesArray[0];
            img.alt = title;
            modalGalleryGrid.appendChild(img);
        } else {
            imagesArray.forEach(imgSrc => {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item-modal';
                const img = document.createElement('img');
                img.dataset.src = imgSrc;
                img.alt = title;
                gridItem.appendChild(img);
                modalGalleryGrid.appendChild(gridItem);
                imageObserver.observe(img);
            });
        }
        imageGalleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeAllModals = () => {
        document.querySelectorAll('.modal-common.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    };

    let mapInstance;
    let kakaoMapLoaded = false;
    function initializeAndRelayoutKakaoMap() {
        if (typeof kakao === 'undefined' || !kakao.maps) return;
        const mapContainer = document.getElementById('kakao-map');
        if (!mapContainer) return;
        if (kakaoMapLoaded) {
            mapInstance.relayout();
            mapInstance.setCenter(mapInstance.getCenter());
            return;
        }

        kakao.maps.load(() => {
            const geocoder = new kakao.maps.services.Geocoder();
            const address = '서울특별시 동대문구 천호대로 47길 62';
            const defaultCoords = new kakao.maps.LatLng(37.566826, 126.9786567);

            geocoder.addressSearch(address, (result, status) => {
                let centerCoords = (status === kakao.maps.services.Status.OK && result.length > 0)
                    ? new kakao.maps.LatLng(result[0].y, result[0].x)
                    : defaultCoords;

                const mapOption = { center: centerCoords, level: 3 };
                mapInstance = new kakao.maps.Map(mapContainer, mapOption);
                kakaoMapLoaded = true;

                if (status === kakao.maps.services.Status.OK) {
                    const content = `
                        <div style="position: relative; display: flex; flex-direction: column; align-items: center; background-color: white; border: 1px solid #ccc; border-radius: 8px; padding: 8px 12px; box-shadow: 2px 2px 6px rgba(0,0,0,0.2); white-space: nowrap;">
                            <img src="img/logo_on.png" alt="한국후지공업 로고" style="width: 120px; height: auto; margin-bottom: 5px;">
                            <div style="font-size: 14px; font-weight: bold; color: #333; padding-top: 5px; border-top: 1px solid #eee; width: 100%; text-align: center;">
                                한국후지 답십리점
                            </div>
                            <div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid white;"></div>
                        </div>
                    `;
                    new kakao.maps.CustomOverlay({ map: mapInstance, position: centerCoords, content: content, yAnchor: 1 });
                }
                mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
            });
        });
    }
    window.initializeAndRelayoutKakaoMap = initializeAndRelayoutKakaoMap;

    function scrollToBottomChat() {
        if (chatbotMessages) chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addMessage(text, sender) {
        if (chatbotMessages) {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${sender}-message`;
            messageElement.textContent = text;
            chatbotMessages.appendChild(messageElement);
            scrollToBottomChat();
        }
    }

    function sendMessageToChatbot(query) {
        addMessage(query, 'user');
        const botResponseText = faqResponses[query] || "죄송합니다. 이해하지 못했습니다. 아래 버튼에서 원하시는 내용을 선택해주세요.";
        setTimeout(() => addMessage(botResponseText, 'bot'), 500);
    }

    // --- 4. 이벤트 리스너 설정 ---
    document.querySelectorAll('.product-card .view-category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const categoryId = button.closest('.product-card').dataset.categoryId;
            if (categoryId) openProductCategoryModal(categoryId);
        });
    });

    const usedProductList = document.querySelector('.used-product-list');
    if(usedProductList) {
        usedProductList.addEventListener('click', (event) => {
            const item = event.target.closest('.used-product-item');
            if (item && !item.classList.contains('sold-out')) {
                const productId = item.dataset.productId;
                const product = usedInventory.find(p => p.id === productId);
                if (product) {
                    openImageGalleryModal(product.displayName, product.images);
                }
            }
        });
    }

    document.querySelectorAll('.modal-common .close-btn').forEach(btn => btn.addEventListener('click', closeAllModals));
    document.querySelectorAll('.modal-common .modal-overlay').forEach(overlay => overlay.addEventListener('click', closeAllModals));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    if (chatbotToggleBtn) {
        chatbotToggleBtn.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            if (chatbotWindow.classList.contains('active')) {
                scrollToBottomChat();
            }
        });
    }
    if (chatbotCloseBtn) chatbotCloseBtn.addEventListener('click', () => chatbotWindow.classList.remove('active'));
    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', () => {
            const query = chatbotInput.value.trim();
            if (query) {
                sendMessageToChatbot(query);
                chatbotInput.value = '';
            }
        });
    }
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') chatbotSendBtn.click();
        });
    }
    if (chatbotMessages) {
        chatbotMessages.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply-btn')) {
                sendMessageToChatbot(e.target.dataset.query);
            }
        });
    }

    // --- 5. 초기화 함수 실행 ---
    renderUsedProducts();
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
});