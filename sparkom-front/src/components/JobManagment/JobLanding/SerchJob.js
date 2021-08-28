import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "../../../assets/css/Jobs.css";
import background from "../../../assets/img/jobpage.jpg";
import pin from "../../../assets/img/pin.png";
import loupe from "../../../assets/img/loupe.png";

const countries = [
  { label: "AD", value: "Andorra" },
  { label: "AE", value: "United Arab Emirates" },
  { label: "AF", value: "Afghanistan" },
  { label: "AG", value: "Antigua and Barbuda" },
  { label: "AI", value: "Anguilla" },
  { label: "AL", value: "Albania" },
  { label: "AM", value: "Armenia" },
  { label: "AO", value: "Angola" },
  { label: "AQ", value: "Antarctica" },
  { label: "AR", value: "Argentina" },
  { label: "AS", value: "American Samoa" },
  { label: "AT", value: "Austria" },
  { label: "AU", value: "Australia" },
  { label: "AW", value: "Aruba" },
  { label: "AX", value: "Alland Islands" },
  { label: "AZ", value: "Azerbaijan" },
  { label: "BA", value: "Bosnia and Herzegovina" },
  { label: "BB", value: "Barbados" },
  { label: "BD", value: "Bangladesh" },
  { label: "BE", value: "Belgium" },
  { label: "BF", value: "Burkina Faso" },
  { label: "BG", value: "Bulgaria" },
  { label: "BH", value: "Bahrain" },
  { label: "BI", value: "Burundi" },
  { label: "BJ", value: "Benin" },
  { label: "BL", value: "Saint Barthelemy" },
  { label: "BM", value: "Bermuda" },
  { label: "BN", value: "Brunei Darussalam" },
  { label: "BO", value: "Bolivia" },
  { label: "BR", value: "Brazil" },
  { label: "BS", value: "Bahamas" },
  { label: "BT", value: "Bhutan" },
  { label: "BV", value: "Bouvet Island" },
  { label: "BW", value: "Botswana" },
  { label: "BY", value: "Belarus" },
  { label: "BZ", value: "Belize" },
  { label: "CA", value: "Canada" },
  { label: "CC", value: "Cocos (Keeling) Islands" },
  { label: "CD", value: "Congo, Democratic Republic of the" },
  { label: "CF", value: "Central African Republic" },
  { label: "CG", value: "Congo, Republic of the" },
  { label: "CH", value: "Switzerland" },
  { label: "CI", value: "Cote d'Ivoire" },
  { label: "CK", value: "Cook Islands" },
  { label: "CL", value: "Chile" },
  { label: "CM", value: "Cameroon" },
  { label: "CN", value: "China" },
  { label: "CO", value: "Colombia" },
  { label: "CR", value: "Costa Rica" },
  { label: "CU", value: "Cuba" },
  { label: "CV", value: "Cape Verde" },
  { label: "CW", value: "Curacao" },
  { label: "CX", value: "Christmas Island" },
  { label: "CY", value: "Cyprus" },
  { label: "CZ", value: "Czech Republic" },
  { label: "DE", value: "Germany" },
  { label: "DJ", value: "Djibouti" },
  { label: "DK", value: "Denmark" },
  { label: "DM", value: "Dominica" },
  { label: "DO", value: "Dominican Republic" },
  { label: "DZ", value: "Algeria" },
  { label: "EC", value: "Ecuador" },
  { label: "EE", value: "Estonia" },
  { label: "EG", value: "Egypt" },
  { label: "EH", value: "Western Sahara" },
  { label: "ER", value: "Eritrea" },
  { label: "ES", value: "Spain" },
  { label: "ET", value: "Ethiopia" },
  { label: "FI", value: "Finland" },
  { label: "FJ", value: "Fiji" },
  { label: "FK", value: "Falkland Islands (Malvinas)" },
  { label: "FM", value: "Micronesia, Federated States of" },
  { label: "FO", value: "Faroe Islands" },
  { label: "FR", value: "France" },
  { label: "GA", value: "Gabon" },
  { label: "GB", value: "United Kingdom" },
  { label: "GD", value: "Grenada" },
  { label: "GE", value: "Georgia" },
  { label: "GF", value: "French Guiana" },
  { label: "GG", value: "Guernsey" },
  { label: "GH", value: "Ghana" },
  { label: "GI", value: "Gibraltar" },
  { label: "GL", value: "Greenland" },
  { label: "GM", value: "Gambia" },
  { label: "GN", value: "Guinea" },
  { label: "GP", value: "Guadeloupe" },
  { label: "GQ", value: "Equatorial Guinea" },
  { label: "GR", value: "Greece" },
  { label: "GS", value: "South Georgia and the South Sandwich Islands" },
  { label: "GT", value: "Guatemala" },
  { label: "GU", value: "Guam" },
  { label: "GW", value: "Guinea-Bissau" },
  { label: "GY", value: "Guyana" },
  { label: "HK", value: "Hong Kong" },
  { label: "HM", value: "Heard Island and McDonald Islands" },
  { label: "HN", value: "Honduras" },
  { label: "HR", value: "Croatia" },
  { label: "HT", value: "Haiti" },
  { label: "HU", value: "Hungary" },
  { label: "ID", value: "Indonesia" },
  { label: "IE", value: "Ireland" },
  { label: "IL", value: "Israel" },
  { label: "IM", value: "Isle of Man" },
  { label: "IN", value: "India" },
  { label: "IO", value: "British Indian Ocean Territory" },
  { label: "IQ", value: "Iraq" },
  { label: "IR", value: "Iran, Islamic Republic of" },
  { label: "IS", value: "Iceland" },
  { label: "IT", value: "Italy" },
  { label: "JE", value: "Jersey" },
  { label: "JM", value: "Jamaica" },
  { label: "JO", value: "Jordan" },
  { label: "JP", value: "Japan" },
  { label: "KE", value: "Kenya" },
  { label: "KG", value: "Kyrgyzstan" },
  { label: "KH", value: "Cambodia" },
  { label: "KI", value: "Kiribati" },
  { label: "KM", value: "Comoros" },
  { label: "KN", value: "Saint Kitts and Nevis" },
  { label: "KP", value: "Korea, Democratic People" },
  { label: "KR", value: "Korea, Republic of" },
  { label: "KW", value: "Kuwait" },
  { label: "KY", value: "Cayman Islands" },
  { label: "KZ", value: "Kazakhstan" },
  { label: "LA", value: "Lao People's Democratic Republic" },
  { label: "LB", value: "Lebanon" },
  { label: "LC", value: "Saint Lucia" },
  { label: "LI", value: "Liechtenstein" },
  { label: "LK", value: "Sri Lanka" },
  { label: "LR", value: "Liberia" },
  { label: "LS", value: "Lesotho" },
  { label: "LT", value: "Lithuania" },
  { label: "LU", value: "Luxembourg" },
  { label: "LV", value: "Latvia" },
  { label: "LY", value: "Libya" },
  { label: "MA", value: "Morocco" },
  { label: "MC", value: "Monaco" },
  { label: "MD", value: "Moldova, Republic of" },
  { label: "ME", value: "Montenegro" },
  { label: "MF", value: "Saint Martin (French part)" },
  { label: "MG", value: "Madagascar" },
  { label: "MH", value: "Marshall Islands" },
  { label: "MK", value: "Macedonia, the Former Yugoslav Republic of" },
  { label: "ML", value: "Mali" },
  { label: "MM", value: "Myanmar" },
  { label: "MN", value: "Mongolia" },
  { label: "MO", value: "Macao" },
  { label: "MP", value: "Northern Mariana Islands" },
  { label: "MQ", value: "Martinique" },
  { label: "MR", value: "Mauritania" },
  { label: "MS", value: "Montserrat" },
  { label: "MT", value: "Malta" },
  { label: "MU", value: "Mauritius" },
  { label: "MV", value: "Maldives" },
  { label: "MW", value: "Malawi" },
  { label: "MX", value: "Mexico" },
  { label: "MY", value: "Malaysia" },
  { label: "MZ", value: "Mozambique" },
  { label: "NA", value: "Namibia" },
  { label: "NC", value: "New Caledonia" },
  { label: "NE", value: "Niger" },
  { label: "NF", value: "Norfolk Island" },
  { label: "NG", value: "Nigeria" },
  { label: "NI", value: "Nicaragua" },
  { label: "NL", value: "Netherlands" },
  { label: "NO", value: "Norway" },
  { label: "NP", value: "Nepal" },
  { label: "NR", value: "Nauru" },
  { label: "NU", value: "Niue" },
  { label: "NZ", value: "New Zealand" },
  { label: "OM", value: "Oman" },
  { label: "PA", value: "Panama" },
  { label: "PE", value: "Peru" },
  { label: "PF", value: "French Polynesia" },
  { label: "PG", value: "Papua New Guinea" },
  { label: "PH", value: "Philippines" },
  { label: "PK", value: "Pakistan" },
  { label: "PL", value: "Poland" },
  { label: "PM", value: "Saint Pierre and Miquelon" },
  { label: "PN", value: "Pitcairn" },
  { label: "PR", value: "Puerto Rico" },
  { label: "PS", value: "Palestine, State of" },
  { label: "PT", value: "Portugal" },
  { label: "PW", value: "Palau" },
  { label: "PY", value: "Paraguay" },
  { label: "QA", value: "Qatar" },
  { label: "RE", value: "Reunion" },
  { label: "RO", value: "Romania" },
  { label: "RS", value: "Serbia" },
  { label: "RU", value: "Russian Federation" },
  { label: "RW", value: "Rwanda" },
  { label: "SA", value: "Saudi Arabia" },
  { label: "SB", value: "Solomon Islands" },
  { label: "SC", value: "Seychelles" },
  { label: "SD", value: "Sudan" },
  { label: "SE", value: "Sweden" },
  { label: "SG", value: "Singapore" },
  { label: "SH", value: "Saint Helena" },
  { label: "SI", value: "Slovenia" },
  { label: "SJ", value: "Svalbard and Jan Mayen" },
  { label: "SK", value: "Slovakia" },
  { label: "SL", value: "Sierra Leone" },
  { label: "SM", value: "San Marino" },
  { label: "SN", value: "Senegal" },
  { label: "SO", value: "Somalia" },
  { label: "SR", value: "Suriname" },
  { label: "SS", value: "South Sudan" },
  { label: "ST", value: "Sao Tome and Principe" },
  { label: "SV", value: "El Salvador" },
  { label: "SX", value: "Sint Maarten (Dutch part)" },
  { label: "SY", value: "Syrian Arab Republic" },
  { label: "SZ", value: "Swaziland" },
  { label: "TC", value: "Turks and Caicos Islands" },
  { label: "TD", value: "Chad" },
  { label: "TF", value: "French Southern Territories" },
  { label: "TG", value: "Togo" },
  { label: "TH", value: "Thailand" },
  { label: "TJ", value: "Tajikistan" },
  { label: "TK", value: "Tokelau" },
  { label: "TL", value: "Timor-Leste" },
  { label: "TM", value: "Turkmenistan" },
  { label: "TN", value: "Tunisia" },
  { label: "TO", value: "Tonga" },
  { label: "TR", value: "Turkey" },
  { label: "TT", value: "Trinidad and Tobago" },
  { label: "TV", value: "Tuvalu" },
  { label: "TW", value: "Taiwan, Province of China" },
  { label: "TZ", value: "United Republic of Tanzania" },
  { label: "UA", value: "Ukraine" },
  { label: "UG", value: "Uganda" },
  { label: "US", value: "United States" },
  { label: "UY", value: "Uruguay" },
  { label: "UZ", value: "Uzbekistan" },
  { label: "VA", value: "Holy See (Vatican City State)" },
  { label: "VC", value: "Saint Vincent and the Grenadines" },
  { label: "VE", value: "Venezuela" },
  { label: "VG", value: "British Virgin Islands" },
  { label: "VI", value: "US Virgin Islands" },
  { label: "VN", value: "Vietnam" },
  { label: "VU", value: "Vanuatu" },
  { label: "WF", value: "Wallis and Futuna" },
  { label: "WS", value: "Samoa" },
  { label: "XK", value: "Kosovo" },
  { label: "YE", value: "Yemen" },
  { label: "YT", value: "Mayotte" },
  { label: "ZA", value: "South Africa" },
  { label: "ZM", value: "Zambia" },
  { label: "ZW", value: "Zimbabwe" },
];

function SerchJob() {
  const [country, setCountry] = React.useState("Select a location");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <img
        src={background}
        alt="Snow"
        style={{ width: "100%" }}
        className="background-imagejob"
      />
      <div className="centeredsearch">
        <div className="aligniconsinput">
          <div className="pinsearch">
            <img src={pin} className="imagespacer" />
            <p>Location</p>
          </div>
          <TextField id="standard-basic" placeholder="Job title " />
        </div>
        <div className="aligniconsinput">
          <div className="loupesearch">
            <img src={loupe} className="imagespacer" />

            <p>Search Job</p>
          </div>
          <TextField
            id="standard-select-currency"
            select
            value={country}
            onChange={handleChange}
            helperText="Please select location"
          >
            {countries.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                className="contryselector"
              >
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Button
          variant="contained"
          color="primary"
          className="searchbutton"
          href="/jobindex"
        >
          Search
        </Button>
      </div>
    </>
  );
}

export default SerchJob;
