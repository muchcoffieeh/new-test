import React from 'react'
import Scrollspy from 'react-scrollspy'
import '../utils/css/components/toc.css'

export default function Toc(props) {
const { post } = props
let url = post.items.map(function(post) {
  return post['url'].substring(1)
})

return (
  <nav>
    <Scrollspy items={url} currentClassName="is-current" className="toc-list">
      {post.items.map(p => (
        <li key={p.url}>
          <a href={p.url}>{p.title}</a>
        </li>
      ))}
    </Scrollspy>
  </nav>
)
}