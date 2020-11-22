OC.L10N.register(
    "geoblocker",
    {
    "Status of the service cannot be determined." : "El estado del servicio no se puede ser determinado.",
    "Update not possible. " : "No es posible actualizar.",
    "Update possible. " : "Es posible actualizar.",
    "Update running. " : "Actualización ejecutándose.",
    "Update undefined. " : "Actualización sin definir.",
    "No database date available." : "No hay base de datos disponible.",
    "Database file location not available!" : "¡La localización del archivo de base de datos no está disponible!",
    "Update Status not available!" : "¡Estado de Actualización no disponible!",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "OK. Este servicio siempre devuelve \"%s\" para \"País no encontrado\"",
    "OK." : "Aceptar.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "ERROR: el servicio parece no estar instalado en el host del servidor Nextcloud, o no es accesible por el servidor web o está mal configurado (¿Está disponible la base de datos para IPv4 e IPv6?). Es posible que la función exec() de php esté deshabilitada en el php.ini.",
    "Date of the database cannot be determined!" : "¡La fecha de la base de datos no se puede determinar!",
    "local" : "local",
    "default" : "predeterminado",
    "ERROR: Service does not seem to be installed correctly or database is not available at %s." : "ERROR: el servicio parece no estar instalado correctamente o la base de datos no estar disponible en %s. ",
    "No entries in the database. Please run update." : "No hay entradas en la base de datos. Por favor, ejecute una actualización.",
    "ERROR:" : "ERROR:",
    "OK" : "OK",
    "PHP GMP Extension needs to be installed." : "La extensión PHP GMP necesita ser instalada.",
    "The database is not initialized. Please run update." : "La base de datos no está inicializada. Por favor, ejecute la actualización.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "La base de datos se está inicializando. Por favor, espere hasta que la actualización termine. Esto podría tomar varios minutos.",
    "The database is corrupted. Please run update again." : "La base de datos está corrupta. Por favor, ejecute  de nuevo la actualización.",
    "Last error message:" : "Último mensaje de error:",
    "The database is currently updating, but the service can be used during the update." : "La base de datos se está actualizando, pero el servicio puede ser usado durante el proceso.",
    "Something is missing." : "Falta algo.",
    "No database available!" : "¡Base de datos no disponible!",
    "RIR seems to have changed the file format." : "Parece que RIR ha cambiado el formato del archivo.",
    "Exception caught during Update." : "Detectada una excepción durante la actualización.",
    "Invalid file handle. Probably the internet connection got lost during the update." : "Identificador de archivo no válido. Probablemente se perdió la conexión a Internet durante la actualización.",
    "Database contains old version information. Reset the database using the command line tool." : "La base de datos contiene datos de antiguas versiones. Reinicie la base de datos con la herramienta de línea de comandos.",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "\"allow_url_fopen\" debe estar permitido en php.ini.",
    "Internet connection needs to be available." : "Se necesita tener disponible una conexión a Internet.",
    "Current number of entries:" : "Número actual de entradas:",
    "Update in undefined state. Please complain to the developer." : "La actualización está en un estado indefinido. Por favor, quéjese al desarrollador.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Bloquea a usuarios en función del país de su dirección IP.",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries.\n\nCountries can be specified using allowlisting or blocklisting.\n\nCurrently available localization services are:\n- Geoiplookup (local programm on the host)\n- MaxMind GeoLite2 (local database accessed via PHP API)\n- Data from Reginal Internet Registries (Nextcloud SQL database build up with data downloaded from the RIRs FTP servers)\n\nFor help how to set up the localization services please have a look at the GitHub repository (homepage on the right side)." : "Esto es una interfaz de servicios de geolocalización, que permite bloquear (beta), retrasar (beta) y registrar los intentos de inicio de sesión desde países específicos.\n\nLos países pueden ser especificados utilizando una lista de permitidos o de bloqueados.\n\nLos servicios de localización disponibles en la actualidad son\n- Geoiplookup (programa local en el host)\n- MaxMind GeoLite2 (base de datos local accesible desde la API de PHP)\n- Datos de los Registros Regionales de Internet (la base de datos SQL de Nextcloud se construye con los datos descargados de los servidores FTP de los RIR)\n\nPara obtener ayuda sobre cómo configurar los servicios de ubicación, por favor, eche un vistazo al repositorio de GitHub (página de inicio está a la derecha).",
    "Loading" : "Cargando",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "Esto es una interfaz de servicios de geolocalización, que permite bloquear (beta), retrasar (beta) y registrar los intentos de inicio de sesión desde países específicos.",
    "Login attempts from local network IP addresses are not reacted on at all." : "No se reaccionará ante los intentos de inicio de sesión de las direcciones IP de la red local.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Una mala configuración de Nextcloud (especialmente en contenedor) puede hacer que todos los accesos parezcan provenir de una dirección IP de red local.",
    "If you are accessing from external network, this should be an external IP address: " : "Si accedes desde una red externa, esta debería ser una dirección IP externa:",
    "is local." : "es local.",
    "is external." : "es externo.",
    "Determination of the country from IP address is only as good as the chosen service." : "Determinar la procedencia de una dirección IP dependerá de lo bueno que sea el servicio elegido.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Para obtener ayuda sobre cómo configurar los servicios de localización, eche un vistazo al Léame en el ",
    "repository" : "repositorio",
    "Service" : "Servicio",
    "Choose the service you want to use to determine the country from the IP Address:" : "Elija el servicio que desea utilizar para determinar el país a partir de la dirección IP:",
    "Status of the chosen service: " : "Estado del servicio elegido: ",
    "Date of the database: " : "Fecha de la base de datos: ",
    "Configuration of the chosen service: " : "Configuración del servicio elegido: ",
    "Location of the database: " : "Ubicación de la base de datos:",
    "Update Database" : "Actualiza la Base de Datos",
    "Country Selection" : "Selección del país",
    "Choose the selection mode" : "Elija el modo de funcionamiento",
    "No country is blocked but the selected ones (blocklist)" : "Ningún país está bloqueado excepto los seleccionados (lista de bloqueo)",
    "All countries are blocked but the selected ones (allowlist)" : "Todos los países bloqueados excepto los seleccionados (lista permitida)",
    "Select countries from list" : "Seleccione países de la lista",
    "The following countries were selected in the list above: " : "Los siguientes paises fueron seleccionados en la lista anterior: ",
    "Reaction" : "Reacción",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Si se detecta un intento de inicio de sesión desde los países seleccionados, el intento se registra con la siguiente información",
    "( be aware of data protection issues depending on your logging strategy)" : "(ten en cuenta los problemas de la protección de datos dependiendo de la estrategia de registro)",
    "with IP Address" : "La dirección IP",
    "with Country Code" : "El Código Postal",
    "with username" : "El nombre de usuario",
    "In addition, the login attempt can also be delayed and blocked." : "Además, el intento de inicio de sesión puede ser retrasado y bloqueado.",
    "(beta version)" : "(versión beta)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Activar el retardo de bloqueo de intentos de inicio de sesión desde direcciones IP desde los países indicados.",
    "(Delaying is enforced for 30s before password check.)" : "(Se impone una demora de 30 segundos antes de la comprobación de contraseña.)",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Activar el bloqueo de intentos de inicio de sesión de las direcciones IP desde los países indicados.",
    "(Blocking is enforced after password check!)" : "(¡El bloqueo se aplica después de verificar la contraseña!)",
    "Test" : "Prueba",
    "Possibilities to test if the Geoblocker is working as expected:" : "Opciones para probar si el Geoblocker está funcionando como se espera:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "El próximo intento de inicio del usuario \"%s\" se simulará que proviene desde la siguiente dirección IP:",
    "COUNTRY NOT FOUND" : "PAÍS NO ENCONTRADO",
    "Andorra" : "Andorra",
    "United Arab Emirates" : "Emiratos Árabes Unidos",
    "Afghanistan" : "Afganistán",
    "Antigua and Barbuda" : "Antigua y Barbuda",
    "Anguilla" : "Anguila",
    "Albania" : "Albania",
    "Armenia" : "Armenia",
    "Angola" : "Angola",
    "Antarctica" : "Antártida",
    "Argentina" : "Argentina",
    "American Samoa" : "Samoa Estadounidense",
    "Austria" : "Austria",
    "Australia" : "Australia",
    "Aruba" : "Aruba",
    "Åland Islands" : "Islas Åland",
    "Azerbaijan" : "Azerbaiyán",
    "Bosnia and Herzegovina" : "Bosnia y Herzegovina",
    "Barbados" : "Barbados",
    "Bangladesh" : "Bangladesh",
    "Belgium" : "Bélgica",
    "Burkina Faso" : "Burkina Faso",
    "Bulgaria" : "Bulgaria",
    "Bahrain" : "Baréin",
    "Burundi" : "Burundi",
    "Benin" : "Benín",
    "Saint Barthélemy" : "San Bartolomé",
    "Bermuda" : "Bermudas",
    "Brunei Darussalam" : "Brunéi Darusalam",
    "Bolivia (Plurinational State of)" : "Bolivia (Estado Plurinacional de)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, San Eustaquio y Saba",
    "Brazil" : "Brasil",
    "Bahamas" : "Bahamas",
    "Bhutan" : "Bután",
    "Bouvet Island" : "Isla Bouvet",
    "Botswana" : "Botsuana",
    "Belarus" : "Bielorrusia",
    "Belize" : "Belice",
    "Canada" : "Canadá",
    "Cocos (Keeling) Islands" : "Islas Cocos (Keeling)",
    "Congo, Democratic Republic of the" : "Congo, República Democrática del",
    "Central African Republic" : "República Centroafricana",
    "Congo" : "Congo",
    "Switzerland" : "Suiza",
    "Côte d'Ivoire" : "Costa de Marfil",
    "Cook Islands" : "Islas Cook",
    "Chile" : "Chile",
    "Cameroon" : "Camerún",
    "China" : "China",
    "Colombia" : "Colombia",
    "Costa Rica" : "Costa Rica",
    "Cuba" : "Cuba",
    "Cabo Verde" : "Cabo Verde",
    "Curaçao" : "Curazao",
    "Christmas Island" : "Isla de Navidad",
    "Cyprus" : "Chipre",
    "Czechia" : "Chequia",
    "Germany" : "Alemania",
    "Djibouti" : "Yibuti",
    "Denmark" : "DInamarca",
    "Dominica" : "Dominica",
    "Dominican Republic" : "República Dominicana",
    "Algeria" : "Argelia",
    "Ecuador" : "Ecuador",
    "Estonia" : "Estonia",
    "Egypt" : "Egipto",
    "Western Sahara" : "Sáhara Occidental",
    "Eritrea" : "Eritrea",
    "Spain" : "España",
    "Ethiopia" : "Etiopía",
    "Finland" : "Finlandia",
    "Fiji" : "Fiyi",
    "Falkland Islands (Malvinas)" : "Islas Malvinas (Falkland)",
    "Micronesia (Federated States of)" : "Micronesia (Estados Federados de)",
    "Faroe Islands" : "Islas Faroe",
    "France" : "Francia",
    "Gabon" : "Gabón",
    "United Kingdom of Great Britain and Northern Ireland" : "Reino Unido de la Gran Bretaña e Irlanda del Norte",
    "Grenada" : "Granada",
    "Georgia" : "Georgia",
    "French Guiana" : "Guyana Francesa",
    "Guernsey" : "Guernsey",
    "Ghana" : "Gana",
    "Gibraltar" : "Gibraltar",
    "Greenland" : "Groenlandia",
    "Gambia" : "Gambia",
    "Guinea" : "Guinea",
    "Guadeloupe" : "Guadalupe",
    "Equatorial Guinea" : "Guinea Ecuatorial",
    "Greece" : "Grecia",
    "South Georgia and the South Sandwich Islands" : "Islas Georgias del Sur y Sandwich del Sur",
    "Guatemala" : "Guatemala",
    "Guam" : "Guam",
    "Guinea-Bissau" : "Guinea Bissau",
    "Guyana" : "Guyana",
    "Hong Kong" : "Hong Kong",
    "Heard Island and McDonald Islands" : "Isla Heard e Islas McDonald",
    "Honduras" : "Honduras",
    "Croatia" : "Croacia",
    "Haiti" : "Haiti",
    "Hungary" : "Hungría",
    "Indonesia" : "Indonesia",
    "Ireland" : "Irlanda",
    "Israel" : "Israel",
    "Isle of Man" : "Isla de Man",
    "India" : "India",
    "British Indian Ocean Territory" : "Territorio Británico del Océano Índico",
    "Iraq" : "Iraq",
    "Iran (Islamic Republic of)" : "Irán (República Islámica de)",
    "Iceland" : "Islandia",
    "Italy" : "Italia",
    "Jersey" : "Jersey",
    "Jamaica" : "Jamaica",
    "Jordan" : "Jordania",
    "Japan" : "Japón",
    "Kenya" : "Kenia",
    "Kyrgyzstan" : "Kirguizistán",
    "Cambodia" : "Camboya",
    "Kiribati" : "Kiribati",
    "Comoros" : "Comoras",
    "Saint Kitts and Nevis" : "Saint Kitts y Nevis",
    "Korea (Democratic People's Republic of)" : "Corea (República Democrática Popular de)",
    "Korea, Republic of" : "Corea, República de",
    "Kuwait" : "Kuwait",
    "Cayman Islands" : "Islas Caimán",
    "Kazakhstan" : "Kazajistán",
    "Lao People's Democratic Republic" : "República Democrática Popular de Laos",
    "Lebanon" : "Líbano",
    "Saint Lucia" : "Santa Lucía",
    "Liechtenstein" : "Liechtenstein",
    "Sri Lanka" : "Sri Lanka",
    "Liberia" : "Liberia",
    "Lesotho" : "Lesoto",
    "Lithuania" : "Lituania",
    "Luxembourg" : "Luxemburgo",
    "Latvia" : "Letonia",
    "Libya" : "Libia",
    "Morocco" : "Marruecos",
    "Monaco" : "Mónaco",
    "Moldova, Republic of" : "Moldavia, República de",
    "Montenegro" : "Montenegro",
    "Saint Martin (French part)" : "San Martín (parte francesa)",
    "Madagascar" : "Madagascar",
    "Marshall Islands" : "Islas Marshall",
    "North Macedonia" : "Macedonia del norte",
    "Mali" : "Mali",
    "Myanmar" : "Mianmar",
    "Mongolia" : "Mongolia",
    "Macao" : "Macao",
    "Northern Mariana Islands" : "Islas Marianas del Norte",
    "Martinique" : "Martinica",
    "Mauritania" : "Mauritania",
    "Montserrat" : "Montserrat",
    "Malta" : "Malta",
    "Mauritius" : "Mauricio",
    "Maldives" : "Maldivas",
    "Malawi" : "Malawi",
    "Mexico" : "México",
    "Malaysia" : "Malasia",
    "Mozambique" : "Mozambique",
    "Namibia" : "Namibia",
    "New Caledonia" : "Nueva Caledonia",
    "Niger" : "Níger",
    "Norfolk Island" : "Isla Norfolk",
    "Nigeria" : "Nigeria",
    "Nicaragua" : "Nicaragua",
    "Netherlands" : "Países Bajos",
    "Norway" : "Noruega",
    "Nepal" : "Nepal",
    "Nauru" : "Nauru",
    "Niue" : "Niue",
    "New Zealand" : "Nueva Zelanda",
    "Oman" : "Omán",
    "Panama" : "Panamá",
    "Peru" : "Perú",
    "French Polynesia" : "Polinesia Francesa",
    "Papua New Guinea" : "Papúa Nueva Guinea",
    "Philippines" : "Filipinas",
    "Pakistan" : "Pakistán",
    "Poland" : "Polonia",
    "Saint Pierre and Miquelon" : "Saint Pierre y Miquelon",
    "Pitcairn" : "Pitcairn",
    "Puerto Rico" : "Puerto Rico",
    "Palestine, State of" : "Palestina, Estado de",
    "Portugal" : "Portugal",
    "Palau" : "Palau",
    "Paraguay" : "Paraguay",
    "Qatar" : "Catar",
    "Réunion" : "Reunión",
    "Romania" : "Rumanía",
    "Serbia" : "Serbia",
    "Russian Federation" : "Rusia, Federación",
    "Rwanda" : "Ruanda",
    "Saudi Arabia" : "Arabia Saudí",
    "Solomon Islands" : "Islas Salomón",
    "Seychelles" : "Seychelles",
    "Sudan" : "Sudán",
    "Sweden" : "Suecia",
    "Singapore" : "Singapur",
    "Saint Helena, Ascension and Tristan da Cunha" : "Santa Helena, Ascensión y Tristán de Acuña",
    "Slovenia" : "Eslovenia",
    "Svalbard and Jan Mayen" : "Svalbard y Jan Mayen",
    "Slovakia" : "Eslovaquia",
    "Sierra Leone" : "Sierra Leona",
    "San Marino" : "San Marino",
    "Senegal" : "Senegal",
    "Somalia" : "Somalia",
    "Suriname" : "Surinam",
    "South Sudan" : "Sudán del Sur",
    "Sao Tome and Principe" : "Santo Tomé y Príncipe",
    "El Salvador" : "El Salvador",
    "Sint Maarten (Dutch part)" : "San Martín (parte Holandesa)",
    "Syrian Arab Republic" : "República Árabe Siria",
    "Eswatini" : "Swazilandia",
    "Turks and Caicos Islands" : "Islas Turcos y Caicos",
    "Chad" : "Chad",
    "French Southern Territories" : "Territorios Franceses del Sur",
    "Togo" : "Togo",
    "Thailand" : "Tailandia",
    "Tajikistan" : "Tayikistán",
    "Tokelau" : "Tokelau",
    "Timor-Leste" : "Timor Oriental",
    "Turkmenistan" : "Turkmenistán",
    "Tunisia" : "Túnez",
    "Tonga" : "Tonga",
    "Turkey" : "Turquía",
    "Trinidad and Tobago" : "Trinidad y Tobago",
    "Tuvalu" : "Tuvalu",
    "Taiwan, Province of China" : "Taiwán, Provincia de China",
    "Tanzania, United Republic of" : "Tanzania, República Unida de",
    "Ukraine" : "Ucrania",
    "Uganda" : "Uganda",
    "United States Minor Outlying Islands" : "Islas Ultramarinas Menores Estadounidenses",
    "United States of America" : "Estados Unidos de América",
    "Uruguay" : "Uruguay",
    "Uzbekistan" : "Uzbekistán",
    "Holy See" : "Estado Vaticano",
    "Saint Vincent and the Grenadines" : "San Vicente y Granadinas",
    "Venezuela (Bolivarian Republic of)" : "Venezuela, República Bolivariana de",
    "Virgin Islands (British)" : "Islas Vírgenes (británicas)",
    "Virgin Islands (U.S.)" : "Islas Vírgenes (estadounidenses)",
    "Viet Nam" : "Vietnam",
    "Vanuatu" : "Vanuatu",
    "Wallis and Futuna" : "Wallis y Futuna",
    "Samoa" : "Samoa",
    "Yemen" : "Yemen",
    "Mayotte" : "Mayotte",
    "South Africa" : "Sudáfrica",
    "Zambia" : "Zambia",
    "Zimbabwe" : "Zimbabue"
},
"nplurals=2; plural=(n != 1);");
