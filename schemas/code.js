export default {
  name: 'code',
  title: 'Code',
  //object하면 문서에 표현되지 않고, block 컨텐트 안에서만 사용 가능하다.
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}