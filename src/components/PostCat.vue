<template>
  <h2>作成</h2>
  <div class="ly_input">
    <div class="ly_input_inner">
      画像:<input type="file" accept="image/jpeg,image/png,image/gif" @change="uploadFile">  
    </div>
    <button @click="create">登録</button>
  </div>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { uploadCat} from '../CatFirebase'

export default defineComponent({
  setup() {
    const fileData =ref()

    const uploadFile = (event)=>{
      fileData.value = event.target.files[0]
    }
    const create=()=>{
      uploadCat(fileData.value)
    }
    return{
      create,
      uploadFile,
      fileData
    }
  },
})
</script>
<style lang="scss">
h2{
  border-left:10px solid blue;
  padding-left:5px; ;
}

.ly_input{
  padding:10px;
  max-width: 900px;
  margin:auto;
}
.ly_input_inner{
  margin:10px;
}
</style>