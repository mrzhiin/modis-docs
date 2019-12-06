module.exports = {
  title: "Modis",
  base: "/",
  head: [
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/@mrzhiin/modis@latest/dist/modis.min.js"
      }
    ],
    [
      "script",
      {},
      `Modis.initAV({
        appId: "vqUa4z3qMJp16I5wfYHXEt1x-MdYXbMMI",
        appKey: "7vtNB5pARaTm5QEdhbQKCxOs"
      });`
    ]
  ],
  dest: "dist",
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "配置", link: "/config/" }
    ],
    sidebar: {
      "/guide/": ["", "use", "backend"],
      "/config/": ["", "backend", "methods"]
    },
    repo: "https://github.com/mrzhiin/modis"
  }
};
