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
        Bear: "#75563e",
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
        Cougar: "#ab423d",
        Coyote: "#6f6459",
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
        Fox: "#527c7e",
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
        Hunter: "#7e6348",
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
        Lion: "#95602a",
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
        Panther: "#515c45",
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
        Sumo: "#aa5e53",
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
        SKIN_URL = "./skins/",
        YTSKIN_URL = "./youtuberskins/",
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
            <div id="gallery-header">Free Skins - Gallery</div>
            <button id="gallery-youtubers" class="youtuberSkinsBtn-gallery" onclick="showYoutuberSkins()">Youtuber Skins
                - Gallery</button>
            <div id="gallery-body">
                <ul id="skinsUL">
                    <li class="skin" onclick="changeSkin('Abductor')"><img class="circular" src="./skins/Abductor.png">
                        <h4 class="skinName">Abductor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AboveClouds')"><img class="circular" src="./skins/AboveClouds.png">
                        <h4 class="skinName">AboveClouds</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Acorn')"><img class="circular" src="./skins/Acorn.png">
                        <h4 class="skinName">Acorn</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ada')"><img class="circular" src="./skins/Ada.png">
                        <h4 class="skinName">Ada</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Aer')"><img class="circular" src="./skins/Aer.png">
                        <h4 class="skinName">Aer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AirBag')"><img class="circular" src="./skins/AirBag.png">
                        <h4 class="skinName">AirBag</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Alan')"><img class="circular" src="./skins/Alan.png">
                        <h4 class="skinName">Alan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Alien')"><img class="circular" src="./skins/Alien.png">
                        <h4 class="skinName">Alien</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AlienArtist')"><img class="circular" src="./skins/AlienArtist.png">
                        <h4 class="skinName">AlienArtist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AlienKid')"><img class="circular" src="./skins/AlienKid.png">
                        <h4 class="skinName">AlienKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AlienKidlvl3')"><img class="circular" src="./skins/AlienKidlvl3.png">
                        <h4 class="skinName">AlienKidlvl3</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AlienTree')"><img class="circular" src="./skins/AlienTree.png">
                        <h4 class="skinName">AlienTree</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ApeTalisman')"><img class="circular" src="./skins/ApeTalisman.png">
                        <h4 class="skinName">ApeTalisman</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ApeTalisman(Level3)')"><img class="circular" src="./skins/ApeTalisman(Level3).png">
                        <h4 class="skinName">ApeTalisman(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ApocalypseRider')"><img class="circular" src="./skins/ApocalypseRider.png">
                        <h4 class="skinName">ApocalypseRider</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Apple')"><img class="circular" src="./skins/Apple.png">
                        <h4 class="skinName">Apple</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AppleFace')"><img class="circular" src="./skins/AppleFace.png">
                        <h4 class="skinName">AppleFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Aqua')"><img class="circular" src="./skins/Aqua.png">
                        <h4 class="skinName">Aqua</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Aquarius')"><img class="circular" src="./skins/Aquarius.png">
                        <h4 class="skinName">Aquarius</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Araneaphyx')"><img class="circular" src="./skins/Araneaphyx.png">
                        <h4 class="skinName">Araneaphyx</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Archer')"><img class="circular" src="./skins/Archer.png">
                        <h4 class="skinName">Archer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ArcheryKing')"><img class="circular" src="./skins/ArcheryKing.png">
                        <h4 class="skinName">ArcheryKing</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ares')"><img class="circular" src="./skins/Ares.png">
                        <h4 class="skinName">Ares</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Aries')"><img class="circular" src="./skins/Aries.png">
                        <h4 class="skinName">Aries</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ArkRaider')"><img class="circular" src="./skins/ArkRaider.png">
                        <h4 class="skinName">ArkRaider</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Army')"><img class="circular" src="./skins/Army.png">
                        <h4 class="skinName">Army</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('AstralDeer')"><img class="circular" src="./skins/AstralDeer.png">
                        <h4 class="skinName">AstralDeer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Astronaut')"><img class="circular" src="./skins/Astronaut.png">
                        <h4 class="skinName">Astronaut</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Awkward')"><img class="circular" src="./skins/Awkward.png">
                        <h4 class="skinName">Awkward</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BabyOctopus')"><img class="circular" src="./skins/BabyOctopus.png">
                        <h4 class="skinName">BabyOctopus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BabyOctopus(Level3)')"><img class="circular" src="./skins/BabyOctopus(Level3).png">
                        <h4 class="skinName">BabyOctopus(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Backswing')"><img class="circular" src="./skins/Backswing.png">
                        <h4 class="skinName">Backswing</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BadBoy')"><img class="circular" src="./skins/BadBoy.png">
                        <h4 class="skinName">BadBoy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BadCat')"><img class="circular" src="./skins/BadCat.png">
                        <h4 class="skinName">BadCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BadClover')"><img class="circular" src="./skins/BadClover.png">
                        <h4 class="skinName">BadClover</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BadPigeon')"><img class="circular" src="./skins/BadPigeon.png">
                        <h4 class="skinName">BadPigeon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BadSanta')"><img class="circular" src="./skins/BadSanta.png">
                        <h4 class="skinName">BadSanta</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Badger')"><img class="circular" src="./skins/Badger.png">
                        <h4 class="skinName">Badger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Banana')"><img class="circular" src="./skins/Banana.png">
                        <h4 class="skinName">Banana</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Banshee')"><img class="circular" src="./skins/Banshee.png">
                        <h4 class="skinName">Banshee</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Barbarian')"><img class="circular" src="./skins/Barbarian.png">
                        <h4 class="skinName">Barbarian</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Barbarian(Level3)')"><img class="circular" src="./skins/Barbarian(Level3).png">
                        <h4 class="skinName">Barbarian(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Baseball')"><img class="circular" src="./skins/Baseball.png">
                        <h4 class="skinName">Baseball</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Basilisk')"><img class="circular" src="./skins/Basilisk.png">
                        <h4 class="skinName">Basilisk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Basket')"><img class="circular" src="./skins/Basket.png">
                        <h4 class="skinName">Basket</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Basketball')"><img class="circular" src="./skins/Basketball.png">
                        <h4 class="skinName">Basketball</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BassBomb')"><img class="circular" src="./skins/BassBomb.png">
                        <h4 class="skinName">BassBomb</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bat')"><img class="circular" src="./skins/Bat.png">
                        <h4 class="skinName">Bat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BatBall')"><img class="circular" src="./skins/BatBall.png">
                        <h4 class="skinName">BatBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bear')"><img class="circular" src="./skins/Bear.png">
                        <h4 class="skinName">Bear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BeatBox')"><img class="circular" src="./skins/BeatBox.png">
                        <h4 class="skinName">BeatBox</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Beetoothven')"><img class="circular" src="./skins/Beetoothven.png">
                        <h4 class="skinName">Beetoothven</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Behemoth')"><img class="circular" src="./skins/Behemoth.png">
                        <h4 class="skinName">Behemoth</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Berserker')"><img class="circular" src="./skins/Berserker.png">
                        <h4 class="skinName">Berserker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BestFriends')"><img class="circular" src="./skins/BestFriends.png">
                        <h4 class="skinName">BestFriends</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bewitched')"><img class="circular" src="./skins/Bewitched.png">
                        <h4 class="skinName">Bewitched</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BigBanjo')"><img class="circular" src="./skins/BigBanjo.png">
                        <h4 class="skinName">BigBanjo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BigEyes')"><img class="circular" src="./skins/BigEyes.png">
                        <h4 class="skinName">BigEyes</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Biker')"><img class="circular" src="./skins/Biker.png">
                        <h4 class="skinName">Biker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bionic')"><img class="circular" src="./skins/Bionic.png">
                        <h4 class="skinName">Bionic</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BionicRam')"><img class="circular" src="./skins/BionicRam.png">
                        <h4 class="skinName">BionicRam</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirdMask')"><img class="circular" src="./skins/BirdMask.png">
                        <h4 class="skinName">BirdMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Birdie')"><img class="circular" src="./skins/Birdie.png">
                        <h4 class="skinName">Birdie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdayBlob')"><img class="circular" src="./skins/BirthdayBlob.png">
                        <h4 class="skinName">BirthdayBlob</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdayCia')"><img class="circular" src="./skins/BirthdayCia.png">
                        <h4 class="skinName">BirthdayCia</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdayDoge')"><img class="circular" src="./skins/BirthdayDoge.png">
                        <h4 class="skinName">BirthdayDoge</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdaySanik')"><img class="circular" src="./skins/BirthdaySanik.png">
                        <h4 class="skinName">BirthdaySanik</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdaySir')"><img class="circular" src="./skins/BirthdaySir.png">
                        <h4 class="skinName">BirthdaySir</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BirthdayWojak')"><img class="circular" src="./skins/BirthdayWojak.png">
                        <h4 class="skinName">BirthdayWojak</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Birthosaur')"><img class="circular" src="./skins/Birthosaur.png">
                        <h4 class="skinName">Birthosaur</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bite')"><img class="circular" src="./skins/Bite.png">
                        <h4 class="skinName">Bite</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bitter')"><img class="circular" src="./skins/Bitter.png">
                        <h4 class="skinName">Bitter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlackHole')"><img class="circular" src="./skins/BlackHole.png">
                        <h4 class="skinName">BlackHole</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlackMagicBolt')"><img class="circular" src="./skins/BlackMagicBolt.png">
                        <h4 class="skinName">BlackMagicBolt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlackMagicGem')"><img class="circular" src="./skins/BlackMagicGem.png">
                        <h4 class="skinName">BlackMagicGem</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Blob')"><img class="circular" src="./skins/Blob.png">
                        <h4 class="skinName">Blob</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlobbyBoy')"><img class="circular" src="./skins/BlobbyBoy.png">
                        <h4 class="skinName">BlobbyBoy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlueBird')"><img class="circular" src="./skins/BlueBird.png">
                        <h4 class="skinName">BlueBird</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlueSkull')"><img class="circular" src="./skins/BlueSkull.png">
                        <h4 class="skinName">BlueSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BlueSwirl')"><img class="circular" src="./skins/BlueSwirl.png">
                        <h4 class="skinName">BlueSwirl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Blueberry')"><img class="circular" src="./skins/Blueberry.png">
                        <h4 class="skinName">Blueberry</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Boar')"><img class="circular" src="./skins/Boar.png">
                        <h4 class="skinName">Boar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BoltSamurai')"><img class="circular" src="./skins/BoltSamurai.png">
                        <h4 class="skinName">BoltSamurai</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bomb')"><img class="circular" src="./skins/Bomb.png">
                        <h4 class="skinName">Bomb</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Boot')"><img class="circular" src="./skins/Boot.png">
                        <h4 class="skinName">Boot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BootLegger')"><img class="circular" src="./skins/BootLegger.png">
                        <h4 class="skinName">BootLegger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bowling')"><img class="circular" src="./skins/Bowling.png">
                        <h4 class="skinName">Bowling</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BoyKiss')"><img class="circular" src="./skins/BoyKiss.png">
                        <h4 class="skinName">BoyKiss</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Brain')"><img class="circular" src="./skins/Brain.png">
                        <h4 class="skinName">Brain</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BraveHeartLion')"><img class="circular" src="./skins/BraveHeartLion.png">
                        <h4 class="skinName">BraveHeartLion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bread')"><img class="circular" src="./skins/Bread.png">
                        <h4 class="skinName">Bread</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Breakfast')"><img class="circular" src="./skins/Breakfast.png">
                        <h4 class="skinName">Breakfast</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BrightHeartRacoon')"><img class="circular" src="./skins/BrightHeartRacoon.png">
                        <h4 class="skinName">BrightHeartRacoon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BroFist')"><img class="circular" src="./skins/BroFist.png">
                        <h4 class="skinName">BroFist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BruiserGoat')"><img class="circular" src="./skins/BruiserGoat.png">
                        <h4 class="skinName">BruiserGoat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BubbleFish')"><img class="circular" src="./skins/BubbleFish.png">
                        <h4 class="skinName">BubbleFish</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BubbleFish(Level3)')"><img class="circular" src="./skins/BubbleFish(Level3).png">
                        <h4 class="skinName">BubbleFish(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bubblesaurus')"><img class="circular" src="./skins/Bubblesaurus.png">
                        <h4 class="skinName">Bubblesaurus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bug')"><img class="circular" src="./skins/Bug.png">
                        <h4 class="skinName">Bug</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BullKing')"><img class="circular" src="./skins/BullKing.png">
                        <h4 class="skinName">BullKing</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BullSkull')"><img class="circular" src="./skins/BullSkull.png">
                        <h4 class="skinName">BullSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BulletMan')"><img class="circular" src="./skins/BulletMan.png">
                        <h4 class="skinName">BulletMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bullseye')"><img class="circular" src="./skins/Bullseye.png">
                        <h4 class="skinName">Bullseye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Bunny')"><img class="circular" src="./skins/Bunny.png">
                        <h4 class="skinName">Bunny</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BurgerFace')"><img class="circular" src="./skins/BurgerFace.png">
                        <h4 class="skinName">BurgerFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('BurlyMan')"><img class="circular" src="./skins/BurlyMan.png">
                        <h4 class="skinName">BurlyMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Burner')"><img class="circular" src="./skins/Burner.png">
                        <h4 class="skinName">Burner</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cactus')"><img class="circular" src="./skins/Cactus.png">
                        <h4 class="skinName">Cactus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CactusFlower')"><img class="circular" src="./skins/CactusFlower.png">
                        <h4 class="skinName">CactusFlower</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Calaca')"><img class="circular" src="./skins/Calaca.png">
                        <h4 class="skinName">Calaca</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Calavera')"><img class="circular" src="./skins/Calavera.png">
                        <h4 class="skinName">Calavera</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CanMan')"><img class="circular" src="./skins/CanMan.png">
                        <h4 class="skinName">CanMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cancer')"><img class="circular" src="./skins/Cancer.png">
                        <h4 class="skinName">Cancer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CandleLight')"><img class="circular" src="./skins/CandleLight.png">
                        <h4 class="skinName">CandleLight</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Candy')"><img class="circular" src="./skins/Candy.png">
                        <h4 class="skinName">Candy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CandyGenius')"><img class="circular" src="./skins/CandyGenius.png">
                        <h4 class="skinName">CandyGenius</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CandyTroll')"><img class="circular" src="./skins/CandyTroll.png">
                        <h4 class="skinName">CandyTroll</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CannonBall')"><img class="circular" src="./skins/CannonBall.png">
                        <h4 class="skinName">CannonBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cap_nJoe')"><img class="circular" src="./skins/Cap_nJoe.png">
                        <h4 class="skinName">Cap_nJoe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Capricorn')"><img class="circular" src="./skins/Capricorn.png">
                        <h4 class="skinName">Capricorn</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CaptainSkull')"><img class="circular" src="./skins/CaptainSkull.png">
                        <h4 class="skinName">CaptainSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CaribbeanCorsair')"><img class="circular" src="./skins/CaribbeanCorsair.png">
                        <h4 class="skinName">CaribbeanCorsair</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Carp')"><img class="circular" src="./skins/Carp.png">
                        <h4 class="skinName">Carp</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Carrot')"><img class="circular" src="./skins/Carrot.png">
                        <h4 class="skinName">Carrot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cat')"><img class="circular" src="./skins/Cat.png">
                        <h4 class="skinName">Cat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CatBurglar')"><img class="circular" src="./skins/CatBurglar.png">
                        <h4 class="skinName">CatBurglar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CatCauldron')"><img class="circular" src="./skins/CatCauldron.png">
                        <h4 class="skinName">CatCauldron</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CavePainting')"><img class="circular" src="./skins/CavePainting.png">
                        <h4 class="skinName">CavePainting</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CaveTroll')"><img class="circular" src="./skins/CaveTroll.png">
                        <h4 class="skinName">CaveTroll</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CelebrationHat')"><img class="circular" src="./skins/CelebrationHat.png">
                        <h4 class="skinName">CelebrationHat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Champion')"><img class="circular" src="./skins/Champion.png">
                        <h4 class="skinName">Champion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Chicken')"><img class="circular" src="./skins/Chicken.png">
                        <h4 class="skinName">Chicken</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChickenLeg')"><img class="circular" src="./skins/ChickenLeg.png">
                        <h4 class="skinName">ChickenLeg</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Chihuahua')"><img class="circular" src="./skins/Chihuahua.png">
                        <h4 class="skinName">Chihuahua</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Chillpanze')"><img class="circular" src="./skins/Chillpanze.png">
                        <h4 class="skinName">Chillpanze</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChinaDragon')"><img class="circular" src="./skins/ChinaDragon.png">
                        <h4 class="skinName">ChinaDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChipCookie')"><img class="circular" src="./skins/ChipCookie.png">
                        <h4 class="skinName">ChipCookie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChirpyRaptor')"><img class="circular" src="./skins/ChirpyRaptor.png">
                        <h4 class="skinName">ChirpyRaptor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChocoEgg')"><img class="circular" src="./skins/ChocoEgg.png">
                        <h4 class="skinName">ChocoEgg</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChocoHeart')"><img class="circular" src="./skins/ChocoHeart.png">
                        <h4 class="skinName">ChocoHeart</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChristmasPudding')"><img class="circular" src="./skins/ChristmasPudding.png">
                        <h4 class="skinName">ChristmasPudding</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ChronoRanger')"><img class="circular" src="./skins/ChronoRanger.png">
                        <h4 class="skinName">ChronoRanger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Chupacabra')"><img class="circular" src="./skins/Chupacabra.png">
                        <h4 class="skinName">Chupacabra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Circle')"><img class="circular" src="./skins/Circle.png">
                        <h4 class="skinName">Circle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cleopatra')"><img class="circular" src="./skins/Cleopatra.png">
                        <h4 class="skinName">Cleopatra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Clever')"><img class="circular" src="./skins/Clever.png">
                        <h4 class="skinName">Clever</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cloud')"><img class="circular" src="./skins/Cloud.png">
                        <h4 class="skinName">Cloud</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CloudPrism')"><img class="circular" src="./skins/CloudPrism.png">
                        <h4 class="skinName">CloudPrism</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CocoNuts')"><img class="circular" src="./skins/CocoNuts.png">
                        <h4 class="skinName">CocoNuts</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CogAttack')"><img class="circular" src="./skins/CogAttack.png">
                        <h4 class="skinName">CogAttack</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cogs')"><img class="circular" src="./skins/Cogs.png">
                        <h4 class="skinName">Cogs</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Coil')"><img class="circular" src="./skins/Coil.png">
                        <h4 class="skinName">Coil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Colossus')"><img class="circular" src="./skins/Colossus.png">
                        <h4 class="skinName">Colossus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cookie')"><img class="circular" src="./skins/Cookie.png">
                        <h4 class="skinName">Cookie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CookieMouse')"><img class="circular" src="./skins/CookieMouse.png">
                        <h4 class="skinName">CookieMouse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cool')"><img class="circular" src="./skins/Cool.png">
                        <h4 class="skinName">Cool</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolAgent')"><img class="circular" src="./skins/CoolAgent.png">
                        <h4 class="skinName">CoolAgent</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolBunny')"><img class="circular" src="./skins/CoolBunny.png">
                        <h4 class="skinName">CoolBunny</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolDuck')"><img class="circular" src="./skins/CoolDuck.png">
                        <h4 class="skinName">CoolDuck</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolDuck(Level3)')"><img class="circular" src="./skins/CoolDuck(Level3).png">
                        <h4 class="skinName">CoolDuck(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolGuy')"><img class="circular" src="./skins/CoolGuy.png">
                        <h4 class="skinName">CoolGuy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CoolLion')"><img class="circular" src="./skins/CoolLion.png">
                        <h4 class="skinName">CoolLion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CosmicHorse')"><img class="circular" src="./skins/CosmicHorse.png">
                        <h4 class="skinName">CosmicHorse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CosmoPirate')"><img class="circular" src="./skins/CosmoPirate.png">
                        <h4 class="skinName">CosmoPirate</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cougar')"><img class="circular" src="./skins/Cougar.png">
                        <h4 class="skinName">Cougar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Coyote')"><img class="circular" src="./skins/Coyote.png">
                        <h4 class="skinName">Coyote</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CozyHeartPenguin')"><img class="circular" src="./skins/CozyHeartPenguin.png">
                        <h4 class="skinName">CozyHeartPenguin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Craycray')"><img class="circular" src="./skins/Craycray.png">
                        <h4 class="skinName">Craycray</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Crazy')"><img class="circular" src="./skins/Crazy.png">
                        <h4 class="skinName">Crazy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyBall')"><img class="circular" src="./skins/CrazyBall.png">
                        <h4 class="skinName">CrazyBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyBird')"><img class="circular" src="./skins/CrazyBird.png">
                        <h4 class="skinName">CrazyBird</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyBolt')"><img class="circular" src="./skins/CrazyBolt.png">
                        <h4 class="skinName">CrazyBolt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyBrain')"><img class="circular" src="./skins/CrazyBrain.png">
                        <h4 class="skinName">CrazyBrain</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyDog')"><img class="circular" src="./skins/CrazyDog.png">
                        <h4 class="skinName">CrazyDog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyDog(Level3)')"><img class="circular" src="./skins/CrazyDog(Level3).png">
                        <h4 class="skinName">CrazyDog(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyEye')"><img class="circular" src="./skins/CrazyEye.png">
                        <h4 class="skinName">CrazyEye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazyRudolph')"><img class="circular" src="./skins/CrazyRudolph.png">
                        <h4 class="skinName">CrazyRudolph</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CrazySombrero')"><img class="circular" src="./skins/CrazySombrero.png">
                        <h4 class="skinName">CrazySombrero</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Croc')"><img class="circular" src="./skins/Croc.png">
                        <h4 class="skinName">Croc</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Crocodile')"><img class="circular" src="./skins/Crocodile.png">
                        <h4 class="skinName">Crocodile</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Crocodino')"><img class="circular" src="./skins/Crocodino.png">
                        <h4 class="skinName">Crocodino</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CryCloud')"><img class="circular" src="./skins/CryCloud.png">
                        <h4 class="skinName">CryCloud</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cthulhu')"><img class="circular" src="./skins/Cthulhu.png">
                        <h4 class="skinName">Cthulhu</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cupcake')"><img class="circular" src="./skins/Cupcake.png">
                        <h4 class="skinName">Cupcake</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cupid')"><img class="circular" src="./skins/Cupid.png">
                        <h4 class="skinName">Cupid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cuppy')"><img class="circular" src="./skins/Cuppy.png">
                        <h4 class="skinName">Cuppy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CursedBlade')"><img class="circular" src="./skins/CursedBlade.png">
                        <h4 class="skinName">CursedBlade</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CursedSamurai')"><img class="circular" src="./skins/CursedSamurai.png">
                        <h4 class="skinName">CursedSamurai</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberAgent')"><img class="circular" src="./skins/CyberAgent.png">
                        <h4 class="skinName">CyberAgent</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberCommando')"><img class="circular" src="./skins/CyberCommando.png">
                        <h4 class="skinName">CyberCommando</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberDemon')"><img class="circular" src="./skins/CyberDemon.png">
                        <h4 class="skinName">CyberDemon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberGuard')"><img class="circular" src="./skins/CyberGuard.png">
                        <h4 class="skinName">CyberGuard</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberKid')"><img class="circular" src="./skins/CyberKid.png">
                        <h4 class="skinName">CyberKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberMonk')"><img class="circular" src="./skins/CyberMonk.png">
                        <h4 class="skinName">CyberMonk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberPsychic')"><img class="circular" src="./skins/CyberPsychic.png">
                        <h4 class="skinName">CyberPsychic</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberPunk')"><img class="circular" src="./skins/CyberPunk.png">
                        <h4 class="skinName">CyberPunk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('CyberScarab')"><img class="circular" src="./skins/CyberScarab.png">
                        <h4 class="skinName">CyberScarab</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Cybernaut')"><img class="circular" src="./skins/Cybernaut.png">
                        <h4 class="skinName">Cybernaut</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Daisy')"><img class="circular" src="./skins/Daisy.png">
                        <h4 class="skinName">Daisy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DapperDog')"><img class="circular" src="./skins/DapperDog.png">
                        <h4 class="skinName">DapperDog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DarkMatter')"><img class="circular" src="./skins/DarkMatter.png">
                        <h4 class="skinName">DarkMatter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DarkSorceress')"><img class="circular" src="./skins/DarkSorceress.png">
                        <h4 class="skinName">DarkSorceress</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DarkWings')"><img class="circular" src="./skins/DarkWings.png">
                        <h4 class="skinName">DarkWings</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dasher')"><img class="circular" src="./skins/Dasher.png">
                        <h4 class="skinName">Dasher</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dazzled')"><img class="circular" src="./skins/Dazzled.png">
                        <h4 class="skinName">Dazzled</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DeadlyPiranha')"><img class="circular" src="./skins/DeadlyPiranha.png">
                        <h4 class="skinName">DeadlyPiranha</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DeathMouse')"><img class="circular" src="./skins/DeathMouse.png">
                        <h4 class="skinName">DeathMouse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DeathlyMine')"><img class="circular" src="./skins/DeathlyMine.png">
                        <h4 class="skinName">DeathlyMine</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DefiledScarecrow')"><img class="circular" src="./skins/DefiledScarecrow.png">
                        <h4 class="skinName">DefiledScarecrow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Delighted')"><img class="circular" src="./skins/Delighted.png">
                        <h4 class="skinName">Delighted</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DemonicHelmet')"><img class="circular" src="./skins/DemonicHelmet.png">
                        <h4 class="skinName">DemonicHelmet</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DesertFox')"><img class="circular" src="./skins/DesertFox.png">
                        <h4 class="skinName">DesertFox</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Destroyer')"><img class="circular" src="./skins/Destroyer.png">
                        <h4 class="skinName">Destroyer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Detective')"><img class="circular" src="./skins/Detective.png">
                        <h4 class="skinName">Detective</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Devil')"><img class="circular" src="./skins/Devil.png">
                        <h4 class="skinName">Devil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Devil(Level3)')"><img class="circular" src="./skins/Devil(Level3).png">
                        <h4 class="skinName">Devil(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Devilish')"><img class="circular" src="./skins/Devilish.png">
                        <h4 class="skinName">Devilish</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Devourer')"><img class="circular" src="./skins/Devourer.png">
                        <h4 class="skinName">Devourer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Diamonds')"><img class="circular" src="./skins/Diamonds.png">
                        <h4 class="skinName">Diamonds</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DireWolf')"><img class="circular" src="./skins/DireWolf.png">
                        <h4 class="skinName">DireWolf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Diva')"><img class="circular" src="./skins/Diva.png">
                        <h4 class="skinName">Diva</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Diver')"><img class="circular" src="./skins/Diver.png">
                        <h4 class="skinName">Diver</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DivinePearl')"><img class="circular" src="./skins/DivinePearl.png">
                        <h4 class="skinName">DivinePearl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dog')"><img class="circular" src="./skins/Dog.png">
                        <h4 class="skinName">Dog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Donuts')"><img class="circular" src="./skins/Donuts.png">
                        <h4 class="skinName">Donuts</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DrCosmos')"><img class="circular" src="./skins/DrCosmos.png">
                        <h4 class="skinName">DrCosmos</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DrStatic')"><img class="circular" src="./skins/DrStatic.png">
                        <h4 class="skinName">DrStatic</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Draco')"><img class="circular" src="./skins/Draco.png">
                        <h4 class="skinName">Draco</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dracool')"><img class="circular" src="./skins/Dracool.png">
                        <h4 class="skinName">Dracool</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonGriffin')"><img class="circular" src="./skins/DragonGriffin.png">
                        <h4 class="skinName">DragonGriffin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonHaze')"><img class="circular" src="./skins/DragonHaze.png">
                        <h4 class="skinName">DragonHaze</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonHydra')"><img class="circular" src="./skins/DragonHydra.png">
                        <h4 class="skinName">DragonHydra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonRazor')"><img class="circular" src="./skins/DragonRazor.png">
                        <h4 class="skinName">DragonRazor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonTwin')"><img class="circular" src="./skins/DragonTwin.png">
                        <h4 class="skinName">DragonTwin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DragonViper')"><img class="circular" src="./skins/DragonViper.png">
                        <h4 class="skinName">DragonViper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Droid')"><img class="circular" src="./skins/Droid.png">
                        <h4 class="skinName">Droid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DryFace')"><img class="circular" src="./skins/DryFace.png">
                        <h4 class="skinName">DryFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DuckTarget')"><img class="circular" src="./skins/DuckTarget.png">
                        <h4 class="skinName">DuckTarget</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DuelMaster')"><img class="circular" src="./skins/DuelMaster.png">
                        <h4 class="skinName">DuelMaster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dumboon')"><img class="circular" src="./skins/Dumboon.png">
                        <h4 class="skinName">Dumboon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dumpling')"><img class="circular" src="./skins/Dumpling.png">
                        <h4 class="skinName">Dumpling</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DustBrain')"><img class="circular" src="./skins/DustBrain.png">
                        <h4 class="skinName">DustBrain</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Dynamite')"><img class="circular" src="./skins/Dynamite.png">
                        <h4 class="skinName">Dynamite</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('DynamiteGuy')"><img class="circular" src="./skins/DynamiteGuy.png">
                        <h4 class="skinName">DynamiteGuy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ELF')"><img class="circular" src="./skins/ELF.png">
                        <h4 class="skinName">ELF</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EagerAlien')"><img class="circular" src="./skins/EagerAlien.png">
                        <h4 class="skinName">EagerAlien</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Eagle')"><img class="circular" src="./skins/Eagle.png">
                        <h4 class="skinName">Eagle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EarthDay')"><img class="circular" src="./skins/EarthDay.png">
                        <h4 class="skinName">EarthDay</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EasterChick')"><img class="circular" src="./skins/EasterChick.png">
                        <h4 class="skinName">EasterChick</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EclipseHunter')"><img class="circular" src="./skins/EclipseHunter.png">
                        <h4 class="skinName">EclipseHunter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EgyptianCat')"><img class="circular" src="./skins/EgyptianCat.png">
                        <h4 class="skinName">EgyptianCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EgyptianPlague')"><img class="circular" src="./skins/EgyptianPlague.png">
                        <h4 class="skinName">EgyptianPlague</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElderMaster')"><img class="circular" src="./skins/ElderMaster.png">
                        <h4 class="skinName">ElderMaster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EleanorOfLight')"><img class="circular" src="./skins/EleanorOfLight.png">
                        <h4 class="skinName">EleanorOfLight</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElectroJelly')"><img class="circular" src="./skins/ElectroJelly.png">
                        <h4 class="skinName">ElectroJelly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElectronicGirl')"><img class="circular" src="./skins/ElectronicGirl.png">
                        <h4 class="skinName">ElectronicGirl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Elephant')"><img class="circular" src="./skins/Elephant.png">
                        <h4 class="skinName">Elephant</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElephantBall')"><img class="circular" src="./skins/ElephantBall.png">
                        <h4 class="skinName">ElephantBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElfHelper')"><img class="circular" src="./skins/ElfHelper.png">
                        <h4 class="skinName">ElfHelper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElitePilot')"><img class="circular" src="./skins/ElitePilot.png">
                        <h4 class="skinName">ElitePilot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ElvenNoble')"><img class="circular" src="./skins/ElvenNoble.png">
                        <h4 class="skinName">ElvenNoble</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EntertainerLow')"><img class="circular" src="./skins/EntertainerLow.png">
                        <h4 class="skinName">EntertainerLow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EternalSnake')"><img class="circular" src="./skins/EternalSnake.png">
                        <h4 class="skinName">EternalSnake</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Evil')"><img class="circular" src="./skins/Evil.png">
                        <h4 class="skinName">Evil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EvilElf')"><img class="circular" src="./skins/EvilElf.png">
                        <h4 class="skinName">EvilElf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EvilEye')"><img class="circular" src="./skins/EvilEye.png">
                        <h4 class="skinName">EvilEye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EvilGenie')"><img class="circular" src="./skins/EvilGenie.png">
                        <h4 class="skinName">EvilGenie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EvilMaster')"><img class="circular" src="./skins/EvilMaster.png">
                        <h4 class="skinName">EvilMaster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Excalibur')"><img class="circular" src="./skins/Excalibur.png">
                        <h4 class="skinName">Excalibur</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Eye')"><img class="circular" src="./skins/Eye.png">
                        <h4 class="skinName">Eye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EyeFive')"><img class="circular" src="./skins/EyeFive.png">
                        <h4 class="skinName">EyeFive</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('EyeFive(Level3)')"><img class="circular" src="./skins/EyeFive(Level3).png">
                        <h4 class="skinName">EyeFive(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Eyeball')"><img class="circular" src="./skins/Eyeball.png">
                        <h4 class="skinName">Eyeball</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Eyepatch')"><img class="circular" src="./skins/Eyepatch.png">
                        <h4 class="skinName">Eyepatch</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Facepalm')"><img class="circular" src="./skins/Facepalm.png">
                        <h4 class="skinName">Facepalm</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FairyFeathers')"><img class="circular" src="./skins/FairyFeathers.png">
                        <h4 class="skinName">FairyFeathers</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FakeChest')"><img class="circular" src="./skins/FakeChest.png">
                        <h4 class="skinName">FakeChest</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Fallen')"><img class="circular" src="./skins/Fallen.png">
                        <h4 class="skinName">Fallen</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FallenOne')"><img class="circular" src="./skins/FallenOne.png">
                        <h4 class="skinName">FallenOne</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Faun')"><img class="circular" src="./skins/Faun.png">
                        <h4 class="skinName">Faun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FeatherDragon')"><img class="circular" src="./skins/FeatherDragon.png">
                        <h4 class="skinName">FeatherDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FireFace')"><img class="circular" src="./skins/FireFace.png">
                        <h4 class="skinName">FireFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FireGiant')"><img class="circular" src="./skins/FireGiant.png">
                        <h4 class="skinName">FireGiant</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FireGiant(Level3)')"><img class="circular" src="./skins/FireGiant(Level3).png">
                        <h4 class="skinName">FireGiant(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FireGolem')"><img class="circular" src="./skins/FireGolem.png">
                        <h4 class="skinName">FireGolem</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FireRooster')"><img class="circular" src="./skins/FireRooster.png">
                        <h4 class="skinName">FireRooster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Firebird')"><img class="circular" src="./skins/Firebird.png">
                        <h4 class="skinName">Firebird</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Firespitter')"><img class="circular" src="./skins/Firespitter.png">
                        <h4 class="skinName">Firespitter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Flame')"><img class="circular" src="./skins/Flame.png">
                        <h4 class="skinName">Flame</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FloatingSee')"><img class="circular" src="./skins/FloatingSee.png">
                        <h4 class="skinName">FloatingSee</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Fly')"><img class="circular" src="./skins/Fly.png">
                        <h4 class="skinName">Fly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FlyingCork')"><img class="circular" src="./skins/FlyingCork.png">
                        <h4 class="skinName">FlyingCork</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FlyingSaucer')"><img class="circular" src="./skins/FlyingSaucer.png">
                        <h4 class="skinName">FlyingSaucer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FootballStrike')"><img class="circular" src="./skins/FootballStrike.png">
                        <h4 class="skinName">FootballStrike</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Footprint')"><img class="circular" src="./skins/Footprint.png">
                        <h4 class="skinName">Footprint</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ForestSpirit')"><img class="circular" src="./skins/ForestSpirit.png">
                        <h4 class="skinName">ForestSpirit</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Fox')"><img class="circular" src="./skins/Fox.png">
                        <h4 class="skinName">Fox</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FoxMask')"><img class="circular" src="./skins/FoxMask.png">
                        <h4 class="skinName">FoxMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Frankenstein')"><img class="circular" src="./skins/Frankenstein.png">
                        <h4 class="skinName">Frankenstein</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Frankie')"><img class="circular" src="./skins/Frankie.png">
                        <h4 class="skinName">Frankie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FreeBots')"><img class="circular" src="./skins/FreeBots.png">
                        <h4 class="skinName">FreeBots</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Fries')"><img class="circular" src="./skins/Fries.png">
                        <h4 class="skinName">Fries</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Frog')"><img class="circular" src="./skins/Frog.png">
                        <h4 class="skinName">Frog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrogKid')"><img class="circular" src="./skins/FrogKid.png">
                        <h4 class="skinName">FrogKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrogKid(Level3)')"><img class="circular" src="./skins/FrogKid(Level3).png">
                        <h4 class="skinName">FrogKid(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrogThai')"><img class="circular" src="./skins/FrogThai.png">
                        <h4 class="skinName">FrogThai</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Frogy')"><img class="circular" src="./skins/Frogy.png">
                        <h4 class="skinName">Frogy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrostGiant')"><img class="circular" src="./skins/FrostGiant.png">
                        <h4 class="skinName">FrostGiant</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrostGiant(Level3)')"><img class="circular" src="./skins/FrostGiant(Level3).png">
                        <h4 class="skinName">FrostGiant(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FrostHand')"><img class="circular" src="./skins/FrostHand.png">
                        <h4 class="skinName">FrostHand</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Full')"><img class="circular" src="./skins/Full.png">
                        <h4 class="skinName">Full</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Funky')"><img class="circular" src="./skins/Funky.png">
                        <h4 class="skinName">Funky</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FunnyFace')"><img class="circular" src="./skins/FunnyFace.png">
                        <h4 class="skinName">FunnyFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FunshineBear')"><img class="circular" src="./skins/FunshineBear.png">
                        <h4 class="skinName">FunshineBear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Furious')"><img class="circular" src="./skins/Furious.png">
                        <h4 class="skinName">Furious</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FuryCat')"><img class="circular" src="./skins/FuryCat.png">
                        <h4 class="skinName">FuryCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('FutureArt')"><img class="circular" src="./skins/FutureArt.png">
                        <h4 class="skinName">FutureArt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Galaxy')"><img class="circular" src="./skins/Galaxy.png">
                        <h4 class="skinName">Galaxy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GameHost')"><img class="circular" src="./skins/GameHost.png">
                        <h4 class="skinName">GameHost</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gamma')"><img class="circular" src="./skins/Gamma.png">
                        <h4 class="skinName">Gamma</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gary')"><img class="circular" src="./skins/Gary.png">
                        <h4 class="skinName">Gary</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Geisha')"><img class="circular" src="./skins/Geisha.png">
                        <h4 class="skinName">Geisha</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gemini')"><img class="circular" src="./skins/Gemini.png">
                        <h4 class="skinName">Gemini</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('General')"><img class="circular" src="./skins/General.png">
                        <h4 class="skinName">General</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Genie')"><img class="circular" src="./skins/Genie.png">
                        <h4 class="skinName">Genie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Genie(Level3)')"><img class="circular" src="./skins/Genie(Level3).png">
                        <h4 class="skinName">Genie(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ghost')"><img class="circular" src="./skins/Ghost.png">
                        <h4 class="skinName">Ghost</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GiantHuman')"><img class="circular" src="./skins/GiantHuman.png">
                        <h4 class="skinName">GiantHuman</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GiantSkull')"><img class="circular" src="./skins/GiantSkull.png">
                        <h4 class="skinName">GiantSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gingerbread')"><img class="circular" src="./skins/Gingerbread.png">
                        <h4 class="skinName">Gingerbread</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GirlKiss')"><img class="circular" src="./skins/GirlKiss.png">
                        <h4 class="skinName">GirlKiss</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gladiatrix')"><img class="circular" src="./skins/Gladiatrix.png">
                        <h4 class="skinName">Gladiatrix</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GnomeMage')"><img class="circular" src="./skins/GnomeMage.png">
                        <h4 class="skinName">GnomeMage</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Goblin')"><img class="circular" src="./skins/Goblin.png">
                        <h4 class="skinName">Goblin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoddessAona')"><img class="circular" src="./skins/GoddessAona.png">
                        <h4 class="skinName">GoddessAona</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoldCoin')"><img class="circular" src="./skins/GoldCoin.png">
                        <h4 class="skinName">GoldCoin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoldPot')"><img class="circular" src="./skins/GoldPot.png">
                        <h4 class="skinName">GoldPot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoldRush')"><img class="circular" src="./skins/GoldRush.png">
                        <h4 class="skinName">GoldRush</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoldenAxe')"><img class="circular" src="./skins/GoldenAxe.png">
                        <h4 class="skinName">GoldenAxe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoldenMask')"><img class="circular" src="./skins/GoldenMask.png">
                        <h4 class="skinName">GoldenMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Goldfish')"><img class="circular" src="./skins/Goldfish.png">
                        <h4 class="skinName">Goldfish</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GoofyYeti')"><img class="circular" src="./skins/GoofyYeti.png">
                        <h4 class="skinName">GoofyYeti</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gordon')"><img class="circular" src="./skins/Gordon.png">
                        <h4 class="skinName">Gordon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gouache')"><img class="circular" src="./skins/Gouache.png">
                        <h4 class="skinName">Gouache</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Grandma')"><img class="circular" src="./skins/Grandma.png">
                        <h4 class="skinName">Grandma</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Greatzilla')"><img class="circular" src="./skins/Greatzilla.png">
                        <h4 class="skinName">Greatzilla</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GreenDragon')"><img class="circular" src="./skins/GreenDragon.png">
                        <h4 class="skinName">GreenDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GreenMan')"><img class="circular" src="./skins/GreenMan.png">
                        <h4 class="skinName">GreenMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Grizzly')"><img class="circular" src="./skins/Grizzly.png">
                        <h4 class="skinName">Grizzly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GroovyCanvas')"><img class="circular" src="./skins/GroovyCanvas.png">
                        <h4 class="skinName">GroovyCanvas</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GrumpyFrog')"><img class="circular" src="./skins/GrumpyFrog.png">
                        <h4 class="skinName">GrumpyFrog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gryphon')"><img class="circular" src="./skins/Gryphon.png">
                        <h4 class="skinName">Gryphon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Guardian')"><img class="circular" src="./skins/Guardian.png">
                        <h4 class="skinName">Guardian</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('GuineaPig')"><img class="circular" src="./skins/GuineaPig.png">
                        <h4 class="skinName">GuineaPig</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Gymnast')"><img class="circular" src="./skins/Gymnast.png">
                        <h4 class="skinName">Gymnast</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hades')"><img class="circular" src="./skins/Hades.png">
                        <h4 class="skinName">Hades</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Halloween')"><img class="circular" src="./skins/Halloween.png">
                        <h4 class="skinName">Halloween</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Halo')"><img class="circular" src="./skins/Halo.png">
                        <h4 class="skinName">Halo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hamburger')"><img class="circular" src="./skins/Hamburger.png">
                        <h4 class="skinName">Hamburger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Happy')"><img class="circular" src="./skins/Happy.png">
                        <h4 class="skinName">Happy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HappyHat')"><img class="circular" src="./skins/HappyHat.png">
                        <h4 class="skinName">HappyHat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HappySoda')"><img class="circular" src="./skins/HappySoda.png">
                        <h4 class="skinName">HappySoda</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Haste')"><img class="circular" src="./skins/Haste.png">
                        <h4 class="skinName">Haste</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hat')"><img class="circular" src="./skins/Hat.png">
                        <h4 class="skinName">Hat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hazmat')"><img class="circular" src="./skins/Hazmat.png">
                        <h4 class="skinName">Hazmat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HealingPotion')"><img class="circular" src="./skins/HealingPotion.png">
                        <h4 class="skinName">HealingPotion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Heart')"><img class="circular" src="./skins/Heart.png">
                        <h4 class="skinName">Heart</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Heartbreaker')"><img class="circular" src="./skins/Heartbreaker.png">
                        <h4 class="skinName">Heartbreaker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HeavyMetal')"><img class="circular" src="./skins/HeavyMetal.png">
                        <h4 class="skinName">HeavyMetal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Helm')"><img class="circular" src="./skins/Helm.png">
                        <h4 class="skinName">Helm</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Helmet')"><img class="circular" src="./skins/Helmet.png">
                        <h4 class="skinName">Helmet</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hercules')"><img class="circular" src="./skins/Hercules.png">
                        <h4 class="skinName">Hercules</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hobgoblin')"><img class="circular" src="./skins/Hobgoblin.png">
                        <h4 class="skinName">Hobgoblin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hockey')"><img class="circular" src="./skins/Hockey.png">
                        <h4 class="skinName">Hockey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HonkHonk')"><img class="circular" src="./skins/HonkHonk.png">
                        <h4 class="skinName">HonkHonk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hornet')"><img class="circular" src="./skins/Hornet.png">
                        <h4 class="skinName">Hornet</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hornhead')"><img class="circular" src="./skins/Hornhead.png">
                        <h4 class="skinName">Hornhead</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HorseBoot')"><img class="circular" src="./skins/HorseBoot.png">
                        <h4 class="skinName">HorseBoot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Horseshoe')"><img class="circular" src="./skins/Horseshoe.png">
                        <h4 class="skinName">Horseshoe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HotCoffee')"><img class="circular" src="./skins/HotCoffee.png">
                        <h4 class="skinName">HotCoffee</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HotDog')"><img class="circular" src="./skins/HotDog.png">
                        <h4 class="skinName">HotDog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HotPepper')"><img class="circular" src="./skins/HotPepper.png">
                        <h4 class="skinName">HotPepper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HotTaco')"><img class="circular" src="./skins/HotTaco.png">
                        <h4 class="skinName">HotTaco</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Hunter')"><img class="circular" src="./skins/Hunter.png">
                        <h4 class="skinName">Hunter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Huntsman')"><img class="circular" src="./skins/Huntsman.png">
                        <h4 class="skinName">Huntsman</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Husky')"><img class="circular" src="./skins/Husky.png">
                        <h4 class="skinName">Husky</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HuskyBrawl')"><img class="circular" src="./skins/HuskyBrawl.png">
                        <h4 class="skinName">HuskyBrawl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('HyperCofee')"><img class="circular" src="./skins/HyperCofee.png">
                        <h4 class="skinName">HyperCofee</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IceCream')"><img class="circular" src="./skins/IceCream.png">
                        <h4 class="skinName">IceCream</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IceCrystal')"><img class="circular" src="./skins/IceCrystal.png">
                        <h4 class="skinName">IceCrystal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IceGriffin')"><img class="circular" src="./skins/IceGriffin.png">
                        <h4 class="skinName">IceGriffin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IceLord')"><img class="circular" src="./skins/IceLord.png">
                        <h4 class="skinName">IceLord</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Icon')"><img class="circular" src="./skins/Icon.png">
                        <h4 class="skinName">Icon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IcyBraid')"><img class="circular" src="./skins/IcyBraid.png">
                        <h4 class="skinName">IcyBraid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Idea')"><img class="circular" src="./skins/Idea.png">
                        <h4 class="skinName">Idea</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Idol')"><img class="circular" src="./skins/Idol.png">
                        <h4 class="skinName">Idol</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Idontknow')"><img class="circular" src="./skins/Idontknow.png">
                        <h4 class="skinName">Idontknow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ignis')"><img class="circular" src="./skins/Ignis.png">
                        <h4 class="skinName">Ignis</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Imp')"><img class="circular" src="./skins/Imp.png">
                        <h4 class="skinName">Imp</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Imp(Level3)')"><img class="circular" src="./skins/Imp(Level3).png">
                        <h4 class="skinName">Imp(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Infernando')"><img class="circular" src="./skins/Infernando.png">
                        <h4 class="skinName">Infernando</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Infernus')"><img class="circular" src="./skins/Infernus.png">
                        <h4 class="skinName">Infernus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Insectoid')"><img class="circular" src="./skins/Insectoid.png">
                        <h4 class="skinName">Insectoid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Invader')"><img class="circular" src="./skins/Invader.png">
                        <h4 class="skinName">Invader</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IronTitan')"><img class="circular" src="./skins/IronTitan.png">
                        <h4 class="skinName">IronTitan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('IronfistTitus')"><img class="circular" src="./skins/IronfistTitus.png">
                        <h4 class="skinName">IronfistTitus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jab')"><img class="circular" src="./skins/Jab.png">
                        <h4 class="skinName">Jab</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jackal')"><img class="circular" src="./skins/Jackal.png">
                        <h4 class="skinName">Jackal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jackal(Level3)')"><img class="circular" src="./skins/Jackal(Level3).png">
                        <h4 class="skinName">Jackal(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jade')"><img class="circular" src="./skins/Jade.png">
                        <h4 class="skinName">Jade</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JadeDragon')"><img class="circular" src="./skins/JadeDragon.png">
                        <h4 class="skinName">JadeDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JellyBear')"><img class="circular" src="./skins/JellyBear.png">
                        <h4 class="skinName">JellyBear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JellyDiver')"><img class="circular" src="./skins/JellyDiver.png">
                        <h4 class="skinName">JellyDiver</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JellyFace')"><img class="circular" src="./skins/JellyFace.png">
                        <h4 class="skinName">JellyFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JellyfishBall')"><img class="circular" src="./skins/JellyfishBall.png">
                        <h4 class="skinName">JellyfishBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jester')"><img class="circular" src="./skins/Jester.png">
                        <h4 class="skinName">Jester</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('John')"><img class="circular" src="./skins/John.png">
                        <h4 class="skinName">John</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jotun')"><img class="circular" src="./skins/Jotun.png">
                        <h4 class="skinName">Jotun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JudoFighter')"><img class="circular" src="./skins/JudoFighter.png">
                        <h4 class="skinName">JudoFighter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jumper')"><img class="circular" src="./skins/Jumper.png">
                        <h4 class="skinName">Jumper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('JungleWarrior')"><img class="circular" src="./skins/JungleWarrior.png">
                        <h4 class="skinName">JungleWarrior</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Jupiter')"><img class="circular" src="./skins/Jupiter.png">
                        <h4 class="skinName">Jupiter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('KarateParrot')"><img class="circular" src="./skins/KarateParrot.png">
                        <h4 class="skinName">KarateParrot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kayo')"><img class="circular" src="./skins/Kayo.png">
                        <h4 class="skinName">Kayo</h4>
                    </li>
					<li class="skin" onclick="changeSkin('Kawai')"><img class="circular" src="./skins/Kawai.png">
						<h4 class="skinName">Kawai</h4>
					</li>
                    <li class="skin" onclick="changeSkin('KempoTiger')"><img class="circular" src="./skins/KempoTiger.png">
                        <h4 class="skinName">KempoTiger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kepper')"><img class="circular" src="./skins/Kepper.png">
                        <h4 class="skinName">Kepper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kevin')"><img class="circular" src="./skins/Kevin.png">
                        <h4 class="skinName">Kevin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kieran')"><img class="circular" src="./skins/Kieran.png">
                        <h4 class="skinName">Kieran</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('KillerMask')"><img class="circular" src="./skins/KillerMask.png">
                        <h4 class="skinName">KillerMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('King')"><img class="circular" src="./skins/King.png">
                        <h4 class="skinName">King</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('KingLion')"><img class="circular" src="./skins/KingLion.png">
                        <h4 class="skinName">KingLion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kong')"><img class="circular" src="./skins/Kong.png">
                        <h4 class="skinName">Kong</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Kraken')"><img class="circular" src="./skins/Kraken.png">
                        <h4 class="skinName">Kraken</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LavaBeast')"><img class="circular" src="./skins/LavaBeast.png">
                        <h4 class="skinName">LavaBeast</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LeSmash')"><img class="circular" src="./skins/LeSmash.png">
                        <h4 class="skinName">LeSmash</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LeSpark')"><img class="circular" src="./skins/LeSpark.png">
                        <h4 class="skinName">LeSpark</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lead')"><img class="circular" src="./skins/Lead.png">
                        <h4 class="skinName">Lead</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Leech')"><img class="circular" src="./skins/Leech.png">
                        <h4 class="skinName">Leech</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Leo')"><img class="circular" src="./skins/Leo.png">
                        <h4 class="skinName">Leo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Leprechaun')"><img class="circular" src="./skins/Leprechaun.png">
                        <h4 class="skinName">Leprechaun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Liberty')"><img class="circular" src="./skins/Liberty.png">
                        <h4 class="skinName">Liberty</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Libra')"><img class="circular" src="./skins/Libra.png">
                        <h4 class="skinName">Libra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lightning')"><img class="circular" src="./skins/Lightning.png">
                        <h4 class="skinName">Lightning</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lily')"><img class="circular" src="./skins/Lily.png">
                        <h4 class="skinName">Lily</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lion')"><img class="circular" src="./skins/Lion.png">
                        <h4 class="skinName">Lion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LittleZilla')"><img class="circular" src="./skins/LittleZilla.png">
                        <h4 class="skinName">LittleZilla</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LittleZilla(Level3)')"><img class="circular" src="./skins/LittleZilla(Level3).png">
                        <h4 class="skinName">LittleZilla(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lizard')"><img class="circular" src="./skins/Lizard.png">
                        <h4 class="skinName">Lizard</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lol')"><img class="circular" src="./skins/Lol.png">
                        <h4 class="skinName">Lol</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LotsaHeartElephant')"><img class="circular" src="./skins/LotsaHeartElephant.png">
                        <h4 class="skinName">LotsaHeartElephant</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LoveArrow')"><img class="circular" src="./skins/LoveArrow.png">
                        <h4 class="skinName">LoveArrow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LoveCat')"><img class="circular" src="./skins/LoveCat.png">
                        <h4 class="skinName">LoveCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LovePizza')"><img class="circular" src="./skins/LovePizza.png">
                        <h4 class="skinName">LovePizza</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Lovesick')"><img class="circular" src="./skins/Lovesick.png">
                        <h4 class="skinName">Lovesick</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Luchador')"><img class="circular" src="./skins/Luchador.png">
                        <h4 class="skinName">Luchador</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LuckyClover')"><img class="circular" src="./skins/LuckyClover.png">
                        <h4 class="skinName">LuckyClover</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('LuckyDoll')"><img class="circular" src="./skins/LuckyDoll.png">
                        <h4 class="skinName">LuckyDoll</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadCap')"><img class="circular" src="./skins/MadCap.png">
                        <h4 class="skinName">MadCap</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadFragment')"><img class="circular" src="./skins/MadFragment.png">
                        <h4 class="skinName">MadFragment</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadJawz')"><img class="circular" src="./skins/MadJawz.png">
                        <h4 class="skinName">MadJawz</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadMonkey')"><img class="circular" src="./skins/MadMonkey.png">
                        <h4 class="skinName">MadMonkey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadMuffin')"><img class="circular" src="./skins/MadMuffin.png">
                        <h4 class="skinName">MadMuffin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MadSkull')"><img class="circular" src="./skins/MadSkull.png">
                        <h4 class="skinName">MadSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Madness')"><img class="circular" src="./skins/Madness.png">
                        <h4 class="skinName">Madness</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mage')"><img class="circular" src="./skins/Mage.png">
                        <h4 class="skinName">Mage</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MagicGerbil')"><img class="circular" src="./skins/MagicGerbil.png">
                        <h4 class="skinName">MagicGerbil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MagicHat')"><img class="circular" src="./skins/MagicHat.png">
                        <h4 class="skinName">MagicHat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MajorEagle')"><img class="circular" src="./skins/MajorEagle.png">
                        <h4 class="skinName">MajorEagle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mammoth')"><img class="circular" src="./skins/Mammoth.png">
                        <h4 class="skinName">Mammoth</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Maple')"><img class="circular" src="./skins/Maple.png">
                        <h4 class="skinName">Maple</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Maracas')"><img class="circular" src="./skins/Maracas.png">
                        <h4 class="skinName">Maracas</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Marauder')"><img class="circular" src="./skins/Marauder.png">
                        <h4 class="skinName">Marauder</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mariachi')"><img class="circular" src="./skins/Mariachi.png">
                        <h4 class="skinName">Mariachi</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mask')"><img class="circular" src="./skins/Mask.png">
                        <h4 class="skinName">Mask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Masked')"><img class="circular" src="./skins/Masked.png">
                        <h4 class="skinName">Masked</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MaskedMenace')"><img class="circular" src="./skins/MaskedMenace.png">
                        <h4 class="skinName">MaskedMenace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MechaDestroyer')"><img class="circular" src="./skins/MechaDestroyer.png">
                        <h4 class="skinName">MechaDestroyer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MechaParrot')"><img class="circular" src="./skins/MechaParrot.png">
                        <h4 class="skinName">MechaParrot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MechaToad')"><img class="circular" src="./skins/MechaToad.png">
                        <h4 class="skinName">MechaToad</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mechanicat')"><img class="circular" src="./skins/Mechanicat.png">
                        <h4 class="skinName">Mechanicat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mechatron')"><img class="circular" src="./skins/Mechatron.png">
                        <h4 class="skinName">Mechatron</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Medusa')"><img class="circular" src="./skins/Medusa.png">
                        <h4 class="skinName">Medusa</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MegaMecha')"><img class="circular" src="./skins/MegaMecha.png">
                        <h4 class="skinName">MegaMecha</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MegaPower')"><img class="circular" src="./skins/MegaPower.png">
                        <h4 class="skinName">MegaPower</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MeltingMan')"><img class="circular" src="./skins/MeltingMan.png">
                        <h4 class="skinName">MeltingMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mercury')"><img class="circular" src="./skins/Mercury.png">
                        <h4 class="skinName">Mercury</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MerryOutlaw')"><img class="circular" src="./skins/MerryOutlaw.png">
                        <h4 class="skinName">MerryOutlaw</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MerryPencil')"><img class="circular" src="./skins/MerryPencil.png">
                        <h4 class="skinName">MerryPencil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MetalFace')"><img class="circular" src="./skins/MetalFace.png">
                        <h4 class="skinName">MetalFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MetalGhoul')"><img class="circular" src="./skins/MetalGhoul.png">
                        <h4 class="skinName">MetalGhoul</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MetalScorpion')"><img class="circular" src="./skins/MetalScorpion.png">
                        <h4 class="skinName">MetalScorpion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Meteor')"><img class="circular" src="./skins/Meteor.png">
                        <h4 class="skinName">Meteor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MexicanSkull')"><img class="circular" src="./skins/MexicanSkull.png">
                        <h4 class="skinName">MexicanSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mico')"><img class="circular" src="./skins/Mico.png">
                        <h4 class="skinName">Mico</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MidnightYeti')"><img class="circular" src="./skins/MidnightYeti.png">
                        <h4 class="skinName">MidnightYeti</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Migthy')"><img class="circular" src="./skins/Migthy.png">
                        <h4 class="skinName">Migthy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Minotaur')"><img class="circular" src="./skins/Minotaur.png">
                        <h4 class="skinName">Minotaur</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mischievous')"><img class="circular" src="./skins/Mischievous.png">
                        <h4 class="skinName">Mischievous</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MistletoeMadness')"><img class="circular" src="./skins/MistletoeMadness.png">
                        <h4 class="skinName">MistletoeMadness</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MondayWorker')"><img class="circular" src="./skins/MondayWorker.png">
                        <h4 class="skinName">MondayWorker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Monk')"><img class="circular" src="./skins/Monk.png">
                        <h4 class="skinName">Monk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Monkey')"><img class="circular" src="./skins/Monkey.png">
                        <h4 class="skinName">Monkey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Monster')"><img class="circular" src="./skins/Monster.png">
                        <h4 class="skinName">Monster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Moo')"><img class="circular" src="./skins/Moo.png">
                        <h4 class="skinName">Moo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MoonAlisa')"><img class="circular" src="./skins/MoonAlisa.png">
                        <h4 class="skinName">MoonAlisa</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MoonShip')"><img class="circular" src="./skins/MoonShip.png">
                        <h4 class="skinName">MoonShip</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mountain')"><img class="circular" src="./skins/Mountain.png">
                        <h4 class="skinName">Mountain</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mouse')"><img class="circular" src="./skins/Mouse.png">
                        <h4 class="skinName">Mouse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Boss')"><img class="circular" src="./skins/Mr.Boss.png">
                        <h4 class="skinName">Mr.Boss</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Charming')"><img class="circular" src="./skins/Mr.Charming.png">
                        <h4 class="skinName">Mr.Charming</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Goose')"><img class="circular" src="./skins/Mr.Goose.png">
                        <h4 class="skinName">Mr.Goose</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Puzzled')"><img class="circular" src="./skins/Mr.Puzzled.png">
                        <h4 class="skinName">Mr.Puzzled</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Spanks')"><img class="circular" src="./skins/Mr.Spanks.png">
                        <h4 class="skinName">Mr.Spanks</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mr.Strange')"><img class="circular" src="./skins/Mr.Strange.png">
                        <h4 class="skinName">Mr.Strange</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MrsGrinch')"><img class="circular" src="./skins/MrsGrinch.png">
                        <h4 class="skinName">MrsGrinch</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MuffinHead')"><img class="circular" src="./skins/MuffinHead.png">
                        <h4 class="skinName">MuffinHead</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mummy')"><img class="circular" src="./skins/Mummy.png">
                        <h4 class="skinName">Mummy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MummyKing')"><img class="circular" src="./skins/MummyKing.png">
                        <h4 class="skinName">MummyKing</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mushroom')"><img class="circular" src="./skins/Mushroom.png">
                        <h4 class="skinName">Mushroom</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MushroomFace')"><img class="circular" src="./skins/MushroomFace.png">
                        <h4 class="skinName">MushroomFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Mutant')"><img class="circular" src="./skins/Mutant.png">
                        <h4 class="skinName">Mutant</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MutantHerb')"><img class="circular" src="./skins/MutantHerb.png">
                        <h4 class="skinName">MutantHerb</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('MysticBird')"><img class="circular" src="./skins/MysticBird.png">
                        <h4 class="skinName">MysticBird</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NecktieCat')"><img class="circular" src="./skins/NecktieCat.png">
                        <h4 class="skinName">NecktieCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NecroStrangler')"><img class="circular" src="./skins/NecroStrangler.png">
                        <h4 class="skinName">NecroStrangler</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Neila')"><img class="circular" src="./skins/Neila.png">
                        <h4 class="skinName">Neila</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NeonBug')"><img class="circular" src="./skins/NeonBug.png">
                        <h4 class="skinName">NeonBug</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Neptune')"><img class="circular" src="./skins/Neptune.png">
                        <h4 class="skinName">Neptune</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NeptunusSpider')"><img class="circular" src="./skins/NeptunusSpider.png">
                        <h4 class="skinName">NeptunusSpider</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nerdy')"><img class="circular" src="./skins/Nerdy.png">
                        <h4 class="skinName">Nerdy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NiceDoggy')"><img class="circular" src="./skins/NiceDoggy.png">
                        <h4 class="skinName">NiceDoggy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NiceEagle')"><img class="circular" src="./skins/NiceEagle.png">
                        <h4 class="skinName">NiceEagle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('NightHunter')"><img class="circular" src="./skins/NightHunter.png">
                        <h4 class="skinName">NightHunter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nightmare')"><img class="circular" src="./skins/Nightmare.png">
                        <h4 class="skinName">Nightmare</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nose')"><img class="circular" src="./skins/Nose.png">
                        <h4 class="skinName">Nose</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nuclear')"><img class="circular" src="./skins/Nuclear.png">
                        <h4 class="skinName">Nuclear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nuke')"><img class="circular" src="./skins/Nuke.png">
                        <h4 class="skinName">Nuke</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nun')"><img class="circular" src="./skins/Nun.png">
                        <h4 class="skinName">Nun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Nutcracker')"><img class="circular" src="./skins/Nutcracker.png">
                        <h4 class="skinName">Nutcracker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Octo')"><img class="circular" src="./skins/Octo.png">
                        <h4 class="skinName">Octo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Octopower')"><img class="circular" src="./skins/Octopower.png">
                        <h4 class="skinName">Octopower</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Octopower(Level3)')"><img class="circular" src="./skins/Octopower(Level3).png">
                        <h4 class="skinName">Octopower(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Octopus')"><img class="circular" src="./skins/Octopus.png">
                        <h4 class="skinName">Octopus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OculusOrbus')"><img class="circular" src="./skins/OculusOrbus.png">
                        <h4 class="skinName">OculusOrbus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Odd')"><img class="circular" src="./skins/Odd.png">
                        <h4 class="skinName">Odd</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ogre')"><img class="circular" src="./skins/Ogre.png">
                        <h4 class="skinName">Ogre</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OldKraken')"><img class="circular" src="./skins/OldKraken.png">
                        <h4 class="skinName">OldKraken</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OldOne')"><img class="circular" src="./skins/OldOne.png">
                        <h4 class="skinName">OldOne</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OldOne(Level3)')"><img class="circular" src="./skins/OldOne(Level3).png">
                        <h4 class="skinName">OldOne(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Omega')"><img class="circular" src="./skins/Omega.png">
                        <h4 class="skinName">Omega</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OmegaBlast')"><img class="circular" src="./skins/OmegaBlast.png">
                        <h4 class="skinName">OmegaBlast</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Omicron')"><img class="circular" src="./skins/Omicron.png">
                        <h4 class="skinName">Omicron</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Oni')"><img class="circular" src="./skins/Oni.png">
                        <h4 class="skinName">Oni</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ooze')"><img class="circular" src="./skins/Ooze.png">
                        <h4 class="skinName">Ooze</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OrcGrunt')"><img class="circular" src="./skins/OrcGrunt.png">
                        <h4 class="skinName">OrcGrunt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('OrcWarrior')"><img class="circular" src="./skins/OrcWarrior.png">
                        <h4 class="skinName">OrcWarrior</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Owl')"><img class="circular" src="./skins/Owl.png">
                        <h4 class="skinName">Owl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Paladin')"><img class="circular" src="./skins/Paladin.png">
                        <h4 class="skinName">Paladin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PalmTree')"><img class="circular" src="./skins/PalmTree.png">
                        <h4 class="skinName">PalmTree</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Panda')"><img class="circular" src="./skins/Panda.png">
                        <h4 class="skinName">Panda</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Panther')"><img class="circular" src="./skins/Panther.png">
                        <h4 class="skinName">Panther</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Parrot')"><img class="circular" src="./skins/Parrot.png">
                        <h4 class="skinName">Parrot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PartyMode')"><img class="circular" src="./skins/PartyMode.png">
                        <h4 class="skinName">PartyMode</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PartyTime')"><img class="circular" src="./skins/PartyTime.png">
                        <h4 class="skinName">PartyTime</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pencil')"><img class="circular" src="./skins/Pencil.png">
                        <h4 class="skinName">Pencil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Penguin')"><img class="circular" src="./skins/Penguin.png">
                        <h4 class="skinName">Penguin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PepeLoco')"><img class="circular" src="./skins/PepeLoco.png">
                        <h4 class="skinName">PepeLoco</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Performer')"><img class="circular" src="./skins/Performer.png">
                        <h4 class="skinName">Performer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Phantom')"><img class="circular" src="./skins/Phantom.png">
                        <h4 class="skinName">Phantom</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pharaoh')"><img class="circular" src="./skins/Pharaoh.png">
                        <h4 class="skinName">Pharaoh</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Phoenix')"><img class="circular" src="./skins/Phoenix.png">
                        <h4 class="skinName">Phoenix</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Phoenix(Level3)')"><img class="circular" src="./skins/Phoenix(Level3).png">
                        <h4 class="skinName">Phoenix(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PieSlice')"><img class="circular" src="./skins/PieSlice.png">
                        <h4 class="skinName">PieSlice</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PigBall')"><img class="circular" src="./skins/PigBall.png">
                        <h4 class="skinName">PigBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Piggie')"><img class="circular" src="./skins/Piggie.png">
                        <h4 class="skinName">Piggie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Piglet')"><img class="circular" src="./skins/Piglet.png">
                        <h4 class="skinName">Piglet</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pilgrim')"><img class="circular" src="./skins/Pilgrim.png">
                        <h4 class="skinName">Pilgrim</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PineHead')"><img class="circular" src="./skins/PineHead.png">
                        <h4 class="skinName">PineHead</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pineapple')"><img class="circular" src="./skins/Pineapple.png">
                        <h4 class="skinName">Pineapple</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PingPong')"><img class="circular" src="./skins/PingPong.png">
                        <h4 class="skinName">PingPong</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pinhata')"><img class="circular" src="./skins/Pinhata.png">
                        <h4 class="skinName">Pinhata</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pirate')"><img class="circular" src="./skins/Pirate.png">
                        <h4 class="skinName">Pirate</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PirateMaiden')"><img class="circular" src="./skins/PirateMaiden.png">
                        <h4 class="skinName">PirateMaiden</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pisces')"><img class="circular" src="./skins/Pisces.png">
                        <h4 class="skinName">Pisces</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PixelKong')"><img class="circular" src="./skins/PixelKong.png">
                        <h4 class="skinName">PixelKong</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pixie')"><img class="circular" src="./skins/Pixie.png">
                        <h4 class="skinName">Pixie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pizza')"><img class="circular" src="./skins/Pizza.png">
                        <h4 class="skinName">Pizza</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Plague')"><img class="circular" src="./skins/Plague.png">
                        <h4 class="skinName">Plague</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PlanetCat')"><img class="circular" src="./skins/PlanetCat.png">
                        <h4 class="skinName">PlanetCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pluto')"><img class="circular" src="./skins/Pluto.png">
                        <h4 class="skinName">Pluto</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Poet')"><img class="circular" src="./skins/Poet.png">
                        <h4 class="skinName">Poet</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PoisonRose')"><img class="circular" src="./skins/PoisonRose.png">
                        <h4 class="skinName">PoisonRose</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PokerAce')"><img class="circular" src="./skins/PokerAce.png">
                        <h4 class="skinName">PokerAce</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PolarBear')"><img class="circular" src="./skins/PolarBear.png">
                        <h4 class="skinName">PolarBear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Poseidon')"><img class="circular" src="./skins/Poseidon.png">
                        <h4 class="skinName">Poseidon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerBadger')"><img class="circular" src="./skins/PowerBadger.png">
                        <h4 class="skinName">PowerBadger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerFighter')"><img class="circular" src="./skins/PowerFighter.png">
                        <h4 class="skinName">PowerFighter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerGirl')"><img class="circular" src="./skins/PowerGirl.png">
                        <h4 class="skinName">PowerGirl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerGlove')"><img class="circular" src="./skins/PowerGlove.png">
                        <h4 class="skinName">PowerGlove</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerMask')"><img class="circular" src="./skins/PowerMask.png">
                        <h4 class="skinName">PowerMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PowerNinja')"><img class="circular" src="./skins/PowerNinja.png">
                        <h4 class="skinName">PowerNinja</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Prankster')"><img class="circular" src="./skins/Prankster.png">
                        <h4 class="skinName">Prankster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Predictor')"><img class="circular" src="./skins/Predictor.png">
                        <h4 class="skinName">Predictor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Prey')"><img class="circular" src="./skins/Prey.png">
                        <h4 class="skinName">Prey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Primal')"><img class="circular" src="./skins/Primal.png">
                        <h4 class="skinName">Primal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PrincessSwift')"><img class="circular" src="./skins/PrincessSwift.png">
                        <h4 class="skinName">PrincessSwift</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Psycho')"><img class="circular" src="./skins/Psycho.png">
                        <h4 class="skinName">Psycho</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PsychoDriller')"><img class="circular" src="./skins/PsychoDriller.png">
                        <h4 class="skinName">PsychoDriller</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Psychopanda')"><img class="circular" src="./skins/Psychopanda.png">
                        <h4 class="skinName">Psychopanda</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pug')"><img class="circular" src="./skins/Pug.png">
                        <h4 class="skinName">Pug</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Pumpkin')"><img class="circular" src="./skins/Pumpkin.png">
                        <h4 class="skinName">Pumpkin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Punk')"><img class="circular" src="./skins/Punk.png">
                        <h4 class="skinName">Punk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Puppy')"><img class="circular" src="./skins/Puppy.png">
                        <h4 class="skinName">Puppy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PurpleDragon')"><img class="circular" src="./skins/PurpleDragon.png">
                        <h4 class="skinName">PurpleDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PurpleDragon(Level3)')"><img class="circular" src="./skins/PurpleDragon(Level3).png">
                        <h4 class="skinName">PurpleDragon(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('PyramidEye')"><img class="circular" src="./skins/PyramidEye.png">
                        <h4 class="skinName">PyramidEye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Queasy')"><img class="circular" src="./skins/Queasy.png">
                        <h4 class="skinName">Queasy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Question')"><img class="circular" src="./skins/Question.png">
                        <h4 class="skinName">Question</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Quirky')"><img class="circular" src="./skins/Quirky.png">
                        <h4 class="skinName">Quirky</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rabbit')"><img class="circular" src="./skins/Rabbit.png">
                        <h4 class="skinName">Rabbit</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rabid')"><img class="circular" src="./skins/Rabid.png">
                        <h4 class="skinName">Rabid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RaccoonJutsu')"><img class="circular" src="./skins/RaccoonJutsu.png">
                        <h4 class="skinName">RaccoonJutsu</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Radar')"><img class="circular" src="./skins/Radar.png">
                        <h4 class="skinName">Radar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RadicalSmile')"><img class="circular" src="./skins/RadicalSmile.png">
                        <h4 class="skinName">RadicalSmile</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rage')"><img class="circular" src="./skins/Rage.png">
                        <h4 class="skinName">Rage</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RaidBoss')"><img class="circular" src="./skins/RaidBoss.png">
                        <h4 class="skinName">RaidBoss</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Raider')"><img class="circular" src="./skins/Raider.png">
                        <h4 class="skinName">Raider</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rainbow')"><img class="circular" src="./skins/Rainbow.png">
                        <h4 class="skinName">Rainbow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ranger')"><img class="circular" src="./skins/Ranger.png">
                        <h4 class="skinName">Ranger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Raptor')"><img class="circular" src="./skins/Raptor.png">
                        <h4 class="skinName">Raptor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rascal')"><img class="circular" src="./skins/Rascal.png">
                        <h4 class="skinName">Rascal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RaspyElf')"><img class="circular" src="./skins/RaspyElf.png">
                        <h4 class="skinName">RaspyElf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rastafari')"><img class="circular" src="./skins/Rastafari.png">
                        <h4 class="skinName">Rastafari</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Raven')"><img class="circular" src="./skins/Raven.png">
                        <h4 class="skinName">Raven</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Reaper')"><img class="circular" src="./skins/Reaper.png">
                        <h4 class="skinName">Reaper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Reaper(Level3)')"><img class="circular" src="./skins/Reaper(Level3).png">
                        <h4 class="skinName">Reaper(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RedBeard')"><img class="circular" src="./skins/RedBeard.png">
                        <h4 class="skinName">RedBeard</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RedDragon')"><img class="circular" src="./skins/RedDragon.png">
                        <h4 class="skinName">RedDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RedDragon(Level3)')"><img class="circular" src="./skins/RedDragon(Level3).png">
                        <h4 class="skinName">RedDragon(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RedFriend')"><img class="circular" src="./skins/RedFriend.png">
                        <h4 class="skinName">RedFriend</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RedPulse')"><img class="circular" src="./skins/RedPulse.png">
                        <h4 class="skinName">RedPulse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Reindeer')"><img class="circular" src="./skins/Reindeer.png">
                        <h4 class="skinName">Reindeer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Remy')"><img class="circular" src="./skins/Remy.png">
                        <h4 class="skinName">Remy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Reptilian')"><img class="circular" src="./skins/Reptilian.png">
                        <h4 class="skinName">Reptilian</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RhinoBoxer')"><img class="circular" src="./skins/RhinoBoxer.png">
                        <h4 class="skinName">RhinoBoxer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Ringmaster')"><img class="circular" src="./skins/Ringmaster.png">
                        <h4 class="skinName">Ringmaster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RoboKid')"><img class="circular" src="./skins/RoboKid.png">
                        <h4 class="skinName">RoboKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RoboKid(Level3)')"><img class="circular" src="./skins/RoboKid(Level3).png">
                        <h4 class="skinName">RoboKid(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rocker')"><img class="circular" src="./skins/Rocker.png">
                        <h4 class="skinName">Rocker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rocket')"><img class="circular" src="./skins/Rocket.png">
                        <h4 class="skinName">Rocket</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RocketDeer')"><img class="circular" src="./skins/RocketDeer.png">
                        <h4 class="skinName">RocketDeer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rogue')"><img class="circular" src="./skins/Rogue.png">
                        <h4 class="skinName">Rogue</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RogueBunny')"><img class="circular" src="./skins/RogueBunny.png">
                        <h4 class="skinName">RogueBunny</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RogueSamurai')"><img class="circular" src="./skins/RogueSamurai.png">
                        <h4 class="skinName">RogueSamurai</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RollerBot')"><img class="circular" src="./skins/RollerBot.png">
                        <h4 class="skinName">RollerBot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Rooster')"><img class="circular" src="./skins/Rooster.png">
                        <h4 class="skinName">Rooster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RootGnome')"><img class="circular" src="./skins/RootGnome.png">
                        <h4 class="skinName">RootGnome</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RoseLow')"><img class="circular" src="./skins/RoseLow.png">
                        <h4 class="skinName">RoseLow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('RowdyShroom')"><img class="circular" src="./skins/RowdyShroom.png">
                        <h4 class="skinName">RowdyShroom</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sabertooth')"><img class="circular" src="./skins/Sabertooth.png">
                        <h4 class="skinName">Sabertooth</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sad')"><img class="circular" src="./skins/Sad.png">
                        <h4 class="skinName">Sad</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Saggitarius')"><img class="circular" src="./skins/Saggitarius.png">
                        <h4 class="skinName">Saggitarius</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Salamander')"><img class="circular" src="./skins/Salamander.png">
                        <h4 class="skinName">Salamander</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Salamander(Level3)')"><img class="circular" src="./skins/Salamander(Level3).png">
                        <h4 class="skinName">Salamander(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Samba')"><img class="circular" src="./skins/Samba.png">
                        <h4 class="skinName">Samba</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SandWorm')"><img class="circular" src="./skins/SandWorm.png">
                        <h4 class="skinName">SandWorm</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Santa')"><img class="circular" src="./skins/Santa.png">
                        <h4 class="skinName">Santa</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SantaClaus')"><img class="circular" src="./skins/SantaClaus.png">
                        <h4 class="skinName">SantaClaus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Saturn')"><img class="circular" src="./skins/Saturn.png">
                        <h4 class="skinName">Saturn</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sausage')"><img class="circular" src="./skins/Sausage.png">
                        <h4 class="skinName">Sausage</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sausage(Level3)')"><img class="circular" src="./skins/Sausage(Level3).png">
                        <h4 class="skinName">Sausage(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scar')"><img class="circular" src="./skins/Scar.png">
                        <h4 class="skinName">Scar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scarab')"><img class="circular" src="./skins/Scarab.png">
                        <h4 class="skinName">Scarab</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scarecrow')"><img class="circular" src="./skins/Scarecrow.png">
                        <h4 class="skinName">Scarecrow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scavenger')"><img class="circular" src="./skins/Scavenger.png">
                        <h4 class="skinName">Scavenger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scorpio')"><img class="circular" src="./skins/Scorpio.png">
                        <h4 class="skinName">Scorpio</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scott')"><img class="circular" src="./skins/Scott.png">
                        <h4 class="skinName">Scott</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ScreaminMeemie')"><img class="circular" src="./skins/ScreaminMeemie.png">
                        <h4 class="skinName">ScreaminMeemie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scroll')"><img class="circular" src="./skins/Scroll.png">
                        <h4 class="skinName">Scroll</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Scythe')"><img class="circular" src="./skins/Scythe.png">
                        <h4 class="skinName">Scythe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SeaExplorer')"><img class="circular" src="./skins/SeaExplorer.png">
                        <h4 class="skinName">SeaExplorer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SeaTurtle')"><img class="circular" src="./skins/SeaTurtle.png">
                        <h4 class="skinName">SeaTurtle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SeaWizard')"><img class="circular" src="./skins/SeaWizard.png">
                        <h4 class="skinName">SeaWizard</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SeaWizard(Level3)')"><img class="circular" src="./skins/SeaWizard(Level3).png">
                        <h4 class="skinName">SeaWizard(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Seal')"><img class="circular" src="./skins/Seal.png">
                        <h4 class="skinName">Seal</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SealKnight')"><img class="circular" src="./skins/SealKnight.png">
                        <h4 class="skinName">SealKnight</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Seer')"><img class="circular" src="./skins/Seer.png">
                        <h4 class="skinName">Seer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shadow')"><img class="circular" src="./skins/Shadow.png">
                        <h4 class="skinName">Shadow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ShadowMan')"><img class="circular" src="./skins/ShadowMan.png">
                        <h4 class="skinName">ShadowMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shark')"><img class="circular" src="./skins/Shark.png">
                        <h4 class="skinName">Shark</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SheepBall')"><img class="circular" src="./skins/SheepBall.png">
                        <h4 class="skinName">SheepBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sherbert')"><img class="circular" src="./skins/Sherbert.png">
                        <h4 class="skinName">Sherbert</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sheriff')"><img class="circular" src="./skins/Sheriff.png">
                        <h4 class="skinName">Sheriff</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shogun')"><img class="circular" src="./skins/Shogun.png">
                        <h4 class="skinName">Shogun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shrieker')"><img class="circular" src="./skins/Shrieker.png">
                        <h4 class="skinName">Shrieker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shuriken')"><img class="circular" src="./skins/Shuriken.png">
                        <h4 class="skinName">Shuriken</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Shuttle')"><img class="circular" src="./skins/Shuttle.png">
                        <h4 class="skinName">Shuttle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SilentFox')"><img class="circular" src="./skins/SilentFox.png">
                        <h4 class="skinName">SilentFox</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SilentNun')"><img class="circular" src="./skins/SilentNun.png">
                        <h4 class="skinName">SilentNun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SillyGriffin')"><img class="circular" src="./skins/SillyGriffin.png">
                        <h4 class="skinName">SillyGriffin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SilverTusk')"><img class="circular" src="./skins/SilverTusk.png">
                        <h4 class="skinName">SilverTusk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Skeleton')"><img class="circular" src="./skins/Skeleton.png">
                        <h4 class="skinName">Skeleton</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullArtifact')"><img class="circular" src="./skins/SkullArtifact.png">
                        <h4 class="skinName">SkullArtifact</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullBow')"><img class="circular" src="./skins/SkullBow.png">
                        <h4 class="skinName">SkullBow</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullCactus')"><img class="circular" src="./skins/SkullCactus.png">
                        <h4 class="skinName">SkullCactus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullClaus')"><img class="circular" src="./skins/SkullClaus.png">
                        <h4 class="skinName">SkullClaus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullFace')"><img class="circular" src="./skins/SkullFace.png">
                        <h4 class="skinName">SkullFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullMagician')"><img class="circular" src="./skins/SkullMagician.png">
                        <h4 class="skinName">SkullMagician</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullRibbon')"><img class="circular" src="./skins/SkullRibbon.png">
                        <h4 class="skinName">SkullRibbon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullSamurai')"><img class="circular" src="./skins/SkullSamurai.png">
                        <h4 class="skinName">SkullSamurai</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SkullSwords')"><img class="circular" src="./skins/SkullSwords.png">
                        <h4 class="skinName">SkullSwords</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Skyrocket')"><img class="circular" src="./skins/Skyrocket.png">
                        <h4 class="skinName">Skyrocket</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Slartie')"><img class="circular" src="./skins/Slartie.png">
                        <h4 class="skinName">Slartie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Slaughter')"><img class="circular" src="./skins/Slaughter.png">
                        <h4 class="skinName">Slaughter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SleepyFox')"><img class="circular" src="./skins/SleepyFox.png">
                        <h4 class="skinName">SleepyFox</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SlimeBeast')"><img class="circular" src="./skins/SlimeBeast.png">
                        <h4 class="skinName">SlimeBeast</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SlimeFace')"><img class="circular" src="./skins/SlimeFace.png">
                        <h4 class="skinName">SlimeFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Slingblade')"><img class="circular" src="./skins/Slingblade.png">
                        <h4 class="skinName">Slingblade</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sly')"><img class="circular" src="./skins/Sly.png">
                        <h4 class="skinName">Sly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Smelly')"><img class="circular" src="./skins/Smelly.png">
                        <h4 class="skinName">Smelly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Smile')"><img class="circular" src="./skins/Smile.png">
                        <h4 class="skinName">Smile</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Smokey')"><img class="circular" src="./skins/Smokey.png">
                        <h4 class="skinName">Smokey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Smyg')"><img class="circular" src="./skins/Smyg.png">
                        <h4 class="skinName">Smyg</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SnackShark')"><img class="circular" src="./skins/SnackShark.png">
                        <h4 class="skinName">SnackShark</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Snake')"><img class="circular" src="./skins/Snake.png">
                        <h4 class="skinName">Snake</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Snout')"><img class="circular" src="./skins/Snout.png">
                        <h4 class="skinName">Snout</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SnowBiker')"><img class="circular" src="./skins/SnowBiker.png">
                        <h4 class="skinName">SnowBiker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Snowboarder')"><img class="circular" src="./skins/Snowboarder.png">
                        <h4 class="skinName">Snowboarder</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Snowman')"><img class="circular" src="./skins/Snowman.png">
                        <h4 class="skinName">Snowman</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SnowyJoe')"><img class="circular" src="./skins/SnowyJoe.png">
                        <h4 class="skinName">SnowyJoe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SoccerBall')"><img class="circular" src="./skins/SoccerBall.png">
                        <h4 class="skinName">SoccerBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SoccerBoot')"><img class="circular" src="./skins/SoccerBoot.png">
                        <h4 class="skinName">SoccerBoot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SodaCan')"><img class="circular" src="./skins/SodaCan.png">
                        <h4 class="skinName">SodaCan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Soloist')"><img class="circular" src="./skins/Soloist.png">
                        <h4 class="skinName">Soloist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sombrero')"><img class="circular" src="./skins/Sombrero.png">
                        <h4 class="skinName">Sombrero</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Songsmith')"><img class="circular" src="./skins/Songsmith.png">
                        <h4 class="skinName">Songsmith</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SonicBoom')"><img class="circular" src="./skins/SonicBoom.png">
                        <h4 class="skinName">SonicBoom</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sorceress')"><img class="circular" src="./skins/Sorceress.png">
                        <h4 class="skinName">Sorceress</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SoulHunter')"><img class="circular" src="./skins/SoulHunter.png">
                        <h4 class="skinName">SoulHunter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SourCandy')"><img class="circular" src="./skins/SourCandy.png">
                        <h4 class="skinName">SourCandy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpaceDog')"><img class="circular" src="./skins/SpaceDog.png">
                        <h4 class="skinName">SpaceDog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpaceHunter')"><img class="circular" src="./skins/SpaceHunter.png">
                        <h4 class="skinName">SpaceHunter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpaceInk')"><img class="circular" src="./skins/SpaceInk.png">
                        <h4 class="skinName">SpaceInk</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpaceWarden')"><img class="circular" src="./skins/SpaceWarden.png">
                        <h4 class="skinName">SpaceWarden</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpaceWarrior')"><img class="circular" src="./skins/SpaceWarrior.png">
                        <h4 class="skinName">SpaceWarrior</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spark')"><img class="circular" src="./skins/Spark.png">
                        <h4 class="skinName">Spark</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spark(Level3)')"><img class="circular" src="./skins/Spark(Level3).png">
                        <h4 class="skinName">Spark(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpectralOwl')"><img class="circular" src="./skins/SpectralOwl.png">
                        <h4 class="skinName">SpectralOwl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spider')"><img class="circular" src="./skins/Spider.png">
                        <h4 class="skinName">Spider</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spike')"><img class="circular" src="./skins/Spike.png">
                        <h4 class="skinName">Spike</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpikeFish')"><img class="circular" src="./skins/SpikeFish.png">
                        <h4 class="skinName">SpikeFish</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpikeFlower')"><img class="circular" src="./skins/SpikeFlower.png">
                        <h4 class="skinName">SpikeFlower</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SpinnerKid')"><img class="circular" src="./skins/SpinnerKid.png">
                        <h4 class="skinName">SpinnerKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spitfire')"><img class="circular" src="./skins/Spitfire.png">
                        <h4 class="skinName">Spitfire</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Splatter')"><img class="circular" src="./skins/Splatter.png">
                        <h4 class="skinName">Splatter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spogh')"><img class="circular" src="./skins/Spogh.png">
                        <h4 class="skinName">Spogh</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spooky')"><img class="circular" src="./skins/Spooky.png">
                        <h4 class="skinName">Spooky</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spooky(Level3)')"><img class="circular" src="./skins/Spooky(Level3).png">
                        <h4 class="skinName">Spooky(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sprinter')"><img class="circular" src="./skins/Sprinter.png">
                        <h4 class="skinName">Sprinter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Spy')"><img class="circular" src="./skins/Spy.png">
                        <h4 class="skinName">Spy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Squiggly')"><img class="circular" src="./skins/Squiggly.png">
                        <h4 class="skinName">Squiggly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Squirrel')"><img class="circular" src="./skins/Squirrel.png">
                        <h4 class="skinName">Squirrel</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarBall')"><img class="circular" src="./skins/StarBall.png">
                        <h4 class="skinName">StarBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarEagle')"><img class="circular" src="./skins/StarEagle.png">
                        <h4 class="skinName">StarEagle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarPilot')"><img class="circular" src="./skins/StarPilot.png">
                        <h4 class="skinName">StarPilot</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarPlayer')"><img class="circular" src="./skins/StarPlayer.png">
                        <h4 class="skinName">StarPlayer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarSentinel')"><img class="circular" src="./skins/StarSentinel.png">
                        <h4 class="skinName">StarSentinel</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Starboy')"><img class="circular" src="./skins/Starboy.png">
                        <h4 class="skinName">Starboy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Starfighter')"><img class="circular" src="./skins/Starfighter.png">
                        <h4 class="skinName">Starfighter</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Starfish')"><img class="circular" src="./skins/Starfish.png">
                        <h4 class="skinName">Starfish</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StarsandStripes')"><img class="circular" src="./skins/StarsandStripes.png">
                        <h4 class="skinName">StarsandStripes</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Statue')"><img class="circular" src="./skins/Statue.png">
                        <h4 class="skinName">Statue</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SteamDiver')"><img class="circular" src="./skins/SteamDiver.png">
                        <h4 class="skinName">SteamDiver</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SteamFreak')"><img class="circular" src="./skins/SteamFreak.png">
                        <h4 class="skinName">SteamFreak</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SteamMask')"><img class="circular" src="./skins/SteamMask.png">
                        <h4 class="skinName">SteamMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SteampunkCat')"><img class="circular" src="./skins/SteampunkCat.png">
                        <h4 class="skinName">SteampunkCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SteelRam')"><img class="circular" src="./skins/SteelRam.png">
                        <h4 class="skinName">SteelRam</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StoneTool')"><img class="circular" src="./skins/StoneTool.png">
                        <h4 class="skinName">StoneTool</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StormFist')"><img class="circular" src="./skins/StormFist.png">
                        <h4 class="skinName">StormFist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Strawberry')"><img class="circular" src="./skins/Strawberry.png">
                        <h4 class="skinName">Strawberry</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('StreetBull')"><img class="circular" src="./skins/StreetBull.png">
                        <h4 class="skinName">StreetBull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Striker')"><img class="circular" src="./skins/Striker.png">
                        <h4 class="skinName">Striker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SugarDash')"><img class="circular" src="./skins/SugarDash.png">
                        <h4 class="skinName">SugarDash</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sumo')"><img class="circular" src="./skins/Sumo.png">
                        <h4 class="skinName">Sumo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sun')"><img class="circular" src="./skins/Sun.png">
                        <h4 class="skinName">Sun</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sunbath')"><img class="circular" src="./skins/Sunbath.png">
                        <h4 class="skinName">Sunbath</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sunflower')"><img class="circular" src="./skins/Sunflower.png">
                        <h4 class="skinName">Sunflower</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SuperCar')"><img class="circular" src="./skins/SuperCar.png">
                        <h4 class="skinName">SuperCar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Superstar')"><img class="circular" src="./skins/Superstar.png">
                        <h4 class="skinName">Superstar</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Suplex')"><img class="circular" src="./skins/Suplex.png">
                        <h4 class="skinName">Suplex</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Supremus')"><img class="circular" src="./skins/Supremus.png">
                        <h4 class="skinName">Supremus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Surfer')"><img class="circular" src="./skins/Surfer.png">
                        <h4 class="skinName">Surfer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SurfinBird')"><img class="circular" src="./skins/SurfinBird.png">
                        <h4 class="skinName">SurfinBird</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SurprisedCat')"><img class="circular" src="./skins/SurprisedCat.png">
                        <h4 class="skinName">SurprisedCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Sweaty')"><img class="circular" src="./skins/Sweaty.png">
                        <h4 class="skinName">Sweaty</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('SweetTendril')"><img class="circular" src="./skins/SweetTendril.png">
                        <h4 class="skinName">SweetTendril</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Swimmer')"><img class="circular" src="./skins/Swimmer.png">
                        <h4 class="skinName">Swimmer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('T-Rex')"><img class="circular" src="./skins/T-Rex.png">
                        <h4 class="skinName">T-Rex</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TBBCE-Alex')"><img class="circular" src="./skins/TBBCE-Alex.png">
                        <h4 class="skinName">TBBCE-Alex</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Taco')"><img class="circular" src="./skins/Taco.png">
                        <h4 class="skinName">Taco</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TapeGuy')"><img class="circular" src="./skins/TapeGuy.png">
                        <h4 class="skinName">TapeGuy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Target')"><img class="circular" src="./skins/Target.png">
                        <h4 class="skinName">Target</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Taurus')"><img class="circular" src="./skins/Taurus.png">
                        <h4 class="skinName">Taurus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TeaTime')"><img class="circular" src="./skins/TeaTime.png">
                        <h4 class="skinName">TeaTime</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TechnoKat')"><img class="circular" src="./skins/TechnoKat.png">
                        <h4 class="skinName">TechnoKat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TechnoKid')"><img class="circular" src="./skins/TechnoKid.png">
                        <h4 class="skinName">TechnoKid</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TechnoNinja')"><img class="circular" src="./skins/TechnoNinja.png">
                        <h4 class="skinName">TechnoNinja</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TechnoQuack')"><img class="circular" src="./skins/TechnoQuack.png">
                        <h4 class="skinName">TechnoQuack</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TenderHeartBear')"><img class="circular" src="./skins/TenderHeartBear.png">
                        <h4 class="skinName">TenderHeartBear</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Tennist')"><img class="circular" src="./skins/Tennist.png">
                        <h4 class="skinName">Tennist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Termite')"><img class="circular" src="./skins/Termite.png">
                        <h4 class="skinName">Termite</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Terra')"><img class="circular" src="./skins/Terra.png">
                        <h4 class="skinName">Terra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Terrible')"><img class="circular" src="./skins/Terrible.png">
                        <h4 class="skinName">Terrible</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ThanksgivingPumpkin')"><img class="circular" src="./skins/ThanksgivingPumpkin.png">
                        <h4 class="skinName">ThanksgivingPumpkin</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ThanksgivingTurkey')"><img class="circular" src="./skins/ThanksgivingTurkey.png">
                        <h4 class="skinName">ThanksgivingTurkey</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheGaunt')"><img class="circular" src="./skins/TheGaunt.png">
                        <h4 class="skinName">TheGaunt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheHood')"><img class="circular" src="./skins/TheHood.png">
                        <h4 class="skinName">TheHood</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheMaw')"><img class="circular" src="./skins/TheMaw.png">
                        <h4 class="skinName">TheMaw</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheMiasma')"><img class="circular" src="./skins/TheMiasma.png">
                        <h4 class="skinName">TheMiasma</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheOracle')"><img class="circular" src="./skins/TheOracle.png">
                        <h4 class="skinName">TheOracle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheProfessional')"><img class="circular" src="./skins/TheProfessional.png">
                        <h4 class="skinName">TheProfessional</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheReaper')"><img class="circular" src="./skins/TheReaper.png">
                        <h4 class="skinName">TheReaper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheScorcher')"><img class="circular" src="./skins/TheScorcher.png">
                        <h4 class="skinName">TheScorcher</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheStranger')"><img class="circular" src="./skins/TheStranger.png">
                        <h4 class="skinName">TheStranger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheTiger')"><img class="circular" src="./skins/TheTiger.png">
                        <h4 class="skinName">TheTiger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TheTinker')"><img class="circular" src="./skins/TheTinker.png">
                        <h4 class="skinName">TheTinker</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Theorist')"><img class="circular" src="./skins/Theorist.png">
                        <h4 class="skinName">Theorist</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Thief')"><img class="circular" src="./skins/Thief.png">
                        <h4 class="skinName">Thief</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ThinkTank')"><img class="circular" src="./skins/ThinkTank.png">
                        <h4 class="skinName">ThinkTank</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Thirteen')"><img class="circular" src="./skins/Thirteen.png">
                        <h4 class="skinName">Thirteen</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ThugChihuahua')"><img class="circular" src="./skins/ThugChihuahua.png">
                        <h4 class="skinName">ThugChihuahua</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Tiger')"><img class="circular" src="./skins/Tiger.png">
                        <h4 class="skinName">Tiger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TimeDoctor')"><img class="circular" src="./skins/TimeDoctor.png">
                        <h4 class="skinName">TimeDoctor</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TimeDude')"><img class="circular" src="./skins/TimeDude.png">
                        <h4 class="skinName">TimeDude</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TinyJack')"><img class="circular" src="./skins/TinyJack.png">
                        <h4 class="skinName">TinyJack</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TinyReaper')"><img class="circular" src="./skins/TinyReaper.png">
                        <h4 class="skinName">TinyReaper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Toco')"><img class="circular" src="./skins/Toco.png">
                        <h4 class="skinName">Toco</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Tomato')"><img class="circular" src="./skins/Tomato.png">
                        <h4 class="skinName">Tomato</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Toon')"><img class="circular" src="./skins/Toon.png">
                        <h4 class="skinName">Toon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ToothTroll')"><img class="circular" src="./skins/ToothTroll.png">
                        <h4 class="skinName">ToothTroll</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TotallyAlexis')"><img class="circular" src="./skins/TotallyAlexis.png">
                        <h4 class="skinName">TotallyAlexis</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TotallyChloe')"><img class="circular" src="./skins/TotallyChloe.png">
                        <h4 class="skinName">TotallyChloe</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TotallySara')"><img class="circular" src="./skins/TotallySara.png">
                        <h4 class="skinName">TotallySara</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Tough')"><img class="circular" src="./skins/Tough.png">
                        <h4 class="skinName">Tough</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Toxic')"><img class="circular" src="./skins/Toxic.png">
                        <h4 class="skinName">Toxic</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ToxicEater')"><img class="circular" src="./skins/ToxicEater.png">
                        <h4 class="skinName">ToxicEater</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Triceratops')"><img class="circular" src="./skins/Triceratops.png">
                        <h4 class="skinName">Triceratops</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Triceratops(Level3)')"><img class="circular" src="./skins/Triceratops(Level3).png">
                        <h4 class="skinName">Triceratops(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Trickster')"><img class="circular" src="./skins/Trickster.png">
                        <h4 class="skinName">Trickster</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TrippyCat')"><img class="circular" src="./skins/TrippyCat.png">
                        <h4 class="skinName">TrippyCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Troldir')"><img class="circular" src="./skins/Troldir.png">
                        <h4 class="skinName">Troldir</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('TrollFace')"><img class="circular" src="./skins/TrollFace.png">
                        <h4 class="skinName">TrollFace</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Turtle')"><img class="circular" src="./skins/Turtle.png">
                        <h4 class="skinName">Turtle</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('UFO')"><img class="circular" src="./skins/UFO.png">
                        <h4 class="skinName">UFO</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('UncleSam')"><img class="circular" src="./skins/UncleSam.png">
                        <h4 class="skinName">UncleSam</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Undead')"><img class="circular" src="./skins/Undead.png">
                        <h4 class="skinName">Undead</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Unicorn')"><img class="circular" src="./skins/Unicorn.png">
                        <h4 class="skinName">Unicorn</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Unicorn(Level3)')"><img class="circular" src="./skins/Unicorn(Level3).png">
                        <h4 class="skinName">Unicorn(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('UniversalRanger')"><img class="circular" src="./skins/UniversalRanger.png">
                        <h4 class="skinName">UniversalRanger</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('UnknownTotem')"><img class="circular" src="./skins/UnknownTotem.png">
                        <h4 class="skinName">UnknownTotem</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Uranus')"><img class="circular" src="./skins/Uranus.png">
                        <h4 class="skinName">Uranus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Vampire')"><img class="circular" src="./skins/Vampire.png">
                        <h4 class="skinName">Vampire</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Vampy')"><img class="circular" src="./skins/Vampy.png">
                        <h4 class="skinName">Vampy</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Vega')"><img class="circular" src="./skins/Vega.png">
                        <h4 class="skinName">Vega</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Venus')"><img class="circular" src="./skins/Venus.png">
                        <h4 class="skinName">Venus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Vicious')"><img class="circular" src="./skins/Vicious.png">
                        <h4 class="skinName">Vicious</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Viking')"><img class="circular" src="./skins/Viking.png">
                        <h4 class="skinName">Viking</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Viper')"><img class="circular" src="./skins/Viper.png">
                        <h4 class="skinName">Viper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Virgil')"><img class="circular" src="./skins/Virgil.png">
                        <h4 class="skinName">Virgil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Virginia')"><img class="circular" src="./skins/Virginia.png">
                        <h4 class="skinName">Virginia</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Virgo')"><img class="circular" src="./skins/Virgo.png">
                        <h4 class="skinName">Virgo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Virtuoso')"><img class="circular" src="./skins/Virtuoso.png">
                        <h4 class="skinName">Virtuoso</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Virus')"><img class="circular" src="./skins/Virus.png">
                        <h4 class="skinName">Virus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('VisibleConfusion')"><img class="circular" src="./skins/VisibleConfusion.png">
                        <h4 class="skinName">VisibleConfusion</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Volcano')"><img class="circular" src="./skins/Volcano.png">
                        <h4 class="skinName">Volcano</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Voracious')"><img class="circular" src="./skins/Voracious.png">
                        <h4 class="skinName">Voracious</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WackyEgg')"><img class="circular" src="./skins/WackyEgg.png">
                        <h4 class="skinName">WackyEgg</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WackyHero')"><img class="circular" src="./skins/WackyHero.png">
                        <h4 class="skinName">WackyHero</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WackyHyena')"><img class="circular" src="./skins/WackyHyena.png">
                        <h4 class="skinName">WackyHyena</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WalkingHand')"><img class="circular" src="./skins/WalkingHand.png">
                        <h4 class="skinName">WalkingHand</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WalrusArt')"><img class="circular" src="./skins/WalrusArt.png">
                        <h4 class="skinName">WalrusArt</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WalrusBall')"><img class="circular" src="./skins/WalrusBall.png">
                        <h4 class="skinName">WalrusBall</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WarHero')"><img class="circular" src="./skins/WarHero.png">
                        <h4 class="skinName">WarHero</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WarMask')"><img class="circular" src="./skins/WarMask.png">
                        <h4 class="skinName">WarMask</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WarPaint')"><img class="circular" src="./skins/WarPaint.png">
                        <h4 class="skinName">WarPaint</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WarTank')"><img class="circular" src="./skins/WarTank.png">
                        <h4 class="skinName">WarTank</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Warhorse')"><img class="circular" src="./skins/Warhorse.png">
                        <h4 class="skinName">Warhorse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Warlock')"><img class="circular" src="./skins/Warlock.png">
                        <h4 class="skinName">Warlock</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Warlock(Level3)')"><img class="circular" src="./skins/Warlock(Level3).png">
                        <h4 class="skinName">Warlock(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Warrior')"><img class="circular" src="./skins/Warrior.png">
                        <h4 class="skinName">Warrior</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Wasp')"><img class="circular" src="./skins/Wasp.png">
                        <h4 class="skinName">Wasp</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WastedMouse')"><img class="circular" src="./skins/WastedMouse.png">
                        <h4 class="skinName">WastedMouse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WaterDragon')"><img class="circular" src="./skins/WaterDragon.png">
                        <h4 class="skinName">WaterDragon</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WaterSpirit')"><img class="circular" src="./skins/WaterSpirit.png">
                        <h4 class="skinName">WaterSpirit</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Watson')"><img class="circular" src="./skins/Watson.png">
                        <h4 class="skinName">Watson</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Wendigo')"><img class="circular" src="./skins/Wendigo.png">
                        <h4 class="skinName">Wendigo</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Werewolf')"><img class="circular" src="./skins/Werewolf.png">
                        <h4 class="skinName">Werewolf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WhiteHorse')"><img class="circular" src="./skins/WhiteHorse.png">
                        <h4 class="skinName">WhiteHorse</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WhiteOwl')"><img class="circular" src="./skins/WhiteOwl.png">
                        <h4 class="skinName">WhiteOwl</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WhiteOwlV2')"><img class="circular" src="./skins/WhiteOwlV2.png">
                        <h4 class="skinName">WhiteOwlV2</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Wicked')"><img class="circular" src="./skins/Wicked.png">
                        <h4 class="skinName">Wicked</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WickedCat')"><img class="circular" src="./skins/WickedCat.png">
                        <h4 class="skinName">WickedCat</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WickedClown')"><img class="circular" src="./skins/WickedClown.png">
                        <h4 class="skinName">WickedClown</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WickedVendetta')"><img class="circular" src="./skins/WickedVendetta.png">
                        <h4 class="skinName">WickedVendetta</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WideEye')"><img class="circular" src="./skins/WideEye.png">
                        <h4 class="skinName">WideEye</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WildPepper')"><img class="circular" src="./skins/WildPepper.png">
                        <h4 class="skinName">WildPepper</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WinterWolf')"><img class="circular" src="./skins/WinterWolf.png">
                        <h4 class="skinName">WinterWolf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WisgarusDragonslayer')"><img class="circular" src="./skins/WisgarusDragonslayer.png">
                        <h4 class="skinName">WisgarusDragonslayer</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Wofly')"><img class="circular" src="./skins/Wofly.png">
                        <h4 class="skinName">Wofly</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Wolf')"><img class="circular" src="./skins/Wolf.png">
                        <h4 class="skinName">Wolf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WolfMan')"><img class="circular" src="./skins/WolfMan.png">
                        <h4 class="skinName">WolfMan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WolfPaw')"><img class="circular" src="./skins/WolfPaw.png">
                        <h4 class="skinName">WolfPaw</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WolfSigil')"><img class="circular" src="./skins/WolfSigil.png">
                        <h4 class="skinName">WolfSigil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WoodElf')"><img class="circular" src="./skins/WoodElf.png">
                        <h4 class="skinName">WoodElf</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WoodElf(Level3)')"><img class="circular" src="./skins/WoodElf(Level3).png">
                        <h4 class="skinName">WoodElf(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WormSkull')"><img class="circular" src="./skins/WormSkull.png">
                        <h4 class="skinName">WormSkull</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('WormSkull(Level3)')"><img class="circular" src="./skins/WormSkull(Level3).png">
                        <h4 class="skinName">WormSkull(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('X-Ray')"><img class="circular" src="./skins/X-Ray.png">
                        <h4 class="skinName">X-Ray</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('XmasPuddinglvl3')"><img class="circular" src="./skins/XmasPuddinglvl3.png">
                        <h4 class="skinName">XmasPuddinglvl3</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('YellowStreak')"><img class="circular" src="./skins/YellowStreak.png">
                        <h4 class="skinName">YellowStreak</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Yeti')"><img class="circular" src="./skins/Yeti.png">
                        <h4 class="skinName">Yeti</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Yeti(Level3)')"><img class="circular" src="./skins/Yeti(Level3).png">
                        <h4 class="skinName">Yeti(Level3)</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Yuno')"><img class="circular" src="./skins/Yuno.png">
                        <h4 class="skinName">Yuno</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ZanyTree')"><img class="circular" src="./skins/ZanyTree.png">
                        <h4 class="skinName">ZanyTree</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Zap')"><img class="circular" src="./skins/Zap.png">
                        <h4 class="skinName">Zap</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Zebra')"><img class="circular" src="./skins/Zebra.png">
                        <h4 class="skinName">Zebra</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Zeus')"><img class="circular" src="./skins/Zeus.png">
                        <h4 class="skinName">Zeus</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Zombie')"><img class="circular" src="./skins/Zombie.png">
                        <h4 class="skinName">Zombie</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ZombieDog')"><img class="circular" src="./skins/ZombieDog.png">
                        <h4 class="skinName">ZombieDog</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ZombieParty')"><img class="circular" src="./skins/ZombieParty.png">
                        <h4 class="skinName">ZombieParty</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('ZulaGorgan')"><img class="circular" src="./skins/ZulaGorgan.png">
                        <h4 class="skinName">ZulaGorgan</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('Zully')"><img class="circular" src="./skins/Zully.png">
                        <h4 class="skinName">Zully</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('magiball')"><img class="circular" src="./skins/magiball.png">
                        <h4 class="skinName">magiball</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('magipupil')"><img class="circular" src="./skins/magipupil.png">
                        <h4 class="skinName">magipupil</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('null234-Marty')"><img class="circular" src="./skins/null234-Marty.png">
                        <h4 class="skinName">null234-Marty</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('pepesuit')"><img class="circular" src="./skins/pepesuit.png">
                        <h4 class="skinName">pepesuit</h4>
                    </li>
                    <li class="skin" onclick="changeSkin('soya')"><img class="circular" src="./skins/soya.png">
                        <h4 class="skinName">soya</h4>
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
        mainCtx.lineWidth = 6;
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
        setytSkin: function(value) {
            this.skin =
                (value && value[0] === "%" ? value.slice(1) : value) || this.skin;
            if (
                this.skin === null ||
                !ytknownSkins.hasOwnProperty(this.skin) ||
                loadedytSkins[this.skin]
            )
                return;
            loadedytSkins[this.skin] = new Image();
            loadedytSkins[this.skin].src = YTSKIN_URL + this.skin + ".png";
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
        window.setserver("imsolo.pro:2102");
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
            "https://imsolo.pro/web/skins/" + byId("skin").value + ".png";
        else {
            document.querySelector("img.currentSkin").src = "./no.png";
        }
        setserver("imsolo.pro:2102");
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