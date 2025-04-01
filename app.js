// 等待 gamesData 加载完成
function waitForGamesData(callback, maxAttempts = 10) {
    let attempts = 0;
    
    function checkGamesData() {
        attempts++;
        if (typeof gamesData !== 'undefined' && Array.isArray(gamesData)) {
            callback();
        } else if (attempts < maxAttempts) {
            setTimeout(checkGamesData, 100);
        } else {
            console.error('Failed to load games data after multiple attempts');
        }
    }
    
    checkGamesData();
}

// 创建花瓣撒落效果
function createPetalEffect() {
    const colors = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#DB7093', '#FFC0CB'];
    const container = document.querySelector('body');
    const petalsCount = 60; // 花瓣数量
    
    for (let i = 0; i < petalsCount; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            // 随机花瓣大小
            const size = Math.random() * 15 + 10;
            
            // 随机位置和样式
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 4; // 4-7秒的动画时间
            const delay = Math.random() * 2; // 0-2秒的延迟
            const rotateX = Math.random() * 360;
            const rotateY = Math.random() * 360;
            const rotateZ = Math.random() * 360;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // 设置花瓣样式 - 使用花瓣形状
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${left}vw`;
            petal.style.backgroundColor = color;
            petal.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10) + 5}px ${color}`;
            petal.style.borderRadius = '50% 0 50% 0';
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;
            petal.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
            
            // 随机设置花瓣形状变化
            if (Math.random() > 0.5) {
                petal.style.borderRadius = '0 50% 0 50%';
            }
            
            // 创建内部阴影效果，让花瓣看起来更真实
            const innerShine = document.createElement('div');
            innerShine.className = 'petal-shine';
            innerShine.style.width = '40%';
            innerShine.style.height = '40%';
            innerShine.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            innerShine.style.borderRadius = '50%';
            innerShine.style.position = 'absolute';
            innerShine.style.top = '20%';
            innerShine.style.left = '20%';
            
            petal.appendChild(innerShine);
            
            // 添加花瓣到页面
            container.appendChild(petal);
            
            // 设置动画完成后移除花瓣
            setTimeout(() => {
                petal.remove();
            }, (duration + delay) * 1000);
        }, i * 100); // 逐个创建花瓣，产生连续效果
    }
}

// 全局变量
let isInitialized = false;
let currentPage = 1;
const gamesPerPage = 12;
let currentGames = [];
let top15Games = new Set();

// 为每个分类随机选择推荐游戏
function selectRecommendedGames() {
    // 检查本地存储中的推荐游戏数据
    const storedRecommendations = localStorage.getItem('recommendedGames');
    const storedDate = localStorage.getItem('recommendedGamesDate');
    const today = new Date().toDateString();

    // 如果已有今天的推荐数据，直接使用
    if (storedRecommendations && storedDate === today) {
        const recommendedIds = new Set(JSON.parse(storedRecommendations));
        // 重置所有游戏的推荐状态
        gamesData.forEach(game => {
            game.isRecommended = recommendedIds.has(game.id);
        });
        return;
    }

    // 获取所有不同的分类
    const categories = [...new Set(gamesData.map(game => game.category))];
    
    // 存储已推荐的游戏ID
    const recommendedGameIds = new Set();
    
    // 重置所有游戏的推荐状态
    gamesData.forEach(game => {
        game.isRecommended = false;
    });

    // 为每个分类选择3个游戏
    categories.forEach(category => {
        const gamesInCategory = gamesData.filter(game => game.category === category);
        
        // 随机打乱数组
        const shuffled = [...gamesInCategory].sort(() => Math.random() - 0.5);
        
        // 选择前3个游戏（如果该分类游戏数量不足3个，则全选）
        const selectedGames = shuffled.slice(0, 3);
        
        // 标记这些游戏为推荐
        selectedGames.forEach(game => {
            const gameIndex = gamesData.findIndex(g => g.id === game.id);
            if (gameIndex !== -1) {
                gamesData[gameIndex].isRecommended = true;
                recommendedGameIds.add(game.id);
            }
        });
    });

    // 将推荐游戏ID和日期保存到本地存储
    localStorage.setItem('recommendedGames', JSON.stringify([...recommendedGameIds]));
    localStorage.setItem('recommendedGamesDate', today);
}

