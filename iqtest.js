// ============================================================
// QUESTION BANK — tagged with topic to avoid same-topic repeats
// Each question has: c=category, q=question, o=options, a=answer index, t=topic tag
// ============================================================
const QB = [
// ---- VERBAL REASONING ----
{c:"Verbal Reasoning",t:"analogy",q:"Complete the analogy: Book is to Library as Painting is to ___",o:["Museum","Canvas","Artist","Gallery"],a:0},
{c:"Verbal Reasoning",t:"analogy",q:"SWIFT is to SLOW as OPAQUE is to ___",o:["Dark","Transparent","Thick","Dense"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"Physician is to Hospital as Professor is to ___",o:["School","Student","University","Library"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"ARCHITECT is to BUILDING as COMPOSER is to ___",o:["Orchestra","Symphony","Instrument","Concert"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"Flower is to Petal as Tree is to ___",o:["Root","Leaf","Branch","Bark"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"Glove is to Hand as Helmet is to ___",o:["Neck","Face","Head","Shoulder"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"MOON is to LUNAR as SUN is to ___",o:["Solar","Stellar","Astral","Cosmic"],a:0},
{c:"Verbal Reasoning",t:"analogy",q:"TIMID is to BRAVE as IGNORANT is to ___",o:["Foolish","Educated","Reckless","Arrogant"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"Pen is to Writer as Scalpel is to ___",o:["Nurse","Doctor","Surgeon","Hospital"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"OCEAN is to WAVE as DESERT is to ___",o:["Dune","Heat","Mirage","Oasis"],a:0},
{c:"Verbal Reasoning",t:"analogy",q:"CHAPTER is to NOVEL as EPISODE is to ___",o:["Film","Scene","Series","Director"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"COWARD is to COURAGE as MISER is to ___",o:["Wealth","Generosity","Poverty","Greed"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"Map is to Cartographer as Law is to ___",o:["Police","Judge","Legislator","Barrister"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"Painter is to Canvas as Sculptor is to ___",o:["Clay","Chisel","Museum","Stone"],a:3},
{c:"Verbal Reasoning",t:"analogy",q:"AUTHOR is to NOVEL as PLAYWRIGHT is to ___",o:["Film","Stage","Play","Act"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"KEY is to LOCK as PASSWORD is to ___",o:["Door","Computer","Account","Safety"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"SUMMIT is to MOUNTAIN as CREST is to ___",o:["Valley","Wave","Sea","Storm"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"THERMOMETER is to TEMPERATURE as BAROMETER is to ___",o:["Wind","Rainfall","Pressure","Humidity"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"WAVE is to OCEAN as FLAME is to ___",o:["Heat","Light","Fire","Smoke"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"DIPLOMAT is to EMBASSY as JUDGE is to ___",o:["Prison","Courtroom","Police Station","Parliament"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"ROOT is to TREE as FOUNDATION is to ___",o:["House","Ground","Brick","Cement"],a:0},
{c:"Verbal Reasoning",t:"analogy",q:"FLAME is to HEAT as LENS is to ___",o:["Glass","Focus","Light","Eye"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"SEED is to TREE as EGG is to ___",o:["Nest","Bird","Shell","Yolk"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"DEMOCRACY is to PEOPLE as MONARCHY is to ___",o:["Parliament","President","King","Constitution"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"Clock is to Time as Thermometer is to ___",o:["Heat","Cold","Temperature","Weather"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"LION is to PRIDE as WOLF is to ___",o:["Pack","Herd","Flock","School"],a:0},
{c:"Verbal Reasoning",t:"analogy",q:"SOLDIER is to ARMY as SAILOR is to ___",o:["Ocean","Fleet","Ship","Navy"],a:3},
{c:"Verbal Reasoning",t:"analogy",q:"INK is to PEN as PAINT is to ___",o:["Canvas","Easel","Brush","Gallery"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"RIVER is to DELTA as TREE is to ___",o:["Leaf","Branch","Root","Bark"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"CAPTAIN is to SHIP as PILOT is to ___",o:["Airport","Plane","Runway","Engine"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"DOCTOR is to PATIENT as TEACHER is to ___",o:["School","Class","Student","Lesson"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"WIND is to TURBINE as WATER is to ___",o:["Dam","River","Wheel","Pump"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"STAR is to CONSTELLATION as WORD is to ___",o:["Letter","Sentence","Alphabet","Language"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"SCALES is to FISH as FEATHERS is to ___",o:["Egg","Nest","Bird","Wing"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"BARD is to POEM as SCULPTOR is to ___",o:["Clay","Tool","Statue","Studio"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"WHEEL is to AXLE as DOOR is to ___",o:["Frame","Wall","Hinge","Lock"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"GENERAL is to ARMY as ADMIRAL is to ___",o:["Airforce","Marines","Navy","Coast Guard"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"EGG is to YOLK as EARTH is to ___",o:["Crust","Surface","Core","Mantle"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"NUCLEUS is to CELL as SUN is to ___",o:["Galaxy","Universe","Solar System","Star"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"CONDUCTOR is to ORCHESTRA as EDITOR is to ___",o:["Book","Author","Newspaper","Story"],a:2},
{c:"Verbal Reasoning",t:"analogy",q:"TELESCOPE is to ASTRONOMER as MICROSCOPE is to ___",o:["Doctor","Biologist","Chemist","Physicist"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"LOQUACIOUS is to TACITURN as GENEROUS is to ___",o:["Kind","Stingy","Wealthy","Gentle"],a:1},
{c:"Verbal Reasoning",t:"analogy",q:"ELOQUENT is to INARTICULATE as BOLD is to ___",o:["Brave","Timid","Rash","Confident"],a:1},

{c:"Verbal Reasoning",t:"vocab",q:"ABUNDANT means the same as:",o:["Scarce","Plentiful","Moderate","Average"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"EPHEMERAL means:",o:["Long-lasting","Short-lived","Mysterious","Powerful"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"ZENITH means:",o:["Lowest point","Midpoint","Highest point","Starting point"],a:2},
{c:"Verbal Reasoning",t:"vocab",q:"LUCID means:",o:["Confusing","Clear","Dark","Vague"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"AMICABLE means:",o:["Hostile","Friendly","Indifferent","Angry"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"VERBOSE means:",o:["Brief","Silent","Wordy","Loud"],a:2},
{c:"Verbal Reasoning",t:"vocab",q:"CANDID means:",o:["Deceptive","Frank","Polite","Shy"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"NOCTURNAL means active during:",o:["Day","Night","Dawn","Dusk"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PERNICIOUS means:",o:["Beneficial","Harmless","Harmful","Neutral"],a:2},
{c:"Verbal Reasoning",t:"vocab",q:"INSOLENT means:",o:["Respectful","Rude","Quiet","Shy"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"TENACIOUS means:",o:["Weak","Persistent","Careless","Gentle"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"IMPECCABLE means:",o:["Flawed","Flawless","Incomplete","Impressive"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"AUSTERE means:",o:["Lavish","Severe and plain","Cheerful","Ornate"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PRODIGIOUS means:",o:["Small","Ordinary","Remarkably great","Mediocre"],a:2},
{c:"Verbal Reasoning",t:"vocab",q:"STOIC means:",o:["Emotional","Indifferent to pain","Joyful","Anxious"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"EQUIVOCAL means:",o:["Clear","Ambiguous","Definite","Certain"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"MAGNANIMOUS means:",o:["Petty","Generous","Cowardly","Greedy"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"OMNISCIENT means:",o:["All-powerful","All-knowing","All-seeing","Ever-present"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PEDANTIC means:",o:["Careless","Excessively focused on rules","Creative","Spontaneous"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"TACITURN means:",o:["Talkative","Reserved in speech","Angry","Cheerful"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"SALIENT means:",o:["Hidden","Prominent","Boring","Unimportant"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"ADEPT means:",o:["Inexperienced","Highly skilled","Clumsy","Reluctant"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"TORPID means:",o:["Active","Sluggish","Excited","Alert"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"GARRULOUS means:",o:["Silent","Excessively talkative","Honest","Nervous"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"MENDACIOUS means:",o:["Truthful","Lying","Brave","Meek"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"ACRIMONY means:",o:["Kindness","Bitterness","Indifference","Joy"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"LABYRINTH means:",o:["Tower","Maze","Forest","Cave"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PELLUCID means:",o:["Murky","Translucently clear","Thick","Dense"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"EBULLIENT means:",o:["Depressed","Enthusiastically cheerful","Calm","Reserved"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"QUERULOUS means:",o:["Content","Complaining","Curious","Brave"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"CLANDESTINE means:",o:["Open","Secret","Confusing","Public"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"DIFFIDENT means:",o:["Confident","Timid","Aggressive","Loud"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"RECALCITRANT means:",o:["Obedient","Stubbornly defiant","Gentle","Eager"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PERFIDIOUS means:",o:["Loyal","Treacherous","Honest","Brave"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"OBSEQUIOUS means:",o:["Rude","Excessively compliant","Arrogant","Honest"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"VERACIOUS means:",o:["Dishonest","Truthful","Greedy","Quiet"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"INTREPID means:",o:["Cowardly","Fearless","Cautious","Timid"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PAUCITY means:",o:["Abundance","Scarcity","Equality","Excess"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"NEFARIOUS means:",o:["Virtuous","Wicked","Ordinary","Brave"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"COGENT means:",o:["Weak","Compelling and convincing","Confused","Vague"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"FASTIDIOUS means:",o:["Careless","Very attentive to detail","Quick","Lazy"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PROPITIOUS means:",o:["Unfavorable","Favorable","Neutral","Uncertain"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"CACOPHONY means:",o:["Harmony","Harsh sound","Silence","Melody"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"SUPERFLUOUS means:",o:["Essential","Unnecessary","Important","Scarce"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"SANGUINE means:",o:["Pessimistic","Optimistic","Angry","Depressed"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"VINDICTIVE means:",o:["Forgiving","Seeking revenge","Kind","Indifferent"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PARSIMONIOUS means:",o:["Generous","Extremely frugal","Wealthy","Spendthrift"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"AUDACIOUS means:",o:["Timid","Daring","Cautious","Fearful"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PROSAIC means:",o:["Poetic","Dull and ordinary","Exciting","Creative"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"LACONIC means:",o:["Wordy","Using few words","Confusing","Unclear"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"ACUMEN means:",o:["Dullness","Keen insight","Confusion","Ignorance"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"OSTENTATIOUS means:",o:["Modest","Showy and pretentious","Quiet","Simple"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"CIRCUMSPECT means:",o:["Reckless","Cautious","Confident","Impulsive"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"PERFUNCTORY means:",o:["Thorough","Carried out with minimal effort","Careful","Detailed"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"EPHEMERAL is to LASTING as TURBULENT is to ___",o:["Stormy","Calm","Windy","Loud"],a:1},
{c:"Verbal Reasoning",t:"vocab",q:"LETHARGIC means most nearly:",o:["Energetic","Alert","Sluggish","Cheerful"],a:2},
{c:"Verbal Reasoning",t:"vocab",q:"TERRESTRIAL relates to:",o:["Water","Air","Land","Space"],a:2},

{c:"Verbal Reasoning",t:"odd-one-out",q:"Find the odd one out: Eagle, Falcon, Penguin, Hawk",o:["Eagle","Falcon","Penguin","Hawk"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Which word is the odd one out: Symphony, Concerto, Sonata, Allegro",o:["Symphony","Concerto","Sonata","Allegro"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Find the odd one out: Anger, Joy, Sadness, Blue, Fear",o:["Anger","Joy","Blue","Fear"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Ruby, Sapphire, Emerald, Diamond, Granite",o:["Ruby","Sapphire","Diamond","Granite"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Iris, Tulip, Rose, Oak, Sunflower",o:["Iris","Tulip","Oak","Sunflower"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Piano, Guitar, Violin, Flute, Drum",o:["Piano","Guitar","Flute","Drum"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Which does NOT belong: Hydrogen, Oxygen, Nitrogen, Water, Carbon",o:["Hydrogen","Oxygen","Water","Carbon"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: January, March, June, July, August",o:["January","June","July","August"],a:1},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Copper, Iron, Gold, Bronze, Silver",o:["Copper","Iron","Bronze","Silver"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Mercury, Venus, Earth, Moon, Mars",o:["Mercury","Venus","Moon","Mars"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Triangle, Hexagon, Rectangle, Pentagon, Rhombus",o:["Triangle","Hexagon","Rectangle","Pentagon"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Basalt, Granite, Marble, Sandstone, Bronze",o:["Basalt","Granite","Marble","Bronze"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Shakespeare, Dickens, Tolstoy, Beethoven, Austen",o:["Shakespeare","Dickens","Beethoven","Austen"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Pyramid, Cube, Sphere, Triangle, Cone",o:["Pyramid","Cube","Sphere","Triangle"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Which word does NOT belong: Crimson, Scarlet, Azure, Maroon",o:["Crimson","Scarlet","Azure","Maroon"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Sonnet, Haiku, Novel, Limerick, Ode",o:["Sonnet","Haiku","Novel","Limerick"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Violin, Cello, Viola, Trumpet, Double Bass",o:["Violin","Cello","Trumpet","Double Bass"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Hammer, Screwdriver, Wrench, Paintbrush, Pliers",o:["Hammer","Screwdriver","Paintbrush","Pliers"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Cheetah, Lion, Tiger, Crocodile, Leopard",o:["Cheetah","Lion","Crocodile","Leopard"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Daffodil, Daisy, Dandelion, Rose, Tulip",o:["Daffodil","Daisy","Rose","Tulip"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Algebra, Calculus, Geometry, Literature, Statistics",o:["Algebra","Calculus","Literature","Statistics"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Viola, Cello, Harp, Violin, Oboe",o:["Viola","Cello","Harp","Oboe"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Igneous, Sedimentary, Metamorphic, Granite, Volcanic",o:["Igneous","Sedimentary","Granite","Volcanic"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Proton, Neutron, Electron, Atom, Quark",o:["Proton","Neutron","Atom","Quark"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Sahara, Gobi, Amazon, Atacama, Kalahari",o:["Sahara","Gobi","Amazon","Kalahari"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Infantry, Cavalry, Artillery, Navy, Armour",o:["Infantry","Cavalry","Navy","Armour"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Colosseum, Parthenon, Louvre, Big Ben, Eiffel Tower",o:["Colosseum","Parthenon","Louvre","Big Ben"],a:2},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Sonata, Concerto, Symphony, Aria, Haiku",o:["Sonata","Concerto","Aria","Haiku"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: North, South, East, West, Centre",o:["North","South","East","Centre"],a:3},
{c:"Verbal Reasoning",t:"odd-one-out",q:"Odd one out: Beethoven, Mozart, Bach, Picasso, Chopin",o:["Beethoven","Mozart","Picasso","Chopin"],a:2},

// ---- NUMERICAL SEQUENCES ----
{c:"Numerical Sequences",t:"geometric",q:"What comes next: 2, 4, 8, 16, 32, ___",o:["48","56","64","72"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What comes next: 3, 9, 27, 81, ___",o:["162","243","324","405"],a:1},
{c:"Numerical Sequences",t:"geometric",q:"Next: 1000, 500, 250, 125, ___",o:["50","60","62.5","63"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Find next: 9, 18, 36, 72, ___",o:["108","126","144","162"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What comes next: 81, 27, 9, 3, ___",o:["0","0.5","1","1.5"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Complete: 4, 16, 64, 256, ___",o:["512","768","1024","2048"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What is next: 6, 12, 24, 48, 96, ___",o:["144","168","192","216"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Next: 1, 10, 100, 1000, ___",o:["1100","5000","10000","100000"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What is next: 5, 15, 45, 135, ___",o:["270","360","405","540"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Find next: 2, 6, 18, 54, ___",o:["108","144","162","216"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What comes next: 7, 14, 28, 56, ___",o:["84","100","112","120"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Find next: 1, 3, 9, 27, 81, ___",o:["162","216","243","270"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Next: 2, 6, 18, 54, 162, ___",o:["324","378","486","540"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What is next: 12, 6, 3, 1.5, ___",o:["0.5","0.75","0.8","1"],a:1},
{c:"Numerical Sequences",t:"geometric",q:"Next: 64, 32, 16, 8, 4, ___",o:["1","2","3","4"],a:1},
{c:"Numerical Sequences",t:"geometric",q:"Complete: 4, 12, 36, 108, ___",o:["216","270","324","432"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Find next: 5, 25, 125, 625, ___",o:["2500","2800","3025","3125"],a:3},
{c:"Numerical Sequences",t:"geometric",q:"Next: 6, 6, 12, 36, 144, ___",o:["432","576","720","864"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"What is next: 72, 36, 18, 9, ___",o:["3","4","4.5","5"],a:2},
{c:"Numerical Sequences",t:"geometric",q:"Find next: 7, 21, 63, 189, ___",o:["432","486","567","756"],a:2},

{c:"Numerical Sequences",t:"arithmetic",q:"Find the missing number: 3, 6, 9, 12, ___, 18",o:["13","14","15","16"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Find next: 7, 14, 21, 28, ___",o:["30","33","35","36"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"What comes next: 17, 14, 11, 8, ___",o:["3","4","5","6"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Find the missing: 10, 20, 30, ___, 50",o:["35","38","40","45"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Complete: 8, 16, 24, 32, ___",o:["38","39","40","41"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Next: 9, 8, 7, 6, ___",o:["3","4","5","6"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Complete: 4, 8, 12, 16, 20, ___",o:["22","24","25","26"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Find next: 33, 30, 27, 24, ___",o:["18","20","21","22"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Next: 11, 10, 9, 8, ___",o:["5","6","7","8"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"Complete: 9, 7, 5, 3, ___",o:["0","1","2","3"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"What is missing: ___, 3, 6, 12, 24",o:["1","1.5","2","3"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Next in sequence: 3, 6, 4, 8, 5, 10, ___",o:["5","6","7","8"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Find next: 10, 8, 11, 9, 12, ___",o:["8","10","11","13"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Next: 14, 11, 13, 10, 12, ___",o:["7","8","9","10"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"What number is missing: 5, 10, ___, 40, 80",o:["15","20","25","30"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Complete: 2, 3, 2, 4, 2, 5, 2, ___",o:["2","4","6","8"],a:2},
{c:"Numerical Sequences",t:"arithmetic",q:"What number is missing: 4, ___, 16, 64, 256",o:["4","8","12","16"],a:1},
{c:"Numerical Sequences",t:"arithmetic",q:"Next: 6, 7, 8, 9, 10, ___",o:["11","12","13","14"],a:0},
{c:"Numerical Sequences",t:"arithmetic",q:"Find pattern: 17, 15, 12, 8, ___",o:["2","3","4","5"],a:1},

{c:"Numerical Sequences",t:"squares-cubes",q:"Find the pattern: 1, 4, 9, 16, 25, ___",o:["30","36","42","49"],a:1},
{c:"Numerical Sequences",t:"squares-cubes",q:"Next in sequence: 1, 8, 27, 64, ___",o:["100","115","125","135"],a:2},
{c:"Numerical Sequences",t:"squares-cubes",q:"Next: 4, 9, 16, 25, 36, ___",o:["42","45","48","49"],a:3},
{c:"Numerical Sequences",t:"squares-cubes",q:"What is next: 144, 121, 100, 81, ___",o:["56","62","64","66"],a:2},
{c:"Numerical Sequences",t:"squares-cubes",q:"Next: 1, 8, 27, 64, 125, ___",o:["180","196","210","216"],a:3},

{c:"Numerical Sequences",t:"fibonacci",q:"What is next: 1, 1, 2, 3, 5, 8, 13, ___",o:["18","19","20","21"],a:3},
{c:"Numerical Sequences",t:"fibonacci",q:"Complete: 3, 5, 8, 13, 21, ___",o:["30","32","34","36"],a:2},
{c:"Numerical Sequences",t:"fibonacci",q:"Complete: 0, 1, 1, 2, 3, 5, 8, ___",o:["10","11","12","13"],a:3},
{c:"Numerical Sequences",t:"fibonacci",q:"What comes next: 1, 3, 4, 7, 11, 18, ___",o:["25","27","28","29"],a:3},
{c:"Numerical Sequences",t:"fibonacci",q:"Next in sequence: 3, 4, 7, 11, 18, ___",o:["25","28","29","30"],a:2},

{c:"Numerical Sequences",t:"polynomial",q:"Complete: 2, 5, 10, 17, 26, ___",o:["35","36","37","38"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 0, 1, 3, 6, 10, 15, ___",o:["18","20","21","22"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 50, 45, 39, 32, 24, ___",o:["14","15","16","17"],a:1},
{c:"Numerical Sequences",t:"polynomial",q:"Find pattern: 2, 6, 12, 20, 30, ___",o:["38","40","42","44"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next: 1, 3, 7, 15, 31, ___",o:["48","55","63","71"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Find next: 1, 2, 4, 7, 11, 16, ___",o:["20","21","22","23"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next: 100, 95, 85, 70, 50, ___",o:["20","25","30","35"],a:1},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 5, 6, 9, 14, 21, ___",o:["28","29","30","31"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What is next: 20, 19, 17, 14, 10, ___",o:["3","4","5","6"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 2, 4, 6, 10, 16, 26, ___",o:["36","40","42","44"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 7, 8, 10, 13, 17, ___",o:["20","21","22","23"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 0, 2, 6, 12, 20, 30, ___",o:["36","40","42","44"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What is next: 15, 13, 10, 6, ___",o:["0","1","2","3"],a:1},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 3, 8, 15, 24, 35, ___",o:["44","46","48","50"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next: 0, 3, 8, 15, 24, ___",o:["33","35","36","38"],a:1},
{c:"Numerical Sequences",t:"polynomial",q:"Find pattern: 3, 6, 11, 18, 27, ___",o:["36","38","40","42"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 2, 5, 11, 23, 47, ___",o:["80","90","95","97"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next: 1, 6, 15, 28, 45, ___",o:["60","65","66","70"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Find next: 2, 3, 5, 8, 12, 17, ___",o:["20","22","23","25"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next in sequence: 1, 5, 14, 30, 55, ___",o:["80","85","91","95"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Find pattern: 100, 91, 83, 76, 70, ___",o:["62","64","65","66"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Find next: 10, 12, 15, 19, 24, ___",o:["28","29","30","31"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Find pattern: 7, 11, 16, 22, 29, ___",o:["35","36","37","38"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Next: 40, 38, 35, 31, 26, ___",o:["18","19","20","21"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 1, 3, 6, 10, 15, 21, ___",o:["24","26","28","30"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 55, 50, 44, 37, 29, ___",o:["18","19","20","21"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 50, 48, 44, 38, 30, ___",o:["18","20","22","24"],a:1},
{c:"Numerical Sequences",t:"polynomial",q:"Complete: 30, 29, 27, 24, 20, ___",o:["12","14","15","16"],a:2},
{c:"Numerical Sequences",t:"polynomial",q:"What comes next: 2, 8, 26, 80, ___",o:["192","220","242","260"],a:2},

{c:"Numerical Sequences",t:"factorial",q:"Complete: 1, 2, 6, 24, 120, ___",o:["480","600","720","840"],a:2},
{c:"Numerical Sequences",t:"factorial",q:"Find next: 1, 2, 6, 24, 120, 720, ___",o:["3600","4320","5040","6000"],a:2},
{c:"Numerical Sequences",t:"factorial",q:"Complete: 2, 2, 4, 12, 48, ___",o:["192","196","200","240"],a:3},
{c:"Numerical Sequences",t:"factorial",q:"Complete: 2, 4, 12, 48, ___",o:["100","192","240","288"],a:2},
{c:"Numerical Sequences",t:"factorial",q:"Find next: 5, 5, 10, 30, 120, ___",o:["360","480","600","720"],a:2},
{c:"Numerical Sequences",t:"factorial",q:"Find pattern: 1, 1, 2, 6, 24, ___",o:["48","100","120","144"],a:2},

// ---- PATTERN RECOGNITION ----
{c:"Pattern Recognition",t:"letter-sequence",q:"Letter pattern: A, C, E, G, ___",o:["H","I","J","K"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"ABC, BCD, CDE, ___",o:["EFG","DEF","CEF","EDE"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"ZA, YB, XC, WD, ___",o:["UE","VE","VD","WE"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"AZ, BY, CX, DW, ___",o:["EU","EV","FV","EW"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"MN, OP, QR, ST, ___",o:["TU","UV","VW","UW"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"ACE, GIK, MOQ, ___",o:["RTS","STV","SUR","STU"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"B, D, G, K, P, ___",o:["U","V","W","X"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"XY, WX, VW, UV, ___",o:["ST","TU","UV","SU"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"RQPON — next?",o:["L","M","N","O"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"AB AC AD AE — next?",o:["AF","AG","AH","BA"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"A → 1, C → 3, E → 5, G → ___",o:["6","7","8","9"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"Pattern: Z,Y,X,W,V — next?",o:["T","U","S","V"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"Letters jump: A,C,F,J,O — next?",o:["U","T","V","W"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"Letter jump +3: A→D, D→G, G→?",o:["I","J","K","L"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"Letters shift +2: A→C, D→F, G→?",o:["H","I","J","K"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"BDFH — next?",o:["I","J","K","L"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"Pattern: 1A, 2B, 3C, 4D, ___",o:["4E","5D","5E","6E"],a:2},
{c:"Pattern Recognition",t:"letter-sequence",q:"A1B2, C3D4, E5F6, ___",o:["G7H8","H7G8","G8H7","I7J8"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"Fill in: 1:A, 2:B, 3:C — 26:?",o:["X","Y","Z","W"],a:2},
{c:"Pattern Recognition",t:"letter-sequence",q:"Fill blank: F is to 6 as H is to ___",o:["7","8","9","10"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"ABCABC, BCDABC, CDABCD, ___",o:["DABCDE","DEABCD","DABCDA","ABCDEF"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"AABB, BBCC, CCDD, ___",o:["DDCC","DDEE","EEFF","CCBB"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"ABBA, BAAB, ABBA, ___",o:["ABBA","BAAB","BABA","AABB"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"AAB, ABB, BBB, BBC, ___",o:["BCC","CBC","BCB","CCB"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"AA,BB,CC,AA,BB — next?",o:["AA","BB","CC","DD"],a:2},
{c:"Pattern Recognition",t:"letter-sequence",q:"AB BA AB BA — next?",o:["AB","BA","AA","BB"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"Pattern: AA,AB,AC,AD — 8th term?",o:["AH","BH","AG","AE"],a:0},
{c:"Pattern Recognition",t:"letter-sequence",q:"ABCBA — next palindrome pattern?",o:["ABCBA","ABCDCBA","BCACB","CABAC"],a:1},
{c:"Pattern Recognition",t:"letter-sequence",q:"Alphabet code: A=2, B=4, C=6 — F=?",o:["10","11","12","14"],a:2},
{c:"Pattern Recognition",t:"letter-sequence",q:"Pattern: Each letter = position+1: B=2,D=4,F=6 — L=?",o:["10","11","12","13"],a:2},
{c:"Pattern Recognition",t:"letter-sequence",q:"Letter value: A=1,Z=26. What is M+N?",o:["26","27","28","29"],a:1},

{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: 2, 4, 3, 6, 4, 8, 5, ___",o:["8","9","10","12"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"1, 2, 4, 7, 11, 16, 22, ___",o:["27","28","29","30"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: Row 1 has 1 star, Row 2 has 3, Row 3 has 5 — Row 4?",o:["6","7","8","9"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Sequence: 4, 8, 6, 12, 10, 20, 18, ___",o:["30","32","34","36"],a:3},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern of 3: 1,2,3,1,2,3 — 10th term?",o:["1","2","3","4"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: +1, +2, +3, +4 — what is the 5th operation?",o:["+4","+5","+6","+7"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Differences: 2,3,5,8,12,17 — rule?",o:["Add 1 more each time","Double","Primes","Fibonacci"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Each matrix row sums to 15. Row: 4, 6, _",o:["4","5","6","7"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Grid sum = 12 per row: Row has 5,3,__ — missing?",o:["2","3","4","5"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Number grid row: 3,6,9; column: 3,6,9 — intersection missing value?",o:["9","18","12","6"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Number grid: each diagonal sums to 9. Grid has 1,5,3,_,7",o:["2","3","4","5"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Grid: top row 2,4,6; middle 4,6,8; bottom 6,8,___",o:["8","10","12","6"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Grid: rows multiply to same value. 2,3,6 and 1,6,6 — third row starts with 3,2,__",o:["4","5","6","8"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Number triangle: Row 1=1, Row 2=1+2=3, Row 3=1+2+3=6 — Row 5=?",o:["10","13","15","18"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Triangle numbers: 1,3,6,10,15,21 — next?",o:["25","26","27","28"],a:3},
{c:"Pattern Recognition",t:"number-pattern",q:"Shape count: 1,4,9,16 — represents?",o:["Cubes","Square numbers","Prime numbers","Fibonacci"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Number pattern: 2, 3, 5, 7, 11, 13 — what is the rule?",o:["Add 2 each time","Odd numbers","Prime numbers","Add 1 then 2 alternating"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: 31,28,31,30,31,30 — represents?",o:["Random","Days in months","Prime sequence","Lucky numbers"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Binary: 1,10,11,100,101 — next in decimal?",o:["5","6","7","8"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"1,2,2,3,3,3,4,4,4,4 — next?",o:["4","5","6","5,5"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Size pattern: 1,1,2,1,2,3,1,2,3,4 — next?",o:["1","4","5","6"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Digit sum pattern: 10,11,12,13 sums are 1,2,3,4 — what is sum of 19?",o:["9","10","11","12"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Multiplication pattern: 1×1=1, 2×2=4, 3×3=9 — 4×4=?",o:["12","14","15","16"],a:3},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: 2+2=4, 3+3=9, 4+4=___",o:["8","12","16","14"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern spiral: adds 5 each turn, starts at 5: 5,10,15,20 — 6th?",o:["25","28","30","35"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: ●=1 and ○=0: ●○● = ?",o:["5","3","7","101"],a:0},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: 2,4,2,8,2,16,2,_",o:["2","16","32","64"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Sequence rules: odd positions +3, even positions ×2: 1,2,4,4,7,8,___",o:["8","10","16","12"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Pattern: 1, 4, 13, 40, ___",o:["100","121","122","130"],a:1},
{c:"Pattern Recognition",t:"number-pattern",q:"Complete: 5, 11, 23, 47, ___",o:["85","90","95","100"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Next in sequence: 1, 4, 10, 22, 46, ___",o:["70","82","94","106"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Complete: 1, 1, 2, 4, 7, 13, ___",o:["20","23","24","26"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Next in sequence: 2, 3, 6, 11, 20, ___",o:["35","36","37","38"],a:2},
{c:"Pattern Recognition",t:"number-pattern",q:"Find pattern: 1, 4, 4, 16, 16, 64, ___",o:["32","48","64","128"],a:2},

{c:"Pattern Recognition",t:"shape-symbol",q:"What shape comes next: Circle, Square, Triangle, Circle, Square, ___",o:["Circle","Square","Triangle","Hexagon"],a:2},
{c:"Pattern Recognition",t:"shape-symbol",q:"Rotating shapes: ↑ → ↓ ← ↑ → — what comes next?",o:["↑","←","↓","→"],a:2},
{c:"Pattern Recognition",t:"shape-symbol",q:"In a matrix: top row: △○□. Middle: ○□△. Bottom: □△___",o:["△","○","□","◇"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Row 1: ■■□, Row 2: ■□■, Row 3: □■■ — Row 4?",o:["■■□","■□■","□■■","■■■"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Shape rotation: □ rotated 45° = ◇. ◇ rotated 45° = ___",o:["□","△","◇","○"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Direction: N,E,S,W,N,E — 7th?",o:["N","E","S","W"],a:2},
{c:"Pattern Recognition",t:"shape-symbol",q:"Tile sequence: □,▣,■,□,▣,■ — 7th?",o:["□","▣","■","◪"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: ◆◆◆, ◆◆○, ◆○○, ○○○, ___",o:["◆◆◆","○○◆","◆◆○","○○○"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: ▲▲▼, ▲▼▲, ▼▲▲, ▲▲▼ — next?",o:["▼▲▲","▲▼▲","▲▲▼","▼▼▲"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Colour sequence: R G B R G B — 7th term?",o:["B","R","G","RG"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern of shading: column 1 filled, column 2 empty, column 3 filled — column 4?",o:["Filled","Empty","Half-filled","Unknown"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern of 4: ○●●○ ○●●○ — 9th element?",o:["○","●","◑","None"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Each row increases by one shape. Row 1: ■. Row 2: ■■. Row 3: ■■■. Row 6?",o:["5 squares","6 squares","7 squares","8 squares"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: Big, Medium, Small, Big, Medium — next?",o:["Big","Medium","Small","Large"],a:2},
{c:"Pattern Recognition",t:"shape-symbol",q:"Shape sizes: 1cm, 2cm, 4cm, 8cm — next is:",o:["10cm","12cm","14cm","16cm"],a:3},
{c:"Pattern Recognition",t:"shape-symbol",q:"Shape increases by 1 side each step: 3,4,5,6 — next?",o:["6","7","8","9"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Hexagon has 6 sides. Octagon has 8. Shape with 10 sides?",o:["Nonagon","Decagon","Pentagon","Heptagon"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Tile pattern has 3-part cycle: filled, half, empty — 7th tile?",o:["Filled","Half","Empty","None"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Dominoes: [1|2][2|3][3|4] — next?",o:["[4|4]","[4|5]","[5|5]","[3|5]"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Shape in corner rotates CW each step. Starts top-right — after 4 steps?",o:["Top-right","Bottom-right","Bottom-left","Top-left"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: +, ×, +, ×, — what operation comes next?",o:["+","−","×","÷"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: Red × Blue = Purple — Yellow × Blue = ___",o:["Orange","Green","Purple","Brown"],a:1},
{c:"Pattern Recognition",t:"shape-symbol",q:"Pattern: M T W T F — next two?",o:["S S","S M","T F","W T"],a:0},
{c:"Pattern Recognition",t:"shape-symbol",q:"Checkerboard: B W B W / W B W B / B W B W / W B W ___",o:["B","W","G","None"],a:0},

{c:"Pattern Recognition",t:"word-pattern",q:"Word pattern: CAT → ACT, BAT → ABT, RAT → ___",o:["ART","TAR","RAT","ATR"],a:0},
{c:"Pattern Recognition",t:"word-pattern",q:"Pattern: NOON, MONO, NOMO, ___",o:["OMON","MOON","MONO","NOOM"],a:1},
{c:"Pattern Recognition",t:"word-pattern",q:"FACE→CAFE, TALE→LATE, VILE→___",o:["LIVE","EVIL","VEIL","LEVI"],a:0},
{c:"Pattern Recognition",t:"word-pattern",q:"Code: cat=3,bat=3,hat=3,equation=8 — what does chair equal?",o:["4","5","6","7"],a:1},
{c:"Pattern Recognition",t:"word-pattern",q:"Pattern: J F M A M J J — next? (months)",o:["A","S","O","N"],a:0},
{c:"Pattern Recognition",t:"word-pattern",q:"Row pattern: 1 2 3, 4 5 6, 7 8 _",o:["8","9","10","11"],a:1},
{c:"Pattern Recognition",t:"word-pattern",q:"Pattern: 3,1,4,1,5,9,2,6 — these are digits of?",o:["Euler's number","Pi","Golden ratio","Square root of 2"],a:1},

// ---- SPATIAL REASONING ----
{c:"Spatial Reasoning",t:"3d-shape",q:"A cube has 6 faces. If you unfold it, which net is possible?",o:["L-shape of 6 squares","T-shape of 4 squares","Cross of 6 squares","Row of 7 squares"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"If a 3D cube is viewed from the corner, how many faces are visible?",o:["1","2","3","4"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many edges does a cube have?",o:["6","8","10","12"],a:3},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many vertices does a triangular prism have?",o:["4","5","6","8"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many faces does a tetrahedron have?",o:["3","4","5","6"],a:1},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many faces does a dodecahedron have?",o:["10","12","14","20"],a:1},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many faces does an octahedron have?",o:["6","7","8","10"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A cube is painted red and then cut into 27 smaller cubes. How many have no red faces?",o:["0","1","4","8"],a:1},
{c:"Spatial Reasoning",t:"3d-shape",q:"A cylinder viewed from directly above looks like a:",o:["Rectangle","Square","Oval","Circle"],a:3},
{c:"Spatial Reasoning",t:"3d-shape",q:"A cone placed on its side — what cross-section passes through the apex?",o:["Circle","Ellipse","Triangle","Rectangle"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many small cubes make up a 3×3×3 large cube?",o:["9","18","27","36"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A 2×2×2 cube painted on all sides, split into 1×1×1 cubes. How many have paint on exactly 2 faces?",o:["0","4","8","12"],a:3},
{c:"Spatial Reasoning",t:"3d-shape",q:"A cube painted blue: how many of 27 small cubes have exactly 3 painted faces?",o:["4","6","8","12"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many faces does an icosahedron have?",o:["12","16","20","24"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A rectangular prism has how many faces?",o:["4","5","6","8"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"How many edges does an octahedron have?",o:["6","8","10","12"],a:3},
{c:"Spatial Reasoning",t:"3d-shape",q:"Cross-section of a cylinder cut parallel to its base is a:",o:["Square","Ellipse","Circle","Rectangle"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A rectangular box is 4×3×2. Its volume is:",o:["9","18","24","36"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A 3D cross (1 centre + 6 arms) has how many exposed faces?",o:["18","20","24","26"],a:2},
{c:"Spatial Reasoning",t:"3d-shape",q:"A regular tetrahedron has how many edges?",o:["4","5","6","8"],a:2},

{c:"Spatial Reasoning",t:"rotation-mirror",q:"A square is rotated 45°. What shape does it most resemble?",o:["Rectangle","Diamond","Hexagon","Triangle"],a:1},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"If you flip a letter 'b' horizontally, what do you get?",o:["d","p","q","b"],a:1},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"A clock shows 3:00. Its mirror image shows:",o:["3:00","6:00","9:00","12:00"],a:2},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"If you rotate the letter 'Z' 180°, you get:",o:["S","N","Z","2"],a:2},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"A right-hand glove turned inside out becomes:",o:["Left-hand glove","Right-hand glove","Mitten","Ambidextrous"],a:0},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Mirror image of the number '9' looks like:",o:["6","b","q","p"],a:0},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"If you look at the letter 'p' in a mirror, you see:",o:["p","q","b","d"],a:1},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"The letter 'S' rotated 180° looks like:",o:["Z","2","N","S"],a:3},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Rotate a shape 360° — what is the result?",o:["Mirror image","Rotated shape","Original shape","Inverted shape"],a:2},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"'N' reflected horizontally looks like:",o:["И","H","Z","M"],a:0},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Rotate the letter 'M' 180° — it looks like:",o:["N","W","H","V"],a:1},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Which letter has rotational symmetry of order 2?",o:["A","B","S","T"],a:2},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Rotating 270° clockwise = rotating ___ counterclockwise",o:["90°","180°","270°","360°"],a:0},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"Two mirrors at 90° create how many total images of an object?",o:["2","3","4","5"],a:1},
{c:"Spatial Reasoning",t:"rotation-mirror",q:"An equilateral triangle is rotated 120° — what changes?",o:["Nothing — looks the same","One vertex moves","It becomes a square","It flips"],a:0},

{c:"Spatial Reasoning",t:"2d-geometry",q:"Which 2D shape is the shadow of a sphere from any angle?",o:["Square","Oval","Circle","Triangle"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A square piece of paper folded diagonally creates a:",o:["Square","Rectangle","Triangle","Hexagon"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"How many squares of any size are in a 3×3 grid?",o:["9","10","12","14"],a:3},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A hexagon has how many lines of symmetry?",o:["3","4","5","6"],a:3},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A pentagon has how many diagonals?",o:["3","4","5","6"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"The letter 'H' has how many lines of symmetry?",o:["1","2","3","4"],a:1},
{c:"Spatial Reasoning",t:"2d-geometry",q:"How many sides does a nonagon have?",o:["7","8","9","10"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A square has perimeter 20cm. Its area is:",o:["16cm²","20cm²","25cm²","30cm²"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"Interior angles of a triangle always sum to:",o:["90°","120°","180°","360°"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"The interior angle of a regular hexagon is:",o:["90°","100°","120°","135°"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"How many squares are in a 4×4 grid (all sizes)?",o:["16","24","28","30"],a:3},
{c:"Spatial Reasoning",t:"2d-geometry",q:"Interior angle sum of a pentagon:",o:["360°","450°","540°","720°"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A trapezoid has how many parallel sides?",o:["0","1","2","3"],a:1},
{c:"Spatial Reasoning",t:"2d-geometry",q:"Number of diagonals in a hexagon:",o:["6","8","9","12"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"What shape has 4 equal sides but not necessarily right angles?",o:["Rectangle","Square","Rhombus","Trapezoid"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A Venn diagram with 3 circles has how many distinct regions?",o:["5","6","7","8"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A right angle triangle with legs 3 and 4 has hypotenuse:",o:["5","6","7","8"],a:0},
{c:"Spatial Reasoning",t:"2d-geometry",q:"A pizza cut into 8 equal slices — each slice has central angle of:",o:["30°","40°","45°","60°"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"How many right angles are in a rectangle?",o:["2","3","4","5"],a:2},
{c:"Spatial Reasoning",t:"2d-geometry",q:"The letter 'O' has how many lines of symmetry?",o:["1","2","4","Infinite"],a:3},

{c:"Spatial Reasoning",t:"direction-navigation",q:"If NORTH is up on a map and you turn 90° clockwise, you face:",o:["North","South","East","West"],a:2},
{c:"Spatial Reasoning",t:"direction-navigation",q:"If you face East and turn left twice, you now face:",o:["North","South","East","West"],a:3},
{c:"Spatial Reasoning",t:"direction-navigation",q:"A compass starts North, turns 90° East, then 180° — now facing?",o:["North","South","East","West"],a:3},
{c:"Spatial Reasoning",t:"direction-navigation",q:"If you travel 1km North, 1km East, 1km South, 1km West — you are:",o:["1km North","1km East","Back at start","1km West"],a:2},
{c:"Spatial Reasoning",t:"direction-navigation",q:"A point moves left 3, up 5, right 6, down 2 — net displacement?",o:["Right 3, Up 3","Left 3, Down 3","Right 3, Down 3","Left 3, Up 3"],a:0},
{c:"Spatial Reasoning",t:"direction-navigation",q:"North is up. I go South 3km, East 2km, North 1km. I'm now __ km South of start?",o:["1","2","3","4"],a:1},
{c:"Spatial Reasoning",t:"direction-navigation",q:"Which direction is the shadow of a pole at noon in the Northern Hemisphere?",o:["North","South","East","West"],a:1},

{c:"Spatial Reasoning",t:"folding",q:"A piece of paper folded in half, then in half again. How many layers?",o:["2","3","4","6"],a:2},
{c:"Spatial Reasoning",t:"folding",q:"Paper folded in half 3 times has how many sections when unfolded?",o:["4","6","8","9"],a:2},
{c:"Spatial Reasoning",t:"folding",q:"Fold a square diagonally and cut the corner — when unfolded, the hole is?",o:["Square","Triangle","Diamond","Circle"],a:0},
{c:"Spatial Reasoning",t:"folding",q:"If you fold paper and punch a hole in the middle, unfolding reveals:",o:["1 hole","2 holes","3 holes","4 holes"],a:1},
{c:"Spatial Reasoning",t:"folding",q:"A flat equilateral triangle folded along its centre line creates:",o:["A smaller triangle","A right triangle","A rectangle","A parallelogram"],a:0},

// ---- LOGICAL DEDUCTION ----
{c:"Logical Deduction",t:"syllogism",q:"All cats are animals. Whiskers is a cat. Therefore:",o:["Whiskers is not an animal","Whiskers is an animal","All animals are cats","None of the above"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All roses are flowers. Some flowers fade quickly. Therefore:",o:["All roses fade quickly","Some roses may fade quickly","No roses fade quickly","Roses never fade"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"No fish can walk. Nemo is a fish. Therefore:",o:["Nemo can walk","Nemo cannot walk","Nemo might walk","Fish sometimes walk"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All managers are employees. John is a manager. Therefore:",o:["John is not an employee","John is an employee","All employees are managers","John is the boss"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All A are B. All B are C. Therefore:",o:["All C are A","All A are C","No A are C","Some A are not C"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All squares are rectangles. Shape X is a square. Therefore:",o:["X is not a rectangle","X is a rectangle","All rectangles are squares","X might be a rectangle"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"No reptiles are mammals. A snake is a reptile. Therefore:",o:["A snake is a mammal","A snake is not a mammal","Some snakes are mammals","Reptiles include mammals"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All birds have wings. Penguins are birds. Therefore:",o:["Penguins can fly","Penguins have wings","Penguins are not birds","Penguins fly south"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All metals conduct electricity. Copper is a metal. Therefore:",o:["Copper does not conduct","Copper conducts electricity","All conductors are metals","Copper is not metal"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All insects have 6 legs. A spider has 8 legs. Therefore:",o:["Spiders are insects","Spiders are not insects","Some insects have 8 legs","Leg count doesn't matter"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"No weekends have classes. Today has classes. Therefore:",o:["Today is a weekend","Today is not a weekend","Today might be a weekend","Classes happen on weekends"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All heroes are brave. No cowards are heroes. Therefore:",o:["All cowards are brave","No cowards are brave","Some cowards are brave","Brave defines heroes"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All X are Y. All Y are Z. No Z are W. Therefore:",o:["All X are W","No X are W","Some X are W","X might be W"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"Some A are B. All B are C. Therefore:",o:["All A are C","Some A are C","No A are C","All C are B"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All artists are creative. No creative people are boring. Therefore:",o:["All artists are boring","No artists are boring","Some artists are boring","Artists might be boring"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"No fast food is healthy. Salad is healthy. Therefore:",o:["Salad is fast food","Salad is not fast food","Salad might be fast food","Healthy means not tasty"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All triangles have internal angles summing to 180°. Shape X has angles summing to 270°. Therefore:",o:["X is a triangle","X is not a triangle","X might be a triangle","Angles can vary"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All chefs cook. No painters cook. Therefore:",o:["Chefs are painters","No chefs are painters","Some chefs are painters","Painters become chefs"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"No exam is fun. All fun things are worth doing. Therefore:",o:["Exams are worth doing","No exam is worth doing","Exams might be worth doing","Exams are fun"],a:2},
{c:"Logical Deduction",t:"syllogism",q:"All citizens can vote. Only adults are citizens. Therefore:",o:["All humans can vote","All children can vote","Adult citizens can vote","Nobody can vote"],a:2},
{c:"Logical Deduction",t:"syllogism",q:"All prime numbers over 2 are odd. 7 is prime. Therefore:",o:["7 is even","7 is odd","7 is divisible by 3","7 might be even"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All snobs are critics. Some critics are professors. Therefore:",o:["All snobs are professors","Some snobs may be professors","No snobs are professors","Professors snob together"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All reptiles are cold-blooded. Some cold-blooded animals live in water. Therefore:",o:["All reptiles live in water","Some reptiles live in water","No reptiles live in water","Reptiles are aquatic"],a:1},
{c:"Logical Deduction",t:"syllogism",q:"All snakes are reptiles and some reptiles are dangerous. Therefore:",o:["All snakes are dangerous","No snakes are dangerous","Some snakes may be dangerous","Reptiles cause danger"],a:2},
{c:"Logical Deduction",t:"syllogism",q:"No A are B. No B are C. Therefore:",o:["No A are C","Some A are C","A might be C","A and C are unrelated via B"],a:2},

{c:"Logical Deduction",t:"conditional",q:"If P then Q. Q is false. Therefore:",o:["P is true","P is false","P may be true or false","Q caused P"],a:1},
{c:"Logical Deduction",t:"conditional",q:"If it rains, the ground is wet. The ground is wet. Therefore:",o:["It is raining","It may or may not be raining","It is not raining","Rain caused the wetness"],a:1},
{c:"Logical Deduction",t:"conditional",q:"P → Q. ¬P. Therefore Q is:",o:["True","False","Undetermined","Always true"],a:2},
{c:"Logical Deduction",t:"conditional",q:"If P is true, Q is false. If Q is true, R is false. P is true. What is R?",o:["True","False","Undetermined","Same as P"],a:2},
{c:"Logical Deduction",t:"conditional",q:"If A and B are both true, C must be true. C is false. B is true. Therefore:",o:["A is true","A is false","A is undetermined","B is false"],a:1},
{c:"Logical Deduction",t:"conditional",q:"If salary > 50k, pay tax. If pay tax, file return. Salary = 60k. Must you file?",o:["No","Yes","Maybe","Depends"],a:1},
{c:"Logical Deduction",t:"conditional",q:"If Mia goes, Ben goes. If Ben goes, Claire goes. Mia goes. Who definitely goes?",o:["Only Mia","Mia and Ben","Mia, Ben, and Claire","Cannot determine"],a:2},
{c:"Logical Deduction",t:"conditional",q:"P → Q. Q → R. P is true. What is definitely true?",o:["Only P","P and Q","P, Q, and R","Only R"],a:2},
{c:"Logical Deduction",t:"conditional",q:"If and only if it snows, school closes. It did not snow. School:",o:["Is open","Is closed","Might be closed","Cannot determine"],a:0},
{c:"Logical Deduction",t:"conditional",q:"If she studies medicine, she becomes a doctor. She is not a doctor. Therefore:",o:["She studied medicine","She did not study medicine","She might have studied medicine","Medicine doesn't produce doctors"],a:1},
{c:"Logical Deduction",t:"conditional",q:"If Tom wins, Sara loses. Sara wins. Therefore:",o:["Tom wins","Tom might win","Tom does not win","Sara's win is invalid"],a:2},
{c:"Logical Deduction",t:"conditional",q:"If I wake up late, I miss the bus. I didn't miss the bus. Therefore:",o:["I woke up late","I did not wake up late","I might have woken up late","Buses are reliable"],a:1},
{c:"Logical Deduction",t:"conditional",q:"A is said to be B's friend. B is said to be C's enemy. What is A's relationship to C?",o:["Friend","Enemy","Unknown","Neutral"],a:2},
{c:"Logical Deduction",t:"conditional",q:"If A then B. If B then C. C is false. A is:",o:["True","False","Undetermined","Equal to C"],a:1},
{c:"Logical Deduction",t:"conditional",q:"Either the key is in the drawer or the bag. It's not in the drawer. Therefore:",o:["It's not in the bag","It's in the bag","It might be in the bag","It's lost"],a:1},
{c:"Logical Deduction",t:"conditional",q:"P OR Q. P is false. Therefore:",o:["Q is false","Q is true","Q might be true","P caused Q"],a:1},
{c:"Logical Deduction",t:"conditional",q:"Only members can enter. Jack cannot enter. Therefore:",o:["Jack is a member","Jack is not a member","Jack might be a member","The door is locked"],a:1},
{c:"Logical Deduction",t:"conditional",q:"Exactly one of these is true: A, B, C. A is false. B is true. Therefore:",o:["C is true","C is false","C might be true","All are false"],a:1},
{c:"Logical Deduction",t:"conditional",q:"Every Friday it rains. It is raining today. Today is:",o:["Friday","Not Friday","Maybe Friday","Always rainy"],a:2},

{c:"Logical Deduction",t:"ordering",q:"If A > B and B > C, then:",o:["C > A","A > C","B > A","C = A"],a:1},
{c:"Logical Deduction",t:"ordering",q:"Tom is taller than Bob. Bob is taller than Sam. Who is tallest?",o:["Bob","Sam","Tom","Cannot determine"],a:2},
{c:"Logical Deduction",t:"ordering",q:"Alice is older than Beth. Carol is younger than Beth. Who is oldest?",o:["Beth","Carol","Alice","Cannot determine"],a:2},
{c:"Logical Deduction",t:"ordering",q:"Maria runs faster than Paula. Paula runs faster than Sue. Sue faster than Lisa. Who runs slowest?",o:["Paula","Sue","Lisa","Maria"],a:2},
{c:"Logical Deduction",t:"ordering",q:"Anna beat Betty at chess. Carol beat Anna. Who is the best player?",o:["Anna","Betty","Carol","Cannot determine"],a:2},
{c:"Logical Deduction",t:"ordering",q:"Adam is taller than Chris. Chris is taller than Brenda. Brenda is taller than Dana. Tallest to shortest?",o:["Adam,Chris,Brenda,Dana","Chris,Adam,Dana,Brenda","Adam,Brenda,Chris,Dana","Dana,Brenda,Chris,Adam"],a:0},
{c:"Logical Deduction",t:"ordering",q:"Mike scored higher than Greg but lower than Pete. Dave scored lower than Greg. Highest to lowest?",o:["Pete,Mike,Greg,Dave","Pete,Greg,Mike,Dave","Mike,Pete,Greg,Dave","Dave,Greg,Mike,Pete"],a:0},
{c:"Logical Deduction",t:"ordering",q:"Kate > Liz in salary. Mike < Kate. Alex > Kate. Richest to poorest?",o:["Alex,Kate,Mike,Liz","Alex,Kate,Liz,Mike","Kate,Alex,Liz,Mike","Alex,Mike,Kate,Liz"],a:0},
{c:"Logical Deduction",t:"ordering",q:"A is older than B. B is older than C. C is older than D. Who has the median age?",o:["A","B","C","D"],a:1},
{c:"Logical Deduction",t:"ordering",q:"4 people have different heights: A>B, D>C, B>D. Complete order from tallest?",o:["A,B,C,D","A,B,D,C","B,A,D,C","A,D,B,C"],a:1},

{c:"Logical Deduction",t:"spatial-logic",q:"5 people sit in a row. Amy is to the right of Ben. Carol is to the left of Ben. Who is in the middle?",o:["Amy","Ben","Carol","Cannot determine"],a:1},
{c:"Logical Deduction",t:"spatial-logic",q:"A is north of B. C is south of B. D is east of A. What is D relative to B?",o:["South","West","North-East","South-East"],a:2},
{c:"Logical Deduction",t:"spatial-logic",q:"There are 5 houses in a row: Red, Blue, Green, Yellow, White. Red is not at the end. Blue is next to Red. Green is 3rd. What position is Red?",o:["1st","2nd","4th","5th"],a:1},
{c:"Logical Deduction",t:"spatial-logic",q:"James is to the North of Kate. Sue is to the East of James. Direction Sue must travel to reach Kate?",o:["North-East","South-West","North-West","South-East"],a:1},
{c:"Logical Deduction",t:"spatial-logic",q:"In a row: Pink is between Orange and Blue. Yellow is to the right of Blue. What is at the far right?",o:["Pink","Orange","Blue","Yellow"],a:3},
{c:"Logical Deduction",t:"spatial-logic",q:"Lily is to the right of Tom. Ray is to the left of Tom. Who is between Ray and Lily?",o:["Lily","Ray","Tom","Cannot determine"],a:2},
{c:"Logical Deduction",t:"spatial-logic",q:"Max is between Leo and Amy in a row. Zoe is to the right of Amy. Order from left?",o:["Leo,Max,Amy,Zoe","Amy,Max,Leo,Zoe","Zoe,Amy,Max,Leo","Leo,Amy,Max,Zoe"],a:0},
{c:"Logical Deduction",t:"spatial-logic",q:"Ethan is north of Fiona. Gwen is east of Ethan. Hannah is south of Gwen. Hannah relative to Fiona?",o:["North-East","South-East","North-West","South-West"],a:0},

{c:"Logical Deduction",t:"math-logic",q:"If X equals Y and Y equals Z, then:",o:["X > Z","X < Z","X equals Z","Cannot determine"],a:2},
{c:"Logical Deduction",t:"math-logic",q:"John is 3 years older than Mary. In 5 years, John will be twice Mary's age. How old is Mary now?",o:["1","2","3","4"],a:0},
{c:"Logical Deduction",t:"math-logic",q:"A can finish a job in 4 hours. B can finish it in 6 hours. Working together, they finish in:",o:["2 hours","2.4 hours","3 hours","5 hours"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"Product of two numbers is 48. Their sum is 14. The numbers are:",o:["6 and 8","4 and 12","3 and 16","2 and 24"],a:0},
{c:"Logical Deduction",t:"math-logic",q:"In 10 years, Tom will be 3 times as old as he was 10 years ago. How old is Tom now?",o:["15","20","25","30"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"A father is 4 times his son's age. In 20 years, he'll be twice the son's age. How old is the son now?",o:["5","10","15","20"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"Sam reads twice as fast as Jim. Jim reads 20 pages/hour. How long for Sam to read 200 pages?",o:["2.5 hours","5 hours","10 hours","20 hours"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"Ravi solves a puzzle in 12 minutes. Sita solves it in 4 minutes. Working together:",o:["2 minutes","3 minutes","4 minutes","6 minutes"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"Twice a number plus 5 equals 21. The number is:",o:["7","8","9","10"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"If a number is divisible by 4, it is divisible by 2. 20 is divisible by 4. Therefore:",o:["20 is divisible by 2","20 is not divisible by 2","20 might be divisible by 2","4 divides 20 twice"],a:0},
{c:"Logical Deduction",t:"math-logic",q:"A man builds a square fence. Post every 4m. Total perimeter = 40m. How many posts?",o:["8","9","10","11"],a:2},
{c:"Logical Deduction",t:"math-logic",q:"Of 30 students: 18 like maths, 14 like science, 5 like both. How many like neither?",o:["2","3","4","5"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"Ian is 6th in a queue of 20. How many people are behind him?",o:["13","14","15","16"],a:1},
{c:"Logical Deduction",t:"math-logic",q:"A train leaves at 9am going 60km/h. Another leaves at 11am going 90km/h. When do they meet?",o:["1pm","2pm","3pm","4pm"],a:0},
{c:"Logical Deduction",t:"math-logic",q:"A box has 5 red, 3 blue balls. Two drawn without replacement. Chance both are red?",o:["5/18","1/4","10/56","2/7"],a:0},
{c:"Logical Deduction",t:"math-logic",q:"You have 3 coins worth 30p total. One is not a 10p. What are the coins?",o:["3×10p","20p + 5p + 5p","10p + 10p + 10p","15p + 10p + 5p"],a:1},
];

// ============================================================
// IQ SCORING — calibrated for 30 questions
// ============================================================
const IQ_RANGES = [
  {min:0,max:6,iq:58,range:"55–65",title:"Significantly Below Average",
   remark:"Your results suggest significant challenges in the areas tested. IQ is only one measure of human ability — creativity, emotional intelligence, and practical skills are equally valuable. Consider this a baseline for growth."},
  {min:7,max:10,iq:72,range:"70–75",title:"Below Average",
   remark:"Your score falls below the average range. This assessment captures specific cognitive skills on a single sitting — it is not a complete picture of your intelligence. Focus on the areas where you struggled most."},
  {min:11,max:15,iq:85,range:"82–88",title:"Low Average",
   remark:"You performed in the low-average range. You demonstrated solid understanding in some areas while showing room for growth in others. With practice in reasoning and pattern recognition, improvement is highly achievable."},
  {min:16,max:19,iq:97,range:"93–100",title:"Average Intelligence",
   remark:"You scored squarely in the average range — where the majority of the population falls. You demonstrated competence across multiple cognitive domains. A great foundation to build on."},
  {min:20,max:23,iq:110,range:"107–113",title:"High Average",
   remark:"Your results are above average, placing you ahead of roughly 65–70% of test-takers. You showed strong logical reasoning and pattern recognition skills. Your cognitive abilities are well-developed."},
  {min:24,max:26,iq:120,range:"118–123",title:"Superior Intelligence",
   remark:"Excellent performance. You demonstrated advanced reasoning, quick pattern identification, and sharp analytical thinking. You are in the top 10–15% of the population in the cognitive areas tested today."},
  {min:27,max:28,iq:130,range:"128–133",title:"Gifted",
   remark:"Outstanding. Your performance reflects genuinely gifted cognitive ability across verbal, numerical, logical, and spatial domains. You process complex information with impressive speed and accuracy — a rare achievement."},
  {min:29,max:30,iq:143,range:"138–148",title:"Exceptionally Gifted",
   remark:"Extraordinary. A near-perfect score on 30 adaptive questions reflects exceptional analytical power, abstract reasoning, and cognitive agility. You are in the top 1% of this assessment. Remarkable."},
];

function getIQResult(correct) {
  for (let r of IQ_RANGES) {
    if (correct >= r.min && correct <= r.max) return r;
  }
  return IQ_RANGES[0];
}

function getPercentile(correct) {
  const map = [2,3,5,7,10,15,22,30,40,52,63,72,80,86,90,93,95,96,97,97,98,98,98,99,99,99,99,99,99,99,99];
  return map[Math.min(correct, 30)] || 2;
}

// ============================================================
// STATE
// ============================================================
const TOTAL_Q = 30;
let userName = '', userAge = '', userGender = '';
let sessionQuestions = [];
let currentQ = 0;
let answers = new Array(TOTAL_Q).fill(null);   // null=unanswered, -1=skipped, 0-3=answer
let timeRemaining = new Array(TOTAL_Q).fill(45); // persists per question
let timerInterval = null;
let timesSpentPerQ = new Array(TOTAL_Q).fill(0);
let testActive = false;
let selectedGender = '';
let skippedSet = new Set(); // tracks permanently skipped questions

// ============================================================
// SHUFFLE & SMART PICK (dedupe by topic tag within session)
// ============================================================
function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions() {
  // Group by category
  const categories = {};
  QB.forEach(q => {
    if (!categories[q.c]) categories[q.c] = {};
    const tag = q.t || 'general';
    if (!categories[q.c][tag]) categories[q.c][tag] = [];
    categories[q.c][tag].push(q);
  });

  // Shuffle within each topic group, then pick max 1 per topic per session
  const pool = [];
  Object.keys(categories).forEach(cat => {
    const topics = categories[cat];
    Object.keys(topics).forEach(tag => {
      const shuffled = shuffle(topics[tag]);
      // Max 1 question per topic tag in any session
      pool.push(shuffled[0]);
    });
  });

  // If pool is smaller than TOTAL_Q, pull extras (ensuring no same-topic duplicates first)
  const extras = shuffle(QB.filter(q => !pool.includes(q)));
  const combined = shuffle(pool);
  while (combined.length < TOTAL_Q && extras.length > 0) {
    combined.push(extras.shift());
  }

  return combined.slice(0, TOTAL_Q);
}

// ============================================================
// WELCOME
// ============================================================
document.querySelectorAll('.gender-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedGender = btn.dataset.val;
  });
});

// Enter key navigation through form fields
document.getElementById('inputName').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('inputAge').focus();
  }
});

document.getElementById('inputAge').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    // If gender already selected, go to instructions
    if (selectedGender) {
      showInstructions();
    } else {
      // Visually pulse the gender buttons to draw attention
      const grid = document.querySelector('.gender-grid');
      grid.style.transition = 'all 0.2s';
      grid.style.outline = '2px solid var(--blue)';
      grid.style.borderRadius = '10px';
      setTimeout(() => { grid.style.outline = 'none'; }, 1200);
      document.querySelector('.gender-btn').focus();
    }
  }
});

// Gender buttons — pressing Enter after selecting one submits the form
document.querySelectorAll('.gender-btn').forEach(btn => {
  btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedGender) showInstructions();
    }
  });
});

function showInstructions() {
  const name = document.getElementById('inputName').value.trim();
  const age  = document.getElementById('inputAge').value.trim();
  const err  = document.getElementById('formError');
  if (!name || !age || !selectedGender) {
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  userName   = name;
  userAge    = age;
  userGender = selectedGender;
  document.getElementById('instrName').textContent = name.split(' ')[0];
  showScreen('instructionsScreen');
}

function startTest() {
  sessionQuestions = pickQuestions();
  answers        = new Array(TOTAL_Q).fill(null);
  timeRemaining  = new Array(TOTAL_Q).fill(45);
  timesSpentPerQ = new Array(TOTAL_Q).fill(0);
  skippedSet     = new Set();
  currentQ       = 0;
  testActive     = true;
  showScreen('testScreen');
  renderQuestion();
}

// ============================================================
// RENDER QUESTION
// ============================================================
function renderQuestion() {
  const q = sessionQuestions[currentQ];
  document.getElementById('qNum').textContent = currentQ + 1;
  document.getElementById('qCategory').textContent = q.c.toUpperCase();
  document.getElementById('qText').textContent = q.q;
  document.getElementById('progressFill').style.width = ((currentQ / TOTAL_Q) * 100) + '%';

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    const currentAns = answers[currentQ];
    if (currentAns !== null && currentAns !== -1 && currentAns === i) btn.classList.add('selected');
    btn.innerHTML = `<div class="option-letter">${letters[i]}</div><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  updateDots();
  updateNavButtons();
  startTimer(); // resume or fresh start based on timeRemaining[currentQ]
}

function selectAnswer(idx) {
  answers[currentQ] = idx;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
  updateDots();
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const skipBtn = document.getElementById('skipBtn');

  prevBtn.disabled = currentQ === 0;

  // Find next non-skipped question after current
  const isLast = currentQ === TOTAL_Q - 1;
  nextBtn.style.display = isLast ? 'none' : 'flex';
  submitBtn.style.display = isLast ? 'block' : 'none';

  // Disable skip if already skipped
  skipBtn.disabled = skippedSet.has(currentQ);
  skipBtn.style.opacity = skippedSet.has(currentQ) ? '0.4' : '1';
}

// ============================================================
// NAVIGATE (timer pauses & time is preserved)
// ============================================================
function navigate(dir) {
  pauseTimer();
  let target = currentQ + dir;
  // Skip over permanently skipped questions when going forward
  if (dir > 0) {
    while (target < TOTAL_Q && skippedSet.has(target)) target++;
  }
  if (target < 0 || target >= TOTAL_Q) return;
  currentQ = target;
  renderQuestion();
}

function pauseTimer() {
  clearInterval(timerInterval);
  // timeRemaining[currentQ] already holds the live value from the countdown
}

// ============================================================
// SKIP (permanent — no return)
// ============================================================
function skipQuestion() {
  if (skippedSet.has(currentQ)) return;
  pauseTimer();
  timesSpentPerQ[currentQ] += (45 - timeRemaining[currentQ]);
  answers[currentQ] = -1; // -1 = permanently skipped
  skippedSet.add(currentQ);
  timeRemaining[currentQ] = 0; // reset for display

  // Move to next non-skipped question
  let next = currentQ + 1;
  while (next < TOTAL_Q && skippedSet.has(next)) next++;
  if (next < TOTAL_Q) {
    currentQ = next;
    renderQuestion();
  } else {
    // All remaining are skipped — go to last unskipped or submit
    updateDots();
    updateNavButtons();
  }
}

// ============================================================
// DOTS
// ============================================================
function updateDots() {
  const container = document.getElementById('answeredDots');
  container.innerHTML = '';
  for (let i = 0; i < TOTAL_Q; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === currentQ) {
      dot.classList.add('current');
    } else if (skippedSet.has(i)) {
      dot.classList.add('skipped');
      dot.title = 'Skipped (no return)';
    } else if (answers[i] !== null && answers[i] !== -1) {
      dot.classList.add('answered');
    }

    // Only clickable if not skipped
    if (!skippedSet.has(i) && i !== currentQ) {
      dot.addEventListener('click', () => {
        pauseTimer();
        currentQ = i;
        renderQuestion();
      });
      dot.style.cursor = 'pointer';
    }
    container.appendChild(dot);
  }
}

// ============================================================
// TIMER — resumes from timeRemaining[currentQ]
// ============================================================
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining[currentQ]--;
    updateTimerDisplay();
    if (timeRemaining[currentQ] <= 0) {
      clearInterval(timerInterval);
      timeRemaining[currentQ] = 0;
      autoAdvance();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const t = timeRemaining[currentQ];
  const el = document.getElementById('timerDisplay');
  const pill = document.getElementById('timerPill');
  el.textContent = `0:${t < 10 ? '0' : ''}${t}`;
  pill.classList.remove('warning','danger');
  if (t <= 10) pill.classList.add('danger');
  else if (t <= 20) pill.classList.add('warning');
}

function autoAdvance() {
  timesSpentPerQ[currentQ] += 45;
  // Time's up = treat as skipped permanently
  if (answers[currentQ] === null) {
    answers[currentQ] = -1;
    skippedSet.add(currentQ);
  }
  let next = currentQ + 1;
  while (next < TOTAL_Q && skippedSet.has(next)) next++;
  if (next < TOTAL_Q) {
    currentQ = next;
    renderQuestion();
  } else {
    submitTest();
  }
}

// ============================================================
// SUBMIT
// ============================================================
function submitTest() {
  clearInterval(timerInterval);
  testActive = false;
  let correct = 0;
  sessionQuestions.forEach((q, i) => {
    if (answers[i] !== null && answers[i] !== -1 && answers[i] === q.a) correct++;
  });
  const skipped = skippedSet.size;
  const totalSpent = timesSpentPerQ.reduce((s, t) => s + t, 0);
  const answered = TOTAL_Q - skipped;
  const avgTime = answered > 0 ? Math.round(totalSpent / answered) : 0;
  showResults(correct, skipped, avgTime);
}

// ============================================================
// RESULTS
// ============================================================
function showResults(correct, skipped, avgTime) {
  const result = getIQResult(correct);
  const percentile = getPercentile(correct);

  document.getElementById('iqDisplay').textContent = result.iq;
  document.getElementById('iqRange').textContent = `IQ Range: ${result.range}`;
  document.getElementById('statCorrect').textContent = `${correct}/30`;
  document.getElementById('statSkipped').textContent = skipped;
  document.getElementById('statTime').textContent = `${avgTime}s`;
  document.getElementById('percentileVal').textContent = `Top ${100 - percentile}%`;
  document.getElementById('remarkTitle').textContent = result.title;
  document.getElementById('remarkText').textContent = result.remark;

  showScreen('resultsScreen');
  setTimeout(() => {
    document.getElementById('percentileFill').style.width = percentile + '%';
  }, 300);

  window._lastResult = { correct, skipped, avgTime, result, percentile, name: userName };
}

// ============================================================
// SHARE MODAL
// ============================================================
function openShareModal() {
  const r = window._lastResult;
  if (!r) return;
 const text = `🧠 ApexMind Result: ${r.name} scored an estimated IQ of ${r.result.iq} (${r.result.range})\n\n${r.result.title}\n✅ ${r.correct}/30 correct · Top ${100 - r.percentile}%\n\nTake the test yourself!\nhttps://apexmind-psi.vercel.app`;
  document.getElementById('sharePreviewText').textContent = text;
  window._shareText = text;
  document.getElementById('shareModal').classList.add('open');
}

function closeShareModal(e) {
  if (!e || e.target === document.getElementById('shareModal')) {
    document.getElementById('shareModal').classList.remove('open');
  }
}

function shareTo(platform) {
  const text = encodeURIComponent(window._shareText || '');
  const url = encodeURIComponent(window.location.href);
  const links = {
    whatsapp: `https://api.whatsapp.com/send?text=${text}`,
    telegram: `https://t.me/share/url?url=${url}&text=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
    discord:  null, // Discord has no web share URL; we copy instead
    snapchat: `https://www.snapchat.com/scan?attachmentUrl=${url}`,
    instagram: null, // Instagram has no web share URL; we copy instead
  };

  if (platform === 'discord' || platform === 'instagram') {
    copyResult();
    const btn = document.querySelector(`.share-platform.${platform}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Copied!`;
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }
    return;
  }

  const link = links[platform];
  if (link) window.open(link, '_blank', 'noopener,noreferrer');
}

function copyResult() {
  const text = window._shareText || '';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// ============================================================
// RETAKE / RESET
// ============================================================
function retakeTest() {
  clearInterval(timerInterval);
  testActive = false;
  selectedGender = '';
  userName = ''; userAge = ''; userGender = '';
  document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('inputName').value = '';
  document.getElementById('inputAge').value = '';
  document.getElementById('instrName').textContent = '—';
  showScreen('welcomeScreen');
}

function hardReset() {
  clearInterval(timerInterval);
  testActive = false;
  skippedSet = new Set();
  selectedGender = '';
  userName = ''; userAge = ''; userGender = '';
  document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('inputName').value = '';
  document.getElementById('inputAge').value = '';
  document.getElementById('instrName').textContent = '—';
  showScreen('welcomeScreen');
}

// ============================================================
// SCREEN MANAGEMENT
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ============================================================
// TAB VISIBILITY — tab close = test terminated
// ============================================================
document.addEventListener('visibilitychange', () => {
  if (document.hidden && testActive) {
    clearInterval(timerInterval);
    testActive = false;
    showScreen('expiredScreen');
  }
});

// ============================================================
// INIT
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    showScreen('welcomeScreen');
  }, 1000);
});