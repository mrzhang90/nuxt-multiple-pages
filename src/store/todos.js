export const state=()=>({
        list:[]
})
export const mutations={
    add(state,text){
        state.list.push({
            text,
            done:false
        })
    },
    toggle(state,todo){
        todo.done=!todo.done;
    },
    remove(state,todo){
        state.list.splice(state.list.indexOf(todo),1)
    }
}