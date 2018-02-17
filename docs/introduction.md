---
id: introduction
title: Introduction
sidebar_label: Introduction
---

**Goby** is an object-oriented interpreter language deeply inspired by **Ruby** as well as its core implementation by 100% pure **Go**. Moreover, it has standard libraries to provide several features such as the Plugin system. Note that we do not intend to reproduce whole of the honorable works of Ruby syntax/implementation/libraries.

One of our goal is to provide web developers a sort of small and handy environment that mainly focusing on creating **API servers or microservices**. For this, Goby includes the following native features:

- Robust thread/channel mechanism powered by Go's goroutine
- Builtin high-performance HTTP server
- Builtin database library (currently only support PostgreSQL adapter)
- JSON support
- [Plugin system](https://goby-lang.gitbooks.io/goby/content/plugin-system.html) that can load existing Go packages dynamically (Only for Linux by now)
- Accessing Go objects from Goby directly
