# FP_Pourparler

This project can be used to display character sheet directly on the player's phone, instead of printing it, for the "Pourparler" RPG.
The main objective is to prevent character sheet lost, or destruction (by sitting on the sheet, grease stain, spelled beer ...)

# Installation

## Back Installation

1. Go to the "back" folder

```shell
cd .\back
```

2. Initialize node

```shell
npm i
```


3. Start Express JS server

```shell
npm start
```

## Front Installation

1. Go to PirateFP folder

```shell
cd .\PirateFP
```

2. initialize node

```shell
npm i
```

3. Install React Bootstrap

```shell
npm install react-bootstrap bootstrap@5.1.3
```
4. Go to `PirateFP\Components\Commons\ApiProvider\ApiProvider.jsx` and change the `apiAddress` variable to fit your computer's local IP address
Note: If you want to use the app on your computer only, you can use `http://localhost:8080/players` istead. 

5. Start the server :

```shell
npm start
```

6. Once expo-cli started, press 'w' to open the web client. 
