---
id: thread-and-channel
title: Thread and Channel
---

Goby interpreter adopts Golang for language implementations, mainly for fully utilizing Golang's concurrency mechanisms. Thus Goby naturally equips thread and channel feature with the help of underlying Golang.

## Topics Related to Concurrency Programming

To understand more on concurrency programming, there are some resources we recommended you to read through it:
- [Concurrency is not Parallelism](https://www.youtube.com/watch?v=cN_DpYBzKso) by Rob Pike
- [Go's Concurrency Pattern](https://www.youtube.com/watch?v=f6kdp27TYZs) by Rob Pike
- [Introduction to Concurrency Models in Ruby Part (I)](https://engineering.universe.com/introduction-to-concurrency-models-with-ruby-part-i-550d0dbb970) on Medium by exAspArk
- [Introduction to Concurrency Models in Ruby Part (II)](https://engineering.universe.com/introduction-to-concurrency-models-with-ruby-part-ii-c39c7e612bed) on Medium by exAspArk

### Thread

Every Goby thread runs on a new goroutine. And unlike Ruby, there's **no** `Thread` class in Goby. To create a thread, just use thread method with a `do` - `end` block:

```ruby
thread do
  # Write whatever you want to do
end
```

Goby's do - endblock is transparent for variables and it is possible to access variables across the thread block:

```ruby
i = 0

thread do
  i += 1
  puts(i) #=> 1
end
```

This is convenient for manipulating data in many cases, but can cause some problems. You should avoid something like:

```ruby
i = 0

1000.times do
  thread do    # avoid creating many threads repeatedly
    i += 1
  end
end

puts(i)
```

or

```ruby
i = 0     
thread do
  i += 1        # avoid non-Channel variables for communicating outside
end

i += 1
i
```

## Channel

To communicate between threads, we need to use Channel object to do that. Channel object has two methods: `#deliver (passing object)` and `#receive (receiving object)`

```ruby
c = Channel.new

thread do
  c.deliver 10
end

puts(c.receive) #=> 10
```

And Goby's `Channel` inherits Go channel's blocking behavior, so you can use it to do flow control

```
c = Channel.new

i = 0
thread do
  i += 1
  c.deliver(i)
end

c.receive
i += 1 # This will not execute until the thread ends
i
```

But unlike Go's channel has type restriction, Goby's channel can pass everything. So it's possible to process one thing in other thread and send it back to main thread.

```
class Foo
  def bar
    100
  end
end

c = Channel.new

thread do
  f = Foo.new
  c.deliver(f)
end

puts(c.receive.bar) #=> 100
```
