# mini-yelp-backend

## Table of contents

-[GET all hospitals](https://yelpbackend.herokuapp.com/api/hospitals/) -[GET a single hospital by id](https://yelpbackend.herokuapp.com/api/hospital/:id)

### GET all hospitals

| URL                                              | Method |
| ------------------------------------------------ | ------ |
| https://yelpbackend.herokuapp.com/api/hospitals/ | `GET`  |

Returns all the hospitals in the database.

### GET a single hospital by id

| URL                                                | Method |
| -------------------------------------------------- | ------ |
| https://yelpbackend.herokuapp.com/api/hospital/:id | `GET`  |

Returns a single hospital by id

### GET a single hospital by search

| URL                                                                 | Method |
| ------------------------------------------------------------------- | ------ |
| https://yelpbackend.herokuapp.com/api/hospitals/search/[SEARCH_WORD | `GET`  |

Returns a single hospital

**Example posting data**

{
"name": "Waldkrankenhaus",
"address": "Friedrischshtrasse 13",
"city": "Berlin",
"description": "Discription regarding the following krankenhaus",
}
