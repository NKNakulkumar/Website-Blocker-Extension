# Website Blocker Extension


## Overview

Hello this is an Website Blocker browser extension is a tool that helps users limit or block access to specific websites while browsing. It can be used to stay focused, avoid distractions, or restrict access to certain content.

## Features

- User Friendly Design
- Set Time Limit to the webite to block
- Unblock the webite
- Simple to use


## Screenshots

![App Screenshot](https://appletoolbox.com/wp-content/uploads/2019/08/3-easy-ways-to-block-websites-on-Ma.jpeg)


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

