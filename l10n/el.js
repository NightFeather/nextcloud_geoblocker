OC.L10N.register(
    "geoblocker",
    {
    "Update not possible. " : "Δεν είναι δυνατή η ενημέρωση. ",
    "Update possible. " : "Είναι δυνατή η ενημέρωση. ",
    "Update running. " : "Η ενημέρωση εκτελείται. ",
    "Update undefined. " : "Απροσδιόριστη ενημέρωση. ",
    "Status of the service cannot be determined." : "Η κατάσταση της υπηρεσίας δεν μπορεί να προσδιοριστεί.",
    "No database date available." : "Δεν είναι διαθέσιμη η ημερομηνία βάσης δεδομένων.",
    "Database file location not available!" : "Η θέση του αρχείου βάσης δεδομένων δεν είναι διαθέσιμη!",
    "Update Status not available!" : "Η κατάσταση της ενημέρωσης δεν είναι διαθέσιμη!",
    "OK. This service always returns \"%s\" for \"Country not found\"." : "Εντάξει. Αυτή η υπηρεσία επιστρέφει πάντα \"%s\" για το \"Χώρα δε βρέθηκε\".",
    "OK." : "OK.",
    "ERROR: Service seem to be not installed on the host of the Nextcloud server or not reachable for the web server or is wrongly configured (is the database for IPv4 and IPv6 available?!). Maybe the use of the php function exec() is disabled in the php.ini." : "Σφάλμα: Η υπηρεσία φαίνεται να μην είναι εγκατεστημένη στον κεντρικό υπολογιστή Nextcloud ή δεν είναι προσβάσιμη για τον διακομιστή ιστού ή δεν είναι σωστά ρυθμισμένη (είναι διαθέσιμη η βάση δεδομένων για IPv4 και IPv6;). Ίσως η χρήση της λειτουργίας php exec() είναι απενεργοποιημένη στο php.ini.",
    "Date of the database cannot be determined!" : "Η Ημερομηνία βάσης δεδομένων δεν μπορεί να καθοριστεί!",
    "local" : "τοπικά",
    "default" : "προεπιλογή",
    "No entries in the database. Please run update." : "Δεν υπάρχουν καταχωρήσεις στην βάση δεδομένων. Παρακαλούμε ελέγξτε για ενημερώσεις.",
    "ERROR:" : "ΣΦΑΛΜΑ:",
    "OK" : "Εντάξει.",
    "Last error message:" : "Μήνυμα τελευταίου σφάλματος:",
    "PHP GMP Extension needs to be installed." : "Χρειάζεται να εγκατασταθεί το πρόσθετο PHP GMP.",
    "The database is not initialized. Please run update." : "Η βάση δεδομένων δεν έχει αρχικοποιηθεί. Παρακαλούμε ελέγξτε για ενημερώσεις.",
    "The database is currently initializing. Please wait until update is finished. This may take several minutes." : "Η βάση δεδομένων αρχικοποιείται. Παρακαλούμε περιμένετε μέχρι να ολοκληρωθεί η ενημέρωση. Αυτό μπορεί να διαρκέσει μερικά λεπτά.",
    "The database is corrupted. Please run update again." : "Η βάση δεδομένων είναι κατεστραμμένη. Παρακαλούμε εκτελέστε ξανά την ενημέρωση.",
    "Something is missing." : "Κάτι λείπει.",
    "No database available!" : "Δεν υπάρχει διαθέσιμη βάση δεδομένων!",
    "\"allow_url_fopen\" needs to be allowed in php.ini." : "Επιτρέψτε το \"allow_url_fopen\" στο αρχείο php.ini.",
    "Internet connection needs to be available." : "Η σύνδεση στο Διαδίκτυο πρέπει να είναι διαθέσιμη.",
    "Current number of entries:" : "Τρέχων αριθμός καταχωρήσεων:",
    "Update in undefined state. Please complain to the developer." : "Η κατάσταση της ενημέρωσης είναι απροσδιόριστη. Παρακαλούμε παραπονεθείτε στον προγραμματιστή.",
    "GeoBlocker" : "GeoBlocker",
    "Blocks user depending on the estimated country of thier IP address." : "Αποκλεισμός χρήστη ανάλογα με την εκτιμώμενη χώρα της διεύθυνσης IP.",
    "Loading" : "Γίνεται φόρτωση",
    "This is a front end to geo localization services, that allows blocking (beta), delaying (beta) and logging of login attempts from specified countries. " : "Πρόκειται για μια διεπαφή για υπηρεσίες γεωγραφικής προσαρμογής, που επιτρέπει τον αποκλεισμό (beta), την καθυστέρηση (beta) και την καταγραφή των προσπαθειών σύνδεσης από συγκεκριμένες χώρες.",
    "Wrong Nextcloud configuration (especially in container) can lead to all accesses seem to come from a local network IP address." : "Εσφαλμένη ρύθμιση παραμέτρων Nextcloud (ειδικά σε περιεχόμενα) μπορεί να οδηγήσει ότι όλες συνδέσεις να φαίνεται πως προέρχονται από διεύθυνση IP τοπικού δικτύου.",
    "is local." : "είναι τοπικά.",
    "is external." : "είναι εξωτερικά.",
    "Determination of the country from IP address is only as good as the chosen service." : "Ο προσδιορισμός της χώρας από τη διεύθυνση IP είναι τόσο καλός όσο και η επιλεγμένη υπηρεσία.",
    "For help how to setup the localization services, have a look into the Readme in the" : "Για βοήθεια σχετικά με τον τρόπο ρύθμισης των υπηρεσιών εντοπισμού, ρίξτε μια ματιά στο Readme στο",
    "repository" : "αποθετήριο",
    "Service" : "Υπηρεσία",
    "Choose the service you want to use to determine the country from the IP Address:" : "Επιλέξτε την υπηρεσία που θέλετε να χρησιμοποιήσετε για να προσδιορίσετε τη χώρα από τη διεύθυνση IP:",
    "Status of the chosen service: " : "Κατάσταση της επιλεγμένης υπηρεσίας: ",
    "Date of the database: " : "Ημερομηνία βάσης δεδομένων: ",
    "Configuration of the chosen service: " : "Ρύθμιση της επιλεγμένης υπηρεσίας: ",
    "Update Database" : "Ενημέρωση βάσης δεδομένων",
    "Country Selection" : "Επιλογή Χώρας",
    "Choose the selection mode" : "Επιλογή κατάσταση επιλογής",
    "No country is blocked but the selected ones (blocklist)" : "Δεν μπλοκάρεται καμιά χώρα, εκτός από την επιλεγμένη (λίστα μπλοκαρισμένων).",
    "All countries are blocked but the selected ones (allowlist)" : "Μπλοκάρονται όλες οι χώρες, εκτός από τις επιλεγμένες (λίστα επιτρεπόμενων)",
    "Select countries from list" : "Επιλογή χωρών από λίστα",
    "The following countries were selected in the list above: " : "Οι παρακάτω χώρες επιλέχθηκαν στην παραπάνω λίστα: ",
    "Reaction" : "Αντίδραση",
    "If a login attempt is detected from the chosen countries, the attempt is logged with the following information" : "Εάν εντοπιστεί μια προσπάθεια σύνδεσης από τις επιλεγμένες χώρες, η προσπάθεια καταγράφεται με τις ακόλουθες πληροφορίες",
    "( be aware of data protection issues depending on your logging strategy)" : "(να γνωρίζετε τα θέματα προστασίας δεδομένων ανάλογα με τη στρατηγική καταγραφής σας)",
    "with IP Address" : "με διεύθυνση ΙΡ",
    "with Country Code" : "με Κωδικό Χώρας",
    "with username" : "με όνομα χρήστη",
    "In addition, the login attempt can also be delayed and blocked." : "Επιπλέον, η προσπάθεια σύνδεσης μπορεί επίσης να καθυστερήσει και να αποκλειστεί.",
    "(beta version)" : "(δοκιμαστική έκδοση)",
    "Activate delaying of login attempts from IP addresses of the specified countries." : "Ενεργοποίηση καθυστέρησης των προσπαθειών σύνδεσης από διευθύνσεις IP των καθορισμένων χωρών.",
    "Activate blocking of login attempts from IP addresses of the specified countries." : "Ενεργοποίηση αποκλεισμού προσπαθειών σύνδεσης από διευθύνσεις IP των συγκεκριμένων χωρών.",
    "Test" : "Δοκιμή",
    "Possibilities to test if the Geoblocker is working as expected:" : "Περιπτώσεις για δοκιμή εάν το Geoblocker λειτουργεί κανονικά:",
    "Next login attempt of user \"%s\" will be simulated to come from the following IP address:" : "Η επόμενη προσπάθεια σύνδεσης του χρήστη «%s» θα εξομοιωθεί πως προέρχεται από την ακόλουθη διεύθυνση ΙΡ:",
    "COUNTRY NOT FOUND" : "Η ΧΩΡΑ ΔΕΝ ΒΡΕΘΗΚΕ",
    "Andorra" : "Ανδόρα",
    "United Arab Emirates" : "Ηνωμένα Αραβικά Εμιράτα",
    "Afghanistan" : "Αφγανιστάν",
    "Antigua and Barbuda" : "Αντίκουα και Μπαρμπούντα",
    "Anguilla" : "Αγκίλα",
    "Albania" : "Αλβανία",
    "Armenia" : "Αρμενία",
    "Angola" : "Αγκόλα",
    "Antarctica" : "Ανταρκτική",
    "Argentina" : "Αργεντινή",
    "American Samoa" : "Αμερικανική Σαμόα",
    "Austria" : "Αυστρία",
    "Australia" : "Αυστραλία",
    "Aruba" : "Aruba",
    "Åland Islands" : "Νήσοι Ώλαντ",
    "Azerbaijan" : "Αζερμπαϊτζάν",
    "Bosnia and Herzegovina" : "Βοσνία και Ερζεγοβίνη",
    "Barbados" : "Μπαρμπάντος",
    "Bangladesh" : "Μπαγκλαντές",
    "Belgium" : "Βέλγιο",
    "Burkina Faso" : "Μπουρκίνα Φάσο",
    "Bulgaria" : "Βουλγαρία",
    "Bahrain" : "Μπαχρέιν",
    "Burundi" : "Μπουρούντι",
    "Benin" : "Μπενίν",
    "Saint Barthélemy" : "Άγιος Βαρθολομαίος",
    "Bermuda" : "Βερμούδα",
    "Brunei Darussalam" : "Μπρουνέι Νταρουσαλάμ",
    "Bolivia (Plurinational State of)" : "Βολιβία (Πολυεθνική Πολιτεία της)",
    "Bonaire, Sint Eustatius and Saba" : "Bonaire, Sint Eustatius and Saba",
    "Brazil" : "Βραζιλία",
    "Bahamas" : "Μπαχάμες",
    "Bhutan" : "Μπουτάν",
    "Bouvet Island" : "Νήσος Μπουβέ",
    "Botswana" : "Μποτσουάνα",
    "Belarus" : "Λευκορωσία",
    "Belize" : "Μπελίσε",
    "Canada" : "Καναδάς",
    "Cocos (Keeling) Islands" : "Νήσοι Κόκος (Κήλιγκ)",
    "Congo, Democratic Republic of the" : "Λαϊκή Δημοκρατία του Κονγκό",
    "Central African Republic" : "Δημοκρατία Κεντρικής Αφρικής",
    "Congo" : "Κονγκό",
    "Switzerland" : "Ελβετία",
    "Côte d'Ivoire" : "Ακτή Ελεφαντοστού",
    "Cook Islands" : "Νήσοι Κουκ",
    "Chile" : "Χιλή",
    "Cameroon" : "Καμερούν",
    "China" : "Κίνα",
    "Colombia" : "Κολομβία",
    "Costa Rica" : "Κόστα Ρίκα",
    "Cuba" : "Κούβα",
    "Cabo Verde" : "Πράσινο Ακρωτήριο",
    "Curaçao" : "Κουρασάο",
    "Christmas Island" : "Νησί των Χριστουγέννων",
    "Cyprus" : "Κύπρος",
    "Czechia" : "Τσεχία",
    "Germany" : "Γερμανία",
    "Djibouti" : "Τζιμπουτί",
    "Denmark" : "Δανία",
    "Dominica" : "Δομίνικα",
    "Dominican Republic" : "Δομινικανή Δημοκρατία",
    "Algeria" : "Αλγερία",
    "Ecuador" : "Εκουαδόρ",
    "Estonia" : "Εσθονία",
    "Egypt" : "Αίγυπτος",
    "Western Sahara" : "Δυτική Σαχάρα",
    "Eritrea" : "Ερυθρέα",
    "Spain" : "Ισπανία",
    "Ethiopia" : "Αιθιοπία",
    "Finland" : "Φινλανδία",
    "Fiji" : "Φίτζι",
    "Falkland Islands (Malvinas)" : "Νήσοι Φάλκλαντ (Μαλβίνες)",
    "Micronesia (Federated States of)" : "Μικρονησία (Ηνωμένες Πολιτείες)",
    "Faroe Islands" : "Νησιά Φερόε",
    "France" : "Γαλλία",
    "Gabon" : "Γκαμπόν",
    "United Kingdom of Great Britain and Northern Ireland" : "Ηνωμένο Βασίλειο της Μεγάλης Βρετανίας και Βορείου Ιρλανδίας",
    "Grenada" : "Γρενάδα",
    "Georgia" : "Γεωργία",
    "French Guiana" : "Γαλλική Γουιάνα",
    "Guernsey" : "Γκέρνσεϊ",
    "Ghana" : "Γκάνα",
    "Gibraltar" : "Γιβλαρτάρ",
    "Greenland" : "Γροιλανδία",
    "Gambia" : "Γκάμπια",
    "Guinea" : "Γουϊνέα",
    "Guadeloupe" : "Γουαδελούπη",
    "Equatorial Guinea" : "Ισημερινή Γουινέα",
    "Greece" : "Ελλάδα",
    "South Georgia and the South Sandwich Islands" : "Νότια Γεωργία και Νότιοι Νήσοι Σάντουιτς",
    "Guatemala" : "Γουατεμάλα",
    "Guam" : "Γκουάμ",
    "Guinea-Bissau" : "Γουινέα Μπισάου",
    "Guyana" : "Γουιάνα",
    "Hong Kong" : "Χονγκ Κονγκ",
    "Heard Island and McDonald Islands" : "Νησί Χερντ και Νήσοι ΜακΝτόναλντ",
    "Honduras" : "Ονδούρα",
    "Croatia" : "Κροατία",
    "Haiti" : "Αϊτή",
    "Hungary" : "Ουγγαρία",
    "Indonesia" : "Ινδονησία",
    "Ireland" : "Ιρλανδία",
    "Israel" : "Ισραήλ",
    "Isle of Man" : "Νήσος του Μαν",
    "India" : "Ινδία",
    "British Indian Ocean Territory" : "Βρετανικά Εδάφη Ινδικού Ωκεανού",
    "Iraq" : "Ιράκ",
    "Iran (Islamic Republic of)" : "Ιράν (Ισλαμική Δημοκρατία)",
    "Iceland" : "Ισλανδία",
    "Italy" : "Ιταλία",
    "Jersey" : "Τζέρσεϋ",
    "Jamaica" : "Τζαμάικα",
    "Jordan" : "Ιορδανία",
    "Japan" : "Ιαπωνία",
    "Kenya" : "Κένυα",
    "Kyrgyzstan" : "Κιργιστάν",
    "Cambodia" : "Καμπότζη",
    "Kiribati" : "Κιριμπάτι",
    "Comoros" : "Κομόρες",
    "Saint Kitts and Nevis" : "Άγιος Χριστόφορος και Νέβις",
    "Korea (Democratic People's Republic of)" : "Κορέα (Λαϊκή Δημοκρατία της)",
    "Korea, Republic of" : "Δημοκρατία της Κορέας",
    "Kuwait" : "Κουβέιτ",
    "Cayman Islands" : "Νησιά Κέυμαν",
    "Kazakhstan" : "Καζακστάν",
    "Lao People's Democratic Republic" : "Λαϊκή Δημοκρατία του Λάος",
    "Lebanon" : "Λίβανος",
    "Saint Lucia" : "Αγία Λουτσία",
    "Liechtenstein" : "Λιχτενστάιν",
    "Sri Lanka" : "Σρι Λάνκα",
    "Liberia" : "Λιβερία",
    "Lesotho" : "Λεσότο",
    "Lithuania" : "Λιθουανία",
    "Luxembourg" : "Λουξεμβούργο",
    "Latvia" : "Λετονία",
    "Libya" : "Λιβύη",
    "Morocco" : "Μαρόκο",
    "Monaco" : "Μονακό",
    "Moldova, Republic of" : "Δημοκρατία της Μολδαβίας",
    "Montenegro" : "Μαυροβούνιο",
    "Saint Martin (French part)" : "Άγιος Μαρτίνος (Γαλλικό τμήμα)",
    "Madagascar" : "Μαδαγασκάρη",
    "Marshall Islands" : "Νησιά Μάρσαλ",
    "North Macedonia" : "Δημοκρατία της Βόρειας Μακεδονίας",
    "Mali" : "Μάλι",
    "Myanmar" : "Myanmar",
    "Mongolia" : "Μογγολία",
    "Macao" : "Μακάο",
    "Northern Mariana Islands" : "Νήσοι Βόρειας Μαριάνας",
    "Martinique" : "Μαρτινίκα",
    "Mauritania" : "Μαυριτανία",
    "Montserrat" : "Μονσεράτ",
    "Malta" : "Μάλτα",
    "Mauritius" : "Μαυρίκιος",
    "Maldives" : "Μαλδίβες",
    "Malawi" : "Μαλάουι",
    "Mexico" : "Μεξικό",
    "Malaysia" : "Μαλαισία",
    "Mozambique" : "Μοζαμβίκη",
    "Namibia" : "Ναμίμπια",
    "New Caledonia" : "Νέα Καληδονία",
    "Niger" : "Νίγηρα",
    "Norfolk Island" : "Νήσοι Νόρφολκ",
    "Nigeria" : "Νιγηρία",
    "Nicaragua" : "Νικαράγουα",
    "Netherlands" : "Ολλανδία",
    "Norway" : "Νορβηγία",
    "Nepal" : "Νεπάλ",
    "Nauru" : "Ναούρου",
    "Niue" : "Νιούε",
    "New Zealand" : "Νέα Ζηλανδία",
    "Oman" : "Ομάν",
    "Panama" : "Παναμάς",
    "Peru" : "Περού",
    "French Polynesia" : "Γαλλική Πολυνησία",
    "Papua New Guinea" : "Παπούα Νέα Γουινέα",
    "Philippines" : "Φιλιππίνες",
    "Pakistan" : "Πακιστάν",
    "Poland" : "Πολωνία",
    "Saint Pierre and Miquelon" : "Σεν Πιερ και Μικελόν",
    "Pitcairn" : "Πίτκερν",
    "Puerto Rico" : "Πόρτο Ρίκο",
    "Palestine, State of" : "Παλαιστίνη, Κράτος της",
    "Portugal" : "Πορτογαλία",
    "Palau" : "Παλάου",
    "Paraguay" : "Παραγουάη",
    "Qatar" : "Κατάρ",
    "Réunion" : "Ρεϋνιόν",
    "Romania" : "Ρουμανία",
    "Serbia" : "Σερβία",
    "Russian Federation" : "Ρωσική Ομοσπονδία",
    "Rwanda" : "Ρουάντα",
    "Saudi Arabia" : "Σαουδική Αραβία",
    "Solomon Islands" : "Νησιά Σολομώντα",
    "Seychelles" : "Σεϊχέλες",
    "Sudan" : "Σουδάν",
    "Sweden" : "Σουηδία",
    "Singapore" : "Σιγκαπούρη",
    "Saint Helena, Ascension and Tristan da Cunha" : "Αγία Έλενα, Ανάληψη και Τριστάν ντα Κούνα",
    "Slovenia" : "Σλοβενία",
    "Svalbard and Jan Mayen" : "Νήσοι Σβάλμπαρντ και Γιαν Μαγιέν",
    "Slovakia" : "Σλοβακία",
    "Sierra Leone" : "Σιέρα Λεόνε",
    "San Marino" : "Σαν Μαρίνο",
    "Senegal" : "Σενεγάλη",
    "Somalia" : "Σομαλία",
    "Suriname" : "Σουρινάμ",
    "South Sudan" : "Νότιο Σουδάν",
    "Sao Tome and Principe" : "Σάο Τόμε και Πρινσίπε",
    "El Salvador" : "Ελ Σαλβαδόρ",
    "Sint Maarten (Dutch part)" : "Σιντ Μάαρτεν (Ολλανδικό μέρος)",
    "Syrian Arab Republic" : "Αραβική Δημοκρατία της Συρίας",
    "Eswatini" : "Eswatini",
    "Turks and Caicos Islands" : "Νήσοι Τερκς και Κάικος",
    "Chad" : "Τσαντ",
    "French Southern Territories" : "Γαλλικά νότια εδάφη",
    "Togo" : "Τόνγκο",
    "Thailand" : "Ταϊλάνδη",
    "Tajikistan" : "Τατζικιστάν",
    "Tokelau" : "Τοκελάου",
    "Timor-Leste" : "Τιμόρ, Ανατολικό",
    "Turkmenistan" : "Τουρκμενιστάν",
    "Tunisia" : "Τυνησία",
    "Tonga" : "Τόνγκα",
    "Turkey" : "Τουρκία",
    "Trinidad and Tobago" : "Τρινιδάδ και Τομπάγκο",
    "Tuvalu" : "Τουβάλου",
    "Taiwan, Province of China" : "Ταϊβάν, επαρχία της Κίνας",
    "Tanzania, United Republic of" : "Τανζανία, Ηνωμένη Δημοκρατία της",
    "Ukraine" : "Ουκρανία",
    "Uganda" : "Ουγκάντα",
    "United States Minor Outlying Islands" : "Ελάσσονες απομακρυσμένοι νήσοι Ηνωμένων Πολιτειών",
    "United States of America" : "Ηνωμένες Πολιτείες της Αμερικής",
    "Uruguay" : "Ουρουγουάη",
    "Uzbekistan" : "Ουζμπεκιστάν",
    "Holy See" : "Αγία Έδρα (Κράτος της πόλης του Βατικανού)",
    "Saint Vincent and the Grenadines" : "Άγιος Βικέντιος και Γρεναδίνες",
    "Venezuela (Bolivarian Republic of)" : "Βενεζουέλα (Δημοκρατία της Βολιβίας)",
    "Virgin Islands (British)" : "Παρθένοι Νήσοι (Βρετανία)",
    "Virgin Islands (U.S.)" : "Παρθένοι Νήσοι (ΗΠΑ)",
    "Viet Nam" : "Βιετνάμ",
    "Vanuatu" : "Βανουάτου",
    "Wallis and Futuna" : "Γουόλις και Φουτούνα",
    "Samoa" : "Σαμόα",
    "Yemen" : "Υεμένη",
    "Mayotte" : "Μαγιότ",
    "South Africa" : "Νότιος Αφρική",
    "Zambia" : "Ζάμπια",
    "Zimbabwe" : "Ζιμπάμπουε"
},
"nplurals=2; plural=(n != 1);");
