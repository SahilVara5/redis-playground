# 1.1 Setup Redis

- Pull the image from docker

```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

- Run the following command to check running images

```
docker ps
```

- Copy the id or first column's value to get the id of your running redis-stack image

# 1.2 Setup Project with cloning this repository

- open your visual studio code from your cloned repo directory from your local machine

- inititalize the backend project with following commands

```
npm i
```

- now run this command to get output

```
node server.js
```