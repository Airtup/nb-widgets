var myHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

var jsonData, searchjsonData, exportPDF_canvas, img_logo_data, imgData, curPage = 1,
    totalPage = 1,
    totalCnt = 0,
    searchMode = 0,
    searchcurPage = 1,
    searchtotalPage = 1,
    pdf_intro = "",
    pdf_declaimer = "",
    pdf_back_color = "black",
    pdf_logo = "",
    img_logo_data_width = 0,
    img_logo_data_height = 0,
    isoStates = {
        AL: "Alabama",
        AK: "Alaska",
        AS: "American Samoa",
        AZ: "Arizona",
        AR: "Arkansas",
        CA: "California",
        CO: "Colorado",
        CT: "Connecticut",
        DE: "Delaware",
        DC: "District of Columbia",
        FL: "Florida",
        GA: "Georgia",
        GU: "Guam",
        HI: "Hawaii",
        ID: "Idaho",
        IL: "Illinois",
        IN: "Indiana",
        IA: "Iowa",
        KS: "Kansas",
        KY: "Kentucky",
        LA: "Louisiana",
        ME: "Maine",
        MD: "Maryland",
        MA: "Massachusetts",
        MI: "Michigan",
        MN: "Minnesota",
        MS: "Mississippi",
        MO: "Missouri",
        MT: "Montana",
        NE: "Nebraska",
        NV: "Nevada",
        NH: "New Hampshire",
        NJ: "New Jersey",
        NM: "New Mexico",
        NY: "New York",
        NC: "North Carolina",
        ND: "North Dakota",
        MP: "Northern Mariana Is",
        OH: "Ohio",
        OK: "Oklahoma",
        OR: "Oregon",
        PA: "Pennsylvania",
        PR: "Puerto Rico",
        RI: "Rhode Island",
        SC: "South Carolina",
        SD: "South Dakota",
        TN: "Tennessee",
        TX: "Texas",
        UT: "Utah",
        VT: "Vermont",
        VA: "Virginia",
        VI: "Virgin Isalands",
        WA: "Washington",
        WV: "West Virginia",
        WI: "Wisconsin",
        WY: "Wyoming",
        AB: "Albert",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NT: "Northwest Territories",
        NS: "Nova Scotia",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Quebec",
        SK: "Saskatchewan",
        YT: "Yukon",
        ACT: "Australian Capital Territory",
        NSW: "New South Wales",
        NT: "Northern Territory",
        QLD: "Queensland",
        SA: "South Australia",
        TAS: "Tasmania",
        VIC: "Victoria",
        WAU: "Western Australia",
        AC: "Acre",
        AL: "Alagoas",
        AP: "Amapá",
        AM: "Amazonas",
        BA: "Bahia",
        CE: "Ceará",
        DF: "Distrito Federal",
        ES: "Espírito Santo",
        GO: "Goiás",
        MA: "Maranhão",
        MT: "MatoGrosso",
        MS: "MatoGrosso do Sul",
        MG: "Minas Gerais",
        PA: "Pará",
        PB: "Paraíba",
        PR: "Paraná",
        PE: "Pernambuco",
        PI: "Piauí",
        RJ: "Rio de Janeiro",
        RN: "Rio Grande do Norte",
        RS: "Rio Grande do Sul",
        RO: "Rondônia",
        RR: "Roraima",
        SC: "Santa Catarina",
        SP: "São Paulo",
        SE: "Sergipe",
        TO: "Tocantins"
    },
    isoCountries = {
        AF: "Afghanistan",
        AX: "Aland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua And Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BA: "Bosnia And Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: "Congo, Democratic Republic",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Cote D'Ivoire",
        HR: "Croatia",
        CU: "Cuba",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island & Mcdonald Islands",
        VA: "Holy See (Vatican City State)",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic Of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle Of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KR: "Korea",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao People's Democratic Republic",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libyan Arab Jamahiriya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia, Federated States Of",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        AN: "Netherlands Antilles",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory, Occupied",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthelemy",
        SH: "Saint Helena",
        KN: "Saint Kitts And Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        PM: "Saint Pierre And Miquelon",
        VC: "Saint Vincent And Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome And Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia And Sandwich Isl.",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SJ: "Svalbard And Jan Mayen",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad And Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks And Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela",
        VN: "Viet Nam",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        WF: "Wallis And Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };

function init() {
    var o = document.querySelector(dominolink_config.container);
    a = "";
    a += '<div class="container mycontainer" style="margin-top:20px;width:100%;">', "true" == dominolink_config.showSearchForm && (a += addSearchContent()), a += '<div id="peopleList" class="row" style="margin-left: 5px;margin-right: 5px;margin-top: 30px;">', a += "</div>", a += '<div id="loaderModal" style="display:none;position:fixed;top:47%;left:47%;"></div>', a += '<div id="pagination" class="row" style="margin-left: 5px;margin-right: 5px;margin-top: 30px;">', a += '<button class="btn btn-success gotoNextPage" style="float:right;margin-right:10px;">Next</button>', a += '<input type="text" class="form-control" style="float:right;text-align:center;width:50px !important;min-width:50px !important;margin-right:10px;" id="pagenum" value="" />', a += '<button class="btn btn-success gotoPrevPage" style="float:right;margin-right:10px;">Prev</button>', a += "</div>";
    var e = "rgb(255,255,255)";
    "dark" == dominolink_config.theme && (e = "rgb(30,30,30)");
    var t = "rgb(244,244,244)";
    "dark" == dominolink_config.theme && (t = "rgb(50,50,50)"), a += '<div class="modal fade bs-modal-lg" id="personDetail" style="overflow-y:auto;" tabindex="-1" role="dialog" aria-hidden="true">', a += '<div class="vertical-alignment-helper">', a += '<div class="modal-dialog modal-lg model-size vertical-align-center">', a += '<div class="my-modal-content modal-content" style="background:' + e + '">', a += '<div class="modal-header">', a += "</div>", a += '<div class="modal-body">', a += '<div class="row">', a += '<div class="col-md-4">', a += '<div style="background-color: ' + t + ';">', a += '<div class="row" style="margin-top: 10px;">', a += '<center><img id="person_image" style="margin-top: 10px;" src="" height="60px;" /></center>', a += "</div>", a += '<div class="row" style="margin-top: 10px;">', a += '<center><b><span id="person_name" style="font-size:14px;"></span></b></center>', a += "</div>", a += '<div class="row" style="margin-top: 6px;color: grey">', a += '<center><p style="font-size:14px;"><span id="person_icon" style="font-size:14px;"></span></p></center>', a += "</div>", a += '<div class="row" style="color:grey;">', a += '<div class="col-md-12" style="word-wrap: break-word;">', a += '<p><center><span id="person_occupation" style="font-size:14px;text-transform:capitalize"></span></center></p>', a += '<p><center style="font-size:14px;"><span id="person_country"></span></center></p>', a += '<p><center style="font-size:14px;"><span id="person_industry"></span></center></p>', a += '<p><center style="font-size:14px;"><span id="person_boards"></span></center></p>', a += "</div>", a += "</div>", a += "</div>", a += "</div>", a += '<div class="col-md-8">', a += '<div style="background-color: ' + t + ';">', a += '<div class="row" style="margin-top: 10px;margin-left: 5px;">', a += '<div class="col-md-12" style="margin-top: 10px;">', a += "<p><b>Contact information</b></p>", a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_email" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_phone" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_work_phone" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_mobile" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_city" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_home_address" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_work_address" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_assist_name" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_assist_phone" style="font-size:14px;"></span>', a += "</div>", a += '<div class="col-md-12" style="color:grey;">', a += '<span id="person_assist_email" style="font-size:14px;"></span>', a += "</div>", a += "</div>", a += "</div>", a += '<div class="row mybio" style="background-color: ' + t + ';margin-top:10px;margin-left:0px;margin-right:0px;">', a += '<div class="col-md-12" style="margin-top: 10px;">', a += "<p><b>About me</b></p>", a += "</div>", a += '<div class="col-md-12" style="margin-top: 10px;">', a += '<p style="color:grey;font-size:14px;" id="person_bio"></p>', a += "</div>", a += "</div>", a += "</div>", a += "</div>", a += "</div>", a += '<div class="modal-footer">', a += '<button type="button" class="btn btn-success" data-dismiss="modal" onclick="hidePersonDetail()">Close</button>', a += "</div>", a += "</div>", a += "</div>", a += "</div>", a += "</div>";
    a += "</div>", o.innerHTML = a, "light" == dominolink_config.theme ? (document.querySelector(".mycontainer").style.backgroundColor = 'white', document.querySelector(".mycontainer").style.color = 'black') : "dark" == dominolink_config.theme && (document.querySelector(".mycontainer").style.backgroundColor = 'black', document.querySelector(".mycontainer").style.color = 'white'),
        fetch("https://stage.nbwidgets.com/api/getPDFDetail", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "nation_slug": dominolink_config.nationSlug
            })
        }).then(response => response.json()).then(response => {
            
            var a = response.data;
            pdf_intro = a.intro != null ? a.intro: '', pdf_declaimer = a.disclaimer != null ? a.disclaimer: '' , pdf_back_color = a.report_color, pdf_logo = a.logo;
            var e = (totalCnt = a.listing_count) % 50;
            totalPage = (totalCnt - e) / 50, e && totalPage++, setCallPeopleUrl_New()
        }).catch(error => console.error('Error:', error))/*, "iwf" != dominolink_config.nationSlug && (document.querySelector("#search_forum").style.display = "none")*/;
    var i = document.createElement("script");
    i.type = "text/javascript", i.src = "https://stage.nbwidgets.com/assets/jspdf.js", document.getElementsByTagName("head")[0].appendChild(i);
    var n = document.createElement("script");
    n.type = "text/javascript", n.src = "https://stage.nbwidgets.com/assets/fuse.js", document.getElementsByTagName("head")[0].appendChild(n)
    var n = document.createElement("link");
    n.rel = "stylesheet", n.href = "https://stage.nbwidgets.com/assets/dominolink.min.css", document.getElementsByTagName("head")[0].appendChild(n)
}

