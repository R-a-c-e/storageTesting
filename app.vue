<template>
	<div class="container">
		<div class="modern-heading">
			<h2>Photos from inqwellMediaStorage Bucket</h2>
		</div>
		<div v-for="photo in photoData?.data" :key="photo.key">
			<div class="photo-center">
				<PhotoCard :photo="photo" />
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { defineComponent } from 'vue';
import PhotoCard from '@/components/PhotoCard.vue';
import type { Database, Tables } from "~/types/database.types";
const client = useSupabaseClient<Database>();
const photoData = ref();

const { data: supaData } = await useAsyncData("supaData", async () => {
	const { data, error } = await client
		.from("dev_journals")
		.select("id, title");
	return data;
});

const handleDrop = event => {
	event.preventDefault();
	const files = event.dataTransfer.files;
	// Do something with the dropped files
	console.log(files);
};

defineComponent({
  components: {
    PhotoCard
  },
  setup() {
    const photo = {
      key: 'example.jpg',
      url: 'https://example.com/example.jpg'
    };
    
    return {
      photo
    };
  }
});

onMounted(async () => {
	photoData.value = await useFetch('/api/backblaze');
});
</script>

<style>
.photo-center{
	display: flex;
    flex-direction: column;
    align-items: center; /* Center the content horizontally */
    margin-bottom: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modern-heading {
  font-size: 2rem; /* Adjust the font size to your preference */
  font-weight: bold; /* Make the text bold */
  color: #333; /* Set the text color */
  /* Add additional styles for a modern look */
  /* For example, you can add font-family, text-transform, letter-spacing, etc. */
}
</style>