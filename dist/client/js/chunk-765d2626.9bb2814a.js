(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-765d2626"],{

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

/***/ "2522":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACjlBMVEUAAAAA/wAA/4AA/1UAv0AA1VUA20kA32AA41UAzE0A0UYA1VUA2E4A20kA3VUAz1AA0ksA1VUA11EA2U0A21UA3FEA004A1VUA1lIA2E4A21IA008A1lIA11AA2E0A2lIA21AA1U4A1lMA11EA2VMA2lEA1U8A1U0A108A2E4A2VEA1VAA1U4A1lIA11AA2E4A2VIA1U8A1lIA11EA108A2VEA11AA2E4A2FEA1lEA11AA108A2FEA2VAA1k8A1lIA108A2E4A2FEA1lAA1k8A11EA11AA2E8A2FEA2FAA1k8A1lEA11AA108A2FEA2FAA1lAA11AA1k8A11EA11AA108A2FEA1k8A1lEA11AA11AA2FAA1lAA1k8A11EA11AA108A2FEA1lAA1k8A11EA108A2FEA2FAA1lAA11AA11AA108A2FAA1k8A11EA11AA108A2FAA1k8A11EA11AA11EA2FAA1lAA108A11AA11AA108A1lAA11EA11AA2FEA2FAA1lAA11EA11AA11AA11EA2FAA1lAA108A11AA11AA108A2FAA1lAA11AA11AA11EA2FAA1lAA11EA11AA11AA2FAA1lAA108A11AA11AA11AA11AA11EA11AA11AA11EA2FAA1lAA108A11AA11AA108A11AA1lAA11AA11AA11AA11AA11AA2FAA11AA11EA11AA11AA11AA1lAA108A11AA11AA11AA1lAA11AA11AA11AA11AA11AA2FAA11AA11EA11AA11AA108A11AA11AA11AA11AA11AA2FAA11AA11AA11AA11AA11AA11AA11AA108A11AA11AA11AA11AA11AA11AA11Bg0Mk/AAAA2XRSTlMAAQIDBAYHCAkKCwwNDg8QERITFBUWFxgZGhwdHyAhIiMkJSYoKSorLS4vMDEyMzQ1Nzg5OjxAQUJFRkdISUpLTU5PUFFSU1RVVldYWVpbXF1gZGVmZ2hqa2xtb3BxcnN0dXZ3eHp7fH1/gIGChIWGh4mKi42Oj5CRkpOUlpiZm5ydnp+goaKjpKWmp6ipqq2ur7CxsrO1tre4ubu9vr/AwcLDxMXGx8jJysvMzc7P0NHS09XW19ja29zd3t/g4eLj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"

/***/ }),

