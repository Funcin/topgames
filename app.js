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
                currentGames = gamesData;
                currentPage = 1;
                renderGames(gamesData);
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
            currentGames = gamesData;
            currentPage = 1;
            renderGames(gamesData);
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

    // 设置初始状态
    const allButton = document.querySelector('.category-button[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    // 立即显示所有游戏
    currentGames = gamesData;
    renderGames(gamesData);
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
        <div class="loading-text">游戏加载中...</div>
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

    const description = document.createElement('div');
    description.className = 'game-description';
    description.textContent = game.description;
    card.appendChild(description);

    // 为封面图添加点击事件
    imageContainer.addEventListener('click', () => {
        if (game.iframeUrl) {
            const gameContainer = document.createElement('div');
            gameContainer.className = 'game-container';
            gameContainer.innerHTML = `
                <div class="game-header">
                    <h2>${game.name}</h2>
                    <button class="close-button">&times;</button>
                </div>
                <div class="game-iframe-container">
                    <div class="loading-overlay">
                        <div class="loading-spinner"></div>
                        <div class="loading-text">游戏加载中...</div>
                    </div>
                    <iframe src="${game.iframeUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;

            const closeButton = gameContainer.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                gameContainer.remove();
            });

            document.body.appendChild(gameContainer);

            // 监听iframe加载完成
            const iframe = gameContainer.querySelector('iframe');
            iframe.addEventListener('load', () => {
                const loadingOverlay = gameContainer.querySelector('.loading-overlay');
                if (loadingOverlay) {
                    loadingOverlay.style.display = 'none';
                }
            });
        } else if (game.gameUrl) {
            window.open(game.gameUrl, '_blank');
        } else {
            alert('游戏链接未配置');
        }
    });

    // 添加结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "OneGame",
        "url": "https://onegame.fun",
        "description": "发现最好玩的在线游戏！包括赛车、益智、运动等多种类型。精选编辑推荐和热门游戏，无需下载即可畅玩。",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://onegame.fun/?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
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
    
    // 设置 iframe 源
    iframe.src = url;
    
    // 显示弹窗
    modal.classList.add('active');
    
    // 添加关闭按钮事件
    closeButton.onclick = () => {
        modal.classList.remove('active');
        iframe.src = ''; // 清空 iframe 源
    };
    
    // 点击弹窗外部关闭
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            iframe.src = ''; // 清空 iframe 源
        }
    };
} 