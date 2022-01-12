<template>
  <div class="layout-box-wrap">
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <div v-if="description" class="description">
      {{ description }}
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-box',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.layout-box-wrap {
  margin-bottom: 32px;
  padding: 24px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  .title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    padding-bottom: 8px;
  }
  .description {
    color: #5e6d82;
    padding-bottom: 8px;
  }
  .card-content {
    padding-top: 16px;
  }
}
</style>
