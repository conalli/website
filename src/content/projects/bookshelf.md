---
# draft(false), title, description, url?, repository, logo?, video?, image: src, alt?, stack,
title: Bookshelf
description: Smart bookmarking app for bookmark efficiency across browsers/devices.
url: https://bookshelf.conalli.info
repositories:
    - name: frontend
      url: https://github.com/conalli/bookshelf-web
    - name: backend
      url: https://github.com/conalli/bookshelf-backend
video: https://www.youtube.com/embed/oM3EIXl4G5g
stack: [Typescript, Next.js, Tailwind CSS, Go, Mongo DB, Redis, Docker]
---

### Motivation

Users can save bookmarks and shortcuts to bookmarks in order to reduce wasted time when frequently using many different bookmarks.

Bookshelf then utilises the browsers in-built custom search engine to redirect to the Bookshelf server whenever the shortcut is used.

Making use of the custom search engine, Bookshelf also includes a CLI like tool for managing bookmarks more efficiently in the url bar.
