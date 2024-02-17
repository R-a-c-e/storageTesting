import { S3Client, ListObjectsV2Command, GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3';
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    // let photoData: {key: string, url: string}[] = []
    // Fetch list of objects from the S3 bucket
    const s3 = new S3Client({
        credentials: {
            accessKeyId: runtimeConfig.AWS_ACCESS_KEY_ID,
            secretAccessKey: runtimeConfig.AWS_SECRET_ACCESS_KEY,
        },
        region: runtimeConfig.AWS_S3_REGION,
        endpoint: runtimeConfig.AWS_S3_ENDPOINT,
    });

    
    let data;
    try {
        let command = new ListObjectsCommand({ Bucket: runtimeConfig.AWS_S3_BUCKET_NAME });
        data = await s3.send(command);
        //console.log("Data:", data.Contents?.length);
    } catch (error) {
        console.error('Error running ListObjectsCommand:', error);
        return { 'error': 'unable to fetch s3 objects' }
    }
    // Extract photo URLs from the fetched data
    //const stuff = data.map((c) => c.keys);
    //console.log(stuff)

    // Get first 5
    const numPhotos = data.Contents?.length
    const shortList = data.Contents?.slice(0, numPhotos);
    const photoData = shortList.map(async (object) => {
        //console.log(object)
        if (object.Key.split(".").pop() !== "png" && object.Key.split(".").pop() !== "jpg" &&  object.Key.split(".").pop() !== "jpeg") {
            return;
        }

        let command = new GetObjectCommand({ Bucket: runtimeConfig.AWS_S3_BUCKET_NAME, Key: object.Key });
        let res = await s3.send(command);
        let imageData = "data:image/" + object.Key?.split(".").pop() + ";base64," + await res.Body?.transformToString("base64");
        //console.log(imageData)
        return { key: object.Key, url: imageData };
    });

    return await Promise.all(photoData);
});


// const firstObject = data.Contents[0];
    // try {
    //     let command = new GetObjectCommand({ Bucket: 'lmnts-files', Key: firstObject.Key });
    //     let res = await s3.send(command);
    //     let image = res.Body;

    //     return "data:image/jpg;base64," + await image?.transformToString("base64");

    // } catch (error) {
    //     console.error('Error getting object:', error);
    //     return {'error': 'unable to fetch s3 objects'}
    // }

    // return {'error': 'no images found'};

    // // let image = new Buffer(response.Body).toString("base64");
    // // image = "data:" + data.ContentType + ";base64," + image;
    // // return image;

    // // console.log("Response:", response.Body);
    // // const objectString = response.Body.reduce((a, b) => {a + String.fromCharCode(b) }, "");
    // // const objectData = btoa(objectString).replace(/.{76}(?=.)/g, '$&\n');
    // // return ("data:image/jpeg/png;base64," + objectData);

    // // const photoData = data.Contents.map(async (object) => {
    // //     return;
    // //     if (object.Key.split(".").pop() !== "png") {
    // //         return;
    // //     }

    //     // const objectParams = {
    //     //     Bucket: 'lmnts-files',
    //     //     Key: object.Key
    //     // }

    //     // const response = await s3.send(new GetObjectCommand(objectParams));

    //     // const objectData = await response.Body?.transformToString("base64");
    //     // // console.log(object.Key)
    //     // const objectString = "data:image/jpeg/png;base64,".concat(objectData)
    //     // // this console.log needs to have the identifier at the beginning
    //     // // console.log(objectString.substring(0,100))
    //     // return {
    //     //     key: object.Key,
    //     //     //data: "data:image/jpeg/png;base64,".concat(objectData)
    //     //     data: objectString
    //     // };
    //     /*console.log(object)
    //     const blob = await $fetch(`${"https://s3.us-west-004.backblazeb2.com"}/${object.Key}`, {
    //         headers: {

    //         }
    //     })
    //     const arrayBuffer = await blob.arrayBuffer()
    //     const buffer = Buffer.from(arrayBuffer, 'base64')
    //     console.log(buffer)
    //     return { 
    //         key: object.Key,
    //         data: buffer,
    //     }*/
    //     // Command Parameters
    //     // console.log(objectParams)
    //     // Send the request to S3
    //     //console.log(response.Body)
    //     // Transform the data into data we can use on the site. We may be able to switch this to the blob stuff, but this is from the stackoverflow post.
    //     //const objectString = response.Body.reduce((a, b) => {a + String.fromCharCode(b) }, "");
    //     //const objectData = btoa(objectString).replace(/.{76}(?=.)/g, '$&\n');
    // });
    // return photoData
    