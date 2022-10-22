import { useRouter } from 'next/router'
import Head from '../../components/Head'

const ErrorPage = () => {
  const router = useRouter()
  const { type } = router.query

  return (
    <>
      <Head title='Error • Full Context Development'/>
      <p>Error: {type}</p>
    </>
  )
}

export default ErrorPage