(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a6e054a8"],{

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1af3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAACBFBMVEUAAAD///+AgICqqqq/v7+ZzMy/v7+qqsaqv7+quLizs7+1tbWwubmyu7uvt7ezurqzubmuu7uwtrawtbuxt7exurqyt7ewubmytruut7ewubmxurqut7uwuLixubmvt7exuLixubmvurqwt7uwt7qxuLiwubmyuLiwt7qvuLiwubmxt7mxubmxubmwuLixubmwt7qvubmwt7mwuLqxuLivubmwt7mvuLiwubmxt7qvuLixt7mvuLqwuLiwubmxt7mwuLqwubmxubmvt7mxuLivubmwuLmwuLivubmxuLixuLqvuLiwubmwt7mwuLiwubmxuLmwuLqwubmxt7mwuLmxubmvuLmwuLqvt7mwuLqxubmwt7mwuLmxuLiwubmwuLmxuLqwubmwt7mwuLmvuLqvuLmwuLiwt7mxuLmwubmxuLmwuLmwuLivuLmvt7mwuLmxubmwuLmwuLmxuLiwt7mwuLmwuLmwubmwuLmvuLqwt7mwuLmvuLmwuLiwuLmxuLmwuLmwubmwuLmwuLmwuLqwuLmwuLmwuLivuLmwuLmwuLmxt7mwuLmwuLmwuLqwuLmwuLmwubmwuLmwuLmwuLmwuLmwuLmxuLmwuLiwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwubmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLnehmHyAAAAq3RSTlMAAQIDBAUICQwSFBgdHiAlKCkqLS40NTc4OTo7PD0+QEFFRkdKS01PUVNXWFtfYWJnaWprbG1ucHFyc3V2d3h5ent/gIKDhIWGiYyNkZKUlZaXmJmanJ2eoKKjpKWmp6ipqqusrbCxsrO1tre4ur2+wMHCw8TFxsfIysvMzc7P0NHS09TV1tfZ2tvc3d7f4OHi5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P5tdozDAAACXklEQVQ4y61SaVsSURi9tljRYokpluWIaGrShiGaQIZEuREtkmKymZUUKTpaTgpahBnCwDDDJpkbIvdPNsN4sU/Sh86Hc57z3vPMmee9FwAWx670exnq82PR8X3niy2bpadBHsXXxhK/U+SI5ATvXq9nEjPqs/nzohK1N+qaDC+qSoo4p/y25V+h7CL+9KSgRHTDHp1TquZidmlFaWmFdIQO2MZCi3cvnDt1BIDKemX/GzLjkEje75GjvTpd7+iP3a99huW1d1pZjeAo0DybWolmoaWszAKzYZ/H4wunIaF9+CXDLDh0l84AIri+ByG0CIUWCLOZnZ1MFkKiq4uAcDs52SIGGzAHR0ODA+axpNcvcbrafRPs8CN3T4/7IBAcHw9yGtLLwBo/2pif3zgI7AUCXC/0990Gyf3Z5ib8C+k05AN3QDwdWZh0Oj2JhMfpdEejbicLTzzOOk8q+EQGmOSHe/UYppqdVWFYh8vVgbFQ4Tjr1EthoxxQ1NOL7ELLh4fLESOt/MiYFIUDzNrE/UaxuBPHO3muFYtreafxchXx3djMW5sNp2ncauXYbrPZc85G/CINssIBtqKzEX00V8EiXzEgB5GIsboYAMxqxRAjrXHRQ60gQr24zD6LKrO5CjHS6gnmnwKFKgr+5H/Zw+GrpiOHXFZ0uB3Q1KGBNpDYwh801dVpCEKDGKl2NWGUAf9m0vtpetqbSnkRI/2+vfroOng19TPC0DRFkhRiXhkm5LM3i0DDre6XpsHBAYNhADGvpqHn2ubzAiC8KlW0t7bKW1rkiHltU8iaRILiP4KxeR6dNVUMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "23ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_qizf_Projects_private_blockchain_auction_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1da1");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f121");
/* harmony import */ var _eth_ethereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b88c");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e36d");





