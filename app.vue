<script setup>
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://miywuatqunvtxjmwxlbk.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peXd1YXRxdW52dHhqbXd4bGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MzAwOTIsImV4cCI6MTk5MzEwNjA5Mn0._9Kd5Bavm5a6S-InWfRxLTN2-xExXLVIYjY1hYbvhbk')
const supaData = ref([])
const photoData = ref([])

async function getData() {
  const { data } = await supabase.from('dev_journals').select('id, title')
  supaData.value = data
  console.log(supaData)
  //console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY,process.env.AWS_S3_ENDPOINT)



  // Fetch list of objects from the S3 bucket
  /*const s3 = new S3Client({
    credentials: {
      accessKeyId: "004480ae262b5b90000000001",
      secretAccessKey: "K004/UJjSo4l6ZmrdFKL3CkMFm1ZGoc",
    },
    region: 'us-west-004', // ??
    endpoint: "https://s3.us-west-004.backblazeb2.com",
  });

  const params = { Bucket: 'inqwellMediaStorage' };

  try {
    const data = await s3.send(new ListObjectsV2Command(params));

    // Extract photo URLs from the fetched data
    photoData.value = data.Contents.map(object => ({
      key: object.Key,
      url: `${"https://s3.us-west-004.backblazeb2.com"}/${object.Key}`,
    }));
  } catch (error) {
    console.error('Error fetching S3 objects:', error);
  }*/
}

onMounted( async () => {
  getData()
  photoData.value = await useFetch('/api/backblaze')
})
</script>

<template>
  <div>
    <p>howdy world</p>
    <ul>
      <li v-for="journal in supaData" :key="journal.id">{{ journal.title }}</li>
    </ul>
    <span>{{ photoData }}</span>
    <h2>Photos from inqwellMediaStorage Bucket</h2>
    <div v-for="photo in photoData.value" :key="photo.key">
      <img :src="photo.data" alt="Photo">
    </div>
  </div>
</template>
