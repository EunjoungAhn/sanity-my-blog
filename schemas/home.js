export default {
  name: 'home',
  title: 'Home',
  type: 'documetn',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainPost',
      title: 'Main Post',
      type: 'reference',
      //reference에 어떤 객체를 넣을 것인지 설정
      to:{ type: "post" },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'mainPost.title'
    },
  },
};