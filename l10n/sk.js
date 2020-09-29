OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "Stav služby sa nedá zistiť.",
    "Update not possible. " : "Aktualizácia nie je možná. ",
    "Update possible. " : "Možná aktualizácia. ",
    "Update running. " : "Prebieha aktualizácia. ",
    "Update undefined. " : "Aktualizácia nie je definovaná. ",
    "No database date available." : "Dátum databázy nie je dostupný.",
    "Database file location not available!" : "Umiestnenie súboru s databázou nie je dostupné!",
    "Update Status not available!" : "Stav aktualizácie nie je k dispozícii!",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "Používateľ \"%s\" sa prihlásil z neplatnej IP adresy \"%s\".",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Používateľ \"%s\" sa prihlásil z IP adresy \"%s\" z blokovanej krajiny \"%s\".",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Prihlásenie používateľa „%s“ s IP adresou „%s“ sa nedalo skontrolovať kvôli problémom s lokalizačnou službou.",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "CHYBA: Zdá sa, že služba nie je nainštalovaná na hostiteľovi servera Nextcloud alebo nie je dostupná pre webový server, alebo je nesprávne nastavená (je k dispozícii databáza pre IPv4 a IPv6 ?!). Možno je použitie php funkcie exec () v php.ini zakázané.",
    "Date of the database cannot be determined!" : "Dátum databázy nie je možné určiť!",
    "local" : "miestna",
    "default" : "predvolené",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "CHYBA: Zdá sa, že služba nie je správne nainštalovaná alebo na %s nie je k dispozícii databáza.",
    "No entries in the database. Please run update." : "V databáze nie sú žiadne záznamy. Spustite aktualizáciu.",
    "ERROR:" : "CHYBA:",
    "PHP GMP Extension needs to be installed." : "Je potrebné nainštalovať rozšírenie PHP GMP.",
    "The database is not initialized. Please run update." : "Databáza nie je inicializovaná. Spustite aktualizáciu.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Databáza sa práve inicializuje. Počkajte, kým sa aktualizácia neskončí. Môže to trvať niekoľko minúť.",
    "The database is corrupted. Please run update again." : "Databáza je poškodená. Znova spustite aktualizáciu.",
    "Last error message:" : "Posledná chybová správa:",
    "The database is currently updating. Please wait until update is finished. This may take several minutes." : "Databáza sa práve aktualizuje. Počkajte, kým sa aktualizácia neskončí. Môže to trvať niekoľko minúť.",
    "Something is missing." : "Niečo chýba.",
    "No database available!" : "Databáza nie je k dispozícii!",
    "RIR seems to have changed the file format." : "Zdá sa, že RIR zmenil formát súboru.",
    "Exception caught during Update." : "Počas aktualizácie bola zachytená výnimka.",
    "Invalid file handle. Probably the internet connection got lost during the update." : "Neplatný popisovač súboru. Pravdepodobne došlo k strate internetového pripojenia počas aktualizácie.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "V php.ini  musí byť povolený \"allow_url_fopen\".",
    "Internet connection needs to be available." : "Musí byť k dispozícii pripojenie na internet.",
    "Current number of entries:" : "Aktuálny počet záznamov:",
    "Update in undefined state. Please complain to the developer." : "Aktualizácia je v nedefinovanom stave. Sťažujte sa vývojárovi.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Blokuje používateľov podľa krajiny odhadovanej podľa IP adresy.",
    "This is a front end to geo localization services, that allows blocking (currently only logging is possible!) of login attempts from specified countries. (Early Version)\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Reginal Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Toto je nadstavba nad službami určovania polohy, ktoré bude umožňovať blokovanie (v súčasnosti je možné len zaznamenávanie!) pokusov o prihlásenie z určitých krajín. (Skorá verzia)\n\nKrajiny možné pridávať zoznamu povolených alebo blokovaných.\n\nMomentálne dostupné lokalizačné služby sú:\n- Geoiplookup (miestny program na hostiteľovi)\n- MaxMind GeoLite2 (lokálna databáza prístupná pomocou rozhrania PHP API)\n- Údaje z regionálnych internetových registrov (Nextcloud SQL databáza zostavuná z údajov stiahnutých z FTP serverov RIRs)\n\nAk potrebujete pomoc s nastavením lokalizačných služieb, pozrite si úložisko GitHub (domovská stránka na pravej strane).",
    "Loading" : "Načítava sa...",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Toto je nadstavba nad geolokačnými službami, ktorá umožňuje blokovanie (teraz iba zaznamenávanie!) pokusov o prihlásenie z určených krajín.",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Pokusy o prihlásenie z IP adresy lokálnej siete nie sú blokované (alebo protokolované).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Chybné nastavenie Nextcloud (najmä v kontajneri) môže viesť k tomu, že sa zdá, že všetky prístupy pochádzajú z adresy IP v miestnej sieti.",
    "If you are accessing from external network, this should be an external IP address: " : "Ak pristupujete z externej siete, mala by to byť externá adresa IP:",
    "is local." : "je miestna.",
    "is external." : "je externá.",
    "Determination of the country from IP address is only as good as the chosen service." : "Určenie krajiny z adresy IP je také dobré ako zvolená služba.",
    "repository" : "úložisko",
    "Service" : "Služba",
    "Choose the service you want to use to determine the country from the IP Address:" : "Vyberte službu, ktorú chcete použiť na určenie krajiny z adresy IP:",
    "Status of the chosen service: " : "Stav vybranej služby:",
    "Date of the database: " : "Dátum databázy",
    "Configuration of the chosen service: " : "Nastavenie zvolenej služby:",
    "Location of the database: " : "Umiestnenie databázy:",
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
    "In addition, the login attempt can also be blocked" : "Okrem toho, môže byť zablokovaný pokus o prihlásenie",
    "(in a future version)" : "(v ďalšej verzii)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Aktivujte blokovanie pokusov o prihlásenie z IP adries určených krajín.",
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
