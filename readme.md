--In Progress--

eacalls proof of concept

---

Matt Mannion's React App setup w/ Parcel and Sass.

run "setup" command to remove .gitkeep placeholders and .git. it will also do a "git init" and a "npm i" for you. hopefully this is a smooth start. [you may delete this script from package.json if you'd like]

new project checklist:

- adjust .gitignore
  -check the following files:

  - index.html
  - index.jsx
  - app.jsx
  - imports.scss [main scss file]

    - [file structure is mostly complete with empty folders ready for use]

    - [be sure to check the sass files in the folders utils and base to be sure they match your needs]

    - [NOTE] imports.scss has in its own folder to fix an intellisense bug where the path choosen by vscode is invalid at compilation. by having this file in its own folder [at the same level as the other folders] ensures proper intellisense for your files.

packages installed globally:
[install these with "npm i -D <pkg>" if you want them in your project locally]

- npm-run-all
  - using run-s [run all sequentially]
- parcel
- rimraf for clearing dist/ and .cache/ for a clean build each time.

this repo is for my personal use only and is a WIP at all times. use if you'd like but i'm not responsible for any bugs, or problems found therein. thanks.

options for parcel:d/:p:
[add at the end after file path]

- --open - opens window on server start
- --no-cache - creates no cache

- more to be added here
