---
id: easy-json-rendering
title: Easy JSON Rendering
---

In Goby, you don't need `jbuilder` or other json template library. All you need is `Hash#to_json`.

For example:

```ruby
h = { a: 1, b: [1, "2", [4, 5, nil]]}
h.to_json #=> {"a":1, "b":[1, "2", [4, 5, null]]}
```

Furthermore, you can customize the serialization rule by overwriting `#to_json` in your class:

```ruby
class JobTitle
  def initialize(name)
    @name = name
  end

  def to_json
    { title: @name }.to_json
  end
end

class Person
  def initialize(name, age)
    @name = name
    @age = age
    @job = JobTitle.new("software engineer")
  end

  def to_json
    { name: @name, age: @age, job: @job }.to_json
  end
end

stan = Person.new("Stan", 23)
h = { person: stan }
h.to_json #=> {"person":{"name":"Stan","job":{"title":"software engineer"},"age":23}}
```
