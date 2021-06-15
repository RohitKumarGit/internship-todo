<template>
<nuxt-link :to="'/view/'+task.id">
  <div class="card task-item" draggable="true" @dragstart="dragStart($event,task)">
  <div class="task-item-left">{{task.title}}</div>
    <div class="task-item-right"> <b-icon pack="fas" icon="edit" size="is-small"  class="mr-2 point"/></div>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props:["task"],
  methods:{
    dragStart(ev,task){
     
      ev.dataTransfer.dropEffect = 'move'
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.setData("TaskId",task.id)
    }
  }
}
</script>
