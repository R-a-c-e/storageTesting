<template>
	<div>
		<h2>Photos from inqwellMediaStorage Bucket</h2>
		<div v-for="photo in photoData?.data" :key="photo.key" style="display: flex; flex-direction: column;">
			<span>{{ photo.key }}:</span>
			<img :src='photo.url' alt="Photo" width="300" />
		</div>
	</div>
</template>


<script setup lang="ts">
import type { Database, Tables } from "~/types/database.types";
const client = useSupabaseClient<Database>();
const photoData = ref();

const { data: supaData } = await useAsyncData("supaData", async () => {
	const { data, error } = await client
		.from("dev_journals")
		.select("id, title");
	return data;
});

onMounted(async () => {
	photoData.value = await useFetch('/api/backblaze');
});
</script>