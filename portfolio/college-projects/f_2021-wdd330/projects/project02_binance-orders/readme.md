# WDD330 Class Project 02 - Binance Orders Application

- [WDD330 Class Project 02 - Binance Orders Application](#wdd330-class-project-02---binance-orders-application)
  - [Links](#links)
  - [College Class Content](#college-class-content)
  - [Binance Documentation](#binance-documentation)
    - [Other Documentation](#other-documentation)
  - [Tools](#tools)
  - [Binance API & Testnet](#binance-api--testnet)
  - [Dependencies: Docs, Use, Videos](#dependencies-docs-use-videos)
    - [wscat](#wscat)
    - [Lightweight-Charts](#lightweight-charts)
  - [Other Information](#other-information)
  - [Tutorials](#tutorials)
- [Chrome Extension Development](#chrome-extension-development)

## Links
- Project repo: 
## College Class Content
- Block 2 challenge proposal instructions: [Link](https://byui.instructure.com/courses/160562/assignments/7228245?module_item_id=20163546)
- TODO application instructions: [Link](https://byui-cit.github.io/cit261/resources/todo.html)
- Trello board: [Link](https://trello.com/b/94QLblUO/todo-project)
- Teacher's recommendations: [Link](docs/teachers.md)

## Binance Documentation
- Binance API Documentation: https://binance-docs.github.io/apidocs/spot/en/#introduction
- Binance Testnet: https://testnet.binance.vision/
- Binance Developers Community: https://dev.binance.vision/
- Spot Trading with Postman: https://academy.binance.com/en/articles/binance-api-series-pt-1-spot-trading-with-postman
### Other Documentation
- https://github.com/binance/binance-spot-api-docs

## Tools
- https://syncwith.com/api/binance 
- Postman:
  - Tutorial: https://academy.binance.com/en/articles/binance-api-series-pt-1-spot-trading-with-postman
  - Repo: https://github.com/binance/binance-api-postman 

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

## Tutorials

- https://github.com/hackingthemarkets/binance-tutorials/
- https://www.youtube.com/watch?v=d-2GoqQbagI

# Chrome Extension Development
- https://developer.chrome.com/docs/extensions/mv3/getstarted/
- https://developer.chrome.com/docs/extensions/reference/storage/
