import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  description,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <h1 class="title">{title}</h1>
      <p class="subtitle">{description}</p>
      <BlogRoll />
      <div className="column is-12 has-text-centered">
        <Link className="btn" to="/blog">
          Read more
        </Link>
      </div>
    </div>
  </section>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`
