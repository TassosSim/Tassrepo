
//Load sound effect for selection of different components on the website + apply volume 23-12-19
const selectButton = document.getElementById("selectbuttonsfx");
selectButton.volume=0.1;


//Load campfire audio variables + apply volume and unmute 23-12-13

var campfire = document.getElementById("campfire");
campfire.volume = 0.05;
campfire.muted = false;


//Variables for character template for the wiki/dialog 23-12-15

var characterInfo = {
  characterName: "Name + Lastname",
  characterAlias: "Alias",
  characterGender: "Male/Female",
  characterOrigin: "Nationality",
  characterDescription: "Insert character description here",
//Added perks here to replace them for name display purposes in the wiki
  characterPerk1: "Perk 1",
  characterPerk2: "Perk 2",
  characterPerk3: "Perk 3",
  tooltipPerk1: "Tooltip1",
  tooltipPerk2: "Tooltip2",
  tooltipPerk3: "Tooltip3",
};

////////////////////////////////////////   Information on all survivors and killers 23-12-15   //////////////////////////////////

//Dwight Fairfield information

const dwightInfo = {
  characterName: "Dwight Fairfield",
  characterAlias: "Nervous Leader",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> American",
  characterDescription: 'An unlikely leader forced to rise to the occasion, Dwight Fairfield’s reluctant bravery inspires those around him. <br><br> Understanding the value of teamwork, Dwight is adept at locating and bolstering the efficiency of his teammates.',
  characterPerk1: "<br>Bond",
  characterPerk2: "<br>Leader",
  characterPerk3: "<br>Prove Thyself",
  tooltipPerk1: "&nbsp;<br>Unlocks potential in one's aura reading ability. Allies' auras are revealed to you when they are within a <b class='ttye'>20</b>/<b class='ttgr'>28</b>/<b class='ttpu'>36</b> <b>meter</b> range. <br><br> <i class='ttgo'><i>&quot;We have to work as a team, I need you to survive so that I can survive!&quot; - Dwight</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>You're able to organize a team to cooperate more efficiently. Increases other Survivors' healing, sabotage, unhooking, cleansing, opening Exit Gates, and chest unlocking speeds by <b class='ttye'>15</b>/<b class='ttgr'>20</b>/<b class='ttpu'>25</b><b>%</b> when they are withing a <b class='ttor'>8 meter</b> range from you. <br><br> Survivors can only be affected by one Leader effect at a time. <br><br> This effect persists on other Survivors for <b class='ttre'>15 seconds</b> after leaving the Leader's effective perk range.<br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>For every other Survivor working on a generator within a <b class='ttye'>4 meter</b> range, gain <b class='ttye'>6</b>/<b class='ttgr'>8</b>/<b class='ttpu'>10</b><b>%</b> repair speed bonus. This same bonus is also applied to all other Survivors within range.<br><br>Survivors can only be affected by one Prove Thyself effect at a time.<br><br><i class='ttgo'>&quot;Show me what you can do!&quot; - Dwight</i><br>&nbsp;",
};

//Meg Thomas information

const megInfo = {
  characterName: "Meg Thomas",
  characterAlias: "Energetic Athlete",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> American",
  characterDescription: 'Driven by reckless courage, the athletic Meg Thomas has never been afraid to push her limits. <br><br> Prone to stepping up in the clutch, Meg gets a thrill out of goading Killers into lengthy chases, buying essential time for her teammates.<br>&nbsp;',
  characterPerk1: "<br>Adrenaline",
  characterPerk2: "<br>Quick & Quiet",
  characterPerk3: "<br>Sprint Burst",
  tooltipPerk1: "&nbsp;<br>You are fuelled by unexpecting energy when on the verge of escape. <br><br><b class='ttye'>Instantly heal one health state</b> and sprint at <b class='ttor'>150%</b> of your normal running speed for <b class='ttre'>5 seconds</b> when the exit gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><br><i>Adrenaline</i> will <b>wake you up</b> if you are asleep when it triggers. <br><i>Adrenaline</i> ignores the <b>Exhausted</b> status effect. <br>Causes the <b>Exhausted</b> status effect for <b class='ttye'>60</b>/<b class='ttgr'>50</b>/<b class='ttpu'>40</b> <b>seconds.</b> <br><br><i class='ttey'>Exhausted prevents Survivors from activating exhausting perks.</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers.<br><br>The vault and hide actons' noise detection and audio range is reduced by <b class='ttye'>100%</b>.<br><br>This effect can only tragger once every <b class='ttye'>30</b>/<b class='ttgr'>25</b>/<b class='ttpu'>20</b> <b>seconds</b>.<br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>When starting to run, break into a sprint at <b class='ttye'>150%</b> of your normal running speed for a maximum of <b class='ttor'>3 seconds</b>. <br><br>Causes the <i>Exhausted</i> status effect for <b class='ttye'>60</b>/<b class='ttgr'>50</b>/<b class='ttpu'>40</b> <b>seconds</b>. <br><br><i>Sprint Burst</i> cannot be used while <i>Exhausted</i>.<br><br>You do not recover from the <i>Exhausted</i> status effect while running. <br><br><i class='ttey'>Exhausted prevents Survivors from activating exhausting perks.</i><br>&nbsp;",
};

//Jake Park information

