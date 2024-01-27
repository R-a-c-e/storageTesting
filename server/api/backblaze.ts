import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default defineEventHandler( async (event) => {
    // let photoData: {key: string, url: string}[] = []
    // Fetch list of objects from the S3 bucket
    const s3 = new S3Client({
        credentials: {
        accessKeyId: "004480ae262b5b90000000001",
        secretAccessKey: "K004/UJjSo4l6ZmrdFKL3CkMFm1ZGoc",
        },
        region: 'us-west-004',
        endpoint: "https://s3.us-west-004.backblazeb2.com",
    });

    const params = { Bucket: 'inqwellMediaStorage' };

    try {
        const data = await s3.send(new ListObjectsV2Command(params));

        // Extract photo URLs from the fetched data
        const photoData = data.Contents.map(async (object) => {
            
            console.log(object)
            const blob = await $fetch(`${"https://s3.us-west-004.backblazeb2.com"}/${object.Key}`, {
                headers: {

                }
            })
            const arrayBuffer = await blob.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer, 'base64')
            console.log(buffer)
            return { 
                key: object.Key,
                data: buffer,
            }
        });
        return photoData
    } catch (error) {
        console.error('Error fetching S3 objects:', error);
        return {'error': 'unable to fetch s3 objects'}
    }
    
})