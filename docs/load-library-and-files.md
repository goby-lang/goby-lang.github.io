---
id: load-library-and-files
title: Load Library and Files
---

### Loading Standard Libraries

Just use `#require` method:

```ruby
require("uri")

u = URI.parse("http://example.com")
u.scheme   #=> "http"
```

### Loading Third-party Libraries

Haven't support this yet, WIP

### Loading Other Files

You can use `#require_relative`

```ruby
require_relative("bar")  # loading the ./bar.gb

class Foo
  def self.bar(x)
    Bar.foo do |ten|
      x * ten
    end
  end

  def self.baz
    yield(100)
  end
end
```
