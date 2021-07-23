# Dischat project

Personal project about making chat app that
did not require login and chat history will
be deleted in one hour after inactivity

> note : last part hasn't been implemented

## To run :
IMPORTANT NOTE : change db password

Make sure docker and docker-compose is installed
If docker-compose is not installed run container
based on the docker-compose.yml

Clone three repo in the same folder :
```shell
git clone https://github.com/Imam-f/dischat
git clone https://github.com/Imam-f/dischat_backend
git clone https://github.com/Imam-f/dischat-db
```

Install npm
Install dependency
Build the front end
Rename dischat_db into dischat_database

Then run :
```
docker-compose up -d --build
```

Then open :
```
http://localhost:8080
```