const jakeInfo = {
  characterName: "Jake Park",
  characterAlias: "Solitary Survivalist",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> South Korean",
  characterDescription: 'A solitary specialist, Jake Park’s time in the wilderness has sharpened his survival instincts. <br><br> Stealthy and resourceful, the only sign of his presence are the Sabotaged Hooks he leaves behind.<br>&nbsp;',
  characterPerk1: "<br>Calm Spirit",
  characterPerk2: "<br>Iron Will",
  characterPerk3: "<br>Saboteur",
  tooltipPerk1: "&nbsp;<br>Animals seem to trust you as they often stay calm in your presence. <br><br> &bull; Reduces chances of alerting woodland creatures by <b class='ttye'>100%</b>. <br><br>&bull; Allows you to overcome the urge to scream. <br><br>&bull; Allows you to open chests and cleanse/bless Totems silently, but at <b class='ttye'>40</b>/<b class='ttgr'>35</b>/<b class='ttpu'>30</b><b>%</b> reduced speed.<br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by <b class='ttye'>25</b>/<b class='ttgr'>50</b>/<b class='ttpu'>75</b><b>%</b>. Does not function while <b>Exhausted</b>. Does not inflict <b>Exhausted</b>. <br><br><i class='ttey'>Exhausted prevents Survivors from activating exhausting perks.</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Unlocks potential in one's aura reading ability. <br><br>&bull; See hook auras in a <b class='ttye'>56 meter</b> radius from the pickup spot if another Survivor is being carried. Scourge Hooks are shown in yellow. <br>&bull; Unlocks the ability to sabotage hooks without a Toolbox. <br>&bull; Sabotaging a hook without a Toolbox takes <b class='ttor'>2.3 seconds</b>. <br>&bull; The sabotage action has a <b class='ttye'>70</b>/<b class='ttgr'>65</b>/<b class='ttpu'>60</b> <b>second</b> cooldown.<br>&nbsp;",
};

//Claudette Morel information

const claudetteInfo = {
  characterName: "Claudette Morel",
  characterAlias: "Studious Botanist",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> Canadian",
  characterDescription: 'Claudette understands the value of altruism, using her aptitude for botany to ensure her teammates are prepared for the challenges ahead. <br><br>An expert healer to herself and others, Claudette’s supportive presence is always welcome.',
  characterPerk1: "<br>Botany Knowledge",
  characterPerk2: "<br>Empathy",
  characterPerk3: "<br>Self-Care",
  tooltipPerk1: "&nbsp;<br>You transform plants found around the campfire into tinctures that slow down bleeding. <br><br> &bull; <b>Healing speed</b> is increased by <b class='ttye'>30</b>/<b class='ttgr'>40</b>/<b class='ttpu'>50</b><b>%</b>.<br>&bull; <b>Healing item efficiency</b> is reduced by <b class='ttor'>20%</b>. <br><br><i class='ttgo'>&quot;Basic botany knowledge could save your life someday.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>Unlocks potential in one's aura reading ability. Dying or injured allies' auras are revealed to you when within a <b class='ttye'>64</b>/<b class='ttgr'>96</b>/<b class='ttpu'>128</b> <b>meter</b> range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.<br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Unlocks the ability to heal yourself without a healing item at <b class='ttye'>25</b>/<b class='ttgr'>30</b>/<b class='ttpu'>35</b><b>%</b> of the normal healing speed.<br>&nbsp;",
};

//David King information

const davidInfo = {
  characterName: "David King",
  characterAlias: "Rugged Scrapper",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> English",
  characterDescription: 'Some say misunderstood, others say arrogant – though never to his face. <br><br> A rough and tumble scrapper with a penchant for debauchery and ruckus, it’s always better to have David King on your side.',
  characterPerk1: "<br>Dead Hard",
  characterPerk2: "<br>No Mither",
  characterPerk3: "<br>We're Gonna Live Forever",
  tooltipPerk1: "&nbsp;<br>You can take a beating. <br><br>Dead hard activates after you are unhooked or unhook yourself. <br><br>When injured, tap into your adrenaline bank to avoid incoming damage. Press the <i>Active Ability Button 1</i> while running to gain the Endurance status effect for the next <b class='ttye'>0.5 seconds</b>. <br><br>&bull; Causes the <i>Exhausted</i> status effect for <b class='ttye'>60</b>/<b class='ttgr'>50</b>/<b class='ttpu'>40</b> <b>seconds</b>. <br>&bull; Dead Hard then deactivates.<br><br> <i class='ttey'>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead. <br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out. <br>Exhausted prevents survivors from activating exhausting perks.<br><br></i><i class='ttgo'>&quot;We were walkin' through t'ginnel one night when a beer bottle flew past me, then another, and another. I thought to myself, &quot;Gonna 'ave some fun 'ere lads, let's get stuck in!&quot; It were a right dust up, I swear down!&quot; -David King<br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>You are affected by the <b>Broken</b> status effect for the duration of the trial.<br><br>Your thick blood coagulates practically instantly. <br><br>&bull; You don't leave pools of blood. <br>&bull; Grunts of pain caused by injuries are reduced by <b class='ttye'>25</b>/<b class='ttgr'>50</b>/<b class='ttpu'>75</b><b>%</b> at any time.<br>&bull; Your recovery speed is increased by <b class='ttye'>15</b>/<b class='ttgr'>20</b>/<b class='ttpu'>25</b><b>%</b> and you can completely recover from the dying state.<br><br><i class='ttey'>Broken prevents Survivors from being healed.</b> <br><br><i class='ttgo'>&quot;I lost it. Just lamped him one. They went and banned me didn't they. Went t'pub afterwards, had a few pints and moved on to the next chapter. I couldn't be mithered with it all anyway, you know what I mean? Can't be arsed.&quot; -David King</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Your few friends deserve the best protection. <br><br>When healing another survivor in the dying state, your healing speed is increased by <b class='ttye'>100%</b>.<br><br>Additionally, performing any of the following actions activates this perk's secondary function: <br><br>&bull; Perform a Safe Hook Rescue<br>&bull; Take a hit to protect a Survivor<br>&bull; Rescue a Survivor by stunning the Killer with a pallet<br>&bull; Rescue a Survivor by blinding the Killer <br><br>When this perk's secondary function is active, healing another Survivor out of the dying state grants them <b>Endurance</b> for <b class='ttye'>6</b>/<b class='ttgr'>8</b>/<b class='ttpu'>10</b> <b>seconds</b> and deactivates the secondary function.<br><br><i class='ttey'>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead. <br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.</i><br><br><i class='ttgo'>&quot;Come on then, let's 'ave it! I don't give a shit pal.&quot; -David King</i><br>&nbsp;",
};

