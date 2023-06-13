<script>

export default {
    name : "PageResultsCard",
}
</script>

<template>

<div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
    <div class="card">
        <div class="row g-0">
            <div class="card-img col-4">
            <img src="../assets/images/review_4-compressor-2.jpg" class="card-img-top" alt="...">
        </div>
      <div class="card-body col-4">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
        </div>
        
    </div>
  </div>
  <div class="col">
    <div class="card">
        <div class="row g-0">
            <div class="card-img col-4">
            <img src="../assets/images/review_4-compressor-2.jpg" class="card-img-top" alt="...">
        </div>
      <div class="card-body col-4">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
        </div>
        
    </div>
  </div>
  <div class="col">
    <div class="card">
        <div class="row g-0">
            <div class="card-img col-4">
            <img src="../assets/images/review_4-compressor-2.jpg" class="card-img-top" alt="...">
        </div>
      <div class="card-body col-4">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
        </div>
        
    </div>
  </div>
  <div class="col">
    <div class="card">
        <div class="row g-0">
            <div class="card-img col-4">
            <img src="../assets/images/review_4-compressor-2.jpg" class="card-img-top" alt="...">
        </div>
      <div class="card-body col-4">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
        </div>
        
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables.scss';
@import '../styles/partials/variables';

.card-img{
    width: 150px;
    img{
        padding: 20px;
        width: 150px;
        height: 150px;
    }
}
.card-body{
    margin-top: 20px;
    width: calc(100% - 150px);
    font-size: 10px;
    padding: 0;
    h5{
    }
}
</style>

