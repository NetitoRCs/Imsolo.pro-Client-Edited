(function() {
    "use strict";
    if (
        typeof WebSocket === "undefined" ||
        typeof DataView === "undefined" ||
        typeof ArrayBuffer === "undefined" ||
        typeof Uint8Array === "undefined"
    ) {
        alert(
            "Your browser does not support required features, please update your browser or get a new one."
        );
        window.stop();
    }
    let keychange = "";
    window.imSolo = {
        feed: !1,
        quadSplit: !1,
        tripleSplit: !1,
        doubleSplit: !1,
        doubleSplitBot: !1,
        quadSplitBot: !1,
        doubleTick: 0,
        tripleTick: 0,
        quadTick: 0,
        quadTickBot: 0,
        doubleTickBot: 0,
    };
    const skincolor = {
		Abductor: "#7e5147",
        AboveClouds: "#7d6b91",
        Acorn: "#454d24",
        Ada: "#653b26",
        Aer: "#5a635f",
        AirBag: "#758648",
        Alan: "#763227",
        Alien: "#5a946b",
        AlienArtist: "#8654b7",
        AlienKid: "#548437",
        AlienKidlvl3: "#5e773b",
        AlienTree: "#5181a3",
        ApeTalisman: "#7e4757",
        "ApeTalisman(Level3)": "#6f5360",
        ApocalypseRider: "#7f4d3d",
        Apple: "#5daa19",
        AppleFace: "#70c031",
        Aqua: "#478090",
        Aquarius: "#4483a4",
        Araneaphyx: "#5e4119",
        Archer: "#686521",
        ArcheryKing: "#6c787d",
        Ares: "#633f1d",
        Aries: "#508384",
        ArkRaider: "#8d8d95",
        Army: "#415632",
        AstralDeer: "#65718b",
        Astronaut: "#706db4",
        Awkward: "#b27f37",
        BabyOctopus: "#4d87a0",
        "BabyOctopus(Level3)": "#4e6f88",
        Backswing: "#426246",
        BadBoy: "#4d4848",
        BadCat: "#644063",
        BadClover: "#3a5124",
        BadPigeon: "#65767e",
        BadSanta: "#7a757d",
        Badger: "#757675",
        Banana: "#3d9b33",
        Banshee: "#4f5764",
        Barbarian: "#8b7744",
        "Barbarian(Level3)": "#a09d73",
        Baseball: "#cbbfb4",
        Basilisk: "#4b535f",
        Basket: "#d88a16",
        Basketball: "#bc771d",
        BassBomb: "#656b92",
        Bat: "#6b148b",
        BatBall: "#a54d77",
        Bear: "#002c6c",
        BeatBox: "#9c537e",
        Beetoothven: "#8f4841",
        Behemoth: "#4c6045",
        Berserker: "#63413a",
        BestFriends: "#565b4d",
        Bewitched: "#4c6075",
        BigBanjo: "#94655d",
        BigEyes: "#7b5e64",
        Biker: "#47493e",
        Bionic: "#686380",
        BionicRam: "#4a667e",
        BirdMask: "#6d4841",
        Birdie: "#6d9452",
        BirthdayBlob: "#619e1c",
        BirthdayCia: "#6a637d",
        BirthdayDoge: "#b39b5b",
        BirthdaySanik: "#5557aa",
        BirthdaySir: "#a17a6c",
        BirthdayWojak: "#779c6b",
        Birthosaur: "#6d4d55",
        Bite: "#955138",
        Bitter: "#bd100f",
        BlackHole: "#175aa2",
        BlackMagicBolt: "#000000",
        BlackMagicGem: "#000000",
        Blob: "#866b8b",
        BlobbyBoy: "#6b8029",
        BlueBird: "#8a928e",
        BlueSkull: "#546b8f",
        BlueSwirl: "#48327c",
        Blueberry: "#8396ca",
        Boar: "#a37390",
        BoltSamurai: "#7a3a6c",
        Bomb: "#af1202",
        Boot: "#59487d",
        BootLegger: "#6e4441",
        Bowling: "#44309a",
        BoyKiss: "#9a6c6c",
        Brain: "#aea7c0",
        BraveHeartLion: "#9c5f39",
        Bread: "#8f9fb9",
        Breakfast: "#413d43",
        BrightHeartRacoon: "#7267a2",
        BroFist: "#ce7e50",
        BruiserGoat: "#55606b",
        BubbleFish: "#1d9aad",
        "BubbleFish(Level3)": "#38974d",
        Bubblesaurus: "#999f87",
        Bug: "#731919",
        BullKing: "#620202",
        BullSkull: "#8a372a",
        BulletMan: "#875f48",
        Bullseye: "#605a5d",
        Bunny: "#9d9092",
        BurgerFace: "#6a7b64",
        BurlyMan: "#6c5f57",
        Burner: "#9d5744",
        Cactus: "#4d5e13",
        CactusFlower: "#32546c",
        Calaca: "#4d3640",
        Calavera: "#757563",
        CanMan: "#5d5a50",
        Cancer: "#904b1a",
        CandleLight: "#7e6b44",
        Candy: "#c99da2",
        CandyGenius: "#8f6544",
        CandyTroll: "#997c29",
        CannonBall: "#4f6347",
        Cap_nJoe: "#63535b",
        Capricorn: "#515475",
        CaptainSkull: "#5d3e36",
        CaribbeanCorsair: "#48422d",
        Carp: "#5e6a6b",
        Carrot: "#6b441b",
        Cat: "#5f304a",
        CatBurglar: "#77703b",
        CatCauldron: "#603a1f",
        CavePainting: "#b78b54",
        CaveTroll: "#2e7e6f",
        CelebrationHat: "#4b416a",
        Champion: "#49453f",
        Chicken: "#f03005",
        ChickenLeg: "#4b8a6b",
        Chihuahua: "#3a5c76",
        Chillpanze: "#5a4650",
        ChinaDragon: "#7a6e68",
        ChipCookie: "#775636",
        ChirpyRaptor: "#3f6d5c",
        ChocoEgg: "#5a6e6f",
        ChocoHeart: "#75735d",
        ChristmasPudding: "#486086",
        ChronoRanger: "#525a2f",
        Chupacabra: "#8c5a89",
        Circle: "#783285",
        Cleopatra: "#826158",
        Clever: "#d1a051",
        Cloud: "#a1aebc",
        CloudPrism: "#556f7f",
        CocoNuts: "#5e6265",
        CogAttack: "#664278",
        Cogs: "#73400b",
        Coil: "#a7efff",
        Colossus: "#69584a",
        Cookie: "#ba7334",
        CookieMouse: "#a87e7d",
        Cool: "#cb9c3b",
        CoolAgent: "#643f3b",
        CoolBunny: "#953c57",
        CoolDuck: "#997e7b",
        "CoolDuck(Level3)": "#997e7d",
        CoolGuy: "#70656a",
        CoolLion: "#5d3a2d",
        CosmicHorse: "#7e68a3",
        CosmoPirate: "#53493d",
        Cougar: "#7c0001",
        Coyote: "#654217",
        CozyHeartPenguin: "#aeb6c2",
        Craycray: "#7e3760",
        Crazy: "#d1b4a8",
        CrazyBall: "#5a667d",
        CrazyBird: "#55635e",
        CrazyBolt: "#9e6043",
        CrazyBrain: "#b474a0",
        CrazyDog: "#b9822b",
        "CrazyDog(Level3)": "#b08230",
        CrazyEye: "#b6abca",
        CrazyRudolph: "#ba6e1f",
        CrazySombrero: "#89571f",
        Croc: "#7eb67e",
        Crocodile: "#004f0f",
        Crocodino: "#3d7272",
        CryCloud: "#b469ab",
        Cthulhu: "#3e6954",
        Cupcake: "#548b8e",
        Cupid: "#894e8e",
        Cuppy: "#736c7a",
        CursedBlade: "#332380",
        CursedSamurai: "#704d10",
        CyberAgent: "#535439",
        CyberCommando: "#6c4d59",
        CyberDemon: "#633535",
        CyberGuard: "#57451e",
        CyberKid: "#1b6281",
        CyberMonk: "#615c37",
        CyberPsychic: "#5d508b",
        CyberPunk: "#624a80",
        CyberScarab: "#6c2327",
        Cybernaut: "#884a67",
        Daisy: "#6e4e35",
        DapperDog: "#506277",
        DarkMatter: "#6653cd",
        DarkSorceress: "#484e71",
        DarkWings: "#6f2432",
        Dasher: "#516952",
        Dazzled: "#699d31",
        DeadlyPiranha: "#743c61",
        DeathMouse: "#dbb57d",
        DeathlyMine: "#6c4f76",
        DefiledScarecrow: "#446c4f",
        Delighted: "#cd9b2f",
        DemonicHelmet: "#7d6d8c",
        DesertFox: "#506a5a",
        Destroyer: "#6e4438",
        Detective: "#6f5746",
        Devil: "#581234",
        "Devil(Level3)": "#611a34",
        Devilish: "#6d5062",
        Devourer: "#947e5a",
        Diamonds: "#b5751b",
        DireWolf: "#61636f",
        Diva: "#86293d",
        Diver: "#5d8bb3",
        DivinePearl: "#7a7d7f",
        Dog: "#d4711d",
        Donuts: "#79451e",
		DrCosmos: "#210225",
        DrStatic: "#6c3341",
        Draco: "#521b12",
        Dracool: "#6d6177",
        DragonGriffin: "#944848",
        DragonHaze: "#5c820a",
        DragonHydra: "#5a8551",
        DragonRazor: "#a95a0d",
        DragonTwin: "#586e9a",
        DragonViper: "#516363",
        Droid: "#5d6b5f",
        DryFace: "#998769",
        DuckTarget: "#60798c",
        DuelMaster: "#502a3f",
        Dumboon: "#7a5456",
        Dumpling: "#5c9083",
        DustBrain: "#606a3f",
        Dynamite: "#803e55",
        DynamiteGuy: "#656353",
        ELF: "#a15f55",
        EagerAlien: "#685479",
        Eagle: "#7e8890",
        EarthDay: "#40a195",
        EasterChick: "#73a087",
        EclipseHunter: "#635d51",
        EgyptianCat: "#545b51",
        EgyptianPlague: "#4e3f2d",
        ElderMaster: "#6e7143",
        EleanorOfLight: "#9b967d",
        ElectroJelly: "#736776",
        ElectronicGirl: "#727e84",
        Elephant: "#5a5c53",
        ElephantBall: "#758a81",
        ElfHelper: "#7a686b",
        ElitePilot: "#723b39",
        ElvenNoble: "#8e644e",
        EntertainerLow: "#2c2d2d",
        EternalSnake: "#525634",
        Evil: "#d73643",
        EvilElf: "#794a5a",
        EvilEye: "#d64f06",
        EvilGenie: "#495885",
        EvilMaster: "#6f2432",
        Excalibur: "#4c6692",
        Eye: "#a1adbb",
        EyeFive: "#1d3866",
        "EyeFive(Level3)": "#2e426d",
        Eyeball: "#7e9852",
        Eyepatch: "#8e805a",
        Facepalm: "#d6a594",
        FairyFeathers: "#588270",
        FakeChest: "#50415a",
        Fallen: "#44444b",
        FallenOne: "#7367a4",
        Faun: "#434535",
        FeatherDragon: "#69483d",
        FireFace: "#863918",
        FireGiant: "#75382b",
        "FireGiant(Level3)": "#d9b15b",
        FireGolem: "#db7e80",
        FireRooster: "#453d36",
        Firebird: "#000001",
        Firespitter: "#843715",
        Flame: "#623624",
        FloatingSee: "#a79098",
        Fly: "#8b7e54",
        FlyingCork: "#526a48",
        FlyingSaucer: "#32253d",
        FootballStrike: "#9a6343",
        Footprint: "#b69d22",
        ForestSpirit: "#52543a",
        Fox: "#002c6c",
        FoxMask: "#6d4467",
        Frankenstein: "#435230",
        Frankie: "#2a7e5c",
        FreeBots: "#523223",
        Fries: "#637363",
        Frog: "#96a240",
        FrogKid: "#969879",
        "FrogKid(Level3)": "#979878",
        FrogThai: "#597243",
        Frogy: "#60556a",
        FrostGiant: "#587c9d",
        "FrostGiant(Level3)": "#7da5bb",
        FrostHand: "#b6b9c8",
        Full: "#9a19c3",
        Funky: "#2a65a2",
        FunnyFace: "#9b7f81",
        FunshineBear: "#d3aa52",
        Furious: "#998474",
        FuryCat: "#9a4012",
        FutureArt: "#3a286c",
        Galaxy: "#414264",
        GameHost: "#753f39",
        Gamma: "#442b63",
        Gary: "#5a7551",
        Geisha: "#4f4164",
        Gemini: "#6e3a40",
        General: "#7e5c26",
        Genie: "#2c80a2",
        "Genie(Level3)": "#2f7c9a",
        Ghost: "#a2297d",
        GiantHuman: "#8b4542",
        GiantSkull: "#69555c",
        Gingerbread: "#9f9c96",
        GirlKiss: "#957d93",
        Gladiatrix: "#605e60",
        GnomeMage: "#8e6647",
        Goblin: "#487c44",
        GoddessAona: "#73514e",
        GoldCoin: "#bd891f",
        GoldPot: "#477e5d",
        GoldRush: "#6e6d27",
        GoldenAxe: "#87313d",
        GoldenMask: "#545346",
        Goldfish: "#7cb7b8",
        GoofyYeti: "#86a396",
        Gordon: "#655125",
        Gouache: "#51587d",
        Grandma: "#895d5a",
        Greatzilla: "#017cbe",
        GreenDragon: "#465e1c",
        GreenMan: "#6e923e",
        Grizzly: "#511f18",
        GroovyCanvas: "#467736",
        GrumpyFrog: "#959427",
        Gryphon: "#525463",
        Guardian: "#915750",
        GuineaPig: "#5e6741",
        Gymnast: "#50876d",
        Hades: "#532c6e",
        Halloween: "#c65f00",
        Halo: "#7cdbc7",
        Hamburger: "#c2b34c",
        Happy: "#de636c",
        HappyHat: "#6b8e2c",
        HappySoda: "#5b4f56",
        Haste: "#5a2b69",
        Hat: "#49662f",
        Hazmat: "#746c47",
        HealingPotion: "#7949a5",
        Heart: "#daa1b4",
        Heartbreaker: "#797d74",
        HeavyMetal: "#2d3d7f",
        Helm: "#454f6e",
        Helmet: "#af3f11",
        Hercules: "#7e7550",
        Hobgoblin: "#616253",
        Hockey: "#5a5b9c",
        HonkHonk: "#a1857e",
        Hornet: "#78626d",
        Hornhead: "#7b6c6d",
        HorseBoot: "#2c4d61",
        Horseshoe: "#349b16",
        HotCoffee: "#4b7962",
        HotDog: "#d4b890",
        HotPepper: "#48381b",
        HotTaco: "#84731a",
        Hunter: "#004f0f",
        Huntsman: "#7d6747",
        Husky: "#8f7090",
        HuskyBrawl: "#5a5c5d",
        HyperCofee: "#757e6d",
        IceCream: "#4873ac",
        IceCrystal: "#58a5cb",
        IceGriffin: "#6946ab",
        IceLord: "#637e92",
        Icon: "#84435a",
        IcyBraid: "#748780",
        Idea: "#546737",
        Idol: "#582d57",
        Idontknow: "#73777e",
        Ignis: "#270709",
        Imp: "#a53d29",
        "Imp(Level3)": "#a56334",
        Infernando: "#5d3f2f",
        Infernus: "#3f4a5d",
        Insectoid: "#592a22",
        Invader: "#4c3f4d",
        IronTitan: "#724042",
        IronfistTitus: "#564932",
        Jab: "#3a5463",
        Jackal: "#4e4d6a",
        "Jackal(Level3)": "#56516a",
        Jade: "#a44148",
        JadeDragon: "#072408",
        JellyBear: "#664575",
        JellyDiver: "#4c5356",
        JellyFace: "#6c6182",
        JellyfishBall: "#7758b5",
        Jester: "#785585",
        John: "#734a24",
        Jotun: "#70ecff",
        JudoFighter: "#bc7760",
        Jumper: "#765c6e",
        JungleWarrior: "#6c6241",
        Jupiter: "#d08904",
        KarateParrot: "#775148",
        Kayo: "#6c3e62",
		Kawai: "#86248d",
        KempoTiger: "#5e5449",
        Kepper: "#695a36",
        Kevin: "#9f716f",
        Kieran: "#6d7e5c",
        KillerMask: "#646060",
        King: "#745c57",
        KingLion: "#705432",
        Kong: "#553d1d",
        Kraken: "#004f0f",
        LavaBeast: "#85502a",
        LeSmash: "#885f57",
        LeSpark: "#8c5546",
        Lead: "#1f6c58",
        Leech: "#7a4844",
        Leo: "#6f2f16",
        Leprechaun: "#7d8d49",
        Liberty: "#797573",
        Libra: "#683d48",
        Lightning: "#11499a",
        Lily: "#666739",
        Lion: "#654217",
        LittleZilla: "#566d41",
        "LittleZilla(Level3)": "#a05b80",
        Lizard: "#b01751",
        Lol: "#c8a216",
        LotsaHeartElephant: "#cc7c8d",
        LoveArrow: "#9d615c",
        LoveCat: "#515e61",
        LovePizza: "#7a5132",
        Lovesick: "#9920c6",
        Luchador: "#3f3ba8",
        LuckyClover: "#6fa33f",
        LuckyDoll: "#944d3f",
        MadCap: "#655140",
        MadFragment: "#8f7b57",
        MadJawz: "#714a6d",
        MadMonkey: "#664c3f",
        MadMuffin: "#544f56",
        MadSkull: "#7f6167",
        Madness: "#8d4151",
        Mage: "#435566",
        MagicGerbil: "#747d8d",
        MagicHat: "#4481bd",
        MajorEagle: "#485254",
        Mammoth: "#654217",
        Maple: "#632612",
        Maracas: "#533c99",
        Marauder: "#6b615f",
        Mariachi: "#81493e",
        Mask: "#863b35",
        Masked: "#474a4a",
        MaskedMenace: "#63202f",
        MechaDestroyer: "#623e3f",
        MechaParrot: "#4b6b44",
        MechaToad: "#65524c",
        Mechanicat: "#6f6168",
        Mechatron: "#47113c",
        Medusa: "#236b14",
        MegaMecha: "#17364b",
        MegaPower: "#c1906b",
        MeltingMan: "#49a2c5",
        Mercury: "#d6680e",
        MerryOutlaw: "#89725c",
        MerryPencil: "#72831d",
        MetalFace: "#4d3f40",
        MetalGhoul: "#4c5a47",
        MetalScorpion: "#353b58",
        Meteor: "#5e3880",
        MexicanSkull: "#976c43",
        Mico: "#c7a652",
        MidnightYeti: "#4f5245",
        Migthy: "#6f6c58",
        Minotaur: "#664b36",
        Mischievous: "#cba142",
        MistletoeMadness: "#6b4e36",
        MondayWorker: "#982724",
        Monk: "#ad836e",
        Monkey: "#664a24",
        Monster: "#d5c89d",
        Moo: "#69ab3c",
        MoonAlisa: "#514e61",
        MoonShip: "#2b2222",
        Mountain: "#265758",
        Mouse: "#dbc527",
        Mr: "#936f48",
        MrsGrinch: "#837848",
        MuffinHead: "#b7879a",
        Mummy: "#6e6961",
        MummyKing: "#997777",
        Mushroom: "#766c57",
        MushroomFace: "#3c5963",
        Mutant: "#5d745a",
        MutantHerb: "#5a5336",
        MysticBird: "#2b3430",
        NecktieCat: "#407620",
        NecroStrangler: "#8d3f2f",
        Neila: "#2d555f",
        NeonBug: "#2c3b51",
        Neptune: "#176ddd",
        NeptunusSpider: "#875e54",
        Nerdy: "#2f6eaa",
        NiceDoggy: "#677288",
        NiceEagle: "#64554a",
        NightHunter: "#5c384e",
        Nightmare: "#1c665b",
        Nose: "#d6a5a5",
        Nuclear: "#90810a",
        Nuke: "#806a31",
        Nun: "#352a23",
        Nutcracker: "#714935",
        Octo: "#2c1e29",
        Octopower: "#8c5c5b",
        "Octopower(Level3)": "#a06350",
        Octopus: "#2d352b",
        OculusOrbus: "#646368",
        Odd: "#639627",
        Ogre: "#6b6670",
        OldKraken: "#278464",
        OldOne: "#4c5044",
        "OldOne(Level3)": "#754439",
        Omega: "#a13600",
        OmegaBlast: "#365d50",
        Omicron: "#678f6c",
        Oni: "#2e5457",
        Ooze: "#5d8e78",
        OrcGrunt: "#546e35",
        OrcWarrior: "#633435",
        Owl: "#a09899",
        Paladin: "#6a635e",
        PalmTree: "#62ab99",
        Panda: "#797979",
        Panther: "#000001",
        Parrot: "#5b442c",
        PartyMode: "#4e5a76",
        PartyTime: "#49496d",
        Pencil: "#275677",
        Penguin: "#746c60",
        PepeLoco: "#91482d",
        Performer: "#926049",
        Phantom: "#606d6c",
        Pharaoh: "#7b5258",
        Phoenix: "#537480",
        "Phoenix(Level3)": "#873b41",
        PieSlice: "#8c7566",
        PigBall: "#757463",
        Piggie: "#de92bd",
        Piglet: "#874e7e",
        Pilgrim: "#5d5651",
        PineHead: "#746948",
        Pineapple: "#d1ca31",
        PingPong: "#5a5248",
        Pinhata: "#3d435d",
        Pirate: "#8f4536",
        PirateMaiden: "#56485a",
        Pisces: "#43606a",
        PixelKong: "#955b51",
        Pixie: "#4f6f5f",
        Pizza: "#bf8224",
        Plague: "#2d362c",
        PlanetCat: "#484672",
        Pluto: "#cebdd4",
        Poet: "#64644d",
        PoisonRose: "#091600",
        PokerAce: "#8e6a5c",
        PolarBear: "#7d747d",
        Poseidon: "#455866",
        PowerBadger: "#795c8b",
        PowerFighter: "#6f9896",
        PowerGirl: "#726685",
        PowerGlove: "#746347",
        PowerMask: "#635647",
        PowerNinja: "#58774a",
        Prankster: "#9c16ab",
        Predictor: "#827679",
        Prey: "#544c4e",
        Primal: "#6d4333",
        PrincessSwift: "#903e30",
        Psycho: "#6d514e",
        PsychoDriller: "#613e4b",
        Psychopanda: "#74444c",
        Pug: "#755f4e",
        Pumpkin: "#420000",
        Punk: "#605063",
        Puppy: "#bea259",
        PurpleDragon: "#413b57",
        "PurpleDragon(Level3)": "#51546e",
        PyramidEye: "#515a74",
        Queasy: "#5f9624",
        Question: "#6c218c",
        Quirky: "#af7777",
        Rabbit: "#6c6fc8",
        Rabid: "#9d29c5",
        RaccoonJutsu: "#4f5543",
        Radar: "#0f8136",
        RadicalSmile: "#a2a300",
        Rage: "#59815e",
        RaidBoss: "#325032",
        Raider: "#635832",
        Rainbow: "#56a9b7",
        Ranger: "#443b2d",
        Raptor: "#004f0f",
        Rascal: "#987067",
        RaspyElf: "#606a73",
        Rastafari: "#472235",
        Raven: "#646365",
        Reaper: "#61595e",
        "Reaper(Level3)": "#665d5e",
        RedBeard: "#936a2e",
        RedDragon: "#716633",
        "RedDragon(Level3)": "#8a4619",
        RedFriend: "#5a2720",
        RedPulse: "#71527e",
        Reindeer: "#49583d",
        Remy: "#4c5750",
        Reptilian: "#6d5747",
        RhinoBoxer: "#5e6d71",
        Ringmaster: "#607171",
        RoboKid: "#44505c",
        "RoboKid(Level3)": "#2a3d52",
        Rocker: "#5e573f",
        Rocket: "#6e2750",
        RocketDeer: "#807665",
        Rogue: "#875747",
        RogueBunny: "#726355",
        RogueSamurai: "#46607a",
        RollerBot: "#4c3872",
        Rooster: "#7a443a",
        RootGnome: "#876f5a",
        RoseLow: "#2f2f2e",
        RowdyShroom: "#666b59",
        Sabertooth: "#6d8c7d",
        Sad: "#c9c9c9",
        Saggitarius: "#505140",
        Salamander: "#706745",
        "Salamander(Level3)": "#873d6e",
        Samba: "#7c3219",
        SandWorm: "#722e2a",
        Santa: "#cca296",
        SantaClaus: "#7b7f88",
        Saturn: "#9484be",
        Sausage: "#41514e",
        "Sausage(Level3)": "#7d3730",
        Scar: "#666c77",
        Scarab: "#3f5235",
        Scarecrow: "#c7c7c7",
        Scavenger: "#484d3f",
        Scorpio: "#51293e",
        Scott: "#4a5467",
        ScreaminMeemie: "#696f2d",
        Scroll: "#663956",
        Scythe: "#484253",
        SeaExplorer: "#48592c",
        SeaTurtle: "#759b9d",
        SeaWizard: "#074853",
        "SeaWizard(Level3)": "#26504c",
        Seal: "#8ea7a8",
        SealKnight: "#4b4d59",
        Seer: "#6c543f",
        Shadow: "#424850",
        ShadowMan: "#3a5233",
        Shark: "#002c6c",
        SheepBall: "#b66a60",
        Sherbert: "#454562",
        Sheriff: "#63303f",
        Shogun: "#6a5057",
        Shrieker: "#36443e",
        Shuriken: "#8a2b22",
        Shuttle: "#307e95",
        SilentFox: "#66483a",
        SilentNun: "#404040",
        SillyGriffin: "#606a45",
        SilverTusk: "#4c434b",
        Skeleton: "#484d21",
        SkullArtifact: "#7d6279",
        SkullBow: "#897698",
        SkullCactus: "#5d4f3c",
        SkullClaus: "#765759",
        SkullFace: "#6a655e",
        SkullMagician: "#8a4937",
        SkullRibbon: "#725a5d",
        SkullSamurai: "#825c3f",
        SkullSwords: "#915243",
        Skyrocket: "#4c2a24",
        Slartie: "#7b3e0c",
        Slaughter: "#815e49",
        SleepyFox: "#974825",
        SlimeBeast: "#1d4131",
        SlimeFace: "#417e7e",
        Slingblade: "#4f5575",
        Sly: "#9e7952",
        Smelly: "#3d5c26",
        Smile: "#bd9f00",
        Smokey: "#7e5675",
        Smyg: "#9b3d5a",
        SnackShark: "#193441",
        Snake: "#6a6a26",
        Snout: "#a36151",
        SnowBiker: "#64635d",
        Snowboarder: "#464b6c",
        Snowman: "#8ed0cf",
        SnowyJoe: "#a0b4a4",
        SoccerBall: "#608299",
        SoccerBoot: "#6a7270",
        SodaCan: "#61654f",
        Soloist: "#826538",
        Sombrero: "#4c8938",
        Songsmith: "#5b634a",
        SonicBoom: "#1c4248",
        Sorceress: "#7b3f1b",
        SoulHunter: "#2e2d51",
        SourCandy: "#55524b",
        SpaceDog: "#887b74",
        SpaceHunter: "#5a4c54",
        SpaceInk: "#336393",
        SpaceWarden: "#585c59",
        SpaceWarrior: "#5c6165",
        Spark: "#584886",
        "Spark(Level3)": "#5ca85b",
        SpectralOwl: "#3f3b18",
        Spider: "#5a707d",
        Spike: "#907a3d",
        SpikeFish: "#48705a",
        SpikeFlower: "#50644f",
        SpinnerKid: "#73843f",
        Spitfire: "#5c919b",
        Splatter: "#366428",
        Spogh: "#584943",
        Spooky: "#363135",
        "Spooky(Level3)": "#5b4648",
        Sprinter: "#5c5a73",
        Spy: "#d8e0e3",
        Squiggly: "#633f85",
        Squirrel: "#724c3d",
        StarBall: "#d86d00",
        StarEagle: "#736383",
        StarPilot: "#34483f",
        StarPlayer: "#973c48",
        StarSentinel: "#4c3926",
        Starboy: "#423229",
        Starfighter: "#33515f",
        Starfish: "#d18055",
        StarsandStripes: "#4f443d",
        Statue: "#ba7335",
        SteamDiver: "#555a34",
        SteamFreak: "#7c5123",
        SteamMask: "#383a1a",
        SteampunkCat: "#806439",
        SteelRam: "#535632",
        StoneTool: "#686051",
        StormFist: "#405e59",
        Strawberry: "#895a4f",
        StreetBull: "#704827",
        Striker: "#5a7c8b",
        SugarDash: "#934e7e",
        Sumo: "#7c0001",
        Sun: "#e5aa0c",
        Sunbath: "#7c6c36",
        Sunflower: "#997744",
        SuperCar: "#589087",
        Superstar: "#654d75",
        Suplex: "#7e6828",
        Supremus: "#464345",
        Surfer: "#c8a347",
        SurfinBird: "#785056",
        SurprisedCat: "#785756",
        Sweaty: "#5f8a1b",
        SweetTendril: "#636526",
        Swimmer: "#4e5a6c",
        "T-Rex": "#7c0001",
        "TBBCE-Alex": "#6b5620",
        Taco: "#6e5434",
        TapeGuy: "#777459",
        Target: "#cd7b69",
        Taurus: "#632e32",
        TeaTime: "#808348",
        TechnoKat: "#6e5b7e",
        TechnoKid: "#596e9e",
        TechnoNinja: "#456e40",
        TechnoQuack: "#745048",
        TenderHeartBear: "#c48a48",
        Tennist: "#94675a",
        Termite: "#784a47",
        Terra: "#496057",
        Terrible: "#8634ae",
        ThanksgivingPumpkin: "#836026",
        ThanksgivingTurkey: "#3a343b",
        TheGaunt: "#6c5b58",
        TheHood: "#914840",
        TheMaw: "#6c565a",
        TheMiasma: "#4a6144",
        TheOracle: "#685151",
        TheProfessional: "#984638",
        TheReaper: "#555366",
        TheScorcher: "#88441c",
        TheStranger: "#524d4b",
        TheTiger: "#5c4f1a",
        TheTinker: "#6f502c",
        Theorist: "#675e3b",
        Thief: "#6e8a6b",
        ThinkTank: "#816464",
        Thirteen: "#1a4a26",
        ThugChihuahua: "#5e4034",
        Tiger: "#ab7658",
        TimeDoctor: "#7e6e6c",
        TimeDude: "#6b5a51",
        TinyJack: "#60483e",
        TinyReaper: "#602a38",
        Toco: "#4f7248",
        Tomato: "#d03923",
        Toon: "#c10303",
        ToothTroll: "#9f7721",
        TotallyAlexis: "#76443a",
        TotallyChloe: "#bd6344",
        TotallySara: "#8b4845",
        Tough: "#367fc7",
        Toxic: "#283d38",
        ToxicEater: "#64646f",
        Triceratops: "#355e5e",
        "Triceratops(Level3)": "#5a4b38",
        Trickster: "#484556",
        TrippyCat: "#986c5b",
        Troldir: "#797648",
        TrollFace: "#bd3a0f",
        Turtle: "#2b9b1b",
        UFO: "#77b599",
        UncleSam: "#875c59",
        Undead: "#4e5868",
        Unicorn: "#796ca2",
        "Unicorn(Level3)": "#836a9d",
        UniversalRanger: "#786552",
        UnknownTotem: "#875143",
        Uranus: "#72c6c6",
        Vampire: "#75706d",
        Vampy: "#7e5453",
        Vega: "#485149",
        Venus: "#cfb84a",
        Vicious: "#b98a36",
        Viking: "#6a6652",
        Viper: "#684845",
        Virgil: "#3e5232",
        Virginia: "#777a76",
        Virgo: "#364372",
        Virtuoso: "#464e3f",
        Virus: "#bc76cf",
        VisibleConfusion: "#967475",
        Volcano: "#4e332d",
        Voracious: "#3e4858",
        WackyEgg: "#7c62a3",
        WackyHero: "#827870",
        WackyHyena: "#a74d3f",
        WalkingHand: "#524d3d",
        WalrusArt: "#5c4c40",
        WalrusBall: "#674868",
        WarHero: "#9d6136",
        WarMask: "#46516a",
        WarPaint: "#77584e",
        WarTank: "#765d16",
        Warhorse: "#6e4333",
        Warlock: "#6c576e",
        "Warlock(Level3)": "#735a58",
        Warrior: "#705a42",
        Wasp: "#ad8f12",
        WastedMouse: "#783651",
        WaterDragon: "#7e8769",
        WaterSpirit: "#3d7a79",
        Watson: "#57352e",
        Wendigo: "#6f6e93",
        Werewolf: "#443f44",
        WhiteHorse: "#6c635f",
        WhiteOwl: "#9e9c96",
        WhiteOwlV2: "#83817e",
        Wicked: "#c11514",
        WickedCat: "#581d1a",
        WickedClown: "#677655",
        WickedVendetta: "#332d70",
        WideEye: "#7f3a36",
        WildPepper: "#b4660f",
        WinterWolf: "#75787b",
        WisgarusDragonslayer: "#916e41",
        Wofly: "#000000",
        Wolf: "#6c5176",
        WolfMan: "#261034",
        WolfPaw: "#7f84b4",
        WolfSigil: "#4b5e7e",
        WoodElf: "#3b752d",
        "WoodElf(Level3)": "#46722f",
        WormSkull: "#797d5a",
        "WormSkull(Level3)": "#736651",
        "X-Ray": "#4e5224",
        XmasPuddinglvl3: "#3a5982",
        YellowStreak: "#685c26",
        Yeti: "#619eae",
        "Yeti(Level3)": "#6f98a9",
        Yuno: "#755a56",
        ZanyTree: "#2d4730",
        Zap: "#59555f",
        Zebra: "#737373",
        Zeus: "#77aab4",
        Zombie: "#29b20a",
        ZombieDog: "#66746f",
        ZombieParty: "#a363aa",
        ZulaGorgan: "#63602e",
        Zully: "#5f6269",
        magiball: "#232323",
        magipupil: "#2d2d2d",
        "null234-Marty": "#534758",
        pepesuit: "#242d30",
        soya: "#704652",
    };
	

    function byId(id) {
        return document.getElementById(id);
    }

    function byClass(clss, parent) {
        return (parent || document).getElementsByClassName(clss);
    }

    function Sound(src, volume, maximum) {
        this.src = src;
        this.volume = typeof volume == "number" ? volume : 0.5;
        this.maximum = typeof maximum == "number" ? maximum : Infinity;
        this.elms = [];
    }
    Sound.prototype.play = function(vol) {
        if (typeof vol == "number") this.volume = vol;
        var toPlay;
        for (var i = 0; i < this.elms.length; i++) {
            var elm = this.elms[i];
            if (elm.paused) {
                toPlay = elm;
                break;
            }
        }
        if (!toPlay) toPlay = this.add();
        toPlay.volume = this.volume;
        toPlay.play();
    };
    Sound.prototype.add = function() {
        if (this.elms.length >= this.maximum) {
            return this.elms[0];
        }
        var elm = new Audio(this.src);
        this.elms.push(elm);
        return elm;
    };

    var LOAD_START = Date.now();
    Array.prototype.remove = function(a) {
        var i = this.indexOf(a);
        if (i !== -1) this.splice(i, 1);
        return i !== -1;
    };
    Element.prototype.hide = function() {
        this.style.display = "none";
        if (this.style.opacity == 1) this.style.opacity = 0;
    };
    Element.prototype.show = function(seconds) {
        this.style.display = "";
        var that = this;
        if (seconds) {
            this.style.transition = "opacity " + seconds + "s ease 0s";
            setTimeout(function() {
                that.style.opacity = 1;
            }, 20);
        }
    };
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === val) return true;
            }
            return false;
        };
    }
    (function() {
        var ctxProto = CanvasRenderingContext2D.prototype;
        if (ctxProto.resetTransform) return;
        ctxProto.resetTransform = function() {
            this.setTransform(1, 0, 0, 1, 0, 0);
        };
    })();

    function bytesToHex(r, g, b) {
        return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    }

    function colorToBytes(color) {
        var c = color.slice(1);
        if (c.length === 3)
            c = c.split("").map(function(a) {
                return a + a;
            });
        if (c.length !== 6) throw new Error("invalid color " + color);
        var v = parseInt(c, 16);
        return {
            r: (v >>> 16) & 255,
            g: (v >>> 8) & 255,
            b: v & 255,
        };
    }

    function darkenColor(color) {
        var a = colorToBytes(color);
        return bytesToHex(a.r * 0.9, a.g * 0.9, a.b * 0.9);
    }

    function cleanupObject(object) {
        for (var i in object) delete object[i];
    }
    var __buf = new DataView(new ArrayBuffer(8));

    function Writer(littleEndian) {
        this._e = littleEndian;
        this.reset();
        return this;
    }
    Writer.prototype = {
        writer: true,
        reset: function(littleEndian) {
            this._b = [];
            this._o = 0;
        },
        setUint8: function(a) {
            if (a >= 0 && a < 256) this._b.push(a);
            return this;
        },
        setInt8: function(a) {
            if (a >= -128 && a < 128) this._b.push(a);
            return this;
        },
        setUint16: function(a) {
            __buf.setUint16(0, a, this._e);
            this._move(2);
            return this;
        },
        setInt16: function(a) {
            __buf.setInt16(0, a, this._e);
            this._move(2);
            return this;
        },
        setUint32: function(a) {
            __buf.setUint32(0, a, this._e);
            this._move(4);
            return this;
        },
        setInt32: function(a) {
            __buf.setInt32(0, a, this._e);
            this._move(4);
            return this;
        },
        setFloat32: function(a) {
            __buf.setFloat32(0, a, this._e);
            this._move(4);
            return this;
        },
        setFloat64: function(a) {
            __buf.setFloat64(0, a, this._e);
            this._move(8);
            return this;
        },
        _move: function(b) {
            for (var i = 0; i < b; i++) this._b.push(__buf.getUint8(i));
        },
        setStringUTF8: function(s) {
            var bytesStr = unescape(encodeURIComponent(s));
            for (var i = 0, l = bytesStr.length; i < l; i++)
                this._b.push(bytesStr.charCodeAt(i));
            this._b.push(0);
            return this;
        },
        build: function() {
            return new Uint8Array(this._b);
        },
    };

    function Reader(view, offset, littleEndian) {
        this._e = littleEndian;
        if (view) this.repurpose(view, offset);
    }
    Reader.prototype = {
        reader: true,
        repurpose: function(view, offset) {
            this.view = view;
            this._o = offset || 0;
        },
        getUint8: function() {
            return this.view.getUint8(this._o++, this._e);
        },
        getInt8: function() {
            return this.view.getInt8(this._o++, this._e);
        },
        getUint16: function() {
            return this.view.getUint16((this._o += 2) - 2, this._e);
        },
        getInt16: function() {
            return this.view.getInt16((this._o += 2) - 2, this._e);
        },
        getUint32: function() {
            return this.view.getUint32((this._o += 4) - 4, this._e);
        },
        getInt32: function() {
            return this.view.getInt32((this._o += 4) - 4, this._e);
        },
        getFloat32: function() {
            return this.view.getFloat32((this._o += 4) - 4, this._e);
        },
        getFloat64: function() {
            return this.view.getFloat64((this._o += 8) - 8, this._e);
        },
        getStringUTF8: function() {
            var s = "",
                b;
            while ((b = this.view.getUint8(this._o++)) !== 0)
                s += String.fromCharCode(b);

            return decodeURIComponent(escape(s));
        },
    };
    var log = {
        verbosity: 2,
        error: function() {
            if (log.verbosity > 0) console.error.apply(null, arguments);
        },
        warn: function() {
            if (log.verbosity > 1) console.warn.apply(null, arguments);
        },
        info: function() {
            if (log.verbosity > 2) console.info.apply(null, arguments);
        },
        debug: function() {
            if (log.verbosity > 3) console.debug.apply(null, arguments);
        },
    };

    var wsUrl = null,
        SKIN_URL = "https://configs-web.agario.miniclippt.com/live/v15/10122/",
        USE_HTTPS = "https:" == window.location.protocol,
        EMPTY_NAME = "An unnamed cell",
        QUADTREE_MAX_POINTS = 32,
        CELL_POINTS_MIN = 8,
        CELL_POINTS_MAX = 120,
        VIRUS_POINTS = 100,
        PI_2 = Math.PI * 2,
        SEND_254 = new Uint8Array([254, 6, 0, 0, 0]),
        SEND_255 = new Uint8Array([255, 1, 0, 0, 0]),
        UINT8_CACHE = {
            1: new Uint8Array([1]),
            17: new Uint8Array([17]),
            21: new Uint8Array([21]),
            18: new Uint8Array([18]),
            19: new Uint8Array([19]),
            22: new Uint8Array([22]),
            23: new Uint8Array([23]),
            24: new Uint8Array([24]),
            25: new Uint8Array([25]),
            254: new Uint8Array([254]),
        },
        KEY_TO_CODE = {
            " ": UINT8_CACHE[17],
            w: UINT8_CACHE[21],
            q: UINT8_CACHE[18],
            e: UINT8_CACHE[22],
            r: UINT8_CACHE[23],
            t: UINT8_CACHE[24],
            p: UINT8_CACHE[25],
        },
        IE_KEYS = {
            spacebar: " ",
            esc: "escape",
        };

    function wsCleanup() {
        if (!ws) return;
        log.debug("ws cleanup trigger");
        ws.onopen = null;
        ws.onmessage = null;
        ws.close();
        ws = null;
    }

    function wsInit(url) {
        if (ws) {
            log.debug("ws init on existing conn");
            wsCleanup();
        }
        byId("connecting").show(0.5);
        ws = new WebSocket("wss" + (USE_HTTPS ? "s" : "") + "://" + (wsUrl = url));
        ws.binaryType = "arraybuffer";
        ws.onopen = wsOpen;
        ws.onmessage = wsMessage;
        ws.onerror = wsError;
        ws.onclose = wsClose;
    }

    function wsOpen() {
        disconnectDelay = 1000;
        byId("connecting").hide();
        wsSend(SEND_254);
        wsSend(SEND_255);
    }

    function wsError(error) {
        log.warn(error);
    }

    function wsClose(e) {
        log.debug("ws disconnected " + e.code + " '" + e.reason + "'");
        wsCleanup();
        gameReset();
        setTimeout(function() {
            if (ws && ws.readyState === 1) return;
            wsInit(wsUrl);
        }, (disconnectDelay *= 1.5));
    }

    function wsSend(data) {
        if (!ws) return;
        if (ws.readyState !== 1) return;
        if (data.build) ws.send(data.build());
        else ws.send(data);
    }

    function wsMessage(data) {
        if (window.imSolo.doubleSplit) {
            if (window.imSolo.doubleTick == 0) {
                wsSend(UINT8_CACHE[17]);
                window.imSolo.doubleTick++;
            } else if (window.imSolo.doubleTick >= 1) {
                window.imSolo.doubleSplit = !1;
                window.imSolo.doubleTick = 0;
                wsSend(UINT8_CACHE[17]);
            } else window.imSolo.doubleTick++;
        }
        if (window.imSolo.tripleSplit) {
            if (window.imSolo.tripleTick >= 0 && window.imSolo.tripleTick < 2) {
                wsSend(UINT8_CACHE[17]);
                window.imSolo.tripleTick++;
            } else if (window.imSolo.tripleTick >= 2) {
                window.imSolo.tripleSplit = !1;
                window.imSolo.tripleTick = 0;
                wsSend(UINT8_CACHE[17]);
            } else window.imSolo.tripleTick++;
        }
        if (window.imSolo.quadSplit) {
            if (window.imSolo.quadTick >= 0 && window.imSolo.quadTick < 3) {
                wsSend(UINT8_CACHE[17]);
                window.imSolo.quadTick++;
            } else if (window.imSolo.quadTick >= 3) {
                window.imSolo.quadSplit = !1;
                window.imSolo.quadTick = 0;
                wsSend(UINT8_CACHE[17]);
            } else window.imSolo.quadTick++;
        }
        if (window.imSolo.quadSplitBot) {
            if (window.imSolo.quadTickBot >= 0 && window.imSolo.quadTickBot < 3) {
                wsSend(UINT8_CACHE[22]);
                window.imSolo.quadTickBot++;
                cell
                wsSend(UINT8_CACHE[22]);
            } else window.imSolo.quadTickBot++;
        }
        if (window.imSolo.doubleSplitBot) {
            if (window.imSolo.doubleTickBot == 0) {
                wsSend(UINT8_CACHE[22]);
                window.imSolo.doubleTickBot++;
            } else if (window.imSolo.doubleTickBot >= 1) {
                window.imSolo.doubleSplitBot = !1;
                window.imSolo.doubleTickBot = 0;
                wsSend(UINT8_CACHE[22]);
            } else window.imSolo.doubleTickBot++;
        }
        if (window.imSolo.feed) {
            wsSend(UINT8_CACHE[21]);
        }
        if (window.imSolo.minionFeed) wsSend(UINT8_CACHE[23]);
        syncUpdStamp = Date.now();
        var reader = new Reader(new DataView(data.data), 0, true);
        var packetId = reader.getUint8();
        switch (packetId) {
            case 0x10: // update nodes
                var killer,
                    killed,
                    id,
                    node,
                    x,
                    y,
                    s,
                    flags,
                    cell,
                    updColor,
                    updName,
                    updSkin,
                    count,
                    color,
                    name,
                    skin;

                // consume records
                count = reader.getUint16();
                for (var i = 0; i < count; i++) {
                    killer = reader.getUint32();
                    killed = reader.getUint32();
                    if (
                        !cells.byId.hasOwnProperty(killer) ||
                        !cells.byId.hasOwnProperty(killed)
                    )
                        continue;
                    if (settings.playSounds && cells.mine.includes(killer)) {
                        (cells.byId[killed].s < 20 ? pelletSound : eatSound).play(
                            parseFloat(soundsVolume.value)
                        );
                    }
                    cells.byId[killed].destroy(killer);
                }

                // update records
                while (true) {
                    id = reader.getUint32();
                    if (id === 0) break;

                    x = reader.getInt32();
                    y = reader.getInt32();
                    s = reader.getUint16();

                    flags = reader.getUint8();
                    updColor = !!(flags & 0x02);
                    updSkin = !!(flags & 0x04);
                    updName = !!(flags & 0x08);
                    color = updColor ?
                        bytesToHex(
                            reader.getUint8(),
                            reader.getUint8(),
                            reader.getUint8()
                        ) :
                        null;
                    skin = updSkin ? reader.getStringUTF8() : null;
                    name = updName ? reader.getStringUTF8() : null;
                    if (cells.byId.hasOwnProperty(id)) {
                        cell = cells.byId[id];
                        cell.update(syncUpdStamp);
                        cell.updated = syncUpdStamp;
                        cell.ox = cell.x;
                        cell.oy = cell.y;
                        cell.os = cell.s;
                        cell.nx = x;
                        cell.ny = y;
                        cell.ns = s;
                        cell.viewRange = Math.ceil(cell.ns * camera.userZoom);
                        if (color) cell.setColor(color);
                        if (name) cell.setName(name);
                        if (skin) cell.setSkin(skin);
                    } else {
                        cell = new Cell(id, x, y, s, name, color, skin, flags);
                        cells.byId[id] = cell;
                        cells.list.push(cell);
                    }
                }
                // dissapear records
                count = reader.getUint16();
                for (i = 0; i < count; i++) {
                    killed = reader.getUint32();
                    if (
                        cells.byId.hasOwnProperty(killed) &&
                        !cells.byId[killed].destroyed
                    )
                        cells.byId[killed].destroy(null);
                }
                break;
            case 0x11: // update pos
                camera.target.x = reader.getFloat32();
                camera.target.y = reader.getFloat32();
                camera.target.scale = reader.getFloat32();
                camera.target.scale *= camera.viewportScale;
                camera.target.scale *= camera.userZoom;
                break;
            case 0x12: // clear all
                for (var i in cells.byId) cells.byId[i].destroy(null);
            case 0x14: // clear my cells
                cells.mine = [];
                break;
            case 0x15: // draw line
                log.warn("got packet 0x15 (draw line) which is unsupported");
                break;
            case 0x20: // new cell
                cells.mine.push(reader.getUint32());
                break;
            case 0x30: // text list
                leaderboard.items = [];
                leaderboard.type = "text";

                var count = reader.getUint32();
                for (i = 0; i < count; ++i)
                    leaderboard.items.push(reader.getStringUTF8());
                drawLeaderboard();
                break;
            case 0x31: // ffa list
                leaderboard.items = [];
                leaderboard.type = "ffa";

                var count = reader.getUint32();
                for (i = 0; i < count; ++i) {
                    var isMe = !!reader.getUint32();
                    var name = reader.getStringUTF8();
                    leaderboard.items.push({
                        me: isMe,
                        name: name || EMPTY_NAME,
                    });
                }
                drawLeaderboard();
                break;
            case 0x32: // pie chart
                leaderboard.items = [];
                leaderboard.type = "pie";

                var count = reader.getUint32();
                for (i = 0; i < count; ++i) leaderboard.items.push(reader.getFloat32());
                drawLeaderboard();
                break;
            case 0x40: // set border
                border.left = reader.getFloat64();
                border.top = reader.getFloat64();
                border.right = reader.getFloat64();
                border.bottom = reader.getFloat64();
                border.width = border.right - border.left;
                border.height = border.bottom - border.top;
                border.centerX = (border.left + border.right) / 2;
                border.centerY = (border.top + border.bottom) / 2;
                if (data.data.byteLength === 33) break;
                if (!mapCenterSet) {
                    mapCenterSet = true;
                    camera.x = camera.target.x = border.centerX;
                    camera.y = camera.target.y = border.centerY;
                    camera.scale = camera.target.scale = 1;
                }
                reader.getUint32(); // game type
                if (
                    !/MultiOgar|OgarII/.test(reader.getStringUTF8()) ||
                    stats.pingLoopId
                )
                    break;
                stats.pingLoopId = setInterval(function() {
                    wsSend(UINT8_CACHE[254]);
                    stats.pingLoopStamp = Date.now();
                }, 2000);
                break;
            case 0x63: // chat message
                var flags = reader.getUint8();
                var color = bytesToHex(
                    reader.getUint8(),
                    reader.getUint8(),
                    reader.getUint8()
                );

                var name = reader.getStringUTF8() || EMPTY_NAME;
                var message = reader.getStringUTF8();

                var server = !!(flags & 0x80),
                    admin = !!(flags & 0x40),
                    mod = !!(flags & 0x20);

                if (server && name !== "SERVER") name = "[SERVER] " + name;
                if (admin) name = "[ADMIN] " + name;
                if (mod) name = "[MOD] " + name;
                var wait = Math.max(3000, 1000 + message.length * 150);
                chat.waitUntil =
                    syncUpdStamp - chat.waitUntil > 1000 ?
                    syncUpdStamp + wait :
                    chat.waitUntil + wait;
                chat.messages.push({
                    server: server,
                    admin: admin,
                    mod: mod,
                    color: color,
                    name: name,
                    message: message,
                    time: syncUpdStamp,
                });
                if (settings.showChat) drawChat();
                break;
            case 0xfe: // server stat
                stats.info = JSON.parse(reader.getStringUTF8());
                stats.latency = syncUpdStamp - stats.pingLoopStamp;
                drawStats();
                break;
            default:
                // invalid packet
                wsCleanup();
                break;
        }
    }

    function sendMouseMove(x, y) {
        var writer = new Writer(true);
        writer.setUint8(0x10);
        writer.setUint32(x);
        writer.setUint32(y);
        writer._b.push(0, 0, 0, 0);
        wsSend(writer);
    }

    function sendPlay(name, skin = undefined) {
        var writer = new Writer(true);
        writer.setUint8(0x00);
        writer.setStringUTF8(name);
        if (skin) writer.setStringUTF8(skin);
        wsSend(writer);
    }

    function sendChat(text) {
        var writer = new Writer();
        writer.setUint8(0x63);
        writer.setUint8(0);
        writer.setStringUTF8(text);
        wsSend(writer);
    }

    function gameReset() {
        cleanupObject(cells);
        cleanupObject(border);
        cleanupObject(leaderboard);
        cleanupObject(chat);
        cleanupObject(stats);
        chat.messages = [];
        leaderboard.items = [];
        cells.mine = [];
        cells.byId = {};
        cells.list = [];
        camera.x = camera.y = camera.target.x = camera.target.y = 0;
        camera.scale = camera.target.scale = 1;
        mapCenterSet = false;
    }

    var cells = Object.create({
        mine: [],
        byId: {},
        list: [],
    });
    var border = Object.create({
        left: -2000,
        right: 2000,
        top: -2000,
        bottom: 2000,
        width: 4000,
        height: 4000,
        centerX: -1,
        centerY: -1,
    });
    var leaderboard = Object.create({
        type: NaN,
        items: null,
        canvas: document.createElement("canvas"),
        teams: ["#F33", "#3F3", "#33F"],
    });
    var chat = Object.create({
        messages: [],
        waitUntil: 0,
        canvas: document.createElement("canvas"),
        visible: false,
    });
    var stats = Object.create({
        fps: 0,
        latency: NaN,
        supports: null,
        info: null,
        pingLoopId: NaN,
        pingLoopStamp: null,
        canvas: document.createElement("canvas"),
        visible: false,
        score: NaN,
        maxScore: 0,
    });

    var ws = null;
    var wsUrl = null;
    var disconnectDelay = 1000;

    var syncUpdStamp = Date.now();
    var syncAppStamp = Date.now();

    var mainCanvas = null;
    var mainCtx = null;
    var soundsVolume;
    var knownSkins = {};
    var ytknownSkins = {};
    var loadedSkins = {};
    var loadedytSkins = {};
    var escOverlayShown = false;
    var isTyping = false;
    var chatBox = null;
    var mapCenterSet = false;
    var minionControlled = false;
    var camera = {
        x: 0,
        y: 0,
        target: {
            x: 0,
            y: 0,
            scale: 1,
        },
        viewportScale: 1,
        userZoom: 1,
        sizeScale: 1,
        scale: 1,
    };
    var mouseX = NaN;
    var mouseY = NaN;
    var skinList = [];
    var youtuberskinList = [];
    var macroCooldown = 0 / 7;
    var macroCooldown2 = 0 / 7;
    var macroCooldown2 = 40;
    var macroCooldown3 = 50;
    var macroCooldown4 = 40;
    var macroCooldown5 = 50;
    var macroIntervalID;
    var macroIntervalEJECT;
    var quadtree;

    var settings = {
        nick: "",
        skin: "",
        gamemode: "",
        showSkins: true,
        showNames: true,
        darkTheme: false,
        showColor: true,
        showMass: false,
        _showChat: false,
        get showChat() {
            return this._showChat;
        },
        set showChat(a) {
            var chat = byId("chat_textbox");
            a ? chat.show() : chat.hide();
            this._showChat = a;
        },
        showMinimap: false,
        showPosition: false,
        showBorder: true,
        showMapBorder: false,
        showGrid: true,
        playSounds: false,
        soundsVolume: 0.5,
        moreZoom: false,
        fillSkin: true,
        backgroundSectors: false,
        jellyPhysics: true,
        animationDelay: 120,
        drawNamesDistance: 1,
    };
    var pressed = {
        " ": false,
        w: false,
        e: false,
        r: false,
        t: false,
        p: false,
        q: false,
        escape: false,
    };

    var eatSound = new Sound("./assets/sound/eat.mp3", 0.5, 10);
    var pelletSound = new Sound("./assets/sound/pellet.mp3", 0.5, 10);

    request("skinList.txt", function(data) {
        var skins = data.split(",");
        var stamp = Date.now();
        for (var i = 0; i < skins.length; i++) knownSkins[skins[i]] = stamp;
        for (var i in knownSkins)
            if (knownSkins[i] !== stamp) delete knownSkins[i];
    });

    request("youtuberskinList.txt", function(data) {
        var skins = data.split(",");
        var stamp = Date.now();
        for (var i = 0; i < skins.length; i++) ytknownSkins[skins[i]] = stamp;
        for (var i in ytknownSkins)
            if (ytknownSkins[i] !== stamp) delete ytknownSkins[i];
    });

    function hideESCOverlay() {
        escOverlayShown = false;
        byId("overlays").hide();
    }

    function showESCOverlay() {
        escOverlayShown = true;
        byId("overlays").show(0.5);
    }

    function refreshAds() {
        if (aiptag)
            if (typeof(aiptag.adplayer) != typeof(undefined)) {
                aiptag.cmd.display.push(function() {
                    aipDisplayTag.display('imsolo-pro_300x250');
                });
                aiptag.cmd.display.push(function() {
                    aipDisplayTag.display('imsolo-pro_728x90');
                });
                aiptag.cmd.display.push(function() {
                    aipDisplayTag.display('imsolo-pro_160x600');
                });
                aiptag.cmd.display.push(function() {
                    aipDisplayTag.display('imsolo-pro_160x600_2');
                });
            }
    }

    function toCamera(ctx) {
        ctx.translate(mainCanvas.width / 2, mainCanvas.height / 2);
        scaleForth(ctx);
        ctx.translate(-camera.x, -camera.y);
    }

    function scaleForth(ctx) {
        ctx.scale(camera.scale, camera.scale);
    }

    function scaleBack(ctx) {
        ctx.scale(1 / camera.scale, 1 / camera.scale);
    }

    function fromCamera(ctx) {
        ctx.translate(camera.x, camera.y);
        scaleBack(ctx);
        ctx.translate(-mainCanvas.width / 2, -mainCanvas.height / 2);
    }

    function initSetting(id, elm) {
        function simpleAssignListen(id, elm, prop) {
            if (settings[id] !== "") elm[prop] = settings[id];
            elm.addEventListener("change", function() {
                requestAnimationFrame(function() {
                    settings[id] = elm[prop];
                });
            });
        }
        switch (elm.tagName.toLowerCase()) {
            case "input":
                switch (elm.type.toLowerCase()) {
                    case "range":
                    case "text":
                        simpleAssignListen(id, elm, "value");
                        break;
                    case "checkbox":
                        simpleAssignListen(id, elm, "checked");
                        break;
                }
                break;
            case "select":
                simpleAssignListen(id, elm, "value");
                break;
        }
    }

    function loadSettings() {
        var text = localStorage.getItem("settings");
        var obj = text ? JSON.parse(text) : settings;
        for (var prop in settings) {
            var elm = byId(prop.charAt(0) === "_" ? prop.slice(1) : prop);
            if (elm) {
                if (obj.hasOwnProperty(prop)) settings[prop] = obj[prop];
                initSetting(prop, elm);
            } else
                log.info(
                    "setting " + prop + " not loaded because there is no element for it."
                );
        }
        window.keymap = localStorage.getItem("keybinds") ?
            JSON.parse(localStorage.getItem("keybinds")) :
            window.keymap;
    }

    function storeSettings() {
        localStorage.setItem("settings", JSON.stringify(settings));
        localStorage.setItem("keybinds", JSON.stringify(window.keymap));
    }

    function request(url, callback, method, type) {
        if (!method) method = "GET";
        if (!type) type = "text";
        var req = new XMLHttpRequest();
        req.onload = function() {
            callback(this.response);
        };
        req.open(method, url);
        req.responseType = type;
        req.send();
    }

    function buildGallery() {
        byId(
            "gallery-body"
        ).innerHTML = `<div id="gallery" onclick="if (event.target == this) this.hide()" style="transition: opacity 0.5s ease 0s; opacity: 1;">
        <div id="gallery-content">
            <div id="gallery-header">Skins</div>
            <div id="gallery-body">
                <ul id="skinsUL">
                    <li class="skin" onclick="changeSkin('Kraken')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Kraken.png" style="border: 3px solid #004f0f;">
                    </li>
                    <li class="skin" onclick="changeSkin('T-Rex')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/T-Rex.png" style="border: 3px solid #7c0001">
                    </li>
                    <li class="skin" onclick="changeSkin('Raptor')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Raptor.png" style="border: 3px solid #004f0f">
                    </li>
                    <li class="skin" onclick="changeSkin('Mammoth')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Mammoth.png" style="border: 3px solid #654217">
                    </li>
                    <li class="skin" onclick="changeSkin('Shark')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Shark.png" style="border: 3px solid #002c6c">
                    </li>
					<li class="skin" onclick="changeSkin('Crocodile')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Crocodile.png" style="border: 3px solid #004f0f">
					</li>
					<li class="skin" onclick="changeSkin('Lion')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Lion.png" style="border: 3px solid #654217">
					</li>
					<li class="skin" onclick="changeSkin('Panther')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Panther.png" style="border: 3px solid #000000">
					</li>
					<li class="skin" onclick="changeSkin('Cougar')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Cougar.png" style="border: 3px solid #7c0001">
					</li>
					<li class="skin" onclick="changeSkin('Bear')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Bear.png" style="border: 3px solid #002c6c">
					</li>
					<li class="skin" onclick="changeSkin('Sumo')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Sumo.png" style="border: 3px solid #7c0001">
					</li>
					<li class="skin" onclick="changeSkin('Hunter')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Hunter.png" style="border: 3px solid #004f0f">
					</li>
					<li class="skin" onclick="changeSkin('Coyote')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Coyote.png" style="border: 3px solid #654217">
					</li>
					<li class="skin" onclick="changeSkin('Fox')"><img class="circular" src="https://configs-web.agario.miniclippt.com/live/v15/10122/Fox.png" style="border: 3px solid #002c6c">
					</li>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
    }

    function showYoutuberSkins() {
        var c = "";
        var sortedKeys = Object.keys(ytknownSkins).sort();
        for (var i = 0; i < sortedKeys.length; i++) {
            var name = sortedKeys[i];
            c += '<li class="skin" onclick="changeSkin(\'' + name + "')\">";
            c += '<img class="circular" src="./youtuberskins/' + name + '.png">';
            c += '<h4 class="skinName">' + name + "</h4>";
            c += "</li>";
        }
        byId("gallery-yt-body").innerHTML = '<ul id="skinsUL">' + c + "</ul>";
    }

    function buildSettingsWindow() {
        // byId("settings-window").innerHTML = '<label class="control control-checkbox">Show skins<input id="showSkins" type="checkbox" /><div class="control_indicator"></div></label>';
    }

    function drawChat() {
        if (chat.messages.length === 0 && settings.showChat)
            return (chat.visible = false);
        chat.visible = true;
        var canvas = chat.canvas;
        var ctx = canvas.getContext("2d");
        var latestMessages = chat.messages.slice(-10);
        var lines = [];
        for (var i = 0, len = latestMessages.length; i < len; i++)
            lines.push([{
                    text: latestMessages[i].name,
                    color: latestMessages[i].color,
                },
                {
                    text: " " + latestMessages[i].message,
                    color: settings.darkTheme ? "#FFF" : "#000",
                },
            ]);
        var width = 0;
        var height = 400;
        for (var i = 0; i < len; i++) {
            var thisLineWidth = 0;
            var complexes = lines[i];
            for (var j = 0; j < complexes.length; j++) {
                ctx.font = "18px Ubuntu";
                complexes[j].width = ctx.measureText(complexes[j].text).width;
                thisLineWidth += complexes[j].width;
            }
            width = Math.max(thisLineWidth, width);
        }
        canvas.width = width;
        canvas.height = height;
        for (var i = 0; i < len; i++) {
            width = 0;
            var complexes = lines[i];
            for (var j = 0; j < complexes.length; j++) {
                ctx.font = "18px Ubuntu";
                ctx.fillStyle = complexes[j].color;
                ctx.fillText(complexes[j].text, width, 20 * (1 + i));
                width += complexes[j].width;
            }
        }
    }

    function drawStats() {
        if (!stats.info) return (stats.visible = false);
        stats.visible = true;
        var canvas = stats.canvas;
        var ctx = canvas.getContext("2d");
        ctx.font = "14px Ubuntu";
        var width = 0;
        let rows;
        if (!rows) return;
        for (var i = 0; i < rows.length; i++)
            width = Math.max(width, 2 + ctx.measureText(rows[i]).width + 2);
        canvas.width = width;
        canvas.height = rows.length * (14 + 2);
        ctx.font = "14px Ubuntu";
        ctx.fillStyle = settings.darkTheme ? "#AAA" : "#555";
        ctx.textBaseline = "top";
        for (var i = 0; i < rows.length; i++)
            ctx.fillText(rows[i], 2, -1 + i * (14 + 2));
        ctx.textBaseline = "bottom";
        for (var i = 0; i < rows.length; i++)
            ctx.fillText(rows[i], 2, -1 + i * (14 + 2));
    }

    function drawPosition() {
        if (border.centerX !== 0 || border.centerY !== 0 || !settings.showPosition)
            return;
        var width = 200 * (border.width / border.height);
        var height = 40 * (border.height / border.width);

        var beginX = mainCanvas.width / camera.viewportScale - width;
        var beginY = mainCanvas.height / camera.viewportScale - height;

        if (settings.showMinimap) {
            mainCtx.font = "15px Ubuntu";
            beginX += width / 2 - 1;
            beginY = beginY - (194 * border.height) / border.width;
            mainCtx.textAlign = "right";
            mainCtx.fillStyle = settings.darkTheme ? "#AAA" : "#555";
            mainCtx.fillText(
                "X: " + ~~camera.x + ", Y: " + ~~camera.y,
                beginX + width / 2,
                beginY + height / 2
            );
        } else {
            mainCtx.fillStyle = "#000";
            mainCtx.globalAlpha = 0.4;
            mainCtx.fillRect(beginX, beginY, width, height);
            mainCtx.globalAlpha = 1;
            drawRaw(
                mainCtx,
                beginX + width / 2,
                beginY + height / 2,
                "X: " + ~~camera.x + ", Y: " + ~~camera.y
            );
        }
    }

    function prettyPrintTime(seconds) {
        seconds = ~~seconds;
        var minutes = ~~(seconds / 60);
        if (minutes < 1) return "<1 min";
        var hours = ~~(minutes / 60);
        if (hours < 1) return minutes + "min";
        var days = ~~(hours / 24);
        if (days < 1) return hours + "h";
        return days + "d";
    }

    function drawLeaderboard() {
        if (leaderboard.type === NaN) return (leaderboard.visible = false);
        if (!settings.showNames || leaderboard.items.length === 0)
            return (leaderboard.visible = false);
        leaderboard.visible = true;
        var canvas = leaderboard.canvas;
        var ctx = canvas.getContext("2d");
        var len = leaderboard.items.length;

        canvas.width = 250;
        canvas.height = leaderboard.type !== "pie" ? 75 + 24 * len : 240;

        ctx.globalAlpha = 0.4;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 250, canvas.height);

        ctx.globalAlpha = 1;
        ctx.fillStyle = "#FFF";
        ctx.font = "30px Ubuntu";
        ctx.fillText(
            "Leaderboard",
            128 - ctx.measureText("Leaderboard").width / 2,
            40,
        );

        if (leaderboard.type === "pie") {
            var last = 0;
            for (var i = 0; i < len; i++) {
                ctx.fillStyle = leaderboard.teams[i];
                ctx.beginPath();
                ctx.moveTo(100, 140);
                ctx.arc(
                    100,
                    140,
                    80,
                    last,
                    (last += leaderboard.items[i] * PI_2),
                    false
                );
                ctx.closePath();
                ctx.fill();
            }
        } else {
            var text,
                isMe = false,
                w,
                start;
            ctx.font = "20px Ubuntu";
            for (var i = 0; i < len; i++) {
                if (leaderboard.type === "text") text = leaderboard.items[i];
                else
                    (text = leaderboard.items[i].name), (isMe = leaderboard.items[i].me);

                ctx.fillStyle = isMe ? "#FAA" : "#FFF";
                if (leaderboard.type === "ffa") text = i + 1 + ". " + text;
                ctx.fillText(text, 15, 70 + 24 * i);
            }
        }
    }

    function drawGrid() {
        mainCtx.save();
        mainCtx.lineWidth = 1;
        mainCtx.strokeStyle = settings.darkTheme ? "#AAA" : "#000";
        mainCtx.globalAlpha = 0.2;
        var step = 50,
            i,
            cW = mainCanvas.width / camera.scale,
            cH = mainCanvas.height / camera.scale,
            startLeft = (-camera.x + cW / 2) % step,
            startTop = (-camera.y + cH / 2) % step;

        scaleForth(mainCtx);
        mainCtx.beginPath();
        for (i = startLeft; i < cW; i += step) {
            mainCtx.moveTo(i, 0);
            mainCtx.lineTo(i, cH);
        }
        for (i = startTop; i < cH; i += step) {
            mainCtx.moveTo(0, i);
            mainCtx.lineTo(cW, i);
        }
        mainCtx.stroke();
        mainCtx.restore();
    }

    function drawBackgroundSectors() {
        if (border === undefined || border.width === undefined) return;
        mainCtx.save();

        var sectorCount = 5;
        var sectorNames = ["ABCDE", "12345"];
        var w = border.width / sectorCount;
        var h = border.height / sectorCount;

        toCamera(mainCtx);
        mainCtx.fillStyle = settings.darkTheme ? "#666" : "#DDD";
        mainCtx.textBaseline = "middle";
        mainCtx.textAlign = "center";
        mainCtx.font = ((w / 3) | 0) + "px Ubuntu";

        for (var y = 0; y < sectorCount; ++y) {
            for (var x = 0; x < sectorCount; ++x) {
                var str = sectorNames[0][x] + sectorNames[1][y];
                var dx = (x + 0.5) * w + border.left;
                var dy = (y + 0.5) * h + border.top;
                mainCtx.fillText(str, dx, dy);
            }
        }
        mainCtx.restore();
    }

    function drawMinimap() {
        if (border.centerX !== 0 || border.centerY !== 0 || !settings.showMinimap)
            return;
        mainCtx.save();
        mainCtx.resetTransform();
        var targetSize = 200;
        var borderAR = border.width / border.height; // aspect ratio
        var width = targetSize * borderAR * camera.viewportScale;
        var height = (targetSize / borderAR) * camera.viewportScale;
        var beginX = mainCanvas.width - width;
        var beginY = mainCanvas.height - height;

        mainCtx.fillStyle = "#000";
        mainCtx.globalAlpha = 0.4;
        mainCtx.fillRect(beginX, beginY, width, height);
        mainCtx.globalAlpha = 1;

        var sectorCount = 5;
        var sectorNames = ["ABCDE", "12345"];
        var sectorWidth = width / sectorCount;
        var sectorHeight = height / sectorCount;
        var sectorNameSize = Math.min(sectorWidth, sectorHeight) / 3;

        mainCtx.fillStyle = settings.darkTheme ? "#666" : "#DDD";
        mainCtx.textBaseline = "middle";
        mainCtx.textAlign = "center";
        mainCtx.font = sectorNameSize + "px Ubuntu";

        for (var i = 0; i < sectorCount; i++) {
            var x = (i + 0.5) * sectorWidth;
            for (var j = 0; j < sectorCount; j++) {
                var y = (j + 0.5) * sectorHeight;
                mainCtx.fillText(
                    sectorNames[0][i] + sectorNames[1][j],
                    beginX + x,
                    beginY + y
                );
            }
        }

        var xScaler = width / border.width;
        var yScaler = height / border.height;
        var halfWidth = border.width / 2;
        var halfHeight = border.height / 2;
        var myPosX = beginX + (camera.x + halfWidth) * xScaler;
        var myPosY = beginY + (camera.y + halfHeight) * yScaler;

        var xIndex = ((myPosX - beginX) / sectorWidth) | 0;
        var yIndex = ((myPosY - beginY) / sectorHeight) | 0;
        var lightX = beginX + xIndex * sectorWidth;
        var lightY = beginY + yIndex * sectorHeight;
        mainCtx.fillStyle = "yellow";
        mainCtx.globalAlpha = 0.3;
        mainCtx.fillRect(lightX, lightY, sectorWidth, sectorHeight);
        mainCtx.globalAlpha = 1;

        mainCtx.beginPath();
        if (cells.mine.length) {
            for (var i = 0; i < cells.mine.length; i++) {
                var cell = cells.byId[cells.mine[i]];
                if (cell) {
                    mainCtx.fillStyle = cell.color; // repeat assignment of same color is OK
                    var x = beginX + (cell.x + halfWidth) * xScaler;
                    var y = beginY + (cell.y + halfHeight) * yScaler;
                    var r = (Math.max(cell.s, 200) * (xScaler + yScaler)) / 2;
                    mainCtx.moveTo(x + r, y);
                    mainCtx.arc(x, y, r, 0, PI_2);
                }
            }
        } else {
            mainCtx.fillStyle = "#FAA";
            mainCtx.arc(myPosX, myPosY, 5, 0, PI_2);
        }
        mainCtx.fill();

        // draw name above user's pos if they have a cell on the screen
        var cell = null;
        for (var i = 0, l = cells.mine.length; i < l; i++)
            if (cells.byId.hasOwnProperty(cells.mine[i])) {
                cell = cells.byId[cells.mine[i]];
                break;
            }
        if (cell !== null) {
            mainCtx.fillStyle = settings.darkTheme ? "#DDD" : "#222";
            var textSize = sectorNameSize;
            mainCtx.font = textSize + "px Ubuntu";
            mainCtx.fillText(
                cell.name || EMPTY_NAME,
                myPosX,
                myPosY - 7 - textSize / 1
            );
        }

        mainCtx.restore();
    }

    function drawBorders() {
        if (!settings.showBorder) return;
        mainCtx.lineWidth = 7;
        mainCtx.lineCap = "round";
        mainCtx.lineJoin = "round";
        mainCtx.beginPath();
        if (settings.showMapBorder) {
            mainCtx.strokeStyle = "#0000ff";

            mainCtx.moveTo(border.left, border.top);
            mainCtx.lineTo(border.right, border.top);
            mainCtx.lineTo(border.right, border.bottom);
            mainCtx.lineTo(border.left, border.bottom);
        }
        mainCtx.closePath();
        mainCtx.stroke();
    }

    function drawGame() {
        stats.fps +=
            (1000 / Math.max(Date.now() - syncAppStamp, 1) - stats.fps) / 10;
        syncAppStamp = Date.now();

        var drawList = cells.list.slice(0).sort(cellSort);
        for (var i = 0, l = drawList.length; i < l; i++)
            drawList[i].update(syncAppStamp);
        cameraUpdate();
        if (settings.jellyPhysics) {
            updateQuadtree();
            for (var i = 0, l = drawList.length; i < l; ++i) {
                var cell = drawList[i];
                cell.updateNumPoints();
                cell.movePoints();
            }
        }

        mainCtx.save();

        mainCtx.fillStyle = settings.darkTheme ? "#111" : "#F2FBFF";
        mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        if (settings.showGrid) drawGrid();
        if (settings.backgroundSectors) drawBackgroundSectors();

        toCamera(mainCtx);
        drawBorders();

        for (var i = 0, l = drawList.length; i < l; i++) drawList[i].draw(mainCtx);

        fromCamera(mainCtx);
        quadtree = null;
        mainCtx.scale(camera.viewportScale, camera.viewportScale);

        var height = 1015;
        mainCtx.fillStyle = settings.darkTheme ? "#FFF" : "#000";
        mainCtx.textBaseline = "top";
        var partyCode = ""
        if (window.location.hash) partyCode = " | Party: " + window.location.hash.substring(1);
        if (!isNaN(stats.score)) {
            mainCtx.font = "30px Ubuntu";
            mainCtx.fillText(
                " Score: " + stats.maxScore + " | Mass: " + stats.score + `${partyCode}`,
                2,
                height
            );
            height += 30;
        }
        mainCtx.font = "20px Ubuntu";

        if (stats.visible) mainCtx.drawImage(stats.canvas, 2, height);
        if (leaderboard.visible)
            mainCtx.drawImage(
                leaderboard.canvas,
                mainCanvas.width / camera.viewportScale - 10 - leaderboard.canvas.width,
                10
            );
        if (settings.showChat && (chat.visible || isTyping)) {
            // mainCtx.globalAlpha = isTyping ? 1 : Math.max(1000 - syncAppStamp + chat.waitUntil, 0) / 1000;
            mainCtx.textBaseline = "bottom";
            mainCtx.drawImage(
                chat.canvas,
                3 / camera.viewportScale,
                // 5 / camera.viewportScale,      - old value
                chat.canvas.height / camera.viewportScale - chat.canvas.height
                //(mainCanvas.height - 10) / camera.viewportScale - chat.canvas.height - old value
            );
            mainCtx.globalAlpha = 1;
        }
        drawMinimap();
        drawPosition();

        mainCtx.restore();

        if (minionControlled) {
            mainCtx.save();
            mainCtx.font = "12px Ubuntu";
            mainCtx.textAlign = "center";
            mainCtx.textBaseline = "hanging";
            mainCtx.fillStyle = "#eea236";
            var text = "You are controlling a minion, press Q to switch back.";
            mainCtx.fillText(text, mainCanvas.width / 2, 5);
            mainCtx.restore();
        }

        cacheCleanup();
        window.requestAnimationFrame(drawGame);
    }

    function cellSort(a, b) {
        return a.s === b.s ? a.id - b.id : a.s - b.s;
    }

    function cameraUpdate() {
        var myCells = [];
        for (var i = 0; i < cells.mine.length; i++)
            if (cells.byId.hasOwnProperty(cells.mine[i]))
                myCells.push(cells.byId[cells.mine[i]]);
        if (myCells.length > 0) {
            var x = 0,
                y = 0,
                s = 0,
                score = 0;
            for (var i = 0, l = myCells.length; i < l; i++) {
                var cell = myCells[i];
                score += ~~((cell.ns * cell.ns) / 100);
                x += cell.x;
                y += cell.y;
                s += cell.s;
            }
            camera.target.x = x / l;
            camera.target.y = y / l;
            camera.sizeScale = Math.pow(Math.min(64 / s, 1), 0.4);
            camera.target.scale = camera.sizeScale;
            camera.target.scale *= camera.viewportScale * camera.userZoom;
            camera.x = (camera.target.x + camera.x) / 2;
            camera.y = (camera.target.y + camera.y) / 2;
            stats.score = score;
            stats.maxScore = Math.max(stats.maxScore, score);
        } else {
            stats.score = NaN;
            stats.maxScore = 0;
            camera.x += (camera.target.x - camera.x) / 20;
            camera.y += (camera.target.y - camera.y) / 20;
        }
        camera.scale += (camera.target.scale - camera.scale) / 9;
    }

    function sqDist(a, b) {
        return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
    }

    function updateQuadtree() {
        var w = 1920 / camera.sizeScale;
        var h = 1080 / camera.sizeScale;
        var x = camera.x - w / 2;
        var y = camera.y - h / 2;
        quadtree = new PointQuadTree(x, y, w, h, QUADTREE_MAX_POINTS);
        for (var i = 0; i < cells.list.length; ++i) {
            var cell = cells.list[i];
            for (var n = 0; n < cell.points.length; ++n) {
                quadtree.insert(cell.points[n]);
            }
        }
    }

    /* function UpdateScore() {
                                                                                                                                                                                                                                                                      let levelMultiplier = 9500;
                                                                                                                                                                                                                                                                      let level = localStorage.level;
                                                                                                                                                                                                                                                                      if (!localStorage.getItem('allTimeScore')) localStorage.allTimeScore = 0;
                                                                                                                                                                                                                                                                      if (!localStorage.getItem('level')) localStorage.level = 1;
                                                                                                                                                                                                                                                                      if (!localStorage.getItem('levelUpScore')) localStorage.levelUpScore = 0;
                                                                                                                                                                                                                                                                      let lvlupFormula = (levelMultiplier * (parseInt(localStorage.getItem('level')) + 1));
                                                                                                                                                                                                                                                                      if (localStorage.levelUpScore > lvlupFormula) localStorage.level++;
                                                                                                                                                                                                                                                                      document.getElementById('displayScore').innerHTML=`Latest Score: ${stats.maxScore}`;
                                                                                                                                                                                                                                                                      let savedscore = localStorage.getItem('levelUpScore');
                                                                                                                                                                                                                                                                      let ne
																																																																	  
																																																																	  core = parseInt(localStorage.getItem('levelUpScore')) + stats.maxScore;
                                                                                                                                                                                                                                                                      localStorage.allTimeScore = newscore; 
                                                                                                                                                                                                                                                                      document.getElementById('displayLevel').innerHTML=`LEVEL ${parseInt(localStorage.getItem('level'))} - ${parseInt(savedscore)} / ${lvlupFormula} XP`;
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                  function UpdateLevel() {
                                                                                                                                                                                                                                                                      document.getElementById('displayLevel').innerHTML=`LEVEL ${parseInt(localStorage.getItem('level'))} - ${parseInt(localStorage.getItem('allTimeScore'))} / ${(2500 * ((parseInt(localStorage.getItem('level')) + 1)))} XP`;
                                                                                                                                                                                                                                                                  } */
    function CheckSystem() {
        if (!localStorage.getItem("allTimeScore")) localStorage.allTimeScore = 0;
        if (!localStorage.getItem("level")) localStorage.level = 1;
        if (!localStorage.getItem("levelUpScore")) localStorage.levelUpScore = 1;
    }

    function ResetLevelUpScore() {
        function entierAleatoire(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var entier = entierAleatoire(1, 1000);
        localStorage.levelUpScore = entier;
    }

    function UpdateScore() {
        document.getElementById(
            "displayScore"
        ).innerHTML = `Latest Score: ${stats.maxScore}`;
        CheckSystem();

        let requiredscore = 2900;
        let score = Math.round(stats.maxScore / 2);
        let alltimescore = localStorage.getItem("allTimeScore");
        let level = localStorage.getItem("level");
        let levelUpScore = localStorage.getItem("levelUpScore");

        let nextlevel = requiredscore * 1 * Math.round((level * level) / 2);

        let remainingxp = nextlevel - levelUpScore;
        let actualxp = nextlevel - remainingxp;

        localStorage.allTimeScore = parseInt(alltimescore) + score;
        localStorage.levelUpScore = parseInt(levelUpScore) + score;

        if (levelUpScore > nextlevel)
            localStorage.level++,
            ResetLevelUpScore(),
            (levelUpScore = nextlevel),
            (level = parseInt(level) + 1);

        level = localStorage.getItem("level");
        levelUpScore = localStorage.getItem("levelUpScore");
        remainingxp = nextlevel - levelUpScore;
        if (levelUpScore > nextlevel) levelUpScore = nextlevel;
        nextlevel = requiredscore * 1 * Math.round((level * level) / 2);
        if (level < 10) level = ` ${level}`;

        let percentage = Math.floor((levelUpScore * 100) / nextlevel);
        document.getElementById(
            "displayLevel"
        ).innerHTML = `<b>${levelUpScore} / ${nextlevel}</b> XP (<b>${percentage}</b>%)`;
        document.getElementById("level").innerHTML = `${level}`;

        // Handling xp bar
        var i = 0;

        function move() {
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 10);

                function frame() {
                    if (width >= percentage) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
        }
        move();
    }

    function Cell(id, x, y, s, name, color, skin, flags) {
        this.id = id;
        this.x = this.nx = this.ox = x;
        this.y = this.ny = this.oy = y;
        this.s = this.ns = this.os = s;
        this.setColor(color);
        this.setName(name);
        this.setSkin(skin);
        this.jagged = flags & 0x01 || flags & 0x10;
        this.ejected = !!(flags & 0x20);
        this.born = syncUpdStamp;
        this.points = [];
        this.pointsVel = [];
    }
    Cell.prototype = {
        destroyed: false,
        id: 0,
        diedBy: 0,
        ox: 0,
        x: 0,
        nx: 0,
        oy: 0,
        y: 0,
        ny: 0,
        os: 0,
        oos: 0,
        s: 0,
        ns: 0,
        viewRange: 0,
        nameSize: 0,
        drawNameSize: 0,
        color: "#FFF",
        sColor: "#E5E5E5",
        skin: null,
        jagged: false,
        born: null,
        updated: null,
        dead: null, // timestamps
        destroy: function(killerId) {
            delete cells.byId[this.id];
            if (cells.mine.remove(this.id) && cells.mine.length === 0)
                UpdateScore(), showESCOverlay(), refreshAds();
            this.destroyed = true;
            this.dead = syncUpdStamp;
            if (killerId && !this.diedBy) {
                this.diedBy = killerId;
                this.updated = syncUpdStamp;
            }
        },
        update: function(relativeTime) {
            var dt = (relativeTime - this.updated) / settings.animationDelay;
            dt = Math.max(Math.min(dt, 1), 0);
            if (this.destroyed && Date.now() > this.dead + 200)
                cells.list.remove(this);
            else if (this.diedBy && cells.byId.hasOwnProperty(this.diedBy)) {
                this.nx = cells.byId[this.diedBy].x;
                this.ny = cells.byId[this.diedBy].y;
            }
            this.x = this.ox + (this.nx - this.ox) * dt;
            this.y = this.oy + (this.ny - this.oy) * dt;
            this.s = this.os + (this.ns - this.os) * dt;
            this.nameSize = ~~(~~Math.max(~~(0.3 * this.ns), 24) / 3) * 5;
            this.drawNameSize = ~~(~~Math.max(~~(0.3 * this.s), 24) / 3) * 5;
        },
        updateNumPoints: function() {
            var numPoints = camera.scale >= 0.19 ? (this.s * camera.scale) | 0 : 1;
            numPoints = Math.max(numPoints, CELL_POINTS_MIN);
            numPoints = Math.min(numPoints, CELL_POINTS_MAX);
            if (this.jagged) numPoints = VIRUS_POINTS;
            while (this.points.length > numPoints) {
                var i = (Math.random() * this.points.length) | 0;
                this.points.splice(i, 1);
                this.pointsVel.splice(i, 1);
            }
            if (this.points.length == 0 && numPoints != 0) {
                this.points.push({
                    x: this.x,
                    y: this.y,
                    rl: this.s,
                    parent: this,
                });
                this.pointsVel.push(Math.random() - 0.5);
            }
            while (this.points.length < numPoints) {
                var i = (Math.random() * this.points.length) | 0;
                var point = this.points[i];
                var vel = this.pointsVel[i];
                this.points.splice(i, 0, {
                    x: point.x,
                    y: point.y,
                    rl: point.rl,
                    parent: this,
                });
                this.pointsVel.splice(i, 0, vel);
            }
        },
        movePoints: function() {
            var pointsVel = this.pointsVel.slice();
            var len = this.points.length;
            for (var i = 0; i < len; ++i) {
                var prevVel = pointsVel[(i - 1 + len) % len];
                var nextVel = pointsVel[(i + 1) % len];
                var newVel = (this.pointsVel[i] + Math.random() - 0.5) * 0.7;
                newVel = Math.max(Math.min(newVel, 10), -10);
                this.pointsVel[i] = (prevVel + nextVel + 8 * newVel) / 10;
            }
            for (var i = 0; i < len; ++i) {
                var curP = this.points[i];
                var curRl = curP.rl;
                var prevRl = this.points[(i - 1 + len) % len].rl;
                var nextRl = this.points[(i + 1) % len].rl;
                var self = this;
                var affected = quadtree.some({
                        x: curP.x - 5,
                        y: curP.y - 5,
                        w: 10,
                        h: 10,
                    },
                    function(item) {
                        return item.parent != self && sqDist(item, curP) <= 25;
                    }
                );
                if (
                    !affected &&
                    (curP.x < border.left ||
                        curP.y < border.top ||
                        curP.x > border.right ||
                        curP.y > border.bottom)
                ) {
                    affected = true;
                }
                if (affected) {
                    this.pointsVel[i] = Math.min(this.pointsVel[i], 0);
                    this.pointsVel[i] -= 1;
                }
                curRl += this.pointsVel[i] * 2;
                curRl = Math.max(curRl, 0);
                curRl = (9 * curRl + this.s) / 10;
                curP.rl = (prevRl + nextRl + 8 * curRl) / 10;

                var angle = (2 * Math.PI * i) / len;
                var rl = curP.rl;
                if (this.jagged && i % 2 == 0) {
                    rl += 5;
                }
                curP.x = this.x + Math.cos(angle) * rl;
                curP.y = this.y + Math.sin(angle) * rl;
            }
        },
        setName: function(name) {
            this.name = name;
        },
        setSkin: function(value) {
            this.skin =
                (value && value[0] === "%" ? value.slice(1) : value) || this.skin;
            if (
                this.skin === null ||
                !knownSkins.hasOwnProperty(this.skin) ||
                loadedSkins[this.skin]
            )
                return;
            loadedSkins[this.skin] = new Image();
            loadedSkins[this.skin].src = SKIN_URL + this.skin + ".png";
        },
        setytskin: function(value) {
            this.skin =
                (value && value[0] === "%" ? value.slice(1) : value) || this.skin;
            if (
                this.skin === null ||
                !ytknownSkins.hasOwnProperty(this.skin) ||
                loadedytSkins[this.skin]
            )
                return;
            loadedytSkins[this.skin] = new Image();
            loadedytSkins[this.skin].src = YT_SKIN + this.skin + ".png";
        },
        setColor: function(value) {
            if (!value) {
                log.warn("got no color");
                return;
            }
            this.color = value;
            this.sColor = darkenColor(value);
        },
        draw: function(ctx) {
            ctx.save();
            this.drawShape(ctx);
            this.drawText(ctx);
            ctx.restore();
        },

        /*          if(window.location.hash) {
                let partyCode = window.location.hash.substring(1);
                let isParty = true;
                let ringColor = "#ffae00";
                // console.log(`Party Code: ${partyCode}`)

                window.location.hash ? "#ffae00" : 

            } */

        drawShape: function(ctx) {
            ctx.fillStyle = settings.showColor ? this.color : Cell.prototype.color;
            ctx.strokeStyle = settings.showColor ?
                settings.showSkins && this.skin && this.skin != null ?
                skincolor[this.skin] :
                this.sColor :
                Cell.prototype.sColor;
            //if (window.location.hash && cells.mine.indexOf(this.id) !== -1) ctx.strokeStyle = "#ffae00"
            if (ctx.strokeStyle == "#000000") ctx.strokeStyle = this.sColor;
            ctx.lineWidth = Math.max(~~(this.s / 0), 0);
            if (this.s > 20) this.s -= ctx.lineWidth / 2;

            let biggestPointValue = 0;

            ctx.beginPath();
            if (this.jagged) ctx.lineJoin = "miter";
            if (settings.jellyPhysics && this.points.length) {
                var point = this.points[0];

                if (camera.scale >= 0.2) {
                    ctx.moveTo(point.x, point.y);
                    for (var i = 0; i < this.points.length; ++i) {
                        var point = this.points[i];
                        ctx.lineTo(point.x, point.y);
                        if (this.points[i].rl > biggestPointValue)
                            biggestPointValue = this.points[i].rl;
                    }
                } else {
                    ctx.arc(this.x, this.y, point.rl, 0, PI_2, false);
                    biggestPointValue = this.points[0].rl;
                }
                // ctx.arc(this.x, this.y, point.rl, 0, PI_2, false);

            } else if (this.jagged) {
                var pointCount = 120;
                var incremental = PI_2 / pointCount;
                ctx.moveTo(this.x, this.y + this.s + 3);
                for (var i = 1; i < pointCount; i++) {
                    var angle = i * incremental;
                    var dist = this.s - 3 + (i % 2 === 0) * 6;
                    ctx.lineTo(
                        this.x + dist * Math.sin(angle),
                        this.y + dist * Math.cos(angle)
                    );
                }
                ctx.lineTo(this.x, this.y + this.s + 3);
            } else ctx.arc(this.x, this.y, this.s, 0, PI_2, false);
            ctx.closePath();

            if (this.destroyed)
                ctx.globalAlpha = Math.max(120 - Date.now() + this.dead, 0) / 120;
            else ctx.globalAlpha = Math.min(Date.now() - this.born, 120) / 120;

            if (settings.fillSkin) ctx.fill();
            if (settings.showSkins && this.skin) {
                var skin = loadedSkins[this.skin] || loadedytSkins[this.skin];
                if (skin && skin.complete && skin.width && skin.height) {
                    ctx.save();
                    ctx.clip();
                    scaleBack(ctx);
                    var sScaled =
                        (settings.jellyPhysics ? biggestPointValue : this.s) * camera.scale;
                    ctx.drawImage(
                        skin,
                        this.x * camera.scale - sScaled,
                        this.y * camera.scale - sScaled,
                        (sScaled *= 2),
                        sScaled
                    );
                    scaleForth(ctx);
                    ctx.restore();
                }
            } else if (!settings.fillSkin) ctx.fill();
            if (this.s > 20) {
                ctx.stroke();
                this.s += ctx.lineWidth / 2;
            }
        },
        drawText: function(ctx) {
            if (this.s < 20 || this.jagged) return;
            var y = this.y;
            let range = document.getElementById('drawNamesDistance').value || 1;
            if (this.name && settings.showNames && this.viewRange > range) {
                // console.log(drawNamesDistance);
                drawText(
                    ctx,
                    false,
                    this.x,
                    this.y,
                    this.nameSize * (2 - 0.1 * this.name.length),
                    this.drawNameSize * (2 - 0.1 * this.name.length),
                    this.name
                );
                y += Math.max(
                    this.s / 4.5,
                    (this.nameSize * (2 - 0.08 * this.name.length)) / 1.5
                );
            }
            if (
                settings.showMass &&
                (cells.mine.indexOf(this.id) !== -1 || cells.mine.length === 0) &&
                this.viewRange > range
            ) {
                var mass = (~~((this.s * this.s) / 100)).toString();
                drawText(
                    ctx,
                    true,
                    this.x,
                    y,
                    this.nameSize / 2,
                    this.drawNameSize / 2,
                    mass
                );
            }
        },
    };

    function cacheCleanup() {
        for (var i in cachedNames) {
            for (var j in cachedNames[i])
                if (syncAppStamp - cachedNames[i][j].accessTime >= 5000)
                    delete cachedNames[i][j];
            if (cachedNames[i] === {}) delete cachedNames[i];
        }
        for (var i in cachedMass)
            if (syncAppStamp - cachedMass[i].accessTime >= 5000) delete cachedMass[i];
    }

    // 2-var draw-stay cache
    var cachedNames = {};
    var cachedMass = {};

    function drawTextOnto(canvas, ctx, text, size) {
        ctx.font = size + "px Ubuntu";
        ctx.lineWidth = Math.max(~~(size / 10), 2);
        canvas.width = ctx.measureText(text).width + 2 * ctx.lineWidth;
        canvas.height = 4 * size;
        ctx.font = size + "px Ubuntu";
        ctx.lineWidth = Math.max(~~(size / 10), 2);
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";
        ctx.translate(canvas.width / 2, 2 * size);
        ctx.lineWidth !== 1 && ctx.strokeText(text, 0, 0);
        ctx.fillText(text, 0, 0);
    }

    function drawRaw(ctx, x, y, text, size) {
        ctx.font = size + "px Ubuntu";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.lineWidth = Math.max(~~(size / 10), 2);
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";
        ctx.lineWidth !== 1 && ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    function newNameCache(value, size) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        drawTextOnto(canvas, ctx, value, size);

        cachedNames[value] = cachedNames[value] || {};
        cachedNames[value][size] = {
            width: canvas.width,
            height: canvas.height,
            canvas: canvas,
            value: value,
            size: size,
            accessTime: syncAppStamp,
        };
        return cachedNames[value][size];
    }

    function newMassCache(size) {
        var canvases = {
            0: {},
            1: {},
            2: {},
            3: {},
            4: {},
            5: {},
            6: {},
            7: {},
            8: {},
            9: {},
        };
        for (var value in canvases) {
            var canvas = (canvases[value].canvas = document.createElement("canvas"));
            var ctx = canvas.getContext("2d");
            drawTextOnto(canvas, ctx, value, size);
            canvases[value].canvas = canvas;
            canvases[value].width = canvas.width;
            canvases[value].height = canvas.height;
        }
        cachedMass[size] = {
            canvases: canvases,
            size: size,
            lineWidth: Math.max(~~(size / 10), 2),
            accessTime: syncAppStamp,
        };
        return cachedMass[size];
    }

    function toleranceTest(a, b, tolerance) {
        return a - tolerance <= b && b <= a + tolerance;
    }

    function getNameCache(value, size) {
        if (!cachedNames[value]) return newNameCache(value, size);
        var sizes = Object.keys(cachedNames[value]);
        for (var i = 0, l = sizes.length; i < l; i++)
            if (toleranceTest(size, sizes[i], size / 4))
                return cachedNames[value][sizes[i]];
        return newNameCache(value, size);
    }

    function getMassCache(size) {
        var sizes = Object.keys(cachedMass);
        for (var i = 0, l = sizes.length; i < l; i++)
            if (toleranceTest(size, sizes[i], size / 4)) return cachedMass[sizes[i]];
        return newMassCache(size);
    }

    function drawText(ctx, isMass, x, y, size, drawSize, value) {
        ctx.save();
        if (size > 500) return drawRaw(ctx, x, y, value, drawSize);
        ctx.imageSmoothingQuality = "high";
        if (isMass) {
            var cache = getMassCache(size);
            cache.accessTime = syncAppStamp;
            var canvases = cache.canvases;
            var correctionScale = drawSize / cache.size;

            // calculate width
            var width = 0;
            for (var i = 0; i < value.length; i++)
                width += canvases[value[i]].width - 2 * cache.lineWidth;

            ctx.scale(correctionScale, correctionScale);
            x /= correctionScale;
            y /= correctionScale;
            x -= width / 2;
            for (var i = 0; i < value.length; i++) {
                var item = canvases[value[i]];
                ctx.drawImage(item.canvas, x, y - item.height / 2);
                x += item.width - 2 * cache.lineWidth;
            }
        } else {
            var cache = getNameCache(value, size);
            cache.accessTime = syncAppStamp;
            var canvas = cache.canvas;
            var correctionScale = drawSize / cache.size;
            ctx.scale(correctionScale, correctionScale);
            x /= correctionScale;
            y /= correctionScale;
            if (canvas.width > 0 && canvas.height > 0) ctx.drawImage(canvas, x - canvas.width / 2, y - canvas.height / 2);
        }
        ctx.restore();
    }
    const fireIntiligentDouble = () => {
            window.imSolo.doubleSplit = !0;
            window.imSolo.doubleTick = 0;
        },
        fireIntiligentTriple = () => {
            window.imSolo.tripleSplit = !0;
            window.imSolo.tripleTick = 0;
        },
        fireIntiligentQuad = () => {
            window.imSolo.quadSplit = !0;
            window.imSolo.quadTick = 0;
        },
        fireIntiligentQuadBot = () => {
            window.imSolo.quadSplitBot = !0;
            window.imSolo.quadTickBot = 0;
        },
        fireIntiligentDoubleBot = () => {
            window.imSolo.doubleSplitBot = !0;
            window.imSolo.doubleTickBot = 0;
        },
        keydown = (e) => {
            if (keychange != "") {
                keymap[keychange] = e.key.toLowerCase();
                document.querySelector(`p#${keychange}-key`).innerText =
                    keymap[keychange];
                keychange = "";
            }
            var key = e.key.toLowerCase();
            if (IE_KEYS.hasOwnProperty(key)) key = IE_KEYS[key]; // IE fix
            if (key == "enter") {
                if (escOverlayShown || !settings.showChat) return;
                if (isTyping) {
                    chatBox.blur();
                    var text = chatBox.value;
                    if (text.length > 0) sendChat(text);
                    chatBox.value = "";
                } else chatBox.focus();
            } else if (key == "escape") {
                escOverlayShown ? hideESCOverlay() : showESCOverlay();
            } else {
                if (isTyping || escOverlayShown) return;
                //if (pressed.hasOwnProperty(key)) pressed[key] = true;
                //var code = KEY_TO_CODE[key];
                //if (code !== undefined) wsSend(code);
                switch (e.key.toLowerCase()) {
                    case keymap.doubleSplit:
                        fireIntiligentDouble();
                        break;
                    case keymap.split:
                        wsSend(UINT8_CACHE[17]);
                        break;
                    case keymap.tripleSplit:
                        fireIntiligentTriple();
                        break;
                    case keymap.quadSplit:
                        fireIntiligentQuad();
                        break;
                    case keymap.macroFeed:
                        window.imSolo.feed = !0;
                        break;
                    case keymap.minionFeed:
                        window.imSolo.minionFeed = !0;
                        break;
                    case keymap.minionSplit:
                        wsSend(UINT8_CACHE[22]);
                        break;
                    case keymap.minionStop:
                        wsSend(UINT8_CACHE[24]);
                        break;
                    case keymap.minionRoam:
                        wsSend(UINT8_CACHE[25]);
                        break;
                    case keymap.minionDouble:
                        fireIntiligentDoubleBot();
                        //wsSend(UINT8_CACHE[22]);
                        //setTimeout(wsSend(UINT8_CACHE[22]), 30);
                        break;
                    case keymap.minionQuad:
                        fireIntiligentQuadBot();
                        //wsSend(UINT8_CACHE[22]);
                        //setTimeout(wsSend(UINT8_CACHE[22]), 30);
                        //setTimeout(wsSend(UINT8_CACHE[22]), 60);
                        //setTimeout(wsSend(UINT8_CACHE[22]), 90);
                        break;
                }
            }
        },
        // function keydown(event) {
        //     var key = event.key.toLowerCase();
        //     if (IE_KEYS.hasOwnProperty(key)) key = IE_KEYS[key]; // IE fix
        //     if (key == "enter") {
        //         if (escOverlayShown || !settings.showChat) return;
        //         if (isTyping) {
        //             chatBox.blur();
        //             var text = chatBox.value;
        //             if (text.length > 0) sendChat(text);
        //             chatBox.value = "";
        //         } else chatBox.focus();
        //     } else if (pressed[key]) {
        //         return;
        //     } else if (key == "escape") {
        //         pressed[key] = true;
        //         escOverlayShown ? hideESCOverlay() : showESCOverlay();
        //     } else {
        //         if (isTyping || escOverlayShown) return;
        //         if (pressed.hasOwnProperty(key)) pressed[key] = true;
        //         var code = KEY_TO_CODE[key];
        //         if (code !== undefined) wsSend(code);
        //         // if (key == "w") {
        //         //     macroIntervalID = setInterval(function() {
        //         //         wsSend(code);
        //         //     }, macroCooldown);
        //         // }
        //         // if (key == "r") {
        //         //     macroIntervalEJECT = setInterval(function() {
        //         //         wsSend(code);
        //         //     }, macroCooldown);
        //         // }
        //         // if (key == "q") minionControlled = !minionControlled;
        //         // if (key == "shift") {
        //         //     wsSend(UINT8_CACHE[17]);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[17]);
        //         //     }, macroCooldown2);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[17]);
        //         //     }, macroCooldown2 * 2);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[17]);
        //         //     }, macroCooldown2 * 3);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[17]);
        //         //     }, macroCooldown2 * 4);
        //         // }
        //         // if (key == "d") {
        //         //     wsSend(UINT8_CACHE[17]);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[17]);
        //         //     }, macroCooldown3 * 2);
        //         // }

        //         // if (key == "x") {
        //         //     wsSend(UINT8_CACHE[22]);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[22]);
        //         //     }, macroCooldown5 * 2);
        //         // }
        //         // if (key == "c") {
        //         //     wsSend(UINT8_CACHE[22]);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[22]);
        //         //     }, macroCooldown2);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[22]);
        //         //     }, macroCooldown2 * 2);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[22]);
        //         //     }, macroCooldown2 * 3);
        //         //     setTimeout(function() {
        //         //         wsSend(UINT8_CACHE[22]);
        //         //     }, macroCooldown2 * 4);
        //         // }
        //     }
        // }
        keyup = (e) => {
            switch (e.key.toLowerCase()) {
                case keymap.macroFeed:
                    window.imSolo.feed = !1;
                    break;
                case keymap.minionFeed:
                    window.imSolo.minionFeed = !1;
                    break;
            }
        };
    // function keyup(event) {
    //     var key = event.key.toLowerCase();
    //     if (IE_KEYS.hasOwnProperty(key)) key = IE_KEYS[key]; // IE fix
    //     if (pressed.hasOwnProperty(key)) pressed[key] = false;
    //     if (key == "q") wsSend(UINT8_CACHE[19]);
    //     if (key == "w") clearInterval(macroIntervalID);
    //     if (key == "r") clearInterval(macroIntervalEJECT);
    // }

    function handleScroll(event) {
        if (event.target !== mainCanvas) return;
        camera.userZoom *= event.deltaY > 0 ? 0.8 : 1.2;
        camera.userZoom = Math.max(camera.userZoom, settings.moreZoom ? 0.1 : 1);
        camera.userZoom = Math.min(camera.userZoom, 4);
    }
    window.addEventListener("resize", () => {
        document.getElementById("tabs").style = `transform:scale(${
      Math.min(window.innerHeight, window.innerWidth / 2) > 160 &&
      Math.min(window.innerHeight, window.innerWidth / 2) <= 800
        ? 1 - (1 / Math.min(window.innerHeight, window.innerWidth / 2)) * 150
        : Math.min(window.innerHeight, window.innerWidth / 2) > 800
        ? 1
        : 0.3
    });`;
    });

    function init() {
        mainCanvas = document.getElementById("canvas");
        mainCtx = mainCanvas.getContext("2d");
        chatBox = byId("chat_textbox");
        soundsVolume = byId("soundsVolume");
        mainCanvas.focus();
        document.getElementById("tabs").style = `transform:scale(${
      Math.min(window.innerHeight, window.innerWidth / 2) > 160 &&
      Math.min(window.innerHeight, window.innerWidth / 2) <= 800
        ? 1 - (1 / Math.min(window.innerHeight, window.innerWidth / 2)) * 150
        : Math.min(window.innerHeight, window.innerWidth / 2) > 800
        ? 1
        : 0.3
    });`;
        window.keymap = {
            macroFeed: "w",
            doubleSplit: "d",
            tripleSplit: "a",
            quadSplit: "shift",
            split: " ",
            minionSplit: "e",
            minionFeed: "r",
            minionStop: "t",
            minionRoam: "p",
            minionDouble: "c",
            minionQuad: "x",
        };
        loadSettings();
        window.addEventListener("beforeunload", storeSettings);
        document.addEventListener("wheel", handleScroll, {
            passive: true,
        });
        byId("play-btn").addEventListener("click", function() {
            if (settings.skin) {
                sendPlay(settings.nick, settings.skin);
            } else {
                sendPlay(settings.nick);
            }
            hideESCOverlay();
        });
        window.onkeydown = keydown;
        window.onkeyup = keyup;
        chatBox.onblur = function() {
            isTyping = false;
            drawChat();
        };
        chatBox.onfocus = function() {
            isTyping = true;
            drawChat();
        };
        mainCanvas.onmousemove = function(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };
        setInterval(function() {
            sendMouseMove(
                (mouseX - mainCanvas.width / 2) / camera.scale + camera.x,
                (mouseY - mainCanvas.height / 2) / camera.scale + camera.y
            );
        }, 40);
        window.onresize = function() {
            var width = (mainCanvas.width = window.innerWidth);
            var height = (mainCanvas.height = window.innerHeight);
            camera.viewportScale = Math.max(width / 1920, height / 1080);
        };
        window.onresize();
        var mobileStuff = byId("mobileStuff");
        var touchpad = byId("touchpad");
        var touchCircle = byId("touchCircle");
        var touchSize = 0.2;
        var touched = false;
        var touchmove = function(event) {
            var touch = event.touches[0];
            var width = innerWidth * touchSize;
            var height = innerHeight * touchSize;
            if (touch.pageX < width && touch.pageY > innerHeight - height) {
                mouseX =
                    innerWidth / 2 + ((touch.pageX - width / 2) * innerWidth) / width;
                mouseY =
                    innerHeight / 2 +
                    ((touch.pageY - (innerHeight - height / 2)) * innerHeight) / height;
            } else {
                mouseX = touch.pageX;
                mouseY = touch.pageY;
            }
            var r = innerWidth * 0.02;
            touchCircle.style.left = mouseX - r + "px";
            touchCircle.style.top = mouseY - r + "px";
        };
        window.addEventListener("touchmove", touchmove);
        window.addEventListener("touchstart", function(event) {
            if (!touched) {
                touched = true;
                mobileStuff.show();
            }
            if (event.target.id == "splitBtn") {
                wsSend(UINT8_CACHE[17]);
            } else if (event.target.id == "ejectBtn") {
                wsSend(UINT8_CACHE[21]);
            } else if (event.target.id == "splitBotBtn") {
                wsSend(UINT8_CACHE[22]);
            } else if (event.target.id == "ejectBotBtn") {
                wsSend(UINT8_CACHE[23]);
            } else {
                touchmove(event);
            }
            touchCircle.show();
        });
        window.addEventListener("touchend", function(event) {
            if (event.touches.length === 0) {
                touchCircle.hide();
            }
        });

        gameReset();
        showESCOverlay();

        if (window.location.search) {
            var div = /ip=([\w\W]+):([0-9]+)/.exec(window.location.search.slice(1));
            if (div) wsInit(div[1] + ":" + div[2]);
        }
        window.setserver("imsolo.pro:2110");
        window.requestAnimationFrame(drawGame);
        log.info("init done in " + (Date.now() - LOAD_START) + "ms");
        const keyBindList = document.createElement("div");
        keyBindList.id = "keyBindList";
        for (let key in window.keymap) {
            const cKeybind = document.createElement("div");
            cKeybind.classList = "imSoloSettingList";
            cKeybind.innerHTML = `<p id="${key}-key" class="imSoloFirstRowKey">${keymap[key]}</p><p id="${key}-name" class="imSoloSecondRowKey">${key}</p><button id="${key}-button" class="imSoloChangeButton">change</button>`;
            keyBindList.appendChild(cKeybind);
            cKeybind.querySelector(`button#${key}-button`).onclick = () => {
                keychange = key;
            };
        }
        document.getElementById("settings-window-body").appendChild(keyBindList);
        skinHandler();
        if (byId("skin").value)
            document.querySelector("img.currentSkin").src =
            "https://configs-web.agario.miniclippt.com/live/v15/10122/" + byId("skin").value + ".png";
        else {
            document.querySelector("img.currentSkin").src = "./no.png";
        }
        setserver("imsolo.pro:2110");
        location.href.split("?").forEach((e) => {
            if (e.split("=")[0] == "sp") setserver("imsolo.pro:" + e.split("=")[1]);
        });
    }
    window.setserver = function(arg) {
        if (wsUrl === arg) return;
        wsInit(arg);
    };
    window.spectate = function(a) {
        wsSend(UINT8_CACHE[1]);
        stats.maxScore = 0;
        hideESCOverlay();
    };
    window.loadXP = function(a) {
        UpdateScore();
    };
    window.changeSkin = function(a) {
        byId("skin").value = a;
        settings.skin = a;
        byId("gallery").hide();
        byId("gallery-yt").hide();
        window.validateSkin();
    };
    window.openSkinsList = function() {
        if (byId("gallery-body").innerHTML == "") buildGallery();
        else byId("gallery").show(0.5);
    };
    window.showYoutuberSkins = function() {
        if (byId("gallery-yt-body").innerHTML == "") showYoutuberSkins();
        byId("gallery-yt").show(0.5);
    };
    window.showSettings = function() {
        if (byId("settings-window-body").innerHTML == "") buildSettingsWindow();
        byId("settings-window").show(0.5);
    };
    window.setAnimationDelay = function(a) {
        settings.animationDelay = a;
        document.getElementById("animation").innerHTML = "Queue";
        $("#animation").text("Animation Delay: " + a);
    };
    window.setDrawNameDistance = function(a) {
        settings.drawNamesDistance = a;
        document.getElementById("namedistance").innerHTML = "Queue";
        $("#drawNamesDistance").text("Draw Names Distance: " + a);
    };
    window.addEventListener("DOMContentLoaded", init);
})();