// 主应用初始化函数
function initializeApp() {
    if (isInitialized) return;
    
    // 确保有游戏数据
    if (typeof gamesData === 'undefined' || !Array.isArray(gamesData)) {
        console.error('No valid games data available');
        return;
    }

    // 初始化推荐游戏
    selectRecommendedGames();

    // DOM elements
    const headerSearchInput = document.getElementById('header-search-input');
    const headerSearchButton = document.getElementById('header-search-button');
    const categoryButtons = document.querySelectorAll('.category-button');
    const gamesContainer = document.getElementById('games-container');

    // 创建分页容器
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    gamesContainer.parentNode.insertBefore(paginationContainer, gamesContainer.nextSibling);

    // 分页渲染函数
    function renderPagination(games) {
        const totalPages = Math.ceil(games.length / gamesPerPage);
        paginationContainer.innerHTML = '';
        
        // 上一页按钮
        const prevButton = document.createElement('button');
        prevButton.className = 'pagination-button';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGames(currentGames);
            }
        });
        paginationContainer.appendChild(prevButton);

        // 页码按钮
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderGames(currentGames);
            });
            paginationContainer.appendChild(pageButton);
        }

        // 下一页按钮
        const nextButton = document.createElement('button');
        nextButton.className = 'pagination-button';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderGames(currentGames);
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Game card rendering function
    function renderGames(games) {
        const container = document.querySelector('.game-grid');
        container.innerHTML = '';
        
        // 按玩家数量排序
        const sortedGames = [...games].sort((a, b) => {
            const countA = parseInt(a.playerCount) || 0;
            const countB = parseInt(b.playerCount) || 0;
            return countB - countA;
        });
        
        // 计算当前页的游戏
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const pageGames = sortedGames.slice(startIndex, endIndex);
        
        // 获取Top15
        top15Games = new Set(sortedGames.slice(0, 15).map(game => game.id));
        
        pageGames.forEach(game => {
            const card = createGameCard(game);
            container.appendChild(card);
        });
        
        // 渲染分页
        renderPagination(sortedGames);
    }

    // Search functionality
    let searchTimeout;
    headerSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        searchTimeout = setTimeout(() => {
            if (query) {
                const searchResults = searchGames(query);
                currentGames = searchResults;
                currentPage = 1;
                renderGames(searchResults);
            } else {
                // 清空搜索框时，显示Girls分类游戏而不是所有游戏
                const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
                currentGames = girlsGames;
                currentPage = 1;
                renderGames(girlsGames);
                
                // 确保Girls按钮显示为active状态
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                const girlsButton = document.querySelector('.category-button[data-category="Girls"]');
                if (girlsButton) {
                    girlsButton.classList.add('active');
                }
            }
        }, 300);
    });

    headerSearchButton.addEventListener('click', () => {
        const query = headerSearchInput.value.trim();
        if (query) {
            const searchResults = searchGames(query);
            currentGames = searchResults;
            currentPage = 1;
            renderGames(searchResults);
        } else {
            // 清空搜索框时，显示Girls分类游戏而不是所有游戏
            const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
            currentGames = girlsGames;
            currentPage = 1;
            renderGames(girlsGames);
            
            // 确保Girls按钮显示为active状态
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            const girlsButton = document.querySelector('.category-button[data-category="Girls"]');
            if (girlsButton) {
                girlsButton.classList.add('active');
            }
        }
    });

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');

            const category = button.textContent.toLowerCase();
            
            // 如果点击的是Girls标签，触发花瓣效果
            if (category === 'girls') {
                createPetalEffect();
            }
            
            let filteredGames;

            if (category === 'all') {
                filteredGames = gamesData;
            } else {
                filteredGames = gamesData.filter(game => game.category.toLowerCase() === category);
            }

            currentGames = filteredGames;
            currentPage = 1;
            renderGames(filteredGames);
        });
    });

    // 设置初始状态 - 默认显示Girls分类
    const girlsButton = document.querySelector('.category-button[data-category="Girls"]');
    if (girlsButton) {
        // 默认显示Girls分类的游戏
        const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
        currentGames = girlsGames;
        renderGames(girlsGames);
        
        // 初始化时触发花瓣效果
        setTimeout(() => {
            createPetalEffect();
        }, 500);
    }

    isInitialized = true;
}