//Nea Karlsson information

const neaInfo = {
  characterName: "Nea Karlsson",
  characterAlias: "Urban Artist",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> Swedish",
  characterDescription: 'Years of evading authorities and navigating the streets of Sweden have kept the elusive Nea Karlsson one step ahead. <br><br>Capable of escaping in a pinch, her catlike agility has gotten her out of trouble time and again.',
  characterPerk1: "<br>Balanced Landing",
  characterPerk2: "<br>Streetwise",
  characterPerk3: "<br>Urban Evasion",
  tooltipPerk1: "&nbsp;<br>Your agility is incomparable. <br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by <b class='ttye'>75%</b> and reduce the volume of grunts from falling by <b class='ttye'>100%</b>. You start sprinting at <b class='ttor'>150%</b> your normal running speed for a maximum of <b class='ttre'>3 seconds</b>.<br><br>Causes the <b>Exhausted</b> status effect for <b class='ttye'>60</b>/<b class='ttgr'>50</b>/<b class='ttpu'>40</b> <b>seconds</b>.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br><i class='ttey'>Exhausted prevents Survivors from activating exhausting perks.</i> <br><br><i class='ttgo'>&quot;I've jumped from higher places.&quot; -Nea</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>Long nights out taught you to do a lot with what you've got. Reduce consumption rate of item charge by <b class='ttye'>15</b>/<b class='ttgr'>20</b>/<b class='ttpu'>25</b><b>%</b> for you and allies within a <b class='ttor'>8 meter</b> range. Once out of range, this effect persists for <b class='ttre'>15 seconds</b>.<br><br><i class='ttgo'>&quot;You're doing it wrong! Let me show you how it's done.&quot; -Nea</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by <b class='ttye'>90</b>/<b class='ttgr'>95</b>/<b class='ttpu'>100</b><b>%</b>.<br><br><i class='ttgo'>&quot;The paint is still fresh but I'm long gone.&quot; -Nea</i><br>&nbsp;",
};

//Trapper information

const trapperInfo = {
  characterName: "Evan MacMillan",
  characterAlias: "The Trapper",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> American",
  characterDescription: 'Armed with a bag of Bear Traps, The Trapper specialises in catching unsuspecting Survivors. <br><br> By placing traps in high-traffic areas and thick patches of grass, he creates a deadly area that forces Survivors to move with caution. <br><br>When dealing with The Trapper, a simple misstep can prove fatal.',
  characterPerk1: "<br>Agitation",
  characterPerk2: "<br>Brutal Strength",
  characterPerk3: "<br>Unnerving Presence",
  tooltipPerk1: "&nbsp;<br>You get excited in anticipation of hooking your prey. <br><br>Increases your movement speed while transporting bodies by <b class='ttye'>6</b>/<b class='ttgr'>12</b>/<b class='ttpu'>18</b><b>%</b>. While transporting a body, your Terror Radius is increased by <b class='ttor'>12 meters</b>.<br><br><i class='ttgo'>&quot;At some point, the excitement of hooking one of us becomes more important than the desire to kill us.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>Your great strength allows you to shred through your prey's defenses. <br><br>Destroy <b>dropped pallets, breakable walls, and generators</b> <b class='ttye'>10</b>/<b class='ttgr'>15</b>/<b class='ttpu'>20</b><b>%</b> faster. <br><br><i class='ttgo'>&quot;It's more than muscles. A dark power motivates the beast.&quot;</i> <br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Your presence alone instills great fear. <br><br>Survivors within your Terror Radius have a <b class='ttye'>10%</b> greater chance of triggering Skill Checks when repairing or healing. Triggered Skill Checks' success zones are reduced by <b class='ttye'>40</b>/<b class='ttgr'>50</b>/<b class='ttpu'>60</b><b>%</b>.<br><br><i class='ttgo'>&quot;Its presence befalls us.&quot;</i><br>&nbsp;",
};

//Wraith information

