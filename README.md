# README

Steps
Create App
Setup Database
Create Home#Index root
Adding FrontEnd dependencies
```
bundle add bootstrap
yarn add react-router-dom bootstrap jquery popper.js
```
Create ./Index
Create ./components/App
create ./components/Home/IndexHome
comment Turbolinks from application.js
remove turbolinks from application.html.erb

Debug setup
bundle add ruby-debug-ide --group development
bundle add debase --group development
>Launch.json add: 
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Rails server",
      "type": "Ruby",
      "request": "launch",
      "program": "${workspaceRoot}/bin/rails",
      "args": [
        "server"
      ],
      "cwd": "${workspaceRoot}",
      "useBundler": true
    }
  ]
}
```