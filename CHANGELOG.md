# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.30.0](https://github.com/tinkoff/taiga-ui/compare/v2.29.0...v2.30.0) (2022-01-17)

### Features

- **addon-doc:** support parse markdown in tui-doc-code ([#1160](https://github.com/tinkoff/taiga-ui/issues/1160))
  ([3c6297b](https://github.com/tinkoff/taiga-ui/commit/3c6297bf8c7a0b495816cca81aeef5985c141a54))

### Bug Fixes

- **addon-editor:** change width for the opacity block ([#1162](https://github.com/tinkoff/taiga-ui/issues/1162))
  ([9907f49](https://github.com/tinkoff/taiga-ui/commit/9907f4940684d99b38297dd4788dfb35aef88f1f))
- **addon-preview:** add providers to `TuiPreviewModule` ([#1194](https://github.com/tinkoff/taiga-ui/issues/1194))
  ([f7a4ba9](https://github.com/tinkoff/taiga-ui/commit/f7a4ba9be559243059a1898c3d8a4e9677b81794))
- **core:** fix `formatNumber` for values when precision > 6 ([#1171](https://github.com/tinkoff/taiga-ui/issues/1171))
  ([d7f7183](https://github.com/tinkoff/taiga-ui/commit/d7f718314cdfa35e171a5650808dce369ccc2cb1))
- **core:** fix unnecessary scroll in fullsize dialogs on mobile
  ([#1190](https://github.com/tinkoff/taiga-ui/issues/1190))
  ([e8303af](https://github.com/tinkoff/taiga-ui/commit/e8303af19af547e072123e0af26c8f947e52bb52))
- **demo:** line days chart labels visibility ([#1179](https://github.com/tinkoff/taiga-ui/issues/1179))
  ([28bf963](https://github.com/tinkoff/taiga-ui/commit/28bf9632328978086ff8e211184450c384057c3d))
- **demo:** ngModelOptions for table example 3 ([#1187](https://github.com/tinkoff/taiga-ui/issues/1187))
  ([83f2bdb](https://github.com/tinkoff/taiga-ui/commit/83f2bdb2015d75762a52d83ece845446d8600b9a))
- **kit:** `InputDate*`-components' filler with custom date-separator
  ([#1180](https://github.com/tinkoff/taiga-ui/issues/1180))
  ([723c9b3](https://github.com/tinkoff/taiga-ui/commit/723c9b35ef6d99442f0d223ee6152834664792e5))
- **kit:** `InputTag` broken layout of `tuiTextfieldCleaner` (size = s, m)
  ([#1186](https://github.com/tinkoff/taiga-ui/issues/1186))
  ([2cd678f](https://github.com/tinkoff/taiga-ui/commit/2cd678f74c5ec35092e7052b6cf0e9cb33ab8800))
- **kit:** `Tree` fix change detection in async children ([#1189](https://github.com/tinkoff/taiga-ui/issues/1189))
  ([2a215cf](https://github.com/tinkoff/taiga-ui/commit/2a215cf1d518f5ad1867abe468c400b7d95a9e3b))

## [2.29.0](https://github.com/tinkoff/taiga-ui/compare/v2.28.0...v2.29.0) (2021-12-28)

### Features

- **addon-doc:** `LegendItem` add checkbox support ([#1145](https://github.com/tinkoff/taiga-ui/issues/1145))
  ([140391b](https://github.com/tinkoff/taiga-ui/commit/140391bf3f3c517f461dff4276d3795bd9b84ef4))
- **addon-doc:** `PieChart`/`RingChart` add animations ([#1133](https://github.com/tinkoff/taiga-ui/issues/1133))
  ([1803970](https://github.com/tinkoff/taiga-ui/commit/1803970cd0cc6b8e3da86816d64cf82afbe0ed35))
- **cdk:** use ReplaySubject for TuiDestroyService
  ([1c00e78](https://github.com/tinkoff/taiga-ui/commit/1c00e78468d3518d83bfa464846ddd3226c1e4f9))
- **kit:** `InputDate` add full support of `TUI_DATE_FORMAT` ([#1146](https://github.com/tinkoff/taiga-ui/issues/1146))
  ([52d6472](https://github.com/tinkoff/taiga-ui/commit/52d647257b71409a407e8c00cec85cfc93c64970))
- **kit:** `InputDateRange` add full support of `TUI_DATE_FORMAT`
  ([#1155](https://github.com/tinkoff/taiga-ui/issues/1155))
  ([f6c8d08](https://github.com/tinkoff/taiga-ui/commit/f6c8d080139bba3d55d8608311b9aca594aca4de))
- **kit:** `InputDateTime` add full support of `TUI_DATE_FORMAT`
  ([#1154](https://github.com/tinkoff/taiga-ui/issues/1154))
  ([6ea8dd2](https://github.com/tinkoff/taiga-ui/commit/6ea8dd2e122a9083aec133d1c0c37c90ddb4d0f9))

### Bug Fixes

- **addon-doc:** fix vertical scrollbar height for root content
  ([#1148](https://github.com/tinkoff/taiga-ui/issues/1148))
  ([128295a](https://github.com/tinkoff/taiga-ui/commit/128295a340c60f4181cd9f6abd3666cd8516cf49))
- **kit:** `InputPhoneInternation` fix countries ([#1147](https://github.com/tinkoff/taiga-ui/issues/1147))
  ([eb7829f](https://github.com/tinkoff/taiga-ui/commit/eb7829feb5c39b5b0236f59593567cf0b4fa145f))
- **kit:** `InputInline` fix hiding first character in safari ([#1138](https://github.com/tinkoff/taiga-ui/issues/1138))
  ([03cfda9](https://github.com/tinkoff/taiga-ui/commit/03cfda9a6a963c9de54b8375ac7f344628b1941d))
- **kit:** overflow content in select
  ([79cee45](https://github.com/tinkoff/taiga-ui/commit/79cee454c81e57bdbcefd54c9fe8a0684f3379bf))

## [2.28.0](https://github.com/tinkoff/taiga-ui/compare/v2.27.1...v2.28.0) (2021-12-20)

### Features

- **addon-charts:** `ArcChart` add new component ([#1122](https://github.com/tinkoff/taiga-ui/issues/1122))
  ([0742c9f](https://github.com/tinkoff/taiga-ui/commit/0742c9f99bedd1b7d2a9100d0956d7e5d472169c))
- **cdk:** `TUI_TOUCH_SUPPORTED` add new token ([#1123](https://github.com/tinkoff/taiga-ui/issues/1123))
  ([2227a09](https://github.com/tinkoff/taiga-ui/commit/2227a093b3f3a33ac4e45fd891decbad082f5626))
- **core:** add source processor for svg component
  ([29701d5](https://github.com/tinkoff/taiga-ui/commit/29701d50c9b91a9eb0128611a86fb83b32923dc4))
- **kit:** `TUI_VALIDATION_ERRORS` add ability to work with Observable
  ([#1118](https://github.com/tinkoff/taiga-ui/issues/1118))
  ([f78f946](https://github.com/tinkoff/taiga-ui/commit/f78f946e2f75bb796e5b5d87f21b22e829129ff8))

### Bug Fixes

- **kit:** `MultiSelect` fix pseudoHovered and pseudoFocused ([#1125](https://github.com/tinkoff/taiga-ui/issues/1125))
  ([08326a5](https://github.com/tinkoff/taiga-ui/commit/08326a595c302e877cb8ae285a3b902da2555ca9))

### [2.27.1](https://github.com/tinkoff/taiga-ui/compare/v2.27.0...v2.27.1) (2021-12-15)

### Bug Fixes

- **core:** disable pointer events on value decorator ([#1113](https://github.com/tinkoff/taiga-ui/issues/1113))
  ([2623d1c](https://github.com/tinkoff/taiga-ui/commit/2623d1cbc6cc0e9a243352e0b34796f198da1ae8))

## [2.27.0](https://github.com/tinkoff/taiga-ui/compare/v2.25.0...v2.27.0) (2021-12-14)

### Features

- **addon-editor:** resizable images ([#959](https://github.com/tinkoff/taiga-ui/issues/959))
  ([4132e57](https://github.com/tinkoff/taiga-ui/commit/4132e579f0b2506f4fa790c40ceb109e806296ee))
- **addon-table:** update `Th` style ([#1087](https://github.com/tinkoff/taiga-ui/issues/1087))
  ([59830c6](https://github.com/tinkoff/taiga-ui/commit/59830c677ce0446332332855d7da0d77624f7edf))
- **cdk:** `CopyProcessor` add new directive to process value before it is copied
  ([#1094](https://github.com/tinkoff/taiga-ui/issues/1094))
  ([1768464](https://github.com/tinkoff/taiga-ui/commit/1768464cd102046ee8b8f4c9d9051f9e126a052b))
- **core:** add accent appearance ([#1098](https://github.com/tinkoff/taiga-ui/issues/1098))
  ([bf55bb1](https://github.com/tinkoff/taiga-ui/commit/bf55bb15a56620c24fb579a7bad5a70356e4728a))
- **kit:** `Accordion` add support for eager content ([#1081](https://github.com/tinkoff/taiga-ui/issues/1081))
  ([14f44ca](https://github.com/tinkoff/taiga-ui/commit/14f44caef5c393fe76aaf45dab3d7eb2579a1187))

### Bug Fixes

- **addon-editor:** improved type safety ([#1089](https://github.com/tinkoff/taiga-ui/issues/1089))
  ([9077e88](https://github.com/tinkoff/taiga-ui/commit/9077e885be3e789c52317c235a251f33795e0417))
- **addon-mobile:** `Sheet` fix closeable and swipe down ([#1073](https://github.com/tinkoff/taiga-ui/issues/1073))
  ([9870fb4](https://github.com/tinkoff/taiga-ui/commit/9870fb424237358c168f96e9db6263aa9e8d9bf9))
- **core:** `Button` add visual indication for clicks on mobile
  ([#1074](https://github.com/tinkoff/taiga-ui/issues/1074))
  ([143311f](https://github.com/tinkoff/taiga-ui/commit/143311f64b093a2064263473159d34f06158e9a3))
- **core:** fix expanding inputs based on content ([#1107](https://github.com/tinkoff/taiga-ui/issues/1107))
  ([72f15a2](https://github.com/tinkoff/taiga-ui/commit/72f15a23677d6dbc489ed1991f4d79c6e9b83716))
- **kit:** `Carousel` fix for iOS ([#1105](https://github.com/tinkoff/taiga-ui/issues/1105))
  ([6888347](https://github.com/tinkoff/taiga-ui/commit/6888347002138e98a708cb43a3a65279778e8fbf))
- **kit:** `Combobox` open dropdown on cleaner click ([#1078](https://github.com/tinkoff/taiga-ui/issues/1078))
  ([849f22d](https://github.com/tinkoff/taiga-ui/commit/849f22d0ddf17270eca60a9c03b4815c2953b2a6))
- **kit:** `InputInline` fix expression change error ([#1082](https://github.com/tinkoff/taiga-ui/issues/1082))
  ([8d7f615](https://github.com/tinkoff/taiga-ui/commit/8d7f615077c164ddcccb5a27344b04a7a2604acf))
- **kit:** `InputNumber` fix updating the value and limits at the same time
  ([#1076](https://github.com/tinkoff/taiga-ui/issues/1076))
  ([a9bae40](https://github.com/tinkoff/taiga-ui/commit/a9bae401c63fe8b12bf23614204ab461008d259a))
- **kit:** `PdfViewer` add `SafeResourceUrl` support ([#1090](https://github.com/tinkoff/taiga-ui/issues/1090))
  ([3b0cb71](https://github.com/tinkoff/taiga-ui/commit/3b0cb7173a09968a0f3a960aaf4f20c9ec0771a1))
- **kit:** cross browser support hiding placeholder ([#1099](https://github.com/tinkoff/taiga-ui/issues/1099))
  ([dd71659](https://github.com/tinkoff/taiga-ui/commit/dd71659249c8ede6d431908a868c751757352e94))

## [2.26.0](https://github.com/tinkoff/taiga-ui/compare/v2.25.0...v2.26.0) (2021-12-06)

### Features

- **addon-tablebars:** add adaptive for `TableBars` ([#1063](https://github.com/tinkoff/taiga-ui/issues/1063))
  ([6487074](https://github.com/tinkoff/taiga-ui/commit/6487074f00f6cb2b12b7341b71a918bfa8ad574c))
- **kit:** `Carousel` add new component ([#1044](https://github.com/tinkoff/taiga-ui/issues/1044))
  ([bb0740d](https://github.com/tinkoff/taiga-ui/commit/bb0740d682126b951d9b985b3ece9f235562eaf5))
- **kit:** `Highlight` add color customization ([#1064](https://github.com/tinkoff/taiga-ui/issues/1064))
  ([5a9d0b7](https://github.com/tinkoff/taiga-ui/commit/5a9d0b73444e2ae5b717d7db0010c7ab59079fba))

### Bug Fixes

- **addon-preview:** close preview on esc event ([#1057](https://github.com/tinkoff/taiga-ui/issues/1057))
  ([74f453c](https://github.com/tinkoff/taiga-ui/commit/74f453c381975f234f1207157d9a197dc6b21075))
- **addon-table:** fix arrow visibility in safari ([#1050](https://github.com/tinkoff/taiga-ui/issues/1050))
  ([1e0145c](https://github.com/tinkoff/taiga-ui/commit/1e0145cc14c7bfdafdb681f5f88044c402abd305))
- **core:** `Hint` fix positioning for small screens ([#1055](https://github.com/tinkoff/taiga-ui/issues/1055))
  ([31b0fb0](https://github.com/tinkoff/taiga-ui/commit/31b0fb0bbd85a01c279f58382459145eb0c0add9))

## [2.25.0](https://github.com/tinkoff/taiga-ui/compare/v2.23.0...v2.25.0) (2021-11-29)

### Features

- **addon-preview:** add new package ([#350](https://github.com/tinkoff/taiga-ui/issues/350))
  ([841be7e](https://github.com/tinkoff/taiga-ui/commit/841be7e96bc5a1f5676dcd0f6fd35945683698f7))
- **kit:** `PdfViewer` add new component ([#1032](https://github.com/tinkoff/taiga-ui/issues/1032))
  ([b953123](https://github.com/tinkoff/taiga-ui/commit/b953123103a2470d026981f0be2b102b9c90e48b))

## [2.24.0](https://github.com/tinkoff/taiga-ui/compare/v2.23.0...v2.24.0) (2021-11-22)

### Features

- **addon-doc:** support Promise content ([#821](https://github.com/tinkoff/taiga-ui/issues/821))
  ([459fc21](https://github.com/tinkoff/taiga-ui/commit/459fc21911da527cf7920df3d172301f95e3566d))
- **core:** `Button` allow configuration of default options ([#1026](https://github.com/tinkoff/taiga-ui/issues/1026))
  ([df2a8f5](https://github.com/tinkoff/taiga-ui/commit/df2a8f5a46752780617ec13295d68ad71927fabe))
- **core:** add support for virtual scroll in dropdowns ([#1018](https://github.com/tinkoff/taiga-ui/issues/1018))
  ([3ecb73b](https://github.com/tinkoff/taiga-ui/commit/3ecb73b161404d615ff3d5bac7cf13c9d2f17850))

### Bug Fixes

- **addon-commerce:** fix problem with autofill card in Safari
  ([#1024](https://github.com/tinkoff/taiga-ui/issues/1024))
  ([883fde6](https://github.com/tinkoff/taiga-ui/commit/883fde63290446c929788748c6b2a651f0bba138))
- **cdk:** `ActiveZone` fix for shadow DOM clicks ([#1028](https://github.com/tinkoff/taiga-ui/issues/1028))
  ([f2ee219](https://github.com/tinkoff/taiga-ui/commit/f2ee219f31806bdf724433c738c33ee5952cb8eb))
- **core** fix number mask bug with wrong position of thousand separator
  ([#985](https://github.com/tinkoff/taiga-ui/issues/985))
  ([9fb097c](https://github.com/tinkoff/taiga-ui/commit/9fb097c97cd0cd35ff7611912e380c0600fd12ad))

## [2.23.0](https://github.com/tinkoff/taiga-ui/compare/v2.22.0...v2.23.0) (2021-11-15)

### Features

- **addon-doc:** output visualization ([#994](https://github.com/tinkoff/taiga-ui/issues/994))
  ([835c8f1](https://github.com/tinkoff/taiga-ui/commit/835c8f1bdb53c103de5544293731c44a0d70ff17))
- **addon-mobile:** `MobileCalendar` add dark mode support ([#964](https://github.com/tinkoff/taiga-ui/issues/964))
  ([a0f230d](https://github.com/tinkoff/taiga-ui/commit/a0f230d24e6f1c005b19caca8ec7e7523f51a861))
- **kit:** `InputPassword` disable hint if text is empty string ([#981](https://github.com/tinkoff/taiga-ui/issues/981))
  ([f0407dd](https://github.com/tinkoff/taiga-ui/commit/f0407ddad111eff1e85136f8987106b850d9df46))
- **kit:** support direction: rtl for controls ([#983](https://github.com/tinkoff/taiga-ui/issues/983))
  ([c0b4b28](https://github.com/tinkoff/taiga-ui/commit/c0b4b28c9e7e5759fa451d922f4ff8ea9a97d83e))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix for long numbers and small screens
  ([#998](https://github.com/tinkoff/taiga-ui/issues/998))
  ([84078cc](https://github.com/tinkoff/taiga-ui/commit/84078ccf2b6699350572c90ac99bed9f0db10f66))
- **cdk:** `HoveredService` fix for touch devices ([#973](https://github.com/tinkoff/taiga-ui/issues/973))
  ([19e5136](https://github.com/tinkoff/taiga-ui/commit/19e513693a2c1da009f58057221a52224d51248d))
- **core:** `HostedDropdown` fix event propagation on esc ([#975](https://github.com/tinkoff/taiga-ui/issues/975))
  ([5daee4a](https://github.com/tinkoff/taiga-ui/commit/5daee4a9ce6b81a0c4a090c93bdcc3cf0f91f6f0))
- **kit:** `InputNumber` fix custom formatting ([#976](https://github.com/tinkoff/taiga-ui/issues/976))
  ([fcb4b34](https://github.com/tinkoff/taiga-ui/commit/fcb4b34650310e51c42da09f4fe6e341a829b706))
- **kit:** `MultiSelect` arrow icon overflow (by many tags) ([#982](https://github.com/tinkoff/taiga-ui/issues/982))
  ([0933adf](https://github.com/tinkoff/taiga-ui/commit/0933adfd9614631a9831d354560bd893b74f899d))

## [2.22.0](https://github.com/tinkoff/taiga-ui/compare/v2.21.0...v2.22.0) (2021-11-02)

### Features

- **addon-doc:** open sidebar on swipe ([#943](https://github.com/tinkoff/taiga-ui/issues/943))
  ([a8a4016](https://github.com/tinkoff/taiga-ui/commit/a8a40165ad1e14205fab7ab65a0b7ebac90caf81))
- **addon-editor:** `Editor[new]` dark mode support ([#947](https://github.com/tinkoff/taiga-ui/issues/947))
  ([3c2f814](https://github.com/tinkoff/taiga-ui/commit/3c2f8144b3f766866bb6d2d5d7da34ff4c2c1619))
- **cdk:** add `Zoom` directive ([#938](https://github.com/tinkoff/taiga-ui/issues/938))
  ([bbe762c](https://github.com/tinkoff/taiga-ui/commit/bbe762ca63730e01d355902b16f9e65afff20944))
- **core:** add old styles ([#957](https://github.com/tinkoff/taiga-ui/issues/957))
  ([89683cb](https://github.com/tinkoff/taiga-ui/commit/89683cbd48649bd8978078909cfa7bb2a0dab56c))
- **core,kit:** support Less 4+ ([#949](https://github.com/tinkoff/taiga-ui/issues/949))
  ([ca5f276](https://github.com/tinkoff/taiga-ui/commit/ca5f276233223de7d1da3dab75a8a8fd35cfbb45))
- **kit:** `Tree` add new component
  ([33f47b8](https://github.com/tinkoff/taiga-ui/commit/33f47b85f4ac97f8d2f9bb93685cb719f2907d4b))
- **kit:** `Badge` add "info" and "neutral" statuses ([#948](https://github.com/tinkoff/taiga-ui/issues/948))
  ([43d0f33](https://github.com/tinkoff/taiga-ui/commit/43d0f33f9ac7ed9ca042d27bcb5563d65981111e))

### Bug Fixes

- **addon-doc:** fix menu header ([#941](https://github.com/tinkoff/taiga-ui/issues/941))
  ([7168bb7](https://github.com/tinkoff/taiga-ui/commit/7168bb70d8a3e912a28e7c3bae0db8e6e6a14fcc))
- **addon-doc:** unexpected expanding subitems ([#935](https://github.com/tinkoff/taiga-ui/issues/935))
  ([2768d72](https://github.com/tinkoff/taiga-ui/commit/2768d729a47303e5d14ea3104b1a67505d9267dc))
- **core:** `SvgService` fix custom icons
  ([2cd27cf](https://github.com/tinkoff/taiga-ui/commit/2cd27cf84f18fcfd0ccd3a85c159468b8268af09))
- **core:** make hint part of current active zone ([#956](https://github.com/tinkoff/taiga-ui/issues/956))
  ([9ef7272](https://github.com/tinkoff/taiga-ui/commit/9ef727267bef116f58cd1f623c2ae41e217425eb))
- **kit:** `Select`, `ComboBox`, `MultiSelect` remove arrow icon if `disabled` or `readonly`
  ([#955](https://github.com/tinkoff/taiga-ui/issues/955))
  ([8eb4d1c](https://github.com/tinkoff/taiga-ui/commit/8eb4d1cb0b2f4791fe83efb6d50d7d7be42a9994))

## [2.21.0](https://github.com/tinkoff/taiga-ui/compare/v2.20.0...v2.21.0) (2021-10-25)

### Features

- **addon-editor:** `Editor[new]` add custom tools support ([#842](https://github.com/tinkoff/taiga-ui/issues/842))
  ([1422520](https://github.com/tinkoff/taiga-ui/commit/142252009a29e00ae4e92742abd12401109ef5a6))
- **cdk:** new directive `Pan` ([#922](https://github.com/tinkoff/taiga-ui/issues/922))
  ([d87996e](https://github.com/tinkoff/taiga-ui/commit/d87996e30516198e3b725b952c81cb3631fcb29a))
- **cdk:** new directive `Swipe` ([#914](https://github.com/tinkoff/taiga-ui/issues/914))
  ([fb7581b](https://github.com/tinkoff/taiga-ui/commit/fb7581bee1058d35533b7d801cbabc092406eb76))

### Bug Fixes

- **cdk:** `Autofill` get rid of an extra change detection cycle
  ([#908](https://github.com/tinkoff/taiga-ui/issues/908))
  ([bb051d5](https://github.com/tinkoff/taiga-ui/commit/bb051d5354fcd143c9505f70e6e756ba522f7a15))
- **core:** fix tui-mobile-only query ([#912](https://github.com/tinkoff/taiga-ui/issues/912))
  ([0457918](https://github.com/tinkoff/taiga-ui/commit/0457918945f7547359d3479d7cb6cc562645a331))

## [2.20.0](https://github.com/tinkoff/taiga-ui/compare/v2.19.0...v2.20.0) (2021-10-18)

### Features

- **addon-commerce:** support `PolymorpheusContent` in the `cardSrc` input parameter
  ([#866](https://github.com/tinkoff/taiga-ui/issues/866))
  ([353bb04](https://github.com/tinkoff/taiga-ui/commit/353bb04d604ebfface94a122d75f11f1cbce083e))
- **addon-mobile:** `Sheet` add new component ([#850](https://github.com/tinkoff/taiga-ui/issues/850))
  ([2707391](https://github.com/tinkoff/taiga-ui/commit/27073912e5056070926fe98507139c09ecc8c922))
- **cdk:** `Time` add conversion from Date method ([#877](https://github.com/tinkoff/taiga-ui/issues/877))
  ([7b47bcc](https://github.com/tinkoff/taiga-ui/commit/7b47bcc0aba6f59c7fa3993c00e29b53d242632f))
- **core:** add configuration of trailing zeroes ([#859](https://github.com/tinkoff/taiga-ui/issues/859))
  ([c765088](https://github.com/tinkoff/taiga-ui/commit/c7650887c5a044a83845c7bca7a32bb7c8119b50))
- **core:** update shadow color ([#895](https://github.com/tinkoff/taiga-ui/issues/895))
  ([26219e5](https://github.com/tinkoff/taiga-ui/commit/26219e5d59f30eafa6e5732a676cf09079becf97))
- **i18n:** add Polish support ([#828](https://github.com/tinkoff/taiga-ui/issues/828))
  ([8f8893e](https://github.com/tinkoff/taiga-ui/commit/8f8893e1c80545376a8f9c9091d35f9ba73723fe))
- **notification:** allow configuration of default options ([#636](https://github.com/tinkoff/taiga-ui/issues/636))
  ([d89e523](https://github.com/tinkoff/taiga-ui/commit/d89e523cda8d9e45f52926afe3f7a286c605dca0))

### Bug Fixes

- **addon-editor:** `Editor[new]` broken `ActiveZone` inside toolbar buttons
  ([#845](https://github.com/tinkoff/taiga-ui/issues/845))
  ([e682646](https://github.com/tinkoff/taiga-ui/commit/e682646c6b7202fc90628ac238aa132029b6a87f))
- **cdk:** fix component content recreating on context change ([#896](https://github.com/tinkoff/taiga-ui/issues/896))
  ([6932e9c](https://github.com/tinkoff/taiga-ui/commit/6932e9c5a05ea8865f91f1c494c01e38f68e1f63))
- **core:** fix neutral-bg color ([#893](https://github.com/tinkoff/taiga-ui/issues/893))
  ([d5a933c](https://github.com/tinkoff/taiga-ui/commit/d5a933c430988002553ccaeb8fa59c80f29b7b3a))
- **kit:** use proper screen keyboard on date components ([#878](https://github.com/tinkoff/taiga-ui/issues/878))
  ([218728a](https://github.com/tinkoff/taiga-ui/commit/218728a8463b0aff71015d8f3e72eb34b1f3caaf))
- **demo:** handle only one component/module per ts-file
  ([e0dcea0](https://github.com/tinkoff/taiga-ui/commit/e0dcea05fdfb457832243f17c41b5b4e26ad74c1))

## [2.19.0](https://github.com/tinkoff/taiga-ui/compare/v2.18.0...v2.19.0) (2021-10-04)

### Features

- **addon-commerce:** `InputCardGroup` make prefilled CVC readonly
  ([#812](https://github.com/tinkoff/taiga-ui/issues/812))
  ([ce5c4c5](https://github.com/tinkoff/taiga-ui/commit/ce5c4c511eb37bb793fd141fee9b1de7127414f3))
- **i18n:** add italian language ([#807](https://github.com/tinkoff/taiga-ui/issues/807))
  ([dc720fe](https://github.com/tinkoff/taiga-ui/commit/dc720fe90076da41647ad6515c0726df9c55a85c))
- **icons:** add new icons ([#820](https://github.com/tinkoff/taiga-ui/issues/820))
  ([65c3131](https://github.com/tinkoff/taiga-ui/commit/65c31317a5df36cce7bea3984a4baa385e213d84))

### Bug Fixes

- **addon-charts:** show hint on single point ([#806](https://github.com/tinkoff/taiga-ui/issues/806))
  ([475709e](https://github.com/tinkoff/taiga-ui/commit/475709e529993ce62f30b10d8dff37be5f95ab9a))
- **addon-mobile:** `MobileCalendar` fix styles ([#809](https://github.com/tinkoff/taiga-ui/issues/809))
  ([953cd3a](https://github.com/tinkoff/taiga-ui/commit/953cd3a79316e0f551bef827fdcbd437778caac7))
- **core:** `PrimitiveCalendar` red color for weekends (with custom `TUI_FIRST_DAY_OF_WEEK`)
  ([#795](https://github.com/tinkoff/taiga-ui/issues/795))
  ([81d0d21](https://github.com/tinkoff/taiga-ui/commit/81d0d21430f62c3204c289a8eca4b83e1e08a3a4))
- **core:** change min-height of `ScrollControls`'s bar to fix `TextArea`
  ([#664](https://github.com/tinkoff/taiga-ui/issues/664))
  ([313127f](https://github.com/tinkoff/taiga-ui/commit/313127f57bcd538521a81ee8d1f22682e0b15a0c))
- **core:** fix updating dynamic ng-content in `PrimitiveTextfield`
  ([#789](https://github.com/tinkoff/taiga-ui/issues/789))
  ([bfcaccd](https://github.com/tinkoff/taiga-ui/commit/bfcaccddfbfa80ca153501c6b4631d4c2555ed4f))
- **icons:** make icon size dependent on font size ([#792](https://github.com/tinkoff/taiga-ui/issues/792))
  ([cfaedf2](https://github.com/tinkoff/taiga-ui/commit/cfaedf2ab07739261636327a79f8ee0f2548ec24))
- **kit:** `InputDateRange` fix filler appearing on custom date ([#813](https://github.com/tinkoff/taiga-ui/issues/813))
  ([24f95ef](https://github.com/tinkoff/taiga-ui/commit/24f95efbc3032d8f2b4588f9874cd5f266ff25db))
- **kit:** `InputFile` trim whitespaces in accept list ([#786](https://github.com/tinkoff/taiga-ui/issues/786))
  ([a59b92e](https://github.com/tinkoff/taiga-ui/commit/a59b92e94bace51ace013a188b0bbc7e6b5b3b95))

## [2.18.0](https://github.com/tinkoff/taiga-ui/compare/v2.17.0...v2.18.0) (2021-09-27)

### Features

- **addon-doc:** support left menu items without sections ([#463](https://github.com/tinkoff/taiga-ui/issues/463))
  ([8f3e1cf](https://github.com/tinkoff/taiga-ui/commit/8f3e1cfcc64e00fb7a618704d685fb984e1b3cd0))
- **addon-editor:** add ability to color cells ([#766](https://github.com/tinkoff/taiga-ui/issues/766))
  ([c008bfe](https://github.com/tinkoff/taiga-ui/commit/c008bfed0cdbdcdc3b4a57d883ecf6439d9f62c0))
- **all:** add prefix t- to internal classes to avoid clashed ([#704](https://github.com/tinkoff/taiga-ui/issues/704))
  ([8522c88](https://github.com/tinkoff/taiga-ui/commit/8522c8859956bfcf133587d118e202b411c27c0e))
- **all:** preserve const enums [[#495](https://github.com/tinkoff/taiga-ui/issues/495)]
  ([6ac8e00](https://github.com/tinkoff/taiga-ui/commit/6ac8e004f0d6a22787bcc4c8ba6dcf1979079074))
- **core:** `Dialog` add directive for declarative dialogs ([#745](https://github.com/tinkoff/taiga-ui/issues/745))
  ([cbd1a90](https://github.com/tinkoff/taiga-ui/commit/cbd1a906c8fb62ce4c828548ab12d2be0e756c29))
- **kit:** `Stringify` add new pipe ([#775](https://github.com/tinkoff/taiga-ui/issues/775))
  ([39e4766](https://github.com/tinkoff/taiga-ui/commit/39e47660eb09995019fd01d73404ff58d8badf4d))

### Bug Fixes

- **addon-commerce:** fix card length check for unknown payment systems
  ([#728](https://github.com/tinkoff/taiga-ui/issues/728))
  ([271b3db](https://github.com/tinkoff/taiga-ui/commit/271b3db782182c4e3d9682c0d4a4921ee4160e4f))
- **demo:** add `Progress`, `DropdownContext`, `Editor` modules to stackblitz starter
  ([7515fcc](https://github.com/tinkoff/taiga-ui/commit/7515fcced13c87701c6988db111fe410754b58f2))
- **i18n:** fix russian i18n for editor ([#757](https://github.com/tinkoff/taiga-ui/issues/757))
  ([55dd5d6](https://github.com/tinkoff/taiga-ui/commit/55dd5d6ff6ec30ded00a828212984b40b292ffb2))
- **kit:** `BadgedContent` fix icons color ([#749](https://github.com/tinkoff/taiga-ui/issues/749))
  ([add85a4](https://github.com/tinkoff/taiga-ui/commit/add85a4e9f6365421567707ee30e4aac907db4d2))
- **kit:** `InputPhoneInternational` correction of disabled state
  ([0591eca](https://github.com/tinkoff/taiga-ui/commit/0591eca5d3bec3f5f2ddf9ade7cdaba52a4494c2))
- **kit:** `ProgressCircle` keeps css-property `r` while --prod build
  ([e60acf4](https://github.com/tinkoff/taiga-ui/commit/e60acf4776063ff325c4bf1080c74f78d771f152)), closes
  [issue#1021](https://github.com/tinkoff/issue/issues/1021)

## [2.17.0](https://github.com/tinkoff/taiga-ui/compare/v2.16.3...v2.17.0) (2021-09-20)

### Features

- **icons:** add new icons `tuiIconBellOff` ([#698](https://github.com/tinkoff/taiga-ui/issues/698))
  ([fd15a54](https://github.com/tinkoff/taiga-ui/commit/fd15a544ecc818e209718bdc6c5ced4bd34f9922))
- **kit:** new component `ProgressCircle` ([#697](https://github.com/tinkoff/taiga-ui/issues/697))
  ([094c14d](https://github.com/tinkoff/taiga-ui/commit/094c14d06c12fd87a17135e3cd6f23891ffa966f))
- **kit:** new component `ProgressSegmented` ([#714](https://github.com/tinkoff/taiga-ui/issues/714))
  ([66dceff](https://github.com/tinkoff/taiga-ui/commit/66dcefffbe4f86cfff788af26921fe87e493d9f3))

### Bug Fixes

- **core:** fix primitive-texfield template ([#715](https://github.com/tinkoff/taiga-ui/issues/715))
  ([eca780a](https://github.com/tinkoff/taiga-ui/commit/eca780a3baad5a67dcc2ae1af167302c1a50fa79))

### [2.16.3](https://github.com/tinkoff/taiga-ui/compare/v2.16.2...v2.16.3) (2021-09-15)

### Bug Fixes

- **core:** fix primitive-texfield padding ([#695](https://github.com/tinkoff/taiga-ui/issues/695))
  ([fc7ae56](https://github.com/tinkoff/taiga-ui/commit/fc7ae56b89bfa2e39b9f95467fea5857989ade62))

### [2.16.2](https://github.com/tinkoff/taiga-ui/compare/v2.16.1...v2.16.2) (2021-09-14)

### Bug Fixes

- **core:** autofill border color
  ([e80c8ed](https://github.com/tinkoff/taiga-ui/commit/e80c8ed3707fe152383aaa434c4700647d479ce6))

### [2.16.1](https://github.com/tinkoff/taiga-ui/compare/v2.16.0...v2.16.1) (2021-09-14)

### Features

- **core:** update media breakpoints ([#678](https://github.com/tinkoff/taiga-ui/issues/678))
  ([db84b43](https://github.com/tinkoff/taiga-ui/commit/db84b4362d4bead3ca2e915993f9d42d91aff5bc))

### Bug Fixes

- **addon-mobile:** fix user-select for contenteditable ([#689](https://github.com/tinkoff/taiga-ui/issues/689))
  ([381365d](https://github.com/tinkoff/taiga-ui/commit/381365d6b42aa4f94ef90bef7ee6649e28f42d9f))

## [2.16.0](https://github.com/tinkoff/taiga-ui/compare/v2.15.0...v2.16.0) (2021-09-13)

### Features

- **addon-doc:** add polymorpheus to heading and description of examples
  ([#677](https://github.com/tinkoff/taiga-ui/issues/677))
  ([02bc696](https://github.com/tinkoff/taiga-ui/commit/02bc6965ad9b7b9165f2d9f6aa1d27bd4c1ca5b0))
- **addon-editor:** add new `Editor` component ([#583](https://github.com/tinkoff/taiga-ui/issues/583))
  ([ba602df](https://github.com/tinkoff/taiga-ui/commit/ba602df0946aaba5f1b14b5f7cefe0b7742e47de))
- **kit:** `InputCount` allow configuration of default options ([#675](https://github.com/tinkoff/taiga-ui/issues/675))
  ([fab225b](https://github.com/tinkoff/taiga-ui/commit/fab225bac43a6ad39c50c256c94fe5503e994755))
- **kit:** new attribute component `ProgressBar` ([#665](https://github.com/tinkoff/taiga-ui/issues/665))
  ([780b120](https://github.com/tinkoff/taiga-ui/commit/780b1201a468e0801b42796a6b6f447243dfb46f))
- **core:** `TUI_NUMBER_FORMAT` token to configure decimals and thousand symbols in number formatting
  ([9748ba4](https://github.com/tinkoff/taiga-ui/commit/9748ba46ff99aa7f7c01d0abc02cd07f894312bc))

### Bug Fixes

- **core:** fix Firefox input issue with caret outside visible area
  ([#612](https://github.com/tinkoff/taiga-ui/issues/612))
  ([ecf6b25](https://github.com/tinkoff/taiga-ui/commit/ecf6b25ee096c37e9073981fd6bcdc47d480f462))
- **kit:** `MultiSelect` fix dropdown when wrapped in label ([#685](https://github.com/tinkoff/taiga-ui/issues/685))
  ([a63b04d](https://github.com/tinkoff/taiga-ui/commit/a63b04d2d1c24065926f37a1b564ca4f50a8b9c6))

## [2.15.0](https://github.com/tinkoff/taiga-ui/compare/v2.14.0...v2.15.0) (2021-09-06)

### Features

- **addon-commerce:** `InputCardGroup` add ability to use `DataList`
  ([#660](https://github.com/tinkoff/taiga-ui/issues/660))
  ([771b94b](https://github.com/tinkoff/taiga-ui/commit/771b94b2daee1c522e5f92ccf34714c309bd3958))
- **demo:** new documentation page `Testing` ([#661](https://github.com/tinkoff/taiga-ui/issues/661))
  ([93de6fc](https://github.com/tinkoff/taiga-ui/commit/93de6fc65716e7089653c21133ff02d582fd2be5))
- **kit:** switch to angular `i18nPlural` pipe ([#628](https://github.com/tinkoff/taiga-ui/issues/628))
  ([a19f53a](https://github.com/tinkoff/taiga-ui/commit/a19f53a1d0a8fdd94c8314faf3af566c043609eb))
- **kit:** `Toggle` allow configuring default options ([#635](https://github.com/tinkoff/taiga-ui/issues/635))
  ([945e2f4](https://github.com/tinkoff/taiga-ui/commit/945e2f4d1148808e78f8a73a7dc7404d26ab72e8))
- **i18n:** add portuguese language ([#642](https://github.com/tinkoff/taiga-ui/issues/642))
  ([e360f34](https://github.com/tinkoff/taiga-ui/commit/e360f3495db8727cef90f2aedeae5f887c82a817))

### Bug Fixes

- **addon-commerce:** fix card icons ([#647](https://github.com/tinkoff/taiga-ui/issues/647))
  ([8682755](https://github.com/tinkoff/taiga-ui/commit/8682755f301997bcc022a2d016a49d01d471cb6e))
- **addon-doc:** fix overlapping by sticky header while using anchor links
  ([8f03714](https://github.com/tinkoff/taiga-ui/commit/8f037141d235613d441aed3cf65d2915851e6b67))
- **addon-mobile:** `Sidebar` fix change detection triggered from inside
  ([3a1f08d](https://github.com/tinkoff/taiga-ui/commit/3a1f08db6e776247c18bfc6eac083b9502150a61))
- **addon-table:** `TablePagination` fix button titles ([#657](https://github.com/tinkoff/taiga-ui/issues/657))
  ([11521dd](https://github.com/tinkoff/taiga-ui/commit/11521dddd676b49a024dff22538c35faf4ca6f8e))
- **cdk:** `TUI_DIALOG_CLOSES_ON_BACK` feature toggle token ([#658](https://github.com/tinkoff/taiga-ui/issues/658))
  ([db4debe](https://github.com/tinkoff/taiga-ui/commit/db4debed99728a3ba7241d803c3772112ffdb2be))
- **core:** hide extra scrollbar on IOS ([#629](https://github.com/tinkoff/taiga-ui/issues/629))
  ([c4e6648](https://github.com/tinkoff/taiga-ui/commit/c4e664832858662708a755a1d4df8495589cf298))
- **core:** space around notification alert ([#655](https://github.com/tinkoff/taiga-ui/issues/655))
  ([b7c3ae3](https://github.com/tinkoff/taiga-ui/commit/b7c3ae342f937fc138afa5e6940e079371e33945))
- **kit:** `InputCount` controllers (+/-) overlapping ([#555](https://github.com/tinkoff/taiga-ui/issues/555))
  ([0999a22](https://github.com/tinkoff/taiga-ui/commit/0999a222aef2ade834d7a53fb414cdd78aaccb55))
- **kit:** `InputDateTime` apply min/max time restrictions if date was changed via calendar
  ([#649](https://github.com/tinkoff/taiga-ui/issues/649))
  ([6998794](https://github.com/tinkoff/taiga-ui/commit/699879480afd8a7441460fb421ce692f41c2c350)), closes
  [#645](https://github.com/tinkoff/taiga-ui/issues/645)
- **kit:** fix extra characters highlight in `TextArea` with hint
  ([#640](https://github.com/tinkoff/taiga-ui/issues/640))
  ([e3be14e](https://github.com/tinkoff/taiga-ui/commit/e3be14e200646feac0ee309468952f5e71057a06))
- **shematics:** install `@types/dompurify` when "add sanitizer" option is selected
  ([#659](https://github.com/tinkoff/taiga-ui/issues/659))
  ([463c565](https://github.com/tinkoff/taiga-ui/commit/463c565bdacb1c72b81056754f151dc83e22bc90))

## [2.14.0](https://github.com/tinkoff/taiga-ui/compare/v2.13.1...v2.14.0) (2021-08-13)

### Features

- **cdk:** `For` add new directive ([#615](https://github.com/tinkoff/taiga-ui/issues/615))
  ([6165f85](https://github.com/tinkoff/taiga-ui/commit/6165f8591dd7dd9d8b52a26677e58fa329b96488))
- **demo:** disable animation if app is running under Cypress (via `TUI_ANIMATIONS_DURATION`)
  ([#572](https://github.com/tinkoff/taiga-ui/issues/572))
  ([165a3d3](https://github.com/tinkoff/taiga-ui/commit/165a3d31d3154887f9251720f740ffcbb439fdb3))
- **i18n:** add Spanish translations for countries ([#600](https://github.com/tinkoff/taiga-ui/issues/600))
  ([2ed269f](https://github.com/tinkoff/taiga-ui/commit/2ed269f170eb7add37c23eb74fb9182c289cbbbf))
- **kit:** `DropdownContext` add new directive ([#527](https://github.com/tinkoff/taiga-ui/issues/527))
  ([89bbfcb](https://github.com/tinkoff/taiga-ui/commit/89bbfcb29e81e2fb8cd7521951a5a6f2b760e9de))
- **kit:** `InputDateTime` upgrade `min`, `max` inputs (add time constraints)
  ([#617](https://github.com/tinkoff/taiga-ui/issues/617))
  ([7b2a9df](https://github.com/tinkoff/taiga-ui/commit/7b2a9dfef722e109c56bbe9c4bc6e099edf27067))
- **kit:** `InputPhoneInternational` add `countryIsoCode` output
  ([#577](https://github.com/tinkoff/taiga-ui/issues/577))
  ([f60d185](https://github.com/tinkoff/taiga-ui/commit/f60d18576025c6209fa1bf91add7702e9a75b34b))
- **kit:** `InputPhoneInternational` add label support ([#607](https://github.com/tinkoff/taiga-ui/issues/607))
  ([07829a8](https://github.com/tinkoff/taiga-ui/commit/07829a8ce5089dd17ba5458a4c879f48d8274690))
- **kit:** `MultiSelect`, `InputTag` add size `s` ([#561](https://github.com/tinkoff/taiga-ui/issues/561))
  ([cb621f5](https://github.com/tinkoff/taiga-ui/commit/cb621f589c3b23470629123af14d51822a7d7a29))
- **kit:** `TextArea` extra characters highlight ([#593](https://github.com/tinkoff/taiga-ui/issues/593))
  ([45b647e](https://github.com/tinkoff/taiga-ui/commit/45b647e93ddd3fa97cf6872b53ab7892ed2745ea))
- **kit:** i18n token `TUI_DATE_TEXTS` inside `InputDateTime`, `InputDate`, `InputDateRange`
  ([#552](https://github.com/tinkoff/taiga-ui/issues/552))
  ([354d495](https://github.com/tinkoff/taiga-ui/commit/354d495fa3cd326ad58c3c3bc8f6e0545d81744d))
- **schematics:** add ability to use ng add ([#520](https://github.com/tinkoff/taiga-ui/issues/520))
  ([8134d06](https://github.com/tinkoff/taiga-ui/commit/8134d060519280286faa41695149f10cb9953724))

### Bug Fixes

- **addon-commerce:** `InputCardGroup` fix dynamic localization ([#613](https://github.com/tinkoff/taiga-ui/issues/613))
  ([5902f28](https://github.com/tinkoff/taiga-ui/commit/5902f285867fbd7c1c4414cc92ff2125c5316637))
- **cdk:** `ActiveZone` fix for shadow DOM ([#587](https://github.com/tinkoff/taiga-ui/issues/587))
  ([d872a53](https://github.com/tinkoff/taiga-ui/commit/d872a533b5ffb703b165604f1d9846eafac12aa8))
- **cdk:** `ActiveZone` ignore focus loss due to disable ([#595](https://github.com/tinkoff/taiga-ui/issues/595))
  ([181e79a](https://github.com/tinkoff/taiga-ui/commit/181e79a16410e49d83be1d2cb7f9ecb0206513d5))
- **cdk:** `DialogHost` disable closing dialog on browser `Back` inside iframe
  ([#588](https://github.com/tinkoff/taiga-ui/issues/588))
  ([39b44df](https://github.com/tinkoff/taiga-ui/commit/39b44df9a3329eeb91b58d811937207abcad6b50))
- **cdk:** `MediaDirective` fix freezes in mobile safari ([#570](https://github.com/tinkoff/taiga-ui/issues/570))
  ([1acad96](https://github.com/tinkoff/taiga-ui/commit/1acad961ce47e4d3b437f3f39f6263dd8d7019c1))
- **cdk:** make `markControlAsTouchedAndValidate` work with empty `FormArray` and `FormGroup`
  ([#586](https://github.com/tinkoff/taiga-ui/issues/586))
  ([715dde8](https://github.com/tinkoff/taiga-ui/commit/715dde802ac7fad5b66543619837f303e88526a1))
- **core:** `Button` fix expression changed for `showLoader` ([#598](https://github.com/tinkoff/taiga-ui/issues/598))
  ([902ea7e](https://github.com/tinkoff/taiga-ui/commit/902ea7e760e7a1c63be1e7e5e7dd48f46b6dbb4b))
- **core:** `InputPhone` fix cleaner [#508](https://github.com/tinkoff/taiga-ui/issues/508)
  ([#519](https://github.com/tinkoff/taiga-ui/issues/519))
  ([cd4b974](https://github.com/tinkoff/taiga-ui/commit/cd4b974e4e276ae56cc35967bca4c505cfaf589c))
- **core:** fix autofill colors in dark theme ([#605](https://github.com/tinkoff/taiga-ui/issues/605))
  ([a285032](https://github.com/tinkoff/taiga-ui/commit/a285032fbcccac92a8f9d2f803effb5e71037ad7))
- **kit:** `FieldError` fix change detection for OnPush nesting ([#564](https://github.com/tinkoff/taiga-ui/issues/564))
  ([b258dfb](https://github.com/tinkoff/taiga-ui/commit/b258dfb4c7687a3838e8f44a6a4c3ace79d8dafa))
- **kit:** `InputDateTime` fix losing unfinished input on the first blur
  ([#551](https://github.com/tinkoff/taiga-ui/issues/551))
  ([28514f6](https://github.com/tinkoff/taiga-ui/commit/28514f6b0ff0aa8d418c46d0d759b5108c18fd3e))
- **kit:** `Toggle` fix loader position ([#599](https://github.com/tinkoff/taiga-ui/issues/599))
  ([3deade0](https://github.com/tinkoff/taiga-ui/commit/3deade01edd3b2416606d4193c5487336f0bc7e9))

### [2.13.1](https://github.com/tinkoff/taiga-ui/compare/v2.13.0...v2.13.1) (2021-07-20)

### Features

- **i18n:** add Vietnamese translation ([#562](https://github.com/tinkoff/taiga-ui/issues/562))
  ([a7ee3c8](https://github.com/tinkoff/taiga-ui/commit/a7ee3c809b7118446517a37dbdb94d3e3998dd03))

### Bug Fixes

- **cdk:** `getClipboardDataText` return text/plain format as fallback
  ([#568](https://github.com/tinkoff/taiga-ui/issues/568))
  ([0615e20](https://github.com/tinkoff/taiga-ui/commit/0615e20519d909b5b429d36c4e5cb4177eaddddd))
- **cdk:** fix dropdowns in ShadowDom inside iframe ([#565](https://github.com/tinkoff/taiga-ui/issues/565))
  ([d48efa1](https://github.com/tinkoff/taiga-ui/commit/d48efa1913cab9574326834571486030b2db8e25))
- **kit:** `Breadcrumbs` fix dynamic items ([#560](https://github.com/tinkoff/taiga-ui/issues/560))
  ([ab18533](https://github.com/tinkoff/taiga-ui/commit/ab18533f9c65a4553d5bb7df078dc3a8085dcb9d))

## [2.13.0](https://github.com/tinkoff/taiga-ui/compare/v2.12.0...v2.13.0) (2021-07-13)

### Features

- **addon-commerce:** `InputCardGrouped` change text based on screen size
  ([#542](https://github.com/tinkoff/taiga-ui/issues/542))
  ([099158b](https://github.com/tinkoff/taiga-ui/commit/099158b52ed7e3dedece56d76334aa94d9dc7f23))
- **cdk:** close dialog on back button ([#486](https://github.com/tinkoff/taiga-ui/issues/486))
  ([d685a88](https://github.com/tinkoff/taiga-ui/commit/d685a88a2c1ba537991836fe51c89c939e379473))
- **i18n:** add Dutch translation for countries ([#516](https://github.com/tinkoff/taiga-ui/issues/516))
  ([a0ddd50](https://github.com/tinkoff/taiga-ui/commit/a0ddd50bcd2fb0073c84a431fadc2586c9da5eae))
- **i18n:** add french translation for countries ([#538](https://github.com/tinkoff/taiga-ui/issues/538))
  ([b6a6e4d](https://github.com/tinkoff/taiga-ui/commit/b6a6e4dd28192bac37d5eabd9bbd10b1a64ba985))
- **kit:** `InputPhoneInternational` autoselect country code on paste and drop events
  ([#532](https://github.com/tinkoff/taiga-ui/issues/532))
  ([7b381d6](https://github.com/tinkoff/taiga-ui/commit/7b381d63309dc53a76cd502470dd552c3ff80ef2))
- **kit:** `StringifyContent` add pipe
  ([d86a5a0](https://github.com/tinkoff/taiga-ui/commit/d86a5a09aedaef27cf8b3932a8f98f0fd3fc36de))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` prevent scrolling ([#529](https://github.com/tinkoff/taiga-ui/issues/529))
  ([bbf3f68](https://github.com/tinkoff/taiga-ui/commit/bbf3f685bfc1e96d35e17699f6a46bb924a1936b))
- **cdk:** `ActiveZone` properly handle parent element removal ([#545](https://github.com/tinkoff/taiga-ui/issues/545))
  ([f03d577](https://github.com/tinkoff/taiga-ui/commit/f03d5774f472280aad2b2de087cd179b8a622241))
- **core:** change the typography of headings ([#534](https://github.com/tinkoff/taiga-ui/issues/534))
  ([14afad6](https://github.com/tinkoff/taiga-ui/commit/14afad6bf342b9fe70f50a956f34967708b3d793))
- **kit:** `CheckboxLabeled`, `RadioLabeled` fix night theme color
  ([#539](https://github.com/tinkoff/taiga-ui/issues/539))
  ([b61472b](https://github.com/tinkoff/taiga-ui/commit/b61472baf71f280fb9910ce73bb97e47512f755e))
- **kit:** `FilterByInput` disable filtering on strict match ([#543](https://github.com/tinkoff/taiga-ui/issues/543))
  ([1382d60](https://github.com/tinkoff/taiga-ui/commit/1382d604572120195f0f4729f6b0c26acab6ee4f))
- **kit:** `InputCount` fix buttons size ([#537](https://github.com/tinkoff/taiga-ui/issues/537))
  ([60e7ab7](https://github.com/tinkoff/taiga-ui/commit/60e7ab77618432f08395f68e41a5b8d8651b9474))
- **kit:** `TabsWithMore` fix flickering for certain width ([#548](https://github.com/tinkoff/taiga-ui/issues/548))
  ([6f53f27](https://github.com/tinkoff/taiga-ui/commit/6f53f27111302dcf4b41871380e60399f1b47b74))

## [2.12.0](https://github.com/tinkoff/taiga-ui/compare/v2.11.2...v2.12.0) (2021-06-29)

### Features

- **addon-doc:** sync navigation panel link with opened page ([#254](https://github.com/tinkoff/taiga-ui/issues/254))
  ([cfc9d85](https://github.com/tinkoff/taiga-ui/commit/cfc9d85e6030243f992912e121d966735e339e5d))
- **all:** switch to rem units ([#488](https://github.com/tinkoff/taiga-ui/issues/488))
  ([800da63](https://github.com/tinkoff/taiga-ui/commit/800da63e2f546e581db9eb08dcc2e84c2fd1cf66))
- **core:** `TUI_FIRST_DAY_OF_WEEK` add a new token to customize calendar
  ([4299acb](https://github.com/tinkoff/taiga-ui/commit/4299acb89876e9e86daff23797ae776223b72f9c))
- **i18n:** Add french localisation ([#489](https://github.com/tinkoff/taiga-ui/issues/489))
  ([fd7a987](https://github.com/tinkoff/taiga-ui/commit/fd7a9870b0292e4dfb9916f104eb725459e25d3b))
- **kit:** `CalendarRange` add `value` input and output ([#507](https://github.com/tinkoff/taiga-ui/issues/507))
  ([f51431c](https://github.com/tinkoff/taiga-ui/commit/f51431ce813f666ea1a5b932a1c59543cfb2e8bf))
- **kit:** `FilterByInput` support `null` and 2D arrays ([#511](https://github.com/tinkoff/taiga-ui/issues/511))
  ([3c9d2b4](https://github.com/tinkoff/taiga-ui/commit/3c9d2b4c2966e0943c414a190a03078d34f88409))
- **kit:** `InputTime` add configuration token ([#487](https://github.com/tinkoff/taiga-ui/issues/487))
  ([ae8c0f2](https://github.com/tinkoff/taiga-ui/commit/ae8c0f2f9bf205abf1d0f198fe6bfdc3cfe3c18d))
- **kit:** `MultiSelect` support 2d arrays in `HideSelected` pipe
  ([#504](https://github.com/tinkoff/taiga-ui/issues/504))
  ([663c497](https://github.com/tinkoff/taiga-ui/commit/663c4973dee7afb62904e4e2a37b952d14b65a77))

### Bug Fixes

- **cdk:** opening many different types dialogs together ([#503](https://github.com/tinkoff/taiga-ui/issues/503))
  ([390e718](https://github.com/tinkoff/taiga-ui/commit/390e7188115595adba7af46b32d21562b979b339))
- **core:** `Checkbox` fix icon transition from indeterminate to false state
  ([#502](https://github.com/tinkoff/taiga-ui/issues/502))
  ([1e12d78](https://github.com/tinkoff/taiga-ui/commit/1e12d78e29d2cc85a7a2d93fb6c4d943e3ccb955))
- **core:** `Link` fix mode ([#501](https://github.com/tinkoff/taiga-ui/issues/501))
  ([890b7cd](https://github.com/tinkoff/taiga-ui/commit/890b7cd9f01ff23762cb8cf46e9335eee9c6f93e))

### [2.11.2](https://github.com/tinkoff/taiga-ui/compare/v2.11.1...v2.11.2) (2021-06-10)

### Features

- **kit:** `filterByInputWith` add new pipe to filter with custom stringify
  ([#479](https://github.com/tinkoff/taiga-ui/issues/479))
  ([996e8af](https://github.com/tinkoff/taiga-ui/commit/996e8afe863860b68ad583516bb539a4115b5b71))

### Bug Fixes

- **core:** `Dropdown` fix animation retrigger in submenu ([#466](https://github.com/tinkoff/taiga-ui/issues/466))
  ([dabb336](https://github.com/tinkoff/taiga-ui/commit/dabb3362c334d5761473c6ffaef5cc2be5f1f974))
- **kit:** `ComboBox` fix caret outside of visible area upon selection
  ([#477](https://github.com/tinkoff/taiga-ui/issues/477))
  ([a79def4](https://github.com/tinkoff/taiga-ui/commit/a79def419c0bab412fd5ebdafcb3b83644cfe7ff))

### [2.11.1](https://github.com/tinkoff/taiga-ui/compare/v2.11.0...v2.11.1) (2021-06-08)

### Bug Fixes

- **kit:** `Tabs` fix provider issue for standalone tab ([#470](https://github.com/tinkoff/taiga-ui/issues/470))
  ([3699c09](https://github.com/tinkoff/taiga-ui/commit/3699c093b364dff06514ad6aca804bcfd6dec983))

## [2.11.0](https://github.com/tinkoff/taiga-ui/compare/v2.10.1...v2.11.0) (2021-06-07)

### Features

- **addon-charts:** implement new CSS vars to color charts ([#464](https://github.com/tinkoff/taiga-ui/issues/464))
  ([0d96ece](https://github.com/tinkoff/taiga-ui/commit/0d96ecef44d6410e7aeb8cbd92cbe5e15b2e81d9))
- **addon-doc:** allow strings as logo img url
  ([2b4c516](https://github.com/tinkoff/taiga-ui/commit/2b4c51698d0ddbf931737903a3b6aa613d72988c))
- **all:** switch from string enums to string join types for inputs
  ([#455](https://github.com/tinkoff/taiga-ui/issues/455))
  ([f5630fc](https://github.com/tinkoff/taiga-ui/commit/f5630fc23d414ef8338062c3a3595b8dd61bde84))
- **core:** `NotificationService` make `autoClose` timeout configurable
  ([#441](https://github.com/tinkoff/taiga-ui/issues/441))
  ([bd6e74b](https://github.com/tinkoff/taiga-ui/commit/bd6e74b6708dccd0f2a9dc3bf94b2c4b6b78b968))
- **core:** `Tooltip` tapping on mobile does not focus inputs ([#453](https://github.com/tinkoff/taiga-ui/issues/453))
  ([d9511e9](https://github.com/tinkoff/taiga-ui/commit/d9511e95b5b19abc55043c85e67c140924ff4e4f))
- **kit:** `Slider`, `Range` add `quantum` property ([#445](https://github.com/tinkoff/taiga-ui/issues/445))
  ([4034983](https://github.com/tinkoff/taiga-ui/commit/4034983d8e229022c4411736a57d721c38806ce3))
- **kit:** `TextArea` add multiline placeholder support ([#456](https://github.com/tinkoff/taiga-ui/issues/456))
  ([06325bd](https://github.com/tinkoff/taiga-ui/commit/06325bdc0dea6012d4563e2865efe50a5760568a))

### Bug Fixes

- **cdk:** `ActiveZone` wait for `focusout` event after `mousedown`
  ([d11da1f](https://github.com/tinkoff/taiga-ui/commit/d11da1f78126e088cc7f6ee43f37de6e62d2a359))
- **cdk:** `Validator` update validity state on destroy ([#461](https://github.com/tinkoff/taiga-ui/issues/461))
  ([37caf0d](https://github.com/tinkoff/taiga-ui/commit/37caf0df65cd15719f351332d03332ff949fc147))
- **core:** `Calendar` remove jumps due to limits
  ([adf08a8](https://github.com/tinkoff/taiga-ui/commit/adf08a89ce13b8cb2e88be82abfbf096a79f80dc))
- **kit:** `LazyLoading` clear background after load event ([#467](https://github.com/tinkoff/taiga-ui/issues/467))
  ([54a4334](https://github.com/tinkoff/taiga-ui/commit/54a4334d23862fbd07b47b7918a806cb2c1e272a))
- **kit:** `Select`, `ComboBox`, `MultiSelect` cut overflown items with ellipsis
  ([#446](https://github.com/tinkoff/taiga-ui/issues/446))
  ([5a39ec8](https://github.com/tinkoff/taiga-ui/commit/5a39ec880b4193142fbca7e305f45cd4d940d92f))
- **kit:** `TextArea` properly react to night mode ([#465](https://github.com/tinkoff/taiga-ui/issues/465))
  ([3e60e98](https://github.com/tinkoff/taiga-ui/commit/3e60e98625365b38395bae1382238496fc7ccf3e))
- **kit:** `Tabs` fix `activeItemIndex` when `routerLink` tab is removed
  ([#452](https://github.com/tinkoff/taiga-ui/issues/452))
  ([075772b](https://github.com/tinkoff/taiga-ui/commit/075772b41475ee7d99d242ce69f9a565365e8a9d))

### [2.10.1](https://github.com/tinkoff/taiga-ui/compare/v2.10.0...v2.10.1) (2021-05-26)

### Bug Fixes

- **kit:** fix broken imports ([#439](https://github.com/tinkoff/taiga-ui/issues/439))
  ([46eacf8](https://github.com/tinkoff/taiga-ui/commit/46eacf833d6d7bed2d0dfd717f81c15e0c77a8de))

## [2.10.0](https://github.com/tinkoff/taiga-ui/compare/v2.9.1...v2.10.0) (2021-05-25)

### Features

- **core:** `Dialog` add default template for primitive content ([#409](https://github.com/tinkoff/taiga-ui/issues/409))
  ([4fd1ee3](https://github.com/tinkoff/taiga-ui/commit/4fd1ee3c51e4004ad5e7e3f227d7e41e530c80b3))
- **core:** `Notifications` keep open if hovered ([#420](https://github.com/tinkoff/taiga-ui/issues/420))
  ([adfb865](https://github.com/tinkoff/taiga-ui/commit/adfb8655c7ffc852d7741c3f5144068ccc22996f))
- **core:** switch skeleton animation to opacity to improve performance
  ([#402](https://github.com/tinkoff/taiga-ui/issues/402))
  ([787208b](https://github.com/tinkoff/taiga-ui/commit/787208b4d71ed48736ec955205959fe1999060ad))
- **kit:** `Breadcrumbs` implement new API exposing the links ([#412](https://github.com/tinkoff/taiga-ui/issues/412))
  ([31ae7e7](https://github.com/tinkoff/taiga-ui/commit/31ae7e72775be7e3293da3107e3588290a83fee5))
- **kit:** `FieldError` support plain strings errors ([#259](https://github.com/tinkoff/taiga-ui/issues/259))
  ([6801143](https://github.com/tinkoff/taiga-ui/commit/680114338dc97b0559469530fcabc701130732bf))
- **kit:** `FilterByInput` add new pipe ([#425](https://github.com/tinkoff/taiga-ui/issues/425))
  ([edfa580](https://github.com/tinkoff/taiga-ui/commit/edfa5808a6fea43b260f04c4e275e9fc4be1dc11))
- **kit:** `InputPassword` add default configuration through DI token
  ([#369](https://github.com/tinkoff/taiga-ui/issues/369))
  ([f98d8f3](https://github.com/tinkoff/taiga-ui/commit/f98d8f3459c55ef907d27c8b5160ee5e12775eaa))

### Bug Fixes

- **addon-charts:** `BarChart` fix height in collapsed mode ([#428](https://github.com/tinkoff/taiga-ui/issues/428))
  ([1f7c137](https://github.com/tinkoff/taiga-ui/commit/1f7c137bb9e861d1af08d0da39ac342778ed14c8))
- **addon-commerce:** `InputCard` react to `readOnly` ([#434](https://github.com/tinkoff/taiga-ui/issues/434))
  ([b1771a4](https://github.com/tinkoff/taiga-ui/commit/b1771a44cc06c689644d1db53cdd91728590f184))
- **addon-table:** `defaultSorter` properly sort strings ([#427](https://github.com/tinkoff/taiga-ui/issues/427))
  ([ff43170](https://github.com/tinkoff/taiga-ui/commit/ff4317034df547c82cea0e0afec74a0e6325e9ad))
- **core:** `Link` fix disabled appearance when used on buttons ([#422](https://github.com/tinkoff/taiga-ui/issues/422))
  ([68172aa](https://github.com/tinkoff/taiga-ui/commit/68172aa6c3ca8da1b54e533ee77859b8396b88bb))
- **kit:** `CheckboxBlock` fix styles inside `Accordion` ([#423](https://github.com/tinkoff/taiga-ui/issues/423))
  ([11b4539](https://github.com/tinkoff/taiga-ui/commit/11b453999a403cde375b0d9abf6d185d816c9239))
- **kit:** `InputPhone` fix opening dropdown in readOnly
  ([a73ff80](https://github.com/tinkoff/taiga-ui/commit/a73ff804e4def48061b7df0e57bccce99749cdea))
- **kit:** `Slider`, `Range` fix spilling over limits with keyboard
  ([#408](https://github.com/tinkoff/taiga-ui/issues/408))
  ([581f8bb](https://github.com/tinkoff/taiga-ui/commit/581f8bbe896a579719692ee446543cd56a9083e5))
- **kit:** `Tabs` fix colors for `tuiMode="onLight"` ([#411](https://github.com/tinkoff/taiga-ui/issues/411))
  ([23c3ce8](https://github.com/tinkoff/taiga-ui/commit/23c3ce8f5dc5baac5da10ff29a0bf924691cfee6))

### [2.9.1](https://github.com/tinkoff/taiga-ui/compare/v2.9.0...v2.9.1) (2021-05-15)

### Bug Fixes

- **all:** fix duplication of private imports for Webpack 5 ([#399](https://github.com/tinkoff/taiga-ui/issues/399))
  ([bb89b2d](https://github.com/tinkoff/taiga-ui/commit/bb89b2d70f2da108f2f7bc5daeba93323bc4a68c))

## [2.9.0](https://github.com/tinkoff/taiga-ui/compare/v2.8.2...v2.9.0) (2021-05-14)

### Features

- **core:** `Scrollbar` handle click on bar to scroll to that position
  ([#368](https://github.com/tinkoff/taiga-ui/issues/368))
  ([f792d0c](https://github.com/tinkoff/taiga-ui/commit/f792d0c48bc59c305e30747baa1c96847b8c7f3c))
- **core:** `TUI_ANIMATIONS_DURATION` add a new token ([#374](https://github.com/tinkoff/taiga-ui/issues/374))
  ([988440c](https://github.com/tinkoff/taiga-ui/commit/988440c57b09a827f0fc5386a426432a791bc54c))
- **core, kit:** add show delay / hide delay for all tooltips and hints
  ([#379](https://github.com/tinkoff/taiga-ui/issues/379))
  ([660b5a1](https://github.com/tinkoff/taiga-ui/commit/660b5a12657b297865994033f7afb13677116d89))
- **i18n:** improve translations in Spanish ([#389](https://github.com/tinkoff/taiga-ui/issues/389))
  ([af7eb3c](https://github.com/tinkoff/taiga-ui/commit/af7eb3c47b5dd37edaaed0816a8af30602f4a6ef))
- **kit:** `Badge` allow custom content ([#387](https://github.com/tinkoff/taiga-ui/issues/387))
  ([3107b53](https://github.com/tinkoff/taiga-ui/commit/3107b5383102f5c9f89124d57d9fd9c1e3eb0c42))

### Bug Fixes

- **addon-charts:** `Axes` add mode support ([#319](https://github.com/tinkoff/taiga-ui/issues/319))
  ([8f20801](https://github.com/tinkoff/taiga-ui/commit/8f208010fc9dfeabfad769eb7f2d95615605e78c))
- **cdk:** fix issues with Angular 12 and newer TypeScript ([#395](https://github.com/tinkoff/taiga-ui/issues/395))
  ([01f5a48](https://github.com/tinkoff/taiga-ui/commit/01f5a48ac8de7d616c3e3f4b8da517c0e0aaf8b2))
- **core:** rename watched controller typo TUI_TEXTIFELD_WATCHED_CONTROLLER -> TUI_TEXTFIELD_WATCHED_CONTROLLER
  ([#396](https://github.com/tinkoff/taiga-ui/issues/396))
  ([a8adb4a](https://github.com/tinkoff/taiga-ui/commit/a8adb4ae4702e80d98acc80cc19df5282395aaf3))
- **kit:** `InputDateTime` update native value on day click ([#378](https://github.com/tinkoff/taiga-ui/issues/378))
  ([ad43348](https://github.com/tinkoff/taiga-ui/commit/ad43348bc2bdbc6516c1748a3c13258f38675a1a))

### [2.8.2](https://github.com/tinkoff/taiga-ui/compare/v2.8.1...v2.8.2) (2021-05-04)

### Bug Fixes

- **cdk:** fix components emitting initial `blur` ([#370](https://github.com/tinkoff/taiga-ui/issues/370))
  ([36f722b](https://github.com/tinkoff/taiga-ui/commit/36f722b19818335f66e2847e1c0aa1f392950be1))

### [2.8.1](https://github.com/tinkoff/taiga-ui/compare/v2.8.0...v2.8.1) (2021-04-30)

### Bug Fixes

- **core:** `PrimitiveTextfield` fix growing wider than container
  ([#364](https://github.com/tinkoff/taiga-ui/issues/364))
  ([e64fe49](https://github.com/tinkoff/taiga-ui/commit/e64fe4931f22430a4edc260d74a4e5862903e6d5))

## [2.8.0](https://github.com/tinkoff/taiga-ui/compare/v2.7.0...v2.8.0) (2021-04-29)

### Features

- **addon-editor:** `Toolbar` add `ColorPicker` ([#335](https://github.com/tinkoff/taiga-ui/issues/335))
  ([67dfd6f](https://github.com/tinkoff/taiga-ui/commit/67dfd6f9ea7b74864cc57aabc9be7aab8759a0f0))
- **kit:** `DropdownHover` add new directive ([#361](https://github.com/tinkoff/taiga-ui/pull/361))
- **kit:** `TabsWithMore` always show the active tab ([#345](https://github.com/tinkoff/taiga-ui/issues/345))
  ([c437871](https://github.com/tinkoff/taiga-ui/commit/c4378719b1a30c8b1ca65671ee2542dbae13c076))

### Bug Fixes

- **addon-editor:** `Editor` fix scroll jumping on edits ([#323](https://github.com/tinkoff/taiga-ui/issues/323))
  ([c4a1e13](https://github.com/tinkoff/taiga-ui/commit/c4a1e13cde7bc6f758b36b4e4989b47714d26a2f))
- **addon-editor:** `Editor` fix scrollbar dragging ([#333](https://github.com/tinkoff/taiga-ui/issues/333))
  ([a01227e](https://github.com/tinkoff/taiga-ui/commit/a01227e55d5c41b6dff082d963b2d975247f4a95))
- **addon-editor:** open links in a new tab ([#328](https://github.com/tinkoff/taiga-ui/issues/328))
  ([222863f](https://github.com/tinkoff/taiga-ui/commit/222863f965d950d3b28c99a95603e06bfcd95b33))
- **cdk:** `ActiveZone` fix emitting `false` on element removal in Chrome
  ([#362](https://github.com/tinkoff/taiga-ui/issues/362))
  ([a424417](https://github.com/tinkoff/taiga-ui/commit/a4244177906cb897fc47e8c65c5c1ff41dfbdadc))
- **cdk:** `ScrollService` fix `NullInjectorError` ([#355](https://github.com/tinkoff/taiga-ui/issues/355))
  ([c6db6d1](https://github.com/tinkoff/taiga-ui/commit/c6db6d197a382cc1f6f33ee9d4d1bba4b9d580c4))
- **cdk:** use passive event listeners ([#344](https://github.com/tinkoff/taiga-ui/issues/344))
  ([dbc1188](https://github.com/tinkoff/taiga-ui/commit/dbc1188defa13cd0e5eae219372d3255fccb3f3d))
- **core:** `Scrollbar` fix content sticky beyond container height
  ([#348](https://github.com/tinkoff/taiga-ui/issues/348))
  ([173213f](https://github.com/tinkoff/taiga-ui/commit/173213fa013c73ea38e2afbc16c5ba3f3996bae3))
- **core:** fix issues with components being used inside `ControlValueAccessor`
  ([#346](https://github.com/tinkoff/taiga-ui/issues/346))
  ([e90a0f7](https://github.com/tinkoff/taiga-ui/commit/e90a0f7f78a58e997b5645631eb6d94fd8416cef))
- **kit:** `InputCount` correct work with negative values ([#337](https://github.com/tinkoff/taiga-ui/issues/337))
  ([82ceda8](https://github.com/tinkoff/taiga-ui/commit/82ceda86cd7bbfbc15f18b767df7d25d5295e523))
- **kit:** `InputDateTime` fix changing date ([#322](https://github.com/tinkoff/taiga-ui/issues/322))
  ([3cafe28](https://github.com/tinkoff/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))
- **kit:** `InputTime` open dropdown by click ([#322](https://github.com/tinkoff/taiga-ui/issues/322))
  ([3cafe28](https://github.com/tinkoff/taiga-ui/commit/3cafe28cffb1a9c14b4942ad24408043a891c9ec))
- **kit:** `InputFile` do not reset loading files on new file selection
  ([#356](https://github.com/tinkoff/taiga-ui/issues/356))
  ([bc01ace](https://github.com/tinkoff/taiga-ui/commit/bc01aceeb3e3d403a15ba6f8f7544ab4257011e2))
- **kit:** `InputNumber` fix caret for zeroes in decimal part ([#318](https://github.com/tinkoff/taiga-ui/issues/318))
  ([1b1dd68](https://github.com/tinkoff/taiga-ui/commit/1b1dd68e60786433cc815cf7f586b2131278a586))
- **kit:** `InputTag` fix scrolling with arrows ([#334](https://github.com/tinkoff/taiga-ui/issues/334))
  ([436bcaa](https://github.com/tinkoff/taiga-ui/commit/436bcaa4fc71d3a1727c3ffa579665404d815eb1))
- **kit:** fix iOS device detection ([#320](https://github.com/tinkoff/taiga-ui/issues/320))
  ([6e90cad](https://github.com/tinkoff/taiga-ui/commit/6e90cad33d6eae1a592765fa71f85fb7d8ce0396))

## [2.7.0](https://github.com/tinkoff/taiga-ui/compare/v2.6.2...v2.7.0) (2021-03-29)

### Features

- **addon-mobile:** `Sidebar` add `autoWidth` option ([#299](https://github.com/tinkoff/taiga-ui/issues/299))
  ([73f593b](https://github.com/tinkoff/taiga-ui/commit/73f593b0e370dba57b4da1756631e77e7b64115f))
- **core:** `NightThemeService` add new service ([#226](https://github.com/tinkoff/taiga-ui/issues/226))
  ([bd85236](https://github.com/tinkoff/taiga-ui/commit/bd8523666579048e54ba34cec48f56022f566478))
- **core:** `NotificationsService` add `hasIcon` option ([#274](https://github.com/tinkoff/taiga-ui/issues/274))
  ([0519af6](https://github.com/tinkoff/taiga-ui/commit/0519af62b8af5dc1df21f52311db318457c97216))
- **demo:** Improve documentation (descriptions, unexpected behavior etc.)
  ([#284](https://github.com/tinkoff/taiga-ui/issues/284))
  ([96638d0](https://github.com/tinkoff/taiga-ui/commit/96638d09693bdd023a2a931d6698d04f36ee09f5))
- **demo:** added link to source code and fixed routing ([#273](https://github.com/tinkoff/taiga-ui/issues/273))
  ([99ede5a](https://github.com/tinkoff/taiga-ui/commit/99ede5a3b52f9686adf8b97191d58c8abeb5290f))
- **kit:** `Tabs` update scroll position on active index change ([#268](https://github.com/tinkoff/taiga-ui/issues/268))
  ([a753a5e](https://github.com/tinkoff/taiga-ui/commit/a753a5e8f7a5fddf1496ac190897a922e48c49f9))

### Bug Fixes

- **addon-doc:** fix import package ([#291](https://github.com/tinkoff/taiga-ui/issues/291))
  ([cdabcd1](https://github.com/tinkoff/taiga-ui/commit/cdabcd1d4f8e33b51d472ee94476165a13a99fa4))
- **addon-editor:** fix font & highlight displayed colors ([#311](https://github.com/tinkoff/taiga-ui/issues/311))
  ([6375d65](https://github.com/tinkoff/taiga-ui/commit/6375d656aa2cbeef0d8d6f0cee9599e9d76da712))
- **addon-table:** `Table` fix dual borders ([#277](https://github.com/tinkoff/taiga-ui/issues/277))
  ([52534fc](https://github.com/tinkoff/taiga-ui/commit/52534fcec5ee0786b1d78648b04110c042dbfa69))
- **cdk:** `ActiveZone` stay in zone if focused element removed ([#304](https://github.com/tinkoff/taiga-ui/issues/304))
  ([30cb717](https://github.com/tinkoff/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))
- **cdk:** `FocusTrap` fix ExpressionChanged error ([#304](https://github.com/tinkoff/taiga-ui/issues/304))
  ([30cb717](https://github.com/tinkoff/taiga-ui/commit/30cb717f087393b7aa0eabb7c4605ecf078cd081))
- **kit:** `HoveredService` fix for iOS 12 ([#303](https://github.com/tinkoff/taiga-ui/issues/303))
  ([3cbf8f2](https://github.com/tinkoff/taiga-ui/commit/3cbf8f2b07c9c3ec616e8f0b8fe97f2358faed37))
- **kit:** `InputTag` error icon layout ([#296](https://github.com/tinkoff/taiga-ui/issues/296))
  ([75c2baa](https://github.com/tinkoff/taiga-ui/commit/75c2baa5f17366bfa70e5cfd6a99e1dbf9f2bdd9))
- **kit:** `InputRange` prevent emitting same value on blur ([#298](https://github.com/tinkoff/taiga-ui/issues/298))
  ([685cc00](https://github.com/tinkoff/taiga-ui/commit/685cc006b6649ed14a297ee4d94559e5180bd1b4))
- **kit:** `InputRange` prevent from focusing input field on mobile devices
  ([#280](https://github.com/tinkoff/taiga-ui/issues/280))
  ([c8cf497](https://github.com/tinkoff/taiga-ui/commit/c8cf49785683d969371f3ee1152482e6ba8ae2d0))
- **kit:** `Tabs` fix extra change detection ticks ([#314](https://github.com/tinkoff/taiga-ui/issues/314))
  ([0f36a06](https://github.com/tinkoff/taiga-ui/commit/0f36a066fb2c0dc1a679c789527a8c912423460c))
- **kit:** `TextArea` fix `m` size styles ([#302](https://github.com/tinkoff/taiga-ui/issues/302))
  ([39850ef](https://github.com/tinkoff/taiga-ui/commit/39850ef68caa1a8a63ee15f31562305b72d65191))
- **kit:** `InputPassword` fix change detection issue ([#300](https://github.com/tinkoff/taiga-ui/issues/300))
  ([a32a9dd](https://github.com/tinkoff/taiga-ui/commit/a32a9dd5a82b2672686aadd4b42c542b9c2e3607))
- **kit:** `InputCount` prevent buttons from focusing input field on mobile
  ([#272](https://github.com/tinkoff/taiga-ui/issues/272))
  ([17f8d47](https://github.com/tinkoff/taiga-ui/commit/17f8d47fa3bcf5d1c00e790daaa7fd9a428db328))

### [2.6.2](https://github.com/tinkoff/taiga-ui/compare/v2.6.1...v2.6.2) (2021-03-04)

### Features

- **cdk:** add `isSafari` util
  ([e616b53](https://github.com/tinkoff/taiga-ui/commit/e616b53f9535416b960486dd2c7b6e615a9e14ce))
- **core:** `TUI_ASSERT_ENABLED` add new token to allow enabling assertions in prod mode
  ([39af6cb](https://github.com/tinkoff/taiga-ui/commit/39af6cb58687d0edfa398da8525d71fcf391f444))
- **kit:** `Radio` add customization through token ([#264](https://github.com/tinkoff/taiga-ui/issues/264))
  ([1a6d574](https://github.com/tinkoff/taiga-ui/commit/1a6d57447de0118e87e96848f96d8db4f3dc5b64))

### Bug Fixes

- **addon-table:** fix not drawing default cells
  ([61cd807](https://github.com/tinkoff/taiga-ui/commit/61cd8071f8c631f737dd554cfff373da30ccf95a))
- **core:** `Loader` fix form freezing in Safari ([#266](https://github.com/tinkoff/taiga-ui/issues/266))
  ([0c7330c](https://github.com/tinkoff/taiga-ui/commit/0c7330ce0e8d4a3d16dce06d8689f75ce3a96dff))
- **kit:** `InputNumber` fix all problems with caret in Safari
  ([b4930c9](https://github.com/tinkoff/taiga-ui/commit/b4930c9d59b915b51a0c6aa705f2cff78b9170f3))
- **kit:** `InputCount` fix wrong button height for customized height
  ([#216](https://github.com/tinkoff/taiga-ui/issues/216))
  ([4c39f7a](https://github.com/tinkoff/taiga-ui/commit/4c39f7a27dd81c59352cdc3af46114d2ff3184cf))
- **kit:** fix loader in toggle size m ([#261](https://github.com/tinkoff/taiga-ui/issues/261))
  ([a1eeaa4](https://github.com/tinkoff/taiga-ui/commit/a1eeaa417a2aa3b6b68ba32b524eed17d6f2f144))

### [2.6.1](https://github.com/tinkoff/taiga-ui/compare/v2.6.0...v2.6.1) (2021-02-26)

### Bug Fixes

- **addon-table:** fix incorrect style minification
  ([c00cf1b](https://github.com/tinkoff/taiga-ui/commit/c00cf1b5bfe61fabba137ab8d41c719a0bf96451))
- **core:** fix underline pseudo link ([#246](https://github.com/tinkoff/taiga-ui/issues/246))
  ([bca9201](https://github.com/tinkoff/taiga-ui/commit/bca9201ffd30463da0b24a70aece4a1f2ac01f5b))

## [2.6.0](https://github.com/tinkoff/taiga-ui/compare/v2.5.0...v2.6.0) (2021-02-25)

### Features

- **addon-doc:** add "Edit on Online IDE" button support
  ([5cae178](https://github.com/tinkoff/taiga-ui/commit/5cae178da83d0ab825afa5354d5f3805b02600ad))
- **addon-table:** `Table` add new module
  ([9ac0243](https://github.com/tinkoff/taiga-ui/commit/9ac024368168fc19af0a8bb903b7c80d97ef7171))
- **i18n:** add Ukrainian support ([#231](https://github.com/tinkoff/taiga-ui/issues/231))
  ([38b292b](https://github.com/tinkoff/taiga-ui/commit/38b292b2d19ca5d19bb603979f26758ce4d11b09))

### Bug Fixes

- **core:** `Dialog` fix closing non-dismissible dialog by clicking on border
  ([#240](https://github.com/tinkoff/taiga-ui/issues/240))
  ([516dc74](https://github.com/tinkoff/taiga-ui/commit/516dc74a09267024b7154ebad46d36402d3d6625))
- **core:** `Link` properly handle various modes ([#241](https://github.com/tinkoff/taiga-ui/issues/241))
  ([9197895](https://github.com/tinkoff/taiga-ui/commit/919789593d9553f278bee7b1e0552a0665a6c1ef))

## [2.5.0](https://github.com/tinkoff/taiga-ui/compare/v2.4.0...v2.5.0) (2021-02-08)

### Features

- **addon-commerce:** add UAH currency ([#214](https://github.com/tinkoff/taiga-ui/issues/214))
  ([54f64a6](https://github.com/tinkoff/taiga-ui/commit/54f64a6490fb6f3d259a0cd49c7477eb4e0e359c))
- **common:** added CSS custom properties for fonts ([#201](https://github.com/tinkoff/taiga-ui/issues/201))
  ([c9d527c](https://github.com/tinkoff/taiga-ui/commit/c9d527c0fb518b68a3f483b1d878c14221c90ef6))
- **core:** `Dialog` add `page` size for a fullscreen dialog without any padding
  ([#213](https://github.com/tinkoff/taiga-ui/issues/213))
  ([523eaf9](https://github.com/tinkoff/taiga-ui/commit/523eaf909246509c7fa9e1baec1f58ca20c19986))
- **core:** `PrimitiveCheckbox` full customization through DI ([#209](https://github.com/tinkoff/taiga-ui/issues/209))
  ([78e87b5](https://github.com/tinkoff/taiga-ui/commit/78e87b5df496de3d73fbaa4d55c16a0dbb9d0a07))
- **i18n:** add Dutch with 100% support ([#206](https://github.com/tinkoff/taiga-ui/issues/206))
  ([41c0554](https://github.com/tinkoff/taiga-ui/commit/41c055470494ed90a8090582e4cf19f18e639efe))
- **i18n:** add Turkish with 100% support ([#200](https://github.com/tinkoff/taiga-ui/issues/200))
  ([a4de9d9](https://github.com/tinkoff/taiga-ui/commit/a4de9d983edd6fa453019be6c424f496d8d882fd))
- **kit:** allow configuration of default checkbox options ([#139](https://github.com/tinkoff/taiga-ui/issues/139))
  ([a977e6e](https://github.com/tinkoff/taiga-ui/commit/a977e6e65e048e0a053a89ed37698fa68ca2037f))

### Bug Fixes

- **core:** `Svg` fix custom icons processing ([#212](https://github.com/tinkoff/taiga-ui/issues/212))
  ([76ec2d8](https://github.com/tinkoff/taiga-ui/commit/76ec2d8ead0e3ac326203d9c4984ee25656aa039))
- **core:** dialog not closing due to transparent border, closes [#148](https://github.com/tinkoff/taiga-ui/issues/148)
  ([#190](https://github.com/tinkoff/taiga-ui/issues/190))
  ([c791da7](https://github.com/tinkoff/taiga-ui/commit/c791da71f79b59b4f0feb5cc40be38d25943e972))
- **i18n:** correct inconsistencies in English translations ([#207](https://github.com/tinkoff/taiga-ui/issues/207))
  ([977d7bd](https://github.com/tinkoff/taiga-ui/commit/977d7bd965630062bd9a2cefa565102332faf4bc))
- **kit:** `Tabs` clicking on external links will not update active index
  ([#218](https://github.com/tinkoff/taiga-ui/issues/218))
  ([4fee5a3](https://github.com/tinkoff/taiga-ui/commit/4fee5a386d58ba7a2d44263ebec4013ee93acb14))

## [2.4.0](https://github.com/tinkoff/taiga-ui/compare/v2.3.0...v2.4.0) (2021-02-02)

### Features

- **core:** add scss mixin support ([#165](https://github.com/tinkoff/taiga-ui/issues/165))
  ([865bbaa](https://github.com/tinkoff/taiga-ui/commit/865bbaafb5cac5587dd3ffc20eacfa2283329b10))
- **i18n:** Add German with 100% support ([#198](https://github.com/tinkoff/taiga-ui/issues/198))
  ([54f1284](https://github.com/tinkoff/taiga-ui/commit/54f12843e3521543cb39effea64c66e9440de1c9))
- **i18n:** add Spanish with 100% support ([#191](https://github.com/tinkoff/taiga-ui/issues/191))
  ([6f9a19e](https://github.com/tinkoff/taiga-ui/commit/6f9a19e7cdee34445cdfe26584a91bd7bcd64291))
- **kit:** use lazy loading strategy in avatar component ([#185](https://github.com/tinkoff/taiga-ui/issues/185))
  ([d6ea803](https://github.com/tinkoff/taiga-ui/commit/d6ea8032a11a546e7c65474d9991da46030e7e08))

### Bug Fixes

- **button:** fix button loader size for XL ([#174](https://github.com/tinkoff/taiga-ui/issues/174))
  ([f9929fe](https://github.com/tinkoff/taiga-ui/commit/f9929fef2d73cbf829f8d9f53150316d04c739ca))
- **cdk:** fix isFirefox check ([#158](https://github.com/tinkoff/taiga-ui/issues/158))
  ([8e9c7a4](https://github.com/tinkoff/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
- **core:** `Button` fix margin for right aligned icons ([#173](https://github.com/tinkoff/taiga-ui/issues/173))
  ([a3f9ed5](https://github.com/tinkoff/taiga-ui/commit/a3f9ed5a4ab6b650130c16616bb8f20e78d8d718))

## [2.3.0](https://github.com/tinkoff/taiga-ui/compare/v2.2.1...v2.3.0) (2021-01-29)

### Features

- **core:** add `ThemeNight` component ([#167](https://github.com/tinkoff/taiga-ui/issues/167))
  ([a953be7](https://github.com/tinkoff/taiga-ui/commit/a953be715ac1c624bf4b2b1d12631715fd376234))
- **demo:** add `Wrapper` customization page ([#153](https://github.com/tinkoff/taiga-ui/issues/153))
  ([eef8382](https://github.com/tinkoff/taiga-ui/commit/eef83822593c20f8de8c398ed1e4e705578d11bf))
- **demo:** add guide on using different icon set ([#157](https://github.com/tinkoff/taiga-ui/issues/157))
  ([b35a891](https://github.com/tinkoff/taiga-ui/commit/b35a89181cb59e6ae5f80a54d52ea266490152c1))
- **demo:** add page on custom dialogs ([#159](https://github.com/tinkoff/taiga-ui/issues/159))
  ([13e17a1](https://github.com/tinkoff/taiga-ui/commit/13e17a13c0e2a805984425f19ad04b6979abdfb0))
- **format:** number formatting supports custom thousands separator
  ([#145](https://github.com/tinkoff/taiga-ui/issues/145))
  ([a8c0743](https://github.com/tinkoff/taiga-ui/commit/a8c0743dae7ad432576d1e6f567943a28e7c8a37))

### Bug Fixes

- **cdk:** fix isFirefox check ([#158](https://github.com/tinkoff/taiga-ui/issues/158))
  ([8e9c7a4](https://github.com/tinkoff/taiga-ui/commit/8e9c7a45301ef1500faafccc447e503846417527))
- **core:** `Svg` properly use Angular `Sanitizer` ([#170](https://github.com/tinkoff/taiga-ui/issues/170))
  ([249392d](https://github.com/tinkoff/taiga-ui/commit/249392d2727c7af1d0da404ae0f2619a08847857))
- **core:** fix new CSS vars for height name mismatch ([#149](https://github.com/tinkoff/taiga-ui/issues/149))
  ([aa7c961](https://github.com/tinkoff/taiga-ui/commit/aa7c9617ed42b767a118e2c145e2ba6bc4cb54d8))

### [2.2.1](https://github.com/tinkoff/taiga-ui/compare/v2.2.0...v2.2.1) (2021-01-22)

### Bug Fixes

- **highlight:** change background color to selection ([#137](https://github.com/tinkoff/taiga-ui/issues/137))
  ([7f60e25](https://github.com/tinkoff/taiga-ui/commit/7f60e25b2f4b0ef4bf00eaac99892067801316cc))

## [2.2.0](https://github.com/tinkoff/taiga-ui/compare/v2.1.3...v2.2.0) (2021-01-22)

### ⚠ BREAKING CHANGES

- **kit:** `UnfinishedValidator` now has no default message
- **cdk, core:** `MonthPipe` import it from @taiga-ui/core library and use with async pipe

### Features

- **cdk, core:** `MonthPipe` move from cdk to core, add i18n
  ([59474d2](https://github.com/tinkoff/taiga-ui/commit/59474d2d4eceea34a744a9c2034a0081bff260fb))
- **demo:** add page for `Sidebar` directive ([#125](https://github.com/tinkoff/taiga-ui/issues/125))
  ([bea427e](https://github.com/tinkoff/taiga-ui/commit/bea427e1d88e6275ee87bf40d53a03a562b3952b))
- **i18n:** add i18n package
  ([523d5de](https://github.com/tinkoff/taiga-ui/commit/523d5dec3f76a23bda81cb873bd9c5201ce665d5))
- **i18n:** add russian language
  ([71dab5c](https://github.com/tinkoff/taiga-ui/commit/71dab5c8ed6d18e6cddee52121e2354db8c56fee))
- **kit:** add tokens to customize `Checkbox`, `Radio` and `InputTag`
  ([#124](https://github.com/tinkoff/taiga-ui/issues/124))
  ([94e8b00](https://github.com/tinkoff/taiga-ui/commit/94e8b00a32b01e81108e8c74c7a9601d6179abf7))
- **kit:** allow setting mask directly on `Input`, `InputInline` and `InputCopy`
  ([#122](https://github.com/tinkoff/taiga-ui/issues/122))
  ([173cd8f](https://github.com/tinkoff/taiga-ui/commit/173cd8ffc1f0d123915eb916f93b46cb04c08e68))

### Bug Fixes

- **cdk:** `Media` fix stuttering in Safari ([#129](https://github.com/tinkoff/taiga-ui/issues/129))
  ([43afe21](https://github.com/tinkoff/taiga-ui/commit/43afe21e912f65e50da211de5e47354cac026ec2))
- **kit:** `TabsWithMore` fix freezing on resize loop ([#121](https://github.com/tinkoff/taiga-ui/issues/121))
  ([b87737a](https://github.com/tinkoff/taiga-ui/commit/b87737ae2d98a266fa37e367caac003ab45e9a76))

### [2.1.3](https://github.com/tinkoff/taiga-ui/compare/v2.1.2...v2.1.3) (2021-01-19)

### Features

- **cdk:** add `uniqBy` utility method ([#108](https://github.com/tinkoff/taiga-ui/issues/108))
  ([2fe83be](https://github.com/tinkoff/taiga-ui/commit/2fe83be88c5db38eccf25d8d1a28f94b4cd3714a))
- **let:** improve type checking for tuiLet ([#98](https://github.com/tinkoff/taiga-ui/issues/98))
  ([5cff8ae](https://github.com/tinkoff/taiga-ui/commit/5cff8ae205b6d4711bf44e0576603edf9ab88730))

### Bug Fixes

- **core:** add lost body-l-2 global text class ([#106](https://github.com/tinkoff/taiga-ui/issues/106))
  ([d296243](https://github.com/tinkoff/taiga-ui/commit/d296243350269a4984bf1cd81275c71b064ffc3e))
- **core:** add will-change for smooth transition ([#99](https://github.com/tinkoff/taiga-ui/issues/99))
  ([35e2bf4](https://github.com/tinkoff/taiga-ui/commit/35e2bf48253487218c71aa0eb258ec28bf20b583)), closes
  [#90](https://github.com/tinkoff/taiga-ui/issues/90)
- **icons:** fix broken flags ([#96](https://github.com/tinkoff/taiga-ui/issues/96))
  ([37d2e61](https://github.com/tinkoff/taiga-ui/commit/37d2e6101546e493cd6eec2ea47de8e2adac20d9))
- **kit:** `DataListWrapper` fix `emptyContent` not working ([#89](https://github.com/tinkoff/taiga-ui/issues/89))
  ([f90d96f](https://github.com/tinkoff/taiga-ui/commit/f90d96fe5ef96fef6498c8bdb662b1cbcbb84176))
- **kit:** `InputDate` fix mobile calendar ([#104](https://github.com/tinkoff/taiga-ui/issues/104))
  ([0fd20e5](https://github.com/tinkoff/taiga-ui/commit/0fd20e58a3c22763b94881541a8e21b9bb2b39e0)), closes
  [#100](https://github.com/tinkoff/taiga-ui/issues/100)
- **kit:** `Select` fix template for falsy values ([#118](https://github.com/tinkoff/taiga-ui/issues/118))
  ([c718e1f](https://github.com/tinkoff/taiga-ui/commit/c718e1fe6a2462f9dd9ae7a4c88d444796f589b7))

### [2.1.2](https://github.com/tinkoff/taiga-ui/compare/v2.1.1...v2.1.2) (2021-01-12)

### Bug Fixes

- **core:** textfield style fix wrapper .transition mixin
  ([12206ea](https://github.com/tinkoff/taiga-ui/commit/12206ead01d35f88928aa574a32a4f27965116b2))

### [2.1.1](https://github.com/tinkoff/taiga-ui/compare/v2.1.0...v2.1.1) (2021-01-12)

### Bug Fixes

- **core:** fix theme less import syntax for StackBlitz ([#86](https://github.com/tinkoff/taiga-ui/issues/86))
  ([3b6d874](https://github.com/tinkoff/taiga-ui/commit/3b6d87447bf99e67b38cb6962a88a7b752475ee8))

## [2.1.0](https://github.com/tinkoff/taiga-ui/compare/v2.0.1...v2.1.0) (2021-01-11)

### Features

- **cdk:** `Media` add `playbackRate` input ([#83](https://github.com/tinkoff/taiga-ui/issues/83))
  ([5351762](https://github.com/tinkoff/taiga-ui/commit/5351762299835c2e99777bb62a37e2a1cc217913))

### [2.0.1](https://github.com/tinkoff/taiga-ui/compare/v2.0.0...v2.0.1) (2021-01-11)

### Features

- **core:** enable `window` scrolling instead of `tui-root`
  ([#80](https://github.com/tinkoff/taiga-ui/commit/0190a8fb1aeb26870402f288f8ee933e36228e25))
- **demo:** fix play/pause icons, add eur and gbp currency ([#77](https://github.com/tinkoff/taiga-ui/issues/77))
  ([360a3b1](https://github.com/tinkoff/taiga-ui/commit/360a3b1b2ab9ae4743bbcd693ac7df01fd7e3726))

### Bug Fixes

- **addon-doc:** fix demo component on mobile ([#79](https://github.com/tinkoff/taiga-ui/issues/79))
  ([7676d84](https://github.com/tinkoff/taiga-ui/commit/7676d84513525f464303ec45e9ed07ddde55183a))
- **all:** fix .less relative paths for better IDE and StackBlitz support
  ([#81](https://github.com/tinkoff/taiga-ui/issues/81))
  ([f061dcd](https://github.com/tinkoff/taiga-ui/commit/f061dcd8dbff4ef0fe902260981be8bdf3ee8714))
- **doc:** prevent tabs underline above sidebar in Safari
  ([4ed25de](https://github.com/tinkoff/taiga-ui/commit/4ed25de66a78f8280c3865be9d588d0d813ddffa))

## [2.0.0](https://github.com/tinkoff/taiga-ui/compare/v1.6.5...v2.0.0) (2020-12-29)

### Features

- **addon-doc:** add header ([#58](https://github.com/tinkoff/taiga-ui/issues/58))
  ([1f2abd4](https://github.com/tinkoff/taiga-ui/commit/1f2abd4358a442c9e4dbd1e5106d3081119f2c33))
- **demo:** add SSR support ([#64](https://github.com/tinkoff/taiga-ui/issues/64))
  ([aaf0786](https://github.com/tinkoff/taiga-ui/commit/aaf07864b63697c7205cdaeab656a19195d394f4))
- **demo:** translate into eng ([#51](https://github.com/tinkoff/taiga-ui/issues/51))
  ([04f9994](https://github.com/tinkoff/taiga-ui/commit/04f9994ae759fe3ca854cbf96e44cb0ebf8a30a8)), closes
  [#69](https://github.com/tinkoff/taiga-ui/issues/69) [#68](https://github.com/tinkoff/taiga-ui/issues/68)
- **icons:** add editor and color picker icons
  ([170f9a0](https://github.com/tinkoff/taiga-ui/commit/170f9a00fcd26abd8ef96b4dfcfc4dd4507707b0))

### Bug Fixes

- **cdk:** `DialogHost` fix overlay above dialog issue
  ([3e16ec8](https://github.com/tinkoff/taiga-ui/commit/3e16ec838457198753b8ee6830893ada50236b30))
- **cdk:** `tuiZoneOptimized` fix re-entering the zone ([#66](https://github.com/tinkoff/taiga-ui/issues/66))
  ([6c5667c](https://github.com/tinkoff/taiga-ui/commit/6c5667cd75aa15530b5aed35fc0281df58966941))
- **core:** `PrimitiveTextfield` fix value content selecting
  ([6c85668](https://github.com/tinkoff/taiga-ui/commit/6c85668903e796ce4d0af22d9396ac96864798d5))
- **core:** fix less style strings in font weight
  ([404b01f](https://github.com/tinkoff/taiga-ui/commit/404b01f00a72383888afa456665a0c7295201abb))
- **doc:** `Page` fix package input name
  ([bdc32a7](https://github.com/tinkoff/taiga-ui/commit/bdc32a72457663e59f0c10b06011c949d4791ea6))

### [1.6.5](https://github.com/tinkoff/taiga-ui/compare/v1.6.4...v1.6.5) (2020-12-11)

### [1.6.4](https://github.com/tinkoff/taiga-ui/compare/v1.6.3...v1.6.4) (2020-12-09)

### [1.6.3](https://github.com/tinkoff/taiga-ui/compare/v1.6.2...v1.6.3) (2020-12-08)

### Bug Fixes

- **addon-commerce:** `InputCVC` fix font issue ([#54](https://github.com/tinkoff/taiga-ui/issues/54))
  ([bf3a4bd](https://github.com/tinkoff/taiga-ui/commit/bf3a4bd64b05c9796b7ded57566215c374283b74))

### [1.6.2](https://github.com/tinkoff/taiga-ui/compare/v1.6.1...v1.6.2) (2020-12-08)

### Features

- **cdk:** `mustBePresent` add new operator ([#53](https://github.com/tinkoff/taiga-ui/issues/53))
  ([0f12ac5](https://github.com/tinkoff/taiga-ui/commit/0f12ac5b972529c4cbef8f0ff53ce7f75c59f3d2))
- **core:** move theme related styles into separate export ([#50](https://github.com/tinkoff/taiga-ui/issues/50))
  ([c240274](https://github.com/tinkoff/taiga-ui/commit/c240274104a7460c416e818876913920b5ddd53f))
- **kit:** `InputFile` add mode support ([#52](https://github.com/tinkoff/taiga-ui/issues/52))
  ([dacf719](https://github.com/tinkoff/taiga-ui/commit/dacf719721a3097325542903d55a266fc57166a2))

### [1.6.1](https://github.com/tinkoff/taiga-ui/compare/v1.6.0...v1.6.1) (2020-12-04)

### Features

- **all:** i18n for packages ([#49](https://github.com/tinkoff/taiga-ui/issues/49))
  ([020fb59](https://github.com/tinkoff/taiga-ui/commit/020fb59b12959c0dfbda19db167bf9cc7f621f90))
- **core:** `TableMode` add new directive, remove `tuiTable` from `Mode`
  ([#48](https://github.com/tinkoff/taiga-ui/issues/48))
  ([60da86f](https://github.com/tinkoff/taiga-ui/commit/60da86f6f6e344dc802180c91132c41821b475b3))
- **kit:** refactor `Badge` and `BadgedContent` to use colors directly
  ([#46](https://github.com/tinkoff/taiga-ui/issues/46))
  ([1961b9a](https://github.com/tinkoff/taiga-ui/commit/1961b9a05ca6454d75c692fb1684dd85bb56de86))

### Bug Fixes

- **core, addon-mobile:** include styles as library asset ([#47](https://github.com/tinkoff/taiga-ui/issues/47))
  ([f4797ec](https://github.com/tinkoff/taiga-ui/commit/f4797ec9ac09e9c442aece8258bd8b54272c9cbf))

## [1.6.0](https://github.com/tinkoff/taiga-ui/compare/v1.5.2...v1.6.0) (2020-12-02)

### Features

- **core, kit, addons, demo, tools:** add packages
  ([854b544](https://github.com/tinkoff/taiga-ui/commit/854b544e87a8916703ecdb8624757b602b3e9a40))

### [1.5.2](https://github.com/tinkoff/taiga-ui/compare/v1.5.1...v1.5.2) (2020-11-25)

### [1.5.1](https://github.com/tinkoff/taiga-ui/compare/v1.5.0...v1.5.1) (2020-11-25)

## [1.5.0](https://github.com/tinkoff/taiga-ui/compare/v1.4.0...v1.5.0) (2020-11-24)

### Features

- **cdk:** i18n for date fillers ([#43](https://github.com/tinkoff/taiga-ui/issues/43))
  ([a5011ba](https://github.com/tinkoff/taiga-ui/commit/a5011bad8ec585d517b384785e434c85c20385d9))

## [1.4.0](https://github.com/tinkoff/taiga-ui/compare/v1.3.0...v1.4.0) (2020-11-23)

### Bug Fixes

- **cdk:** `FocusTrap` blur manually to prevent ExpressionChanged error
  ([#40](https://github.com/tinkoff/taiga-ui/issues/40))
  ([339df70](https://github.com/tinkoff/taiga-ui/commit/339df706b34a2ab38614b55d13bdfc62bfb7482c))
- **cdk:** fix types in dist and remove metadata emit
  ([d92c0fa](https://github.com/tinkoff/taiga-ui/commit/d92c0fa1310fdcce63214fd59fe63be5cc47d90d))
- **cdk:** rename `TUI_IDENTITY_MATCHER` to `TUI_DEFAULT_IDENTITY_MATCHER` to align to other constants
  ([#38](https://github.com/tinkoff/taiga-ui/issues/38))
  ([3a9f2db](https://github.com/tinkoff/taiga-ui/commit/3a9f2dbac044619c229de6f2c4e9ecdd678988ee))

## [1.3.0](https://github.com/tinkoff/taiga-ui/compare/v1.2.1...v1.3.0) (2020-11-18)

### Features

- **cdk:** remove `TuiValidation`; `AbstractControl` works with `pseudoInvalid`
  boolean([#37](https://github.com/tinkoff/taiga-ui/issues/37))
  ([ff8c921](https://github.com/tinkoff/taiga-ui/commit/ff8c92164939f180aa4b47afadef1a808e14569f))

### [1.2.1](https://github.com/tinkoff/taiga-ui/compare/v1.2.0...v1.2.1) (2020-11-16)

## [1.2.0](https://github.com/tinkoff/taiga-ui/compare/v1.1.0...v1.2.0) (2020-11-13)

### Features

- **cdk:** `TUI_IDENTITY_MATCHER` consider two empty arrays equal ([#34](https://github.com/tinkoff/taiga-ui/issues/34))
  ([e17c08d](https://github.com/tinkoff/taiga-ui/commit/e17c08d7eb209c6b389b4dc07a32ff9e792d70af))
- **cdk:** add @ng-web-apis/mutation-observer ([#32](https://github.com/tinkoff/taiga-ui/issues/32))
  ([7459c70](https://github.com/tinkoff/taiga-ui/commit/7459c70f272b464cd95959a7f66f039194d874ce))
- **cdk:** remove preventScroll polyfill ([#21](https://github.com/tinkoff/taiga-ui/issues/21))
  ([68db75a](https://github.com/tinkoff/taiga-ui/commit/68db75adc7bb3d7eea37709963e89a3ab2152f1e))
- **observables:** `stopPropagation` add operator
  ([d930e9d](https://github.com/tinkoff/taiga-ui/commit/d930e9dcc0255c154089d1baceb4fe0a28e74604))

### Bug Fixes

- **cdk:** `Control` fix typing ([#36](https://github.com/tinkoff/taiga-ui/issues/36))
  ([7e1c91e](https://github.com/tinkoff/taiga-ui/commit/7e1c91e539ec81426eb4519080679016757c3a50))
- **cdk:** `Time` fix currentLocal at 0:00 ([#16](https://github.com/tinkoff/taiga-ui/issues/16))
  ([3f7786c](https://github.com/tinkoff/taiga-ui/commit/3f7786c62281c8c3c438b869afc7d317d0abba84))
- **observables:** `pressedObservable` ignore synthetic events
  ([28e6a04](https://github.com/tinkoff/taiga-ui/commit/28e6a045dbcb0c57b2afac44c5b4e784182cf3e9))

## 1.1.0 (2020-09-26)

### Features

- **cdk:** `Dialogs` add ability to create multiple custom dialogs ([#8](https://github.com/tinkoff/taiga-ui/issues/8))
  ([7f18bfb](https://github.com/tinkoff/taiga-ui/commit/7f18bfbb92199a7efcaeaa033dd0df86cb94974f))
- **cdk:** `Pure` add access to `this` ([#6](https://github.com/tinkoff/taiga-ui/issues/6))
  ([4cf9e16](https://github.com/tinkoff/taiga-ui/commit/4cf9e161f415a151bb2522cec3793650041d7e7c))
