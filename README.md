# How Old Is It?

A tool for recruiters to check how old a technology is.

Welcome to this non-exhaustive list of technologies and their approximate ages. I started this as a gentle dig at a subset of recruiters, and it has since been massively expanded upon by many contributors.

## Running the Project

Run `ruby build.rb` to update the HTML template from your list of technologies and view the site in your browser of choice.

## Adding a Technology

New technologies should be added to `technologies.json` in alphabetical order.

We're interested in:

* Programming languages such as Ruby or C++.
* Programming language frameworks such as Ruby on Rails or Laravel.
* Programming adjacent tools such as Kubernetes or TravisCI.

Check the list of [open issues](https://github.com/jsrn/howoldisit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) to see if anything strikes your fancy and submit a merge request.

All contributions are welcome, no matter how obscure the technology!

### How old is "how old?"

Sometimes it's difficult to determine the exact date a project was made publicly available. Sometimes there is a large gap between the public release and the "official" launch. If there is uncertainty over which date to pick when adding a technology, aim for the earlier of the two.

### Other contributions ⚠️

If you're interested in making a contribution other than adding or correcting a technology, please open an issue for feedback *before* you start. Changes that add new tooling dependencies or maintenance overhead probably won't be accepted without good reason. Thanks & sorry.

## Credits

* This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but is now generated HTML with a little JS to work the dropdown.
* A big thanks to [all of the contributors](https://github.com/jsrn/howoldisit/graphs/contributors) for massively expanding this beyond the tiny handful of technologies I had listed to begin with.
* Unreal Engine icon by iconscout on icons8.com

P.S. If you are a recruiter and you are reading this, obviously it is not *you* that we are poking fun at! Haha! Ha! Haa... please don't blacklist us from the industry.
