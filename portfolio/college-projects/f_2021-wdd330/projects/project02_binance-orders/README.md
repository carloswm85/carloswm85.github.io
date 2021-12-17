# WDD330 Class Project 02 - Binance Orders Application

- [WDD330 Class Project 02 - Binance Orders Application](#wdd330-class-project-02---binance-orders-application)
  - [Project Links](#project-links)
    - [Resourcers](#resourcers)
  - [College Class Content](#college-class-content)
  - [Binance Documentation](#binance-documentation)
    - [Other Documentation](#other-documentation)
    - [Official Resources](#official-resources)
  - [Tools](#tools)
  - [Binance API & Testnet](#binance-api--testnet)
  - [Dependencies: Docs, Use, Videos](#dependencies-docs-use-videos)
    - [wscat](#wscat)
    - [Lightweight-Charts](#lightweight-charts)
  - [Other Information](#other-information)
  - [Tutorials](#tutorials)
- [Chrome Extension Development](#chrome-extension-development)

## Project Links
- App project link: [Here](src/index.html)

### Resourcers

- Wireframes and other images: [Here](img/README.md)
## College Class Content
- Block 2 challenge proposal instructions: [Link](https://byui.instructure.com/courses/160562/assignments/7228245?module_item_id=20163546)
- TODO application instructions: [Link](https://byui-cit.github.io/cit261/resources/todo.html)
- Trello board: [Link](https://trello.com/b/94QLblUO/todo-project)
- Teacher's recommendations: [Link](docs/teachers.md)

## Binance Documentation
- Binance API Documentation: https://binance-docs.github.io/apidocs/spot/en/#introduction
- **BETTER** Binance API Documentation: https://developers.binance.com/docs/binance-api/spot/index/
- Binance Testnet: https://testnet.binance.vision/
- Binance Developers Community: https://dev.binance.vision/
- Spot Trading with Postman: https://academy.binance.com/en/articles/binance-api-series-pt-1-spot-trading-with-postman- 
### Other Documentation
- https://github.com/binance/binance-spot-api-docs

### Official Resources
- https://github.com/orgs/binance/repositories
  - Main repos:
    - https://github.com/binance/binance-connector-node
    - https://github.com/binance/binance-public-data
  - Examples:
    - https://github.com/binance/binance-websocket-examples
    - https://github.com/binance/binance-signature-examples
    - https://github.com/binance/binance-pay-signature-examples
  - Demos:
    - https://github.com/binance/websocket-demo


## Tools
- https://syncwith.com/api/binance 
- Postman:
  - repo: https://github.com/binance/binance-api-postman 
  - tutorial: https://academy.binance.com/en/articles/binance-api-series-pt-1-spot-trading-with-postman
- curl:
  - commands:
    - `curl -v https://testnet.binance.vision/api/v3/userDataStream` verbose.
    - `curl -v -D - stackoverflow.com -o /dev/null` for getting only headers.
- light-server:
  - repo: https://www.npmjs.com/package/light-server
  - Example: https://github.com/carloswm85/2020-dom-usobiaga-01
- lite-server:
  - repo: https://github.com/johnpapa/lite-server
  - tutorial: https://medium.com/free-code-camp/how-you-can-use-lite-server-for-a-simple-development-web-server-33ea527013c9
- Chrome extensions:
  - Allow CORS: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/

## Binance API & Testnet

| Spot API URL |	Spot Test Network URL |
| -- | -- |
| https://api.binance.com/api |	https://testnet.binance.vision/api |
| wss://stream.binance.com:9443/ws |	wss://testnet.binance.vision/ws |
| wss://stream.binance.com:9443/stream |	wss://testnet.binance.vision/stream |

## Dependencies: Docs, Use, Videos
### wscat
- https://youtu.be/d-2GoqQbagI?t=160
- https://www.npmjs.com/package/wscat
- Examples:
  - `wscat --connect wss://stream.binance.com:9443/ws/btcusdt@trade`
  - `wscat --connect wss://stream.binance.com:9443/ws/btcusdt@kline_5m | tee dataset.txt`
### Lightweight-Charts
- https://github.com/tradingview/lightweight-charts/
- Docs: https://tradingview.github.io/lightweight-charts/ 
- Demos: https://www.tradingview.com/lightweight-charts/

## Other Information
- Tabs: https://www.w3schools.com/howto/howto_js_tabs.asp
- Fetch examples: https://mdn.github.io/fetch-examples/
- Websockets: 
  - https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
  - https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#general-wss-information
- Trading View Advanced Widget: https://www.tradingview.com/widget/advanced-chart/
- https://github.com/binance/binance-connector-node
- CORS:
  - Readings:
    - Security risks: https://stackoverflow.com/questions/12001269/what-security-risks-exist-when-setting-access-control-allow-origin-to-accept-all
    - Enable CORS for Chrome Extension: https://stackoverflow.com/questions/59406871/enable-cors-for-chrome-extension
    - CORS Issue in Chrome Developer Extension: https://stackoverflow.com/questions/40858482/cors-issue-in-chrome-developer-extension
    - Why JavaScript while Postman does not? https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
  - Solutions:
    - Using a batch file: https://youtu.be/3yACsnV30N8
    - Using Chrome extension: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
    - fetch-CORS: https://github.com/borderless/fetch-cors

## Tutorials

- https://github.com/hackingthemarkets/binance-tutorials/
- https://www.youtube.com/watch?v=d-2GoqQbagI

# Chrome Extension Development
- https://developer.chrome.com/docs/extensions/mv3/getstarted/
- https://developer.chrome.com/docs/extensions/reference/storage/
