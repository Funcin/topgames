// Wait for gamesData to load
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

// Create petal falling effect
function createPetalEffect() {
    const colors = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493', '#DB7093', '#FFC0CB'];
    const container = document.querySelector('body');
    const petalsCount = 60; // Number of petals
    
    for (let i = 0; i < petalsCount; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            // Random petal size
            const size = Math.random() * 15 + 10;
            
            // Random position and style
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 4; // 4-7 seconds animation duration
            const delay = Math.random() * 2; // 0-2 seconds delay
            const rotateX = Math.random() * 360;
            const rotateY = Math.random() * 360;
            const rotateZ = Math.random() * 360;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Set petal style - using petal shape
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            petal.style.left = `${left}vw`;
            petal.style.backgroundColor = color;
            petal.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10) + 5}px ${color}`;
            petal.style.borderRadius = '50% 0 50% 0';
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;
            petal.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
            
            // Random petal shape variation
            if (Math.random() > 0.5) {
                petal.style.borderRadius = '0 50% 0 50%';
            }
            
            // Create inner shadow effect to make petals look more realistic
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
            
            // Add petal to the page
            container.appendChild(petal);
            
            // Remove petal after animation completes
            setTimeout(() => {
                petal.remove();
            }, (duration + delay) * 1000);
        }, i * 100); // Create petals one by one for continuous effect
    }
}

// Global variables
let isInitialized = false;
let currentPage = 1;
const gamesPerPage = 12;
let currentGames = [];
let top15Games = new Set();

// Randomly select recommended games for each category
function selectRecommendedGames() {
    // Check for recommended games data in local storage
    const storedRecommendations = localStorage.getItem('recommendedGames');
    const storedDate = localStorage.getItem('recommendedGamesDate');
    const today = new Date().toDateString();

    // If we already have today's recommendation data, use it
    if (storedRecommendations && storedDate === today) {
        const recommendedIds = new Set(JSON.parse(storedRecommendations));
        // Reset recommendation status for all games
        gamesData.forEach(game => {
            game.isRecommended = recommendedIds.has(game.id);
        });
        return;
    }

    // Get all unique categories
    const categories = [...new Set(gamesData.map(game => game.category))];
    
    // Store IDs of recommended games
    const recommendedGameIds = new Set();
    
    // Reset recommendation status for all games
    gamesData.forEach(game => {
        game.isRecommended = false;
    });

    // Select 3 games for each category
    categories.forEach(category => {
        const gamesInCategory = gamesData.filter(game => game.category === category);
        
        // Shuffle array randomly
        const shuffled = [...gamesInCategory].sort(() => Math.random() - 0.5);
        
        // Select first 3 games (or all if the category has fewer than 3)
        const selectedGames = shuffled.slice(0, 3);
        
        // Mark these games as recommended
        selectedGames.forEach(game => {
            const gameIndex = gamesData.findIndex(g => g.id === game.id);
            if (gameIndex !== -1) {
                gamesData[gameIndex].isRecommended = true;
                recommendedGameIds.add(game.id);
            }
        });
    });

    // Save recommended game IDs and date to local storage
    localStorage.setItem('recommendedGames', JSON.stringify([...recommendedGameIds]));
    localStorage.setItem('recommendedGamesDate', today);
}

// Main application initialization function
function initializeApp() {
    if (isInitialized) return;
    
    // Ensure game data is available
    if (typeof gamesData === 'undefined' || !Array.isArray(gamesData)) {
        console.error('No valid games data available');
        return;
    }

    // Initialize recommended games
    selectRecommendedGames();

    // DOM elements
    const headerSearchInput = document.getElementById('header-search-input');
    const headerSearchButton = document.getElementById('header-search-button');
    const categoryButtons = document.querySelectorAll('.category-button');
    const gamesContainer = document.getElementById('games-container');

    // Create pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    gamesContainer.parentNode.insertBefore(paginationContainer, gamesContainer.nextSibling);

    // Pagination rendering function
    function renderPagination(games) {
        const totalPages = Math.ceil(games.length / gamesPerPage);
        paginationContainer.innerHTML = '';
        
        // Previous page button
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

        // Page number buttons
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

        // Next page button
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
        
        // Sort by player count
        const sortedGames = [...games].sort((a, b) => {
            const countA = parseInt(a.playerCount) || 0;
            const countB = parseInt(b.playerCount) || 0;
            return countB - countA;
        });
        
        // Calculate games for current page
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const pageGames = sortedGames.slice(startIndex, endIndex);
        
        // Get Top15
        top15Games = new Set(sortedGames.slice(0, 15).map(game => game.id));
        
        pageGames.forEach(game => {
            const card = createGameCard(game);
            container.appendChild(card);
        });
        
        // Render pagination
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
                // When search box is cleared, show Girls category games instead of all games
                const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
                currentGames = girlsGames;
                currentPage = 1;
                renderGames(girlsGames);
                
                // Ensure Girls button shows as active
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
            // When search box is cleared, show Girls category games instead of all games
            const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
            currentGames = girlsGames;
            currentPage = 1;
            renderGames(girlsGames);
            
            // Ensure Girls button shows as active
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
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to current button
            button.classList.add('active');

            const category = button.textContent.toLowerCase();
            
            // If Girls tab is clicked, trigger petal effect
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

    // Set initial state - default show Girls category
    const girlsButton = document.querySelector('.category-button[data-category="Girls"]');
    if (girlsButton) {
        // Default show Girls category games
        const girlsGames = gamesData.filter(game => game.category.toLowerCase() === 'girls');
        currentGames = girlsGames;
        renderGames(girlsGames);
        
        // Trigger petal effect on initialization
        setTimeout(() => {
            createPetalEffect();
        }, 500);
    }

    isInitialized = true;
}

// Ensure both DOM and game data are loaded before initialization
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

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    waitForDependencies().then(() => {
        initializeApp();
    });
});

// Create loading animation
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

// Show loading animation
function showLoading() {
    const overlay = document.querySelector('.loading-overlay') || createLoadingOverlay();
    overlay.classList.add('visible');
    document.querySelector('.game-iframe-container')?.classList.add('loading');
}

// Hide loading animation
function hideLoading() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        document.querySelector('.game-iframe-container')?.classList.remove('loading');
    }
}

// Create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'game-image';
    
    const img = document.createElement('img');
    img.alt = game.name;

    // Set default image
    function setDefaultImage() {
        img.src = 'default-game.png';
        imageContainer.classList.add('default-image');
    }

    // Check if image can be loaded
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
            }, 2000); // 2 seconds timeout

            testImg.src = url;
        });
    }

    // Set image source
    const imageUrl = game.imageUrl || game.image;

    // First set default image
    setDefaultImage();

    // If there is an image URL, check and try to load
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

    // Add recommended tag
    if (game.isRecommended) {
        const recommendedTag = document.createElement('div');
        recommendedTag.className = 'recommended-tag';
        recommendedTag.innerHTML = '<i class="fas fa-award"></i> Editor\'s Choice';
        tagsContainer.appendChild(recommendedTag);
    }

    // Add trending tag
    if (game.playerCount > 6000) { // Only show trending tag if player count exceeds 6000
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

    // Create hover overlay
    const hoverOverlay = document.createElement('div');
    hoverOverlay.className = 'game-hover-overlay';
    
    // Hover layer tag container
    const overlayTagsContainer = document.createElement('div');
    overlayTagsContainer.className = 'tags-container';
    
    // Copy tags to hover layer
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
    
    // Hover layer title
    const overlayTitle = document.createElement('h3');
    overlayTitle.className = 'game-title';
    overlayTitle.textContent = game.name;
    hoverOverlay.appendChild(overlayTitle);
    
    // Hover layer game description
    if (game.description) {
        const overlayDescription = document.createElement('div');
        overlayDescription.className = 'game-full-description';
        overlayDescription.textContent = game.description;
        hoverOverlay.appendChild(overlayDescription);
    }
    
    // Hover layer player count
    const overlayPlayerCount = document.createElement('div');
    overlayPlayerCount.className = 'player-count';
    overlayPlayerCount.innerHTML = `Players: ${formatPlayerCount(game.playerCount || game.players || 0)} <i class="fas fa-chart-line pulse-icon"></i>`;
    hoverOverlay.appendChild(overlayPlayerCount);
    
    // Hover layer "Play Now" button
    const playButton = document.createElement('button');
    playButton.className = 'play-now-button';
    playButton.innerHTML = '<i class="fas fa-play"></i> Play Now';
    playButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        if (game.iframeUrl) {
            showGameInModal(game.iframeUrl);
        } else if (game.gameUrl) {
            window.open(game.gameUrl, '_blank');
        } else {
            alert('Game link not configured');
        }
    });
    hoverOverlay.appendChild(playButton);
    
    // Add hover layer to card
    card.appendChild(hoverOverlay);

    // Add cover image click event
    imageContainer.addEventListener('click', () => {
        if (game.iframeUrl) {
            showGameInModal(game.iframeUrl);
        } else if (game.gameUrl) {
            window.open(game.gameUrl, '_blank');
        } else {
            alert('Game link not configured');
        }
    });

    // Add structured data
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

// Show game modal
function showGameInModal(url) {
    const modal = document.getElementById('game-modal');
    const iframe = document.getElementById('game-iframe');
    const closeButton = modal.querySelector('.close-button');
    
    // Remove previous possible loaded class
    modal.classList.remove('loaded');
    
    // Set iframe source
    iframe.src = url;
    
    // Show modal
    modal.classList.add('active');
    
    // Try to adjust iframe content position, red frame area down center
    iframe.onload = function() {
        // Add loaded class to hide loading animation
        modal.classList.add('loaded');
        
        try {
            // Try multiple times to inject styles, ensure button styles can be applied
            function injectStyles() {
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeDoc) {
                        // Create and inject CSS into iframe
                        const style = iframeDoc.createElement('style');
                        style.textContent = `
                            body > div:first-child {
                                display: flex !important;
                                flex-direction: column !important;
                                justify-content: center !important;
                                align-items: center !important;
                                height: 100vh !important;
                                padding-top: 10vh !important; /* Downward offset */
                            }
                            
                            /* Green Play button rounded style - Stronger selector */
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
                            
                            /* Specific play button container matching */
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
                            
                            /* Cover possible inline styles */
                            [style*="border-radius"] {
                                border-radius: 12px !important;
                                -webkit-border-radius: 12px !important;
                                -moz-border-radius: 12px !important;
                            }
                        `;
                        iframeDoc.head.appendChild(style);
                        
                        // Directly find and modify possible button elements
                        const possibleButtons = iframeDoc.querySelectorAll('a, button, div[role="button"], [style*="background"]');
                        possibleButtons.forEach(btn => {
                            const style = window.getComputedStyle(btn);
                            const bgColor = style.backgroundColor;
                            
                            // Check if it's a green button
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
                    console.log("Injecting styles attempt failed:", e);
                }
            }
            
            // Immediately try once
            injectStyles();
            
            // Then try multiple times, ensure styles are applied
            setTimeout(injectStyles, 500);
            setTimeout(injectStyles, 1000);
            setTimeout(injectStyles, 2000);
            setTimeout(injectStyles, 3000);
            
        } catch (e) {
            console.log("Cannot modify iframe content:", e);
        }
    };
    
    // Add close button event
    closeButton.onclick = () => {
        modal.classList.remove('active');
        modal.classList.remove('loaded');
        iframe.src = ''; // Clear iframe source
    };
    
    // Click outside modal to close
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.classList.remove('loaded');
            iframe.src = ''; // Clear iframe source
        }
    };
} 