const wraithInfo = {
  characterName: "Philip Ojomo",
  characterAlias: "The Wraith",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> Nigerian",
  characterDescription: 'Using his Wailing Bell to render himself invisible, The Wraith tracks his prey and strikes with little warning. <br><br>Upon hearing the Bell’s fateful chime, Survivors must think fast or suffer the consequences. <br><br>A hit-and-run specialist, The Wraith is adept at keeping everybody injured.',
  characterPerk1: "<br>Bloodhound",
  characterPerk2: "<br>Predator",
  characterPerk3: "<br>Shadowborn",
  tooltipPerk1: "&nbsp;<br>Like a hunting scent hound, you smell traces of blood at a great distance.<br><br>Fresh blood marks are <b class='ttye'>considerably</b> more discernible than normal and can be tracked for <b class='ttye'>2</b>/<b class='ttgr'>3</b>/<b class='ttpu'>4</b> <b>seconds</b> longer than normal.<br><br><i class='ttgo'>&quot;Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>Your acute tracking ability allows you to hone in on disturbances left by running survivors. <br><br>Scratch Marks left by survivors will spawn <b class='ttye'>slightly</b>/<b class='ttgr'>moderately</b>/<b class='ttpu'>considerably</b> closer together.<br><br><br><i class='ttgo'>&quot;Never stop moving and hope you're always two steps ahead of the beast.&quot; -Notebook</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>You have a keen vision in the darkness of the night.<br><br>Your field of view is <b class='ttye'>9</b>/<b class='ttgr'>12</b>/<b class='ttpu'>15</b> <b>degrees</b> wider than normal. <br><br><i>Does not stack with other FOV increases.</i><br><br><i class='ttgo'>&quot;Shining in the darkest dark, his eyes pierce the night and sting your soul.&quot;</i><br>&nbsp;",
};

//Hillbilly information

const hillbillyInfo = {
  characterName: "Max Thompson Jr.",
  characterAlias: "The Hillbilly",
  characterGender: "<b>Gender:</b> Male",
  characterOrigin: "<b>Nationality:</b> American",
  characterDescription: 'The sound of a revving motor, followed by a bloodthirsty scream of rage. <br>The Hillbilly isn’t exactly subtle, but he makes up for it in brutal efficiency. <br><br>Capable of traversing great distances at a rapid pace, those in his path will be rudely introduced to one-hundred gnashing chainsaw blades.',
  characterPerk1: "<br>Enduring",
  characterPerk2: "<br>Lightborn",
  characterPerk3: "<br>Tinkerer",
  tooltipPerk1: "&nbsp;<br>You are resilient to pain.<br><br>You reduce the duration of <b>pallet stuns</b> by <b class='ttye'>40</b>/<b class='ttgr'>45</b>/<b class='ttpu'>50</b><b>%</b>. Has no effect while carrying a Survivor.<br><br><i class='ttgo'>&quot;He stops at nothing.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>Unlike other beasts of The Fog, you have adapted to light.<br><br>You are immune to blindess caused by Flashlights, firecrackers, and blast mines. Survivors that attempt blinding you have their aura revealed for <b class='ttye'>6</b>/<b class='ttgr'>8</b>/<b class='ttpu'>10</b> <b>seconds</b>.<br><br><i class='ttgo'>&quot;These monsters... they adapt! They emerge with strange new abilities.&quot; -Vigo's Journal</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Whenever a generator is repaired to <b class='ttye'>70%</b> progress, it triggers a loud noise notification and you are granted the <b>Undetectable</b> status effect for the next <b class='ttye'>12</b>/<b class='ttgr'>14</b>/<b class='ttpu'>16</b> <b>seconds</b>. This effect can only be triggered once on each generator.<br><br>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.<br><br><i class='ttgo'>&quot;The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways...&quot; -Notebook</i><br>&nbsp;",
};

//Nurse information

const nurseInfo = {
  characterName: "Sally Smithson",
  characterAlias: "The Nurse",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> English",
  characterDescription: 'Using her Blink ability, The Nurse can teleport great distances in moments, predicting and cutting off Survivor routes. <br><br>A powerful process best honed by experience, careless Blinks are punished with a wave of fatigue. <br><br>The epitome of high risk, high reward, The Nurse can end chases with surgical precision.',
  characterPerk1: "<br>A Nurse's Calling",
  characterPerk2: "<br>Stridor",
  characterPerk3: "<br>Thanatophobia",
  tooltipPerk1: "&nbsp;<br>Unlocks potential in one's aura reading ability. The auras of Survivors who are healing or being healed are revealed to you when they are within a <b class='ttye'>20</b>/<b class='ttgr'>24</b>/<b class='ttpu'>28</b> <b>meter</b> range.<br><br><i class='ttgo'>&quot;Still attached to the fragments of her past life, she is drawn to those in need of help.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>You are acutely sensetive to the breathing of your prey.<br><br>Breathing of Survivors in pain is <b class='ttye'>25</b>/<b class='ttgr'>50</b><b>%</b> louder and regular breathing is <b class='ttye'>0</b>/<b class='ttpu'>25</b><b>%</b> louder.<br><br><i class='ttgo'>&quot;If you don't stop and catch your breath... she will.&quot;</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Their courage fades in the face of undeniable mortality. <br><br>&bull; For each injured, dying or hooked Survivor, all Survivors receive a penalty of <b class='ttye'>1</b>/<b class='ttgr'>1.5</b>/<b class='ttpu'>2</b><b>%</b> to repair, sabotage and Totem-cleansing speeds.<br>&bull; If there are <b class='ttor'>4</b> injured, dying or hooked Survivors, there is an additional <b class='ttre'>12% penalty</b> to repair, sabotage and Totem-cleansing speeds.<br><br><i class='ttgo'>&quot;She plays with us and revels in our pain.&quot;</i><br>&nbsp;",
};

