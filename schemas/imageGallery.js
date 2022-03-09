export default {
  name: 'imageGallery',
  title: 'ImageGallery',
  //object하면 문서에 표현되지 않고, block 컨텐트 안에서만 사용 가능하다.
  type: 'object',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          hostpot: true,
          fields: [
            {
                name: 'alt',
                title: 'alt',
                type: 'string',
                options: {
                  isHighlighted: true,
                },
                validation: Rule => Rule.required(),
            },
          ],
          validation: Rule => Rule.required(),
        },
      ],
      //최대 4개의 이미지를 등록할 수 있다.
      validation: Rule => Rule.required().max(4),
    },
  ],
}