function changeIndustry() {
    "" == document.querySelector("#search_industry").value ? (document.querySelector("#search_industry").style.color = "grey") : (document.querySelector("#search_industry").style.color = "#555555");
}

function changeForum() {
    "" == document.querySelector("#search_forum").value ? (document.querySelector("#search_forum").style.color = "grey") : (document.querySelector("#search_forum").style.color = "#555555")
}

function addSearchContent() {
    var o = "",
        a = "rgb(244,244,244)";
    return "dark" == dominolink_config.theme && (a = "rgb(30,30,30)"), o += '<div class="row" style="background-color: ' + a + ';margin-left: 5px;margin-right: 5px;">', o += '<div class="col-md-12">', o += '<h3 style="color:rgb(92, 127, 146);"><i class="fa fa-search"></i> <b>Member Search</b></h3>', o += '<div style="margin-top: 20px;"></div>', o += "</div>", o += '<div class="col-md-4 col-sm-4 col-xs-6">', o += '<input type="text" class="form-control" id="search_first_name" placeholder="First Name" style="max-width: 250px;margin-bottom: 20px;" />', o += "</div>", o += '<div class="col-md-4 col-sm-4 col-xs-6">', o += '<input type="text" class="form-control" id="search_last_name" placeholder="Last Name" style="max-width: 250px;margin-bottom: 20px;" />', o += "</div>", o += '<div class="col-md-4 col-sm-4 col-xs-6">', o += '<select id="search_forum" onchange="changeForum()" placeholder="Select Forum..." class="form-control form-item__element form-item__element--select" style="max-width: 250px;margin-bottom: 20px;color:grey;">', o += '<option selected value="">Select Forum</option>', o += '<option value="Forum:Alabama">Alabama</option>', o += '<option value="Forum:Argentina">Argentina</option>', o += '<option value="Forum:Arizona">Arizona</option>', o += '<option value="Forum:Arkansas">Arkansas</option>', o += '<option value="Forum:Australia">Australia</option>', o += '<option value="Forum:Austria">Austria</option>', o += '<option value="Forum:Bahamas">Bahamas</option>', o += '<option value="Forum:Barbados">Barbados</option>', o += '<option value="Forum:Bermuda">Bermuda</option>', o += '<option value="Forum:British Columbia">British Columbia</option>', o += '<option value="Forum:Canada">Canada</option>', o += '<option value="Forum:Carolinas">Carolinas</option>', o += '<option value="Forum:Chicago">Chicago</option>', o += '<option value="Forum:Chile">Chile</option>', o += '<option value="Forum:Colorado">Colorado</option>', o += '<option value="Forum:Connecticut">Connecticut</option>', o += '<option value="Forum:Dallas">Dallas</option>', o += '<option value="Forum:Delaware">Delaware</option>', o += '<option value="Forum:Ecuador">Ecuador</option>', o += '<option value="Forum:Finland">Finland</option>', o += '<option value="Forum:Fla-Suncoast">Fla-Suncoast</option>', o += '<option value="Forum:Florida">Florida</option>', o += '<option value="Forum:France">France</option>', o += '<option value="Forum:Georgia">Georgia</option>', o += '<option value="Forum:Germany">Germany</option>', o += '<option value="Forum:Ghana">Ghana</option>', o += '<option value="Forum:Hawaii">Hawaii</option>', o += '<option value="Forum:Hong Kong">Hong Kong</option>', o += '<option value="Forum:Idaho">Idaho</option>', o += '<option value="Forum:Ireland">Ireland</option>', o += '<option value="Forum:Israel">Israel</option>', o += '<option value="Forum:Italy">Italy</option>', o += '<option value="Forum:Jamaica">Jamaica</option>', o += '<option value="Forum:Jordan">Jordan</option>', o += '<option value="Forum:Kansas">Kansas</option>', o += '<option value="Forum:Kentucky">Kentucky</option>', o += '<option value="Forum:Lebanon">Lebanon</option>', o += '<option value="Forum:Louisiana">Louisiana</option>', o += '<option value="Forum:Maine">Maine</option>', o += '<option value="Forum:Massachusetts">Massachusetts</option>', o += '<option value="Forum:Mexico">Mexico</option>', o += '<option value="Forum:Michigan">Michigan</option>', o += '<option value="Forum:Minnesota">Minnesota</option>', o += '<option value="Forum:Mississippi">Mississippi</option>', o += '<option value="Forum:Missouri">Missouri</option>', o += '<option value="Forum:Montana">Montana</option>', o += '<option value="Forum:New Jersey">New Jersey</option>', o += '<option value="Forum:New Mexico">New Mexico</option>', o += '<option value="Forum:New York">New York</option>', o += '<option value="Forum:Northern California">Northern California</option>', o += '<option value="Forum:Ohio">Ohio</option>', o += '<option value="Forum:Oklahoma">Oklahoma</option>', o += '<option value="Forum:Oregon">Oregon</option>', o += '<option value="Forum:Palm Beach">Palm Beach</option>', o += '<option value="Forum:Panama">Panama</option>', o += '<option value="Forum:Pennsylvania">Pennsylvania</option>', o += '<option value="Forum:Pittsburgh">Pittsburgh</option>', o += '<option value="Forum:Russia">Russia</option>', o += '<option value="Forum:Singapore">Singapore</option>', o += '<option value="Forum:South Africa">South Africa</option>', o += '<option value="Forum:Southern California">Southern California</option>', o += '<option value="Forum:Spain">Spain</option>', o += '<option value="Forum:Staff">Staff</option>', o += '<option value="Forum:Sweden">Sweden</option>', o += '<option value="Forum:Tennessee">Tennessee</option>', o += '<option value="Forum:Texas">Texas</option>', o += '<option value="Forum:Trinidad & Tobago">Trinidad & Tobago</option>', o += '<option value="Forum:Turkey">Turkey</option>', o += '<option value="Forum:United Kingdom">United Kingdom</option>', o += '<option value="Forum:Utah">Utah</option>', o += '<option value="Forum:Vermont">Vermont</option>', o += '<option value="Forum:Washington DC">Washington DC</option>', o += '<option value="Forum:Washington State">Washington State</option>', o += '<option value="Forum:Wisconsin">Wisconsin</option>', o += "</select>", o += "</div>", o += '<div class="col-md-4 col-sm-4 col-xs-6">', o += '<select id="search_industry" onchange="changeIndustry()" placeholder="Select Industry..." class="form-control form-item__element form-item__element--select" style="max-width: 250px;margin-bottom: 20px;color:grey;">', o += '<option selected value="">Industry ...</option>', o += '<option value="Accommodations">Accommodations</option>', o += '<option value="Accounting">Accounting</option>', o += '<option value="Advertising">Advertising</option>', o += '<option value="Aerospace">Aerospace</option>', o += '<option value="Agriculture & Agribusiness">Agriculture & Agribusiness</option>', o += '<option value="Air Transportation">Air Transportation</option>', o += '<option value="Apparel & Accessories">Apparel & Accessories</option>', o += '<option value="Auto">Auto</option>', o += '<option value="Banking">Banking</option>', o += '<option value="Beauty & Cosmetics">Beauty & Cosmetics</option>', o += '<option value="Biotechnology">Biotechnology</option>', o += '<option value="Chemical">Chemical</option>', o += '<option value="Communications">Communications</option>', o += '<option value="Computer">Computer</option>', o += '<option value="Construction">Construction</option>', o += '<option value="Consulting">Consulting</option>', o += '<option value="Consumer Products">Consumer Products</option>', o += '<option value="Education">Education</option>', o += '<option value="Electronics">Electronics</option>', o += '<option value="Employment">Employment</option>', o += '<option value="Energy">Energy</option>', o += '<option value="Entertainment & Recreation">Entertainment & Recreation</option>', o += '<option value="Fashion">Fashion</option>', o += '<option value="Financial Services">Financial Services</option>', o += '<option value="Fine Arts">Fine Arts</option>', o += '<option value="Food & Beverage">Food & Beverage</option>', o += '<option value="Green Technology">Green Technology</option>', o += '<option value="Health">Health</option>', o += '<option value="Information">Information</option>', o += '<option value="Information Technology">Information Technology</option>', o += '<option value="Insurance">Insurance</option>', o += '<option value="Journalism & News">Journalism & News</option>', o += '<option value="Legal Services">Legal Services</option>', o += '<option value="Manufacturing">Manufacturing</option>', o += '<option value="Media & Broadcasting">Media & Broadcasting</option>', o += '<option value="Medical Devices & Supplies">Medical Devices & Supplies</option>', o += '<option value="Motion Pictures & Video">Motion Pictures & Video</option>', o += '<option value="Music">Music</option>', o += '<option value="Pharmaceutical">Pharmaceutical</option>', o += '<option value="Public Administration">Public Administration</option>', o += '<option value="Public Relations">Public Relations</option>', o += '<option value="Publishing">Publishing</option>', o += '<option value="Rail">Rail</option>', o += '<option value="Real Estate">Real Estate</option>', o += '<option value="Retail">Retail</option>', o += '<option value="Service">Service</option>', o += '<option value="Technology">Technology</option>', o += '<option value="Telecommunications">Telecommunications</option>', o += '<option value="Tourism">Tourism</option>', o += '<option value="Transportation">Transportation</option>', o += '<option value="Travel">Travel</option>', o += '<option value="Utilities">Utilities</option>', o += '<option value="Video Games">Video Games</option>', o += '<option value="Web Services">Web Services</option>', o += '<option value="Nonprofit">Nonprofit</option>', o += '<option value="Customer Service">Customer Service</option>', o += '<option value="Human Resources">Human Resources</option>', o += '<option value="Various">Various</option>', o += '<option value="Arts">Arts</option>', o += '<option value="Other - See Bio">Other - See Bio</option>', o += '<option value="Government">Government</option>', o += "</select>", o += "</div>", o += '<div class="col-md-4 col-sm-4 col-xs-4">', o += '<input type="text" class="form-control" id="search_keyword" placeholder="Keyword" style="max-width: 250px;" />', o += '<p style="max-width: 250px;font-size:12px;">*Keyword search will search through user bio, company, and title data.</p>', o += "</div>", o += '<div class="clearfix"></div>', o += '<div class="col-md-12">', o += '<p id="showMoreSearch" style="font-size:18px;color: rgb(92, 127, 146);cursor:pointer;"><i id="moreSearchIcon" class="fa fa-plus"></i> <b>See more search options</b></p>', o += "</div>", o += '<div class="clearfix"></div>', o += '<div class="moresearch" style="height:0px; overflow-y:auto;">', o += '<div class="row" style="margin:0px;">', o += '<div class="col-md-4 col-sm-6">', o += '<input type="text" class="form-control" id="search_city" placeholder="City" style="max-width: 250px;margin-bottom: 20px;" />', o += "</div>", o += '<div class="col-md-4 col-sm-6">', o += '<input type="text" class="form-control" id="search_country" placeholder="Country" style="max-width: 250px;margin-bottom: 20px;" />', o += "</div>", o += "</div>", o += "</div>", o += '<div class="clearfix"></div>', o += '<div class="col-md-12">', o += '<button class="btn btn-orange" style="font-size:18px;font-weight: bold;margin-bottom: 20px;padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;" onclick="searchPerson()">Search</button> ', o += "</div>", o += "</div>"
}

