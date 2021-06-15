<template>
  <div class="card task-container" @drop="onDrop($event,tagId)" @dragenter.prevent @dragover.prevent>
  
    <div class="task-container-head">
    <div class="task-container-head-left"><b-tag :style="{'background-color':tagColor}" type="is-primary">{{tagName}}</b-tag> <span class="text-light ml-2 text-light">{{tasks.length}}</span></div>
     <div class="task-container-head-right">
     <nuxt-link :to="'/create/'+tagId"><b-icon pack="fas" icon="plus-square" size="is-small" class="mr-2 point"/></nuxt-link>
      <span @click="removeTag(tagId)"><b-icon pack="fas" icon="trash" size="is-small"  class="mr-2 point"/></span>
      
     </div>
    </div>
    <div class="task-container-list">
   <drag v-for="task in tasks" :key="task.id" :task="task"></drag>
       
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  props: ['tagName','tagColor','tagId'],
  computed:{
    ...mapState(['content']),
    tasks(){
      return this.content.filter(v=>v.tag == this.tagId)

    }
  },
  methods:{
    ...mapMutations(['removeTag','moveTask']),
    log(evt){
      console.log(evt)
    },
    onDrop(ev,to_tag){
      const taskId = ev.dataTransfer.getData("TaskId")
     
      this.moveTask({taskId,tag:to_tag})
    }
  }
}
</script>
