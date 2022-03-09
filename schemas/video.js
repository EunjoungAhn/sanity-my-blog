export default {
  name: 'video',
  title: 'Video',
  //object하면 문서에 표현되지 않고, block 컨텐트 안에서만 사용 가능하다.
  type: 'object',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'urlWithMetadata',
    },
  ],
  preview: {
    select : {
      title: 'caption',
      subtitle: 'metadata.url',
    }
  }
}