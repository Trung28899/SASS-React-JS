1.  How does SASS works in this folder ?

    a. react_sass:

        - Wrote sass file in the /react_sass/src/styles and /react_sass/src/variables

        - css file got imported in react.js components (not scss file)

        - The CSS file got compiled from the SCSS by the Live Sass Compiler extension

    b. react_sass:

        - In this folder, we follow the component focused file structure where each component has
            its own scss file

        - This folder runs with node-sass so node-sass was installed

    b. How does node-sass works ?

        - node-sass automatically compile sass into css at runtime and at compiletime

2.  What is SASS ?

    - Syntatically Awesome Stylesheet. This is a powerful extension to CSS. Has been around for 15 years

    - Browsers doesn't understand SASS directly so you will need to use a set of tools to compile sass into css
