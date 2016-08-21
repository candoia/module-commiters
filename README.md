
# Candoia app: Top 20 buggy files

This app Lists 20 most buggy files as bar chart and table.

To run, add this app to your Candoia installation.


## Structure of this directory

* main.html: describes visual layout of the app pane in the platform
* main.js: contains glue code for interaction
* bug-src-mapper.boa: contains MSR logic
* package.json: metadata about the app


Some possible customizations:
1. Finding issues details like fixing time, number, developer etc for the app.
2. Finding number of weeks taken to fix bugs is availbale at: https://github.com/candoia/critical-file-bug-mapper
