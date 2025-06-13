# Block Box  Extension 


## Overview

Hello this is an Website Blocking browser extension is a tool that helps users limit or block access to specific websites while browsing. It can be used to stay focused, avoid distractions, or restrict access to certain content.

## Features 

- User Friendly Design
- Set Time Limit to the webite to block
- Unblock the webite
- Simple to use and Very clean UI


## Screenshots

![App Screenshot](https://www.codester.com/static/uploads/items/000/030/30366/icon.png)


## Tech Stack

**Client:** HTML,CSS,JavaScript.

**Backend:** ChromeStorage.API.
## Contributing

Contributions are always welcome!

See `readme.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Usage/Examples

```JavaScript
 {
  "manifest_version": 3,
  "name": "Website Blocker",
  "version": "1.0",
  "description": "Block specified websites after a time limit.",
  "permissions": [
      "storage",
      "tabs",
      "declarativeNetRequest",
      "declarativeNetRequestFeedback"
  ],
  "background": {
      "service_worker": "background.js"
  },
```

