
const users = [
    { "id": 1, "first_name": "Clayborne", "last_name": "Emptage", "email": "cemptage0@wufoo.com", "gender": "Male", "ip_address": "15.88.93.24" },
    { "id": 2, "first_name": "Tracie", "last_name": "Riseam", "email": "triseam1@uiuc.edu", "gender": "Male", "ip_address": "241.137.83.49" },
    { "id": 3, "first_name": "Kenneth", "last_name": "Hamnet", "email": "khamnet2@1688.com", "gender": "Male", "ip_address": "237.232.117.150" },
    { "id": 4, "first_name": "Lainey", "last_name": "Northbridge", "email": "lnorthbridge3@behance.net", "gender": "Female", "ip_address": "142.103.88.175" },
    { "id": 5, "first_name": "Thoma", "last_name": "Geekie", "email": "tgeekie4@huffingtonpost.com", "gender": "Male", "ip_address": "39.83.155.86" },
    { "id": 6, "first_name": "Conchita", "last_name": "Legon", "email": "clegon5@soup.io", "gender": "Female", "ip_address": "176.47.245.86" },
    { "id": 7, "first_name": "Cacilie", "last_name": "Spacy", "email": "cspacy6@harvard.edu", "gender": "Female", "ip_address": "138.254.102.70" },
    { "id": 8, "first_name": "Finn", "last_name": "Gwyneth", "email": "fgwyneth7@usgs.gov", "gender": "Male", "ip_address": "111.83.201.19" },
    { "id": 9, "first_name": "Georgena", "last_name": "Roomes", "email": "groomes8@mac.com", "gender": "Female", "ip_address": "226.91.21.205" },
    { "id": 10, "first_name": "Stanislas", "last_name": "Haster", "email": "shaster9@comsenz.com", "gender": "Male", "ip_address": "135.218.77.230" },
    { "id": 11, "first_name": "Marten", "last_name": "Abbots", "email": "mabbotsa@blog.com", "gender": "Male", "ip_address": "168.27.33.149" },
    { "id": 12, "first_name": "Iorgo", "last_name": "Heimann", "email": "iheimannb@creativecommons.org", "gender": "Male", "ip_address": "179.18.91.19" },
    { "id": 13, "first_name": "Scotti", "last_name": "Corneck", "email": "scorneckc@cbc.ca", "gender": "Male", "ip_address": "146.96.76.231" },
    { "id": 14, "first_name": "Isa", "last_name": "Jeandeau", "email": "ijeandeaud@addtoany.com", "gender": "Female", "ip_address": "151.252.39.194" },
    { "id": 15, "first_name": "Emmalyn", "last_name": "Ruffles", "email": "erufflese@webeden.co.uk", "gender": "Female", "ip_address": "3.141.106.107" },
    { "id": 16, "first_name": "Sam", "last_name": "Dadson", "email": "sdadsonf@people.com.cn", "gender": "Female", "ip_address": "78.101.128.119" },
    { "id": 17, "first_name": "Henderson", "last_name": "Loreit", "email": "hloreitg@barnesandnoble.com", "gender": "Male", "ip_address": "102.94.165.1" },
    { "id": 18, "first_name": "Rosanna", "last_name": "Cristofol", "email": "rcristofolh@oracle.com", "gender": "Female", "ip_address": "63.38.66.81" },
    { "id": 19, "first_name": "Shurlocke", "last_name": "Lunny", "email": "slunnyi@networksolutions.com", "gender": "Male", "ip_address": "40.182.151.84" },
    { "id": 20, "first_name": "Patten", "last_name": "Vedyaev", "email": "pvedyaevj@imgur.com", "gender": "Male", "ip_address": "72.216.161.143" },
    { "id": 21, "first_name": "Ivor", "last_name": "Bugden", "email": "ibugdenk@china.com.cn", "gender": "Male", "ip_address": "204.16.193.241" },
    { "id": 22, "first_name": "Dannel", "last_name": "Lenthall", "email": "dlenthalll@ameblo.jp", "gender": "Male", "ip_address": "51.233.8.137" },
    { "id": 23, "first_name": "Clemence", "last_name": "Aubury", "email": "cauburym@utexas.edu", "gender": "Female", "ip_address": "229.127.13.254" },
    { "id": 24, "first_name": "Avrom", "last_name": "Evill", "email": "aevilln@jalbum.net", "gender": "Male", "ip_address": "21.127.242.117" },
    { "id": 25, "first_name": "Herrick", "last_name": "Cliss", "email": "hclisso@pen.io", "gender": "Male", "ip_address": "139.209.143.138" },
    { "id": 26, "first_name": "Carolyne", "last_name": "Cornelleau", "email": "ccornelleaup@china.com.cn", "gender": "Female", "ip_address": "254.149.17.67" },
    { "id": 27, "first_name": "Xenia", "last_name": "Heasley", "email": "xheasleyq@adobe.com", "gender": "Female", "ip_address": "173.222.187.60" },
    { "id": 28, "first_name": "Estevan", "last_name": "Fortescue", "email": "efortescuer@wikimedia.org", "gender": "Male", "ip_address": "194.240.130.63" },
    { "id": 29, "first_name": "Mikel", "last_name": "Nigh", "email": "mnighs@go.com", "gender": "Male", "ip_address": "83.169.8.54" },
    { "id": 30, "first_name": "Elliot", "last_name": "Baiss", "email": "ebaisst@sciencedaily.com", "gender": "Male", "ip_address": "35.132.70.243" },
    { "id": 31, "first_name": "Bern", "last_name": "Shillan", "email": "bshillanu@microsoft.com", "gender": "Male", "ip_address": "117.130.204.165" },
    { "id": 32, "first_name": "Ruprecht", "last_name": "Soars", "email": "rsoarsv@goo.gl", "gender": "Male", "ip_address": "253.251.185.19" },
    { "id": 33, "first_name": "Debbie", "last_name": "Fairchild", "email": "dfairchildw@nydailynews.com", "gender": "Female", "ip_address": "76.42.248.3" },
    { "id": 34, "first_name": "Benedetta", "last_name": "Bellsham", "email": "bbellshamx@sina.com.cn", "gender": "Female", "ip_address": "220.25.149.139" },
    { "id": 35, "first_name": "Alister", "last_name": "Lattka", "email": "alattkay@un.org", "gender": "Male", "ip_address": "241.185.168.194" },
    { "id": 36, "first_name": "Eugenius", "last_name": "Desseine", "email": "edesseinez@blinklist.com", "gender": "Male", "ip_address": "168.28.234.23" },
    { "id": 37, "first_name": "Adriena", "last_name": "Colaton", "email": "acolaton10@google.fr", "gender": "Female", "ip_address": "179.137.206.167" },
    { "id": 38, "first_name": "Karyl", "last_name": "Moodie", "email": "kmoodie11@joomla.org", "gender": "Female", "ip_address": "87.45.147.180" },
    { "id": 39, "first_name": "Gilda", "last_name": "Minghi", "email": "gminghi12@mac.com", "gender": "Female", "ip_address": "30.112.104.185" },
    { "id": 40, "first_name": "Allys", "last_name": "Rotchell", "email": "arotchell13@gov.uk", "gender": "Female", "ip_address": "252.165.176.18" },
    { "id": 41, "first_name": "Ewen", "last_name": "Schettini", "email": "eschettini14@aol.com", "gender": "Male", "ip_address": "69.248.113.250" },
    { "id": 42, "first_name": "Eimile", "last_name": "Shovelton", "email": "eshovelton15@chicagotribune.com", "gender": "Female", "ip_address": "75.234.47.34" },
    { "id": 43, "first_name": "Pren", "last_name": "Haslock(e)", "email": "phaslocke16@cnet.com", "gender": "Male", "ip_address": "215.144.82.140" },
    { "id": 44, "first_name": "Jenica", "last_name": "Hapke", "email": "jhapke17@ebay.com", "gender": "Female", "ip_address": "159.70.210.230" },
    { "id": 45, "first_name": "Romeo", "last_name": "Fronks", "email": "rfronks18@princeton.edu", "gender": "Male", "ip_address": "237.218.210.108" },
    { "id": 46, "first_name": "Maxie", "last_name": "Plaister", "email": "mplaister19@globo.com", "gender": "Male", "ip_address": "20.47.3.242" },
    { "id": 47, "first_name": "Constantino", "last_name": "Hanshawe", "email": "chanshawe1a@wired.com", "gender": "Male", "ip_address": "227.129.169.219" },
    { "id": 48, "first_name": "Rick", "last_name": "Domanski", "email": "rdomanski1b@wordpress.org", "gender": "Male", "ip_address": "86.148.31.176" },
    { "id": 49, "first_name": "Thomasine", "last_name": "Colcutt", "email": "tcolcutt1c@dedecms.com", "gender": "Female", "ip_address": "77.24.108.236" },
    { "id": 50, "first_name": "Karney", "last_name": "Ralston", "email": "kralston1d@chron.com", "gender": "Male", "ip_address": "216.250.38.32" },
    { "id": 51, "first_name": "Delano", "last_name": "Jurgenson", "email": "djurgenson1e@arstechnica.com", "gender": "Male", "ip_address": "85.62.73.203" },
    { "id": 52, "first_name": "Lloyd", "last_name": "Arkill", "email": "larkill1f@mozilla.com", "gender": "Male", "ip_address": "104.26.222.82" },
    { "id": 53, "first_name": "Dukey", "last_name": "Thaller", "email": "dthaller1g@theglobeandmail.com", "gender": "Male", "ip_address": "140.227.21.24" },
    { "id": 54, "first_name": "Nappy", "last_name": "Warbys", "email": "nwarbys1h@sphinn.com", "gender": "Male", "ip_address": "35.115.32.242" },
    { "id": 55, "first_name": "Jonell", "last_name": "Melbury", "email": "jmelbury1i@sogou.com", "gender": "Female", "ip_address": "183.167.158.189" },
    { "id": 56, "first_name": "Garv", "last_name": "Craigie", "email": "gcraigie1j@goodreads.com", "gender": "Male", "ip_address": "183.183.228.72" },
    { "id": 57, "first_name": "Patrice", "last_name": "Trewhela", "email": "ptrewhela1k@mediafire.com", "gender": "Male", "ip_address": "120.72.46.151" },
    { "id": 58, "first_name": "Ayn", "last_name": "Twamley", "email": "atwamley1l@samsung.com", "gender": "Female", "ip_address": "27.91.171.97" },
    { "id": 59, "first_name": "Christy", "last_name": "Buckbee", "email": "cbuckbee1m@pen.io", "gender": "Female", "ip_address": "165.1.158.42" },
    { "id": 60, "first_name": "Roseanne", "last_name": "Yven", "email": "ryven1n@ning.com", "gender": "Female", "ip_address": "52.86.87.118" },
    { "id": 61, "first_name": "Annemarie", "last_name": "Bicksteth", "email": "abicksteth1o@si.edu", "gender": "Female", "ip_address": "35.188.102.12" },
    { "id": 62, "first_name": "Lester", "last_name": "Izzatt", "email": "lizzatt1p@sun.com", "gender": "Male", "ip_address": "48.131.146.236" },
    { "id": 63, "first_name": "Baldwin", "last_name": "Habbershon", "email": "bhabbershon1q@domainmarket.com", "gender": "Male", "ip_address": "188.61.74.232" },
    { "id": 64, "first_name": "Lenore", "last_name": "Gavaran", "email": "lgavaran1r@army.mil", "gender": "Female", "ip_address": "199.9.0.58" },
    { "id": 65, "first_name": "Lindsey", "last_name": "McGready", "email": "lmcgready1s@latimes.com", "gender": "Female", "ip_address": "122.8.170.126" },
    { "id": 66, "first_name": "Matti", "last_name": "Anetts", "email": "manetts1t@angelfire.com", "gender": "Female", "ip_address": "34.108.34.122" },
    { "id": 67, "first_name": "Brandie", "last_name": "Malacrida", "email": "bmalacrida1u@slideshare.net", "gender": "Female", "ip_address": "13.35.145.133" },
    { "id": 68, "first_name": "Arlen", "last_name": "O'Heagertie", "email": "aoheagertie1v@shinystat.com", "gender": "Male", "ip_address": "127.253.182.229" },
    { "id": 69, "first_name": "Broddie", "last_name": "Pallis", "email": "bpallis1w@webmd.com", "gender": "Male", "ip_address": "61.85.241.225" },
    { "id": 70, "first_name": "Borg", "last_name": "Benasik", "email": "bbenasik1x@nsw.gov.au", "gender": "Male", "ip_address": "32.126.89.212" },
    { "id": 71, "first_name": "Hernando", "last_name": "Atkins", "email": "hatkins1y@google.fr", "gender": "Male", "ip_address": "61.74.200.65" },
    { "id": 72, "first_name": "Harp", "last_name": "O' Scallan", "email": "hoscallan1z@hatena.ne.jp", "gender": "Male", "ip_address": "227.71.148.194" },
    { "id": 73, "first_name": "Olga", "last_name": "Adamczyk", "email": "oadamczyk20@shareasale.com", "gender": "Female", "ip_address": "32.131.24.182" },
    { "id": 74, "first_name": "Daron", "last_name": "Thornewell", "email": "dthornewell21@tinypic.com", "gender": "Male", "ip_address": "91.151.139.223" },
    { "id": 75, "first_name": "Aluin", "last_name": "Starling", "email": "astarling22@apple.com", "gender": "Male", "ip_address": "33.248.236.155" },
    { "id": 76, "first_name": "Hector", "last_name": "Frisby", "email": "hfrisby23@google.nl", "gender": "Male", "ip_address": "79.69.7.206" },
    { "id": 77, "first_name": "Berky", "last_name": "Hicklingbottom", "email": "bhicklingbottom24@bluehost.com", "gender": "Male", "ip_address": "134.115.27.254" },
    { "id": 78, "first_name": "Sutherland", "last_name": "Scattergood", "email": "sscattergood25@uol.com.br", "gender": "Male", "ip_address": "143.125.170.9" },
    { "id": 79, "first_name": "Bride", "last_name": "Flescher", "email": "bflescher26@yahoo.com", "gender": "Female", "ip_address": "78.42.242.175" },
    { "id": 80, "first_name": "Nelle", "last_name": "Tregunna", "email": "ntregunna27@wordpress.com", "gender": "Female", "ip_address": "167.155.10.145" },
    { "id": 81, "first_name": "Gherardo", "last_name": "McCluney", "email": "gmccluney28@lulu.com", "gender": "Male", "ip_address": "5.102.60.38" },
    { "id": 82, "first_name": "Beverie", "last_name": "Pierri", "email": "bpierri29@nydailynews.com", "gender": "Female", "ip_address": "204.164.69.8" },
    { "id": 83, "first_name": "Andre", "last_name": "Barnewell", "email": "abarnewell2a@issuu.com", "gender": "Male", "ip_address": "187.198.102.60" },
    { "id": 84, "first_name": "Lavena", "last_name": "Kingstne", "email": "lkingstne2b@alibaba.com", "gender": "Female", "ip_address": "238.90.255.118" },
    { "id": 85, "first_name": "Fredericka", "last_name": "Ralphs", "email": "fralphs2c@opera.com", "gender": "Female", "ip_address": "10.249.80.5" },
    { "id": 86, "first_name": "Mata", "last_name": "Ablewhite", "email": "mablewhite2d@va.gov", "gender": "Male", "ip_address": "184.2.56.79" },
    { "id": 87, "first_name": "Eryn", "last_name": "Danieli", "email": "edanieli2e@nyu.edu", "gender": "Female", "ip_address": "79.225.94.147" },
    { "id": 88, "first_name": "Cameron", "last_name": "Dober", "email": "cdober2f@networksolutions.com", "gender": "Male", "ip_address": "83.124.148.160" },
    { "id": 89, "first_name": "Filmore", "last_name": "Edgerley", "email": "fedgerley2g@quantcast.com", "gender": "Male", "ip_address": "54.174.150.85" },
    { "id": 90, "first_name": "Bernadina", "last_name": "Dreger", "email": "bdreger2h@nifty.com", "gender": "Female", "ip_address": "194.118.137.35" },
    { "id": 91, "first_name": "Drake", "last_name": "Sherbourne", "email": "dsherbourne2i@seattletimes.com", "gender": "Male", "ip_address": "120.43.197.217" },
    { "id": 92, "first_name": "Marisa", "last_name": "Sarfass", "email": "msarfass2j@nsw.gov.au", "gender": "Female", "ip_address": "154.31.17.103" },
    { "id": 93, "first_name": "Elbert", "last_name": "Kubasek", "email": "ekubasek2k@naver.com", "gender": "Male", "ip_address": "87.233.255.9" },
    { "id": 94, "first_name": "Gayel", "last_name": "Dubble", "email": "gdubble2l@loc.gov", "gender": "Female", "ip_address": "136.253.232.211" },
    { "id": 95, "first_name": "Brewer", "last_name": "Cockayne", "email": "bcockayne2m@oakley.com", "gender": "Male", "ip_address": "149.119.16.9" },
    { "id": 96, "first_name": "Gigi", "last_name": "Schruurs", "email": "gschruurs2n@wordpress.com", "gender": "Female", "ip_address": "214.177.2.26" },
    { "id": 97, "first_name": "Caralie", "last_name": "Milthorpe", "email": "cmilthorpe2o@t.co", "gender": "Female", "ip_address": "22.6.213.20" },
    { "id": 98, "first_name": "Keith", "last_name": "Dyment", "email": "kdyment2p@uol.com.br", "gender": "Male", "ip_address": "163.180.179.110" },
    { "id": 99, "first_name": "Swen", "last_name": "McSaul", "email": "smcsaul2q@theglobeandmail.com", "gender": "Male", "ip_address": "37.234.234.4" },
    { "id": 100, "first_name": "Johannah", "last_name": "Purchon", "email": "jpurchon2r@sina.com.cn", "gender": "Female", "ip_address": "49.51.247.190" }
];

