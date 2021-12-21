### GET
1. Response code is 200
2. Response Body has ID, title, description, excerpt, publishDate
3. Response Body type
ID - int
description, title, exceprt - string

### GET by ID
1. Get Book with valid Id 
```
Response Code: Response Code: 200 - Success
Response Body
{
  "id": 1,
  "title": "Book 1",
  "description": "Et magna dolores nonumy facer in ipsum no dolor ...",
  "pageCount": 100,
  "excerpt": "Eu veniam sed facilisi euismod et. Duis eirmod no....",
  "publishDate": "2021-12-19T03:03:08.5713209+00:00"
}
```
2. Get book with non-existing ID
- maybe a message here that shows "Invalid ID" 
```
Response Code: Response Code: 404 - Not Found
Response Body
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.4",
  "title": "Not Found",
  "status": 404,
  "traceId": "00-c724d3034347d5448564103b77f6dc9f-37e702dbc459fb43-00"
}
```
3. Verify Status code when ID is invalid type - example "String"
```
Response Code: 
Response Body:
```


### POST
1. Add Book with valid information - Response Code: 200 - Success
```
{
  "id": 500,
  "title": "Book1",
  "description": "Book 1 description",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```

2. Add Book with existing ID - Response Code: 200 - Success
```
{
  "id": 500,
  "title": "Book1",
  "description": "Book 1 description",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```
3. Add Book with incomplete information, No ID
```
{
  "title": "Book1",
  "description": "Book 1 description",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```

4. Add Book with incomplete information, No title
```
{
  "id": 500,
  "description": "Book 1 description",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```
5. Add Book with incomplete information, No description
```
{
  "id": 500,
  "title": "Book 1",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```
6. Add Book with incomplete information, No pageCount
```
{
  "id": 500,
  "title": "Book 1",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1",
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```

7. Add Book with incomplete information, No excerpt
```
{
  "id": 500,
  "title": "Book 1",
  "description": "Book 1 description",
  "pageCount": 0,
  "publishDate": "2021-12-20T02:57:20.952Z"
}
```
8. Add Book with incomplete information, No publishDate
```
{
  "id": 500,
  "title": "Book1",
  "description": "Book 1 description",
  "pageCount": 0,
  "excerpt": "Excerpt for book 1"
}
```

### PUT 
### DELETE
1.	Delete a User
    - Delete an existing user: Code 200 > check deleted user by ID
    - Delete a non-existing user: Code 200
 
End to End
1. Get all user, get the first user ID on the response
2. Get user by ID - success
3. Update user by ID
4. Delete user by ID
5. get user by ID - not success
