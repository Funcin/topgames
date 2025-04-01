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
        iframeUrl: "https://play.famobi.com/drift-dudes",
        isRecommended: true
    },
    {
        id: 2,
        name: "E-Scooter!",
        category: "Racing",
        description: "E-Scooter! is a fast-paced mobile game where players race electric scooters through city streets, collecting coins and avoiding obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EScooterTeaser.jpg",
        gameUrl: "https://html5games.com/Game/E-Scooter/c493535a-9c66-4d47-a3fa-6239aa0e0d52",
        playerCount: 2000,
        iframeUrl: "https://play.famobi.com/e-scooter",
        isRecommended: true
    },
    {
        id: 3,
        name: "Traffic Tom",
        category: "Racing",
        description: "Traffic Tom is a game where players manage traffic flow at busy intersections to prevent accidents and help vehicles reach their destinations safely.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TrafficTomTeaser.jpg",
        gameUrl: "https://html5games.com/Game/Traffic-Tom/8bf9689b-ca21-4291-af6a-f85c6bcf92f7",
        playerCount: 2000,
        iframeUrl: "https://play.famobi.com/traffic-tom",
        isRecommended: true
    },
    {
        id: 4,
        name: "Adventure Drivers",
        category: "Racing",
        description: "Adventure Drivers is a racing game where players conquer diverse terrains, collect power-ups and complete missions to unlock new vehicles and tracks.",
        imageUrl: "https://github.com/Funcin/app-images/blob/main/AdventureDriversTeaser%20(1).jpg?raw=true",
        gameUrl: "https://html5games.com/Game/Traffic-Tom/8bf9689b-ca21-4291-af6a-f85c6bcf92f7",
        playerCount: 2000,
        iframeUrl: "https://play.famobi.com/adventure-drivers",
        isRecommended: true
    },
    {
        id: 5,
        name: "High Hills",
        category: "Racing",
        description: "High Hills is a racing game where players drive across steep terrain, dodging obstacles and collecting coins.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HighHillsTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/high-hills",
        isRecommended: true
    },
    {
        id: 6,
        name: "Race Right",
        category: "Racing",
        description: "Race Right is a high-speed racing game where players compete on challenging tracks while mastering perfect timing and precision driving techniques.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RaceRightTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/race-right",
        isRecommended: true
    },
    {
        id: 64,
        name: "Moto Pool Party",
        category: "Racing",
        description: "Moto X3M Pool Party is a stunt racing game where riders perform tricks through water-themed obstacle courses.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MotoX3mPoolPartyTeaser.jpg",
        gameUrl: "",
        playerCount: 2800,
        iframeUrl: "https://play.famobi.com/moto-x3m-pool-party",
        isRecommended: true
    },
    {
        id: 65,
        name: "Drag Racing Club",
        category: "Racing",
        description: "Drag Racing Club is a racing game where players tune cars to win quarter-mile races against competitive opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DragRacingClubTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/drag-racing-club",
        isRecommended: true
    },
    {
        id: 66,
        name: "Biker Street",
        category: "Racing",
        description: "Biker Street is a racing game where players navigate motorcycles through traffic while collecting coins and avoiding crashes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BikerStreetTeaser.jpg",
        gameUrl: "",
        playerCount: 4700,
        iframeUrl: "https://play.famobi.com/biker-street",
        isRecommended: true
    },
    {
        id: 67,
        name: "Highway Extreme",
        category: "Racing",
        description: "Highway Rider Extreme is a high-speed motorcycle game where players weave through traffic while performing dangerous stunts.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HighwayRiderExtremeTeaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        iframeUrl: "https://play.famobi.com/highway-rider-extreme",
        isRecommended: true
    },
    {
        id: 68,
        name: "Moto Fury",
        category: "Racing",
        description: "Moto Fury is an action racing game where bikers perform stunts while avoiding obstacles and defeating rivals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MotoFuryTeaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        iframeUrl: "https://play.famobi.com/moto-fury",
        isRecommended: true
    },
    {
        id: 69,
        name: "Drift Cup Racing",
        category: "Racing",
        description: "Drift Cup Racing is a competitive driving game where players master controlled slides to win races and championships.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DriftCupRacingTeaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        iframeUrl: "https://play.famobi.com/drift-cup-racing",
        isRecommended: true
    },
    {
        id: 70,
        name: "Racing Monster",
        category: "Racing",
        description: "Racing Monster Trucks is a high-octane driving game where players control giant vehicles to crush obstacles and win races.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RacingMonsterTrucksTeaser.jpg",
        gameUrl: "",
        playerCount: 5600,
        iframeUrl: "https://play.famobi.com/racing-monster-trucks",
        isRecommended: true
    },
    {
        id: 71,
        name: "Racing Cars",
        category: "Racing",
        description: "Racing Cars is a high-speed driving game where players compete on tracks to win championships and unlock vehicles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RacingCarsTeaser.jpg",
        gameUrl: "",
        playerCount: 5900,
        iframeUrl: "https://play.famobi.com/racing-cars",
        isRecommended: true
    },
    {
        id: 72,
        name: "Truck Trials",
        category: "Racing",
        description: "Truck Trials is an off-road driving game where players navigate powerful trucks through extreme terrain and obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TruckTrialsTeaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        iframeUrl: "https://play.famobi.com/truck-trials",
        isRecommended: true
    },
    {
        id: 73,
        name: "Thug Racer",
        category: "Racing",
        description: "Thug Racer is a street racing game where players navigate urban courses while evading police and rival racers.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ThugRacerTeaser.jpg",
        gameUrl: "",
        playerCount: 5300,
        iframeUrl: "https://play.famobi.com/thug-racer",
        isRecommended: true
    },
    {
        id: 74,
        name: "Endless Truck",
        category: "Racing",
        description: "Endless Truck is a driving game where players navigate monster trucks through infinite challenging terrain and obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EndlessTruckTeaser.jpg",
        gameUrl: "",
        playerCount: 6800,
        iframeUrl: "https://play.famobi.com/endless-truck",
        isRecommended: true
    },
    {
        id: 75,
        name: "Rival Rush",
        category: "Racing",
        description: "Rival Rush is a competitive racing game where players outspeed opponents through challenging tracks to claim victory.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RivalRushTeaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        iframeUrl: "https://play.famobi.com/rival-rush",
        isRecommended: true
    },
    {
        id: 76,
        name: "Street Pursuit",
        category: "Racing",
        description: "Street Pursuit is a racing game where players outrun police while navigating through busy urban environments.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/StreetPursuit_Teaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/street-pursuit",
        isRecommended: true
    },
    {
        id: 77,
        name: "StreetRace Fury",
        category: "Racing",
        description: "StreetRace Fury is an intense racing game where players compete in illegal street races against skilled opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/StreetRaceFuryTeaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        iframeUrl: "https://play.famobi.com/streetrace-fury",
        isRecommended: true
    },
    {
        id: 78,
        name: "2Cars",
        category: "Racing",
        description: "2Cars is a split-control game where players manage two vehicles simultaneously to collect circles and avoid squares.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/2CarsTeaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        iframeUrl: "https://play.famobi.com/2cars",
        isRecommended: true
    },
    {
        id: 79,
        name: "Don't Crash",
        category: "Racing",
        description: "Don't Crash is a driving game where players navigate busy roads while avoiding collisions with other vehicles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DontCrashTeaser.jpg",
        gameUrl: "",
        playerCount: 6900,
        iframeUrl: "https://play.famobi.com/dont-crash",
        isRecommended: true
    },
    {
        id: 80,
        name: "Speed Maniac",
        category: "Racing",
        description: "Speed Maniac is a racing game where players dodge traffic at high speeds to beat time challenges.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpeedManiacTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/speed-maniac",
        isRecommended: true
    },
    {
        id: 81,
        name: "Turbotastic",
        category: "Racing",
        description: "Turbotastic is a high-speed racing game where players dodge obstacles and collect boosters through futuristic tracks.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TurbotasticTeaser.jpg",
        gameUrl: "",
        playerCount: 6100,
        iframeUrl: "https://play.famobi.com/turbotastic",
        isRecommended: true
    },
    {
        id: 82,
        name: "Burnin Rubber",
        category: "Racing",
        description: "Burnin Rubber is a racing game where players speed through tracks while avoiding obstacles and defeating opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BurninRubber_Teaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        iframeUrl: "https://play.famobi.com/burnin-rubber",
        isRecommended: true
    },
    {
        id: 83,
        name: "Speed Club Nitro",
        category: "Racing",
        description: "Sprint Club Nitro is a fast-paced racing game where players use nitro boosts to outspeed rivals and win championships.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SprintClubNitroTeaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        iframeUrl: "https://play.famobi.com/sprint-club-nitro",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/fashion-battle",
        isRecommended: true
    },
    {
        id: 8,
        name: "Love Tester",
        category: "Girls",
        description: "Love Tester is a fun social game where players answer questions to determine compatibility scores and romantic potential between different individuals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/LoveTesterNewTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/love-tester",
        isRecommended: true
    },
    {
        id: 9,
        name: "Save the Princess",
        category: "Girls",
        description: "Save the Princess is a classic adventure game where players overcome obstacles and defeat enemies to rescue a captured princess from a villain's castle.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SaveThePrincessTeaser.jpg",
        gameUrl: "",
        playerCount: 2500,
        iframeUrl: "https://play.famobi.com/save-the-princess",
        isRecommended: true
    },
    {
        id: 10,
        name: "Pop It! Duel",
        category: "Girls",
        description: "Pop It! Duel is a colorful puzzle game where players compete to pop bubbles and create strategic combinations to outscore opponents and unlock new levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PopItDuelTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/pop-it-duel",
        isRecommended: true
    },
    {
        id: 11,
        name: "Kawaii Chibi Creator",
        category: "Girls",
        description: "Kawaii Chibi Creator is a cute character design game where players customize adorable chibi avatars with colorful outfits, accessories and expressions.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/KawaiiChibiCreator_Teaser.jpg",
        gameUrl: "",
        playerCount: 6600,
        iframeUrl: "https://play.famobi.com/kawaii-chibi-creator",
        isRecommended: true
    },
    {
        id: 12,
        name: "My Fairytale Deer",
        category: "Girls",
        description: "My Fairytale Deer is a dress-up game where players customize magical deer with enchanting accessories and fantastical outfits.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MyFairytaleDeerTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/my-fairytale-deer",
        isRecommended: true
    },
    {
        id: 84,
        name: "Pop It! 3D",
        category: "Girls",
        description: "Pop It! 3D is a satisfying fidget toy simulator where players push colorful bubbles in various patterns.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PopIt3dTeaser.jpg",
        gameUrl: "",
        playerCount: 3800,
        iframeUrl: "https://play.famobi.com/pop-it-3d",
        isRecommended: true
    },
    {
        id: 85,
        name: "Emergency Surgery",
        category: "Girls",
        description: "Emergency Surgery is a medical simulation game where players perform life-saving surgical procedures on emergency patients.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/EmergencySurgeryTeaser.jpg",
        gameUrl: "",
        playerCount: 2800,
        iframeUrl: "https://play.famobi.com/emergency-surgery",
        isRecommended: true
    },
    {
        id: 86,
        name: "Baby Lily Care",
        category: "Girls",
        description: "Baby Lily Care is a nurturing game where players look after an infant by feeding, bathing and playing.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BabyLilyCare_Teaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        iframeUrl: "https://play.famobi.com/baby-lily-care",
        isRecommended: true
    },
    {
        id: 87,
        name: "Happy Panda",
        category: "Girls",
        description: "Happy Panda is a casual game where players care for cute pandas by feeding them and solving puzzles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HappyPandaTeaser.jpg",
        gameUrl: "",
        playerCount: 4300,
        iframeUrl: "https://play.famobi.com/happy-panda",
        isRecommended: true
    },
    {
        id: 88,
        name: "Happy Koala",
        category: "Girls",
        description: "Happy Koala is a relaxing game where players care for adorable koalas by feeding them eucalyptus leaves.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HappyKoala_Teaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        iframeUrl: "https://play.famobi.com/happy-koala",
        isRecommended: true
    },
    {
        id: 89,
        name: "Sailor Girls Avatar Maker",
        category: "Girls",
        description: "Sailor Girls Avatar Maker is a dress-up game where players create custom magical sailor-themed character designs.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SailorGirlsAvatarMaker_Teaser.jpg",
        gameUrl: "",
        playerCount: 6800,
        iframeUrl: "https://play.famobi.com/sailor-girls-avatar-maker",
        isRecommended: true
    },
    {
        id: 90,
        name: "3D Anime Fantasy",
        category: "Girls",
        description: "3D Anime Fantasy is a character customization game where players create and dress anime-style heroes for adventures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3d_AnimeFantasyTeaser.jpg",
        gameUrl: "",
        playerCount: 5900,
        iframeUrl: "https://play.famobi.com/3d-anime-fantasy",
        isRecommended: true
    },
    {
        id: 91,
        name: "Cute Unicorn Care",
        category: "Girls",
        description: "Cute Unicorn Care is a nurturing game where players feed, groom and play with magical rainbow unicorns.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CuteUnicornCareTeaser.jpg",
        gameUrl: "",
        playerCount: 5500,
        iframeUrl: "https://play.famobi.com/cute-unicorn-care",
        isRecommended: true
    },
    {
        id: 92,
        name: "My Fairytale Tiger",
        category: "Girls",
        description: "My Fairytale Tiger is a dress-up game where players customize magical tigers with colorful accessories and outfits.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MyFairytaleTigerTeaser.jpg",
        gameUrl: "",
        playerCount: 3900,
        iframeUrl: "https://play.famobi.com/my-fairytale-tiger",
        isRecommended: true
    },
    {
        id: 93,
        name: "Happy Lemur",
        category: "Girls",
        description: "Happy Lemur is a cheerful game where players care for and play with adorable lemur characters.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/HappyLemur_Teaser.jpg",
        gameUrl: "",
        playerCount: 2900,
        iframeUrl: "https://play.famobi.com/happy-lemur",
        isRecommended: true
    },
    {
        id: 94,
        name: "Pizza Realife Cooking",
        category: "Girls",
        description: "Pizza Realife Cooking is a culinary simulation game where players create pizzas with various toppings and baking techniques.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PizzaRealifeCookingTeaser.jpg",
        gameUrl: "",
        playerCount: 2700,
        iframeUrl: "https://play.famobi.com/pizza-realife-cooking",
        isRecommended: true
    },
    {
        id: 95,
        name: "Nina - Detective",
        category: "Girls",
        description: "Nina Detective is a mystery game where players solve cases by finding clues and interrogating suspects.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/NinaDetectiveTeaser.jpg",
        gameUrl: "",
        playerCount: 3300,
        iframeUrl: "https://play.famobi.com/nina-detective",
        isRecommended: true
    },
    {
        id: 96,
        name: "Tina - Detective",
        category: "Girls",
        description: "Tina Detective is a mystery game where players search for clues to solve intriguing criminal cases.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TinaDetectiveTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/tina-detective",
        isRecommended: true
    },
    {
        id: 97,
        name: "Cute Puppy Care",
        category: "Girls",
        description: "Cute Puppy Care is a nurturing game where players feed, bathe and play with adorable puppies.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CutePuppyCareTeaser.jpg",
        gameUrl: "",
        playerCount: 5900,
        iframeUrl: "https://play.famobi.com/cute-puppy-care",
        isRecommended: true
    },
    {
        id: 98,
        name: "Cute Kitty Care",
        category: "Girls",
        description: "Cute Kitty Care is a pet simulation game where players feed, groom and play with adorable kittens.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CuteKittyCareTeaser.jpg",
        gameUrl: "",
        playerCount: 5700,
        iframeUrl: "https://play.famobi.com/cute-kitty-care",
        isRecommended: true
    },
    {
        id: 99,
        name: "Tina - Pop Star",
        category: "Girls",
        description: "Tina Pop Star is a music game where players help Tina become famous through performances and fashion choices.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TinaPopStarTeaser.jpg",
        gameUrl: "",
        playerCount: 4700,
        iframeUrl: "https://play.famobi.com/tina-pop-star",
        isRecommended: true
    },
    {
        id: 100,
        name: "Nina - Pop Star",
        category: "Girls",
        description: "Nina Pop Star is a music-themed game where players help Nina achieve fame through performances and fashion choices.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/NinaPopStarTeaser.jpg",
        gameUrl: "",
        playerCount: 4900,
        iframeUrl: "https://play.famobi.com/nina-pop-star",
        isRecommended: true
    },
    {
        id: 101,
        name: "Love Tester",
        category: "Girls",
        description: "Love Tester is a fun interactive game where players answer questions to discover romantic compatibility between different people.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/LoveTester_Teaser.jpg",
        gameUrl: "",
        playerCount: 7100,
        iframeUrl: "https://play.famobi.com/lovetester",
        isRecommended: true
    },
    {
        id: 102,
        name: "What Famous Cat Are You",
        category: "Girls",
        description: "What Famous Cat Are You is a personality quiz that matches players with famous feline characters.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/WhatFamousCatAreYouTeaser.jpg",
        gameUrl: "",
        playerCount: 7300,
        iframeUrl: "https://play.famobi.com/what-famous-cat-are-you",
        isRecommended: true
    },
    {
        id: 103,
        name: "Save the Date",
        category: "Girls",
        description: "Save the Date is a wedding planning game where players organize perfect ceremonies by making strategic choices.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SaveTheDateTeaser.jpg",
        gameUrl: "",
        playerCount: 8800,
        iframeUrl: "https://play.famobi.com/save-the-date",
        isRecommended: true
    },
    {
        id: 104,
        name: "What Does Your Boyfriend Look Like?",
        category: "Girls",
        description: "What Does Your BF Look Like is a personality quiz that visualizes players' ideal romantic partners based on preferences.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/WhatDoesYourBfLookLikeTeaser.jpg",
        gameUrl: "",
        playerCount: 9100,
        iframeUrl: "https://play.famobi.com/what-does-your-bf-look-like",
        isRecommended: true
    },
    {
        id: 105,
        name: "Pet Roulette",
        category: "Girls",
        description: "Pet Roulette is a chance-based game where players spin to receive random virtual pets with unique characteristics.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PetRouletteTeaser.jpg",
        gameUrl: "",
        playerCount: 7900,
        iframeUrl: "https://play.famobi.com/pet-roulette",
        isRecommended: true
    },
    {
        id: 106,
        name: "Amazing Me",
        category: "Girls",
        description: "Amazing Me is a personality quiz game where players discover unique facts about themselves through interactive questions.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/AmazingMeTeaser.jpg",
        gameUrl: "",
        playerCount: 9900,
        iframeUrl: "https://play.famobi.com/amazing-me",
        isRecommended: true
    },
    {
        id: 107,
        name: "Monster Pet",
        category: "Girls",
        description: "Monster Pet is a virtual pet game where players raise and customize adorable monster creatures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MonsterPetTeaser.jpg",
        gameUrl: "",
        playerCount: 6900,
        iframeUrl: "https://play.famobi.com/monster-pet",
        isRecommended: true
    },
    {
        id: 108,
        name: "Match The Animal",
        category: "Girls",
        description: "Match the Animal is a memory game where players pair matching animal cards to complete wildlife collections.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MatchTheAnimalTeaser.jpg",
        gameUrl: "",
        playerCount: 6900,
        iframeUrl: "https://play.famobi.com/match-the-animal",
        isRecommended: true
    },
    {
        id: 109,
        name: "Kids Color Book",
        category: "Girls",
        description: "Kids Color Book is a creative game where children fill outlined pictures with vibrant colors of their choice.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/KidsColorBookTeaser.jpg",
        gameUrl: "",
        playerCount: 6500,
        iframeUrl: "https://play.famobi.com/kids-color-book",
        isRecommended: true
    },
    {
        id: 110,
        name: "Cat Fashion Designer",
        category: "Girls",
        description: "Cat Fashion Designer is a creative game where players design stylish outfits and accessories for fashionable feline characters.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CatFashionDesignerTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/cat-fashion-designer",
        isRecommended: true
    },
    {
        id: 111,
        name: "Secret BFF",
        category: "Girls",
        description: "Secret BFF is a friendship game where players answer questions to discover their ideal best friend match.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SecretBFFTeaser.jpg",
        gameUrl: "",
        playerCount: 9300,
        iframeUrl: "https://play.famobi.com/secret-bff",
        isRecommended: true
    },
    {
        id: 112,
        name: "Magic Jewels",
        category: "Girls",
        description: "Magic Jewels is a match-3 puzzle game where players connect sparkling gems to create powerful magical combinations.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MagicJewelsTeaser.jpg",
        gameUrl: "",
        playerCount: 7100,
        iframeUrl: "https://play.famobi.com/magic-jewels",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/emoji-fun",
        isRecommended: true
    },
    {
        id: 14,
        name: "Go Escape",
        category: "Puzzle",
        description: "Go Escape is a puzzle game where players navigate mazes, avoid traps and find exits to advance through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GoEscapeTeaser.jpg",
        gameUrl: "",
        playerCount: 2000,
        iframeUrl: "https://play.famobi.com/go-escape",
        isRecommended: true
    },
    {
        id: 15,
        name: "Spot the Cat",
        category: "Puzzle",
        description: "Spot the Cat is a hidden object game where players search detailed scenes to find cleverly disguised cats within time limits.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpotTheCatTeaser.jpg",
        gameUrl: "",
        playerCount: 2500,
        iframeUrl: "https://play.famobi.com/spot-the-cat",
        isRecommended: true
    },
    {
        id: 16,
        name: "Color Water Sort 3D",
        category: "Puzzle",
        description: "Color Water Sort 3D is a puzzle game where players sort colored liquids between tubes to create matching sets.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ColorWaterSort3dTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/color-water-sort-3d",
        isRecommended: true
    },
    {
        id: 17,
        name: "Thief Puzzle",
        category: "Puzzle",
        description: "Thief Puzzle is a brain-teasing game where players solve puzzles to help a thief navigate security systems and steal valuable treasures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ThiefPuzzleTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/thief-puzzle",
        isRecommended: true
    },
    {
        id: 18,
        name: "Parking Jam",
        category: "Puzzle",
        description: "Parking Jam is a puzzle game where players slide cars and trucks to clear a path and escape gridlocked parking lots.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ParkingJamTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/parking-jam",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/guess-their-answer",
        isRecommended: true
    },
    {
        id: 20,
        name: "7 Words",
        category: "Quiz",
        description: "7 Words is a word puzzle game where players form complete sentences using only seven carefully selected words.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/7WordsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/7-words",
        isRecommended: true
    },
    {
        id: 21,
        name: "Animal Quiz",
        category: "Quiz",
        description: "Animal Quiz is a trivia game where players answer questions about wild animals to test their knowledge of wildlife.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/AnimalQuizChristmasTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/animal-quiz",
        isRecommended: true
    },
    {
        id: 22,
        name: "Fluffy Egg",
        category: "Quiz",
        description: "Fluffy Egg is a puzzle game where players guide cute eggs through obstacles to reach their nests.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FluffyEggTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/fluffy-egg",
        isRecommended: true
    },
    {
        id: 23,
        name: "Geo Quiz",
        category: "Quiz",
        description: "Geo Quiz - Europe is an educational game where players test their knowledge of European geography, landmarks and capitals.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GeoQuizEuropeTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/geo-quiz-europe",
        isRecommended: true
    },
    {
        id: 24,
        name: "Quick Quiz",
        category: "Quiz",
        description: "Quick Quiz is a fast-paced trivia game where players answer general knowledge questions against the clock.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/QuickQuizTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/quick-quiz",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/om-nom-bubbles",
        isRecommended: true
    },
    {
        id: 26,
        name: "Bubble Woods",
        category: "Bubble Shooter",
        description: "Bubble Woods is a puzzle game where players match and pop colorful bubbles to help forest creatures gather magical items.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubbleWoodsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/bubble-woods",
        isRecommended: true
    },
    {
        id: 27,
        name: "Candy Bubble",
        category: "Bubble Shooter",
        description: "Candy Bubble is a colorful puzzle game where players match and pop sweet-themed bubbles to progress through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/CandyBubble_Teaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/candy-bubble",
        isRecommended: true
    },
    {
        id: 28,
        name: "Bubble Spirit",
        category: "Bubble Shooter",
        description: "Bubble Spirit is a puzzle game where players match colorful bubbles to free trapped spirits and advance through magical levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubbleSpirit_Teaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/bubble-spirit",
        isRecommended: true
    },
    {
        id: 29,
        name: "Bubbles Shooter",
        category: "Bubble Shooter",
        description: "Bubbles Shooter is a classic arcade game where players aim and fire colored bubbles to match and clear bubbles from the board.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BubblesShooterTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/bubbles-shooter",
        isRecommended: true
    },
    {
        id: 30,
        name: "Orange Ranch",
        category: "Bubble Shooter",
        description: "Orange Ranch is a farming simulation game where players grow crops, care for animals and build a thriving countryside business.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/OrangeRanchTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/orange-ranch",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/jungle-run",
        isRecommended: true
    },
    {
        id: 32,
        name: "Banana Run",
        category: "Jump & Run",
        description: "Banana Run is a fast-paced game where monkeys collect bananas while avoiding obstacles and dangerous predators.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BananaRun_Teaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/banana-run",
        isRecommended: true
    },
    {
        id: 33,
        name: "Greedy Rabbit",
        category: "Jump & Run",
        description: "Greedy Rabbit is a puzzle game where players help a hungry rabbit collect carrots through obstacle-filled mazes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GreedyRabbitTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/greedy-rabbit",
        isRecommended: true
    },
    {
        id: 34,
        name: "Basket & Ball",
        category: "Jump & Run",
        description: "Basket and Ball is a physics-based puzzle game where players shoot balls into moving baskets to score points.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/BasketAndBall_Teaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/basket-and-ball",
        isRecommended: true
    },
    {
        id: 35,
        name: "Yeti Sensation",
        category: "Jump & Run",
        description: "Yeti Sensation is a winter-themed game where players help a yeti slide across ice, avoiding obstacles and collecting gems.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/YetiSensationTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/yeti-sensation",
        isRecommended: true
    },
    {
        id: 36,
        name: "Snowball World",
        category: "Jump & Run",
        description: "Snowball World is a winter game where players roll snowballs to collect items and overcome icy obstacles.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SnowballWorldTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/snowball-world",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/3d-basketball",
        isRecommended: true
    },
    {
        id: 39,
        name: "3D Darts",
        category: "Sport",
        description: "3D Darts is a precision aiming game where players throw darts at targets to score points and beat opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dDartsTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/3d-darts",
        isRecommended: true
    },
    {
        id: 40,
        name: "Goalkeeper Champ",
        category: "Sport",
        description: "Goalkeeper Champ is a soccer game where players block incoming shots to become the ultimate goalkeeper hero.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GoalkeeperChampTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/goalkeeper-champ",
        isRecommended: true
    },
    {
        id: 41,
        name: "3D Air Hockey",
        category: "Sport",
        description: "3D Air Hockey is a fast-paced game where players slide pucks to score goals against virtual opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dAirHockeyTeaser.jpg",
        gameUrl: "",
        playerCount: 6300,
        iframeUrl: "https://play.famobi.com/3d-air-hockey",
        isRecommended: true
    },
    {
        id: 42,
        name: "3D Bowling",
        category: "Sport",
        description: "3D Bowling is a realistic sports game where players roll balls to knock down pins and score strikes.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/3dBowlingTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/3d-bowling",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/train-miner",
        isRecommended: true
    },
    {
        id: 44,
        name: "Rise Up",
        category: "Arcade",
        description: "Rise Up is a challenging game where players protect a balloon from obstacles while ascending through increasingly difficult levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/RiseUpTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/rise-up",
        isRecommended: true
    },
    {
        id: 45,
        name: "Giant Rush",
        category: "Arcade",
        description: "Giant Rush is a running game where players grow taller to smash obstacles and collect coins while avoiding hazards.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GiantRushTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/giant-rush",
        isRecommended: true
    },
    {
        id: 46,
        name: "Fruit Party",
        category: "Arcade",
        description: "Fruit Party is a colorful matching game where players connect similar fruits to create powerful combinations and score points.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/FruitPartyTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/fruit-party",
        isRecommended: true
    },
    {
        id: 47,
        name: "Speed Master",
        category: "Arcade",
        description: "Speed Master is a racing game where players test their reflexes by dodging obstacles at increasing speeds.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SpeedMasterTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        iframeUrl: "https://play.famobi.com/speed-master",
        isRecommended: true
    },
    {
        id: 48,
        name: "Alien Attack",
        category: "Arcade",
        description: "Alien Attack is a space shooting game where players defend Earth by blasting waves of invading aliens.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/AlienAttackTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/alien-attack",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/crossover-21",
        isRecommended: true
    },
    {
        id: 50,
        name: "Pirate Cards",
        category: "Cards",
        description: "Pirate Cards is a solitaire game where players match cards strategically to clear the board and collect treasure.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/PirateCardsTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/pirate-cards",
        isRecommended: true
    },
    {
        id: 51,
        name: "Solitaire Legend",
        category: "Cards",
        description: "Solitaire Legend is a card game where players strategically move cards to clear the board and complete sequences.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/SolitaireLegendTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/solitaire-legend",
        isRecommended: true
    },
    {
        id: 52,
        name: "Mafia Poker",
        category: "Cards",
        description: "Mafia Poker is a card game where players compete against gangster opponents to win high-stakes poker rounds.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MafiaPokerTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/mafia-poker",
        isRecommended: true
    },
    {
        id: 53,
        name: "Matching Card Heroes",
        category: "Cards",
        description: "Matching Card Heroes is a memory game where players match superhero cards to build powerful character collections.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/MatchingCardHeroesTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        iframeUrl: "https://play.famobi.com/matching-card-heroes",
        isRecommended: true
    },
    {
        id: 54,
        name: "Kitten Match",
        category: "Cards",
        description: "Kitten Match is a memory game where players find matching cat cards to complete adorable feline collections.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/KittenMatchTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/kitten-match",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/food-rush",
        isRecommended: true
    },
    {
        id: 56,
        name: "Tile Journey",
        category: "Match 3",
        description: "Tile Journey is a puzzle game where players match and connect tiles to create paths through challenging levels.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TileJourneyNewTeaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/tile-journey",
        isRecommended: true
    },
    {
        id: 57,
        name: "Diamond Rush 2",
        category: "Match 3",
        description: "Diamond Rush 2 is a puzzle game where players collect gems by solving challenges and avoiding dangerous traps.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/DiamondRush2Teaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/diamond-rush-2",
        isRecommended: true
    },
    {
        id: 58,
        name: "Garden Bloom",
        category: "Match 3",
        description: "Garden Bloom is a match-3 puzzle game where players connect colorful flowers to grow a beautiful garden.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/GardenBloomTeaser.jpg",
        gameUrl: "",
        playerCount: 1800,
        iframeUrl: "https://play.famobi.com/garden-bloom",
        isRecommended: true
    },
    {
        id: 59,
        name: "Zoo Boom",
        category: "Match 3",
        description: "Zoo Boom is a match-3 puzzle game where players connect animal tiles to rescue zoo creatures and earn rewards.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/ZooBoomTeaser.jpg",
        gameUrl: "",
        playerCount: 2300,
        iframeUrl: "https://play.famobi.com/zoo-boom",
        isRecommended: true
    },
    {
        id: 60,
        name: "Jewel Aquarium",
        category: "Match 3",
        description: "Jewel Aquarium is an underwater match-3 game where players connect colorful gems to free trapped sea creatures.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/JewelAquariumTeaser.jpg",
        gameUrl: "",
        playerCount: 3200,
        iframeUrl: "https://play.famobi.com/jewel-aquarium",
        isRecommended: true
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
        iframeUrl: "https://play.famobi.com/8-ball-billiards-classic",
        isRecommended: true
    },
    {
        id: 62,
        name: "Table Tennis World Tour",
        category: "Other",
        description: "Table Tennis World Tour is a sports game where players compete in ping-pong matches against international opponents.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TableTennis_WorldTour_Teaser.jpg",
        gameUrl: "",
        playerCount: 3000,
        iframeUrl: "https://play.famobi.com/table-tennis-world-tour",
        isRecommended: true
    },
    {
        id: 63,
        name: "Tower Crash 3D",
        category: "Other",
        description: "Tower Crash 3D is a physics game where players strategically demolish towers by removing blocks and causing collapses.",
        imageUrl: "https://raw.githubusercontent.com/Funcin/app-images/main/TowerCrash3dTeaser.jpg",
        gameUrl: "",
        playerCount: 3500,
        iframeUrl: "https://play.famobi.com/tower-crash-3d",
        isRecommended: true
    }
];

// Export games data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gamesData;
}

// Get all game categories
const getCategories = () => {
    const categories = new Set(gamesData.map(game => game.category));
    return ['all', ...Array.from(categories)];
};

// Filter games by category
const filterGamesByCategory = (category) => {
    if (category === 'all') return gamesData;
    return gamesData.filter(game => game.category === category);
};

// Search games
const searchGames = (query) => {
    query = query.toLowerCase();
    return gamesData.filter(game => 
        game.name.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
};

// Validate image URL
const validateImageUrl = async (url) => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (e) {
        return false;
    }
};

// Get game image URL
const getGameImageUrl = (game) => {
    if (!game.image || !validateImageUrl(game.image)) {
        return 'logo.svg'; // Use local default image
    }
    return game.image;
};

// Format date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

// Format player count
const formatPlayerCount = (count) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
};

// Get search suggestions
const getSearchSuggestions = (query) => {
    if (!query) return [];
    const lowercaseQuery = query.toLowerCase();
    return gamesData
        .filter(game => game.name.toLowerCase().includes(lowercaseQuery))
        .map(game => game.name)
        .slice(0, 5);
}; 