/***/ "2fde":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"title":"Create your collection","content":"You can change these values later, along with configuring external URLs, payment options, and trading fees.","upload":"Upload","uploadImg":"Please upload image","canvas":"Canvas","uploadTip":"Only JPG / PNG files can be uploaded, and no more than 500kb","total":"Total output","daily":"Daily output","nameError":"Your name must be input.","descError":"Your description must be input.","namePl":"Example: Treasures of the Sea","descPl":"Provide a description for your store.","countText":" of 1000 characters used","submit":"Submit","fieldTitle":"Title","description":"Description","createSuccess":"Create success","createFail":"Create fail"},"zh":{"title":"创建您的作品","content":"您可以稍后更改这些值，同时配置外部 URL、付款选项和交易费用。","upload":"上传","uploadImg":"请上传图片","canvas":"画布","uploadTip":"只能上传 JPG / PNG 文件，不能上传超过500kb","total":"总产量","daily":"每日产量","nameError":"您的名字必须输入。","descError":"您的描述必须输入。","namePl":"示例：海洋宝藏","descPl":"提供您商店的描述。","countText":" 已使用 1000 个字符","submit":"提交","fieldTitle":"标题","description":"描述","createSuccess":"创建成功","createFail":"创建失败"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "ba0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64842d91-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CollectionCreate/index.vue?vue&type=template&id=39a395f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"collection-create"},[_c('div',{staticClass:"top-bar"},[_c('b-container',{attrs:{"fluid":"lg"}},[_c('div',{staticClass:"top-content"},[_c('h2',[_vm._v(_vm._s(_vm.$t('title')))]),_c('p',{staticClass:"desc"},[_vm._v(" "+_vm._s(_vm.$t('content'))+" ")])])])],1),_c('b-container',{attrs:{"fluid":"lg"}},[_c('div',{staticClass:"create-form-container"},[_c('b-form',{on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onSubmit($event)}}},[_c('div',{staticClass:"upload-section"},[_c('div',{staticClass:"img-uploader",on:{"click":_vm.onClickUpload}},[(_vm.form.fileUrl)?[(_vm.form.fileUrl)?_c('img',{key:"file-image",staticClass:"file-image",attrs:{"src":_vm.form.fileUrl,"alt":""}}):_vm._e()]:[_c('img',{key:"file-pl-image",staticClass:"file-pl-image",attrs:{"src":__webpack_require__("d750"),"alt":""}}),_c('b-button',{staticClass:"upload-btn",attrs:{"variant":"primary","disabled":_vm.uploadLoading}},[_vm._v(_vm._s(_vm.$t('upload')))])],_c('input',{ref:"fileInput",staticClass:"file-input",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.onFileChange}}),_c('b-form-invalid-feedback',{attrs:{"state":_vm.imgValidation}},[_vm._v(" "+_vm._s(_vm.$t('uploadImg'))+" ")])],2),_c('div',{staticClass:"cover-info"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.$t('canvas'))),_c('span',{staticClass:"red"},[_vm._v("*")])]),_c('div',{staticClass:"recommend"},[_vm._v("(350 x 350 recommended) ")]),_c('div',{staticClass:"tip"},[_vm._v(_vm._s(_vm.$t('uploadTip')))]),_c('div',{staticClass:"summary-container"},[_c('div',{staticClass:"token"},[_c('div',{staticClass:"icon-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("2522"),"alt":""}})]),_c('div',{staticClass:"token-info"},[_c('div',{staticClass:"value"},[_vm._v("1000CBD")]),_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('total')))])])]),_c('div',{staticClass:"day"},[_c('div',{staticClass:"icon-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("e968"),"alt":""}})]),_c('div',{staticClass:"token-info"},[_c('div',{staticClass:"value"},[_vm._v("1/1000CBD")]),_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.$t('daily')))])])])])])]),_c('b-form-group',{attrs:{"id":"input-group-1","label":_vm.$t('fieldTitle'),"label-for":"name"}},[_c('b-form-input',{attrs:{"id":"name","type":"text","placeholder":_vm.$t('namePl'),"required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}}),_c('b-form-invalid-feedback',{attrs:{"state":_vm.nameValidation}},[_vm._v(" "+_vm._s(_vm.$t('nameError'))+" ")])],1),_c('b-form-group',{attrs:{"id":"input-group-2","label":_vm.$t('description'),"label-for":"intro"}},[_c('b-form-textarea',{attrs:{"id":"intro","placeholder":_vm.$t('descPl'),"rows":"3","max-rows":"6","required":""},model:{value:(_vm.form.desc),callback:function ($$v) {_vm.$set(_vm.form, "desc", $$v)},expression:"form.desc"}}),_c('b-form-invalid-feedback',{attrs:{"state":_vm.descValidation}},[_vm._v(" "+_vm._s(_vm.$t('descError'))+" ")]),_c('b-form-text',{attrs:{"id":"password-help-block"}},[_vm._v(" "+_vm._s(_vm.form.desc.length)+_vm._s(_vm.$t('countText'))+" ")])],1),_c('div',{staticClass:"button-group"},[_c('b-button',{staticClass:"submit-btn",attrs:{"disabled":_vm.submitting,"type":"submit","variant":"primary","size":"lg"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/CollectionCreate/index.vue?vue&type=template&id=39a395f2&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/eth/ethereum.js
var ethereum = __webpack_require__("b88c");

// EXTERNAL MODULE: ./src/common/sendTransaction.js
var sendTransaction = __webpack_require__("23ce");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CollectionCreate/index.vue?vue&type=script&lang=js&





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





console.log(ethereum["b" /* NFTAuctionInterface */]);
/* harmony default export */ var CollectionCreatevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      submitting: false,
      uploadLoading: false,
      imgValidation: true,
      nameValidation: true,
      descValidation: true,
      form: {
        fileUrl: '',
        name: '',
        desc: ''
      }
    };
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])({
    user: function user(state) {
      return state.user;
    }
  })),
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var JSONBody, url, _yield$axios$post, data, IpfsHash, creatTxHash, creatTx;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (_this.form.fileUrl) {
                  _context.next = 4;
                  break;
                }

                _this.imgValidation = false;
                return _context.abrupt("return");

              case 4:
                if (_this.form.name) {
                  _context.next = 7;
                  break;
                }

                _this.nameValidation = false;
                return _context.abrupt("return");

              case 7:
                if (_this.form.desc) {
                  _context.next = 10;
                  break;
                }

                _this.descValidation = false;
                return _context.abrupt("return");

              case 10:
                JSONBody = {
                  name: _this.form.name,
                  description: _this.form.desc,
                  image: _this.form.fileUrl
                };
                _this.submitting = true;
                url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
                _context.next = 15;
                return axios_default.a.post(url, JSONBody, {
                  headers: {
                    pinata_api_key: config["a" /* default */].pinataAPIKey,
                    pinata_secret_api_key: config["a" /* default */].pinataAPISecret
                  }
                });

              case 15:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                IpfsHash = data.IpfsHash; // sendTransaction

                _context.next = 20;
                return Object(sendTransaction["a" /* default */])({
                  to: config["a" /* default */].NFTAuction,
                  gas: 960000,
                  data: ethereum["b" /* NFTAuctionInterface */].encodeFunctionData('createNFTByCanvas', [IpfsHash])
                });

              case 20:
                creatTxHash = _context.sent;
                _context.next = 23;
                return ethereum["m" /* provider */].waitForTransaction(creatTxHash);

              case 23:
                creatTx = _context.sent;

                if (creatTx.status === 1) {
                  __g_root__.$bvToast.toast(_this.$t('createSuccess'), {
                    title: _this.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast(_this.$t('createFail'), {
                    title: _this.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                } // const tx = await canvasAuctionContract.functions.buy(this.amount);


                console.log(creatTx);
                _this.submitting = false; // alert(JSON.stringify(this.form));

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onClickUpload: function onClickUpload() {
      this.$refs.fileInput.click();
    },
    onFileChange: function onFileChange(e) {
      var _e$target$files = Object(slicedToArray["a" /* default */])(e.target.files, 1),
          file = _e$target$files[0];

      console.log(file);
      this.uplooadFile(file);
    },
    uplooadFile: function uplooadFile(file) {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, formData, _yield$axios$post2, data, IpfsHash;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //      pinataAPIKey: '1a947fd8693b60266d52',
                // pinataAPISecret
                url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'; // we gather a local file for this example, but any valid readStream source will work here.

                formData = new FormData();
                formData.append('file', file);
                _this2.uploadLoading = true;
                _context2.next = 6;
                return axios_default.a.post(url, formData, {
                  maxBodyLength: 'Infinity',
                  // this is needed to prevent axios from erroring out with large files
                  headers: {
                    'Content-Type': "multipart/form-data; boundary=".concat(formData._boundary),
                    pinata_api_key: config["a" /* default */].pinataAPIKey,
                    pinata_secret_api_key: config["a" /* default */].pinataAPISecret
                  }
                });

              case 6:
                _yield$axios$post2 = _context2.sent;
                data = _yield$axios$post2.data;
                _this2.uploadLoading = false;
                IpfsHash = data.IpfsHash;
                _this2.form.fileUrl = config["a" /* default */].pinataUrlPrefix + IpfsHash; //   {
                //     "name": "Hearing Red",
                //     "description": "Stream of consciousness face that began with pen scratches and wild mark making followed by defining the head's shape by enclosing on the chaos with red paint until the character was revealed to me.",
                //     "image": "https://ipfs.io/ipfs/QmZ8FN2A7aqXnj5ee3171ZGZHUhqBo16WC1ftbryQuaeQu"
                // }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/views/CollectionCreate/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_CollectionCreatevue_type_script_lang_js_ = (CollectionCreatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/CollectionCreate/index.vue?vue&type=style&index=0&id=39a395f2&lang=scss&scoped=true&
var CollectionCreatevue_type_style_index_0_id_39a395f2_lang_scss_scoped_true_ = __webpack_require__("cc35");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./src/views/CollectionCreate/index.vue?vue&type=custom&index=0&blockType=i18n
var CollectionCreatevue_type_custom_index_0_blockType_i18n = __webpack_require__("c4ad");

// CONCATENATED MODULE: ./src/views/CollectionCreate/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_CollectionCreatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "39a395f2",
  null
  
)

/* custom blocks */

if (typeof CollectionCreatevue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(CollectionCreatevue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var CollectionCreate = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c4ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2fde");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cc35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39a395f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc98");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39a395f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39a395f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d750":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAADaCAMAAAA11r9EAAACxFBMVEUAAAD///////+qqqq/v7/MzMzV1dXb29u/v7/GxsbMzMzR0dHV1dXExMTIyMjMzMzPz8/S0tLGxsbJycnMzMzOzs7R0dHIyMjKysrMzMzOzs7Q0NDIyMjKysrMzMzOzs7Pz8/JycnLy8vMzMzNzc3Pz8/JycnLy8vMzMzOzs7KysrLy8vMzMzNzc3Ozs7KysrLy8vMzMzNzc3Ozs7KysrLy8vMzMzNzc3Ozs7KysrLy8vMzMzNzc3Ozs7KysrLy8vMzMzNzc3Ozs7Ly8vMzMzNzc3Ly8vLy8vNzc3Nzc3Ly8vLy8vMzMzNzc3Nzc3Ly8vLy8vNzc3Nzc3Ly8vLy8vMzMzNzc3Nzc3Ly8vLy8vMzMzNzc3Nzc3Ly8vLy8vMzMzNzc3Nzc3Ly8vMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3MzMzMzMzMzMzNzc3Ly8vMzMzMzMzNzc3Ly8vMzMzMzMzLy8vMzMzMzMzMzMzLy8vMzMzNzc3Ly8vMzMzMzMzMzMzNzc3MzMzMzMzMzMzLy8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzNzc3MzMzNzc3Ly8vMzMzMzMzMzMzNzc3Ly8vMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzS5r/kAAAA63RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDRUZISUpMTU5PUFFSU1RWV1hZWltcXV5fYGFiY2RlZmdoaWtsbW5vcHFyc3R1d3h5ent8fn+AgoOFhoeIiouOj5CRkpOVlpeZ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"

/***/ }),

/***/ "e968":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACW1BMVEUAAAAA/wAA/4AA/1UAv0AAzGYA1VUA20kA32AA41UAzE0A0UYA1VUA2E4A20kA3VUAz1AA0ksA1VUA11EA2U0A21UA3FEA004A1VUA1lIA2E4A2UwA21IA008A1UwA1lIA11AA2E0A2lIA21AA1U4A2E4A2VMA2lEA1U8A1U0A1lEA108A2E4A2VEA1VAA1lIA11AA2E4A2VIA1U8A1lIA2FIA11AA2E4A2FEA1lEA11AA108A2FEA2VAA1k8A108A2E4A2FEA1lAA1k8A11EA11AA2FAA1k8A1lEA11AA108A2FEA2FAA1lAA1k8A11AA1k8A11EA11AA108A2FEA1k8A11AA11AA2FAA1lAA1k8A11EA11AA2FEA1lAA1k8A11EA2FEA2FAA1lAA11AA108A2FAA1lAA1k8A11EA11AA108A2FAA1k8A11AA2FAA1lAA11AA11AA108A2FAA1lAA1k8A11EA11AA2FAA1lAA11EA11AA11AA11EA2FAA108A11AA11AA108A2FAA11EA11AA2FAA1lAA11EA2FAA1lAA108A11AA11AA11AA11AA11AA11EA11AA11AA11EA2FAA1lAA11AA11AA108A11AA1lAA11AA11AA11AA11AA2FAA11AA11EA11AA11AA11AA1lAA108A11AA11AA11AA1lAA11AA11AA11AA11AA11AA2FAA11AA11EA11AA108A11AA11AA11AA11AA11AA2FAA11AA11AA11AA11AA11AA11AA108A11AA11AA11AA11AA11C8+MlMAAAAyHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJygpKissLS4vMDIzNDU3ODtAQUJFRkdISUpNTk9QUVJTVldYWVpbXF1eYGRlZmdoamxtb3BxcnN1dnd4e3x9gIGCg4SFhoeJioyPkJKTlJWWl5iZnJ2en6ChoqSlpqeoq6yvsLG1tre4ubq7vb6/wMHCw8XGx8jJyszNzs/Q0dLT1dbX2Nrb3N3e3+Dh4uPk5efp6+zt7u/w8fLz9Pb3+Pn9/ux7qcgAAAWBSURBVFjDrZn9Q1NVGMcvL26AoEXyjjFtAUWgaUEOdURGYL7kIAwifCezFxAqgvKtYWIJKQ7CJpAbAok1BhggNEFcfP+szrl3Y3f3Be697PwAz845z2e75zzneZ7zXIZZuW3aVdl0c3hqHt7HfzlvNlXu2sRobzHmescSBG3JUW+O0UILL7QuEP1F2/kKU+7WeL0ufmuuqfy87SnpXLAWhqvExVa5iGJ/XUGUcCQqv66fDLmqYlXgoj+ZBtznMuXGMz93A9O10Up5pWS6s3TFhwovdZKvLFWEy7gBDBaFrTYtrOgPoCNjdd4BD+arIxVt25FZeA6sMimqFWhPVbo2ye3A91ErzUi8g8UKNdZQvog7ifLDWx5iYrs6+9ruxsMtcoNZjzCQqvYApA7gUZb0kHECPRvUH6kNPZgwSg0kjKJH0yGN6cFogrhbZ8fgRm1OZOM92PWi3hZMpGt1S+kTaBHZM7xvCPvMk97GCLF65Lfeyb3BXTu9EFh4hgc1QsW0Z8Sr1IiBx6hXSwnuq4En+BR24Lro9BZTf3pNDGyn/UWCk30dHUH+BbPJjCSwXQZYLOhMmUUZb+PdsAT5ph+7bDajD9hiC2otPqDRZrvV+ibvEMIdMLpaOHiLr/uVDR55PqAjOKY4fMA89tOny1oRDtQu+/tpmHk/sA7Kgbzn3IMZf1Q4Cid/R8bVAO8H9Ow46luyv1HCX1+oAf7H30QXFzYK/YIAuI8DDgYDnT7g677PvL10YTcrWHGSkQCaWGB9xFww0LOuif7LeV8EZE6gjbWZhSWDFPAHutv3E8zC1KEicQj4LLJfDDQsLaxnH/0uIwXE/rBtBTrDhBD4rERXkBnbBjGQbAu192ackgai7V3T6TmIW//Xlx5DCngKzeTvA+yQASpqfM0deEACHRYiRcCZdiXtZyEwch6JzG7cZkRAmyK/+pwQyHRhD3McDaEDNuA4cf3loQOWk1BwC4WhAxaiixlBthzwpTzSXqXHMiyTimy+aDxxmrTqOOqxRMBXMMJMIUkG+CFnF1YifsGJ54g4wIlf+g0sSDUJU8wTxMkAL3CqY0S0cSLtHuPEC5LAOMwzgq61ASnNC11ogTN4QQbYzKn+xkZZtt0g4ggCwWRR6pFdyJABPn/oMGmHaHxNO8y2NCLmstJ7bC7zr9SmDCJHqx2KgdRs1mDYYmAhcQxrOHpiID168s7BcJH6qKsFRMyzUtGaS8S3rlLxIrvw01LOYTc5fivu8nBgl38h4p+c+A3jMyGB+9pLHOx8pFY7HJNysMyoRAjQCGRDAPOdRJDSCDzJBqli2KWBVZzqT+xis+0rIt7mxEo6wyUA/s6G0fUSgZ4zmyzqBF9bR7OMHNY10pQqhkp5L7MTHJKBnmkTpyIK7dAhmYoQwxElS5qAy8kSEUpCAXwbY+H+hNMRFgKgHR/5U+KZoJSYzOpVBrzLB/JSYkHS7iHVnk4lqUgnqRLNLift9wJJO71WHAkAr6jJlS75tSz8awVTxr/4ZEwp5/3jv3Amz2K/7NXsxcseZbi5y+mBq1ln0PIaPPh4DWU3phoeQeXhILw7tfPI9fZgiC/graJOvR0DWksEfbBHSRYxurUVMbolixgkUZtEt5YySzcmjTKFoHEMpKjlpfRjPEtucPMQ3CpLVdvcGNosPxzfi0WLGp5lEb3xK03QN5ILqOLHTroGNOpXmfTOHJ5UKStIfjCLuX0KSqYkTXCaVy+ZmmnJ1KDoScpIUddRsnJRt4R4a3eZ4rJzLS07n5UvO5+lZedj0Sp2L44tjPedyRctuT7/TB9bGI/TVrp/amuwmLKTSACPSco2WRq0lu59LxcanOKXC84GbS8X/C7DxL7+ID92YWqYvP4wJayi8D/LuuwRZcPbBAAAAABJRU5ErkJggg=="

/***/ })

}]);