# I-UPS Website
Website for the Inter-University Pokémon Society.

Copyright (C) 2022 Inter-University Pokémon Society, All Rights Reserved.

This code, including all its content are protected by copyright. Any unauthorised copying or modification is prohibited.

## Contribution
Contribution is only open to members of the I-UPS with prior approval from a Social Media Officer of Comté. Please ask in the Discord for more information. Contributors must have a reasonable level of experience with HTML, CSS, JavaScript and React. All contributions will have to go through pull requests and will only be approved if of appropriate standard.

## Branches
- ```Main``` is for production only and will trigger a Cloudflare Pages build when any pushes are made.
- ```Develop``` is for the develop environment where new features and fixes are combined to be made ready for release.

Additional Branches:
- ```Feature/``` branches are for new additions to the application that are NOT fixes, they should be descriptively named.
- ```Fix/``` branches are for bug fixes and should be named briefly describing what fixes they include.

Additional branches MUST begin with either of the two above prefixes, any branches that do not will be immidiately deleted.

Please use underscores to seperate longer branch names so that they are easier to read.

## Pre-requisites
- NPM.
- Node.js.

## Setting Up
1. Install Gatsby: ```npm install --global gatsby-cli```
2. Install modules: ```npm install```.
3. Log into the I-UPS Supabase and get the database's Public Anon Key.
4. Create .env.production file in the project's root directory and add: ```GATSBY_PUBLIC_SUPABASE_ANON_KEY='<PLACE KEY HERE>'```.
5. Start the website by running: ```gatsby develop```.
6. The site is now running at http://localhost:8000.
7. Stop the site with control + c.
