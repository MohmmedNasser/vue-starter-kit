import { useHead } from '@unhead/vue'

interface SeoOptions {
  title: string
  description?: string
}

export function useSeo({ title, description }: SeoOptions) {
  useHead({
    title,
    meta: [
      { name: 'description', content: description || '' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description || '' }
    ]
  })
}
