import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';

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
            
            /*console.log(object)
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
            }*/
            // Command Parameters
            const objectParams = {
                Bucket: 'inqwellMediaStorage',
                Key: object.Key
            }
            console.log(objectParams)
            // Send the request to S3
            const response = await s3.send(new GetObjectCommand(objectParams));
            //console.log(response.Body)
            // Transform the data into data we can use on the site. We may be able to switch this to the blob stuff, but this is from the stackoverflow post.
            //const objectString = response.Body.reduce((a, b) => {a + String.fromCharCode(b) }, "");
            //const objectData = btoa(objectString).replace(/.{76}(?=.)/g, '$&\n');
            const objectData = await response.Body?.transformToString("base64");
            console.log(response.Body?.transformToString("base64"))
            return {
                key: object.Key,
                data: objectData
            };
        });
        return photoData
    } catch (error) {
        console.error('Error fetching S3 objects:', error);
        return {'error': 'unable to fetch s3 objects'}
    }
    
})