function searchPerson() {
    document.querySelector("#peopleList").style.display = "none";
    //document.querySelector("#loader").style.display = "block";
    searchMode = 1, fetch("https://stage.nbwidgets.com/api/getAllPeopleList", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            "nation_slug": dominolink_config.nationSlug,
            "forum": document.querySelector("#search_forum").value
        }),
        cache: "reload"
    }).then(response => response.json()).then(response => {
        document.querySelector("#peopleList").style.display = "block";
        //document.querySelector("#loader").style.display = "none";
        var a = response.data,
            e = {
                shouldSort: !0,
                threshold: .6,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: ['']
            };
        if(a.length > 0)
        {

         "" != document.querySelector("#search_first_name").value && (e.keys[0] = "first_name", a = new Fuse(a, e).search(document.querySelector("#search_first_name").value));
         "" != document.querySelector("#search_last_name").value && (e.keys[0] = "last_name", a = new Fuse(a, e).search(document.querySelector("#search_last_name").value));
         "" != document.querySelector("#search_industry").value && (e.keys[0] = "industry", a = new Fuse(a, e).search(document.querySelector("#search_industry").value));
         "" != document.querySelector("#search_keyword").value && (e.keys[0] = "occupation", a = new Fuse(a, e).search(document("#search_keyword").value));
         if( document.querySelector("#moreSearchIcon").className != 'fa fa-plus')
         {
            "" != document.querySelector("#search_city").value && (e.keys[0] = "city", a = new Fuse(a, e).search(document.querySelector("#search_city").value));
            "" != document.querySelector("#search_country").value && (e.keys[0] = "country", a = new Fuse(a, e).search(document.querySelector("#search_country").value));
         }
         
         /*if(a.length > 0) 
         {
            document.querySelector("#search_first_name").value = a[0].first_name
            document.querySelector("#search_last_name").value = a[0].last_name
            document.querySelector("#search_industry").value = a[0].industry
            document.querySelector("#search_keyword").value = a[0].occupation
            document.querySelector("#search_city").value = a[0].city
            document.querySelector("#search_country").value = a[0].country
            if (document.querySelector("#search_city").value != "" && document.querySelector("#search_country").value != "") {
                //document.querySelector(".moresearch").style.height = "110px";
            }
         }*/
        }

        searchjsonData = a, searchcurPage = 1;
        var t = a.length % 50;
        searchtotalPage = (a.length - t) / 50, t && searchtotalPage++;
        var i = 50;
        1 == searchtotalPage && (i = a.length), (document.querySelector("#pagenum").value = 1);
        var n = "#DC772A",
            s = "#DC772A";
        1 == searchcurPage && (n = "#76838F"), searchcurPage == searchtotalPage && (s = "#76838F");
        var r = "";
        r += '<div class="row" style="margin-left: 5px;margin-right: 5px;padding: 10px;">',
            r += '<div class="col-md-8">', r += '<p style="font-size:15px;">Showing ' + a.length + " profiles</p>",
            r += '<p style="font-size:14px;"><i id="gotoFirstPage" class="fa fa-angle-double-left" style="color: ' + n + ';cursor:pointer;"></i> <i id="gotoPrevPage" class="fa fa-angle-left gotoPrevPage" style="color: ' + n + ';cursor:pointer;"></i> Page <span id="searchcurPage">' + searchcurPage + "</span> of " + searchtotalPage + ' pages, displaying <span id="searchstartend">1-' + i + "</span> of " + a.length + ' results <i id="gotoNextPage" class="fa fa-angle-right gotoNextPage" style="color: ' + s + ';cursor:pointer;"></i> <i id="gotoLastPage" class="fa fa-angle-double-right" style="color: ' + s + ';cursor:pointer;"></i></p>', r += "</div>", r += '<div class="col-md-4">',
            r += '<button id="exportPDF" onclick="exportToPDF()" data-toggle="tooltip" title="Please note: Only your most recent search query will be exported. If you have clicked the &quot;Back&quot; button, please redo your search again before exporting." data-placement="top" class="btn btn-lg orange-tooltip btn-orange" style="font-size: 12px;font-weight: bold; float: right;margin-top:10px;margin-right:5px;">Export PDF</button>',
            r += '<button id="backtomain" class="btn btn-lg btn-myblue" style="display:none;font-size: 11px;font-weight: bold; float: right;margin-right:5px;margin-top:10px;">Back to Main</button>',
            r += "</div>", r += "</div>", r += '<div class="clearfix"></div>', r += '<div id="personList">',
            r += "</div>", (document.querySelector("#peopleList").innerHTML = r), (document.querySelector("#backtomain").style.display = "block");
        for (var l = 0; l < 50; l++) addSearchPersonContent(a[l], l)
    }).catch(error => {
        console.log(error);
        document.querySelector("#loaderModal").style.display = "none";
    });
}

