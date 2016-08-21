
# Candoia app: Lists number of developers responsible for fixing bugs in each module

This app Lists number of developers reposnsilbe for bug fixing in modules as bar chart and table.

To run, add this app to your Candoia installation.


## Structure of this directory

* main.html: describes visual layout of the app pane in the platform
* main.js: contains glue code for interaction
* critical-dev.boa.boa: contains MSR logic
* package.json: metadata about the app


Some possible customizations:
1. Finding number of developers for critical files.
   (Critical files are finles in which bug fixing process is relatively long)
