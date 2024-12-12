After connect DB migration is a 
Migration 1 :

**Users** Table

- *username (column)*

- *password (column)*


`How would we know we are connect to the correct database? `

`How can we validate?`

Migration 2 : 
**Users** Table

- *email (column)*

Install knex in global package
```bash
npm install -g knex
```
and using knex to create knexfile.ts 
```bash
knex init -x ts
```

Create a new file called `knexfile.ts`
