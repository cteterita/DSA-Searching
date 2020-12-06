# 3. Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

*The Dewey Decimal system is a hierarchical structure where each digit provides an increasingly specific classification (and thus, location of a book). You can imagine this as a series of nested objects, each keyed by single digit. So, I would start with the first digit (say, 6 for technology), go to that section, and then move onto the next digit (say 3 for architechture) and continue until I find my book. This can be expressed recursively:
```js
function findBook(section, dewey, title) {
    // If the title is in the top level of the section, we've found it!
    if (section.indexOf(title) > -1) return section[title];
    // Otherwise, go to a more specific section and keep looking.
    return findBook(section[dewey[0]], dewey.slice(1), title);
}
```