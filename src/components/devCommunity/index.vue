<template>
  <div class="dev-community">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="markdown的使用"
                   name="1"></el-tab-pane>
      <el-tab-pane label="配置管理"
                   name="2">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理"
                   name="3">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿"
                   name="4">定时任务补偿</el-tab-pane>
    </el-tabs>
    <div class="markdown-div"
         v-show="activeName==1">
      <mark-down ref="markdown"
                 isUploadImg=true
                 type=8
                 limitNum=5000></mark-down>
      <el-button type="primary"
                 @click="OKMarkdownFun">确 定</el-button>
    </div>

  </div>
</template>

<script>
/**
 * @description 开发者社区
 * @name markdown markdown编辑器的使用
 */
import markDown from '@/common/markdown'
export default {
  name: 'devCommunity',
  components: {
    markDown
  },
  data () {
    return {
      //当前激活的tabName
      activeName: '1',

      //markdown
      markdown: {
        content: '',
        markText: ''
      }
    }
  },
  methods: {
    /**
     * @description 切换tab触发的事件
     */
    handleClick (val) {
      this.activeName = val.name;
    },
    /**
     * @description markdown的确定按钮
     */
    OKMarkdownFun () {
      //是否达上限
      let markdown = this.$refs.markdown.getHTML();
      if (markdown.isLimit) {
        this.$message.warning("字数已达上限，请重新编辑！");
        return false
      }

      //是否为空
      this.markdown.content = markdown.html;
      this.markdown.markText = markdown.markText;

      if (this.markdown.content == '') {
        this.$message.warning('请填写内容');
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
.dev-community {
  width: 1180px;
  margin: auto;
  .markdown-div {
    text-align: center;
  }
}
</style>