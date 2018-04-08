---
id: tips-tricks
title: Tips & Tricks
sidebar_label: Tips & Tricks
---

## REPL

* You can use all the "readline" operations, like pressing `↑` key to go back history.

* You can copy the code on REPL with heading `»` or `¤` and paste it to REPL again. The redundant headings are automatically removed.

```ruby
» module MyName
¤   attr_reader :name
¤
¤   def initialize
¤     @name = self.class.to_s
¤   end
» end

# copying the codes with headings and pasting to REPL↓

» module MyName
¤   attr_reader :name
¤
¤   def initialize
¤     @name = self.class.to_s
¤   end
» end
```