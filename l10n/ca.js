OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "L'estat del servei no es pot determinar.",
    "Update not possible. " : "Actualització no és possible. ",
    "Update possible. " : "Actualització possible. ",
    "Update running. " : "Actualitza l’actualització. ",
    "Update undefined. " : "Actualització sense definir. ",
    "No database date available." : "No hi ha data de base de dades disponible.",
    "Database file location not available!" : "La ubicació del fitxer de la base de dades no està disponible!",
    "Update Status not available!" : "Actualitzar l'estat no disponible!",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "L'usuari \"%s\" ha iniciat la sessió amb una adreça IP no vàlida \"%s\".",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "L'usuari \"%s\" ha entrat amb l'adreça IP \"%s\" del país bloquejat \"%s\".",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "No s'ha pogut comprovar l'inici de sessió de l'usuari \"%s\" amb l'adreça IP \"%s\" a causa de problemes amb el servei d'ubicació.",
    "OK." : "D’acord.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "ERROR: Sembla que el servei no està instal·lat a l'amfitrió del servidor Nextcloud o no es pot arribar al servidor web o està configurat erròniament (és la base de dades per a IPv4 i IPv6 disponible?!). Potser l'ús de la funció php exec() està desactivat en el php.ini.",
    "Date of the database cannot be determined!" : "La data de la base de dades no es pot determinar!",
    "local" : "local",
    "default" : "predeterminat",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "ERROR: El servei no sembla estar instal·lat correctament o la base de dades no està disponible a %s.",
    "ERROR:" : "ERROR:",
    "No entries in the database. Please run update." : "No hi ha entrades a la base de dades. Executeu l'actualització.",
    "PHP GMP Extension needs to be installed." : "S'ha d'instal·lar l'extensió PHP GMP.",
    "The database is not initialized. Please run update." : "La base de dades no està inicialitzada. Executeu l'actualització.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "La base de dades està inicialitzant actualment. Espereu fins que finalitzi l'actualització. Això pot trigar uns minuts.",
    "The database is corrupted. Please run update again." : "La base de dades està malmesa. Torneu a executar l'actualització.",
    "Last error message:" : "Últim missatge d'error:",
    "The database is currently updating. Please wait until update is finished. This may take several minutes." : "La base de dades s'està actualitzant actualment. Espereu fins que finalitzi l'actualització. Això pot trigar uns minuts.",
    "Something is missing." : "Falta alguna cosa.",
    "No database available!" : "No hi ha base de dades disponible!",
    "RIR seems to have changed the file format." : "RIR sembla haver canviat el format de fitxer.",
    "Exception caught during Update." : "Excepció capturada durant l'actualització.",
    "Invalid file handle. Probably the internet connection got lost during the update." : "L'identificador de fitxer no és vàlid. Probablement la connexió d'internet es va perdre durant l'actualització.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "\"allow_url_fopen\" s'ha de permetre en php.ini.",
    "Internet connection needs to be available." : "La connexió a Internet ha d'estar disponible.",
    "Current number of entries:" : "Nombre actual d'entrades:",
    "Update in undefined state. Please complain to the developer." : "Actualització en estat no definit. Si us plau, queixi's al desenvolupador.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Bloqueja l'usuari en funció del país estimat de la seva adreça IP.",
    "This is a front end to geo localization services, that allows blocking (currently only logging is possible!) of login attempts from specified countries. (Early Version)\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Reginal Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Aquest és un portal als serveis de localització geogràfica, que permet bloquejar (actualment només el registre és possible!) els intents d'inici de sessió dels països especificats. (Versió inicial)\n\nEls països es poden especificar mitjançant la llista de permeses o la llista de bloqueig.\n\nActualment els serveis de localització disponibles són:\n- Geoiplookup (programa local al servidor)\n- MaxMind GeoLite2 (base de dades local a la qual s'accedeix mitjançant API PHP)\n- Les dades dels Registres d'Internet Reginal (base de dades SQL Nextcloud s'acumulen amb dades descarregades dels servidors FTP de RIRs)\n\nPer obtenir ajuda sobre com configurar els serveis de localització, feu un cop d'ull al repositori GitHub (pàgina d'inici al costat dret).",
    "Loading" : "Carregant",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Aquest és un portal als serveis de localització geogràfica, que permet bloquejar (actualment només registrant!) intents d'inici de sessió de països especificats. ",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Els intents d'inici de sessió de les adreces IP de la xarxa local no estan bloquejats (o registrats).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "La configuració errònia de Nextcloud (especialment en contenidor) pot conduir a que tots els accessos semblin venir d'una adreça IP de xarxa local.",
    "If you are accessing from external network, this should be an external IP address: " : "Si esteu accedint des de la xarxa externa, aquesta ha de ser una adreça IP externa: ",
    "is local." : "és local.",
    "is external." : "és extern.",
    "Determination of the country from IP address is only as good as the chosen service." : "La determinació del país des de l'adreça IP és tan bona com el servei escollit.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Per obtenir ajuda sobre com configurar els serveis de localització, feu una ullada al Readme a la",
    "repository" : "dipòsit",
    "Service" : "Servei",
    "Choose the service you want to use to determine the country from the IP Address:" : "Trieu el servei que voleu utilitzar per determinar el país a partir de l'adreça IP:",
    "Status of the chosen service: " : "Estat del servei escollit: ",
    "Date of the database: " : "Data de la base de dades: ",
    "Configuration of the chosen service: " : "Configuració del servei escollit: ",
    "Location of the database: " : "Ubicació de la base de dades: ",
    "Update Database" : "Actualitza la base de dades",
    "Country Selection" : "Selecció de països",
    "Choose the selection mode" : "Tria el mode de selecció",
    "No country is blocked but the selected ones (blocklist)" : "No hi ha cap país bloquejat excepte els seleccionats (llista de bloqueig)",
    "All countries are blocked but the selected ones (allowlist)" : "Tots els països estan bloquejats excepte els seleccionats (llista de permesos)",
    "Select countries from list" : "Seleccioneu països de la llista",
    "The following countries were selected in the list above: " : "Els països següents han estat seleccionats a la llista anterior: ",
    "Reaction" : "Reacció",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Si es detecta un intent d'inici de sessió dels països escollits, l'intent es registra amb la informació següent",
    "( be aware of data protection issues depending on your logging strategy)" : "( ser conscients dels problemes de protecció de dades en funció de la seva estratègia de registre)",
    "with IP Address" : "amb adreça IP",
    "with Country Code" : "amb Codi de país",
    "with username" : "amb usuari",
    "In addition, the login attempt can also be blocked" : "A més, l'intent d'inici de sessió també es pot bloquejar",
    "(in a future version)" : "(en una versió futura)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Activeu el bloqueig de l'intent d'inici de sessió des d'adreces IP dels països especificats.",
    "Test" : "Prova",
    "Possibilities to test if the Geoblocker is working as expected:" : "Possibilitats de provar si el Geobloqueig funciona com s'esperava:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "L'intent d'inici de sessió següent de l'usuari \"%s\" es simularà con si vinguès de la següent adreça IP:",
    "COUNTRY NOT FOUND" : "PAÍS NO TROBAT",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Emirats Àrabs Units",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigua i Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albània",
    "Armenia" : "Armènia",
    "Angola" : "Angola",
    "Antarctica" : "Antàrtida",
    "Argentina" : "Argentina",
    "American Samoa" : "Samoa Nord-americana",
    "Austria" : "Àustria",
    "Australia" : "Austràlia",
    "Aruba" : "Aruba",
    "Åland Islands" : "Illes Åland",
    "Azerbaijan" : "Azerbaitjan",
    "Bosnia and Herzegovina" : "Bòsnia i Hercegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesh",
    "Belgium" : "Bèlgica",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgària",
    "Bahrain" : "Bahrain",
    "Burundi" : "Burundi",
    "Benin" : "Benín",
    "Saint Barthélemy" : "Saint Barthélemy",
    "Bermuda" : "Bermudes",
    "Brunei Darussalam" : "Brunei",
    "Bolivia (Plurinational State of)" : "Bolívia (estat plurinacional de)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius i Saba",
    "Brazil" : "Brasil",
    "Bahamas" : "Bahames",
    "Bhutan" : "Bhutan",
    "Bouvet Island" : "Illa Bouvet",
    "Botswana" : "Botswana",
    "Belarus" : "Bielorússia",
    "Belize" : "Belize",
    "Canada" : "Canadà",
    "Cocos (Keeling) Islands" : "Illes Cocos (Keeling)",
    "Congo, Democratic Republic of the" : "Congo, La República Democràtica del",
    "Central African Republic" : "República Centreafricana",
    "Congo" : "Congo",
    "Switzerland" : "Suïssa",
    "Côte d'Ivoire" : "Costa d'Ivori",
    "Cook Islands" : "Illes Cook",
    "Chile" : "Xile",
    "Cameroon" : "Camerun",
    "China" : "Xina",
    "Colombia" : "Colòmbia",
    "Costa Rica" : "Costa Rica",
    "Cuba" : "Cuba",
    "Cabo Verde" : "Cabo Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Illa Christmas",
    "Cyprus" : "Xipre",
    "Czechia" : "Txèquia",
    "Germany" : "Alemanya",
    "Djibouti" : "Djibouti",
    "Denmark" : "Dinamarca",
    "Dominica" : "Dominica",
    "Dominican Republic" : "República Dominicana",
    "Algeria" : "Algèria",
    "Ecuador" : "Equador",
    "Estonia" : "Estònia",
    "Egypt" : "Egipte",
    "Western Sahara" : "Sàhara Occidental",
    "Eritrea" : "Eritrea",
    "Spain" : "Espanya",
    "Ethiopia" : "Etiòpia",
    "Finland" : "Finlàndia",
    "Fiji" : "Fiji",
    "Falkland Islands (Malvinas)" : "Illes Malvines (Falkland)",
    "Micronesia (Federated States of)" : "Micronèsia (Estats Federats de)",
    "Faroe Islands" : "Illes Fèroe",
    "France" : "França",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Regne Unit de Gran Bretanya i Irlanda del nord",
    "Grenada" : "Grenada",
    "Georgia" : "Geòrgia",
    "French Guiana" : "Guaiana Francesa",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Groenlàndia",
    "Gambia" : "Gàmbia",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadalupe",
    "Equatorial Guinea" : "Guinea Equatorial",
    "Greece" : "Grècia",
    "South Georgia and the South Sandwich Islands" : "Illes Geòrgia del Sud i Sandwich del Sud",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Illes Heard i McDonald",
    "Honduras" : "Hondures",
    "Croatia" : "Croàcia",
    "Haiti" : "Haití",
    "Hungary" : "Hongria",
    "Indonesia" : "Indonèsia",
    "Ireland" : "Irlanda",
    "Israel" : "Israel",
    "Isle of Man" : "Illa de Man",
    "India" : "Índia",
    "British Indian Ocean Territory" : "Territori Britànic de l'Oceà Índic",
    "Iraq" : "Iraq",
    "Iran (Islamic Republic of)" : "Iran (República Islàmica de)",
    "Iceland" : "Islàndia",
    "Italy" : "Itàlia",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamaica",
    "Jordan" : "Jordània",
    "Japan" : "Japó",
    "Kenya" : "Kenya",
    "Kyrgyzstan" : "Kirguizistan",
    "Cambodia" : "Cambodja",
    "Kiribati" : "Kiribati",
    "Comoros" : "Comores",
    "Saint Kitts and Nevis" : "Saint Kitts i Nevis",
    "Korea (Democratic People's Republic of)" : "Corea (República Democràtica Popular de)",
    "Korea, Republic of" : "Corea, República de",
    "Kuwait" : "Kuwait",
    "Cayman Islands" : "Illes Caiman",
    "Kazakhstan" : "Kazakhstan",
    "Lao People's Democratic Republic" : "República Democràtica Popular Lao",
    "Lebanon" : "Líban",
    "Saint Lucia" : "Saint Lucia",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Libèria",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Lituània",
    "Luxembourg" : "Luxemburg",
    "Latvia" : "Letònia",
    "Libya" : "Líbia",
    "Morocco" : "Marroc",
    "Monaco" : "Mònaco",
    "Moldova, Republic of" : "Moldàvia, República de",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "Sant Martí (part francesa)",
    "Madagascar" : "Madagascar",
    "Marshall Islands" : "Illes Marshall",
    "North Macedonia" : "Macedònia del Nord",
    "Mali" : "Mali",
    "Myanmar" : "Birmània",
    "Mongolia" : "Mongòlia",
    "Macao" : "Macau",
    "Northern Mariana Islands" : "Illes Marianes del Nord",
    "Martinique" : "Martinica",
    "Mauritania" : "Mauritània",
    "Montserrat" : "Illa de Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Maurici",
    "Maldives" : "Maldives",
    "Malawi" : "Malawi",
    "Mexico" : "Mèxic",
    "Malaysia" : "Malàisia",
    "Mozambique" : "Moçambic",
    "Namibia" : "Namíbia",
    "New Caledonia" : "Nova Caledònia",
    "Niger" : "Níger",
    "Norfolk Island" : "Illa Norfolk",
    "Nigeria" : "Nigèria",
    "Nicaragua" : "Nicaragua",
    "Netherlands" : "Països Baixos",
    "Norway" : "Noruega",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nova Zelanda",
    "Oman" : "Oman",
    "Panama" : "Panamà",
    "Peru" : "Perú",
    "French Polynesia" : "Polinèsia Francesa",
    "Papua New Guinea" : "Papua Nova Guinea",
    "Philippines" : "Filipines",
    "Pakistan" : "Pakistan",
    "Poland" : "Polònia",
    "Saint Pierre and Miquelon" : "Sant Pere i Miquelon",
    "Pitcairn" : "Illes Pitcairn",
    "Puerto Rico" : "Puerto Rico",
    "Palestine, State of" : "Palestina, Estat de",
    "Portugal" : "Portugal",
    "Palau" : "Palau",
    "Paraguay" : "Paraguai",
    "Qatar" : "Qatar",
    "Réunion" : "Reunió",
    "Romania" : "Romania",
    "Serbia" : "Sèrbia",
    "Russian Federation" : "Rússia",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Aràbia Saudita",
    "Solomon Islands" : "Illes Salomó",
    "Seychelles" : "Seychelles",
    "Sudan" : "Sudan",
    "Sweden" : "Suècia",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Santa Helena, Ascensió i Tristan da Cunha",
    "Slovenia" : "Eslovènia",
    "Svalbard and Jan Mayen" : "Svalbard i Jan Mayen",
    "Slovakia" : "Eslovàquia",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somàlia",
    "Suriname" : "Surinam",
    "South Sudan" : "Sudan del Sud",
    "Sao Tome and Principe" : "São Tomé i Príncipe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sint Maarten (part holandesa)",
    "Syrian Arab Republic" : "República Àrab Siriana",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Illes Turks i Caicos",
    "Chad" : "Txad",
    "French Southern Territories" : "Territoris Francesos del Sud",
    "Togo" : "Togo",
    "Thailand" : "Tailàndia",
    "Tajikistan" : "Tadjikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor Oriental",
    "Turkmenistan" : "Turkmenistan",
    "Tunisia" : "Tunísia",
    "Tonga" : "Tonga",
    "Turkey" : "Turquia",
    "Trinidad and Tobago" : "Trinitat i Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwan",
    "Tanzania, United Republic of" : "Tanzània, República Unida de",
    "Ukraine" : "Ucraïna",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Illes Perifèriques Menors dels EUA",
    "United States of America" : "Estats Units d'Amèrica",
    "Uruguay" : "Uruguai",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Santa Seu",
    "Saint Vincent and the Grenadines" : "Saint Vincent i les Grenadines",
    "Venezuela (Bolivarian Republic of)" : "Veneçuela (República Bolivariana de)",
    "Virgin Islands (British)" : "Illes Verges (Britànica)",
    "Virgin Islands (U.S.)" : "Illes Verges (EUA)",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis i Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Iemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Sud-àfrica",
    "Zambia" : "Zàmbia",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=2; plural=(n != 1);");
