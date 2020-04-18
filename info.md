# Layout

    - Using a plugin called gatsby-plugin-layout.  I was having some issues with context (I think) that this plugin solved. It propogates the layout file as (definined in gatsby.js) all over the whole project.

# Text Inside Grid (for work and blog)

    - Styled Grid Item
        - Take a look at StyledTitle and StyledTitleText

# Work and Blog

    - It starts in project.js inside the templates folder
    - Then it goes to ProjectsContainer.js
    - All the content is props.children of ProjectsContainer
    - The Banner image is rendered on ProjectsContainer.js

# Text on work pages

    - Most of this is found in StyledHtml.js
    - Title text is StyledHOne
    - Small text under image is StyledImageText

# Global Style

    - all is found in GlobalStyle.js
    - base font size is set to 10px, that well you can set rem as multiples of 10.

# Banner Images (for work and blog)

    - Mostly found in ProjectsContainer.js
    - Some styles are in that file, including StyledHeroContainer, which holds the margins at the bottom.
    - Because some header images are gifs, gatsby-image can't be used for all header images.  There is a small function within ProjectsContainer.js to render either StyledHero, an Img component, or StyledHeroImg, which is just a regular img tag.

# Nav Context

    - Lives in a file, contexts/navContext.js
    - Kind of a weird setup, but I think it works.
    - NavBar.js holds the context, and uses render props to lay it out.

# Nav Links

    - NavLinks.js
    - After that, NavLink.js
    - Logo is in NavBar.js, but the style is in StyledNavBar.js
