export const state = ()=>({
    tags:[{name:"Not started",color:'#E99497',id:0},{name:"In Progress",color:'#F3C583',id:1},{name:"Completed",color:'#E8E46E',id:2}],

      content :[{
        title :"Do mathematics",
        tag:0,
        id:0,
        description:'Yes do it'
      },{
        title:"Internship assignment",
        tag:0,
        id:1,
        description:'Got selected?'
      },{
        title:"Call Sanjay ",
        tag:1,
        id:2,
        description:'Yea !!'
      },{
        title:"Watch Tenet",
        tag:1,
        id:3,
        description:'Time reversal is bullshit'
      }]
})
export const mutations ={
    addTask(state,task){
        task.id = state.content.length + 1;
        state.content.push(task)
    },
    update(state,task){
        console.log(task.id)
        console.log(state.content)
        var n =  state.content.filter(v=>{
            console.log(task.id,v.id,task.id !== v.id)
            return task.id != v.id
        }); 
        console.log(n)
        n.push(task)
        state.content = n
    },
    addTag(state,tag){
        state.tags.push(tag)
    },
    removeTask(state,id){
        state.content = state.content.filter(v=> {return v.id != id})
    },
    removeTag(state,id){
        state.tags = state.tags.filter(v=>{return v.id != id})
        state.content = state.content.filter(v=>{return v.tag != id})
    },
    moveTask(state,{taskId,tag}){

        var m  = state.content.map(v=>{
          console.log(v.id,taskId,v.id == taskId)
          if(v.id == taskId) {
            v.tag = tag;
            
          }
          return v;
        })
        console.log(m)
        state.content = m
    }

}