# Configry 

Configry is a config manager library for Javascript. It uses localStorage to store persistent configurations in the browser. Use it woth your favorite tool like browserify or get a precompiled bundle from bower.

# Configry is CommonJS version for captn3m0's [Configurator](https://github.com/captn3m0/Configurator)

## Install

```
$ npm install --save configry
```
or

Download source from `build/Configry.js` and include `Configry.js` in your html

`<script src="Configry.js"></script>`

## Usage

Create a config object. The constructor takes two parameters :

1. default: Object holding default configuration values
2. persistent: Array of key strings for persistent configuration.

```
var config= new Configry({sound:true,autoPlay:false,volume:60},['volume']);

//volume property will persist even after refreshes using localstorage.

//Set additional configuration options

config.set("shuffle",true,true);
```
## API

.set takes three parameters:

1. Key Name
2. Value
3. Persistent (true/false)

```
var shuffleState = config.get('shuffle');
//Will get the value of the config option.
```

### Localstorage clearing
Since Configry stores the persistent config information in localstorage, you cannot clear localstorage using localStorage.clear any more. Instead use `config.clearLS()` function to clear the localStorage. It will clear localstorage, and write the persistent config keys back into localStorage.

#Licence

Licenced under MIT Licence. Feel free to fork/use.

Configry is build for [SDSLabs Muzi](https://sdslabs.co.in/muzi), a music player application for the IIT-Roorkee Campus.