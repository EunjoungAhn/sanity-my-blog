export default {
  name: 'home',
  title: 'Home',
  type: 'document',
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
      type: 'string',
      to: {type: 'post'},
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'mainPost.title',
    },
  },
};
