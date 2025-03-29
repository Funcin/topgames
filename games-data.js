const gamesData = [
    // Racing Games
    {
        id: 1,
        name: "Drift Dudes",
        category: "Racing",
        description: "Drift Dudes is a racing game where players perform stylish drifts to score points and unlock new cars and tracks.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DriftDudesTeaser.jpg",
        gameUrl: "https://html5games.com/Game/Drift-Dudes/4379d17e-2ec5-45ff-a76b-74e4c7634ed0",
        playerCount: 2000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/drift-dudes"
    },
    {
        id: 2,
        name: "E-Scooter!",
        category: "Racing",
        description: "E-Scooter! is a fast-paced mobile game where players race electric scooters through city streets, collecting coins and avoiding obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EScooterTeaser.jpg",
        gameUrl: "https://html5games.com/Game/E-Scooter/c493535a-9c66-4d47-a3fa-6239aa0e0d52",
        playerCount: 2000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/e-scooter"
    },
    {
        id: 3,
        name: "Traffic Tom",
        category: "Racing",
        description: "Traffic Tom is a game where players manage traffic flow at busy intersections to prevent accidents and help vehicles reach their destinations safely.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TrafficTomTeaser.jpg",
        gameUrl: "https://html5games.com/Game/Traffic-Tom/8bf9689b-ca21-4291-af6a-f85c6bcf92f7",
        playerCount: 2000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/traffic-tom"
    },
    {
        id: 4,
        name: "Adventure Drivers",
        category: "Racing",
        description: "Adventure Drivers is a racing game where players conquer diverse terrains, collect power-ups and complete missions to unlock new vehicles and tracks.",
        imageUrl: "https://github.com/Funcin/app-images/blob/main/AdventureDriversTeaser%20(1).jpg?raw=true",
        gameUrl: "https://html5games.com/Game/Traffic-Tom/8bf9689b-ca21-4291-af6a-f85c6bcf92f7",
        playerCount: 2000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/adventure-drivers"
    },
    {
        id: 5,
        name: "High Hills",
        category: "Racing",
        description: "High Hills is a racing game where players drive across steep terrain, dodging obstacles and collecting coins.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HighHillsTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/high-hills"
    },
    {
        id: 6,
        name: "Race Right",
        category: "Racing",
        description: "Race Right is a high-speed racing game where players compete on challenging tracks while mastering perfect timing and precision driving techniques.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RaceRightTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/race-right"
    },
    {
        id: 64,
        name: "Moto Pool Party",
        category: "Racing",
        description: "Moto X3M Pool Party is a stunt racing game where riders perform tricks through water-themed obstacle courses.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MotoX3mPoolPartyTeaser.jpg",
        gameUrl: "",
        playerCount: 2800,
        rating: 4,
        iframeUrl: "https://play.famobi.com/moto-x3m-pool-party"
    },
    {
        id: 65,
        name: "Drag Racing Club",
        category: "Racing",
        description: "Drag Racing Club is a racing game where players tune cars to win quarter-mile races against competitive opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DragRacingClubTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/drag-racing-club"
    },
    {
        id: 66,
        name: "Biker Street",
        category: "Racing",
        description: "Biker Street is a racing game where players navigate motorcycles through traffic while collecting coins and avoiding crashes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BikerStreetTeaser.jpg",
        gameUrl: "",
        playerCount: 4700,
        rating: 5,
        iframeUrl: "https://play.famobi.com/biker-street"
    },
    {
        id: 67,
        name: "Highway Extreme",
        category: "Racing",
        description: "Highway Rider Extreme is a high-speed motorcycle game where players weave through traffic while performing dangerous stunts.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HighwayRiderExtremeTeaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        rating: 5,
        iframeUrl: "https://play.famobi.com/highway-rider-extreme"
    },
    {
        id: 68,
        name: "Moto Fury",
        category: "Racing",
        description: "Moto Fury is an action racing game where bikers perform stunts while avoiding obstacles and defeating rivals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MotoFuryTeaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        rating: 5,
        iframeUrl: "https://play.famobi.com/moto-fury"
    },
    {
        id: 69,
        name: "Drift Cup Racing",
        category: "Racing",
        description: "Drift Cup Racing is a competitive driving game where players master controlled slides to win races and championships.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DriftCupRacingTeaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/drift-cup-racing"
    },
    {
        id: 70,
        name: "Racing Monster",
        category: "Racing",
        description: "Racing Monster Trucks is a high-octane driving game where players control giant vehicles to crush obstacles and win races.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RacingMonsterTrucksTeaser.jpg",
        gameUrl: "",
        playerCount: 5600,
        rating: 5,
        iframeUrl: "https://play.famobi.com/racing-monster-trucks"
    },
    {
        id: 71,
        name: "Racing Cars",
        category: "Racing",
        description: "Racing Cars is a high-speed driving game where players compete on tracks to win championships and unlock vehicles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RacingCarsTeaser.jpg",
        gameUrl: "",
        playerCount: 5900,
        rating: 5,
        iframeUrl: "https://play.famobi.com/racing-cars"
    },
    {
        id: 72,
        name: "Truck Trials",
        category: "Racing",
        description: "Truck Trials is an off-road driving game where players navigate powerful trucks through extreme terrain and obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TruckTrialsTeaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        rating: 4,
        iframeUrl: "https://play.famobi.com/truck-trials"
    },
    {
        id: 73,
        name: "Thug Racer",
        category: "Racing",
        description: "Thug Racer is a street racing game where players navigate urban courses while evading police and rival racers.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ThugRacerTeaser.jpg",
        gameUrl: "",
        playerCount: 5300,
        rating: 4,
        iframeUrl: "https://play.famobi.com/thug-racer"
    },
    {
        id: 74,
        name: "Endless Truck",
        category: "Racing",
        description: "Endless Truck is a driving game where players navigate monster trucks through infinite challenging terrain and obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EndlessTruckTeaser.jpg",
        gameUrl: "",
        playerCount: 6800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/endless-truck"
    },
    {
        id: 75,
        name: "Rival Rush",
        category: "Racing",
        description: "Rival Rush is a competitive racing game where players outspeed opponents through challenging tracks to claim victory.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RivalRushTeaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        rating: 5,
        iframeUrl: "https://play.famobi.com/rival-rush"
    },
    {
        id: 76,
        name: "Street Pursuit",
        category: "Racing",
        description: "Street Pursuit is a racing game where players outrun police while navigating through busy urban environments.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/StreetPursuit_Teaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/street-pursuit"
    },
    {
        id: 77,
        name: "StreetRace Fury",
        category: "Racing",
        description: "StreetRace Fury is an intense racing game where players compete in illegal street races against skilled opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/StreetRaceFuryTeaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/streetrace-fury"
    },
    {
        id: 78,
        name: "2Cars",
        category: "Racing",
        description: "2Cars is a split-control game where players manage two vehicles simultaneously to collect circles and avoid squares.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/2CarsTeaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/2cars"
    },
    {
        id: 79,
        name: "Don't Crash",
        category: "Racing",
        description: "Don't Crash is a driving game where players navigate busy roads while avoiding collisions with other vehicles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DontCrashTeaser.jpg",
        gameUrl: "",
        playerCount: 6900,
        rating: 5,
        iframeUrl: "https://play.famobi.com/dont-crash"
    },
    {
        id: 80,
        name: "Speed Maniac",
        category: "Racing",
        description: "Speed Maniac is a racing game where players dodge traffic at high speeds to beat time challenges.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpeedManiacTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/speed-maniac"
    },
    {
        id: 81,
        name: "Turbotastic",
        category: "Racing",
        description: "Turbotastic is a high-speed racing game where players dodge obstacles and collect boosters through futuristic tracks.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TurbotasticTeaser.jpg",
        gameUrl: "",
        playerCount: 6100,
        rating: 5,
        iframeUrl: "https://play.famobi.com/turbotastic"
    },
    {
        id: 82,
        name: "Burnin Rubber",
        category: "Racing",
        description: "Burnin Rubber is a racing game where players speed through tracks while avoiding obstacles and defeating opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BurninRubber_Teaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/burnin-rubber"
    },
    {
        id: 83,
        name: "Speed Club Nitro",
        category: "Racing",
        description: "Sprint Club Nitro is a fast-paced racing game where players use nitro boosts to outspeed rivals and win championships.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SprintClubNitroTeaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        rating: 4,
        iframeUrl: "https://play.famobi.com/sprint-club-nitro"
    },
    // Girls Games
    {
        id: 7,
        name: "Fashion Battle",
        category: "Girls",
        description: "Fashion Battle is a competitive game where players design outfits, create fashion collections and compete against others for style rankings and rewards.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FashionBattleTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/fashion-battle"
    },
    {
        id: 8,
        name: "Love Tester",
        category: "Girls",
        description: "Love Tester is a fun social game where players answer questions to determine compatibility scores and romantic potential between different individuals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/LoveTesterNewTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/love-tester"
    },
    {
        id: 9,
        name: "Save the Princess",
        category: "Girls",
        description: "Save the Princess is a classic adventure game where players overcome obstacles and defeat enemies to rescue a captured princess from a villain's castle.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SaveThePrincessTeaser.jpg",
        gameUrl: "",
        playerCount: 2500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/save-the-princess"
    },
    {
        id: 10,
        name: "Pop It! Duel",
        category: "Girls",
        description: "Pop It! Duel is a colorful puzzle game where players compete to pop bubbles and create strategic combinations to outscore opponents and unlock new levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PopItDuelTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/pop-it-duel"
    },
    {
        id: 11,
        name: "Kawaii Chibi Creator",
        category: "Girls",
        description: "Kawaii Chibi Creator is a cute character design game where players customize adorable chibi avatars with colorful outfits, accessories and expressions.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/KawaiiChibiCreator_Teaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        rating: 5,
        iframeUrl: "https://play.famobi.com/kawaii-chibi-creator"
    },
    {
        id: 12,
        name: "My Fairytale Deer",
        category: "Girls",
        description: "My Fairytale Deer is a dress-up game where players customize magical deer with enchanting accessories and fantastical outfits.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MyFairytaleDeerTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/my-fairytale-deer"
    },
    // Puzzle Games
    {
        id: 13,
        name: "Emoji Fun",
        category: "Puzzle",
        description: "Emoji Fun is a colorful matching game where players connect similar emojis to create combinations and earn high scores.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EmojiFunTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/emoji-fun"
    },
    {
        id: 14,
        name: "Go Escape",
        category: "Puzzle",
        description: "Go Escape is a puzzle game where players navigate mazes, avoid traps and find exits to advance through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GoEscapeTeaser.jpg",
        gameUrl: "",
        playerCount: 2000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/go-escape"
    },
    {
        id: 15,
        name: "Spot the Cat",
        category: "Puzzle",
        description: "Spot the Cat is a hidden object game where players search detailed scenes to find cleverly disguised cats within time limits.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpotTheCatTeaser.jpg",
        gameUrl: "",
        playerCount: 2500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/spot-the-cat"
    },
    {
        id: 16,
        name: "Color Water Sort 3D",
        category: "Puzzle",
        description: "Color Water Sort 3D is a puzzle game where players sort colored liquids between tubes to create matching sets.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ColorWaterSort3dTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/color-water-sort-3d"
    },
    {
        id: 17,
        name: "Thief Puzzle",
        category: "Puzzle",
        description: "Thief Puzzle is a brain-teasing game where players solve puzzles to help a thief navigate security systems and steal valuable treasures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ThiefPuzzleTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/thief-puzzle"
    },
    {
        id: 18,
        name: "Parking Jam",
        category: "Puzzle",
        description: "Parking Jam is a puzzle game where players slide cars and trucks to clear a path and escape gridlocked parking lots.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ParkingJamTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/parking-jam"
    },
    // Quiz Games
    {
        id: 19,
        name: "Guess Their Answer",
        category: "Quiz",
        description: "Guess Their Answer is a social party game where players predict how friends would respond to various personality questions.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GuessTheirAnswerTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/guess-their-answer"
    },
    {
        id: 20,
        name: "7 Words",
        category: "Quiz",
        description: "7 Words is a word puzzle game where players form complete sentences using only seven carefully selected words.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/7WordsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 4,
        iframeUrl: "https://play.famobi.com/7-words"
    },
    {
        id: 21,
        name: "Animal Quiz",
        category: "Quiz",
        description: "Animal Quiz is a trivia game where players answer questions about wild animals to test their knowledge of wildlife.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/AnimalQuizChristmasTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/animal-quiz"
    },
    {
        id: 22,
        name: "Fluffy Egg",
        category: "Quiz",
        description: "Fluffy Egg is a puzzle game where players guide cute eggs through obstacles to reach their nests.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FluffyEggTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/fluffy-egg"
    },
    {
        id: 23,
        name: "Geo Quiz",
        category: "Quiz",
        description: "Geo Quiz - Europe is an educational game where players test their knowledge of European geography, landmarks and capitals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GeoQuizEuropeTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/geo-quiz-europe"
    },
    {
        id: 24,
        name: "Quick Quiz",
        category: "Quiz",
        description: "Quick Quiz is a fast-paced trivia game where players answer general knowledge questions against the clock.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/QuickQuizTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/quick-quiz"
    },
    // Bubble Shooter Games
    {
        id: 25,
        name: "Om Nom Bubbles",
        category: "Bubble Shooter",
        description: "Om Nom Bubbles is a game where players pop colorful bubbles to help Om Nom collect candy and overcome obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/OmNomBubblesTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/om-nom-bubbles"
    },
    {
        id: 26,
        name: "Bubble Woods",
        category: "Bubble Shooter",
        description: "Bubble Woods is a puzzle game where players match and pop colorful bubbles to help forest creatures gather magical items.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubbleWoodsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 4,
        iframeUrl: "https://play.famobi.com/bubble-woods"
    },
    {
        id: 27,
        name: "Candy Bubble",
        category: "Bubble Shooter",
        description: "Candy Bubble is a colorful puzzle game where players match and pop sweet-themed bubbles to progress through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CandyBubble_Teaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/candy-bubble"
    },
    {
        id: 28,
        name: "Bubble Spirit",
        category: "Bubble Shooter",
        description: "Bubble Spirit is a puzzle game where players match colorful bubbles to free trapped spirits and advance through magical levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubbleSpirit_Teaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/bubble-spirit"
    },
    {
        id: 29,
        name: "Bubbles Shooter",
        category: "Bubble Shooter",
        description: "Bubbles Shooter is a classic arcade game where players aim and fire colored bubbles to match and clear bubbles from the board.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubblesShooterTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/bubbles-shooter"
    },
    {
        id: 30,
        name: "Orange Ranch",
        category: "Bubble Shooter",
        description: "Orange Ranch is a farming simulation game where players grow crops, care for animals and build a thriving countryside business.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/OrangeRanchTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/orange-ranch"
    },
    // Jump & Run Games
    {
        id: 31,
        name: "Jungle Run",
        category: "Jump & Run",
        description: "Jungle Run is a game where players dash through forests, collecting coins while avoiding obstacles and wild animals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/JungleRunTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/jungle-run"
    },
    {
        id: 32,
        name: "Banana Run",
        category: "Jump & Run",
        description: "Banana Run is a fast-paced game where monkeys collect bananas while avoiding obstacles and dangerous predators.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BananaRun_Teaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/banana-run"
    },
    {
        id: 33,
        name: "Greedy Rabbit",
        category: "Jump & Run",
        description: "Greedy Rabbit is a puzzle game where players help a hungry rabbit collect carrots through obstacle-filled mazes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GreedyRabbitTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/greedy-rabbit"
    },
    {
        id: 34,
        name: "Basket & Ball",
        category: "Jump & Run",
        description: "Basket and Ball is a physics-based puzzle game where players shoot balls into moving baskets to score points.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BasketAndBall_Teaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/basket-and-ball"
    },
    {
        id: 35,
        name: "Yeti Sensation",
        category: "Jump & Run",
        description: "Yeti Sensation is a winter-themed game where players help a yeti slide across ice, avoiding obstacles and collecting gems.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/YetiSensationTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/yeti-sensation"
    },
    {
        id: 36,
        name: "Snowball World",
        category: "Jump & Run",
        description: "Snowball World is a winter game where players roll snowballs to collect items and overcome icy obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SnowballWorldTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/snowball-world"
    },
    // Sport Games
    {
        id: 38,
        name: "3D Basketball",
        category: "Sport",
        description: "3D Basketball is a sports game where players shoot hoops from different angles to score points and beat challenges.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dBasketballTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/3d-basketball"
    },
    {
        id: 39,
        name: "3D Darts",
        category: "Sport",
        description: "3D Darts is a precision aiming game where players throw darts at targets to score points and beat opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dDartsTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/3d-darts"
    },
    {
        id: 40,
        name: "Goalkeeper Champ",
        category: "Sport",
        description: "Goalkeeper Champ is a soccer game where players block incoming shots to become the ultimate goalkeeper hero.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GoalkeeperChampTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/goalkeeper-champ"
    },
    {
        id: 41,
        name: "3D Air Hockey",
        category: "Sport",
        description: "3D Air Hockey is a fast-paced game where players slide pucks to score goals against virtual opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dAirHockeyTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/3d-air-hockey"
    },
    {
        id: 42,
        name: "3D Bowling",
        category: "Sport",
        description: "3D Bowling is a realistic sports game where players roll balls to knock down pins and score strikes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dBowlingTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/3d-bowling"
    },
    // Arcade Games
    {
        id: 43,
        name: "Train Miner",
        category: "Arcade",
        description: "Train Miner is a strategy game where players collect resources by building train networks through challenging terrain.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TrainMinerTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/train-miner"
    },
    {
        id: 44,
        name: "Rise Up",
        category: "Arcade",
        description: "Rise Up is a challenging game where players protect a balloon from obstacles while ascending through increasingly difficult levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RiseUpTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/rise-up"
    },
    {
        id: 45,
        name: "Giant Rush",
        category: "Arcade",
        description: "Giant Rush is a running game where players grow taller to smash obstacles and collect coins while avoiding hazards.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GiantRushTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/giant-rush"
    },
    {
        id: 46,
        name: "Fruit Party",
        category: "Arcade",
        description: "Fruit Party is a colorful matching game where players connect similar fruits to create powerful combinations and score points.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FruitPartyTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/fruit-party"
    },
    {
        id: 47,
        name: "Speed Master",
        category: "Arcade",
        description: "Speed Master is a racing game where players test their reflexes by dodging obstacles at increasing speeds.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpeedMasterTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/speed-master"
    },
    {
        id: 48,
        name: "Alien Attack",
        category: "Arcade",
        description: "Alien Attack is a space shooting game where players defend Earth by blasting waves of invading aliens.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/AlienAttackTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/alien-attack"
    },
    // Cards Games
    {
        id: 49,
        name: "Crossover 21",
        category: "Cards",
        description: "Crossover 21 is a card game where players aim to reach 21 points without exceeding this value.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/Crossover21Teaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/crossover-21"
    },
    {
        id: 50,
        name: "Pirate Cards",
        category: "Cards",
        description: "Pirate Cards is a solitaire game where players match cards strategically to clear the board and collect treasure.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PirateCardsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/pirate-cards"
    },
    {
        id: 51,
        name: "Solitaire Legend",
        category: "Cards",
        description: "Solitaire Legend is a card game where players strategically move cards to clear the board and complete sequences.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SolitaireLegendTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/solitaire-legend"
    },
    {
        id: 52,
        name: "Mafia Poker",
        category: "Cards",
        description: "Mafia Poker is a card game where players compete against gangster opponents to win high-stakes poker rounds.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MafiaPokerTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/mafia-poker"
    },
    {
        id: 53,
        name: "Matching Card Heroes",
        category: "Cards",
        description: "Matching Card Heroes is a memory game where players match superhero cards to build powerful character collections.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MatchingCardHeroesTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/matching-card-heroes"
    },
    {
        id: 54,
        name: "Kitten Match",
        category: "Cards",
        description: "Kitten Match is a memory game where players find matching cat cards to complete adorable feline collections.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/KittenMatchTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/kitten-match"
    },
    // Match 3 Games
    {
        id: 55,
        name: "Food Rush",
        category: "Match 3",
        description: "Food Rush is a fast-paced game where players collect ingredients while avoiding obstacles to prepare delicious dishes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FoodRushTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/food-rush"
    },
    {
        id: 56,
        name: "Tile Journey",
        category: "Match 3",
        description: "Tile Journey is a puzzle game where players match and connect tiles to create paths through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TileJourneyNewTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/tile-journey"
    },
    {
        id: 57,
        name: "Diamond Rush 2",
        category: "Match 3",
        description: "Diamond Rush 2 is a puzzle game where players collect gems by solving challenges and avoiding dangerous traps.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DiamondRush2Teaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/diamond-rush-2"
    },
    {
        id: 58,
        name: "Garden Bloom",
        category: "Match 3",
        description: "Garden Bloom is a match-3 puzzle game where players connect colorful flowers to grow a beautiful garden.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GardenBloomTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        rating: 5,
        iframeUrl: "https://play.famobi.com/garden-bloom"
    },
    {
        id: 59,
        name: "Zoo Boom",
        category: "Match 3",
        description: "Zoo Boom is a match-3 puzzle game where players connect animal tiles to rescue zoo creatures and earn rewards.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ZooBoomTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        rating: 5,
        iframeUrl: "https://play.famobi.com/zoo-boom"
    },
    {
        id: 60,
        name: "Jewel Aquarium",
        category: "Match 3",
        description: "Jewel Aquarium is an underwater match-3 game where players connect colorful gems to free trapped sea creatures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/JewelAquariumTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        rating: 5,
        iframeUrl: "https://play.famobi.com/jewel-aquarium"
    },
    // Other Games
    {
        id: 61,
        name: "8 Ball Billiards Classic",
        category: "Other",
        description: "8-Ball Billiards Classic is a realistic pool game where players aim shots to pocket balls in strategic order.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/8BallBilliardsClassicTeaser.jpg",
        gameUrl: "",
        playerCount: 6000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/8-ball-billiards-classic"
    },
    {
        id: 62,
        name: "Table Tennis World Tour",
        category: "Other",
        description: "Table Tennis World Tour is a sports game where players compete in ping-pong matches against international opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TableTennis_WorldTour_Teaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        rating: 5,
        iframeUrl: "https://play.famobi.com/table-tennis-world-tour"
    },
    {
        id: 63,
        name: "Tower Crash 3D",
        category: "Other",
        description: "Tower Crash 3D is a physics game where players strategically demolish towers by removing blocks and causing collapses.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TowerCrash3dTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        rating: 5,
        iframeUrl: "https://play.famobi.com/tower-crash-3d"
    }
];

// 导出游戏数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gamesData;
}

// 获取所有游戏分类
const getCategories = () => {
    const categories = new Set(gamesData.map(game => game.category));
    return ['all', ...Array.from(categories)];
};

// 按分类过滤游戏
const filterGamesByCategory = (category) => {
    if (category === 'all') return gamesData;
    return gamesData.filter(game => game.category === category);
};

// 搜索游戏
const searchGames = (query) => {
    query = query.toLowerCase();
    return gamesData.filter(game => 
        game.name.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
};

// 验证图片URL
const validateImageUrl = async (url) => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (e) {
        return false;
    }
};

// 获取游戏图片URL
const getGameImageUrl = (game) => {
    if (!game.image || !validateImageUrl(game.image)) {
        return 'logo.svg'; // 使用本地默认图片
    }
    return game.image;
};

// 格式化日期
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

// 格式化玩家数量
const formatPlayerCount = (count) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
};

// 获取搜索建议
const getSearchSuggestions = (query) => {
    if (!query) return [];
    const lowercaseQuery = query.toLowerCase();
    return gamesData
        .filter(game => game.name.toLowerCase().includes(lowercaseQuery))
        .map(game => game.name)
        .slice(0, 5);
}; 