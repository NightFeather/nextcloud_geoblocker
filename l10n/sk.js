OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "Aktualizácia nie je možná. ",
    "Update possible. " : "Možná aktualizácia. ",
    "Update running. " : "Prebieha aktualizácia. ",
    "Update undefined. " : "Aktualizácia nie je definovaná. ",
    "Status of the service cannot be determined." : "Stav služby sa nedá zistiť.",
    "No database date available." : "Dátum databázy nie je dostupný.",
    "Database file location not available!" : "Umiestnenie súboru s databázou nie je dostupné!",
    "Update Status not available!" : "Stav aktualizácie nie je k dispozícii!",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "Ok. Táto služba vždy vráti \"%s\" pre „Krajina sa nenašla“.",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "CHYBA: Zdá sa, že služba nie je nainštalovaná na hostiteľovi servera Nextcloud alebo nie je dostupná pre webový server, alebo je nesprávne nastavená (je k dispozícii databáza pre IPv4 a IPv6 ?!). Možno je použitie php funkcie exec () v php.ini zakázané.",
    "Date of the database cannot be determined!" : "Dátum databázy nie je možné určiť!",
    "local" : "miestna",
    "default" : "predvolené",
    "ERROR: There is an unknown problem with the service." : "CHYBA: Neznámy problém zo službou.",
    "ERROR: Country cannot be found." : "CHYBA: Krajina nebola nájdená.",
    "ERROR: Invalid Argument." : "CHYBA: Neplatný argument.",
    "No entries in the database. Please run update." : "V databáze nie sú žiadne záznamy. Spustite aktualizáciu.",
    "ERROR:" : "CHYBA:",
    "OK" : "OK",
    "IPv6 works only on 64-bit (or higher) systems. When upgrading the system to 64-bit remember to update the DB again." : "Protokol IPv6 funguje iba na 64-bitových (alebo vyšších) systémoch. Pri aktualizácii systému na 64-bitový systém nezabudnite znova aktualizovať databázu.",
    "The database is currently updating. During the update the service can be used with the last valid data." : "Databáza sa aktualizuje. Počas aktualizácie je možné službu používať s poslednými platnými dátami.",
    "The last update try ended in an error but the service can be used with the last valid data." : "Posledný pokus o aktualizáciu sa skončil chybou, ale službu je možné použiť s poslednými platnými dátami.",
    "Last error message:" : "Posledná chybová správa:",
    "PHP GMP Extension needs to be installed." : "Je potrebné nainštalovať rozšírenie PHP GMP.",
    "The database is not initialized. Please run update." : "Databáza nie je inicializovaná. Spustite aktualizáciu.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Databáza sa práve inicializuje. Počkajte, kým sa aktualizácia neskončí. Môže to trvať niekoľko minúť.",
    "The database is corrupted. Please run update again." : "Databáza je poškodená. Znova spustite aktualizáciu.",
    "Something is missing." : "Niečo chýba.",
    "No database available!" : "Databáza nie je k dispozícii!",
    "Invalid file handle for region \"%s\". Probably the internet connection got lost during the update." : "Neplatný popisovač súboru \"%s\". Pravdepodobne došlo k strate internetového pripojenia počas aktualizácie.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "V php.ini  musí byť povolený \"allow_url_fopen\".",
    "Internet connection needs to be available." : "Musí byť k dispozícii pripojenie na internet.",
    "IPv6 is not included on systems with less than 64-bit." : "IPv6 nie je súčasťou systémov s menej ako 64-bitmi.",
    "Current number of entries:" : "Aktuálny počet záznamov:",
    "Update in undefined state. Please complain to the developer." : "Aktualizácia je v nedefinovanom stave. Sťažujte sa vývojárovi.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Blokuje používateľov podľa krajiny odhadovanej podľa IP adresy.",
    "Loading" : "Načítava sa...",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "Toto je nadstavba nad geolokačnými službami, ktorá umožňuje blokovanie (beta), omeškanie (beta) a protokolovanie pokusov o prihlásenie z určených krajín.",
    "Login attempts from local network IP addresses are never blocked, delayed or logged." : "Pokusy o prihlásenie z IP adresy lokálnej siete nie sú blokované, omeškané alebo protokolované.",
    "In the current implementation the login page is normally shown to everybody independent of the country. Also login attempts with a non existing user are failing as usual independent of the country." : "V súčasnej implementácii sa prihlasovacia stránka zvyčajne zobrazuje všetkým nezávisle od krajiny. Zvyčajne zlyhávajú aj pokusy o prihlásenie s neexistujúcim používateľom, nezávisle od krajiny.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Chybné nastavenie Nextcloud (najmä v kontajneri) môže viesť k tomu, že sa zdá, že všetky prístupy pochádzajú z adresy IP v miestnej sieti.",
    "is local." : "je miestna.",
    "is external." : "je externá.",
    "Determination of the country from IP address is only as good as the chosen service." : "Určenie krajiny z adresy IP je také dobré ako zvolená služba.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Ak potrebujete pomoc s nastavením lokalizačných služieb, prečítajte si súbor Readme v",
    "repository" : "úložisko",
    "Service" : "Služba",
    "Choose the service you want to use to determine the country from the IP Address:" : "Vyberte službu, ktorú chcete použiť na určenie krajiny z adresy IP:",
    "Status of the chosen service: " : "Stav vybranej služby:",
    "Date of the database: " : "Dátum databázy",
    "Configuration of the chosen service: " : "Nastavenie zvolenej služby:",
    "Update Database" : "Aktualizovať databázu",
    "Country Selection" : "Výber krajiny",
    "Choose the selection mode" : "Zvoľte režim výberu",
    "No country is blocked but the selected ones (blocklist)" : "Žiadna krajina nie je blokovaná okrem vybraných (zoznam blokovaných)",
    "All countries are blocked but the selected ones (allowlist)" : "Všetky krajiny sú blokované okrem vybraných (zoznam povolených)",
    "Select countries from list" : "Vyberte krajiny zo zoznamu",
    "The following countries were selected in the list above: " : "Z vyššie uvedeného zoznamu boli vybrané nasledujúce krajiny:",
    "Reaction" : "Reakcia",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Ak sa zistí pokus o prihlásenie z vybraných krajín, pokus sa zaznamená do protokolu s nasledujúcimi informáciami",
    "( be aware of data protection issues depending on your logging strategy)" : "(uvedomte si problémy s ochranou údajov v závislosti od vašej stratégie protokolovania)",
    "with IP Address" : "s IP adresou",
    "with Country Code" : "s kódom krajiny",
    "with username" : "s menom používateľa",
    "In addition, the login attempt can also be delayed and blocked." : "Okrem toho, môže byť pokus o prihlásenie omeškaný alebo zablokovaný.",
    "(beta version)" : "(beta verzia)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Aktivujte časový limit pokusov o prihlásenie z IP adries určených krajín.",
    "(30 seconds)" : "(30 sekúnd)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Aktivujte blokovanie pokusov o prihlásenie z IP adries určených krajín.",
    "Test" : "Vyskúšať",
    "Possibilities to test if the Geoblocker is working as expected:" : "Možnosti ako vyskúšať, či Geoblocker pracuje podľa očakávania:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Ďalší pokus o prihlásenie používateľa „%s“ bude simulovaný tak, akoby pochádzal z nasledujúcej IP adresy:",
    "COUNTRY NOT FOUND" : "KRAJINA NEBOLA NÁJDENÁ",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Spojené Arabské Emiráty",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigua a Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albánsko",
    "Armenia" : "Arménsko",
    "Angola" : "Angola",
    "Antarctica" : "Antarktída",
    "Argentina" : "Argentína",
    "American Samoa" : "Americká Samo",
    "Austria" : "Rakúsko",
    "Australia" : "Austrália",
    "Aruba" : "Aruba",
    "Åland Islands" : "Alandy",
    "Azerbaijan" : "Azerbajdžan",
    "Bosnia and Herzegovina" : "Bosna a Hercegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladéš",
    "Belgium" : "Belgicko",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulharsko",
    "Bahrain" : "Bahrain",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Svätý Bartolomej",
    "Bermuda" : "Bermudy",
    "Brunei Darussalam" : "Brunej-Darussalam",
    "Bolivia (Plurinational State of)" : "Bolívia",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius a Saba",
    "Brazil" : "Brazília",
    "Bahamas" : "Bahamské ostrovy",
    "Bhutan" : "Bhután",
    "Bouvet Island" : "Bouvetský ostrov",
    "Botswana" : "Botswana",
    "Belarus" : "Bielorusko",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Kokosové ostrovy",
    "Congo, Democratic Republic of the" : "Kongo",
    "Central African Republic" : "Stredoafrická republika",
    "Congo" : "Kongo",
    "Switzerland" : "Švajčiarsko",
    "Côte d'Ivoire" : "Pobrežie Slonoviny",
    "Cook Islands" : "Cookove ostrovy",
    "Chile" : "Chile",
    "Cameroon" : "Kamerun",
    "China" : "Čína",
    "Colombia" : "Kolumbia",
    "Costa Rica" : "Kostarika",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Kapverdy",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Vianočný ostrov",
    "Cyprus" : "Cyprus",
    "Czechia" : "Česká repubika",
    "Germany" : "Nemecko",
    "Djibouti" : "Džibutsko",
    "Denmark" : "Dánsko",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Dominikánska republika",
    "Algeria" : "Alžírsko",
    "Ecuador" : "Ekvádor",
    "Estonia" : "Estónsko",
    "Egypt" : "Egypt",
    "Western Sahara" : "Západná Sahara",
    "Eritrea" : "Eritrea",
    "Spain" : "Španielsko",
    "Ethiopia" : "Etiópia",
    "Finland" : "Fínsko",
    "Fiji" : "Fidži",
    "Falkland Islands (Malvinas)" : "Falklandské ostrovy",
    "Micronesia (Federated States of)" : "Mikronézia",
    "Faroe Islands" : "Faerské ostrovy",
    "France" : "Francúzsko",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Spojené kráľovstvo Veľkej Británie a Severného Írska",
    "Grenada" : "Grenada",
    "Georgia" : "Gruzínsko",
    "French Guiana" : "Francúzska Guiana",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibraltár",
    "Greenland" : "Grónsko",
    "Gambia" : "Gambia",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadeloupe",
    "Equatorial Guinea" : "Rovníková Guinea",
    "Greece" : "Grécko",
    "South Georgia and the South Sandwich Islands" : "Južná Georgia a Južné Sandwichove ostrovy",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea-Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Heardove a McDonaldove ostrovy",
    "Honduras" : "Honduras",
    "Croatia" : "Chorvátsko",
    "Haiti" : "Haiti",
    "Hungary" : "Maďarsko",
    "Indonesia" : "Indonézia",
    "Ireland" : "Írsko",
    "Israel" : "Izrael",
    "Isle of Man" : "ostrov Man",
    "India" : "India",
    "British Indian Ocean Territory" : "Britské indickooceánske územie",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "Irán",
    "Iceland" : "Island",
    "Italy" : "Taliansko",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamajka",
    "Jordan" : "Jordánsko",
    "Japan" : "Japonsko",
    "Kenya" : "Keňa",
    "Kyrgyzstan" : "Kirgizsko",
    "Cambodia" : "Kambodža",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komory",
    "Saint Kitts and Nevis" : "Svätý Krištof a Nevis",
    "Korea (Democratic People's Republic of)" : "Kórejská ľudovodemokratická republika",
    "Korea, Republic of" : "Južná Kórea",
    "Kuwait" : "Kuvajt",
    "Cayman Islands" : "Kajmanské ostrovy",
    "Kazakhstan" : "Kazachstan",
    "Lao People's Democratic Republic" : "Laoská ľudovodemokratická republika",
    "Lebanon" : "Libanon",
    "Saint Lucia" : "Svätá Lucia",
    "Liechtenstein" : "Lichtenštajnsko",
    "Sri Lanka" : "Srí Lanka",
    "Liberia" : "Libéria",
    "Lesotho" : "Lesothské kráľovstvo",
    "Lithuania" : "Litva",
    "Luxembourg" : "Luxembursko",
    "Latvia" : "Lotyšsko",
    "Libya" : "Líbia",
    "Morocco" : "Maroko",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Moldavská republika",
    "Montenegro" : "Čierna Hora",
    "Saint Martin (French part)" : "Svätý Martin (francúzska časť)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Marshallove ostrovy",
    "North Macedonia" : "Severné Macedónsko",
    "Mali" : "Mali",
    "Myanmar" : "Mjanmarsko",
    "Mongolia" : "Mongolsko",
    "Macao" : "Makao",
    "Northern Mariana Islands" : "Severné Mariany",
    "Martinique" : "Martinik",
    "Mauritania" : "Mauritánia",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Maurícius",
    "Maldives" : "Maledivy",
    "Malawi" : "Malawi",
    "Mexico" : "Mexiko",
    "Malaysia" : "Malajzia",
    "Mozambique" : "Mozambik",
    "Namibia" : "Namíbia",
    "New Caledonia" : "Nová Kaledónia",
    "Niger" : "Niger",
    "Norfolk Island" : "Norfolk Island",
    "Nigeria" : "Nigéria",
    "Nicaragua" : "Nikaragua",
    "Netherlands" : "Holandsko",
    "Norway" : "Nórsko",
    "Nepal" : "Nepál",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nový Zéland",
    "Oman" : "Omán",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Francúzska Polynézia",
    "Papua New Guinea" : "Papua-Nová Guinea",
    "Philippines" : "Filipíny",
    "Pakistan" : "Pakistan",
    "Poland" : "Poľsko",
    "Saint Pierre and Miquelon" : "Saint Pierre a Miquelon",
    "Pitcairn" : "Pitcairnove ostrovy",
    "Puerto Rico" : "Portoriko",
    "Palestine, State of" : "Palestína",
    "Portugal" : "Portugalsko",
    "Palau" : "Palau",
    "Paraguay" : "Paraguaj",
    "Qatar" : "Katar",
    "Réunion" : "Reunion",
    "Romania" : "Rumunsko",
    "Serbia" : "Srbsko",
    "Russian Federation" : "Ruská federácia",
    "Rwanda" : "Rwanda",
    "Saudi Arabia" : "Saudská Arábia",
    "Solomon Islands" : "Šalamúnove ostrovy",
    "Seychelles" : "Seychely",
    "Sudan" : "Sudán",
    "Sweden" : "Švédsko",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Svätá Helena, Ascension a Tristan da Cunha",
    "Slovenia" : "Slovinsko",
    "Svalbard and Jan Mayen" : "Svalbard and Jan Mayen",
    "Slovakia" : "Slovensko",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Maríno",
    "Senegal" : "Senegal",
    "Somalia" : "Somálsko",
    "Suriname" : "Surinam",
    "South Sudan" : "Južný Sudán",
    "Sao Tome and Principe" : "Svätý Tomáš a Princov ostrov",
    "El Salvador" : "Salvádor",
    "Sint Maarten (Dutch part)" : "Sint Maarten (holandská časť)",
    "Syrian Arab Republic" : "Sýria",
    "Eswatini" : "Svazijsko",
    "Turks and Caicos Islands" : "ostrovy Turks a Caicos",
    "Chad" : "Čad",
    "French Southern Territories" : "Francúzska južná a antarktická oblasť",
    "Togo" : "Togo",
    "Thailand" : "Thajsko",
    "Tajikistan" : "Tadžikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Východný Timor",
    "Turkmenistan" : "Turkménsko",
    "Tunisia" : "Tunisko",
    "Tonga" : "Tonga",
    "Turkey" : "Turecko",
    "Trinidad and Tobago" : "Trinidad a Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwan",
    "Tanzania, United Republic of" : "Tanzánia",
    "Ukraine" : "Ukrajina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Menšie odľahlé ostrovy Spojených štátov",
    "United States of America" : "Spojené štáty americké",
    "Uruguay" : "Uruguaj",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Vatikán",
    "Saint Vincent and the Grenadines" : "Svätý Vincent a Grenadíny",
    "Venezuela (Bolivarian Republic of)" : "Venezuela",
    "Virgin Islands (British)" : "Britské Panenské ostrovy",
    "Virgin Islands (U.S.)" : "Americké Panenské ostrovy",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis and Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Juhoafrická republika",
    "Zambia" : "Zambia",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