function searchPersonList() {
    var o = 50 * (searchcurPage - 1) + 1,
        a = o + 49;
    searchcurPage == searchtotalPage && (a = searchjsonData.length), (document.querySelector("#pagenum").value = searchcurPage), (document.querySelector("#searchcurPage").innerHTML = searchcurPage), (document.querySelector("#searchstartend").innerHTML = o + "-" + a), document.querySelector("#personList").innerHTML = "";
    var e = "#DC772A",
        t = "#DC772A";
    1 == searchcurPage && (e = "#76838F"), searchcurPage == searchtotalPage && (t = "#76838F"), document.querySelector("#gotoFirstPage").style.color = e, document.querySelector("#gotoPrevPage").style.color = e, document.querySelector("#gotoNextPage").style.color = t, document.querySelector("#gotoLastPage").style.css.color = t;
    for (var i = o - 1; i < a; i++) addSearchPersonContent(searchjsonData[i], i)
}

function setCallPeopleUrl_New() {
    
    document.querySelector("#peopleList").style.display = "none";
    //document.querySelector("#loader").style.display = "block";
    fetch("https://stage.nbwidgets.com/api/getPeopleList", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "nation_slug": dominolink_config.nationSlug,
            "page": curPage
        })
        //cache: !1
    }).then(response => response.json()).then(response => {
        document.querySelector("#peopleList").style.display = "block";
        
        var a = response.data,
            e = {
                shouldSort: !0,
                threshold: .6,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: []
            };
            jsonData = a;
        
        document.querySelector("#search_first_name").value = a[0].first_name
        document.querySelector("#search_last_name").value = a[0].last_name
        if(a[0].industry != null) document.querySelector("#search_industry").value = a[0].industry
        document.querySelector("#search_keyword").value = a[0].occupation
        document.querySelector("#search_city").value = a[0].city
        document.querySelector("#search_country").value = a[0].country
        if (document.querySelector("#search_city").value != "" && document.querySelector("#search_country").value != "") {
           // document.querySelector(".moresearch").style.height = "110px";
        }

        searchjsonData = a, searchcurPage = 1;
        var t = a.length % 50;
        searchtotalPage = (a.length - t) / 50, t && searchtotalPage++;
        var i = 50;
        1 == searchtotalPage && (i = a.length), (document.querySelector("#pagenum").value = 1);
        var n = "#DC772A",
            s = "#DC772A";
        1 == searchcurPage && (n = "#76838F"), searchcurPage == searchtotalPage && (s = "#76838F");
        var r = "";
        r += '<div class="row" style="margin-left: 5px;margin-right: 5px;padding: 10px;">',
            r += '<div class="col-md-8">', r += '<p style="font-size:15px;">Showing ' + a.length + " profiles</p>",
            r += '<p style="font-size:14px;"><i id="gotoFirstPage" class="fa fa-angle-double-left" style="color: ' + n + ';cursor:pointer;"></i> <i id="gotoPrevPage" class="fa fa-angle-left gotoPrevPage" style="color: ' + n + ';cursor:pointer;"></i> Page <span id="searchcurPage">' + searchcurPage + "</span> of " + searchtotalPage + ' pages, displaying <span id="searchstartend">1-' + i + "</span> of " + a.length + ' results <i id="gotoNextPage" class="fa fa-angle-right gotoNextPage" style="color: ' + s + ';cursor:pointer;"></i> <i id="gotoLastPage" class="fa fa-angle-double-right" style="color: ' + s + ';cursor:pointer;"></i></p>', r += "</div>", r += '<div class="col-md-4">',
            r += '<button id="exportPDF" onclick="exportToPDF()" data-toggle="tooltip" title="Please note: Only your most recent search query will be exported. If you have clicked the &quot;Back&quot; button, please redo your search again before exporting." data-placement="top" class="btn btn-lg orange-tooltip btn-orange" style="font-size: 12px;font-weight: bold; float: right;margin-top:10px;margin-right:5px;">Export PDF</button>',
            r += '<button id="backtomain" class="btn btn-lg btn-myblue" style="display:none;font-size: 11px;font-weight: bold; float: right;margin-right:5px;margin-top:10px;">Back to Main</button>',
            r += "</div>", r += "</div>", r += '<div class="clearfix"></div>', r += '<div id="personList">',
            r += "</div>", (document.querySelector("#peopleList").innerHTML = r), (document.querySelector("#backtomain").style.display = "block");
        for (var l = 0; l < 50; l++) addSearchPersonContent(a[l], l)

        /*document.querySelector("#peopleList").style.display = "block";
        //document.querySelector("#loader").style.display = "none";
        var a = response.data;
        jsonData = a;
        totalCnt = a.length;
        
        var e = 1 + 50 * (curPage - 1),
            t = e + 49;
        t > totalCnt && (t = totalCnt), document.querySelector("#pagenum").value = curPage;
        var i = "#DC772A",
            n = "#DC772A";
        1 == curPage && (i = "#76838F"), curPage == totalPage && (n = "#76838F");
        var s = "";
        //s += '<div class="row" style="margin-left: 5px;margin-right: 5px;padding: 10px;">', s += '<div class="col-md-8">', s += '<p style="font-size:15px;">Showing ' + totalCnt + " profiles</p>", s += '<p style="font-size:14px;"><i id="gotoFirstPage" class="fa fa-angle-double-left" style="color: ' + i + ';cursor:pointer;"></i> <i id="gotoPrevPage" class="fa fa-angle-left gotoPrevPage" style="color: ' + i + ';cursor:pointer;"></i> Page <span id="searchcurPage">' + curPage + "</span> of " + totalPage + ' pages, displaying <span id="searchstartend">' + e + "-" + t + "</span> of " + totalCnt + ' results <i id="gotoNextPage" class="fa fa-angle-right gotoNextPage" style="color: ' + n + ';cursor:pointer;"></i> <i id="gotoLastPage" class="fa fa-angle-double-right" style="color: ' + n + ';cursor:pointer;"></i></p>', s += "</div>", s += '<div class="col-md-4">', s += '<button id="exportPDF" data-toggle="tooltip" title="Please note: Only your most recent search query will be exported. If you have clicked the &quot;Back&quot; button, please redo your search again before exporting." data-placement="top" class="btn btn-lg orange-tooltip btn-orange" style="font-size: 12px;font-weight: bold; float: right;margin-top:10px;margin-right:5px;">Export PDF</button>', s += "</div>", s += "</div>", s += '<div class="clearfix"></div>', s += '<div id="personList">', s += "</div>", document.querySelector("#peopleList").innerHTML = s, document.querySelector("#backtomain").style.display = "block";
        for (var r = 0; r < 50; r++) addSearchPersonContent(a[r], r)*/
    }).catch(error => {
        document.querySelector("#loaderModal").style.display = "none";
    });
}

