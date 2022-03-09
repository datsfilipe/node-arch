# node-arch

### Description

An structure with tests to avoid the necessity of a database when trying to figure out if the code you are writing actually works.

### Project Tree (only dirs)

* [src](./src)
  * [application](./src/application)
    * [repositories](./src/application/repositories)
    *// our repositories for the entire app*
    * [usecases](./src/application/usecases)
    *// our use cases with their respective tests*
  * [core](./src/core)
    * [domain](./src/core/domain)
    *// Entity basis for other entities*
  * [domain](./src/domain)
    * [entities](./src/domain/entities)
    *// entities for the entire app*
  * [tests](./src/tests)
    * [repositories](./src/tests/repositories)
    *// in-memory repositories to use in tests*
    
    


**Replicating an structured app prototype from Rocketseat content on YT called DECODE.**
