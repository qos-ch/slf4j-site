# slf4j-site

This repository contains the contents of [https://www.slf4j.org](https://www.slf4j.org) site.

# Build instructions

The site is copied more than built.

The command for "building" the site contents is:

    mvn install

This copies html files from `src/site/pages/` folder to `target/site/` folder, performing variable replacements along the way.

The local version of the website can then be navigated at
[target/site/index.html](target/site/index.html)
