<template>
  <div class="home-view">
    <layout-box title="@wytxer/shepherd-vue" description="通过全局挂载的形式使用。">
      <a-button id="driver-btn" type="primary" @click.stop="onOpenDriver">打开新手引导</a-button>

      <div class="PT32">
        <a-button class="MR10">操作一</a-button>
        <a-button class="MR10">操作二</a-button>
        <a-button class="MR10" type="primary" id="main-btn">操作三</a-button>
      </div>
    </layout-box>

    <layout-box title="@wytxer/shepherd-vue" description="通过局部导入的方式使用。">
      <a-button id="driver-btn2" type="primary" @click.stop="onOpenDriver2">打开新手引导</a-button>

      <div class="PT32">
        <a-button class="MR10">操作一</a-button>
        <a-button class="MR10">操作二</a-button>
        <a-button class="MR10" type="primary" id="main-btn2">操作三</a-button>
      </div>
    </layout-box>
  </div>
</template>

<script>
import { shepherd } from '../../lib/shepherd-vue.umd.min'

export default {
  methods: {
    onOpenDriver () {
      const driver = this.$shepherd()

      driver.addSteps([{
        attachTo: {
          element: document.querySelector('#header-main'),
          on: 'auto'
        },
        title: '顶部导航',
        text: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。',
        buttons: [{
          action () {
            return this.next()
          },
          text: '下一步'
        }]
      }, {
        attachTo: {
          element: document.querySelector('#driver-btn'),
          on: 'auto'
        },
        title: '新手引导',
        text: '点击打开新手引导的操作按钮。'
      }, {
        attachTo: {
          element: document.querySelector('#main-btn'),
          on: 'auto'
        },
        title: '操作按钮',
        text: '操作按钮操作按钮操作按钮操作按钮。',
        buttons: [{
          action () {
            return this.cancel()
          },
          text: '完成'
        }]
      }])

      driver.start()
    },
    onOpenDriver2 () {
      const driver = shepherd()

      driver.addSteps([{
        attachTo: {
          element: document.querySelector('#header-main'),
          on: 'auto'
        },
        title: '顶部导航',
        text: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。',
        buttons: [{
          action () {
            return this.next()
          },
          text: '下一步'
        }]
      }, {
        attachTo: {
          element: document.querySelector('#driver-btn2'),
          on: 'auto'
        },
        title: '新手引导',
        text: '点击打开新手引导的操作按钮。'
      }, {
        attachTo: {
          element: document.querySelector('#main-btn2'),
          on: 'auto'
        },
        title: '操作按钮',
        text: '操作按钮操作按钮操作按钮操作按钮。',
        buttons: [{
          action () {
            return this.cancel()
          },
          text: '完成'
        }]
      }])

      driver.start()
    }
  }
}
</script>