//Huntress information

const huntressInfo = {
  characterName: "Anna",
  characterAlias: "The Huntress",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> Russian",
  characterDescription: 'Armed with throwable hatchets, The Huntress is a constant threat to Survivors, even those at a great distance. <br>With patience and precision, chases can end as quickly as they begin. <br><br> Predict Survivor movement and let your hatchet fly – there’s nothing quite like the rewarding sound of a target struck.',
  characterPerk1: "<br>Beast of Prey",
  characterPerk2: "Hex: <br>Huntress Lullaby",
  characterPerk3: "<br>Territorial Imperative",
  tooltipPerk1: "&nbsp;<br>Your lust for a kill is so intense that your connection with The Entity is momentarily lost, making you totally unpredictable.<br><br>Grants the <b>Undetectable</b> status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust. <br><br>&bull; Gain <b class='ttye'>35</b>/<b class='ttgr'>40</b>/<b class='ttpu'>50</b><b>%</b> more Bloodpoints for actions in the Hunter Category.<br><br><i class='ttey'>Undetectable hides the Killer's aura, Terror Radius, and Red Stain.</i><br><br><i class='ttgo'>&quot;Where did she go?&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey's attention.<br><br>Survivors receive a <b class='ttye'>2</b>/<b class='ttgr'>4</b>/<b class='ttpu'>6</b><b>%</b> regression penalty when missing a Skill Check while healing or repairing.<br><br>Each time a Survivor is hooked, Huntress Lullaby grows in power. It affects healing and repairing Skill Check warnings:<br><br>&bull; <b>1 to 4 Tokens:</b> Time between the Skill Check warning sound and the Skill Check becomes shorter.<br>&bull; <b>5 Tokens:</b> No Skill Check warning.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>Unlocks potential in one's aura reading ability. Survivors' auras are revealed to you for <b class='ttye'>4</b>/<b class='ttgr'>5</b>/<b class='ttpu'>6</b> <b>seconds</b> when they enter the basement and you are more than <b class='ttor'>24 meters</b> away from the basement entrance.<br><br><i>Territorial Imperative</i> can only be triggered once every <b class='ttre'>45 seconds</b>.<br>&nbsp;",
};

//Hag information

