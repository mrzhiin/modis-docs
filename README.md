---
home: true
heroText: Modis
tagline: Web 评论服务
actionText: 开始使用
actionLink: /guide/
footer: MIT Licensed
---

<div ref="modis"></div>

<script>
export default {
  mounted: async function() {
    await this.$nextTick();

    new Modis({
      el: this.$refs.modis,
      backend: "leancloud",
      backendConfig:{
        spa: true
      }
    });
  }
};
</script>