var resultTable = document.getElementById('result-table');

function search() {
    const sorting = document.querySelector('input[type="radio"]:checked') || '';    // Grab the currently selected radio box
    const filter = document.querySelector('input[name="search-input"]').value;      // Obtain the search input text
    
    // Retuns a new array whose attributes include the search input text
    const filteredResults = users.filter((item) => {
        return  item.id === filter ||
                item.first_name.includes(filter) ||
                item.last_name.includes(filter) ||
                item.email.includes(filter) ||
                item.gender.includes(filter) ||
                item.ip_address.includes(filter)
    });

    // Sorts the filtered results based on the selected radio box
    if (!sorting.value) {
        console.log("No sorting selected");
    }
    else {
        const sortBy = sorting.value;

        switch(sortBy) {
            case "id":
                filteredResults.sort((a, b) => a.id > b.id ? 1 : -1);
                break;
            case "first_name":
                filteredResults.sort((a, b) => a.first_name > b.first_name ? 1 : -1);
                break;
            case "last_name":
                filteredResults.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
                break;
            case "email":
                filteredResults.sort((a, b) => a.email > b.email ? 1 : -1);
                break;
            case "gender":
                filteredResults.sort((a, b) => a.gender > b.gender ? 1 : -1);
                break;
            case "ip_address":
                filteredResults.sort((a, b) => a.ip_address > b.ip_address ? 1 : -1);
                break;
        }

        // Updates the HTML results
        updateTable(filteredResults);
    }
}

