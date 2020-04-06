Concerning the http client, I chose the axios package and was hesitating between two structure:

1. an api folder where all the api codes are dealt with, and then called by the actions / the router
2. a http service that hides all the implementation details of axios but export the get, post, put, and delete methods as shown bellow

I went for the second structure. For now, calling an api function (1.) would be as code consuming as calling the http service (2.).
I found that the second structure was easier to use, but that is a personal choice.

export default {
get: axios.get,
post: axios.post,
put: axios.put,
delete: axios.delete
}
