<template>
    <div class="photo-card">
        <div class="photo-details">
            <span class="photo-name">{{ photo.key }}</span>
        </div>
    <img :src="photo.url" alt="Photo" class="photo-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      photo: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .photo-card {
    max-width: 50%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .photo-image {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .photo-details {
    padding: 10px;
  }
  
  .photo-name {
    font-size: 18px;
    font-weight: bold;
  }
  </style>