# coursedb
## NUAA_IoT专业_2024春季学期_数据库课设

本项目全部使用 Rust 语言编写，可作为一个小型 Rust 全栈开发案例参考，数据库使用 PostgreSQL.

项目启动流程:

首先在云数据库中执行 [db.sql](./sql/db.sql) 中的SQL语句，然后进入 `./webservice` 目录下，执行
```sh
cargo run
```
即可启动web服务.

接下来，新建一个终端，进入 `./webapp` 目录下，执行
```sh
cargo run
```
即可启动教师客户端，这时可以打开浏览器，访问 `http://localhost:8080/` 地址，即可查看教师页面
，同时支持新增教师的功能.

关闭 `./webapp` 中的进程，进入 `./wasm-client` 目录下，首先执行
```sh
wasm-pack build
```
然后进入 `./wasm-client/www` 目录下，执行
```sh
export NODE_OPTIONS=--openssl-legacy-provider
npm install && npm run start
```
即可启动课程客户端，这时可以打开浏览器，访问 `http://localhost:8080/` 地址，即可查看课程页面
，同时支持新增课程与删除课程的功能.

也可以在 `\pub` 目录下直接启动相应的程序.
* 启动 web 服务
  ```sh
  # 设置临时环境变量
  # export DATABASE_URL=postgres://username:password@host:port/database_name
  ./teacher-service
  ```
* 启动教师客户端
  ```sh
  export HOST_PORT=127.0.0.1:8080
  ./svr
  ```
* 启动课程客户端
  ```sh
  # 为避免与教师客户端冲突，选择手动设置端口，这里以8081为例
  # http-server ./dist -p <port>
  http-server ./dist -p 8081
  ```