const hagInfo = {
  characterName: "Lisa Sherwood",
  characterAlias: "The Hag",
  characterGender: "<b>Gender:</b> Female",
  characterOrigin: "<b>Nationality:</b> American",
  characterDescription: 'The Hag specialises in creating a dangerous web of Phantasm Traps, to be triggered by unsuspecting Survivors.<br>She can instantly teleport to a triggered Trap, striking the Survivor that sprung it. <br><br>Lock down key areas, make rescues a deadly gamble, and end chases quickly with strategic Phantasm Trap placement.',
  characterPerk1: "Hex: <br>Devour Hope",
  characterPerk2: "Hex: <br>Ruin",
  characterPerk3: "Hex: <br>The Third Seal",
  tooltipPerk1: "&nbsp;<br>A Hex rooting its power on hope. The false hope of Survivors ignites your hunter.<br><br>When a Survivor is rescued from a hook at least <b class='ttye'>24 meters</b> away, Devour Hope receives a token.<br><br>&bull; <b class='ttre'>2 Tokens:</b> Gain a <b class='ttye'>3</b>/<b class='ttgr'>4</b>/<b class='ttpu'>5</b><b>% Haste</b> status effect, <b class='ttre'>10 seconds</b> after hooking a Survivor, for a duration of <b class='ttre'>10 seconds</b>.<br>&bull; <b class='ttre'>3 Tokens:</b> Survivors suffer from the <b>Exposed</b> status effect.<br>&bull; <b class='ttor'>5 Tokens:</b> Grants the ability to kill Survivors by your own hand. <br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><i class='ttey'>Exposed Survivors will be downed by basic attacks even if uninjured.<br><br>Haste increases Killer movement speed.</i><br><br><i class='ttgo'>&quot;If you do nothing, you have their blood on your hands. If you save them, her hunger grows.&quot;</i><br>&nbsp;",
  tooltipPerk2: "&nbsp;<br>A Hex that affects all generator repair progress.<br><br>All generators are affected by <i>Hex: Ruin</i>. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at <b class='ttye'>5</b>/<b class='ttgr'>75</b>/<b class='ttpu'>100</b><b>%</b> of the normal regression speed. <br><br>&bull; Once any Survivor is killed by any means, the <i>Hex: Ruin</i> Totem reverts to a Dull totem.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><i class='ttgo'>&quot;A curse is upon you. It will be your ruin.&quot;</i><br>&nbsp;",
  tooltipPerk3: "&nbsp;<br>A Hex that hinders one's aura reading ability.<br><br>Hitting a Survivor with a <i>basic attack</i> or a <i>special attack</i> while the Hex Totem is active applies the <b>Blindness</b> status effect. This effect applies to the last <b class='ttye'>2</b>/<b class='ttgr'>3</b>/<b class='ttpu'>4</b> Survivors hit.<br><br><i>The Hex effects persist as long as the related Hex Totem is standing.</i><br><br><i class='ttey'>Blindness prevents Survivors from seeing auras.</i><br><br><i class='ttgo'>&quot;She touched your skin, you bear the witch's mark!&quot;</i><br>&nbsp;",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//On portrait click get character info and open dialog box with wiki 23-12-15

function selectedPortrait(infoPlaceholder) {
  characterInfo = infoPlaceholder;
  document.getElementById("wikiname").innerHTML = characterInfo.characterName;
  document.getElementById("wikialias").innerHTML = characterInfo.characterAlias;
  document.getElementById("wikigender").innerHTML =characterInfo.characterGender;
  document.getElementById("wikiorigin").innerHTML = characterInfo.characterOrigin;
  document.getElementById("wikidescription").innerHTML = characterInfo.characterDescription;
  document.getElementById("wikinameperk1").innerHTML = characterInfo.characterPerk1;
  document.getElementById("wikinameperk2").innerHTML = characterInfo.characterPerk2;
  document.getElementById("wikinameperk3").innerHTML = characterInfo.characterPerk3;
  document.getElementById("tooltiptext1").innerHTML = characterInfo.tooltipPerk1;
  document.getElementById("tooltiptext2").innerHTML = characterInfo.tooltipPerk2;
  document.getElementById("tooltiptext3").innerHTML = characterInfo.tooltipPerk3;
  //document.getElementById("characterwiki").open;  - Commented out - not needed?
};


//Open character wiki and modal 23-12-18

const modal = document.getElementById("modal");
const openModalDwight = document.getElementById("openwikidwight");
const openModalMeg = document.getElementById("openwikimeg");
const openModalJake = document.getElementById("openwikijake");
const openModalClaudette = document.getElementById("openwikiclaudette");
const openModalDavid = document.getElementById("openwikidavid");
const openModalNea = document.getElementById("openwikinea");
const openModalTrapper = document.getElementById("openwikitrapper");
const openModalWraith = document.getElementById("openwikiwraith");
const openModalHillbilly = document.getElementById("openwikihillbilly");
const openModalNurse = document.getElementById("openwikinurse");
const openModalHuntress = document.getElementById("openwikihuntress");
const openModalHag = document.getElementById("openwikihag");


//When you click a portrait, open the dialog box and fetch the image of the character and it's perks 23-12-18

openModalDwight.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/dwight_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/bond.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/leader.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/proveThyself.webp";
  selectButton.play();
  modal.showModal();
});
openModalMeg.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/meg_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/adrenaline.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/quickAndQuiet.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/sprintBurst.webp";
  selectButton.play();
  modal.showModal();
});
openModalJake.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/jake_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/calmSpirit.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/ironWill.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/saboteur.webp";
  selectButton.play();
  modal.showModal();
});
openModalClaudette.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/claudette_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/botanyKnowledge.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/empathy.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/selfCare.webp";
  selectButton.play();
  modal.showModal();
});
openModalDavid.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/david_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/deadHard.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/noMither.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/wereGonnaLiveForever.webp";
  selectButton.play();
  modal.showModal();
});
openModalNea.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/survivors/avatar/nea_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/balancedLanding.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/streetwise.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/urbanEvasion.webp";
  selectButton.play();
  modal.showModal();
});
openModalTrapper.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/trapper_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/agitation.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/brutalStrength.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/unnervingPresence.webp";
  selectButton.play();
  modal.showModal();
});
openModalWraith.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/wraith_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/bloodhound.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/predator.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/shadowborn.webp";
  selectButton.play();
  modal.showModal();
});
openModalHillbilly.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/hillbilly_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/enduring.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/lightborn.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/tinkerer.webp";
  selectButton.play();
  modal.showModal();
});
openModalNurse.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/nurse_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/aNursesCalling.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/stridor.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/thanatophobia.webp";
  selectButton.play();
  modal.showModal();
});
openModalHuntress.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/huntress_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/beastOfPrey.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/huntressLullaby.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/territorialImperative.webp";
  selectButton.play();
  modal.showModal();
});
openModalHag.addEventListener("click", () => {
  document.getElementById("wikiavatar").src = "./media/images/killers/avatar/hag_large.webp";
  document.getElementById("wikiperk1").src = "./media/images/perks/devourHope.webp";
  document.getElementById("wikiperk2").src = "./media/images/perks/ruin.webp";
  document.getElementById("wikiperk3").src = "./media/images/perks/theThirdSeal.webp";
  selectButton.play();
  modal.showModal();
});

//Close character wiki by button 23-12-18

const closeModal = document.getElementById("closewiki");

closeModal.addEventListener("click", () => {
  selectButton.play();
  modal.close();
});


//Load menu theme music 23-12-19
const menuTheme = document.getElementById("menutheme");
menuTheme.volume=0.1;
menuTheme.muted=false;

//Load sound effect for opening menu button 23-12-19

const openingClickedSfx = document.getElementById("openingbuttonsfx");
openingClickedSfx.volume=0.1;

//Opening box button close and triggers sounds and interaction with site 23-12-19

const openingClicked = document.getElementById("openingbutton");
const openingBox = document.getElementById("openingbox").open = true;

openingClicked.addEventListener("click", () => {
  document.getElementById("openingbox").open = false;
  openingClickedSfx.play();
  campfire.play();
  menuTheme.play();
});

//When you click outside the box, close the wiki

function mousePosition(event) {
  if (event.offsetX < 1 || event.offsetX > 630) {
    modal.close();
  }
};


////////////////////////// TOOLS /////////////////////////////

//Mouse tracker (X-position)

//onmousemove = function(e){console.log("clientX", e.clientX)}
//onmousemove = function(e){console.log("offsetX", e.offsetX)}
//onmousemove = function(e){console.log("pageX", e.pageX)}
//onmousemove = function(e){console.log("screenX", e.screenX)}



