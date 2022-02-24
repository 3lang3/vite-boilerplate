import { Layout } from '@/systems/Core'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

export const Profile = () => {
  return (
    <Layout title="Profile">
      <div css={styles.root}>3lang3 Profile</div>
      <Link to="/">home</Link>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`p-5`};
  `,
}
