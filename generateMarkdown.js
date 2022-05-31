// TODO: Create a function that returns a license badge based on which license is passed in
const licenses = [
  {
    name: 'Apache 2.0 License',
    badge: `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
    link: `(https://opensource.org/licenses/Apache-2.0)`
  },
  {
    name: 'BSD 3-Clause License',
    badge: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    link: '(https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
    name: 'BSD 2-Clause License',
    badge: '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)',
    link: '(https://opensource.org/licenses/BSD-2-Clause)'
  },
  {
    name: 'Attribution 4.0 International',
    badge: '![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by/4.0/)'
  },
  {
    name: 'Attribution-ShareAlike 4.0 International',
    badge: '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by-sa/4.0/)'
  },
  {
    name: 'Attribution-NonCommercial 4.0 International',
    badge: '!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by-nc/4.0/)'
  },
  {
    name: 'Attribution-NoDerivates 4.0 International',
    badge: '![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by-nd/4.0/)',
  },
  {
    name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
    badge: '![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by-nc-sa/4.0/)'
  },
  {
    name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
    badge: '![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)',
    link: '(https://creativecommons.org/licenses/by-nc-nd/4.0/)'
  },
  {
    name: 'Eclipse Public License 1.0',
    badge: '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)',
    link: '(https://opensource.org/licenses/EPL-1.0)'
  },
  {
    name: 'GNU GPL v3',
    badge: '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
    link: '(https://www.gnu.org/licenses/gpl-3.0)'
  },
  {
    name: 'GNU GPL v2',
    badge: '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
    link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  },
  {
    name: 'GNU AGPL v3',
    badge: '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)',
    link: '(https://www.gnu.org/licenses/agpl-3.0)'
  },
  {
    name: 'GNU LGPL v3',
    badge: '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)',
    link: '(https://www.gnu.org/licenses/lgpl-3.0)'
  },
  {
    name: 'GNU FDL v1.3',
    badge: '![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)',
    link: '(https://www.gnu.org/licenses/fdl-1.3)'
  },
  {
    name: 'IBM Public License Version 1.0',
    badge: '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)',
    link: '(https://opensource.org/licenses/IPL-1.0)'
  },
  {
    name: 'The MIT License',
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: '(https://opensource.org/licenses/MIT)'
  },  
  {
    name: 'Mozilla Public License 2.0',
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    link: '(https://opensource.org/licenses/MPL-2.0)'
  },  
  {
    name: 'Attribution License (BY)',
    badge: '![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)',
    link: '(https://opendatacommons.org/licenses/by/)'
  },  
  {
    name: 'Open Database License (ODbL)',
    badge: '![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)',
    link: '(https://opendatacommons.org/licenses/odbl/)'
  },  
  {
    name: 'Public Domain Dedication and License (PDDL)',
    badge: '![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)',
    link: '(https://opendatacommons.org/licenses/pddl/)'
  },
  {
    name: 'The Perl License',
    badge: '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'The Artistic License 2.0',
    badge: '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)',
    link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    name: 'The zlib/libpng License',
    badge: '![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)',
    link: '(https://opensource.org/licenses/Zlib)'
  } 
];
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  licenses.forEach(li => {
    if (license === li.name) {
      badge = li.badge;
    }
  });

  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;

  licenses.forEach(li => {
    if (license === li.name) {
      link = li.link;
    }
  });
  
  return link;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let liStr;

  licenses.forEach(li => {
    if (license === li.name) {
      liStr = `
  ## License
  [${license}]${renderLicenseLink(license)}
`
    }
  });

  return liStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){

  const mdText = `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.desc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.contributers}
  ${renderLicenseSection(data.license)}
  ## Tests
  
  ${data.tests}
  
  ## Questions
  If you have any questions, visit https://github.com/${data.github} and send me a message!
` 
  
  return mdText;
}


module.exports = {generateMarkdown, licenses };
