# lab-nestjs
Some experiments and code snippet with nest js

## Request example

Create a new equity:

```shell
curl -H "Content-Type: application/json"  -d '{"symbol":"ENGI", "categories": ["industrial"]}' --request POST http://localhost:3000/equities
```

Get the list of equities:

```shell
curl http://localhost:3000/equities
```