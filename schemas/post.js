export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      //url을 사용할때 쓰는 것 (Title 기준)
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      file: [
        {
          name: 'alt',
          title: 'alt',
          type: 'string',
          options: {
            isHighlighted: true,
            validation: Rule => Rule.required(),
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: {type: 'tag'},
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
