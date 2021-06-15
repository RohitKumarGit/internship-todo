<template>
  <div class="task">

    <Card v-for="tag in tags" :tagId="tag.id" :key="tag.id" :tagName="tag.name" :tagColor="tag.color" ></Card>
    <div class="card task-container mt-3 create point">
    <div v-if="isCreate" @click="isCreate=false">Click to create status
    <b-icon pack="fas" icon="plus-square" size="is-small" class="ml-2 point"/>
    </div>
    <div v-else>
    <b-field label="Name">
            <b-input v-model="tname"></b-input>
             <b-button type="is-primary" outlined @click="create">Create</b-button>
              <b-button type="is-danger" outlined @click="isCreate=true">Cancel</b-button>
    </b-field>
    </div>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  name: 'HomePage',
  data(){
    return {
      isCreate:true,
      colors:['#DDDDDD','#3C8DAD','#3C8DAD','#E5B299','#5E8B7E'],
      tname:''
    }
  },
  computed:{
      ...mapState(["tags"])
  },
  methods:{
    ...mapMutations(['addTag']),
    create(){
      var data = {
          name :this.tname,
          color:this.colors[Math.floor(Math.random()*5)],
          id:this.tags.length+1
      }
      this.addTag(data)
      this.isCreate = true
    }
  }
}
</script>
