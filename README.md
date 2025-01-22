# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Project

## Server Back-end

Use JSON Server -> Mock API

touch `db.json`

```json
{
  "pets": [
    {
      "name": "Buddy",
      "age": 3,
      "breed": "Golden Retriever"
    },
    {
      "name": "Whiskers",
      "age": 5,
      "breed": "Siamese Cat"
    },
    {
      "name": "Luna",
      "age": 2,
      "breed": "Persian Cat"
    },
    {
      "name": "Max",
      "age": 7,
      "breed": "German Shepherd"
    },
    {
      "name": "Bella",
      "age": 1,
      "breed": "Beagle"
    }
  ]
}
```

Inside `package.json`

```json
"scripts": {
   "db": "json-server db.json",
}
```

In seperate terminal -> `npm run db`

You need to keep 2 terminals -> vite (`npm run dev`)

## Planning your Project

1. idea -> have a pet store
2. stories -> CRUD pets
3. Bruno / Postman-> collect URLs from API
4. wireframe -> Components
   1. Page (/src/pages) -> Component (/src/components)
   2. inside page -> nested components
   3. RESTful url -> page

### URLs

- /pets -> AllPetsPage (PetList)
- /pets/:petId -> OnePetPage
- /pets/new -> NewPetPage
- /pets/:petId/edit -> EditPetPage

Do this using react-router/ setup debug
