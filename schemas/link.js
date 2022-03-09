export default {
  name: 'link',
  title: 'Link',
  //object하면 문서에 표현되지 않고, block 컨텐트 안에서만 사용 가능하다.
  type: 'object',
  fields: [
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'urlWithMetadata',
    },
  ],
  preview: {
    select : {
      //메타데이터로 얻어진 openGraph의 title을 가져오게 된다.
      title: 'metadata.openGraph.title',
      subtitle: 'metadata.openGraph.url',
    }
  }
}