# omni-stack-8 (Tindev)
OmniStack Week (8) by: RocketSeat

## Dependencies to run this project:

###  NodeJs 
Ps: You'll need [NodeJs](https://nodejs.org/en/download/) to run this project.

---

### First, clone project in your PC:

```shell
git clone https://github.com/betodoescher/OmniStack-8.git
cd OmniStack-8
```

---

## BackEnd (NodeJs)
```shell
cd backend
yarn dev
```
Wait all dependencies install in `/node_modules`, after finish just run:
```
yarn start
```


ToDo list (BackEnd):
- [ ] Fix bug in /devs, if don't have deslikes || likes will crash list

---

## FrontEnd (ReactJs)

Visual:  
![Demo do Tinder Dev](doc/image_2019-08-10_17-54-39.png)  

Start 
```shell
cd frontend
yarn install
```  
Wait all dependencies install in `/node_modules`, after finish just   
```
yarn start
```


## Mobile (React-Native)


### Android in Windows
Before go ahead with this tutorial, I recomend you download [Android Studio](https://developer.android.com/studio), and run a [Hello World](https://medium.com/@rodolfopeixoto/criando-um-projeto-no-android-studio-feacf8a775c4)

Ps: Running on device is easier than emulator ;-)


After run Hello World, you'll need install `react-native-cli` in global mode:  
```shell
yarn global react-native-cli
```

Now install all dependencies install in `/node_modules`
```shell
cd tindev
yarn install
```  

Now just run this command:
```
react-native run-android
```
Ps: Make sure you Android is connected to USB with `Remote Debugging Android Devices`, more info here: 
https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br

You'll see this screen in Your Android Device if everthings work:
![Demo do Tinder Dev](doc/react-native.jpg)  


#### Troubleshooting 

##### No connected devices
```
* What went wrong:
Execution failed for task ':app:installDebug'.
> com.android.builder.testing.api.DeviceException: No connected devices!
```

First check if you device is listed here:
```shell
adb devices
```
Your device should be listed like this:
```
List of devices attached
0049375864      device
```


If not,
Go in your android, `Options > Developer`
Disable and enable options:  
1 - Developer Mode  
2- Usb Debugging Android

And try adb list.

---- 

##### 'adb' is not recognized as an internal or external command

```
'adb' is not recognized as an internal or external command,
operable program or batch file.
```

Confirm if adb exists in folder:
`C:\Users\Beto\AppData\Local\Android\sdk\platform-tools`
-> Ps: 'Beto' should change...


Then just add in your PATH env: 
`C:\Users\YOURUSER\AppData\Local\Android\sdk\platform-tools`


##### Installations during the project - all new installations needed to run the command react-native run-android

```
# app
yarn add react-navigation react-native-gesture-handler react-native-reanimated

yarn add @react-native-community/async-storage

yarn add socket.io-client

# frontend
yarn add socket.io-client

# backend
yarn add socket.io 

```

Implemented the Match
![Implemented the Match](doc/image_2019-08-10_17-54-57.png)  
