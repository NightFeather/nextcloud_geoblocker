OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "Aktualizacja nie jest możliwa. ",
    "Update possible. " : "Aktualizacja możliwa. ",
    "Update running. " : "Aktualizacja uruchomiona. ",
    "Update undefined. " : "Status niezdefiniowany ",
    "Status of the service cannot be determined." : "Nie można ustalić statusu usługi.",
    "No database date available." : "Brak dostępnej bazy danych.",
    "Database file location not available!" : "Lokalizacja pliku bazy danych jest niedostępna!",
    "Update Status not available!" : "Status aktualizacji niedostępny!",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "OK. Ta usługa zawsze zwraca \"%s\" dla „Nie znaleziono kraju”.",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "BŁĄD: Wygląda na to, że usługa nie została zainstalowana na hoście serwera Nextcloud, albo jest nieosiągalna dla serwera WWW lub jest źle skonfigurowana (czy baza danych dla IPv4 i IPv6 jest dostępna?!). Może też być, że użycie exec() w funkcji php jest wyłączone w php.ini.",
    "Date of the database cannot be determined!" : "Nie można ustalić bazy danych!",
    "local" : "lokalny",
    "default" : "domyślny",
    "ERROR: There is an unknown problem with the service." : "BŁĄD: Wystąpił nieznany problem z usługą.",
    "ERROR: Country cannot be found." : "BŁĄD: Nie można znaleźć kraju.",
    "ERROR: Database is not valid, does not have the correct access rights or is not placed at %s." : "BŁĄD: Baza danych jest nieprawidłowa, nie ma odpowiednich praw dostępu lub nie znajduje się w %s.",
    "ERROR: Invalid Argument." : "BŁĄD: Nieprawidłowy argument.",
    "ERROR: \"geoip2.phar\" does not seem to be place correctly or do not have the correct access rights." : "BŁĄD: \"geoip2.phar\" wydaje się być umieszczony niepoprawnie lub nie ma odpowiednich praw dostępu.",
    "No entries in the database. Please run update." : "Brak wpisów w bazie danych. Uruchom aktualizację.",
    "ERROR:" : "BŁĄD:",
    "OK" : "OK",
    "PHP GMP Extension needs to be installed." : "Musi być zainstalowany PHP GMP Extension.",
    "The database is not initialized. Please run update." : "Baza danych nie została zainicjowana. Uruchom aktualizację.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Baza danych jest obecnie inicjowana. Poczekaj na zakończenie aktualizacji. To może zająć kilka minut.",
    "The database is corrupted. Please run update again." : "Baza danych jest uszkodzona. Uruchom aktualizację ponownie.",
    "Last error message:" : "Ostatni komunikat o błędzie:",
    "The database is currently updating, but the service can be used during the update." : "Baza danych jest obecnie aktualizowana. Można korzystać z usługi podczas aktualizacji.",
    "Something is missing." : "Czegoś brakuje.",
    "No database available!" : "Brak dostępnej bazy danych!",
    "RIR seems to have changed the file format." : "Wygląda na to, że RIR zmienił format pliku.",
    "Exception caught during Update:" : "Wyjątek przechwycony podczas aktualizacji:",
    "Invalid file handle. Probably the internet connection got lost during the update." : "Niepoprawne uzyskanie pliku. Prawdopodobnie połączenie internetowe zostało utracone podczas aktualizacji.",
    "Database contains old version information. Reset the database using the command line tool." : "Baza danych zawiera informacje o starej wersji. Zresetuj bazę danych za pomocą narzędzia wiersza poleceń.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "\"allow_url_fopen\" musi być dozwolone w php.ini.",
    "Internet connection needs to be available." : "Połączenie internetowe musi być dostępne.",
    "Current number of entries:" : "Aktualna liczba wpisów:",
    "Update in undefined state. Please complain to the developer." : "Aktualizacja w stanie nieokreślonym. Zgłoś problem do programisty.",
    "GeoBlocker" : "Bloker Geograficzny",
    "Blocks user depending on the estimated country of thier IP address." : "Blokuje użytkownika w zależności od wykrytego kraju jego adresu IP.",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Regional Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Jest to zaplecze do usług geolokalizacji, które umożliwia blokowanie (beta), opóźnianie (beta) i rejestrowanie prób logowania z określonych krajów.\n\nKraje można określić za pomocą listy dozwolonych lub listy blokowanych.\n\nObecnie dostępne usługi lokalizacyjne to:\n- Geoiplookup (program lokalny na hoście)\n- MaxMind GeoLite2 (lokalna baza danych dostępna za pośrednictwem PHP API)\n- Dane z Regional Internet Registries (baza danych SQL Nextcloud zbudowana z danymi pobranymi z serwerów FTP RIR)\n\nAby uzyskać pomoc na temat konfiguracji usług lokalizacyjnych, zajrzyj do repozytorium Github (strona główna po prawej stronie).",
    "Loading" : "Wczytywanie",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "Jest to front-end do usług geolokalizacji, który umożliwia blokowanie (beta), opóźnianie (beta) i rejestrowanie prób logowania z określonych krajów.",
    "Login attempts from local network IP addresses are not reacted on at all." : "Próby logowania z adresów IP w sieci lokalnej nie są brane pod uwagę dla wykonania jakiejkolwiek reakcji.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Niewłaściwa konfiguracja Nextcloud (szczególnie w kontenerze) może prowadzić do tego, że cały dostęp może wydawać się, że pochodzi z adresu IP sieci lokalnej.",
    "If you are accessing from external network, this should be an external IP address: " : "Jeśli uzyskujesz dostęp z sieci zewnętrznej, powinien to być zewnętrzny adres IP: ",
    "is local." : "jest lokalny.",
    "is external." : "jest zewnętrzny.",
    "Determination of the country from IP address is only as good as the chosen service." : "Określenie kraju na podstawie adresu IP jest tak dobre, jak wybrana usługa.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Aby uzyskać pomoc na temat konfiguracji usług lokalizacyjnych, zajrzyj do pliku Readme w",
    "repository" : "repozytorium",
    "Service" : "Usługa",
    "Choose the service you want to use to determine the country from the IP Address:" : "Wybierz usługę, której chcesz użyć, aby określić kraj na podstawie adresu IP:",
    "Status of the chosen service: " : "Status wybranej usługi:",
    "Date of the database: " : "Dane z bazy danych: ",
    "Configuration of the chosen service: " : "Konfiguracja wybranej usługi:",
    "Location of the database: " : "Lokalizacja bazy danych:",
    "Update Database" : "Aktualizacja bazy danych",
    "Country Selection" : "Wybór kraju",
    "Choose the selection mode" : "Wybierz tryb wyboru",
    "No country is blocked but the selected ones (blocklist)" : "Żaden kraj nie będzie zablokowany, oprócz wybranych (lista zablokowanych)",
    "All countries are blocked but the selected ones (allowlist)" : "Wszystkie kraje będą zablokowane, oprócz wybranych (lista dozwolonych)",
    "Select countries from list" : "Wybierz kraje z listy",
    "The following countries were selected in the list above: " : "Następujące kraje zostały wybrane z powyższej listy:",
    "Reaction" : "Reakcja",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "W przypadku wykrycia próby logowania z wybranych krajów, zostanie to zarejestrowane z użyciem następujących informacji",
    "( be aware of data protection issues depending on your logging strategy)" : "(należy pamiętać o problemach z ochroną danych w zależności od metody logowania)",
    "with IP Address" : "z adresem IP",
    "with Country Code" : "z kodem kraju",
    "with username" : "z nazwą użytkownika",
    "In addition, the login attempt can also be delayed and blocked." : "Ponadto próba logowania może być również opóźniona i zablokowana.",
    "(beta version)" : "(wersja beta)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Aktywuj opóźnianie prób logowania z adresów IP określonych krajów.",
    "(Delaying is enforced for 30s before password check.)" : "(Opóźnienie jest wymuszane przez 30 sekund przed sprawdzeniem hasła.)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Aktywuj blokowanie prób logowania z adresów IP określonych krajów.",
    "(Blocking is enforced after password check!)" : "(Blokowanie jest wymuszane po sprawdzeniu hasła!)",
    "(Blocking is enforced before password check by throwing an \"login denied\" exception!)" : "(Blokowanie jest wymuszane przed sprawdzeniem hasła przez zgłoszenie wyjątku \"odmowa logowania\"!)",
    "Test" : "Test",
    "Possibilities to test if the Geoblocker is working as expected:" : "Możliwość sprawdzenia, czy Geoblocker działa zgodnie z oczekiwaniami:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Następna próba logowania użytkownika \"%s\" zostanie zasymulowana, aby pochodziło z następującego adresu IP:",
    "COUNTRY NOT FOUND" : "NIE ZNALEZIONO KRAJU",
    "Andorra" : "Andora",
    "United Arab Emirates" : "Zjednoczone Emiraty Arabskie",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigua i Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Albania",
    "Armenia" : "Armenia",
    "Angola" : "Angola",
    "Antarctica" : "Antarktyda",
    "Argentina" : "Argentyna",
    "American Samoa" : "Samoa Amerykańskie",
    "Austria" : "Austria",
    "Australia" : "Australia",
    "Aruba" : "Aruba",
    "Åland Islands" : "Wyspy Alandzkie",
    "Azerbaijan" : "Azerbejdżan",
    "Bosnia and Herzegovina" : "Bośnia i Hercegowina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesz",
    "Belgium" : "Belgia",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bułgaria",
    "Bahrain" : "Bahrajn",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Saint Barthélemy",
    "Bermuda" : "Bermudy",
    "Brunei Darussalam" : "Brunei Darussalam",
    "Bolivia (Plurinational State of)" : "Boliwia (Wielonarodowe Państwo)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius i Saba (Holandia Karaibska)",
    "Brazil" : "Brazylia",
    "Bahamas" : "Bahamy",
    "Bhutan" : "Bhutan",
    "Bouvet Island" : "Wyspa Bouvet",
    "Botswana" : "Botswana",
    "Belarus" : "Białoruś",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Wyspy Kokosowe (Keelinga)",
    "Congo, Democratic Republic of the" : "Kongo, Demokratyczna Republika",
    "Central African Republic" : "Republika Środkowoafrykańska",
    "Congo" : "Kongo",
    "Switzerland" : "Szwajcaria",
    "Côte d'Ivoire" : "Wybrzeże Kości Słoniowej",
    "Cook Islands" : "Wyspy Cooka",
    "Chile" : "Chile",
    "Cameroon" : "Kamerun",
    "China" : "Chiny",
    "Colombia" : "Kolumbia",
    "Costa Rica" : "Kostaryka",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Cabo Verde",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Wyspa Bożego Narodzenia",
    "Cyprus" : "Cypr",
    "Czechia" : "Czechy",
    "Germany" : "Niemcy",
    "Djibouti" : "Dżibuti",
    "Denmark" : "Dania",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Republika Dominikany",
    "Algeria" : "Algieria",
    "Ecuador" : "Ekwador",
    "Estonia" : "Estonia",
    "Egypt" : "Egipt",
    "Western Sahara" : "Sahara Zachodnia",
    "Eritrea" : "Erytrea",
    "Spain" : "Hiszpania",
    "Ethiopia" : "Etiopia",
    "Finland" : "Finlandia",
    "Fiji" : "Fidżi ",
    "Falkland Islands (Malvinas)" : "Falklandy (Malwiny)",
    "Micronesia (Federated States of)" : "Mikronezja (Federalne Stany)",
    "Faroe Islands" : "Wyspy Owcze",
    "France" : "Francja",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej",
    "Grenada" : "Grenada",
    "Georgia" : "Gruzja",
    "French Guiana" : "Gujana Francuska",
    "Guernsey" : "Guernsey",
    "Ghana" : "Ghana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grenlandia",
    "Gambia" : "Gambia",
    "Guinea" : "Gwinea",
    "Guadeloupe" : "Gwadelupa",
    "Equatorial Guinea" : "Gwinea Równikowa",
    "Greece" : "Grecja",
    "South Georgia and the South Sandwich Islands" : "Georgia Południowa i Sandwich Południowy",
    "Guatemala" : "Gwatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Gwinea Bissau",
    "Guyana" : "Gujana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Wyspy Heard i McDonalda",
    "Honduras" : "Honduras",
    "Croatia" : "Chorwacja",
    "Haiti" : "Haiti",
    "Hungary" : "Węgry",
    "Indonesia" : "Indonezja",
    "Ireland" : "Irlandia",
    "Israel" : "Izrael",
    "Isle of Man" : "Wyspa Man",
    "India" : "Indie",
    "British Indian Ocean Territory" : "Brytyjskie Terytorium Oceanu Indyjskiego",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "Iran (Islamska Republika)",
    "Iceland" : "Islandia",
    "Italy" : "Włochy",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamajka",
    "Jordan" : "Jordania",
    "Japan" : "Japonia",
    "Kenya" : "Kenia",
    "Kyrgyzstan" : "Kirgistan",
    "Cambodia" : "Kambodża",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komory",
    "Saint Kitts and Nevis" : "Saint Kitts i Nevis",
    "Korea (Democratic People's Republic of)" : "Korea (Demokratyczna Republika Ludowa)",
    "Korea, Republic of" : "Korea, Republika",
    "Kuwait" : "Kuwejt",
    "Cayman Islands" : "Kajmany",
    "Kazakhstan" : "Kazachstan",
    "Lao People's Democratic Republic" : "Laotańska Republika Ludowo-Demokratyczna",
    "Lebanon" : "Liban",
    "Saint Lucia" : "Saint Lucia",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Liberia",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Litwa",
    "Luxembourg" : "Luksemburg",
    "Latvia" : "Łotwa",
    "Libya" : "Libia",
    "Morocco" : "Maroko",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Mołdawia, Republika",
    "Montenegro" : "Czarnogóra",
    "Saint Martin (French part)" : "Saint Martin (część francuska)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Wyspy Marshalla",
    "North Macedonia" : "Macedonia Północna",
    "Mali" : "Mali",
    "Myanmar" : "Mjanma",
    "Mongolia" : "Mongolia",
    "Macao" : "Makau",
    "Northern Mariana Islands" : "Mariany Północne",
    "Martinique" : "Martynika",
    "Mauritania" : "Mauretania",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauritius",
    "Maldives" : "Malediwy",
    "Malawi" : "Malawi",
    "Mexico" : "Meksyk",
    "Malaysia" : "Malezja",
    "Mozambique" : "Mozambik",
    "Namibia" : "Namibia",
    "New Caledonia" : "Nowa Kaledonia",
    "Niger" : "Niger",
    "Norfolk Island" : "Wyspa Norfolk",
    "Nigeria" : "Nigeria",
    "Nicaragua" : "Nikaragua",
    "Netherlands" : "Holandia",
    "Norway" : "Norwegia",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nowa Zelandia",
    "Oman" : "Oman",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Polinezja Francuska",
    "Papua New Guinea" : "Papua Nowa Gwinea",
    "Philippines" : "Filipiny",
    "Pakistan" : "Pakistan",
    "Poland" : "Polska",
    "Saint Pierre and Miquelon" : "Saint Pierre i Miquelon",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Portoryko",
    "Palestine, State of" : "Palestyna, Stan",
    "Portugal" : "Portugalia",
    "Palau" : "Palau",
    "Paraguay" : "Paragwaj",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Rumunia",
    "Serbia" : "Serbia",
    "Russian Federation" : "Rosja",
    "Rwanda" : "Rwanda",
    "Saudi Arabia" : "Arabia Saudyjska",
    "Solomon Islands" : "Wyspy Solomona",
    "Seychelles" : "Seszele",
    "Sudan" : "Sudan",
    "Sweden" : "Szwecja",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha",
    "Slovenia" : "Słowenia",
    "Svalbard and Jan Mayen" : "Svalbard i Jan Mayen",
    "Slovakia" : "Słowacja",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalia",
    "Suriname" : "Surinam",
    "South Sudan" : "Sudan Południowy",
    "Sao Tome and Principe" : "Wyspy Świętego Tomasza i Książęca",
    "El Salvador" : "Salwador",
    "Sint Maarten (Dutch part)" : "Sint Maarten (część holenderska)",
    "Syrian Arab Republic" : "Syria",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Wyspy Turks i Caicos",
    "Chad" : "Czad",
    "French Southern Territories" : "Francuskie Terytoria Południowe",
    "Togo" : "Togo",
    "Thailand" : "Tajlandia",
    "Tajikistan" : "Tadżykistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor Wschodni",
    "Turkmenistan" : "Turkmenia",
    "Tunisia" : "Tunezja",
    "Tonga" : "Tonga",
    "Turkey" : "Turcja",
    "Trinidad and Tobago" : "Trynidad i Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Tajwan",
    "Tanzania, United Republic of" : "Tanzania, Zjednoczona Republika",
    "Ukraine" : "Ukraina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Dalekie Wyspy Mniejsze Stanów Zjednoczonych",
    "United States of America" : "Stany Zjednoczone",
    "Uruguay" : "Urugwaj",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Stolica Apostolska",
    "Saint Vincent and the Grenadines" : "Saint Vincent i Grenadyny",
    "Venezuela (Bolivarian Republic of)" : "Wenezuela",
    "Virgin Islands (British)" : "Wyspy Dziewicze (Brytyjskie)",
    "Virgin Islands (U.S.)" : "Wyspy Dziewicze (Stany Zjednoczone)",
    "Viet Nam" : "Wietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis i Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Majotta",
    "South Africa" : "Republika Południowej Afryki",
    "Zambia" : "Zambia",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
