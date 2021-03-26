---
title: "Installation Instructions"
date: "2021-03-16"
featuredImage: ../images/chairs.jpg
blogstyle: "3"
description: "Overview+guide to start developing a similar website "
---
<br>

Hi Jerry,

Sorry for taking longer than what I initially said.

These are the instructions to get this site up and running:

**0. Brief overview of websites, and this one in particular:** <br>

They're made with three types of files: <br>
-- HTML (barebones structure of the website.) <br>
-- CSS ("Styles". Defines font families, colors, etc) <br>
-- JS (adds extra functionality to website) <br>

Stack of technologies in this specific project: <br>
-- React ("frontend" framework which lets you make components that combine js with html and css) <br>
-- Gatsby.js ("static site generator" - simplifies development and publishing of react projects) <br>
-- Node (Backend technology, allows react and gatsby to run and do their thing)


**1. Things to downoad and install:**<br>
-- download node (version doesnt matter) and git. follow these instructions https://www.gatsbyjs.com/docs/tutorial/part-zero/<br>
-- download vs code https://code.visualstudio.com/ (where you will code/edit code)<br>

**2. Copy example project from github**<br>
-- Open vscode <br>
-- open a terminal console <br>
<img src="../images/open_terminal.PNG"></img>
-- enter > mkdir "name of a folder where you want to copy project files"<br>
*note: mkdir is short for make directory*
<img src="../images/mkdir.png"></img>
-- enter > cd testfolder <br>
*note: cd is short for change directory* <br>
<img src="../images/cdtestfolder.PNG"></img>
-- enter > git clone https://github.com/royjara/gatsbyportfolio.git <br>
*- if this doesnt work, try using bash instead of powershell: https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal*
<img src="../images/cdandgitclone.PNG"></img>


**3. Use node to install every other thing that's needed to run project**<br>
-- enter > cd gatsbyportfolio <br>
-- once inside the project directory, run > npm install <br>
-- install gatsby-cli (command line interface) by running > npm install -g gatsby-cli <br>

**4. Start development server**<br>
-- if above commands worked, enter > gatsby develop<br>
-- This will launch your own website in http://localhost:8000 where you can see the changes you make<br>
-- when you want to stop the server just input ctrl+c in the terminal

**5. Publishing the website with surge**<br>
-- Detailed instructions: https://www.gatsbyjs.com/docs/deploying-to-surge/ <br>

---

### Writing posts ###

After succeessfully running the development server, building the website, and publishing it with surge, try making your own posts.

Gatsby is running a website generator that converts markdown files into web pages. <br>
All you have to do is create a new markdown file in ./src/pages/ <br>
e.g. this page ./src/pages/installation.md is a markdown file that was converted into a webpage <br>

 

---
## Some notes ##

There are some bugs but for now I think it works ok for its purpose.<br>

The current main bug is that you need to include a featured image for every markdown page. <br>

I will continue working on the template and later with git you will be able to get my updates. I will try to remove any hardcoded data in the template, so that in the future you can just get the updates without worrying about any data or style that might get overwritten. <br>

Please send me your suggestions for any extra features you want. Also, share any bugs with me so that I can fix them.

lmk if you have any questions or need any help.

cheers,

Roy

