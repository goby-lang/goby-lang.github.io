---
id: simple-server
title: SimpleServer
---

## Getting Started

To use the built-in HTTP server, you need to include the `net/simple_server` library in your Goby file.

```ruby
require 'net/simple_server'
```

To create an instance of the simple server, use the class Net::SimpleServer and then specify the port number.

```ruby
server = Net::SimpleServer.new(3000) # Create a server instance with port 3000
```

Goby's simple server support for different kinds of HTTP verb including the `GET`, `POST`, `PUT`, `PATCH`, `DELETE` actions which enables you to create simple RESTful application.

Let's say we want to create a root path with a GET action:

```ruby
server.get "\" do |request, response|
  response.status = 200
  response.body   = 'Hello Visitor!'
  response.set_header('Content-Type', 'text/plain')
end
```
You can see that we can **specify our route** and **pass in whatever kind of HTTP verbs** as a method of the server instance. It provides the `Net::HTTP::Request` and the `Net::HTTP::Response` objects to help you construct the response of the request.
In the example code above, the status of the response is specified as 200 and the content is the string provided to the body of the response. Notice that to set the header, we use the `Net::HTTP::Response#set_header` method instead of passing a hash like object to set the response header.
After you've set all of the routings, the you can simply start the server using the `Net::HTTP::SimpleServer#start` method.

```ruby
server.start # Start the HTTP simple server in port 3000
```

Put them all together:

```ruby
require 'net/simple_server'

server = Net::SimpleServer.new(3000) # Create a server instance with port 3000

server.get('\') do |request, response|
  response.status = 200
  response.body   = 'Hello Visitor!'
  response.set_header('Content-Type', 'text/plain')
end

server.start # Start the HTTP simple server in port 3000
```

And now you can go visit http://localhost:3000/ to see the server saying hi to you!
