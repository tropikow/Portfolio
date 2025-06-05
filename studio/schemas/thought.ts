import { Rule } from '@sanity/types'

export default {
  name: 'thought',
  title: 'Thought',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tech', value: 'tech' },
          { title: 'Career', value: 'career' },
          { title: 'Learning', value: 'learning' },
          { title: 'Opinion', value: 'opinion' }
        ]
      },
      validation: (rule: Rule) => rule.required()
    }
  ]
} 