function addSearchPersonContent(o, a) {
    if(o == null) return;
    var e = "";
    if (e += '<div class="person_' + a + ' row" style="margin-top:20px;border-bottom: 1px solid lightgrey;padding:10px;margin-left: 5px;margin-right: 5px;">', e += '<div class="col-md-2 col-sm-2 col-xs-4">', e += '<img id="perImg_' + a + '" src="' + o.profile_image + '" width="80%;" />', e += "</div>", e += '<div id="person_simple_' + a + '" class="col-md-7 col-sm-7 col-xs-8">', e += '<p style="font-size:14px;"><b>' + o.first_name + " " + o.last_name + "</b></p>", null != o.occupation && "" != o.occupation) {
        var t = "";
        null != o.employer && "" != o.employer && null != o.employer && (t = ", " + o.employer), e += '<p style="color:grey;text-transform:capitalize"><i class="fa fa-male"></i> ' + o.occupation + t + "</p>"
    }
    var i = 0,
        n = "";
    null != o.state && "" != o.state && (isoStates.hasOwnProperty(o.state) ? n = isoStates[o.state] : n += o.state, i = 1), "" != o.country && null != o.country && (n += 0 == i ? o.country : ", " + o.country), "" != n && (e += '<p style="color:grey;"><i class="fa fa-map-marker"></i> ' + n + "</p>"), null != o.industry && "" != o.industry && null != o.industry && (e += '<p style="color:grey;"><i class="fa fa-list"></i> ' + o.industry + "</p>"), e += '<p style="color:grey;"><i class="fa fa-envelope"></i> ', null != o.twitter && (e += '<i class="fa fa-twitter"></i> '), 1 == o.facebook && (e += '<i class="fa fa-facebook-f"></i> '), null != o.linked_in && (e += '<i class="fa fa-linkedin"></i>'), e += "</p>", e += "</div>", e += '<div class="col-md-3 col-sm-3">', e += '<button class="btn btn-myblue" style="font-weight: bold;float: right;" id="viewDetail_' + o.person_id + '" data-picture="' + o.profile_image + '" onclick="viewPersonDetail(' + o.person_id + ')">View profile</button>', e += "</div>", e += "</div>", document.querySelector("#personList").innerHTML += e;
}
window.onload = function() {
    // document.querySelector("body").tooltip({
    //     selector: "[data-toggle=tooltip]"
    // });
    var o = new Image;
    o.onError = function() {
        alert('Cannot load image: "' + url + '"')
    }, o.onload = function() {
        imgData = o
    }, o.src = "https://stage.nbwidgets.com/export_icon.png";
    var a = new Image;
    a.onError = function() {
        alert('Cannot load image: "' + url + '"')
    }, a.onload = function() {
        img_logo_data = a, img_logo_data_width = a.width, img_logo_data_height = a.height
    }, a.src = "https://stage.nbwidgets.com/public/nations/images/" + dominolink_config.nationSlug + ".png"
    init();
    document.querySelector("#showMoreSearch").addEventListener('click', function() {
        document.querySelector("#moreSearchIcon").classList.contains("fa-plus") ? (document.querySelector("#moreSearchIcon").classList.remove("fa-plus"), document.querySelector(".moresearch").style.height = "110px", document.querySelector("#moreSearchIcon").classList.add("fa-minus")) : document.querySelector("#moreSearchIcon").classList.contains("fa-minus") ? (document.querySelector("#moreSearchIcon").classList.remove("fa-minus"), document.querySelector(".moresearch").style.height = "0px", document.querySelector("#moreSearchIcon").classList.add("fa-plus")) : "";
    });
    if (document.querySelector("#backtomain") != null) {
        document.querySelector("#backtomain").addEventListener('click', function() {
            searchMode = 0, document.querySelector("#backtomain").style.display = "none", setCallPeopleUrl_New()
        });
    }
    
    if (document.querySelector("#exportPDF") != null) {
        
        document.querySelector("#exportPDF").addEventListener('click', function() {
            
            var a = new jsPDF("p", "pt", "letter");
            if (a.setDrawColor(0), a.setFillColor(pdf_back_color), a.rect(0, 270, 700, 1e3, "F"), a.setDrawColor(255), a.setFillColor(255), a.rect(0, 0, 700, 270, "F"), a.setFontSize(50), a.setFontType("bold"), img_logo_data_width) {
                var e = 100,
                    t = 100 * img_logo_data_width / img_logo_data_height;
                t > 200 && (t = 200, e = 200 * img_logo_data_height / img_logo_data_width), a.addImage(img_logo_data, "JPEG", 300 - t, 130 - e, 2 * t, 2 * e, "logo")
            } else a.text("LOGO", 300, 160, "center");
            a.setFontSize(50), a.setFontType("bold"), a.setTextColor(255, 255, 255), a.text("Member Roster", 300, 350, "center");
            var i = new Date;
            a.setFontSize(30);
            var n = i.getDate();
            n < 10 ? a.text(months[i.getMonth()] + " 0" + n + ", " + i.getFullYear(), 300, 450, "center") : a.text(months[i.getMonth()] + " " + n + ", " + i.getFullYear(), 300, 450, "center"), a.addPage(), a.setFontSize(15), a.setTextColor(118, 131, 143), a.setFontType("bolditalic"), a.text(60, 70, "About this document"), a.text(60, 200, "Disclaimer"), a.setFontType("normal"), a.setFontSize(14), a.setTextColor(185, 192, 198), lines = a.splitTextToSize(pdf_intro, 500), a.text(60, 100, lines), lines = a.splitTextToSize(pdf_declaimer, 500), a.text(60, 230, lines), a.addPage();
            var s = 0,
                r = 0;
            r = 0 == searchMode ? jsonData.length : searchjsonData.length;
            for (var l = 0; l < r; l++) {
                var d;
                d = 0 == searchMode ? jsonData[l] : searchjsonData[l], l && l % 4 == 0 && (a.addPage(), s = 0), a.setDrawColor(0), a.setFillColor(244, 244, 244), a.rect(20, 20 + s, 580, 165, "F"), 0 == l ? a.addImage(imgData, "JPEG", 35, 52 + s, 20, 120, "Icon1") : a.addImage("Icon1", "JPEG", 35, 52 + s, 20, 120), a.setFontSize(11), a.setFontType("bold"), a.setTextColor(0, 0, 0), "" == d.first_name && "" == d.last_name ? a.text(30, 40 + s, "N/A") : a.text(30, 40 + s, d.first_name + " " + d.last_name), a.setFontSize(10), a.setFontType("Normal"), a.setTextColor(100);
                var c = d.occupation;
                null == c && (c = "N/A"), a.text(48, 60 + s, c);
                var p = d.country;
                a.text(48, 75 + s, "Location: " + p);
                var u = "",
                    m = 0;
                "" != d.home_address && null != d.home_address && (u += 0 == m ? d.home_address : ", " + d.home_address, m = 1), "" != d.address2 && null != d.address2 && (u += 0 == m ? d.address2 : ", " + d.address2, m = 1), "" != d.address3 && null != d.address3 && (u += 0 == m ? d.address3 : ", " + d.address3, m = 1), "" != d.city && null != d.city && (u += 0 == m ? d.city : ", " + d.city, m = 1), "" != d.state && null != d.state && (u += 0 == m ? d.state : ", " + d.state, m = 1), "" != d.zip && null != d.zip && (u += 0 == m ? d.zip : ", " + d.zip, m = 1), "" != d.country_code && null != d.country_code && (u += 0 == m ? d.country_code : ", " + d.country_code, m = 1), "" == u && (u = "N/A"), a.text(48, 164 + s, "Home address: " + u), null == d.industry ? a.text(48, 89 + s, "Industry: N/A") : a.text(48, 89 + s, "Industry: " + d.industry), a.text(48, 104 + s, "Email: " + d.email);
                var g = "N/A";
                null != d.phone && (g = d.phone), a.text(48, 119 + s, "Phone: " + g);
                var h = "N/A";
                null != d.work_phone && (h = d.work_phone), a.text(48, 134 + s, "Work Phone: " + h);
                var v = "N/A";
                null != d.mobile && (v = d.mobile), a.text(48, 149 + s, "Mobile phone: " + v), s += 190
            }
            var y = (i = new Date).getMonth() + 1;
            a.save("Directory_Export_" + y + "." + i.getDate() + "." + i.getFullYear() + ".pdf")
        });
    }
    if (document.querySelector("#gotoFirstPage") != null) {
        document.querySelector("#gotoFirstPage").addEventListener("click", function() {
            0 == searchMode ? 1 != curPage && (curPage = 1, setCallPeopleUrl_New()) : 1 != searchcurPage && (searchcurPage = 1, searchPersonList())
        });
    }
    if (document.querySelector("#gotoLastPage") != null) {
        document.querySelector("#gotoLastPage").addEventListener("click", function() {
            0 == searchMode ? curPage != totalPage && (curPage = totalPage, setCallPeopleUrl_New()) : searchcurPage != searchtotalPage && (searchcurPage = searchtotalPage, searchPersonList());
        });
    }
    if (document.querySelector(".gotoPrevPage") != null) {
        document.querySelector(".gotoPrevPage").addEventListener("click", function(o) {
            0 == searchMode ? null != totalPage ? curPage > 1 && (curPage--, setCallPeopleUrl_New()) : null != prev_url && (curPage--, setCallPeopleUrl_Old(prev_url)) : searchcurPage > 1 && (searchcurPage--, searchPersonList())
        });
    }
    if (document.querySelector(".gotoNextPage") != null) {
        document.querySelector(".gotoNextPage").addEventListener("click", function() {
            0 == searchMode ? curPage < totalPage && (curPage++, setCallPeopleUrl_New()) : searchcurPage < searchtotalPage && (searchcurPage++, searchPersonList())
        });
    }
    if (document.querySelector("#pagenum") != null) {
        document.querySelector("#pagenum").addEventListener("keydown", function() {
            if (13 == o.keyCode) {
                if (isNaN(document.querySelector("#pagenum").value)) return void(document.querySelector("#pagenum").value = curPage);
                var a = Number(document.querySelector("#pagenum").value);
                if (0 == searchMode) {
                    if (a < 1 || a > totalPage) return void(document.querySelector("#pagenum").value = curPage);
                    curPage = a, setCallPeopleUrl_New()
                } else {
                    if (a < 1 || a > searchtotalPage) return void(document.querySelector("#pagenum").value = searchcurPage);
                    searchcurPage = a, searchPersonList()
                }
            }
        });
    }
}
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function viewPersonDetail(o) {
    let a = document.querySelector("#viewDetail_" + o).getAttribute("data-picture");
    document.querySelector("#loaderModal").style.display = "block";
    fetch("https://stage.nbwidgets.com/api/getPersonDetail", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "nation_slug": dominolink_config.nationSlug,
            "person_id": o
        }),
    }).then(response => response.json()).then(response => {
        document.querySelector("#loaderModal").style.display = "none";
        var e = response.data.person;
        document.querySelector("#person_image").setAttribute("src", a), document.querySelector("#person_name").innerHTML = e.first_name + " " + e.last_name;
        var t = "";
        if ("" != e.email && (t += '<a class="icon-orange" href="mailto:' + e.email + '"><i class="fa fa-envelope"></i> </a>'), null != e.twitter_id && (t += '<a class="icon-orange" target="_blank" href="https://twitter.com/intent/user?screen_name=' + e.twitter_login + '"><i class="fa fa-twitter"></i></a> '), 1 == e.has_facebook && (t += '<a class="icon-orange" target="_blank" href="' + e.facebook_profile_url + '"><i class="fa fa-facebook-f"></i></a> '), null != e.linkedin_id && (t += '<a class="icon-orange" target="_blank" href="' + e.linkedin_profile + '"><i class="fa fa-linkedin"></i></a>'), document.querySelector("#person_icon").innerHTML = t, "" != e.occupation && null != e.occupation) {
            var i = "fa fa-male";
            null != e.sex && "F" != e.sex || (i = "fa fa-female");
            var n = "";
            null != e.employer && "" != e.employer && null != e.employer && (n = ", " + e.employer), document.querySelector("#person_occupation").innerHTML = '<p style="color:grey;font-size:14px;text-transform:capitalize"><i class="' + i + '"></i> ' + e.occupation + n + "</p>";
        } else document.querySelector("#person_occupation").innerHTML = "";
        var s = "",
            r = "";
        if (null != e.primary_address) {
            var l = 0;
            null != e.primary_address.state && "" != e.primary_address.state && (isoStates.hasOwnProperty(e.primary_address.state) ? r += isoStates[e.primary_address.state] : r += e.primary_address.state, l = 1), isoCountries.hasOwnProperty(e.primary_address.country_code) && (s = isoCountries[e.primary_address.country_code]), "" != s && null != s && (r += 0 == l ? s : ", " + s), "" != e.primary_address.city && null != e.primary_address.city ? document.querySelector("#person_city").innerHTML = '<i class="fa fa-send"></i> City: ' + e.primary_address.city : document.querySelector("#person_city").innerHTML = ""
        }
        if ("" != r ? document.querySelector("#person_country").innerHTML = '<i class="fa fa-map-marker"></i> ' + r : document.querySelector("#person_country").innerHTML = "", "" != e.industry && null != e.industry && null != e.industry ? document.querySelector("#person_industry").innerHTML = '<i class="fa fa-list"></i> ' + e.industry : document.querySelector("#person_industry").innerHTML = "", "" != e.boards && null != e.boards && null != e.boards ? document.querySelector("#person_boards").innerHTML = "Boards:<br/>" + e.boards : document.querySelector("#person_boards").innerHTML = "", "" != e.email && null != e.email ? document.querySelector("#person_email").innerHTML = '<i class="fa fa-envelope"></i> Email: <b onclick="sendEmail(\'' + e.email + '\')" class="text-blue">' + e.email + "</b>" : document.querySelector("#person_email").innerHTML = "", "" != e.phone && null != e.phone ? document.querySelector("#person_phone").innerHTML = '<i class="fa fa-phone"></i> Phone: ' + e.phone + " " : document.querySelector("#person_phone").innerHTML = "", "" != e.work_phone_number && null != e.work_phone_number ? document.querySelector("#person_work_phone").innerHTML = '<i class="fa fa-phone"></i> Work: ' + e.work_phone_number + " " : document.querySelector("#person_work_phone").innerHTML = "", "" != e.mobile && null != e.mobile ? document.querySelector("#person_mobile").innerHTML = '<i class="fa fa-mobile"></i> Mobile: ' + e.mobile + " " : document.querySelector("#person_mobile").innerHTML = "", null != e.home_address) {
            var d = "",
                c = 0;
            "" != e.home_address.address1 && null != e.home_address.address1 && (d += 0 == c ? e.home_address.address1 : ", " + e.home_address.address1, c = 1), "" != e.home_address.address2 && null != e.home_address.address2 && (d += 0 == c ? e.home_address.address2 : ", " + e.home_address.address2, c = 1), "" != e.home_address.address3 && null != e.home_address.address3 && (d += 0 == c ? e.home_address.address3 : ", " + e.home_address.address3, c = 1), "" != e.home_address.city && null != e.home_address.city && (d += 0 == c ? e.home_address.city : ", " + e.home_address.city, c = 1), "" != e.home_address.state && null != e.home_address.state && (d += 0 == c ? e.home_address.state : ", " + e.home_address.state, c = 1), "" != e.home_address.zip && null != e.home_address.zip && (d += 0 == c ? e.home_address.zip : ", " + e.home_address.zip, c = 1), "" != e.home_address.country_code && null != e.home_address.country_code && (d += 0 == c ? e.home_address.country_code : ", " + e.home_address.country_code, c = 1), "" != d ? document.querySelector("#person_home_address").innerHTML = '<i class="fa fa-send"></i> Home address: ' + d : document.querySelector("#person_home_address").innerHTML = ""
        } else document.querySelector("#person_home_address").innerHTML = "";
        if ("" != e.work_address && null != e.work_address) {
            var p = "";
            c = 0;
            "" != e.work_address.address1 && null != e.work_address.address1 && (p += 0 == c ? e.work_address.address1 : ", " + e.work_address.address1, c = 1), "" != e.work_address.address2 && null != e.work_address.address2 && (p += 0 == c ? e.work_address.address2 : ", " + e.work_address.address2, c = 1), "" != e.work_address.address3 && null != e.work_address.address3 && (p += 0 == c ? e.work_address.address3 : ", " + e.work_address.address3, c = 1), "" != e.work_address.city && null != e.work_address.city && (p += 0 == c ? e.work_address.city : ", " + e.work_address.city, c = 1), "" != e.work_address.state && null != e.work_address.state && (p += 0 == c ? e.work_address.state : ", " + e.work_address.state, c = 1), "" != e.work_address.zip && null != e.work_address.zip && (p += 0 == c ? e.work_address.zip : ", " + e.work_address.zip, c = 1), "" != e.work_address.country_code && null != e.work_address.country_code && (p += 0 == c ? e.work_address.country_code : ", " + e.work_address.country_code, c = 1), "" != p ? document.querySelector("#person_work_address").innerHTML = '<i class="fa fa-send"></i> Work address: ' + p : document.querySelector("#person_work_address").innerHTML = ""
        } else document.querySelector("#person_work_address").innerHTML = "";
        "" != e.assistant_name && null != e.assistant_name ? document.querySelector("#person_assist_name").html = '<i class="fa fa-user"></i> Assistant Name: ' + e.assistant_name : document.querySelector("#person_assist_name").innerHTML = "", "" != e.assistant_phone_number && null != e.assistant_phone_number ? document.querySelector("#person_assist_phone").innerHTML = '<i class="fa fa-phone"></i> Assistant Phone: ' + e.assistant_phone_number : document.querySelector("#person_assist_phone").innerHTML = "", "" != e.assistant_email && null != e.assistant_email ? document.querySelector("#person_assist_email").innerHTML = '<i class="fa fa-envelope"></i> Assistant Email: <b onclick="sendEmail(\'' + e.assistant_email + '\')" class="text-blue">' + e.assistant_email + "</b>" : document.querySelector("#person_assist_email").innerHTML = "";
        var u = "",
            m = 0;
        "" != e.bio && null != e.bio && (u += e.bio, m = 1), "" != e.profile_content && null != e.profile_content && (u += 0 == m ? e.profile_content : "<br/>" + e.profile_content), "" == u ? document.querySelector(".mybio").style.display = "none" : document.querySelector(".mybio").style.display = "block", document.querySelector("#person_bio").innerHTML = u, document.querySelector("#personDetail").classList.remove("fade"), document.querySelector("#personDetail").style.display = "block";
    }).catch(error => {
        console.log(error);
    });
}

