OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "Nije moguće utvrditi status servisa.",
    "No database date available." : "Nije dostupan datum baze podataka.",
    "Database file location not available!" : "Nije dostupna lokacija datoteke baze podataka!",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "Korisnik „%s“ prijavljen putem nevažeće IP adrese „%s“.",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Korisnik „%s“ prijavljen putem IP adrese „%s“ iz blokirane države „%s“.",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Prijava korisnika „%s“ s IP adresom „%s“ nije mogla biti provjerena zbog poteškoća s lokacijskom uslugom.",
    "OK." : "U redu.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "POGREŠKA: čini se da servis nije instaliran na glavnom računalu Nextcloudovog poslužitelja ili mu nije moguće pristupiti s web-poslužitelja ili je pogrešno konfiguriran (je li dostupna baza podataka za IPv4 i IPv6?!). Možda je onemogućena uporaba php funkcije exec() u datoteci php.ini.",
    "Date of the database cannot be determined!" : "Nije moguće utvrditi datum baze podataka!",
    "local" : "lokalno",
    "default" : "zadano",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "POGREŠKA: čini se da servis nije ispravno instaliran ili nije dostupna baza podataka na %s.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Blokira korisnika ovisno o pretpostavljenoj državi iz koje potječe njegova IP adresa.",
    "Loading" : "Učitavanje",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Radi se o ulaznom sustavu geolokacijskih usluga koji omogućuje blokiranje (trenutno samo bilježenje!) pokušaja prijava iz određenih država. ",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Ne blokiraju se (niti bilježe) pokušaji prijave s IP adresa iz lokalne mreže.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Pogrešna konfiguracija Nextclouda (posebno u kontejneru) može dovesti do situacije u kojoj se čini kao da sva pristupanja dolaze s IP adrese iz lokalne mreže.",
    "If you are accessing from external network, this should be an external IP address: " : "Ako pristupate iz vanjske mreže, ovako treba izgledati vanjska IP adresa: ",
    "is local." : "je lokalna.",
    "is external." : "je vanjska.",
    "Determination of the country from IP address is only as good as the chosen service." : "Kvaliteta utvrđivanja države iz IP adrese ovisi o odabranoj usluzi.",
    "Service" : "Usluga",
    "Choose the service you want to use to determine the country from the IP Address:" : "Odaberite uslugu koju želite upotrebljavati za utvrđivanje države iz IP adrese:",
    "Status of the chosen service: " : "Status odabrane usluge: ",
    "Date of the database: " : "Datum baze podataka: ",
    "Configuration of the chosen service: " : "Konfiguracija odabranog servisa: ",
    "Location of the database: " : "Lokacija baze podataka: ",
    "Country Selection" : "Odabir države",
    "Choose the selection mode" : "Odaberite način biranja",
    "No country is blocked but the selected ones (blacklist)" : "Blokiraju se samo odabrane države (crna lista)",
    "All countries are blocked but the selected ones (whitelist)" : "Blokiraju se sve države osim odabranih (bijela lista)",
    "Select countries from list" : "Odaberite države s popisa",
    "The following countries were selected in the list above: " : "Odabrane su sljedeće države s gornjeg popisa: ",
    "Reaction" : "Reakcija",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Ako je otkriven pokušaj prijave iz odabranih država, zabilježit će se sljedeće informacije o tom pokušaju",
    "( be aware of data protection issues depending on your logging strategy)" : "(obratite pažnju na zaštitu podataka i kako se ona odnosi na odabranu strategiju bilježenja)",
    "with IP Address" : "s IP adresom",
    "with Country Code" : "sa šifrom države",
    "with username" : "s korisničkim imenom",
    "In addition, the login attempt can also be blocked" : "Pokušaj prijave također se može blokirati",
    "(in a future version)" : "(u budućoj inačici)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Aktivirajte blokiranje pokušaja prijave s IP adresa iz određenih država.",
    "Test" : "Ispitivanje",
    "Possibilities to test if the Geoblocker is working as expected:" : "Mogućnosti ispitivanja ako GeoBlocker radi kako je očekivano:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Simulira se sljedeći pokušaj prijave korisnika „%s” kao da dolazi sa sljedeće IP adrese:",
    "COUNTRY NOT FOUND" : "DRŽAVA NIJE PRONAĐENA",
    "Andorra" : "Andora",
    "United Arab Emirates" : "Ujedinjeni Arapski Emirati",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigva i Barbuda",
    "Anguilla" : "Angvila",
    "Albania" : "Albanija",
    "Armenia" : "Armenija",
    "Angola" : "Angola",
    "Antarctica" : "Antarktika",
    "Argentina" : "Argentina",
    "American Samoa" : "Američka Samoa",
    "Austria" : "Austrija",
    "Australia" : "Australija",
    "Aruba" : "Aruba",
    "Åland Islands" : "Ålandski otoci",
    "Azerbaijan" : "Azerbajdžan",
    "Bosnia and Herzegovina" : "Bosna i Hercegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladeš",
    "Belgium" : "Belgija",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bugarska",
    "Bahrain" : "Bahrein",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Sveti Bartolomej",
    "Bermuda" : "Bermuda",
    "Brunei Darussalam" : "Brunej Darussalam",
    "Bolivia (Plurinational State of)" : "Bolivija (Višenacionalna Država)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sveti Eustahije i Saba",
    "Brazil" : "Brazil",
    "Bahamas" : "Bahami",
    "Bhutan" : "Butan",
    "Bouvet Island" : "Otok Bouvet",
    "Botswana" : "Bocvana",
    "Belarus" : "Bjelorusija",
    "Belize" : "Belize",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Kokosov (Keeling) otok",
    "Congo, Democratic Republic of the" : "Kongo, Demokratska Republika",
    "Central African Republic" : "Srednjoafrička Republika",
    "Congo" : "Kongo",
    "Switzerland" : "Švicarska",
    "Côte d'Ivoire" : "Obala Bjelokosti",
    "Cook Islands" : "Cookovo Otočje",
    "Chile" : "Čile",
    "Cameroon" : "Kamerun",
    "China" : "Kina",
    "Colombia" : "Kolumbija",
    "Costa Rica" : "Kostarika",
    "Cuba" : "Kuba",
    "Cabo Verde" : "Zelenortska Republika",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Božićni Otok",
    "Cyprus" : "Cipar",
    "Czechia" : "Češka",
    "Germany" : "Njemačka",
    "Djibouti" : "Džibuti",
    "Denmark" : "Danska",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Dominikanska Republika",
    "Algeria" : "Alžir",
    "Ecuador" : "Ekvador",
    "Estonia" : "Estonija",
    "Egypt" : "Egipat",
    "Western Sahara" : "Zapadna Sahara",
    "Eritrea" : "Eritreja",
    "Spain" : "Španjolska",
    "Ethiopia" : "Etiopija",
    "Finland" : "Finska",
    "Fiji" : "Fidži",
    "Falkland Islands (Malvinas)" : "Falklandski otoci (Malvinas)",
    "Micronesia (Federated States of)" : "Mikronezija (Federativne Države)",
    "Faroe Islands" : "Farski otoci",
    "France" : "Francuska",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske",
    "Grenada" : "Grenada",
    "Georgia" : "Gruzija",
    "French Guiana" : "Francuska Gvajana",
    "Guernsey" : "Guernsey",
    "Ghana" : "Gana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grenland",
    "Gambia" : "Gambija",
    "Guinea" : "Gvineja",
    "Guadeloupe" : "Gvadalupa",
    "Equatorial Guinea" : "Ekvatorijalna Gvineja",
    "Greece" : "Grčka",
    "South Georgia and the South Sandwich Islands" : "Južna Georgija i otočje Južni Sandwich",
    "Guatemala" : "Gvatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Gvineja Bisau",
    "Guyana" : "Gvajana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Otok Heard i otočje McDonald",
    "Honduras" : "Honduras",
    "Croatia" : "Hrvatska",
    "Haiti" : "Haiti",
    "Hungary" : "Mađarska",
    "Indonesia" : "Indonezija",
    "Ireland" : "Irska",
    "Israel" : "Izrael",
    "Isle of Man" : "Otok Man",
    "India" : "Indija",
    "British Indian Ocean Territory" : "Britanski Indijskooceanski teritorij",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "Iran (Islamska Republika)",
    "Iceland" : "Island",
    "Italy" : "Italija",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamajka",
    "Jordan" : "Jordan",
    "Japan" : "Japan",
    "Kenya" : "Kenija",
    "Kyrgyzstan" : "Kirgistan",
    "Cambodia" : "Kambodža",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komori",
    "Saint Kitts and Nevis" : "Sveti Kristofor i Nevis",
    "Korea (Democratic People's Republic of)" : "Koreja (Demokratska Narodna Republika)",
    "Korea, Republic of" : "Koreja, Republika",
    "Kuwait" : "Kuvajt",
    "Cayman Islands" : "Kajmanski Otoci",
    "Kazakhstan" : "Kazahstan",
    "Lao People's Democratic Republic" : "Laoska Narodna Demokratska Republika",
    "Lebanon" : "Libanon",
    "Saint Lucia" : "Sveta Lucija",
    "Liechtenstein" : "Lihtenštajn",
    "Sri Lanka" : "Šri Lanka",
    "Liberia" : "Liberija",
    "Lesotho" : "Lesoto",
    "Lithuania" : "Litva",
    "Luxembourg" : "Luksemburg",
    "Latvia" : "Latvija",
    "Libya" : "Libija",
    "Morocco" : "Maroko",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Moldavija, Republika",
    "Montenegro" : "Crna Gora",
    "Saint Martin (French part)" : "Sveti Martin (francuski dio)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Maršalovi Otoci",
    "North Macedonia" : "Sjeverna Makedonija",
    "Mali" : "Mali",
    "Myanmar" : "Mjanmar",
    "Mongolia" : "Mongolija",
    "Macao" : "Makao",
    "Northern Mariana Islands" : "Sjevernomarijanski otoci",
    "Martinique" : "Martinik",
    "Mauritania" : "Mauritanija",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauricijus",
    "Maldives" : "Maldivi",
    "Malawi" : "Malavi",
    "Mexico" : "Meksiko",
    "Malaysia" : "Malezija",
    "Mozambique" : "Mozambik",
    "Namibia" : "Namibija",
    "New Caledonia" : "Nova Kaledonija",
    "Niger" : "Niger",
    "Norfolk Island" : "Otok Norfolk",
    "Nigeria" : "Nigerija",
    "Nicaragua" : "Nikaragva",
    "Netherlands" : "Nizozemska",
    "Norway" : "Norveška",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Novi Zeland",
    "Oman" : "Oman",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Francuska Polinezija",
    "Papua New Guinea" : "Papua Nova Gvineja",
    "Philippines" : "Filipini",
    "Pakistan" : "Pakistan",
    "Poland" : "Poljska",
    "Saint Pierre and Miquelon" : "Sveti Petar i Mikelon",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Portoriko",
    "Palestine, State of" : "Palestina, Država",
    "Portugal" : "Portugal",
    "Palau" : "Palau",
    "Paraguay" : "Paragvaj",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Rumunjska",
    "Serbia" : "Srbija",
    "Russian Federation" : "Ruska Federacija",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Saudijska Arabija",
    "Solomon Islands" : "Salomonski Otoci",
    "Seychelles" : "Sejšeli",
    "Sudan" : "Sudan",
    "Sweden" : "Švedska",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Sveta Helena, Ascension i Tristan da Cunha",
    "Slovenia" : "Slovenija",
    "Svalbard and Jan Mayen" : "Svalbard i Jan Mayen",
    "Slovakia" : "Slovačka",
    "Sierra Leone" : "Sijera Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalija",
    "Suriname" : "Surinam",
    "South Sudan" : "Južni Sudan",
    "Sao Tome and Principe" : "Sveti Toma i Princip",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sint Maarten (nizozemski dio)",
    "Syrian Arab Republic" : "Sirijska Arapska Republika",
    "Eswatini" : "Esvatini",
    "Turks and Caicos Islands" : "Otoci Turks i Caicos",
    "Chad" : "Čad",
    "French Southern Territories" : "Francuski južni teritoriji",
    "Togo" : "Togo",
    "Thailand" : "Tajland",
    "Tajikistan" : "Tadžikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Istočni Timor",
    "Turkmenistan" : "Turkmenistan",
    "Tunisia" : "Tunis",
    "Tonga" : "Tonga",
    "Turkey" : "Turska",
    "Trinidad and Tobago" : "Trinidad i Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Tajvan, Provincija NR Kine",
    "Tanzania, United Republic of" : "Ujedinjena Republika Tanzanija",
    "Ukraine" : "Ukrajina",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Mali udaljeni otoci SAD-a",
    "United States of America" : "Sjedinjene Američke Države",
    "Uruguay" : "Urugvaj",
    "Uzbekistan" : "Uzbekistan",
    "Holy See" : "Sveta Stolica",
    "Saint Vincent and the Grenadines" : "Sveti Vincent i Grenadini",
    "Venezuela (Bolivarian Republic of)" : "Venezuela (Bolivarijska Republika)",
    "Virgin Islands (British)" : "Djevičanski otoci (britanski)",
    "Virgin Islands (U.S.)" : "Djevičanski otoci (SAD)",
    "Viet Nam" : "Vijetnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis i Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Jemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Južna Afrika",
    "Zambia" : "Zambija",
    "Zimbabwe" : "Zimbabve"
},
"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;");
