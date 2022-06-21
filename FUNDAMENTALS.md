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

3.  SASS syntax & formats:

    - Format: there are 2 types of files extension in SASS:
      +, .sass
      +, .scss

    - .sass:
      +, Syntax in .sass is not very poplular
      +, No semi colon and no curly bracket
      +, Meaningful white space

    - .scss:
      +, Syntax in .scss is the most popular because it is compatible with css

4.  SASS Fundamentals:

    - SASS variables:

      +, Global scope: variables can be declared at the top level file and can be accessed
      in the whole folder

      +, Local Scope: variables declared within the curly braces have local scope with
      that curly braces

      +, Shadowing: when there are 2 variables with the same name,
      the local variable is prioritized to be the value to be used of a property

      +, You can also use this syntax to re-define a local variable to be a
      global variable. For example:

      $primary-color: yellow !global;

      +, In SASS, the underscore sign ('\_') is the same sign as the hyphens (-).
      So these 2 variables are the same variables:

      $primary-value: black; 
      $primary_value: blue;

    - SASS Nesting:

      +, In SASS you can nest styling within a parent styling

    - Partials
