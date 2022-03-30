<template>
<div class="container">
  <SideBar />
  <AddProduct />
</div>
</template>

<script>
import AddProduct from '../components/Admin/AddProduct.vue'
import SideBar from '../components/Admin/SideBar.vue'
export default {
    components:{ AddProduct, SideBar }

}
</script>

<style scoped>
.container{
    display: flex;
}
</style>