////////////////////////////////////////////////////////////////////////////////////////////////////

//Load survivor and killer themes + apply volume and mute 23-12-13

//var survivorTheme = document.getElementById("surv");
//survivorTheme.volume = 0.01;
//survivorTheme.muted = true;

//var killerTheme = document.getElementById("kill");
//killerTheme.volume = 0.01;
//killerTheme.muted = true;

//Survivor box check for volume fade 23-12-14

//var survivorBoxSelected = false;

//Max volume allowed 23-12-14

//const maxVolume = 0.1;

//Maybe play this when the opening button is clicked instead 23-12-19
/*
//When you click on site, the audio plays 23-12-13
addEventListener("click", (event) => {
  //console.log(event);
  campfire.play();
  survivorTheme.play();
  killerTheme.play();
});
*/

/*When you hover over survivor box, trigger and unmute survivor theme, mute killer theme 23-12-14

var survivorBox = document.getElementById("survivorbox");
survivorBox.addEventListener("mouseover", function () {
  console.log('Survivor theme triggered');
  survivorTheme.volume = 0.1;
  survivorTheme.muted = false;
  survivorBoxSelected = true;
  killerTheme.muted = true;
});*/

//When you hover over killer box, trigger and unmute killer theme, mute survivor theme 23-12-14

//var killerBox = document.getElementById("killerbox");
//killerBox.addEventListener("mouseover", function () {
  //console.log('Killer theme triggered');
  //killerTheme.volume = 0.1;
  //killerTheme.muted = false;
  //survivorBoxSelected = false;
  //survivorTheme.muted = true;
//});


////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Put this after button click on portrait (janky, scrolls to the top):
window.onscroll = function () { window.scrollTo(0, 0); };

Put this when you press the "X"-button to close the wiki:
window.onscroll = function () { window.scrollTo};
*/

//Checks survivor and killer theme volume and adjusts 23-12-14

/*
setInterval(function () {
  var dbdTheme = survivorTheme.volume - killerTheme.volume;
  if (survivorBoxSelected == true && dbdTheme < maxVolume) {
    dbdTheme += 0.01;
  }
  else if (survivorBoxSelected == false && dbdTheme > -maxVolume){
    dbdTheme -= 0.01;
  }
  if (dbdTheme > 0 && dbdTheme < maxVolume) {
    survivorTheme.volume = dbdTheme;
    killerTheme.volume = 0;
    console.log(dbdTheme)
  } else if (dbdTheme < 0 && dbdTheme > -maxVolume) {
    killerTheme.volume = -dbdTheme;
    survivorTheme.volume = 0;
  console.log(dbdTheme);
  }
}, 100);
*/

//Found issue with code - it gets interrupted if the mouse hovers over another element other than the killer/survivor boxes
//Maybe check for mouse X-position instead?


