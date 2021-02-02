(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{252:function(t,e,a){t.exports=a.p+"assets/img/20191008161020.03766ed5.png"},253:function(t,e,a){t.exports=a.p+"assets/img/20191009145014.a9df61e7.png"},254:function(t,e,a){t.exports=a.p+"assets/img/20191009114708.bcb9f83f.png"},486:function(t,e,a){"use strict";a.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"deploy-the-mainnet-wallet-containing-public-service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-mainnet-wallet-containing-public-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy the mainnet wallet containing public-service")]),t._v(" "),o("h2",{attrs:{id:"docker-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-deployment","aria-hidden":"true"}},[t._v("#")]),t._v(" docker deployment")]),t._v(" "),o("p",[t._v("Compared with ordinary wallets, the advanced wallet has several modules: "),o("strong",[t._v("public-service")]),t._v(", block browser, and web light wallet.The biggest difference from a regular wallet is that the public-service module will store the chain data redundantly in mongodb (included in the image).The advantage is that it is more convenient to use and does not need to rely on the browser and web light wallet provided by the Nuls Foundation.")]),t._v(" "),o("p",[t._v("The operation method is as follows:")]),t._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("        docker run \\\n        --name nuls-wallet \\\n        -d \\\n        -p 8001:8001 \\      \n        -p 8002:8002 \\\n        -p 8003:8003 \\      \n        -p 8005:1999  \\\n        -p 8004:8004 \\\n        -p 8006:8006 \\\n        -v `pwd`/mongo_data:/nuls/mongo_data \\\n        -v `pwd`/mongo_log:/nuls/mongo_log \\\n        -v `pwd`/data:/nuls/data \\\n        -v `pwd`/logs:/nuls/Logs \\\n        nuls-wallet-pro:v2.0.0\n")])])]),o("ul",[o("li",[t._v("8001 main chain protocol communication port (required)")]),t._v(" "),o("li",[t._v("8002 cross-chain protocol communication port (required)")]),t._v(" "),o("li",[t._v("8003 public-service http interface (optional)")]),t._v(" "),o("li",[t._v("8004 http api interface use port (optional)")]),t._v(" "),o("li",[t._v("8005 block browser port (optional)")]),t._v(" "),o("li",[t._v("8006 web light wallet port (optional)")]),t._v(" "),o("li",[t._v("/nuls/data data storage directory")]),t._v(" "),o("li",[t._v("/nuls/Logs log storage directory")]),t._v(" "),o("li",[t._v("/nuls/mongo_data mongodb data storage directory")]),t._v(" "),o("li",[t._v("/nuls/mongo_log mongodb log directory")])]),t._v(" "),o("p",[t._v("After successful startup, you can access the block browser and web light wallet through a web browser.")]),t._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("http://127.0.0.1:8005\nhttp://127.0.0.1:8006\n")])])]),o("h2",{attrs:{id:"linux-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-deployment","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux Deployment")]),t._v(" "),o("h3",{attrs:{id:"starting-mongodb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-mongodb","aria-hidden":"true"}},[t._v("#")]),t._v(" Starting MongoDB")]),t._v(" "),o("p",[t._v("Download the archive from MongoDB's official website, upload it to the server and extract it to the directory (/usr/local), and start it.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(252),alt:"20191008161020"}})]),t._v(" "),o("h3",{attrs:{id:"starter-wallet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starter-wallet","aria-hidden":"true"}},[t._v("#")]),t._v(" Starter wallet")]),t._v(" "),o("p",[t._v("Download the compressed package containing the public-service (nuls_wallet_pro.tar.gz) from [GitHub] (https://github.com/nuls-io/nuls-v2/releases), upload it to the server, and start it after decompression (starting Before, the server needs to open ports: 8001, 8002, 8003). After the wallet is started, you can access public-service through (ip:8003), and you can add your own node service in the node service of web wallet and light wallet.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(253),alt:"20191009145014"}})]),t._v(" "),o("p",[o("img",{attrs:{src:a(254),alt:"20191009114708"}})]),t._v(" "),o("p",[t._v("Note: Start MongoDB and start the node wallet!")])])}],n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},o,!1,null,null,null);r.options.__file="g_deploy_public_service.md";e.default=r.exports}}]);