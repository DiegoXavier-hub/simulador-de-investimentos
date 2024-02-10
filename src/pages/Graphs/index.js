// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import "../../assets/css/graph.css"

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BMFBOVESPA:VALE3|ALL|BRL"
            ],
            [
              "BMFBOVESPA:ITUB4|ALL|BRL"
            ],
            [
              "BMFBOVESPA:BBAS3|ALL|BRL"
            ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "br",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": true,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "backgroundColor": "rgba(22, 22, 48, 1)",
          "widgetFontColor": "rgba(217, 217, 217, 1)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "dateFormat": "dd-MM-yy"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Monitore todos os mercados no TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
