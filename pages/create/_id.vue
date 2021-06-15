<template>
    <div class="card p-4">
   
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
            <b-input maxlength="200" type="textarea" v-model="description"></b-input>
        </b-field>
        <b-button type="is-primary" @click="add()">Add</b-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  computed:{
      ...mapState(['tags'])
  },
  data(){
      return {
          tag:this.$route.params.id,
          title:"",
          description:""
      }
  },
  methods:{
      ...mapMutations(['addTask']),
      add(){
          if(this.title.length === 0 || this.tag === null) {
              alert("Title is required!")
              return 
          }
          const data = {
              tag:this.tag,
              title : this.title,
              description : this.description
          }
          this.addTask(data);
          this.$router.push('/')
      }
  }
}
</script>