function updateTable(filteredResults) {
    removeCurrentTable();
    setHeader();
    setTable(filteredResults);
}

function removeCurrentTable() {
    // Checks to see if there is a child, and removes it
    while(resultTable.firstChild) {
        resultTable.removeChild(resultTable.firstChild);
    }
}

function setHeader() {
    const columns = Object.keys(users[0]).length;   // Retrieve length of the column headers of users array
    const headerRow = document.createElement('tr')  // Creates the table header element
    headerRow.setAttribute('id', 'table-header');

    // Grab the attribute text for the header, and appends them to the row
    for (var i = 0; i < columns; i++) {
        var headerTitle = document.createElement('th');
        headerTitle.innerText = Object.keys(users[0])[i];

        headerRow.appendChild(headerTitle);
    }

    resultTable.appendChild(headerRow); // Add the header row into the table
}

function setTable(filteredResults){
    const rows = filteredResults.length;

    // Iterates through the number of users in the filtered result
    for (var i = 0; i < rows; i++) {
        var row = document.createElement('tr');

        // Returns the specific values for the current user in the array - no attribute names
        const userArray = Object.keys(filteredResults[i]).map((key) => filteredResults[i][key]);
        
        // For each attribute in the user, create a cell for the table and append it to the row
        userArray.forEach((item) => {
            var rowItem = document.createElement('td');
            rowItem.innerText = item;
            
            row.appendChild(rowItem);
        });

        resultTable.appendChild(row);   // Add the corresponding user row to the table
    }
}


// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
//     'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
//     'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
//     'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
//     'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
//     'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
//     'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving',
//     'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
//     'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
//     'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
//     'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
//     'Blair, Tony', 'Blake, William'];

// // Array.prototype.filter()
// // 1. Filter the list of inventors for those who were born in the 1500's
// const filterChallenge = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
// console.table(filterChallenge);

// // Array.prototype.map()
// // 2. Give us an array of the inventors first and last names
// const mapChallenge = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.table(mapChallenge)

// // Array.prototype.sort()
// // 3. Sort the inventors by birthdate, oldest to youngest
// const sortChallenge = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
// console.table(sortChallenge)

// // Array.prototype.reduce()
// // 4. How many years did all the inventors live all together?
// const reduceChallenge = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
// console.log(reduceChallenge)

// // 5. Sort the inventors by years lived
// const sortChallenge2 = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
// console.table(sortChallenge2)

// // 7. sort Exercise
// // Sort the people alphabetically by last name
// const sortChallenge3 = people.sort((a, b) => {
//     const [aLast, aFirst] = a.split(', ');
//     const [bLast, bFirst] = b.split(', ');

//     return aLast > bLast ? 1 : -1;
// });
// console.table(sortChallenge3);

// // 8. Reduce Exercise
// // Sum up the instances of each of these
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// const reduceChallenge2 = data.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 0;
//     }
//     obj[item]++;
//     return obj;
// }, {});
// console.table(reduceChallenge2);

