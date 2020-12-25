
<template>
  <div id="editor">
    <mavon-editor ref="md"
                  v-model="editorHTML"
                  :toolbars="toolbarsValue"
                  @change="change"
                  @htmlcode="htmlcode"
                  @imgAdd="imgAdd"
                  @imgDel="imgDel"
                  :class="{'warningFont':fontNum>Number(limitNum)}"></mavon-editor>
    <div class="remark-msg">
      <span>字数上限：{{limitNum}}</span>
      <span style="margin-left:20px"
            :class="{'warningFont':fontNum>Number(limitNum)}">字数：{{fontNum}}</span>
    </div>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import { fileUpload } from '@/api/upload.js'
export default {
  name: 'editor',
  components: {
    mavonEditor
  },
  props: {
    //是否显示上传图片
    isUploadImg: {
      string: Boolean,
      default: true
    },

    //活动/比赛id 其他为null
    id: {
      type: Number | String,
      default: null
    },

    //0 比赛icon 1比赛 poster 2 轮播 3 比赛 富文本 图片 
    //4活动icon 5 活动富文本上传图片 6 富文本上传反馈建议图片 7 活动上传富文本图片,8论坛
    type: {
      type: Number | String,
      default: 8
    },

    //最多输入多少字
    limitNum: {
      type: Number | String,
      default: 10
    },

    //父组件传递过来的填充内容
    txt: {
      type: Object,
      default: function () {
        return {
          html: "",
          markText: ''
        }
      }
    }
  },
  watch: {
    txt: {
      handler (val) {
        this.$nextTick(() => {
          this.setHTML(val.html, val.markText)
        })
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    toolbarsValue () {
      if (this.isUploadImg) {
        return {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }
      } else {
        return {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }
      }
    }
  },
  data () {
    return {
      editorHTML: '',
      fontNum: 0
    }
  },
  methods: {
    change (val, render) {
      let num = render.replace(/<.*?>/g, "").replace(/[\r\n]/g, "").trim().length
      this.fontNum = num;
    },
    htmlcode (val, render) {
      // debugger
    },
    //获取markdown 的html标签
    getHTML () {
      let param = {
        //是否达到上限
        isLimit: this.fontNum > Number(this.limitNum),
        //获取html文件
        html: this.$refs.md.d_render,
        //获取md文件
        markText: this.$refs.md.d_value
      }
      return param;
    },

    //重置内容
    setHTML (html, markText) {
      //获取html文件
      this.$refs.md.d_render = html;
      //获取md文件
      this.$refs.md.d_value = markText;
    },

    //清空markdown 的内容 及 html标签内容
    clearHTML () {
      this.$refs.md.d_render = "";
      this.editorHTML = "";
    },

    //上传图片--绑定@imgAdd event
    imgAdd (pos, $file) {
      console.log("触发图片上传");
      console.log(pos);
      console.log($file);
      let formData = new FormData();
      formData.append('file', $file);
      formData.append('type', 3);
      // fileUpload(formData)
    },

    /**
     * 图片删除
     */
    imgDel (pos) {
      delete this.img_file[pos];
    }
  }
}
</script>
<style lang="scss">
#editor {
  margin: auto;
  width: 100%;
  .markdown-body {
    box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px !important;
    border: 1px solid #c0c4cc;
  }
  ul {
    li {
      list-style: disc;
    }
  }
  ol {
    li {
      list-style: decimal;
    }
  }
  .warningFont {
    color: red;
    border-color: red;
  }
  .remark-msg {
    font-size: 14px;
    margin-top: 5px;
    text-align: right;
  }
}
</style>