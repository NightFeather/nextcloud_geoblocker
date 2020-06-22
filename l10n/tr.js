OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "Hizmet durumu belirlenemedi.",
    "Update not possible. " : "Güncellenemez.",
    "Update possible. " : "Güncellenebilir.",
    "Update running. " : "Güncelleniyor.",
    "Update undefined. " : "Güncelleme belirtilmemiş.",
    "No database date available." : "Herhangi bir veritabanı tarihi yok.",
    "Database file location not available!" : "Veritabanı dosyasının konumu bulunamadı!",
    "Update Status not available!" : "Güncelleme durumu bilinmiyor!",
    "The user \"%s\" logged in with an invalid IP address \"%s\"." : "\"%s\" kullanıcısı \"%s\" geçersiz IP adresinden oturum açtı.",
    "The user \"%s\" logged in with IP address \"%s\" from blocked country \"%s\"." : "Oturum açmış \"%s\" kullanıcısı, (\"%s\" IP adresinden) engellenmiş \"%s\" ülkesinden geliyor.",
    "The login of user \"%s\" with IP address \"%s\" could not be checked due to problems with location service." : "Oturum açmış \"%s\" kullanıcısı, (\"%s\" IP adresinden) konum hizmetindeki sorunlar nedeniyle denetlenemedi.",
    "OK." : "Tamam.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "HATA: Hizmet Nextcloud kurulumununun bulunduğu sunucu üzerine kurulmamış gibi görünüyor ya da hatalı olarak yapılandırılmış (IPv4 ve IPv6 için veritabanı var mı?). PHP exec() işlevinin yürütülmesi php.ini içinde devre dışı bırakılmış olabilir.",
    "Date of the database cannot be determined!" : "Veritabanının tarihi belirlenemedi!",
    "local" : "yerel",
    "default" : "varsayılan",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "HATA: Hizmet doğru kurulmamış ya da %s üzerindeki veritabanına erişilemiyor  gibi görünüyor.",
    "ERROR:" : "HATA:",
    "No entries in the database. Please run update." : "Veritabanında herhangi bir kayıt bulunamadı. Lütfen güncelleyin.",
    "PHP GMP Extension needs to be installed." : "PHP GMP eklentisinin kurulması gerekli.",
    "The database is not initialized. Please run update." : "Veritabanı hazırlanamadı. Lütfen güncelleyin.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Veritabanı hazırlanıyor. Lütfen güncelleme tamamlanana kadar bekleyin. Bu işlem birkaç dakika sürebilir.",
    "The database is corrupted. Please run update again." : "Veritabanı bozulmuş. Lütfen yeniden güncelleyin.",
    "Last error message:" : "Son hata iletisi:",
    "The database is currently updating. Please wait until update is finished. This may take several minutes." : "Veritabanı güncelleniyor. Lütfen güncelleme tamamlanana kadar bekleyin. Bu işlem birkaç dakika sürebilir.",
    "Something is missing." : "Bir şey eksik.",
    "No database available!" : "Kullanılabilecek bir veritabanı bulunamadı!",
    "RIR seems to have changed the file format." : "RIR dosya biçimini değiştirmiş gibi görünüyor.",
    "Exception caught during Update." : "Güncelleme sırasında bir sorun çıktı.",
    "Invalid file handle. Probably the internet connection got lost during the update." : "Dosya işleyici geçersiz. Büyük olasılıkla güncelleme sırasında İnternet bağlantısı kesildi.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "php.ini dosyasında \"allow_url_fopen\" izninin verilmesi gerekiyor.",
    "Internet connection needs to be available." : "İnternet bağlantısı olmalıdır.",
    "Current number of entries:" : "Geçerli kayıt sayısı:",
    "Update in undefined state. Please complain to the developer." : "Güncellemenin durumu belirsiz. Lütfen bu sorunu geliştiriciye iletin.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Kullanıcıları IP adresinden öngörülen ülkeye göre engeller.",
    "This is a front end to geo localization services, that allows blocking (currently only logging is possible!) of login attempts from specified countries. (Early Version)\n\nCountries can be specified using whitelisting or blacklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Reginal Internet Registries (Nextcloud SQL Database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set the services up please have a look at the Github repository (homepage on the right side)." : "Coğrafi konum hizmetlerinin ön yüzü. Belirli ülkelerden gelen oturum açma isteklerini engeller (şu anda yalnız günlük kaydı tutulabilen deneme sürümü)\n\nBeyaz ve kara listeler kullanılarak ülkeler belirtilebilir.\n\nŞu anda kullanılabilen konum hizmetleri:\n- Geoiplookup (sunucu üzerinde yerel uygulama)\n- MaxMind GeoLite2 (PHP API ile erişilen yerel veritabanı)\n- Reginal Internet Registries verileri (RIR FTP sunucularından indirilen veriler ile oluşturulan Nextcloud SQL veritabanı)\n\nHizmetlerin kurulumu ile ilgili yardım almak için GitHub deposuna bakabilirsiniz (sağ taraftaki ana sayfa).",
    "Loading" : "Yükleniyor",
    "This is a front end to geo localization services, that allows blocking (currently only logging!) of login attempts from specified countries. " : "Bu arayüz belirtilen ülkelerdeki kullanıcıların oturum açma girişimlerini engelleyen bir coğrafi konum hizmetidir.",
    "Login attempts from local network IP addresses are not blocked (or logged)." : "Yerel ağdan yapılan oturum açma girişimleri engellenmez (ya da günlüğü tutulmaz).",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Hatalı Nextcloud yapılandırması (özellikle kapsayıcıda) tüm erişimlerin bir yerel ağ IP adresinden geliyor gibi görünmesine yol açabilir.",
    "If you are accessing from external network, this should be an external IP address: " : "Bir dış ağdan erişiyorsanız, bu bir dış IP adresi olmalıdır:",
    "is local." : "yerel.",
    "is external." : "dış.",
    "Determination of the country from IP address is only as good as the chosen service." : "IP adresinden ülke belirleme özelliğinin kalitesi seçilmiş hizmetin kalitesine göre değişir.",
    "Service" : "Hizmet",
    "Choose the service you want to use to determine the country from the IP Address:" : "IP adresinden ülkenin belirlenmesi için kullanılacak hizmeti seçin:",
    "Status of the chosen service: " : "Seçilmiş hizmetin durumu:",
    "Date of the database: " : "Veritabanının tarihi:",
    "Configuration of the chosen service: " : "Seçilmiş hizmetin yapılandırması:",
    "Location of the database: " : "Veritabanının konumu:",
    "Update Database" : "Veritabanını Güncelle",
    "Country Selection" : "Ülke Seçimi",
    "Choose the selection mode" : "Seçim kipini seçin",
    "No country is blocked but the selected ones (blacklist)" : "Seçilmişler dışındaki hiç bir ülke engellenmez (kara liste)",
    "All countries are blocked but the selected ones (whitelist)" : "Seçilmişler dışındaki tüm ülkeler engellenir (beyaz liste)",
    "Select countries from list" : "Listeden ülkeleri seçin",
    "The following countries were selected in the list above: " : "Aşağıdaki ülkeler yukarıdaki listeden seçilmiş:",
    "Reaction" : "Tepki",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Seçilmiş ülkelerden bir oturum açma girişimi algılanırsa, girişim aşağıdaki bilgiler ile birlikte günlüğe kaydedilir",
    "( be aware of data protection issues depending on your logging strategy)" : "(günlük stratejisine göre ortaya çıkabilecek kişisel veri koruma sorunlarına dikkat edin)",
    "with IP Address" : "IP adresi ile",
    "with Country Code" : "Ülke kodu ile",
    "with username" : "Kullanıcı adı ile",
    "In addition, the login attempt can also be blocked" : "Ek olarak oturum açma girişimi engellenebilir",
    "(in a future version)" : "(gelecek sürümlerde)",
    "Activate blocking of the login attempt from IP addresses of the specified countries." : "Belirtilen ülkelerden gelen IP adreslerinden yapılan oturum açma girişimleri engellensin.",
    "Test" : "Sına",
    "Possibilities to test if the Geoblocker is working as expected:" : "Coğrafi engellemenin beklendiği gibi çalıştığını sınamak için yapılabilecekler:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "\"%s\" kullanıcısının bir sonraki oturum açma denemesi şu IP adresinden geliyormış gibi yapılacak:",
    "COUNTRY NOT FOUND" : "ÜLKE BULUNAMADI",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Birleşik Arap Emirlikleri",
    "Afghanistan" : "Afganistan",
    "Antigua and Barbuda" : "Antigua ve Barbuda",
    "Anguilla" : "Anguilla",
    "Albania" : "Arnavutluk",
    "Armenia" : "Ermenistan",
    "Angola" : "Angola",
    "Antarctica" : "Antarktika",
    "Argentina" : "Arjantin",
    "American Samoa" : "Amerikan Samoası",
    "Austria" : "Avusturya",
    "Australia" : "Avustralya",
    "Aruba" : "Aruba",
    "Åland Islands" : "Åland Adaları",
    "Azerbaijan" : "Azerbaycan",
    "Bosnia and Herzegovina" : "Bosna ve Hersek",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladeş",
    "Belgium" : "Belçika",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgaristan",
    "Bahrain" : "Bahreyn",
    "Burundi" : "Burundi",
    "Benin" : "Benin",
    "Saint Barthélemy" : "Saint Barthélemy",
    "Bermuda" : "Bermuda",
    "Brunei Darussalam" : "Brunei Barış Ülkesi",
    "Bolivia (Plurinational State of)" : "Bolivya (Çok Uluslu Devleti)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius ve Saba",
    "Brazil" : "Brezilya",
    "Bahamas" : "Bahamalar",
    "Bhutan" : "Butan",
    "Bouvet Island" : "Bouvet Adası",
    "Botswana" : "Botswana",
    "Belarus" : "Beyaz Rusya",
    "Belize" : "Beliz",
    "Canada" : "Kanada",
    "Cocos (Keeling) Islands" : "Cocos (Keyling) Adaları",
    "Congo, Democratic Republic of the" : "Kongo Demokratik Cumhuriyeti",
    "Central African Republic" : "Orta Afrika Cumhuriyeti",
    "Congo" : "Kongo",
    "Switzerland" : "İsviçre",
    "Côte d'Ivoire" : "Fildişi Sahili",
    "Cook Islands" : "Cook Adaları",
    "Chile" : "Şili",
    "Cameroon" : "Kamerun",
    "China" : "Çin",
    "Colombia" : "Kolombiya",
    "Costa Rica" : "Kosta Rika",
    "Cuba" : "Küba",
    "Cabo Verde" : "Yeşil Burun Adaları",
    "Curaçao" : "Curaçao",
    "Christmas Island" : "Christmas Adası",
    "Cyprus" : "Kıbrıs",
    "Czechia" : "Çekya",
    "Germany" : "Almanya",
    "Djibouti" : "Cibuti",
    "Denmark" : "Danimarka",
    "Dominica" : "Dominika",
    "Dominican Republic" : "Dominik Cumhuriyeti",
    "Algeria" : "Cezayir",
    "Ecuador" : "Ekvator",
    "Estonia" : "Estonya",
    "Egypt" : "Mısır",
    "Western Sahara" : "Batı Sahra",
    "Eritrea" : "Eritre",
    "Spain" : "İspanya",
    "Ethiopia" : "Etiyopya",
    "Finland" : "Finlandiya",
    "Fiji" : "Fiji",
    "Falkland Islands (Malvinas)" : "Falkland Adaları (Malvinas)",
    "Micronesia (Federated States of)" : "Mikronezya Birleşik Devletleri",
    "Faroe Islands" : "Faroe Adaları",
    "France" : "Fransa",
    "Gabon" : "Gabon",
    "United Kingdom of Great Britain and Northern Ireland" : "Büyük Britanya Birleşik Krallık ve Kuzey İrlanda",
    "Grenada" : "Grenada",
    "Georgia" : "Gürcistan",
    "French Guiana" : "Fransız Guyanası",
    "Guernsey" : "Guernsey",
    "Ghana" : "Gana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Grönland",
    "Gambia" : "Gambia",
    "Guinea" : "Gine",
    "Guadeloupe" : "Guadeloupe",
    "Equatorial Guinea" : "Ekvator Ginesi",
    "Greece" : "Yunanistan",
    "South Georgia and the South Sandwich Islands" : "Güney Georgia ve Güney Sandwich Adaları",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Gine-Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Heard Adası ve McDonald Adaları",
    "Honduras" : "Honduras",
    "Croatia" : "Hırvatistan",
    "Haiti" : "Haiti",
    "Hungary" : "Macaristan",
    "Indonesia" : "Endonezya",
    "Ireland" : "İrlanda",
    "Israel" : "İsrail",
    "Isle of Man" : "Man Adası",
    "India" : "Hindistan",
    "British Indian Ocean Territory" : "Britanya Hint Okyanusu Toprakları",
    "Iraq" : "Irak",
    "Iran (Islamic Republic of)" : "İran (İslam Cumhuriyeti)",
    "Iceland" : "İzlanda",
    "Italy" : "İtalya",
    "Jersey" : "Jersey Adası",
    "Jamaica" : "Jamaika",
    "Jordan" : "Ürdün",
    "Japan" : "Japonya",
    "Kenya" : "Kenya",
    "Kyrgyzstan" : "Kırgızistan",
    "Cambodia" : "Kamboçya",
    "Kiribati" : "Kiribati",
    "Comoros" : "Komorlar",
    "Saint Kitts and Nevis" : "Saint Kitts ve Nevis",
    "Korea (Democratic People's Republic of)" : "Kuzey Kore",
    "Korea, Republic of" : "Güney Kore",
    "Kuwait" : "Kuveyt",
    "Cayman Islands" : "Cayman Adaları",
    "Kazakhstan" : "Kazakistan",
    "Lao People's Democratic Republic" : "Laos Demokratik Halk Cumhuriyeti",
    "Lebanon" : "Lübnan",
    "Saint Lucia" : "Saint Lucia",
    "Liechtenstein" : "Lihtenştayn",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Liberya",
    "Lesotho" : "Lesotho",
    "Lithuania" : "Litvanya",
    "Luxembourg" : "Lüksemburg",
    "Latvia" : "Letonya",
    "Libya" : "Libya",
    "Morocco" : "Fas",
    "Monaco" : "Monako",
    "Moldova, Republic of" : "Moldova Cumhuriyeti",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "Saint Martin (Fransız Bölümü)",
    "Madagascar" : "Madagaskar",
    "Marshall Islands" : "Marshall Adaları",
    "North Macedonia" : "Kuzey Makedonya",
    "Mali" : "Mali",
    "Myanmar" : "Myanmar",
    "Mongolia" : "Moğolistan",
    "Macao" : "Makau",
    "Northern Mariana Islands" : "Kuzey Mariana Adaları",
    "Martinique" : "Martinik",
    "Mauritania" : "Moritanya",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauritius",
    "Maldives" : "Maldivler",
    "Malawi" : "Malawi",
    "Mexico" : "Meksika",
    "Malaysia" : "Malezya",
    "Mozambique" : "Mozambik",
    "Namibia" : "Namibya",
    "New Caledonia" : "Yeni Kaledonya",
    "Niger" : "Nijer",
    "Norfolk Island" : "Norfolk Adası",
    "Nigeria" : "Nijerya",
    "Nicaragua" : "Nikaragua",
    "Netherlands" : "Hollanda",
    "Norway" : "Norveç",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Yeni Zelanda",
    "Oman" : "Umman",
    "Panama" : "Panama",
    "Peru" : "Peru",
    "French Polynesia" : "Fransız Polinezyası",
    "Papua New Guinea" : "Papua Yeni Gine",
    "Philippines" : "Filipinler",
    "Pakistan" : "Pakistan",
    "Poland" : "Polonya",
    "Saint Pierre and Miquelon" : "Saint Pierre ve Miquelon",
    "Pitcairn" : "Pitcairn Adaları",
    "Puerto Rico" : "Porto Riko",
    "Palestine, State of" : "Filistin Devleti",
    "Portugal" : "Portekiz",
    "Palau" : "Palau",
    "Paraguay" : "Paraguay",
    "Qatar" : "Katar",
    "Réunion" : "Réunion",
    "Romania" : "Romanya",
    "Serbia" : "Sırbistan",
    "Russian Federation" : "Rusya Federasyonu",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Suudi Arabistan",
    "Solomon Islands" : "Solomon Adaları",
    "Seychelles" : "Seyşeller",
    "Sudan" : "Sudan",
    "Sweden" : "İsveç",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Saint Helena, Ascension ve Tristan da Cunha",
    "Slovenia" : "Slovenya",
    "Svalbard and Jan Mayen" : "Svalbard ve Jan Mayen",
    "Slovakia" : "Slovakya",
    "Sierra Leone" : "Sierra Leone",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somali",
    "Suriname" : "Surinam",
    "South Sudan" : "Güney Sudan",
    "Sao Tome and Principe" : "Sao Tome ve Principe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "Sint Maarten (Hollanda Bölümü)",
    "Syrian Arab Republic" : "Suriye Arap Cumhuriyeti",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Turks ve Caicos Adaları",
    "Chad" : "Çad",
    "French Southern Territories" : "Fransız Güney Toprakları",
    "Togo" : "Togo",
    "Thailand" : "Tayland",
    "Tajikistan" : "Tacikistan",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor-Leste",
    "Turkmenistan" : "Türkmenistan",
    "Tunisia" : "Tunus",
    "Tonga" : "Tonga",
    "Turkey" : "Türkiye",
    "Trinidad and Tobago" : "Trinidad ve Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Tayvan, Çin Eyaleti",
    "Tanzania, United Republic of" : "Tanzanya Birleşik Cumhuriyeti",
    "Ukraine" : "Ukrayna",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Amerika Birleşik Devletleri Küçük Dış Adaları",
    "United States of America" : "Amerika Birleşik Devletleri",
    "Uruguay" : "Uruguay",
    "Uzbekistan" : "Özbekistan",
    "Holy See" : "Vatikan",
    "Saint Vincent and the Grenadines" : "Saint Vincent ve Grenadinler",
    "Venezuela (Bolivarian Republic of)" : "Venezuela (Bolivarcı Cumhuriyeti)",
    "Virgin Islands (British)" : "Virgin Adaları (Britanya)",
    "Virgin Islands (U.S.)" : "Virgin Adaları (Birleşik Devletler)",
    "Viet Nam" : "Viet Nam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis ve Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Yemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Güney Afrika",
    "Zambia" : "Zambiya",
    "Zimbabwe" : "Zimbabwe"
},
"nplurals=2; plural=(n > 1);");
