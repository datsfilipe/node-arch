# node-arch

### Description

A structure with tests to avoid the necessity of a database when you want to figure out if the code you are writing works.

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
