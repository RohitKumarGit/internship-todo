<template>
    <div class="card p-4">
            <div style="display:none">{{task}}</div>
         <b-field label="Title">
            <b-input v-model="title"></b-input>
        </b-field>
        <b-field label="Select a tag">
            <b-select placeholder="Select a tag" rounded v-model="tag">
                <option
                    v-for="option in tags"
                    :value="option.id"
                    :key="option.id">
                    {{ option.name }}
                </option>
            </b-select>
        </b-field>
        <b-field label="Desciption" >
            <b-input maxlength="200" type="textarea" v-model="desc"></b-input>
        </b-field>
        <b-button type="is-primary" @click="updatetask">update</b-button>
        <b-button type="is-danger" @click="remove">Remove</b-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  computed:{
      ...mapState(['tags','content']),
      task(){
          const d =  this.content.find(v=> v.id == this.$route.params.id) 
          this.title = d.title
          this.desc = d.description
          this.tag = d.tag
          return d
      }
  },
  data(){
      return {
          tag:null,
         title:"",
          desc:""
      }
  },
  methods:{
      ...mapMutations(['update','removeTask']),
      updatetask(){
          if(this.title.length === 0 || this.tag === null) {
              alert("Title is required!")
              return 
          }
          const data = {
              id:this.$route.params.id,
              title:this.title,
              description : this.desc,
              tag:this.tag
          }
        this.update(data)
        this.$router.push('/')
      },
      remove(){
          this.removeTask(this.$route.params.id)
          this.$router.push('/')
      }
  }
}
</script>