console.log(ethers__WEBPACK_IMPORTED_MODULE_4__[/* BigNumber */ "a"]); // console.log(provider)

var sendTransaction = /*#__PURE__*/function () {
  var _ref2 = Object(_Users_qizf_Projects_private_blockchain_auction_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var to, data, gas, gasPrice, transactionParameters, txHash;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            to = _ref.to, data = _ref.data, gas = _ref.gas;
            _context.next = 3;
            return _eth_ethereum__WEBPACK_IMPORTED_MODULE_3__[/* provider */ "m"].getGasPrice();

          case 3:
            gasPrice = _context.sent;
            // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
            transactionParameters = {
              // nonce: txCount, // ignored by MetaMask
              gasPrice: gasPrice.toHexString(),
              // customizable by user during MetaMask confirmation.
              gas: ethers__WEBPACK_IMPORTED_MODULE_4__[/* BigNumber */ "a"].from(gas || 240000).toHexString(),
              // customizable by user during MetaMask confirmation.
              to: to,
              // Required except during contract publications.
              from: ethereum.selectedAddress,
              // must match user's active address.
              value: '0x00',
              // Only required to send ether to the recipient from the initiating external account.
              data: data,
              // Optional, but used for defining smart contract creation and interaction.
              chainId: _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].chainId // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.

            }; // txHash is a hex string
            // As with any RPC call, it may throw an error

            _context.next = 7;
            return ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 7:
            txHash = _context.sent;
            return _context.abrupt("return", txHash);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendTransaction(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (sendTransaction);

/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "3b4b":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"owner":"Owner","output":"Daily output of mining","period":"Period of validity","mined":"Mined","ownedQuantity":"Owned quantity","introduce":"Introduce","buy":"Buy","endAuction":"End auction","swap":"Swap","updatePrice":"Update price","cancelSwap":"Cancel swap","price":"Price","pleaseInput":"Please input price","cancel":"Cancel","confirm":"Confirm"},"zh":{"owner":"所有者","output":"每日挖矿产出","period":"有效期","mined":"已开采","ownedQuantity":"拥有数量","introduce":"介绍","buy":"购买","endAuction":"结束拍卖","swap":"转让","updatePrice":"更新价格","cancelSwap":"取消转让","price":"价格","pleaseInput":"请输入价格","cancel":"取消","confirm":"确认"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "6d63":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_a7d83ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b6e5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_a7d83ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_a7d83ad2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6fe3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAMAAAAAh4u3AAAB7FBMVEUAAAD///+AgICqqqqAgICqqqqSkpKfn5+ZmZmVlZWdnZ2SkpKZmZmfn5+UlJSZmZmenp6bm5uVlZWZmZmXl5ebm5uZmZmcnJyZmZmcnJyYmJiampqWlpaZmZmbm5uYmJiampqZmZmYmJiampqXl5eZmZmbm5uXl5eZmZmbm5uXl5eZmZmXl5ebm5uZmZmYmJiZmZmampqampqZmZmYmJiYmJiampqYmJiZmZmampqYmJiampqZmZmYmJiYmJiZmZmampqYmJiZmZmampqZmZmampqZmZmZmZmYmJiampqZmZmYmJiZmZmampqZmZmZmZmampqZmZmYmJiZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmampqZmZmZmZmZmZmZmZmZmZmYmJiZmZmampqZmZmZmZmampqZmZmZmZmZmZmZmZmampqZmZmYmJiZmZmampqZmZmYmJiampqZmZmZmZmampqZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlf+elAAAAAo3RSTlMAAQIDBAYHCAoMDQ4PEBMUFRcYGRscHh8jJCUmJygpKistLzAxMjM2Nzg7PEBCRkhLTE5QVFdYWVpbXF1fYWNkZWhpamtvcHFydHZ3eHl7fX5/gYKGh4iJiouMjY6PkJGSlpmbnZ6foKGipaanrK2ytba4vr/BwsTGyMnLzM3P0tPU1dbY29zd3t/g4eLj5Ofo6err7O3u7/Dx8vP09fb3+Pv9MjP8+wAAAjNJREFUOMut0vtf0lAUAPBDRC6lpGgRpuZ6+YoiMw0r01lmOkuLKLOswF4re5FmZDajJlbD4QR8VED+o+3ubmwD6qfOD9s5934/956dzwDMsbv/Q+YrSpwd18duXGgug8LY7Hu/lpntIQA23V19PtTLhGZ+Tm0xmzY+Eps8hDIrG9mG10Zix41kx6uoP0VbVGPHi9dahm4bzGHh1uX4QcAmXK4ZOBbRjSfZ2rng0gyBF/fJV5EJ3Sx5XKm6AqNE+YaW1S4fhfaXpQxsX1OTCr4LYFeuDeU9y6ifrQeaK/Fe/ZyKHrF7u6vvX1xpkXP7JGsFB8fxo3jvSgi/vd8GkmxuGBolpIgwu5N7sqd3TNlrSDUq77L5Cb4KmqST0IDV22zgYehzNzY+fFBfNEaqtaIcn774XHzAZIj0Sg0+OaEoJxeAkaxfWZFa1a7P/2pXM0qUVUoMABlbnLCBersSCX3usiLjGR/JM0T4hc1gvL/d+uQoSRysl0RGbuL1VDpv4N1Hw3jJ7+sdbmEddWsLGv6R3FmD4RkqmWZQb+aYthoNuMUfNBSrfLiREehqAalzfzFxxYDyoJbokkbox+YfCm2oBhdVwolShlqk9bIPSKdJ7H88n/ObL0ANwgPDwhlp+Oqdp16x03T0AqNfL8ebZ4On3feyBY0qQ4uPa6WDC4433cxWQJGysKuX8momOHoqWvTBZGzOc2SjRivtkeBsV/FYaqUA/kFVNR2ylBgwGR2A/xt/AA6NlHjUY/rnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "7c11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64842d91-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/index.vue?vue&type=template&id=0638ff10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auction-detail"},[_c('Introduce',{attrs:{"NFTDetail":_vm.NFTDetail,"price":_vm.price,"seller":_vm.seller,"mining-info":_vm.miningInfo}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue?vue&type=template&id=0638ff10&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64842d91-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/components/Introduce.vue?vue&type=template&id=a7d83ad2&scoped=true&
var Introducevue_type_template_id_a7d83ad2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":"lg"}},[_c('div',{staticClass:"introduce"},[_c('div',{staticClass:"pic-wrapper"},[_c('img',{attrs:{"src":_vm.NFTDetail.image,"alt":""}})]),_c('div',{staticClass:"info-wrapper"},[_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.NFTDetail.name || '-'))]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("8a2d"),"alt":""}}),_c('span',[_vm._v(_vm._s(_vm.$t('owner')))])]),_c('div',{staticClass:"info-content"},[_vm._v(_vm._s(_vm._f("trimAddress")(_vm.seller)))])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("1af3"),"alt":""}}),_c('span',[_vm._v(_vm._s(_vm.$t('output')))])]),_c('div',{staticClass:"info-content green"},[_vm._v("1CBD")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("6fe3"),"alt":""}}),_c('span',[_vm._v(_vm._s(_vm.$t('mined')))])]),_c('div',{staticClass:"info-content red"},[_vm._v(_vm._s(Math.floor(_vm.miningInfo.remainingAmout / Math.pow( 10, 18 )))+"/1000CBD")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("6fe3"),"alt":""}}),_c('span',[_vm._v(_vm._s(_vm.$t('price')))])]),_c('div',{staticClass:"info-content red"},[_vm._v(_vm._s(Math.floor(_vm.price / Math.pow( 10, 6 )) || 0)+"USDT")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("7efd"),"alt":""}}),_c('span',[_vm._v(_vm._s(_vm.$t('introduce')))])]),_c('div',{staticClass:"info-content"},[_vm._v(_vm._s(_vm.NFTDetail.description))])]),_c('div',{staticClass:"button-group"},[_c('b-button',{staticClass:"buy-btn",attrs:{"variant":"primary","size":"lg"},on:{"click":_vm.onBuy}},[_vm._v(_vm._s(_vm.$t('buy')))])],1)])])])}
var Introducevue_type_template_id_a7d83ad2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=template&id=a7d83ad2&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__("38cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__("e36d");

// EXTERNAL MODULE: ./src/eth/ethereum.js
var eth_ethereum = __webpack_require__("b88c");

// EXTERNAL MODULE: ./src/common/sendTransaction.js
var sendTransaction = __webpack_require__("23ce");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/components/Introduce.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //   NFTAuctionContract, NFTAuctionInterface, USDTContract, USDTInterface, provider,




/* harmony default export */ var Introducevue_type_script_lang_js_ = ({
  props: ['NFTDetail', 'price', 'seller', 'miningInfo'],
  data: function data() {
    return {// price: 200,
      // NFTDetail: {},
    };
  },
  created: function created() {// this.getDetail();
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])({
    user: function user(state) {
      return state.user;
    }
  })),
  methods: {
    onBuy: function onBuy() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tokenId, realPrice, usdtBalance, allowance, approveTxHash, approveTx, buyTxHash, buyTx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenId = _this.$route.query.tokenId;
                realPrice = _this.price;

                if (_this.user.address) {
                  _context.next = 5;
                  break;
                }

                __g_root__.$bvToast.toast('Please connect metamask', {
                  title: _this.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context.abrupt("return", false);

              case 5:
                console.log(_this.user.address);
                console.log(_this.seller);

                if (!(_this.user.address.toLowerCase() === _this.seller.toLowerCase())) {
                  _context.next = 10;
                  break;
                }

                __g_root__.$bvToast.toast('You\'re already the owner', {
                  title: _this.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context.abrupt("return", false);

              case 10:
                _context.next = 12;
                return eth_ethereum["e" /* USDTContract */].balanceOf(_this.user.address);

              case 12:
                usdtBalance = _context.sent;

                if (!usdtBalance.lt(_this.price)) {
                  _context.next = 16;
                  break;
                }

                __g_root__.$bvToast.toast('You balance is not enough', {
                  title: _this.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                return _context.abrupt("return", false);

              case 16:
                _this.submitting = true;
                _context.prev = 17;
                _context.next = 20;
                return eth_ethereum["e" /* USDTContract */].allowance(ethereum.selectedAddress, config["a" /* default */].NFTSwap);

              case 20:
                allowance = _context.sent;

                if (!allowance.lt(realPrice)) {
                  _context.next = 33;
                  break;
                }

                _context.next = 24;
                return Object(sendTransaction["a" /* default */])({
                  to: config["a" /* default */].USDTContract,
                  data: eth_ethereum["f" /* USDTInterface */].encodeFunctionData('approve', [config["a" /* default */].NFTSwap, bignumber["a" /* BigNumber */].from('9'.repeat(32)).toHexString()])
                });

              case 24:
                approveTxHash = _context.sent;
                _context.next = 27;
                return eth_ethereum["m" /* provider */].waitForTransaction(approveTxHash);

              case 27:
                approveTx = _context.sent;

                if (!(approveTx.status !== 1)) {
                  _context.next = 32;
                  break;
                }

                __g_root__.$bvToast.toast('Approve fail，please retry', {
                  title: _this.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                _this.submitting = false;
                return _context.abrupt("return");

              case 32:
                console.log(approveTx);

              case 33:
                _context.next = 35;
                return Object(sendTransaction["a" /* default */])({
                  to: config["a" /* default */].NFTSwap,
                  gas: 960000,
                  data: eth_ethereum["d" /* NFTSwapInterface */].encodeFunctionData('buy', [tokenId])
                });

              case 35:
                buyTxHash = _context.sent;
                _context.next = 38;
                return eth_ethereum["m" /* provider */].waitForTransaction(buyTxHash);

              case 38:
                buyTx = _context.sent;

                if (buyTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success', {
                    title: _this.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail, please retry', {
                    title: _this.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

                _context.next = 45;
                break;

              case 42:
                _context.prev = 42;
                _context.t0 = _context["catch"](17);
                console.error(_context.t0);

              case 45:
                _this.submitting = false;

              case 46:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[17, 42]]);
      }))();
    },
    onCancel: function onCancel() {},
    onUpdate: function onUpdate() {},
    onDelete: function onDelete() {} // async getDetail() {
    //   const { id } = this.$route.params;
    //   // console.log(id)
    //   this.tokenUrl = `https://ipfs.io/ipfs/${id}`;
    //   const { data } = await axios({
    //     method: 'get',
    //     url: this.tokenUrl,
    //   });
    //   this.NFTDetail = data;
    // },
    // toDetail() {
    //   this.$router.push(`/auction/detail/${this.tokenId}`);
    // },

  }
});
// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Introducevue_type_script_lang_js_ = (Introducevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=style&index=0&id=a7d83ad2&lang=scss&scoped=true&
var Introducevue_type_style_index_0_id_a7d83ad2_lang_scss_scoped_true_ = __webpack_require__("6f5e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=custom&index=0&blockType=i18n
var Introducevue_type_custom_index_0_blockType_i18n = __webpack_require__("ab72");

// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Introducevue_type_script_lang_js_,
  Introducevue_type_template_id_a7d83ad2_scoped_true_render,
  Introducevue_type_template_id_a7d83ad2_scoped_true_staticRenderFns,
  false,
  null,
  "a7d83ad2",
  null
  
)

/* custom blocks */

if (typeof Introducevue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(Introducevue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var Introduce = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//



console.log();
/* harmony default export */ var SwapDetailvue_type_script_lang_js_ = ({
  components: {
    Introduce: Introduce // Price,
    // Change,

  },
  data: function data() {
    return {
      NFTDetail: {},
      price: '',
      seller: '',
      auction: {
        lastPrice: 0,
        endAt: 0,
        startedAt: 0
      },
      miningInfo: {
        remainingAmout: 0
      }
    };
  },
  created: function created() {
    this.getDetail();
  },
  methods: {
    getDetail: function getDetail() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$$route$query, tokenId, price, seller, result, _result, token, miningInfo, tokenURI, _yield$axios, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$$route$query = _this.$route.query, tokenId = _this$$route$query.tokenId, price = _this$$route$query.price, seller = _this$$route$query.seller;
                _this.price = price;
                _this.seller = seller;

                if (!tokenId) {
                  _context.next = 16;
                  break;
                }

                _context.next = 6;
                return eth_ethereum["k" /* miningContract */].functions.getInfoById(tokenId);

              case 6:
                result = _context.sent;
                _result = Object(slicedToArray["a" /* default */])(result, 1), token = _result[0];
                miningInfo = token.miningInfo, tokenURI = token.tokenURI;
                _this.miningInfo = miningInfo;
                console.log(result);
                _context.next = 13;
                return axios_default()({
                  method: 'get',
                  url: tokenURI
                });

              case 13:
                _yield$axios = _context.sent;
                data = _yield$axios.data;
                _this.NFTDetail = data; // console.log('detail:', auction, tokenURI);
                // console.log('endAt:', new moment(this.auction.endAt * 1000).format('YYYY-MM-DD HH:mm:ss'));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_SwapDetailvue_type_script_lang_js_ = (SwapDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/SwapDetail/index.vue?vue&type=style&index=0&id=0638ff10&lang=postcss&scoped=true&
var SwapDetailvue_type_style_index_0_id_0638ff10_lang_postcss_scoped_true_ = __webpack_require__("d907");

// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue






/* normalize component */

var SwapDetail_component = Object(componentNormalizer["a" /* default */])(
  views_SwapDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0638ff10",
  null
  
)

/* harmony default export */ var SwapDetail = __webpack_exports__["default"] = (SwapDetail_component.exports);

/***/ }),

/***/ "7efd":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAMAAAB7o0l7AAAAjVBMVEUAAAD///+AgICfn5+ZmZmcnJyWlpabm5uYmJiampqXl5ebm5uYmJibm5ubm5uZmZmZmZmZmZmampqampqYmJiZmZmZmZmampqZmZmZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlyk/psAAAALnRSTlMAAQIQIyQnKSorLC4vMzhpcXiIl6mqr7Cyt7jDxcbIys3Oz9LT2O3u8PHy8/T5CYPjYwAAAK5JREFUKM/F0tkOgjAUBNCBKoriVhT3fQed//88H9S0uS3GmBDn9TTN3PYC8eRGJ0UWAUArpzfXCMCMi7ZykqyZAbizCU8SFgDIwIeKBECiIgw2co65wfAocWtdG8oxg+rb7mWhldX28AH/8bbfY214flV2sX56j9NzccRdV6n0aRIv7ACa7MODpIImByhBY3I1ydSYXGrSMky5TKwFIanN0fgqvkvbFzXGean9nAfM4DUeNAjvKwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "8a2d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAADsklEQVRIS7WWy2+UVRjGf89hLJSACqUGQQHBaLwBIqKpuLJAOxAuEmPiH6AmrtSVu+5NXLmBmLjWBMq0xE6HRRdAQkohEESFCrTcFGmB8VYu832POcMHJmSaKVhPMps55z2/733O+7zniHFGR0dHWLp69SzduvUS0ipJK7FfAB4DKoZzgiOCg7KP5OwT+Xz+9/H2U60J2yqVStPHkmQhIbRIet32cuBZYEYWc8n2ccFRQX8KB35rbr7wwcqVt2rtWRPU3d09vTJ16jPYbwa73RCzasJuvGeTsuxRh3BIabqzYu871t9/saOjI70XVhNUKJXmpUnSLtiE9AYwezxJsv/PI+0MUMglyUAtCWuCOkul5bI/xN6SnUkdDlGuA0idyZQpha2trafrZrRtYOChuSMjbxk+BVrrEbL5FOkXYHewt29saztcF1QoFGbS0LDe0sfAqgmC4rKbjqAQvti0du3+CYHShoYNkmJGr9wHKBbA7tT+/O329n11QVG65tHRdcH+DGi5D9DVCDJ8uaWtrb8uKC7YWSwuC/AJsB5omgCsAhySvUO53Dcb16w5OyFQ1549C1ypvIu00RCNesek4zGrhYC9q8HeV7e8o2xPXLrUdDOXm0+aLlcIK7BfBp4cx7B/ApeBE8BeweEQwqmxNB19Z926q5J858vu+qivr29aeWxssaSlwDxgOlKDoRlYBDwHLADuxNjws+yjkoZTKAsSS/GshtIkObY1nz9/FxT7WldX1wwaG5eSJC2GZUhzsGO5XgkhVLBnGh7PzJvLgqNJfwXOAdeRZmLPAW4gDds+kJMOTkmSM/l8/oa+LRZnT4NFhveiQX27O0+NvgD+yn7XgGsRTgj/ymE3Zhk/UlXg9lnG+T+QfiBNe0MI3dfL5QvqLBZXBelF2+8Dr9U47eiPi8Bpw4ikpLrGDpnEUdJHa8SVkUrY25M0/Um7isWPkJ7H3pwF1qqsG9WM4G+g2pllK8pliHLV7JnxCgG+NhxXoadnm6UlwKvAwxPwzP0sOYf0ne1qRkXgKeBpIMoxmSPeuP2CQe3q6TkoaWF2qJMJAWmMND0u6XTMaLBqyNuVNtkjWuCk4EwExfYxd7IJ2X6xcGLfG4qgK8Cs/wkUtx0xnI2g0Qm8CR74OwSXbQ9H0PfA/HFM98CALPA68GM0uwq9vV/ZXpzdppPtoyFgj+xBdfb2bsZeItgArJhE08aGu9/2DqRTik8r7EUBNtiOvS526f9q3NiQh7D3pvGtl8ud/QdMPppcQwj58wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "ab72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3b4b");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b6e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d907":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0638ff10_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d63");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0638ff10_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0638ff10_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);