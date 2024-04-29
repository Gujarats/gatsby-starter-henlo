import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
            summary
            webServices
          }
          description
          siteUrl
          social {
            facebook
            instagram
            whatsapp
            whatsapp2
            location
          }
        }
      }
    }
  `)

  return data
}
