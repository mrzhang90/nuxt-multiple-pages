<template>
    <ul>
        <li v-for="todo in todos">
            <label>
                <input type="checkbox" :checked="todo.done" @change="toggle(todo)"/>
                <span :class="{done:todo.done}">{{todo.text}}</span>
                <button @click="remove(todo)">-</button>   
            </label>
        </li>
        <li>
            <input type="input" @keyup.enter="addTodo">
        </li>
    </ul>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        layout: 'index',
        computed:{
            todos(){
                return this.$store.state.todos.list;
            }
        },
        methods:{
            addTodo(e){
                this.$store.commit('todos/add',e.target.value)
                e.target.value=""
            },
            ...mapMutations({
                toggle:'todos/toggle',
                remove:'todos/remove'
            })
        }
    }
</script>
<style>
.done{
    text-decoration:line-through;
}
</style>