// 确保在 DOM 和游戏数据都加载完成后初始化
function waitForDependencies() {
    return new Promise((resolve) => {
        function checkDependencies() {
            if (document.readyState === 'complete' && typeof gamesData !== 'undefined' && Array.isArray(gamesData)) {
                resolve();
            } else {
                setTimeout(checkDependencies, 100);
            }
        }
        checkDependencies();
    });
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    waitForDependencies().then(() => {
        initializeApp();
    });
});

// 创建加载动画
function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">Loading game...</div>
    `;
    document.body.appendChild(overlay);
    return overlay;
}

// 显示加载动画
function showLoading() {
    const overlay = document.querySelector('.loading-overlay') || createLoadingOverlay();
    overlay.classList.add('visible');
    document.querySelector('.game-iframe-container')?.classList.add('loading');
}

// 隐藏加载动画
function hideLoading() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        document.querySelector('.game-iframe-container')?.classList.remove('loading');
    }
}

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'game-image';
    
    const img = document.createElement('img');
    img.alt = game.name;

    // 设置默认图片
    function setDefaultImage() {
        img.src = 'default-game.png';
        imageContainer.classList.add('default-image');
    }

    // 检查图片是否可以加载
    function checkImage(url) {
        return new Promise((resolve) => {
            const testImg = new Image();
            let timeoutId;

            testImg.onload = function() {
                clearTimeout(timeoutId);
                resolve(true);
            };

            testImg.onerror = function() {
                clearTimeout(timeoutId);
                resolve(false);
            };

            timeoutId = setTimeout(() => {
                resolve(false);
            }, 2000); // 2秒超时

            testImg.src = url;
        });
    }

    // 设置图片源
    const imageUrl = game.imageUrl || game.image;

    // 先设置默认图片
    setDefaultImage();

    // 如果有图片URL，检查并尝试加载
    if (imageUrl && typeof imageUrl === 'string' && 
        !imageUrl.includes('undefined') && !imageUrl.includes('null')) {
        
        checkImage(imageUrl).then(canLoad => {
            if (canLoad) {
                img.src = imageUrl;
                imageContainer.classList.remove('default-image');
            }
        });
    }

    imageContainer.appendChild(img);
    card.appendChild(imageContainer);

    const gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';

    // 添加推荐标签
    if (game.isRecommended) {
        const recommendedTag = document.createElement('div');
        recommendedTag.className = 'recommended-tag';
        recommendedTag.innerHTML = '<i class="fas fa-award"></i> Editor\'s Choice';
        tagsContainer.appendChild(recommendedTag);
    }

    // 添加趋势标签
    if (game.playerCount > 6000) { // 只有当玩家数量超过6000时才显示趋势标签
        const trendingTag = document.createElement('div');
        trendingTag.className = 'trending-tag';
        trendingTag.innerHTML = '<i class="fas fa-fire"></i> Trending Now';
        tagsContainer.appendChild(trendingTag);
    }

    gameInfo.appendChild(tagsContainer);

    const title = document.createElement('h3');
    title.className = 'game-title';
    title.textContent = game.name;
    gameInfo.appendChild(title);
    card.appendChild(gameInfo);

    const playerCount = document.createElement('div');
    playerCount.className = 'player-count';
    playerCount.innerHTML = `Players: ${formatPlayerCount(game.playerCount || game.players || 0)} <i class="fas fa-chart-line pulse-icon"></i>`;
    
    card.appendChild(playerCount);

    // 创建悬停浮层
    const hoverOverlay = document.createElement('div');
    hoverOverlay.className = 'game-hover-overlay';
    
    // 浮层中的标签容器
    const overlayTagsContainer = document.createElement('div');
    overlayTagsContainer.className = 'tags-container';
    
    // 复制标签到浮层
    if (game.isRecommended) {
        const overlayRecommendedTag = document.createElement('div');
        overlayRecommendedTag.className = 'recommended-tag';
        overlayRecommendedTag.innerHTML = '<i class="fas fa-award"></i> Editor\'s Choice';
        overlayTagsContainer.appendChild(overlayRecommendedTag);
    }
    
    if (game.playerCount > 6000) {
        const overlayTrendingTag = document.createElement('div');
        overlayTrendingTag.className = 'trending-tag';
        overlayTrendingTag.innerHTML = '<i class="fas fa-fire"></i> Trending Now';
        overlayTagsContainer.appendChild(overlayTrendingTag);
    }
    
    hoverOverlay.appendChild(overlayTagsContainer);
    
    // 浮层中的标题
    const overlayTitle = document.createElement('h3');
    overlayTitle.className = 'game-title';
    overlayTitle.textContent = game.name;
    hoverOverlay.appendChild(overlayTitle);
    
    // 浮层中的游戏描述
    if (game.description) {
        const overlayDescription = document.createElement('div');
        overlayDescription.className = 'game-full-description';
        overlayDescription.textContent = game.description;
        hoverOverlay.appendChild(overlayDescription);
    }
    
    // 浮层中的玩家数量
    const overlayPlayerCount = document.createElement('div');
    overlayPlayerCount.className = 'player-count';
    overlayPlayerCount.innerHTML = `Players: ${formatPlayerCount(game.playerCount || game.players || 0)} <i class="fas fa-chart-line pulse-icon"></i>`;
    hoverOverlay.appendChild(overlayPlayerCount);
    
    // 浮层中的"立即玩"按钮
    const playButton = document.createElement('button');
    playButton.className = 'play-now-button';
    playButton.innerHTML = '<i class="fas fa-play"></i> Play Now';
    playButton.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        if (game.iframeUrl) {
            showGameInModal(game.iframeUrl);
        } else if (game.gameUrl) {
            window.open(game.gameUrl, '_blank');
        } else {
            alert('Game link not configured');
        }
    });
    hoverOverlay.appendChild(playButton);
    
    // 将浮层添加到卡片
    card.appendChild(hoverOverlay);

    // 为封面图添加点击事件
    imageContainer.addEventListener('click', () => {
        if (game.iframeUrl) {
            showGameInModal(game.iframeUrl);
        } else if (game.gameUrl) {
            window.open(game.gameUrl, '_blank');
        } else {
            alert('Game link not configured');
        }
    });

    // 添加结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "OneGame",
        "url": "https://onegame.fun",
        "description": "Discover the best online games for girls and boys! Featuring popular girls games, dress up games, makeup games, cooking games, racing games, puzzle games and more. Find editor's recommended and trending games that you can play instantly without downloading. Best online games for girls and boys, most popular games for children, favorite online games, kids gaming, online games for girls and boys.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://onegame.fun/?search={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "keywords": "girls games, boys games, online games for girls, online games for boys, popular girls games, best games for girls, favorite girls games, dress up games, makeup games, cooking games, fashion games, princess games, barbie games, racing games, puzzle games, sports games, girl gaming, boy gaming, fun games for kids, free online games for children, browser games for girls and boys"
    };

    const gameStructuredData = {
        "@context": "https://schema.org",
        "@type": "VideoGame",
        "name": game.name,
        "description": game.description,
        "genre": game.category,
        "image": game.imageUrl,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingCount": game.playerCount,
            "bestRating": "5",
            "worstRating": "1",
            "ratingValue": game.isRecommended ? "5" : "4"
        }
    };

    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(structuredData);
    document.head.appendChild(websiteScript);

    const gameScript = document.createElement('script');
    gameScript.type = 'application/ld+json';
    gameScript.text = JSON.stringify(gameStructuredData);
    document.head.appendChild(gameScript);

    return card;
}

// 显示游戏弹窗
function showGameInModal(url) {
    const modal = document.getElementById('game-modal');
    const iframe = document.getElementById('game-iframe');
    const closeButton = modal.querySelector('.close-button');
    
    // 移除之前可能存在的loaded类
    modal.classList.remove('loaded');
    
    // 设置 iframe 源
    iframe.src = url;
    
    // 显示弹窗
    modal.classList.add('active');
    
    // 尝试调整iframe中内容的位置，红框区域向下居中
    iframe.onload = function() {
        // 添加loaded类以隐藏加载动画
        modal.classList.add('loaded');
        
        try {
            // 尝试多次注入样式，确保按钮样式能够应用
            function injectStyles() {
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeDoc) {
                        // 创建并注入CSS到iframe中
                        const style = iframeDoc.createElement('style');
                        style.textContent = `
                            body > div:first-child {
                                display: flex !important;
                                flex-direction: column !important;
                                justify-content: center !important;
                                align-items: center !important;
                                height: 100vh !important;
                                padding-top: 10vh !important; /* 向下偏移 */
                            }
                            
                            /* 绿色Play按钮的圆角样式 - 更强的选择器 */
                            button, 
                            .play-button,
                            a.play-button,
                            *[class*="play-button"],
                            *[class*="playButton"],
                            div[style*="background-color: #4CAF50"] > *,
                            div[style*="background: #4CAF50"] > *,
                            div[style*="background-color: rgb(76, 175, 80)"] > *,
                            div[style*="background: rgb(76, 175, 80)"] > *,
                            *[style*="background-color: #4CAF50"],
                            *[style*="background: #4CAF50"],
                            *[style*="background-color: rgb(76, 175, 80)"],
                            *[style*="background: rgb(76, 175, 80)"],
                            *[style*="background-color: #43A047"],
                            *[style*="background: #43A047"],
                            *[style*="background-color: rgb(67, 160, 71)"],
                            *[style*="background: rgb(67, 160, 71)"],
                            *[style*="background-color: green"],
                            *[style*="background: green"],
                            *[style*="background: linear-gradient(#4CAF50"],
                            *[style*="background: linear-gradient(rgb(76, 175, 80)"],
                            *[style*="color: white"][style*="background"],
                            *[style*="color: #fff"][style*="background"],
                            a.button-green,
                            a.green-button,
                            button.green,
                            .btn-success,
                            .success-btn,
                            *[class*="btn"][class*="green"],
                            *[class*="button"][class*="green"] {
                                border-radius: 12px !important;
                                -webkit-border-radius: 12px !important;
                                -moz-border-radius: 12px !important;
                                overflow: hidden !important;
                                transition: all 0.3s ease !important;
                                box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
                            }
                            
                            /* 特定匹配 play按钮容器 */
                            div > a[href="#"],
                            div > a:not([href]),
                            div[role="button"],
                            [data-role="button"],
                            [role="button"],
                            div > div:only-child {
                                border-radius: 12px !important;
                                -webkit-border-radius: 12px !important;
                                -moz-border-radius: 12px !important;
                                overflow: hidden !important;
                            }
                            
                            /* 覆盖可能的内联样式 */
                            [style*="border-radius"] {
                                border-radius: 12px !important;
                                -webkit-border-radius: 12px !important;
                                -moz-border-radius: 12px !important;
                            }
                        `;
                        iframeDoc.head.appendChild(style);
                        
                        // 直接查找并修改可能的按钮元素
                        const possibleButtons = iframeDoc.querySelectorAll('a, button, div[role="button"], [style*="background"]');
                        possibleButtons.forEach(btn => {
                            const style = window.getComputedStyle(btn);
                            const bgColor = style.backgroundColor;
                            
                            // 检查是否为绿色按钮
                            if (bgColor.includes('76, 175, 80') || 
                                bgColor.includes('67, 160, 71') || 
                                bgColor === 'green' ||
                                btn.textContent.trim().toLowerCase() === 'play') {
                                
                                btn.style.borderRadius = '12px';
                                btn.style.overflow = 'hidden';
                            }
                        });
                    }
                } catch (e) {
                    console.log("注入样式尝试失败:", e);
                }
            }
            
            // 立即尝试一次
            injectStyles();
            
            // 然后多次尝试，确保样式被应用
            setTimeout(injectStyles, 500);
            setTimeout(injectStyles, 1000);
            setTimeout(injectStyles, 2000);
            setTimeout(injectStyles, 3000);
            
        } catch (e) {
            console.log("无法修改iframe内容:", e);
        }
    };
    
    // 添加关闭按钮事件
    closeButton.onclick = () => {
        modal.classList.remove('active');
        modal.classList.remove('loaded');
        iframe.src = ''; // 清空 iframe 源
    };
    
    // 点击弹窗外部关闭
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.classList.remove('loaded');
            iframe.src = ''; // 清空 iframe 源
        }
    };
} 