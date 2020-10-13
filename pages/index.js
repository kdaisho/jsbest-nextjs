/** @jsx jsx */
import { jsx } from 'theme-ui'
import Course from 'src/components/Course'

export default function Home({ courses }) {
  return (
    <div>
      {courses.map(course => (
        <div key={course.slug} sx={{ variant: 'containers.card' }}>
          <Course course={course} />
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  // const url =
  //   process.env.NODE_ENV === 'development'
  //     ? process.env.DEV_URL
  //     : process.env.PRODUCTION_URL
  const url = process.env.DEV_URL
  const res = await fetch(`${url}/api/`)
  const { courses } = await res.json()

  return {
    props: { courses },
  }
}
