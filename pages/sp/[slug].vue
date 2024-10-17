<template>
  <div>
  <VNWAStepSlides :name="data.name" :steps="data.steps" />
  </div>
</template>

<script  setup>
const data = {
    "name" :"Các bước sử dụng",
    "steps": [
        {
            "name":"1. Tạo lớp Sơn Lì",
            "desc":"Descasd asdg asdg asdg asdg",
            "products":[
                {
                    "name":"may danh bong",
                    "slug":"may-danh-bong",
                    "image":"https://cdn.neonail.it/lp-edu/Links/step%20by%20step/Krok%204.png",
                    "price":149
                },
                {
                    "name":"may danh bong",
                    "slug":"may-danh-bong",
                    "image":"https://cdn.neonail.it/lp-edu/Links/step%20by%20step/Krok%204.png",
                    "price":149
                }
            ]
        },
        {
            "name":"2. buoc 2",
            "desc":"Descasd asdg asdg asdg asdg",
            "products":[
                {
                    "name":"may danh bong",
                    "slug":"may-danh-bong",
                    "image":"https://cdn.neonail.it/lp-edu/Links/step%20by%20step/Krok%204.png",
                    "price":1000
                }
            ]
        },
        {
            "name":"3. buoc 3",
            "desc":"descript buoc 3",
            "products":[ ]
        }
    ]
};
</script>

<style>

</style>