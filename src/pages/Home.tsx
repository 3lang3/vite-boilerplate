import { Layout } from '@/systems/Core'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

export const Home = () => {
  return (
    <Layout title="Home">
      <div css={styles.root}>Hello Vite</div>
      <Link to="/profile">profile</Link>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`p-5`};
  `,
}
