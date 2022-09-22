# Floating GitHub Link
This is a stylesheet to display a floating button that redirects you to my GitHub page (or any other page).

![demo gif](https://media.giphy.com/media/2TRnGpVCHcB6fGj2CC/giphy.gif)
>This was my old username.

## Features

The JS file checks if the necessary resources are already included, otherwise it will link them automatically. Therefore, I just need to include one script.

+ **White** or **Black** theme.

+ It lowers the opacity when the mouse hovers out to improve visibility.

+ External resources:
    * "Font Awesome 6 Brands" icon library.
    * "Source Sans Pro" Google font.

## Usage
- Include the following `<script>` tag at the bottom of the HTML head:
```html
<script src="https://cdn.jsdelivr.net/gh/cernikkk/floating-github-link@main/github-link.js"></script>
```

- Apply the style to an empty `<a>` tag with `class="github-link"`.
- Select the color with `class="white-icon"` or `class="dark-icon"`. (If not specified, it will default to white.) 
- As a bonus, it sets `target="_blank"` if not declared.

## See it in action!
These are some of my projects that include it:
- [calculator](https://github.com/cernikkk/calculator)
- [tic-tac-toe](https://github.com/cernikkk/tic-tac-toe)
- [library](https://github.com/cernikkk/library)

***And that's all, I didn't end up using it much...***
