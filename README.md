# D2TARA Self-Assessment Tool

The web-based tool is based on the D2TARA maturity model and is used for self-assessment of TARAs regarding the use of external data sources. 
The tool is available at https://d2tara.github.io/D2TARA/.

## Features
- On the left side of the application, the user performs a self-assessment of a TARA by answering questions about the use of external data sources for each data-driven TARA section. Additional questions are presented to the user only after the visible questions have been answered. The questions are used to determine the capability level (per data-driven TARA section).
- On the right side of the application, the achieved capability levels are visualized in a radar chart and the resulting overall TARA maturity level is displayed.

## Technical Details
The web app was developed (main branch) using 
- Angular v17.2.3 and Angular CLI v17.2.1
- Node v20.11.1
- Package Manager: npm v10.5.0
- typescript v5.3.3

Finally, the web app was deployed to GitHub Pages with angular-cli-ghpages (gh-pages branch) (see https://github.com/angular-schule/angular-cli-ghpages?tab=readme-ov-file).

## Additional Material
An overview of our standard pool of external data sources is provided as an Excel spreadsheet and screenshot in the materials folder. Please note that the data sources included are not exhaustive and can be expanded and customized to meet an organization's specific needs.