function sendEmail(o) {
    window.open("mailto:" + o)
}

function hidePersonDetail(){
    document.querySelector("#personDetail").style.display = "none";
}
function exportToPDF(){
    
    var a = new jsPDF("p", "pt", "letter");
    if (a.setDrawColor(0), a.setFillColor(pdf_back_color), a.rect(0, 270, 700, 1e3, "F"), a.setDrawColor(255), a.setFillColor(255), a.rect(0, 0, 700, 270, "F"), a.setFontSize(50), a.setFontType("bold"), img_logo_data_width) {
        var e = 100,
            t = 100 * img_logo_data_width / img_logo_data_height;
        t > 200 && (t = 200, e = 200 * img_logo_data_height / img_logo_data_width), a.addImage(img_logo_data, "JPEG", 300 - t, 130 - e, 2 * t, 2 * e, "logo")
    } else a.text("LOGO", 300, 160, "center");
    a.setFontSize(50), a.setFontType("bold"), a.setTextColor(255, 255, 255), a.text("Member Roster", 300, 350, "center");
    var i = new Date;
    a.setFontSize(30);
    var n = i.getDate();
    n < 10 ? a.text(months[i.getMonth()] + " 0" + n + ", " + i.getFullYear(), 300, 450, "center") : a.text(months[i.getMonth()] + " " + n + ", " + i.getFullYear(), 300, 450, "center"), a.addPage(), a.setFontSize(15), a.setTextColor(118, 131, 143), a.setFontType("bolditalic"), a.text(60, 70, "About this document"), a.text(60, 200, "Disclaimer"), a.setFontType("normal"), a.setFontSize(14), a.setTextColor(185, 192, 198), lines = a.splitTextToSize(pdf_intro, 500), a.text(60, 100, lines), lines = a.splitTextToSize(pdf_declaimer, 500), a.text(60, 230, lines), a.addPage();
    var s = 0,
        r = 0;
    r = 0 == searchMode ? jsonData.length : searchjsonData.length;
    for (var l = 0; l < r; l++) {
        var d;
        d = 0 == searchMode ? jsonData[l] : searchjsonData[l], l && l % 4 == 0 && (a.addPage(), s = 0), a.setDrawColor(0), a.setFillColor(244, 244, 244), a.rect(20, 20 + s, 580, 165, "F"), 0 == l ? a.addImage(imgData, "JPEG", 35, 52 + s, 20, 120, "Icon1") : a.addImage("Icon1", "JPEG", 35, 52 + s, 20, 120), a.setFontSize(11), a.setFontType("bold"), a.setTextColor(0, 0, 0), "" == d.first_name && "" == d.last_name ? a.text(30, 40 + s, "N/A") : a.text(30, 40 + s, d.first_name + " " + d.last_name), a.setFontSize(10), a.setFontType("Normal"), a.setTextColor(100);
        var c = d.occupation;
        null == c && (c = "N/A"), a.text(48, 60 + s, c);
        var p = d.country;
        a.text(48, 75 + s, "Location: " + p);
        var u = "",
            m = 0;
        "" != d.home_address && null != d.home_address && (u += 0 == m ? d.home_address : ", " + d.home_address, m = 1), "" != d.address2 && null != d.address2 && (u += 0 == m ? d.address2 : ", " + d.address2, m = 1), "" != d.address3 && null != d.address3 && (u += 0 == m ? d.address3 : ", " + d.address3, m = 1), "" != d.city && null != d.city && (u += 0 == m ? d.city : ", " + d.city, m = 1), "" != d.state && null != d.state && (u += 0 == m ? d.state : ", " + d.state, m = 1), "" != d.zip && null != d.zip && (u += 0 == m ? d.zip : ", " + d.zip, m = 1), "" != d.country_code && null != d.country_code && (u += 0 == m ? d.country_code : ", " + d.country_code, m = 1), "" == u && (u = "N/A"), a.text(48, 164 + s, "Home address: " + u), null == d.industry ? a.text(48, 89 + s, "Industry: N/A") : a.text(48, 89 + s, "Industry: " + d.industry), a.text(48, 104 + s, "Email: " + d.email);
        var g = "N/A";
        null != d.phone && (g = d.phone), a.text(48, 119 + s, "Phone: " + g);
        var h = "N/A";
        null != d.work_phone && (h = d.work_phone), a.text(48, 134 + s, "Work Phone: " + h);
        var v = "N/A";
        null != d.mobile && (v = d.mobile), a.text(48, 149 + s, "Mobile phone: " + v), s += 190
    }
    var y = (i = new Date).getMonth() + 1;
    a.save("Directory_Export_" + y + "." + i.getDate() + "." + i.getFullYear() + ".pdf")
}