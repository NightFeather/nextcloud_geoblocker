OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "無法更新。",
    "Update possible. " : "可更新的。",
    "Update running. " : "正在執行更新程序。",
    "Update undefined. " : "未定義更新。",
    "Status of the service cannot be determined." : "無法識別當前服務狀態。",
    "No database date available." : "資料庫中無可用資料。",
    "Database file location not available!" : "資料庫檔案位置不可用。",
    "Update Status not available!" : "更新狀態不明。",
    "Your attempt to login from country \"%s\" is blocked by the Nextcloud GeoBlocker App. If this is a problem for you, please contact your administrator." : "您的登入請求已被 Nextcloud GeoBlocker 封鎖，因為我們認為您來自以下國家：%s。如果您遭遇到此問題，請聯絡您的系統管理員。",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "OK. 此服務將永遠回傳「%s」意味著找不到這個國家。",
    "OK." : "確定",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "錯誤：服務可能並未正確安裝於Nextcloud伺服器，或是服務無法被Web server存取，也可能是錯誤的設置（資料庫僅支援IPv4或IPv6？）；也可能是PHP的exec()函數於 PHP.ini 被禁用。",
    "Date of the database cannot be determined!" : "無法偵測資料庫的更新日期！",
    "local" : "本地",
    "default" : "預設",
    "ERROR: There is an unknown problem with the service." : "ERROR：我們遇到了不明錯誤。",
    "ERROR: Country cannot be found." : "ERROR：我們無法判斷您的國家。",
    "ERROR: Database is not valid, does not have the correct access rights or is not placed at %s." : "ERROR：資料庫無法使用，可能是沒有存取權或是它沒有在以下位置：%s",
    "ERROR: Invalid Argument." : "ERROR：錯誤的參數",
    "No entries in the database. Please run update." : "資料庫不存在任何實體。請執行更新程序。",
    "ERROR:" : "錯誤：",
    "OK" : "OK",
    "IPv6 works only on 64-bit (or higher) systems. When upgrading the system to 64-bit remember to update the DB again." : "IPv6 僅於 64 位元（或更高）的系統上運作。將系統升級至 64 位元時，請記得再次更新資料庫。",
    "The database is currently updating. During the update the service can be used with the last valid data." : "資料庫目前正在更新。在更新期間，可以使用最後一個有效的資料來使用服務。",
    "The last update try ended in an error but the service can be used with the last valid data." : "上次更新以錯誤做結，但可以用最後一個有效資料來使用服務。",
    "Last error message:" : "最新錯誤訊息。",
    "PHP GMP Extension needs to be installed." : "需要安裝PHP擴展：GMP",
    "The database is not initialized. Please run update." : "資料庫尚未初始化，請執行更新程序。",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "資料庫正在初始化，請等待資料庫完成初始化，這可能會花費一些時間。",
    "The database is corrupted. Please run update again." : "資料庫毀損，請重新執行更新程序。",
    "Something is missing." : "有什麼地方出錯了。",
    "No database available!" : "無可用資料庫。",
    "No valid entries could be read for region \"%s\". Maybe the RIR has changed the file format." : "無法讀取「%s」區域的有效項目。可能是 RIR 變更了檔案格式。",
    "Not the right number of entries read for IPv4 in region \"%s\". Should have been %d but was %d." : "在區域「%s」中為 IPv4 讀取的項目數量不正確。應該要是 %d，但曾是 %d。",
    "Not the right number of entries read for IPv6 in region \"%s\". Should have been %d but was %d." : "在區域「%s」中為 IPv6 讀取的項目數量不正確。應該要是 %d，但曾是 %d。",
    "Exception caught during Update for region \"%s\": %s" : "更新期間在區域「%s」偵測到例外：%s",
    "Invalid file handle for region \"%s\". Probably the internet connection got lost during the update." : "區域「%s」的檔案錯誤。這可能是因為在更新時的網路連線中斷造成。",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "在\"php.ini\"內需要允許\"allow_url_fopen\"。",
    "Internet connection needs to be available." : "需要可用的網路連線。",
    "IPv6 is not included on systems with less than 64-bit." : "低於 64 位元的系統不包含 IPv6。",
    "Current number of entries:" : "當前實體數量：",
    "Update in undefined state. Please complain to the developer." : "更新處於一個未定義的狀態，請向開發人員抱怨。",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "我們使用IP位置來推測用戶的地理位置，以將其封鎖。",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\nLogin attempts from local network IP addresses are never blocked, delayed or logged.\nIn the current implementation the login page is normally shown to everybody independent of the country. Also login attempts with a non existing user are failing as usual independent of the country.\nWrong Nextcloud configuration (especially in container) can lead to all access seems to come from local network IP address.\nDetermination of the country from IP address is only as good as the chosen service.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Regional Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "這是地理定位服務的前端，可以封鎖（測試版）、延遲（測試版）與紀錄來自指定國家的登入嘗試。\n從區域網路 IP 位置的登入嘗試永遠不會被封鎖、延遲或記錄。\n在目前的實作中，登入頁面會正常顯示給非該國家的所有人。非既有使用者的登入嘗試也會如非該國家那樣失敗。\n錯誤的 Nextcloud 設定（特別是在容器中）會導致所有存取看起來都像是來自區域 IP 位置。\n從 IP 位置確定國家的能力指會與所選的服務一樣好。\n\n可以使用允許清單或封鎖清單來指定國家。\n\n目前可用的定位服務有：\n- Geoiplookup（主機上的本機程式）\n- MaxMind GeoLite2（透過 PHP API 存取的本機資料庫）\n- 來自區域網際網路註冊管理機構的資料（使用從 RIR 的 FTP 伺服器下載的資料建構的 Nextcloud SQL 資料庫）\n\n關於如何設定本定位服務的說明，請檢視 GitHub 原始碼倉庫（首頁連結在右邊）。",
    "Loading" : "載入中",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "這裡是geo地理服務的前端介面，在這裡你可以封鎖(beta)、減緩（透過添加延遲，beta）與記錄來自指定區域的登入請求。",
    "Login attempts from local network IP addresses are never blocked, delayed or logged." : "永遠不封鎖、延遲或紀錄從區域網路 IP 而來的登入嘗試。",
    "In the current implementation the login page is normally shown to everybody independent of the country. Also login attempts with a non existing user are failing as usual independent of the country." : "在目前的實作中，登入頁面會正常顯示給非該國家的所有人。非既有使用者的登入嘗試也會如非該國家那樣失敗。",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "錯誤的Nextcloid設置（尤其是使用容器虛擬化安裝的Nextcloud）將可能造成登入請求被誤判成來自區域網路。",
    "is local." : "為區域網路。",
    "is external." : "為網際網路。",
    "Determination of the country from IP address is only as good as the chosen service." : "將IP位置轉換成地理位置的效果將與所選服務一樣優異。",
    "For help how to setup the localization services, have a look into the Readme in the" : "若需要任何有關設置本服務的說明，請參閱關於我(readme)於",
    "repository" : "repository",
    "Service" : "服務",
    "Choose the service you want to use to determine the country from the IP Address:" : "請選擇你要使用何種服務來將IP位置轉換成地理位置：",
    "Status of the chosen service: " : "所選服務的狀態:",
    "Date of the database: " : "資料庫更新日期：",
    "Configuration of the chosen service: " : "設定選中的服務：",
    "Update Database" : "更新資料庫",
    "Country Selection" : "城市選擇",
    "Choose the selection mode" : "請選擇運作模式：",
    "No country is blocked but the selected ones (blocklist)" : "僅封鎖清單內的國家（黑名單）。",
    "All countries are blocked but the selected ones (allowlist)" : "僅允許清單內的國家（白名單）。",
    "Select countries from list" : "從清單中選擇國家。",
    "The following countries were selected in the list above: " : "以下是被選中的國家：",
    "Reaction" : "動作",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "若登入請求被認為來自選中的國家，將會記錄以下的資訊。",
    "( be aware of data protection issues depending on your logging strategy)" : "（請注意這些資訊可能含有需被保護的個人資料）",
    "with IP Address" : "記錄IP位置",
    "with Country Code" : "記錄國家代碼",
    "with username" : "記錄使用者名稱",
    "In addition, the login attempt can also be delayed and blocked." : "作為選項，該登入請求可以被封鎖或延後處理。",
    "(beta version)" : "（測試版本）",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "若該流量的IP顯示其來自被選中的國家，延遲登入嘗試。",
    "(30 seconds)" : "(30 秒)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "若該流量的IP顯示其來自被選中的國家，封鎖登入。",
    "Test" : "測試",
    "Possibilities to test if the Geoblocker is working as expected:" : "測試 Geoblocker 的運作是否如同預期。",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "%s的下次登入將會被視為來自此IP位置：",
    "COUNTRY NOT FOUND" : "查無此國家！",
    "Andorra" : "安道爾",
    "United Arab Emirates" : "阿拉伯聯合大公國",
    "Afghanistan" : "阿富汗",
    "Antigua and Barbuda" : "安提瓜和巴布達",
    "Anguilla" : "安圭拉",
    "Albania" : "阿爾巴尼亞",
    "Armenia" : "亞美尼亞",
    "Angola" : "安哥拉",
    "Antarctica" : "南極地區",
    "Argentina" : "阿根廷",
    "American Samoa" : "美屬薩摩亞",
    "Austria" : "奧地利",
    "Australia" : "澳大利亞",
    "Aruba" : "阿路巴",
    "Åland Islands" : "奧蘭群島",
    "Azerbaijan" : "亞塞拜然",
    "Bosnia and Herzegovina" : "波希尼亞及赫塞哥維那",
    "Barbados" : "巴貝多",
    "Bangladesh" : "孟加拉",
    "Belgium" : "比利時",
    "Burkina Faso" : "有吉納法索",
    "Bulgaria" : "保加利亞",
    "Bahrain" : "巴林",
    "Burundi" : "蒲隆地",
    "Benin" : "貝南",
    "Saint Barthélemy" : "聖巴瑟米",
    "Bermuda" : "百慕達",
    "Brunei Darussalam" : "汶萊",
    "Bolivia (Plurinational State of)" : "多民族玻利維亞國",
    "Bonaire, Sint Eustatius and Saba" : "荷蘭加勒比區",
    "Brazil" : "巴西",
    "Bahamas" : "巴哈馬",
    "Bhutan" : "不丹",
    "Bouvet Island" : "布威島",
    "Botswana" : "波札那",
    "Belarus" : "白俄羅斯",
    "Belize" : "貝里斯",
    "Canada" : "加拿大",
    "Cocos (Keeling) Islands" : "科科斯(基林)群島",
    "Congo, Democratic Republic of the" : "剛果民主共和國",
    "Central African Republic" : "中非共和國",
    "Congo" : "剛果",
    "Switzerland" : "瑞士",
    "Côte d'Ivoire" : "象牙海岸",
    "Cook Islands" : "科克群島",
    "Chile" : "智利",
    "Cameroon" : "喀麥隆",
    "China" : "中國大陸",
    "Colombia" : "哥倫比亞",
    "Costa Rica" : "哥斯大黎加",
    "Cuba" : "古巴",
    "Cabo Verde" : "維德角共和國",
    "Curaçao" : "古拉索",
    "Christmas Island" : "聖誕島領地",
    "Cyprus" : "塞浦路斯",
    "Czechia" : "捷克",
    "Germany" : "德國",
    "Djibouti" : "吉布提",
    "Denmark" : "丹麥",
    "Dominica" : "多米尼克",
    "Dominican Republic" : "多明尼加",
    "Algeria" : "阿爾及利亞",
    "Ecuador" : "厄瓜多爾",
    "Estonia" : "愛沙尼亞",
    "Egypt" : "埃及",
    "Western Sahara" : "西撒哈拉",
    "Eritrea" : "厄利垂亞",
    "Spain" : "西班牙",
    "Ethiopia" : "衣索匹亞",
    "Finland" : "芬蘭",
    "Fiji" : "斐濟",
    "Falkland Islands (Malvinas)" : "福克蘭群島",
    "Micronesia (Federated States of)" : "密克羅尼西亞聯邦",
    "Faroe Islands" : "法羅群島",
    "France" : "法國",
    "Gabon" : "加彭",
    "United Kingdom of Great Britain and Northern Ireland" : "大不列顛暨北愛爾蘭聯合王國",
    "Grenada" : "格瑞那達",
    "Georgia" : "喬治亞",
    "French Guiana" : "法屬圭亞那",
    "Guernsey" : "根西",
    "Ghana" : "迦納",
    "Gibraltar" : "直布羅陀",
    "Greenland" : "格陵蘭",
    "Gambia" : "岡比亞",
    "Guinea" : "幾內亞",
    "Guadeloupe" : "瓜德羅普",
    "Equatorial Guinea" : "幾內亞",
    "Greece" : "希臘",
    "South Georgia and the South Sandwich Islands" : "南喬治亞與南桑威奇",
    "Guatemala" : "瓜地馬拉",
    "Guam" : "關島",
    "Guinea-Bissau" : "幾內亞比索",
    "Guyana" : "蓋亞那",
    "Hong Kong" : "香港",
    "Heard Island and McDonald Islands" : "赫德島和麥克唐納群島",
    "Honduras" : "宏都拉斯",
    "Croatia" : "克羅埃西亞",
    "Haiti" : "海地",
    "Hungary" : "匈牙利",
    "Indonesia" : "印尼",
    "Ireland" : "愛爾蘭",
    "Israel" : "以色列",
    "Isle of Man" : "曼島",
    "India" : "印度",
    "British Indian Ocean Territory" : "英屬印度洋屬地",
    "Iraq" : "伊拉克",
    "Iran (Islamic Republic of)" : "伊朗(伊斯蘭共和國)",
    "Iceland" : "冰島",
    "Italy" : "義大利",
    "Jersey" : "澤西",
    "Jamaica" : "牙買加",
    "Jordan" : "約旦",
    "Japan" : "日本",
    "Kenya" : "肯亞",
    "Kyrgyzstan" : "吉爾吉斯斯坦",
    "Cambodia" : "柬埔寨",
    "Kiribati" : "基里巴斯共和國",
    "Comoros" : "科摩羅",
    "Saint Kitts and Nevis" : "聖克里斯多福及尼維斯",
    "Korea (Democratic People's Republic of)" : "朝鮮民主主義人民共和國(北韓)",
    "Korea, Republic of" : "韓國",
    "Kuwait" : "科威特",
    "Cayman Islands" : "開曼群島",
    "Kazakhstan" : "哈薩克",
    "Lao People's Democratic Republic" : "寮國",
    "Lebanon" : "黎巴嫩",
    "Saint Lucia" : "聖露西亞",
    "Liechtenstein" : "列支敦士登",
    "Sri Lanka" : "斯里蘭卡",
    "Liberia" : "賴比瑞亞",
    "Lesotho" : "賴索托",
    "Lithuania" : "立陶宛",
    "Luxembourg" : "盧森堡",
    "Latvia" : "拉脫維亞",
    "Libya" : "利比亞",
    "Morocco" : "摩洛哥",
    "Monaco" : "摩納哥",
    "Moldova, Republic of" : "摩爾多瓦共和國",
    "Montenegro" : "蒙特內哥羅",
    "Saint Martin (French part)" : "聖馬丁島(法國)",
    "Madagascar" : "馬達加斯加",
    "Marshall Islands" : "馬紹爾群島",
    "North Macedonia" : "北馬其頓",
    "Mali" : "馬利",
    "Myanmar" : "緬甸",
    "Mongolia" : "蒙古",
    "Macao" : "澳門",
    "Northern Mariana Islands" : "北馬里亞納群島",
    "Martinique" : "馬丁尼克",
    "Mauritania" : "茅利塔尼亞",
    "Montserrat" : "蒙哲臘",
    "Malta" : "馬爾他",
    "Mauritius" : "模里西斯",
    "Maldives" : "馬爾地夫",
    "Malawi" : "馬拉威",
    "Mexico" : "墨西哥",
    "Malaysia" : "馬來西亞",
    "Mozambique" : "莫三鼻克",
    "Namibia" : "納米比亞",
    "New Caledonia" : "新喀里多尼亞",
    "Niger" : "尼日",
    "Norfolk Island" : "諾福克島",
    "Nigeria" : "奈及利亞",
    "Nicaragua" : "尼加拉瓜",
    "Netherlands" : "荷蘭",
    "Norway" : "挪威",
    "Nepal" : "尼泊爾",
    "Nauru" : "諾魯",
    "Niue" : "紐埃",
    "New Zealand" : "紐西蘭",
    "Oman" : "阿曼",
    "Panama" : "巴拿馬",
    "Peru" : "秘魯",
    "French Polynesia" : "法屬玻里尼西亞",
    "Papua New Guinea" : "巴布亞紐幾內亞",
    "Philippines" : "菲律賓",
    "Pakistan" : "巴基斯坦",
    "Poland" : "波蘭",
    "Saint Pierre and Miquelon" : "聖皮耶與密克隆群島",
    "Pitcairn" : "皮特肯群島",
    "Puerto Rico" : "波多黎各",
    "Palestine, State of" : "巴勒斯坦領土",
    "Portugal" : "葡萄牙",
    "Palau" : "帕勞",
    "Paraguay" : "巴拉圭",
    "Qatar" : "卡達",
    "Réunion" : "留尼旺",
    "Romania" : "羅馬尼亞",
    "Serbia" : "塞爾維亞",
    "Russian Federation" : "俄羅斯",
    "Rwanda" : "盧安達",
    "Saudi Arabia" : "沙烏地阿拉伯",
    "Solomon Islands" : " 索羅門群島",
    "Seychelles" : "塞席爾",
    "Sudan" : "蘇丹",
    "Sweden" : "瑞典",
    "Singapore" : "新加坡",
    "Saint Helena, Ascension and Tristan da Cunha" : "聖赫勒拿,亞森欣與垂斯坦昆哈",
    "Slovenia" : "斯洛維尼亞",
    "Svalbard and Jan Mayen" : "斯瓦巴和揚馬延",
    "Slovakia" : "斯洛伐克",
    "Sierra Leone" : "獅子山共和國",
    "San Marino" : "聖馬力諾",
    "Senegal" : "塞內加爾",
    "Somalia" : "索馬利亞",
    "Suriname" : "蘇利南",
    "South Sudan" : "南蘇丹",
    "Sao Tome and Principe" : "聖多美及普林西比",
    "El Salvador" : "薩爾瓦多",
    "Sint Maarten (Dutch part)" : "荷屬聖馬丁",
    "Syrian Arab Republic" : "敘利亞",
    "Eswatini" : "史瓦帝尼",
    "Turks and Caicos Islands" : "土克凱可群島",
    "Chad" : "查德",
    "French Southern Territories" : "法屬南部和南極領地",
    "Togo" : "多哥",
    "Thailand" : "泰國",
    "Tajikistan" : "塔吉克斯坦",
    "Tokelau" : "托克勞",
    "Timor-Leste" : "東帝汶",
    "Turkmenistan" : "土庫曼",
    "Tunisia" : "突尼西亞",
    "Tonga" : "東加",
    "Turkey" : "土耳其",
    "Trinidad and Tobago" : "千里達及托巴哥",
    "Tuvalu" : "吐瓦魯",
    "Taiwan, Province of China" : "台灣,中華民國",
    "Tanzania, United Republic of" : "坦尚尼亞",
    "Ukraine" : "烏克蘭",
    "Uganda" : "烏干達",
    "United States Minor Outlying Islands" : "美國本土外小島嶼",
    "United States of America" : "美利堅合眾國",
    "Uruguay" : "烏拉圭",
    "Uzbekistan" : "烏茲別克",
    "Holy See" : "聖座",
    "Saint Vincent and the Grenadines" : "聖文森及格瑞那丁",
    "Venezuela (Bolivarian Republic of)" : "委內瑞拉玻利瓦共和國",
    "Virgin Islands (British)" : "英屬維京群島",
    "Virgin Islands (U.S.)" : "美屬維京群島",
    "Viet Nam" : "越南",
    "Vanuatu" : "萬那杜",
    "Wallis and Futuna" : "瓦利斯和富圖那",
    "Samoa" : "薩摩亞",
    "Yemen" : "葉門",
    "Mayotte" : "馬約特",
    "South Africa" : "南非",
    "Zambia" : "尚比亞",
    "Zimbabwe" : "辛巴威"
},
"nplurals=1; plural=0;");
