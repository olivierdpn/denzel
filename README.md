# DENZEL

> The must-watch Denzel's movies



<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## 📚 Report 

**REST API** are available in Back-Denzel\connectionMango.js.

**GraphQL** is in BACK-Denzel\GraphQL.js.

**Client Side** is in FRONT-Denzel.

## 🎯 Objectives

**Build a REST and GRAPHQL API to get the must-watch Denzel's movies**.


### REST endpoints to implement

#### `GET /movies/populate`

Populate the database with all the [Denzel's movies from IMDb](https://www.imdb.com/name/nm0000243).



#### `GET /movies`

Fetch a random **must-watch** movie.

#### `GET /movies/:id`

Fetch a specific movie.

#### `GET /movies/search`

Search for Denzel's movies.

This endpoint accepts the following optional query string parameters:

* `limit` - number of movies to return (default: 5)
* `metascore` - filter by metascore (default: 0)



#### POST /movies/:id

Save a watched date and a review.

This endpoint accepts the following post parameters:

* `date` - the watched date
* `review` - the personal review

### GraphQL endpoints to implement

Same definitions as REST API with `/graphql` endpoint.

* Populate the database
* Fetch a random **must-watch** movie
* Fetch a specific movie
* Search for Denzel's movies
* Save a watched date and a review.


### Bonus - The Client side

Build a client side web application.

The MVP definiton could be:

Each time, we open the web application or refresh the page, fetch a random **must-watch** movie and

* display the title
* display the synopsis
* display the cover
* display the metascore
* display the review
* allow to open the IMDb record


