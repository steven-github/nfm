# RUN

1. npm install
2. ng serve

# Introduction

    Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

# Getting Started

1. Installation process
   After cloning the project make sure to run first - npm install
2. Software dependencies
   a. NodeJS Latest LTS version
   b. NPM 6.14.15
   c. ng (latest version represents angular version)
3. Latest releases
4. API references

# Build and Test

    Commands and their purposes, you should run them in command prompt with no quotes.

1. Run locally - "ng serve --open"
2. To run Jasmine tests - "ng test"
3. To build a project - "ng build"

# Generating Components

    Instructions on generating components

1. When generating new components make sure to follow Component Creation Guidelines (discribed below)
2. ng g component component-name NOTE: If you get an error with message "More than one module matches...) add this to end of the command --> --module=module.name.ts
3. Highly recommended to use an extension to generate components, services or modules. ex: Angular Schematics

# DOs and DON'Ts

    Following guidelines are DOs and DON'Ts for generating compnonents in this project.

1. DO - Use cli command line or use VSCode extensions called Angular Schematics
2. DO - Ensure your newly generated component is under app folder within its own folder ex: project-name/src/app/component-folder
3. DO - Ensure your module is updated and includes newly generated component, otherwise Angular won't compile the component.
4. DO - Ensure your component folder contains .html, .scss, .ts .spec
5. DON'T - Manually create files.
6. DON'T - Keep html code in TS file inside the template

# Extentions Recommended/Must Haves

    Extensions to help with productivity. LV = Latest version, LVM - Latest version must match with your teammates, *MH - must have, *RC - recommended

1. Angular Language Service - LV \*MH
2. Angular Schemantics - LV \*MH
3. Angular Snippets - LV \*MH
4. Prettier - LVM \*MH
5. Auto Rename Tag \*RC
6. Smooth Type \*RC
7. TODO Highlight \*RC
8. Turbo Console Log LV \*MH
9. VSCode simpler Icons with Angular \*RC

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)#   n f m 
   
   
