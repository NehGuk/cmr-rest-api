# Chocolate Milk Review REST API

There are REST APIs for everything you can think of. Well, almost. This is a REST API documenting all the delicious (or not so much) chocolate milk drinks that I have tried over the last years. And variations as well. It also happens to be my first Typescript project.

**Tech stack:** Typescript + Node + Express

## Live URLs

- List of chocolate milk drinks: https://cmr-rest-api.fly.dev/api

### By query parameters

- `name`
- `countryOfOrigin`
- `rating`
- `containsCoffee`
- `isHotChocolate`

Examples:

- https://cmr-rest-api.fly.dev/api?countryOfOrigin=Denmark
- https://cmr-rest-api.fly.dev/api?countryOfOrigin=Italy&rating=3

### By ID

- `id`

Examples:

- https://cmr-rest-api.fly.dev/api/1
- https://cmr-rest-api.fly.dev/api/20
