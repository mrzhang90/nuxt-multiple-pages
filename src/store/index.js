export const state=()=>({
  content:""
})
export const mutations={
  add(state,obj){
    state.content=obj
  }
}