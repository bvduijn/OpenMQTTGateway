(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(e,t,o){e.exports=o.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash.e2aec4db.png"},222:function(e,t,o){e.exports=o.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash2.047e266a.png"},223:function(e,t,o){e.exports=o.p+"assets/img/OpenMQTTgateway_NodeMCU_PyFlasher.71bc778e.png"},251:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upload-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-binaries"}},[e._v("#")]),e._v(" Upload Binaries")]),e._v(" "),a("p",[e._v("This section is usefull if you want to directly flash your ESP from your desktop. Once flashed you can change  wifi and broker settings.\nNevertheless you will not be able to change advanced parameters, if you want to do so refer to [Upload from PlatformIO][pio] section.")]),e._v(" "),a("p",[e._v("Download the binary corresponding to your board and gateway "),a("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" from github and uncompress it.")]),e._v(" "),a("h2",{attrs:{id:"esp32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp32"}},[e._v("#")]),e._v(" ESP32")]),e._v(" "),a("ul",[a("li",[e._v("Download the bootloader "),a("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/master/tools/sdk/bin/bootloader_dio_80m.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Download the boot_app0 from "),a("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/master/tools/partitions/boot_app0.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Download the flash tool utility from espressif:\nhttps://www.espressif.com/en/products/hardware/esp32/resources")]),e._v(" "),a("li",[e._v("Uncompress the package")]),e._v(" "),a("li",[e._v("Execute "),a("code",[e._v("flash_download_tools")])]),e._v(" "),a("li",[e._v("Choose ESP32 DownloadTool")]),e._v(" "),a("li",[e._v("Set the files and the adress as below:\n"),a("img",{attrs:{src:o(221),alt:"Flash download tool"}}),e._v("\nAnd set the parameters used by arduino IDE, we are able to upload to ESP32 a binary file containing OpenMQTTGateway.")]),e._v(" "),a("li",[e._v("Set the config as above")]),e._v(" "),a("li",[e._v("Connect your ESP32 board and select the COM port")]),e._v(" "),a("li",[e._v("Click on start\nThe upload details appears in the rear shell windows, you can see also the progress bar changing")]),e._v(" "),a("li",[e._v('Once done the flash tool display "FINISH" like below\n'),a("img",{attrs:{src:o(222),alt:"Flash download tool 2"}})])]),e._v(" "),a("h2",{attrs:{id:"esp8266"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266"}},[e._v("#")]),e._v(" ESP8266")]),e._v(" "),a("ul",[a("li",[e._v("Download the NodeMCU Py Flasher tool :\nhttps://github.com/marcelstoer/nodemcu-pyflasher/releases")]),e._v(" "),a("li",[e._v("Execute "),a("code",[e._v("NodeMCU-PyFlasher")])]),e._v(" "),a("li",[e._v("Set the files and parameters as below:\n"),a("img",{attrs:{src:o(223),alt:""}})]),e._v(" "),a("li",[e._v("Connect your board and select the COM port")]),e._v(" "),a("li",[e._v("Click on "),a("em",[e._v("FlashNodeMCU")]),e._v("\nThe upload details appears.")])]),e._v(" "),a("p",[e._v("Note that to reset the wifi and mqtt settings you can check "),a("em",[e._v("yes, wipes all data")])]),e._v(" "),a("p",[e._v("Once loaded into your board you have to set your network parameters with wifi manager portal\nFrom your smartphone search for your OpenMQTTGateway wifi network and connect to it, a web page will appear")]),e._v(" "),a("ul",[a("li",[e._v("Select your wifi")]),e._v(" "),a("li",[e._v("Set your wifi password")]),e._v(" "),a("li",[e._v("Set your MQTT Server IP")]),e._v(" "),a("li",[e._v("Set your MQTT Server username (not compulsory)")]),e._v(" "),a("li",[e._v("Set your MQTT Server password (not compulsory)")])]),e._v(" "),a("p",[e._v("The ESP restart and connect to your network. Note that your credentials are saved into the ESP memory, if you want to redo the configuration you have to erase the ESP memory with the flash download tool.")]),e._v(" "),a("p",[a("em",[e._v('The default password for wifi manager is "your_password"')])]),e._v(" "),a("p",[e._v("Once done the gateway should connect to your network and your broker, you should see it into the broker in the form of the following messages:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("home/OpenMQTTGateway/LWT Online \nhome/OpenMQTTGateway/version\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);