///////////////////////////////////////////////Testing new get info 23-12-20//////////////////////////////////////////////////////
/*
var getCharacterInfo = {
  dwightInfo: {
    characterName: "Dwight Fairfield",
    characterAlias: "Nervous Leader",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> American",
    characterDescription: 'An unlikely leader forced to rise to the occasion, Dwight Fairfield’s reluctant bravery inspires those around him. <br><br> Understanding the value of teamwork, Dwight is adept at locating and bolstering the efficiency of his teammates.',
    characterPerk1: "<br>Bond",
    characterPerk2: "<br>Leader",
    characterPerk3: "<br>Prove Thyself",
    characterAvatar: "./media/images/killers/avatar/wraith_large.webp"
  },
  megInfo: {
    characterName: "Meg Thomas",
    characterAlias: "Energetic Athlete",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> American",
    characterDescription: 'Driven by reckless courage, the athletic Meg Thomas has never been afraid to push her limits. <br><br> Prone to stepping up in the clutch, Meg gets a thrill out of goading Killers into lengthy chases, buying essential time for her teammates.',
    characterPerk1: "<br>Adrenaline",
    characterPerk2: "<br>Quick & Quiet",
    characterPerk3: "<br>Sprint Burst",
  },
  jakeInfo: {
    characterName: "Jake Park",
    characterAlias: "Solitary Survivalist",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> South Korean",
    characterDescription: 'A solitary specialist, Jake Park’s time in the wilderness has sharpened his survival instincts. <br><br> Stealthy and resourceful, the only sign of his presence are the Sabotaged Hooks he leaves behind.',
    characterPerk1: "<br>Calm Spirit",
    characterPerk2: "<br>Iron Will",
    characterPerk3: "<br>Saboteur",
  },
  claudetteInfo: {
    characterName: "Claudette Morel",
    characterAlias: "Studious Botanist",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> Canadian",
    characterDescription: 'Claudette understands the value of altruism, using her aptitude for botany to ensure her teammates are prepared for the challenges ahead. <br><br>An expert healer to herself and others, Claudette’s supportive presence is always welcome.',
    characterPerk1: "<br>Botany Knowledge",
    characterPerk2: "<br>Empathy",
    characterPerk3: "<br>Self-Care",
  },
  davidInfo: {
    characterName: "David King",
    characterAlias: "Rugged Scrapper",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> English",
    characterDescription: 'Some say misunderstood, others say arrogant – though never to his face. <br><br> A rough and tumble scrapper with a penchant for debauchery and ruckus, it’s always better to have David King on your side.',
    characterPerk1: "<br>Dead Hard",
    characterPerk2: "<br>No Mither",
    characterPerk3: "<br>We're Gonna Live Forever",
  },
  neaInfo: {
    characterName: "Nea Karlsson",
    characterAlias: "Urban Artist",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> Swedish",
    characterDescription: 'Years of evading authorities and navigating the streets of Sweden have kept the elusive Nea Karlsson one step ahead. <br><br>Capable of escaping in a pinch, her catlike agility has gotten her out of trouble time and again.',
    characterPerk1: "<br>Balanced Landing",
    characterPerk2: "<br>Streetwise",
    characterPerk3: "<br>Urban Evasion",
  },
  trapperInfo: {
    characterName: "Evan MacMillan",
    characterAlias: "The Trapper",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> American",
    characterDescription: 'Armed with a bag of Bear Traps, The Trapper specialises in catching unsuspecting Survivors. <br><br> By placing traps in high-traffic areas and thick patches of grass, he creates a deadly area that forces Survivors to move with caution. <br><br>When dealing with The Trapper, a simple misstep can prove fatal.',
    characterPerk1: "<br>Agitation",
    characterPerk2: "<br>Brutal Strength",
    characterPerk3: "<br>Unnerving Presence",
  },
  wraithInfo: {
    characterName: "Philip Ojomo",
    characterAlias: "The Wraith",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> Nigerian",
    characterDescription: 'Using his Wailing Bell to render himself invisible, The Wraith tracks his prey and strikes with little warning. <br><br>Upon hearing the Bell’s fateful chime, Survivors must think fast or suffer the consequences. <br><br>A hit-and-run specialist, The Wraith is adept at keeping everybody injured.',
    characterPerk1: "<br>Bloodhound",
    characterPerk2: "<br>Predator",
    characterPerk3: "<br>Shadowborn", 
  },
  hillbillyInfo: {
    characterName: "Max Thompson Jr.",
    characterAlias: "The Hillbilly",
    characterGender: "<b>Gender:</b> Male",
    characterOrigin: "<b>Nationality:</b> American",
    characterDescription: 'The sound of a revving motor, followed by a bloodthirsty scream of rage. <br>The Hillbilly isn’t exactly subtle, but he makes up for it in brutal efficiency. <br><br>Capable of traversing great distances at a rapid pace, those in his path will be rudely introduced to one-hundred gnashing chainsaw blades.',
    characterPerk1: "<br>Enduring",
    characterPerk2: "<br>Lightborn",
    characterPerk3: "<br>Tinkerer",
  },
  nurseInfo: {
    characterName: "Sally Smithson",
    characterAlias: "The Nurse",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> English",
    characterDescription: 'Using her Blink ability, The Nurse can teleport great distances in moments, predicting and cutting off Survivor routes. <br><br>A powerful process best honed by experience, careless Blinks are punished with a wave of fatigue. <br><br>The epitome of high risk, high reward, The Nurse can end chases with surgical precision.',
    characterPerk1: "<br>A Nurse's Calling",
    characterPerk2: "<br>Stridor",
    characterPerk3: "<br>Thanatophobia",
  },
  huntressInfo: {
    characterName: "Anna",
    characterAlias: "The Huntress",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> Russian",
    characterDescription: 'Armed with throwable hatchets, The Huntress is a constant threat to Survivors, even those at a great distance. <br><br>With patience and precision, chases can end as quickly as they begin. <br><br> Predict Survivor movement and let your hatchet fly – there’s nothing quite like the rewarding sound of a target struck.',
    characterPerk1: "<br>Beast of Prey",
    characterPerk2: "Hex: <br>Huntress Lullaby",
    characterPerk3: "<br>Territorial Imperative",
  },
  hagInfo: {
    characterName: "Lisa Sherwood",
    characterAlias: "The Hag",
    characterGender: "<b>Gender:</b> Female",
    characterOrigin: "<b>Nationality:</b> American",
    characterDescription: 'The Hag specialises in creating a dangerous web of Phantasm Traps, to be triggered by unsuspecting Survivors. <br><br>She can instantly teleport to a triggered Trap, striking the Survivor that sprung it. <br><br>Lock down key areas, make rescues a deadly gamble, and end chases quickly with strategic Phantasm Trap placement.',
    characterPerk1: "Hex: <br>Devour Hope",
    characterPerk2: "Hex: <br>Ruin",
    characterPerk3: "Hex: <br>The Third Seal",
  },
}
*/

/*
function selectedPortrait2(getCharacterInfo) {
  document.getElementById("wikiname").innerHTML = getCharacterInfo.characterName;
  document.getElementById("wikialias").innerHTML = getCharacterInfo.characterAlias;
  document.getElementById("wikigender").innerHTML =getCharacterInfo.characterGender;
  document.getElementById("wikiorigin").innerHTML = getCharacterInfo.characterOrigin;
  document.getElementById("wikidescription").innerHTML = getCharacterInfo.characterDescription;
  document.getElementById("wikinameperk1").innerHTML = getCharacterInfo.characterPerk1;
  document.getElementById("wikinameperk2").innerHTML = getCharacterInfo.characterPerk2;
  document.getElementById("wikinameperk3").innerHTML = getCharacterInfo.characterPerk3;
  document.getElementById("wikiavatar").src = getCharacterInfo.characterPerk3;
  //document.getElementById("characterwiki").open;  - Commented out - not needed?
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////