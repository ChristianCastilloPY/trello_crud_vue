// Instanciando Vue
var app = new Vue({
  el: '#app',
  data: {
    lists: []
  },
  methods: {
    addList(){
      const newList = {
        name: '',
        status: 'creating',

        items:[]
      }
      this.lists.push(newList)
    },
    saveList(list){
      list.status = 'saved'
    },
    removeList(index){
      this.lists.splice(index, 1)
    },
    additems(index){
      const newItem = {
          title: '' 
      }
      this.lists[index].items.push(newItem)
    },

    removeitem(index,indice){
      this.lists[index].items.splice(indice,1)
    }
  }
})